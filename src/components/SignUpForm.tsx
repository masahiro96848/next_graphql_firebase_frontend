import { useForm, FormProvider } from 'react-hook-form'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/atoms/card'
import { Input } from '@/components/atoms/input'
import { Button } from '@/components/atoms/button'
import { Label } from '@/components/atoms/label'
import { FormControl, FormItem, FormMessage } from '@/components/atoms/form'
import Link from 'next/link'
import { useSignUpMutation } from '@/generated/graphql'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'

type SignUpFormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const SignUpForm = () => {
  const router = useRouter()
  const [signUp] = useSignUpMutation()
  const methods = useForm<SignUpFormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = methods

  const handleSignUp = async (data: SignUpFormValues) => {
    try {
      const auth = getAuth()
      // Firebaseでユーザーを作成
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      const firebaseUId = userCredential.user.uid

      await signUp({
        variables: {
          input: {
            name: data.name,
            email: data.email,
            firebaseUId: firebaseUId,
            password: data.password,
          },
        },
      })
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormProvider {...methods}>
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">新規登録</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <CardContent className="space-y-8 px-8">
            <FormItem>
              <Label htmlFor="name" className="text-base">
                ニックネーム
              </Label>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="例: 山田太郎"
                  className="h-12 text-base"
                  {...register('name', {
                    required: '名前を入力してください',
                  })}
                />
              </FormControl>
              <FormMessage>{errors.name && errors.name.message}</FormMessage>
            </FormItem>
            <FormItem>
              <Label htmlFor="email" className="text-base">
                メールアドレス
              </Label>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  className="h-12 text-base"
                  {...register('email', {
                    required: 'メールアドレスを入力してください',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: '有効なメールアドレスを入力してください',
                    },
                  })}
                />
              </FormControl>
              <FormMessage>{errors.email && errors.email.message}</FormMessage>
            </FormItem>
            <FormItem>
              <Label htmlFor="password" className="text-base">
                パスワード
              </Label>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  className="h-12 text-base"
                  {...register('password', {
                    required: 'パスワードを入力してください',
                    minLength: {
                      value: 8,
                      message: 'パスワードは8文字以上である必要があります',
                    },
                  })}
                />
              </FormControl>
              <FormMessage>
                {errors.password && errors.password.message}
              </FormMessage>
            </FormItem>
            <FormItem className="space-y-4">
              <Label htmlFor="confirmPassword" className="text-base">
                パスワード(再確認)
              </Label>
              <FormControl>
                <Input
                  id="confirmPassword"
                  type="password"
                  className="h-12 text-base"
                  {...register('confirmPassword', {
                    required: 'パスワードを再入力してください',
                    validate: (value) =>
                      value === getValues('password') ||
                      'パスワードが一致しません',
                  })}
                />
              </FormControl>
              <FormMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormMessage>
            </FormItem>
          </CardContent>
          <CardFooter className="pt-12 px-8 pb-8">
            <Button type="submit" className="w-full h-12 text-base">
              新規登録
            </Button>
          </CardFooter>
          <div className="flex items-center justify-center">
            <Link href="/signin" className="text-center text-sm text-gray-500">
              ログインはこちら
            </Link>
          </div>
        </form>
      </Card>
    </FormProvider>
  )
}
