import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
display:flex;
text-decoration: none;
color: black;
align-items: end;
min-width: 10rem;
 & h3 {
    margin:0;
 }`