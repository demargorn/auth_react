const Modal = ({ isHidden, children }) => {
   if (isHidden) {
      return null;
   }
   return <div className='modal'>{children}</div>;
};

export default Modal;
