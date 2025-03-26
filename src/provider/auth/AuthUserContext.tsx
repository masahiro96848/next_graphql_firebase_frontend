import { useUserInfo } from '@/hooks/auth/useUserInfo'
import { User } from 'firebase/auth'
import { createContext, ReactNode, useContext } from 'react'

export type AuthUserProps = {
  // null: 初期化前 = idle状態
  // User: 認証状態
  // false: 未認証状態
  authUser: User | null | false
}

const AuthUserContext = createContext<AuthUserProps>({
  authUser: null,
})

type PropsType = {
  children: ReactNode
}

export const AuthUserProvider = ({ children }: PropsType) => {
  const { authUser } = useUserInfo()

  return (
    <AuthUserContext.Provider value={{ authUser }}>
      {children}
    </AuthUserContext.Provider>
  )
}

export const useAuthUserContext = (): AuthUserProps =>
  useContext(AuthUserContext)
