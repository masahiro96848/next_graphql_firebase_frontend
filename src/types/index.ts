import { ReactNode } from 'react'

export type User = {
  displayName: string | null
  phoneNumber: string | null
  photoURL: string | null
  providerId: string
  uid: string
}

export type AuthContextState = {
  currentUser: User | null
}

export type ReactNodeProps = {
  children?: ReactNode
}

export type SignInForm = {
  email: string
  password: string
}

export type SignUpForm = {
  username: string
  email: string
  password: string
}

export type TodoForm = {
  title: string
  description: string
}
