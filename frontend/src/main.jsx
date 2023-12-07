import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NoteContext } from './context/ContextApi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteContext>
      {<App />}
    </NoteContext>
  </React.StrictMode>,
)
