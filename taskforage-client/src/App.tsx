import Login from './features/auth/login';
import Register from './features/auth/register';
import { BrowserRouter,Routes,Route,Outlet,Navigate } from 'react-router';
import Dashboard from './pages/dashboard';


const ProtectedRoute = ({isAuthenticated}:{isAuthenticated:boolean}) => {
  return (
    isAuthenticated ? <Outlet/> : <Navigate to = "/login" replace />
  )
}

const App = () => {

  const isAuthenticated:boolean = false;


  return (
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>

    <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
     <Route path='/dashboard' element={<Dashboard/>}/>
    </Route>
   
  </Routes>
  </BrowserRouter>
  )
}

export default App
