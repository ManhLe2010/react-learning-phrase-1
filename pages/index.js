import AppLayout from '../components/AppLayout';
import Link from 'next/link';

const Index = () => (
  <AppLayout>
    <div>Hello World</div>
    <Link href="/about">
      <a>Click to About</a>
    </Link>
  </AppLayout>
)

export default Index;
