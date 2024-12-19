const ModalResult = ({ isHidden, children }) => {
   if (isHidden) {
      return null;
   }
   return <div className='modal modal-result'>{children}</div>;
};

export default ModalResult;
