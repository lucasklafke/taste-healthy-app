/* eslint-disable no-unused-vars */
import React, { useContext, createContext, useReducer } from 'react'

type Action = {
  type: FormActions;
  payload: any;
};
type State = {
  currentStep: number;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  gender: string;
  error: string | boolean;
};
type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};
type signupProps = {
  children: React.ReactNode;
};

const initialData: State = {
  currentStep: 0,
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
  gender: '',
  error: false,
}
export enum FormActions {
  setCurrentStep,
  setEmail,
  setPassword,
  setConfirmPassword,
  setUsername,
  setGender,
  setError,
}

const signupReducer = (state: State, action: Action) => {
  switch (action.type) {
  case FormActions.setEmail:
    return { ...state, email: action.payload }
  case FormActions.setPassword:
    return { ...state, password: action.payload }
  case FormActions.setConfirmPassword:
    return { ...state, confirmPassword: action.payload }
  case FormActions.setGender:
    return { ...state, gender: action.payload }
  case FormActions.setUsername:
    return { ...state, username: action.payload }
  case FormActions.setError:
    return { ...state, error: action.payload }
  default:
    return state
  }
}

// create context
const SignupContext = createContext<ContextType | undefined>(undefined)
// create provider
export const SignupProvider = ({ children }: signupProps) => {
  const [state, dispatch] = useReducer(signupReducer, initialData)
  const value = { state, dispatch }
  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  )
}
// create provider hook
export const useSignupForm = () => {
  const context = useContext(SignupContext)
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context
}
