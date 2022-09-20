import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
position:absolute;
display:flex;
justify-content:center;
background:rgba(0,0,0,0.4);
align-items:center;
width:100%;
height:100%;
top: 0;
left:0;`;
export const ModalWrapper = styled.div`
    width:400px;
    height:300px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #ededed;
    color; #000;
    padding:1rem;
    display: grid;
    grid-template-columns:1fr 1fr;
    position:relative;
    border-radius:10px;
    `;
export const CloseModalButton = styled(MdClose)`
    cursor:pointer;
    position:absolute;
    top:1rem;
    right:1rem;
    margin:0;
    width:24px;
    height:24px;
    padding:0;
    z-index:100;
    margin-right: 0 !important;`;