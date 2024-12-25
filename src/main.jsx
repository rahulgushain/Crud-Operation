import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextFun from './components/context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <ContextFun>
    <App />
    <Toaster/>
  </ContextFun>
  </BrowserRouter>

)
