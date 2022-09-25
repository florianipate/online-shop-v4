import { NavLinksContainer, NavLink, TopNavWrapper } from './topNavBar.style';
import { MenuItems } from './menuItems.component';
import Logo from '../logo/logo.component';
const TopNavContainer = () => {
    return (
        <TopNavWrapper >
            <Logo />
            <NavLinksContainer>
                {MenuItems.map((item, index) => {
                    return (
                        <NavLink key={index} to={item.url}>{item.tille}</NavLink>
                    )
                })}       
            </NavLinksContainer>
        </TopNavWrapper>
        
    );
};
export default TopNavContainer;