import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import Image from "next/image";
import NavLateral from "@/components/NavLateral";
import Link from "next/link";
import logo from "../public/icons/favicon.png"

export default function Home() {
  
  return (
    <>
    <link rel="icon" href="../public/icons/favicon.png"  />
    {/* <Link  href={logo} /> */}
    <Nav/>
     <NavLateral/> 
    <Main/>
     <Footer/>
    </>
  );
}
