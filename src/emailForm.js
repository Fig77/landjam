import React, { useState } from "react";

const EmailForm = () => {

  const [emailVar, setMailVar] = useState('');

  const clearMail = () => {
    setMailVar('');
  }

 return (
   <form className='class="mt-8 space-y-6"' action="https://jamform.com/f/PEBD4HJHAvR2ZQWrcNj7a" method="POST" target='#'>
      <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">
        Mantente Informado
      </h2>
     <label for="email-address" class="sr-only">Email</label>
     <input  value = {() => { emailVar(); }} id="email-address" name="email" type="email" required className="pt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
     <div className='pt-4'>
       <button  onclick = { () => {  clearMail(); }} type="submit" class="group relative w-full flex justify-center py-1 px-2  border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </span>
        Enviar
       </button>
      </div>
    </form>
  );
};

export default EmailForm;
