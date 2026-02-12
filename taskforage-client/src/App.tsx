import Login from './features/auth/login';
import Register from './features/auth/register';
import { BrowserRouter,Routes,Route,Outlet,Navigate } from 'react-router';
import Dashboard from './pages/dashboard';
import { useAppSelector } from './app/hooks.ts';


const ProtectedRoute = () => {

  const isAuthenticated = useAppSelector(state => state.auth.isAuthentiated);

  return (
    isAuthenticated ? <Outlet/> : <Navigate to = "/login" replace />
  )
}

const App = () => {



  return (
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>

    <Route element={<ProtectedRoute />}>
     <Route path='/dashboard' element={<Dashboard/>}/>
    </Route>
   
  </Routes>
  </BrowserRouter>
  )
}

export default App
