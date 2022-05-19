import logo from './logo.svg';
import './App.css';
import Alldatas from './page/Alldatas';
import Adddata from './page/Adddata';
import { Route, Routes } from 'react-router-dom';
import Header from './page/Header';
import Register from './Register';
import Login from './page/Login';
import RequireAuth from './page/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <h1 className='text-primary'>TO DO APP</h1>
      <Header></Header>
    
     <Routes>
       <Route path='/adddata' element={
         <RequireAuth>
           <Adddata></Adddata>
         </RequireAuth>
       }></Route>
       <Route path='/alldata' element={<Alldatas></Alldatas>}></Route>
       {/* <Route path='/' element={<Alldatas></Alldatas>}></Route> */}
       <Route path='/' element={<Register></Register>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
   <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
