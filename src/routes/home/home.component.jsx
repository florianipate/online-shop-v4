import { Outlet } from 'react-router-dom';
import CustomColection from '../../components/custom-colection/custom-colection.component';
const Home = () =>{
  return (
    <div>
        <Outlet />
        <h1>Home Page</h1>
        <CustomColection />
    </div>
  );
}

export default Home;