import React, { Component } from 'react'
import Normalize from 'src/containers/Normalize'
import { PageProps } from 'src/interfaces/pageProps.interface'
import type { AppProps } from 'next/app'
import 'src/styles/fonts.css'

interface Props extends AppProps {
  Component: typeof Component
  pageProps: PageProps
}

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <Normalize>
      <Component {...pageProps} />
    </Normalize>
  )
}

export default MyApp
