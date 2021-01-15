import React, { useState, useEffect } from "react";
import './index.css';
import emailjs from 'emailjs-com'
import {toast} from 'react-toastify';
import chk from './emChk';

const EmailForm = () => {
  const [sweetMail, setSweet] = useState(false);
  const [emailVar, setMailVar] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [superficialCheck, setSuperficial] = useState(0);


  const setVar = e => {
   setMailVar(e.target.value)
  }

  const us = 'user_rncsCt2JscrCSvDpcHHQr';

  useEffect(() => {
    let requestData = {
      from_email: `${emailVar}`,
      warning: `{$superficialCheck}`,
    };
   if(superficialCheck < 3) {return false;}
   if(trigger) {
    setSuperficial(superficialCheck + 1);
    if(chk.checkme(emailVar) !== true || sweetMail || chk.hb()) {
     toast.error('Parece que hay un problema con el mail que ingresaste, contactanos via whatsapp para solucionarlo', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      setDisabled(false);
      setTrigger(false);
      setMailVar('');
      return false;
    }
    chk.up();
    emailjs.send('service_26gi747', 'template_3dcz9oo', requestData, us)
    .then(function(response) {
       setDisabled(false);
       toast.success('Email registrado con exito', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
         });
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        toast.error('Los servidores estan de paro, intenta más tarde', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
       console.log('FAILED...', error);
    });

    setTrigger(false);
   }
   setMailVar('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  const sendForm = (e) => {
    e.preventDefault();
    setDisabled(true);
    setTrigger(true);
  }


return (
   <form target="_blank" rel="noreferrer"  onSubmit = { (e) => sendForm(e) } className="mt-8 space-y-6">
     <label for="email-address" class="sr-only">Email</label>
     <input value = {  emailVar } onChange = { e => setVar(e) } id="email-address" name="email" type="email" required className="pt-4 px-6 py-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="E-mail" />
     <input type='text' className='hidden'  value = { () => setSweet(true) } />
    <div className='pt-4 flex justify-center items-center'>
     <button type="submit" className={ `${disabled ? 'load' : 'bg-green-btn' } group relative flex justify-center py-3 px-5 border border-transparent text-sm font-medium rounded-full text-white  hover:bg-green-btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`} disabled={disabled}>
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </span>
        SUSCRIBIRME
       </button>
      </div>
    </form>
  );
};

export default EmailForm;
