import Navbar from "@/components/navbars/Navbar";
import "./layout.scss"
import { Outlet } from "react-router-dom";
import Footer from "@/components/footers/Footer";




export default function Layout() {
  return (
    <div className="layout_comtainer">
        <Navbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}
