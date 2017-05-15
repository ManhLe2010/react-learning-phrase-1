import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Index = () => (
  <AppLayout>
    {/* Neu Head duoc su dung o day, se chi minh index la co css cua bootstrap */}
    <div>Hello World</div>
    <Link href='/about' prefetch><a>About</a></Link>
  </AppLayout>
)

export default Index;
