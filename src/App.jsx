import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AppLayout from './components/AppLayout'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import Products from './pages/Products'
import ProductsLayout from './features/products/ProductsLayout'
import CartLayout from './features/cart/CartLayout'
import ProductDetails from './components/ProductDetails'
import Orders from './features/orders/Orders'
import CreateOrder from './components/CreateProduct'
import CreateProduct from './components/CreateProduct'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, 
    },
  },
})

function App() {
 
  return (
    <>
     <QueryClientProvider client={queryClient}>

    <GlobalStyles/>
    <BrowserRouter>
    <Routes>
      <Route element={
        <ProtectedRoute>
             <AppLayout/>
        </ProtectedRoute>
        }>
      <Route index  element={<Navigate replace to="dashboard"/>} />
      <Route path='dashboard' element={<Dashboard/>}></Route>
      <Route path='products' element={<ProductsLayout/>}></Route>
      <Route path='cart' element={<CartLayout/>}></Route>
      <Route path='orders' element={<Orders/>}></Route>
      <Route path='products/:id' element={<ProductDetails/>}></Route>
      <Route path='create' element={<CreateProduct/>}></Route>
      </Route>  
      <Route path='login' element={<Login/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>

    <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "10px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />

    </QueryClientProvider>
    </>
  )
}

export default App
