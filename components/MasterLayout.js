import React from 'react';
import Head from 'next/head';
import Header from './Header';
//Import stylesheet
import vendorsheet from 'styles/vendor.scss';
import mastersheet from './MasterLayout.scss';
// If you dont have scss, just import css.
// import vendorsheet from 'styles/vendor.css';
// import mastersheet from './MasterLayout.css';

const MasterLayout = (props) => (
  <div>
    {/* Customize head tag of the page */}
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Import Global stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: vendorsheet }} />
      <title>NextJS Learning</title>
    </Head>
    {/* End customize head tag*/}
    {/* Page body */}
    <div>
      <Header />
      {/* Import Local stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: mastersheet }}></style>
      {/* Use some bootstrap css classes */}
      <div className="p-5">
        <div className="container">
          {props.children}
        </div>
      </div>
    </div>
  </div>
)

export default MasterLayout;
