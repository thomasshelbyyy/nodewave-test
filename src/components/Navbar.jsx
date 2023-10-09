import Image from "next/image"
import logo from "@/assets/logo.svg"
import hamburger from "@/assets/hamburger-menu.svg"
import close from "@/assets/close.svg"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [navbarActive, setNavbarActive] = useState(false)
    const [scrolling, setScrolling] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <nav className="w-screen">
            <div className={`flex w-full justify-between px-4 py-3 ${scrolling ? "bg-black" : "bg-transparent"} fixed z-50`}>
                <div>
                    <Image src={logo} />
                </div>
                <div className="hidden md:flex gap-6 text-lg font-semibold text-white items-center">
                    <Link href="#">Website</Link>
                    <Link href="#">Mobile Apps</Link>
                    <Link href="#">Portfolio</Link>
                    <Link href="#" className="px-4 py-2 rounded-full bg-teal-500">Make An App</Link>
                </div>

                <button className="md:hidden" onClick={() => setNavbarActive(!navbarActive)}>
                    {navbarActive ? <Image src={close} /> : <Image src={hamburger} />}
                </button>
            </div>

            {/* MOBILE NAVBAR */}
            <div className={`md:hidden h-screen w-full bg-black  text-white flex flex-col gap-6 text-lg font-semibold items-center fixed transform ${navbarActive ? "translate-y-0" : "-translate-y-full"} transition duration-300 pt-8 top-16 left-0 z-40`}>
                <Link href="#">Website</Link>
                <Link href="#">Mobile Apps</Link>
                <Link href="#">Portfolio</Link>
                <Link href="#" className="px-4 py-2 rounded-full bg-teal-500">Make An App</Link>
            </div>
        </nav>
    )
}

export default Navbar