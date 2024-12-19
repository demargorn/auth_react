import { useState } from 'react';
import Modal from './Modal';
import AuthForm from './AuthForm';
import ModalResult from './ModalResult';
import '../styles.css';

const App = () => {
   const [isUnauthorized, setIsUnauthorized] = useState(true);
   const [user, setUser] = useState({});

   function auth(user) {
      setIsUnauthorized(false);
      setUser(user);
   }
   return (
      <div className='app'>
         <Modal isHidden={!isUnauthorized}>
            <AuthForm onAuth={auth} />
         </Modal>
         <ModalResult isHidden={isUnauthorized}>
            <div className='modal-form'>
               <div className='input'>
                  <output data-name>{user.name}</output>
                  <label />
               </div>
               <div className='input'>
                  <output data-email>{user.email}</output>
                  <label />
               </div>
               <div className='input'>
                  <output data-password>{user.password}</output>
                  <label />
               </div>
            </div>
         </ModalResult>
      </div>
   );
};

export default App;
