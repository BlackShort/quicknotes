import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NoteContext } from './context/ContextApi';

export const server = 'https://quicknotes-u3ve.onrender.com/api/v1';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteContext>
      {<App />}
    </NoteContext>
  </React.StrictMode>,
)
