import Image from "next/image"
import uiDesignIcon from "@/assets/ui-design.svg"
import webDesignIcon from "@/assets/web-design.svg"
import phones from "@/assets/frame-22.png"
import Link from "next/link"

const Products = () => {
    return (
        <div className="w-full overflow-x-hidden py-8">
            <h2 className="text-2xl font-bold text-center py-6">Our Product</h2>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mx-auto">
                <div className=" flex flex-col gap-4 items-center w-[380px] h-96">
                    <div className="h-2/4 w-100 flex justify-center items-center bg-white text-black rounded-xl p-8 group cursor-pointer">
                        <Image src={uiDesignIcon} alt="ui design icon" className="pr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Mobile Apps</h3>
                            <div className="flex justify-between items-end">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <svg className="group-hover:translate-x-2 transform transition duration-200" width="50" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="rgb(245 158 11)" d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="h-2/4 w-11/12 border-2 border-white text-white rounded-xl flex justify-center items-center p-8 group cursor-pointer">
                        <Image src={webDesignIcon} alt="web design icon" className="pr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Website</h3>
                            <div className="flex justify-between items-end">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <svg className="group-hover:translate-x-2 transform transition duration-200" width="50" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="rgb(252 211 77)" d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-10/12 md:w-[600px] md:h-96 bg-white text-black flex flex-col items-center p-8 rounded-xl text-center justify-center gap-2">
                    <Image src={phones} alt="phones" />
                    <h3 className="text-2xl font-bold py-2">Mobile Apps</h3>
                    <div>
                        <p>Mobile Apps Android dan Iphone sekaligus, buat aplikasi dengan fitur sesuka anda.</p>
                        <p>Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi informasi, maupun Aplikasi chat dengan fitur GPS</p>
                    </div>
                    <Link href="#" className="bg-teal-500 hover:bg-teal-600 transition duration-200 text-white rounded-md px-4 py-2">Lihat Selengkapnya</Link>
                </div>

            </div>
        </div>
    )
}

export default Products