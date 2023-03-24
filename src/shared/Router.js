import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Post from '../pages/Post'
import Products from '../pages/Products'
import Signup from '../pages/Signup'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<Post />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
