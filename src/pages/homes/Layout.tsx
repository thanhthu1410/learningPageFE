import Navbar from "@/components/navbars/Navbar";
import "./layout.scss"
import { Outlet } from "react-router-dom";
import Footer from "@/components/footers/Footer";
import Sidebar from "@/components/sidebars/Sidebar";




export default function Layout() {
  return (
    <div className="layout_comtainer">
        <Navbar/>
        <Sidebar />
        <Outlet />
        <Footer/>
    </div>
  )
}
