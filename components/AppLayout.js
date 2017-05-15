import Header from './Header';
import Head from 'next/head';

const AppLayout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header></Header>
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default AppLayout;
