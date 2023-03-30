import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit from '../pages/Edit'
import Home from '../pages/Home'
import Post from '../pages/Post'
import Products from '../pages/Products'
import Redirect from '../pages/Redirect'
import Signup from '../pages/Signup'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:pdId" element={<Products />} />
        <Route path="/products/new" element={<Post />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/products/:pdId/edit' element={<Edit/>}/>
        <Route path="/oauth" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
