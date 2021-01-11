const emChk = (() => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const dict = {  // this is for test purpose, clearly this isn't production
    'gmail': 'gmail',
    'hotmail': 'hotmail',
    'outlook': 'outlook',
    'tutanota': 'tutanota',
   }

  const firstReg = (email) => {
    if(email.match(reg)) {
      return true;
    }
    return false;
  }
  const dictParse = (email) => { dict[email] === email }
  const checkme = (raw) => { firstReg(raw);  }
  return { checkme }
})();

export default emChk;
