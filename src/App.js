import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainRoutes from './components/Main/MainRoutes';
import Footer from './components/Footer/Footer';
import DevMenu from './DevMenu';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   return (
      <>
         <Header />
         <MainRoutes />
         <Footer />
         <DevMenu />
         <ToastContainer position="bottom-right" autoClose={2000} />
      </>
   );
}

export default App;
