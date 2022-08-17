import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import '../styles/globals.css'


type NextPageWidthLayout = NextPage & {
  getLayout?: (page:ReactElement)=> JSX.Element;
}
type  AppPropsWhitLayout = AppProps &{
  Component:NextPageWidthLayout;
}


const  MyApp: React.FunctionComponent<AppPropsWhitLayout> = ({ Component, pageProps }) =>{

  const getLayout = Component.getLayout || ((page:ReactElement) => page);
  //return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
