import { NavLinksContainer, NavLink } from './topNavBar.style';

const TopNavContainer = () => {
    return (
        <NavLinksContainer>
            <NavLink to = '/newin'>
                LINK 1
            </NavLink>
            <NavLink to = '/newin'>
                LINK 2
            </NavLink>
            <NavLink to = '/newin'>
                LINK 3
            </NavLink>
            <NavLink to = '/newin'>
                LINK 4
            </NavLink>
            <NavLink to = '/newin'>
                LINK 5
            </NavLink>           
        </NavLinksContainer>
    );
};
export default TopNavContainer;