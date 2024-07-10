import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import configureStore from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './index.css'
import './App.css'
import './Doctor Dashboard/Components/Language_Locales/i18n'; // Import the i18n configuration

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          {/* <React.StrictMode> */}
            <Route path='/*' element={ <App /> } />
          {/* </React.StrictMode> */}
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
