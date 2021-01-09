import logo from './logo.svg';
import './App.css';
import EmailForm from './emailForm';

function App() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-between items-center bg-gray-50">
   <header class="bg-gray-800 w-full p-4 flex items-start  self-start">
     <h1 className='self-start text-white'>Logo placeholder</h1>
   </header>
      <div className='px-4 py-12'>
	<EmailForm />
      </div>
     <footer className="bg-gray-800 w-full px-2 pt-2 pb-2 flex justify-between items-center">
       <span>footer</span>
       <span>social media </span>
     </footer>
    </main>
  );
}

export default App;
