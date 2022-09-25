import { useState, } from 'react';
import SignInModal from '../signInModal/signInModal.component';
import { LinksContainer, 
    LinkItem, 
    DropdownArrow, 
    DropdownMenu,
    DropdownLink
 } from './headerEssentials.style';


const HeaderEssentials = () =>{
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    }
    return(
        <LinksContainer>
        <LinkItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="nm8ztvj78slrwyscsumzro3vk774m18"><title id="nm8ztvj78slrwyscsumzro3vk774m18">My Likes</title><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12.94 4.425L12 5.33l-.767-.736a5.378 5.378 0 00-4.697-1.52 5.362 5.362 0 00-3.968 2.96 5.512 5.512 0 001.014 6.3l8.42 8.67 8.414-8.67a5.516 5.516 0 001.014-6.31 5.357 5.357 0 00-3.964-2.953 5.39 5.39 0 00-4.524 1.354zm4.283.126a3.86 3.86 0 012.858 2.13l.093.202a4.016 4.016 0 01-.827 4.397L12 18.874l-7.35-7.594a4.013 4.013 0 01-.734-4.589 3.865 3.865 0 012.863-2.136c1.17-.192 2.36.16 3.23.944l1.993 1.911 1.807-1.737a3.899 3.899 0 013.415-1.122z" fill="#000"></path></g></svg>
            <span>My Likes</span>
        </LinkItem>
        <LinkItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ptogw698kkb01lumouj2r8pakep3jz8" className="navigation__bag-icon"><title id="ptogw698kkb01lumouj2r8pakep3jz8">Shopping Bag</title><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 2a5.252 5.252 0 015.155 4.25H21V22H3V6.25h3.845A5.252 5.252 0 0112 2zm7.5 5.75h-2.25V11h-1.5V7.75h-7.5V11h-1.5V7.75H4.5V20.5h15V7.75zM12 3.5a3.752 3.752 0 00-3.615 2.75h7.23A3.752 3.752 0 0012 3.5z" fill="#000"></path></g></svg>
            <span>Shopping Bag </span>
        </LinkItem>
        <LinkItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="icg7vps41w5qok2c05r03t2l8bh4ebl"><title id="icg7vps41w5qok2c05r03t2l8bh4ebl">My Account</title><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 13c4.746 0 8.86 4.029 8.996 8.742L21 22h-1.5c0-4.004-3.496-7.5-7.5-7.5-3.924 0-7.37 3.367-7.496 7.26L4.5 22H3c0-4.832 4.168-9 9-9zm0-11a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="#000"></path></g></svg>
            <span>Account</span>
            <DropdownArrow className="down-arrow"/>
            <DropdownMenu>
                <DropdownLink onClick={openModal}>
                    Log in
                </DropdownLink>
                <DropdownLink>
                    Sign up
                </DropdownLink>
                <SignInModal showModal={showModal} setShowModal = {setShowModal}/>
            </DropdownMenu>
        </LinkItem>
    </LinksContainer>
    );

}
export default HeaderEssentials;