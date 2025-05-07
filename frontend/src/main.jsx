import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51RLHZW59lEuEB98gDdxkDEBCb0nHYXEcMSt7SHp3XeJVrt9xTzHoECGV0aDYKnh82twuRIyH4kDhq1TFO6uWD7Xk00xNiylWII");


createRoot(document.getElementById('root')).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
   
  
)
