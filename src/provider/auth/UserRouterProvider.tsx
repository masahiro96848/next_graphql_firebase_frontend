import { ReactNode, useEffect } from 'react'
import { useAuthUserContext } from './AuthUserContext'
import { useRouter } from 'next/router'
import { redirectAuthenticatedPath, skipAuthPath } from '@/utils/path/routing'

type PropsType = {
  children: ReactNode
}

export const UserRouterProvider = ({ children }: PropsType) => {
  const router = useRouter()
  const { authUser } = useAuthUserContext()
  const currentPath = router.pathname

  useEffect(() => {
    if (authUser === null) return

    // 未ログインの場合の処理
    if (authUser === false) {
      // スキップパスに含まれているか厳密に確認
      const isSkipAuth = skipAuthPath.some((path) => {
        // 完全一致するか、またはパスの先頭が一致し、その後にスラッシュが続く場合のみマッチ
        return (
          currentPath === path ||
          (path !== '/' && currentPath.startsWith(path + '/'))
        )
      })

      // 認証が必要なパスで未ログインの場合は/signinにリダイレクト
      if (!isSkipAuth) {
        router.push('/signin')
        return
      }
    }

    // ログイン済みでredirectAuthenticatedPathにアクセスした場合は/にリダイレクト
    if (authUser !== false) {
      const shouldRedirect = redirectAuthenticatedPath.some(
        (path) =>
          currentPath === path ||
          (path !== '/' && currentPath.startsWith(path + '/'))
      )
      if (shouldRedirect) {
        router.push('/')
        return
      }
    }
  }, [authUser, router, currentPath])

  return <>{children}</>
}
