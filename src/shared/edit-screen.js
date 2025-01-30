import { useNavigate } from "react-router-dom";
import { useModal } from "./modal-views/use-modal";

export const EditScreen = (openModal, closeModal, row, title, ScreenName, customSize, ApiHit,navigate,navigateTo, onClose) => {
    if(!openModal){
        navigate(navigateTo);    
    }
    else{
        openModal({ view: <ScreenName row={row} closeModal={closeModal} ApiHit={ApiHit} />, title: title || 'No Title', customSize: customSize + 'px' || '1020px', onClose : onClose})
    }
}