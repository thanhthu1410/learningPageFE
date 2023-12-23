import Home from '@/pages/homes/components/Home'
import Layout from '@/pages/homes/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetail from '@/pages/homes/components/blogs/detailBlog/Detail'
import Login from '@/pages/login/Login'
import CouresPage from '@/pages/coursesPage/CouresPage'

export default function RouteSetup() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path='blog/:id' element={<BlogDetail/>}></Route>
          <Route path='course/:id' element={<CouresPage/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        </Routes>

    </BrowserRouter>
  )

}