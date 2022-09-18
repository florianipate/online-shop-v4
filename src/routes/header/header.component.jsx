import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import HeaderEssentials from "../../components/headerEssentials/headerEssentials.component";
import TopNavContainer from "../../components/topNavBar/topNavBar.component";

const Header = () =>{
    return(
        <Fragment>
            <div>
                <HeaderEssentials />
                <TopNavContainer />
            </div>
            <Outlet />
        </Fragment>
    );
}
export default Header;