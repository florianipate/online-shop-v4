import { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, CloseModalButton, ModalWrapper } from "./signInModal.style";
// import { MdClose } from 'react-icons/md';

const SignInModal = ({showModal, setShowModal}) =>{
    const modalRef = useRef();
    const animation = useSpring({
        config: {
            duration: 550
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    const closeModal = e =>{
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    }

    return(
        <>
        {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
            <ModalWrapper>
                Modal
                <CloseModalButton aria-label="Close Modal" onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
            </animated.div>
          </Background> 
        ):null}
        </>
    );
};
export default SignInModal;