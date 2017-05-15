import React from 'react';
import Header from './Header';
import Head from 'next/head';
import stylesheet from 'static/styles.scss';
import mastersheet from './MasterLayout.scss';

const MasterLayout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Global stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <title>NextJS Learning</title>
    </Head>
    <div>
      {/* Local stylesheet */}
      <Header></Header>
      <style dangerouslySetInnerHTML={{ __html: mastersheet }}></style>
      <div className="body">
        <div className="container">
          {props.children}
        </div>
      </div>
    </div>
  </div>
)

export default MasterLayout;
