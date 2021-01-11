import logo from './assets/img/logo.png';
import logo2 from './assets/img/logo2.png';
import ig from './assets/img/ig.svg';
import wp from './assets/img/wp.svg';
import mainbg from './assets/img/mainbg.png';
import './App.css';
import EmailForm from './emailForm';

function App() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-between items-center bg-gray-50" style={{background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mainbg})`}}>
   <header className="black-bar top-bar  w-full p-4 flex items-start  self-start">
    <img alt="logo header" src={logo} className="logo-nav"/>
   </header>
      <div className='flex flex-col justifiy-between items-center self-center text-center'>
        <h1 className="font-sans2 font-black text-white tracking-widest phones-pt:text-3xl mt-2 mb-6 px-1 phones: text-5xl mt-5 desktop: text-4xl">-PRÓXIMAMENTE-</h1>
        <div className="main-subtext">
          <h2 className="font-sans text-white tracking-wider phones-pt:text-lg mb-3 px-2 phones: mx-2 desktop: text-lg">TE INVITAMOS A DISFRUTAR DE UNA MANERA MÁS SENCILLA DE ELEGIR EL MOMENTO Y EL LUGAR EN DONDE QUIERAS IR DE LA MANERA QUE SOLO NOSOTROS PODEMOS BRINDARTE</h2>
        </div>
        <h3 className="text-white text-sm font-light tracking-ultra phones-pt:mb-3 phones:mb-4 desktop: text-base mb-4">
        Obtené descuentos exclusivos y <br/> enterate de las novedades de
        </h3>
        <img alt="small local logo" src={logo2} className="logo-main phones-pt:mb-3 phones:mb-4 desktop: mb-4"/>
        <EmailForm />
        <div className="flex justify-center items-center">
          <a target = "_blank" rel="noreferrer"  href="https://www.instagram.com/handyress/"><img src={ig} alt="instagram logo" className="social-button"/></a>
          <a target = "_blank" rel = "noreferrer" href="https://wa.me/5493482558491"><img src={wp} alt="whatsapp logo" className="social-button"/></a>
        </div>
      </div>
     <footer className="black-bar w-full px-2 pt-2 pb-2 flex justify-center items-center text-white mb-1">
       <span>Copyright 	&copy; HandyRess. Todos los derechos reservados.</span>
     </footer>
    </main>
  );
}

export default App;
