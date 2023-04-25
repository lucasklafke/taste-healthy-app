import Header from '@/components/headers/simpleHeader/Header'
import React from 'react'
import { PageContainer } from './styles'

interface Children {
  children: React.ReactNode
}
export function FormularyDefaultPage({children}: Children) {
  return (
    <PageContainer>
      <Header />
      {children}
    </PageContainer>
  )
}