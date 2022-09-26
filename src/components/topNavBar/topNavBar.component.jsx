import { useState } from 'react';
import { NavLinksContainer, NavLink, TopNavWrapper, MenuButton } from './topNavBar.style';
import { MenuItems } from '../headerEssentials/menuItems.component';
import './test.css';
import Logo from '../logo/logo.component';
const TopNavContainer = () => {
    const [state, setState] = useState(false);

    const handleClick = () => setState(!state)
    return (
        <TopNavWrapper >
            <MenuButton  onClick ={handleClick}>
                {state ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="m19.71,4.14c0.79,-0.93 0.79,-2.44 0,-3.36s-2.06,-0.93 -2.86,
                        0l-6.63,7.83l-6.64,-7.82c-0.79,-0.93 -2.06,-0.93 -2.86,0s-0.79,2.44 0,
                        3.36l6.64,7.82l-6.63,7.83c-0.79,0.93 -0.79,2.44 0,3.36s2.06,0.93 2.86,
                        0l6.63,-7.83l6.64,7.82c0.79,0.93 2.06,0.93 2.86,0s0.79,-2.44 0,-3.36l-6.64,
                        -7.82l6.63,-7.83z" 
                        id="svg_1"/>
                    </svg> : 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="m0,2c0,-1.11 0.76,-2 1.71,-2l20.47,0c0.94,0 1.71,0.89 1.71,
                        2s-0.76,2 -1.71,2l-20.47,0c-0.94,0 -1.71,-0.89 -1.71,-2zm0,10c0,-1.11 0.76,
                        -2 1.71,-2l20.47,0c0.94,0 1.71,0.89 1.71,2s-0.76,2 -1.71,2l-20.47,0c-0.94,
                        0 -1.71,-0.89 -1.71,-2zm23.89,10c0,1.11 -0.76,2 -1.71,2l-20.47,0c-0.94,0 
                        -1.71,-0.89 -1.71,-2s0.76,-2 1.71,-2l20.47,0c0.94,0 1.71,0.89 1.71,2z" 
                        id="svg_1"/> 
                    </svg>
                }
            </MenuButton>

            {/* <Logo /> */}
            <NavLinksContainer className={state ? 'active' : 'hide'}>
                {MenuItems.map((item, index) => {
                    return (
                        <NavLink onClick ={handleClick} key={index} to={item.url}>{item.tille}</NavLink>
                    )
                })}       
            </NavLinksContainer>
        </TopNavWrapper>       
    );
};
export default TopNavContainer;