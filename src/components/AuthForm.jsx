import { useRef } from 'react';

const AuthForm = ({ onAuth }) => {
   const name = useRef(null);
   const email = useRef(null);
   const pass = useRef(null);

   function validateEmailInput(e) {
      const regex = /^[a-zA-Z0-9@._-]*$/;
      if (!regex.test(e.target.value)) {
         e.target.value = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, ''); // удаляем недопустимые символы
      }
   }

   function validatePassInput(e) {
      const regex = /^[a-zA-Z0-9_]*$/;
      if (!regex.test(e.target.value)) {
         e.target.value = e.target.value.replace(/[^a-zA-Z0-9_]/g, ''); // удаляем недопустимые символы
      }
   }

   return (
      <form
         className='modal-form'
         action='/404/auth/'
         method='POST'
         onSubmit={() =>
            onAuth({
               name: name.current.value,
               email: email.current.value,
               pass: pass.current.value,
            })
         }
      >
         <div className='input'>
            <input required ref={name} type='text' placeholder='Имя' />
            <label />
         </div>
         <div className='input'>
            <input
               required
               ref={email}
               onChange={validateEmailInput}
               type='email'
               title='Допустимы только латинские буквы, цифры и символы @, ., _'
               placeholder='Электронная почта'
            />
            <label />
         </div>
         <div className='input'>
            <input
               required
               ref={pass}
               onChange={validatePassInput}
               type='password'
               title='Допустимы только латинские буквы, цифры и символ _'
               placeholder='Пароль'
            />
            <label />
         </div>
         <button type='submit'>
            <span>Войти</span>
            <i className='fa fa-fw fa-chevron-right'></i>
         </button>
      </form>
   );
};

export default AuthForm;
