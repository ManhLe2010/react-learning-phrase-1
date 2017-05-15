import React from 'react';
import Header from './Header';
import Head from 'next/head';
import stylesheet from 'static/styles.scss'

const AppLayout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header></Header>
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default AppLayout;
