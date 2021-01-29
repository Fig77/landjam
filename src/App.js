import logo from './assets/img/logo.webp';
import ig from './assets/img/ig.svg';
import wp from './assets/img/wp.svg';
import mainbg from './assets/img/mainbg.webp';
import './App.css';
import EmailForm from './emailForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-between items-center bg-gray-50" style={{background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mainbg})`}}>
   <header className=" bgTransparent black-bar top-bar  w-full p-4 flex items-start  self-start">
    <img alt="HandyRess logo de empresa" src={logo} title='HandyRess reservas' className="logo-nav"/>
   </header>
      <div className='flex flex-col justifiy-between items-center self-center text-center'>
        <h1 className="title font-sans2 font-black text-white tracking-widest phones-pt:text-3xl mt-2 mb-6 px-1 phones: text-5xl mt-5 desktop: text-4xl">-PRÓXIMAMENTE-</h1>
        <div className="main-subtext">
          <h2 className="px-2 h2text text-center nont font-sans text-white tracking-wider phones-pt:text-lg mb-2 phones: desktop: text-lg">HANDYRESS TE INVITA A DISFRUTAR UNA OPCIÓN MÁS SENCILLA PARA ELEGIR EL MOMENTO Y LUGAR DÓNDE SALIR CON AMIGOS</h2>
        </div>
        <h3 className="text-white text-sm font-light tracking-ultra phones-pt:mb-3 phones:mb-4 desktop: text-base mb-4">
       <br/> Si sos propietario de un local, <br/> contactanos para conocer nuestros servicios.
        </h3>
        <EmailForm />
        <div className="flex justify-center items-center">
          <a target = "_blank" rel="noreferrer"  href="https://www.instagram.com/handyress/"><img src={ig} alt="Instagram HandyRess, contacto" className="social-button"/></a>
          <a target = "_blank" rel = "noreferrer" href="https://wa.me/543482558491"><img src={wp} alt="Whatsapp HandyRess, contacto" className="social-button"/></a>
        </div>
      </div>
     <footer className="text-center black-bar w-full px-2 pt-2 pb-2 flex justify-center items-center text-white mb-1">
       <span>Copyright 	&copy; HandyRess. Todos los derechos reservados.</span>
     </footer>
     <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </main>
  );
}

export default App;
