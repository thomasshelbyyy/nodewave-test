import codeIcon from "@/assets/ph_code-bold.png"
import headIcon from "@/assets/mdi_head-idea.png"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-transparent to-70% to-black relative z-20 opacity-95 flex flex-col text-white pt-40 pb-8 px-8 before:absolute before:bg-[url('/background.png')] before:bg-cover before:top-0 before:left-0 before:bottom-0 before:right-0 before:opacity-50 before:-z-10">
            <Image src={codeIcon} />
            <div className="text-2xl font-bold">
                <p>Make Your Own</p>
                <p>Website and Web Application</p>
                <p className="flex">With Nodewave <Image src={headIcon} /></p>
            </div>
            <Link href="#" className="bg-teal-500 text-white px-4 py-2 rounded-full w-fit font-semibold relative">Get Started Now</Link>
            <div className="pl-4 py-4">
                <p>Create Mobile Applications and Websites for Companies of Your Business</p>
                <p>Have a transparent pricing, easy and straightforward development process</p>
            </div>
        </div>
    )
}

export default Hero