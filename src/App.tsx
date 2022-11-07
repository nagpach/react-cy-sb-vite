import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Pokemon } from './components/pokemon'
import { Users } from './components/users'

import { Route, Routes, useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom'


const NotFound = () => {
  return <div>Page not found</div>;
};

export const App: React.FC = () => {
  return (
    <div className="h-full">
    <main className="max-h-screen flex flex-col">
    <nav className="p-2 flex flex-row bg-blue-400 space-x-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
    <section className="bg-yellow-200">
      <Routes>
        <Route path="/"  >
          <Route index path="/" element={<Pokemon />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
      </section>
      </main>
      </div>      

      )
}


const UsersComponent: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <header className="app-header">
        <img src={logo} className="h-[40vmin] pointer-events-none" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button className="m-2 p-2 bg-red-400 rounded-full" type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="p-2 m-2 bg-[#282c34] text-white"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="p-2 m-2 bg-[#882000] text-white"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
