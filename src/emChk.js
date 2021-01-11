/* eslint-disable */

const emChk = (() =>{
  const dict = {  // test purpose, clearly this isn't production
    'gmail': 'gmail',
    'hotmail': 'hotmail',
    'outlook': 'outlook',
    'tutanota': 'tutanota',
   }

  const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const firstReg = (email) => {
    if(reg.test(email)) {
      return true;
    }
    return false;
  }
  const dictParse = (email) => { return (dict[email] === email); }
  const checkme = (raw) => { return firstReg(raw);  }
  return { checkme }
})();

export default emChk;
