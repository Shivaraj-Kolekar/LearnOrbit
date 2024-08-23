import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter
} from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Layout from './Layout.jsx'
import Error from './pages/Error.jsx'
import { dark } from '@clerk/themes'
import Roadmaps from './pages/Roadmaps.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const CLERK_FRONTEND_API = import.meta.env.VITE_CLERK_FRONTEND_API
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<App />} />
      <Route path='/roadmaps' element={<Roadmaps />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl='/'
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
