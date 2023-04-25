import React from 'react'
import { PageContainer } from './styles'
import Header from '@/components/headers/searchHeader/Header'
import Footer from '@/components/footers/feedFooter'
import theme from '@/themes/ApplicationTheme'
import { ThemeProvider } from 'styled-components'
interface DefaultPageProps {
  children: React.ReactNode;
}
// eslint-disable-next-line no-unused-vars
export default function DefaultPage({children}: DefaultPageProps) {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Header />
        {children}
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}