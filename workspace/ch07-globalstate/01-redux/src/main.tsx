import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import Store from './redux/store.ts'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Todo 4. Store 적용 */}
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);
