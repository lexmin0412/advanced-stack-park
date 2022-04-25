import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

function App() {

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
			</header>
    </div>
  )
}

export default App
