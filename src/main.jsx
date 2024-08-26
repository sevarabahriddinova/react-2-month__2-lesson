import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreProvider from './context/StoreProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
)
