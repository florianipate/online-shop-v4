import { NavLinksContainer, NavLink, TopNavWrapper } from './topNavBar.style';

import Logo from '../logo/logo.component';
const TopNavContainer = () => {
    return (
        <TopNavWrapper >
            <Logo />
            <NavLinksContainer>
                <NavLink to = '/newin'>
                    LINK 1
                </NavLink>
                <NavLink to = '/link2'>
                    LINK 2
                </NavLink>
                <NavLink to = '/link3'>
                    LINK 3
                </NavLink>
                <NavLink to = '/link4'>
                    LINK 4
                </NavLink>
                <NavLink to = '/link5'>
                    LINK 5
                </NavLink>           
            </NavLinksContainer>
        </TopNavWrapper>
        
    );
};
export default TopNavContainer;