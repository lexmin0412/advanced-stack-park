import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import TimeMachine from './routes/time-machine'
import Toolbar from './routes/toolbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<BrowserRouter basename=''>
			<Routes>
				<Route path="/" element={<Toolbar />} />
				<Route path="/time-machine" element={<TimeMachine/>} />
				<Route path="/toolbar" element={<Toolbar/>} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
)
