import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Users } from './components/users'

export const App: React.FC = () => {
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
      <Users />
    </div>
  )
}
