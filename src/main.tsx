import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import TimeMachine from './routes/time-machine'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/time-machine" element={<TimeMachine/>} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
)
