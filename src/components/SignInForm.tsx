import { useForm } from 'react-hook-form'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import Link from 'next/link'

type FormValues = {
  email: string
  password: string
}

export const SignInForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSignIn = async (data: FormValues) => {}

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">ログイン</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignIn)}>
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
          </CardContent>
          <CardFooter className="pt-12 px-8 pb-8">
            <Button type="submit" className="w-full h-12 text-base">
              ログイン
            </Button>
          </CardFooter>
          <div className="flex items-center justify-center">
            <Link href="/signup" className="text-center text-sm text-gray-500">
              新規登録はこちら
            </Link>
          </div>
        </form>
      </Form>
    </Card>
  )
}
