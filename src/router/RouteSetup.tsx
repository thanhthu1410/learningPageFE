import Home from '@/pages/homes/components/Home'
import Layout from '@/pages/homes/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetail from '@/pages/homes/components/blogs/detailBlog/Detail'
import Login from '@/pages/login/Login'
import CouresPage from '@/pages/coursesPage/CouresPage'
import LessonPage from '@/pages/lessonPage/LessonPage'
import Lazy from '@/utils/lazies/Lazy'

export default function RouteSetup() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path='blog/:id' element={<BlogDetail/>}></Route>
       
          <Route path='course/:id' element={Lazy(() => import("@pages/coursesPage/CouresPage"))()}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/lesson/1' element={<LessonPage/>}> </Route>
        </Routes>

    </BrowserRouter>
  )

}