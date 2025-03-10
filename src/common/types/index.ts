import { ReactNode } from 'react'

export type UserType = {
  displayName: string | null
  phoneNumber: string | null
  photoURL: string | null
  providerId: string
  uid: string
}

export type AuthContextState = {
  currentUser: UserType | null
}

export type ReactNodeProps = {
  children?: ReactNode
}

export type SignInFormType = {
  email: string
  password: string
}

export type SignUpFormType = {
  name: string
  email: string
  password: string
}

export type TodoType = {
  title: string
  description: string
}
