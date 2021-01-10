import React from "react";


const EmailForm = () => {
return (
   <form className='class="mt-8 space-y-6"' action="https://jamform.com/f/{formId}" method="POST">
     <label for="email-address" class="sr-only">Email</label>
     <input id="email-address" name="email" type="email" required className="pt-4 px-6 py-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="E-mail" />
     <div className='pt-4 flex justify-center items-center'>
       <button type="submit" class="group relative flex justify-center py-3 px-5 border border-transparent text-sm font-medium rounded-full text-white bg-green-btn hover:bg-green-btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </span>
        SUSCRIBIRME
       </button>
      </div>
    </form>
 );
};

export default EmailForm;
