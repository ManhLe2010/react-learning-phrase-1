import Head from 'next/head';

const AppLayout = (props) => (
  <div>
    <Head>
      {/* Lam cach nay, tat ca cac children cua file AppLayout deu se co css cua Bootstap */}
      <link rel='stylesheet' href='/static/css/bootstrap.min.css' />
    </Head>
    {props.children}
  </div>
)

export default AppLayout;
