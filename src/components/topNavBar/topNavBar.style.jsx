import styled from 'styled-components';
import { Link } from "react-router-dom";
export const TopNavWrapper = styled.div`
display:flex;
align-items:end;
`
export const NavLinksContainer = styled.div`
width: 100%;
z-index:-1;
overflow:hidden;
background-color:#dedede;
//height:0;
transition: transform 1s ease;
//transform: translateY(-130%);
@media(min-width:780px){
    display:flex;
    justify-content: flex-end;
}`
export const NavLink = styled(Link)`
display:block;
text-decoration: none;
padding: 0 1.5rem; 
@media(min-width:780px){
    display:flex;
}`
export const MenuButton = styled.div`
position:absolute;
top:0;
display:block;
@media(min-width:780px){
    display:none;
}`
