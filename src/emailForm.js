import React from "react";


const emailForm = () => {

return (
   <form action="https://jamform.com/f/{formId}" method="POST">
     <input type="email" name="email" />
     <button type="submit">Mantenerme informado</button>
   </form>
 );
};

export default emailForm;
