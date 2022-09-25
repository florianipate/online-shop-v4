import styled from 'styled-components';
import { Link } from "react-router-dom";
export const TopNavWrapper = styled.div`
display:flex;
align-items:end;
background-color:#dedede;`
export const NavLinksContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
// height: 1.2rem;`
export const NavLink = styled(Link)`
text-decoration: none;
padding: 0 0.5rem; 
// height: 1.2rem;`
export const MenuButton = styled.div`
position:absolute;
top:0;
display:block;
@media(min-width:980px){
    display:none;
}`
