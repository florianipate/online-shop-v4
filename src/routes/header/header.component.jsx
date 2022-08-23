import { Outlet } from "react-router-dom"
import HeaderEssentials from "../../components/headerEssentials/headerEssentials.component";

const Header = () =>{
    return(
        <div>
            <div>
                <HeaderEssentials />
                <h1>I Am the Heade</h1>
            </div>
            <Outlet />
        </div>
    );
}
export default Header;