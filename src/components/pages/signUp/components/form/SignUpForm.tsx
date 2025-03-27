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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/atoms/form'
import Link from 'next/link'
import { UseFormReturn } from 'react-hook-form'

type SignUpFormValues = {
  email: string
  password: string
  confirmPassword: string
}

type PresenterProps = {
  form: UseFormReturn<SignUpFormValues>
  onSubmit: (data: SignUpFormValues) => Promise<void>
}

export const SignUpForm = ({ form, onSubmit }: PresenterProps) => {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">新規登録</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-8 px-8">
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: 'メールアドレスを入力してください',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '有効なメールアドレスを入力してください',
                },
              }}
              render={({ field }) => (
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
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              rules={{
                required: 'パスワードを入力してください',
                minLength: {
                  value: 6,
                  message: 'パスワードは6文字以上である必要があります',
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="password" className="text-base">
                    パスワード
                  </Label>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      className="h-12 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              rules={{
                required: 'パスワードを再入力してください',
                minLength: {
                  value: 6,
                  message: 'パスワードは6文字以上である必要があります',
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="confirmPassword" className="text-base">
                    パスワード（確認）
                  </Label>
                  <FormControl>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="h-12 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
      </Form>
    </Card>
  )
}
