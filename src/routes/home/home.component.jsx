import { Outlet } from 'react-router-dom';
import CustomColection from '../../components/custom-colection/custom-colection.component';
const Home = () =>{
  return (
    <div>
        <Outlet />
        <CustomColection />
        <div>End section</div>
    </div>
  );
}

export default Home;