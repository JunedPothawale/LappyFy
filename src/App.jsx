
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { lazy, Suspense } from 'react';
import Preloader from './shared/components/Preloader';


const Admin = lazy(() => import('./router/AdminRouter'))
const Customer = lazy(() => import('./router/CustomerRouter'))
function App() {
  return <>
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/*" element={<Customer />}></Route>
          {/* <Route path="/admin/*" element={<Admin />}></Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>;
}

export default App
