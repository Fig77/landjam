/* eslint-disable */

const store = window.localStorage;
const pointer = 'iS7hShC8DMgjfiJ6du8XC60EcASX5kslAwwKNsgx3M8=';

const init = () => {
 if(store.getItem('iS7hShC8DMgjfiJ6du8XC60EcASX5kslAwwKNsgx3M8=') !== true) {
   store.setItem('iS7hShC8DMgjfiJ6du8XC60EcASX5kslAwwKNsgx3M8=, 0');
 }
}

function heartbeat(callback){
    let fs = window.RequestFileSystem || window.webkitRequestFileSystem;

    if (!fs) {
        callback(false);
    } else {
        fs(window.TEMPORARY,
            100,
            callback.bind(undefined, false),
            callback.bind(undefined, true)
        );
    }
}

const emChk = (() =>{
  const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const firstReg = (email) => {
   return reg.test(email);
  }

  const hb = () => {
    return heartbeat(function(alive){ return alive; });
  }

  const inist = () => {
   init();
  }

  const up = () => {
   if(store.getItem(pointer)){
    let a = Number(store.getItem(pointer));
    store.setItem('' + (a + 1));
   }
  }

  const checkme = (raw) => { return firstReg(raw);  }
  return { checkmem, hb, up, inist }
})();

export default emChk;
