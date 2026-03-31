import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/css/bootstrap.min.css'
import './assets/css/LineIcons.3.0.css'
import 'tiny-slider/dist/tiny-slider.css'
import './assets/css/glightbox.min.css'
import './assets/css/main.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'




let persistor = persistStore(store)
createRoot(document.getElementById('root')).render(


  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)
