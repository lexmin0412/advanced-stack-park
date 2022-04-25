import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<Link to="/time-machine"
					className='text-3xl font-bold underline'
				>
					Time Machine
				</Link>
				<Link to="/toolbar"
					className='text-3xl font-bold underline'
				>
					Toolbar
				</Link>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
			</header>
    </div>
  )
}

export default App
