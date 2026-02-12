import { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router';
import { useAppDispatch } from '../../app/hooks';
import { loginSuccess } from './authSlice.ts';
import {api} from '../../services/api.ts';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      

      try {
      const res = await api.post("/login", {
        email,
        password,
      })
      localStorage.setItem("token",res.data.token);
      dispatch(loginSuccess());
      navigate('/dashboard');

      } catch (error) {
      alert('Invalid credentials');
      }

      
    }

useEffect(() => console.log(api));

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded shadow"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Login
        </h1>

        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <p className="text-sm text-center mt-4">
         Don’t have an account?{" "}
        <Link to="/register" className="text-blue-600 underline">
         Sign up
        </Link>
       </p>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;