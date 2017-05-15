import MasterLayout from '../components/MasterLayout';
import Link from 'next/link';

const Index = () => (
  <MasterLayout>
    <h1>Where do you want to go ?</h1>
    <div className="row">
      <div className="col-4">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">
              <Link href="/about"><a>About</a></Link>
            </h4>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsum...
            </div>
            <Link href="/about"><button className="btn btn-success mt-2">Read more</button></Link>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">
              <Link href="/users"><a>Users list</a></Link>
            </h4>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsum...
            </div>
            <Link href="/users"><button className="btn btn-warning mt-2">See more</button></Link>
          </div>
        </div>
      </div>
    </div>
  </MasterLayout>
)

export default Index;
