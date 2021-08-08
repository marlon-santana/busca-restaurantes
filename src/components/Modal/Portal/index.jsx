import ReactDom from 'react-dom';

export const PortalModal = ({ children }) => {
    const Portal = document.getElementById('modal-root');
    return ReactDom.createPortal(children, portal);
};

export default PortalModal;