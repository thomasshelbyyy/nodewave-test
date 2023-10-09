import Image from "next/image"
import logo from "@/assets/logo.svg"
import facebook from "@/assets/ic_baseline-facebook.svg"
import twitter from "@/assets/mdi_twitter.svg"
import youtube from "@/assets/mdi_youtube.svg"
import linkedin from "@/assets/mdi_linkedin.svg"
import instagram from "@/assets/ri_instagram-fill.svg"

const Footer = () => {
    return (
        <div className="p-12 flex flex-col items-center text-center font-semibold">
            <Image src={logo} />
            <p className="py-8">PT NODEWAVE SOLUSI TEKNOLOGI</p>
            <p>Graha Pena Surabaya</p>
            <p>Jl. Ahmad Yani no. 88 Surabaya</p>
            <p>Phone: +62811258280</p>
            <p>Email: support@nodewave.id</p>
            <div className="pt-8 flex gap-5">
                <Image src={facebook} />
                <Image src={twitter} />
                <Image src={youtube} />
                <Image src={linkedin} />
                <Image src={instagram} />
            </div>
        </div>
    )
}

export default Footer