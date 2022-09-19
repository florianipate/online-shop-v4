import { NavLinksContainer, NavLink } from './topNavBar.style';

const TopNavContainer = () => {
    return (
        <NavLinksContainer>
            <NavLink to = '/link1'>
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
    );
};
export default TopNavContainer;