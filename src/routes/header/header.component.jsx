import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import HeaderEssentials from "../../components/headerEssentials/headerEssentials.component";

const Header = () =>{
    return(
        <Fragment>
            <div>
                <HeaderEssentials />
                <h1>I Am the Heade</h1>
            </div>
            <Outlet />
        </Fragment>
    );
}
export default Header;