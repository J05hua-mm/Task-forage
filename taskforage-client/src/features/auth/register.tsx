import {useState} from 'react';
import {Link} from 'react-router';

const Register = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e:React.FormEvent) => {
  e.preventDefault();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded shadow"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Sign Up
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
         Already have an account?{" "}
         <Link to="/login" className="text-blue-600 underline">
         Login
        </Link>
        </p>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default Register;