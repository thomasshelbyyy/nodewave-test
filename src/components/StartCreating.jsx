import codeImage from "@/assets/rectangle-24-1.png"
import phoneImage from "@/assets/rectangle-24.png"
import saleIcon from "@/assets/fontisto_shopping-sale.svg"
import Image from "next/image"
import Link from "next/link"

const StartCreating = () => {
    return (
        <div className="p-8">
            <h1 className="text-center text-2xl font-semibold">Start Creating Website or Mobile Apps For You Now</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 py-8">
                <div className="flex h-80 ">
                    <div className="w-80 h-full text-center bg-white text-gray-700 rounded-l-md py-12">
                        <h2 className="text-3xl font-bold">Websites</h2>
                        <p className="text-xl font-bold py-3">Start from </p>
                        <div className="mx-auto w-9/12 md:w-7/12 text-center relative pb-1">
                            <p className="text-xl line-through text-gray-500">Rp, 1.000.000</p>
                            <Image src={saleIcon} alt="sale icon" className="absolute right-0 top-0" />
                        </div>
                        <p className="text-xl pb-6">Rp, 500.000</p>
                        <Link href="#" className="px-4 py-2 text-xl font-semibold bg-teal-500 rounded-full hover:bg-teal-600 transition duration-300 text-white">Order Now</Link>
                    </div>
                    <Image src={codeImage} alt="code image" className="h-full w-auto rounded-r-md" />
                </div>
                <div className="flex h-80 ">
                    <div className="w-80 h-full text-center bg-white text-gray-700 rounded-l-md py-12">
                        <h2 className="text-3xl font-bold">Mobile Apps</h2>
                        <p className="text-xl font-bold py-3">Start from </p>
                        <p className="text-xl pb-6">Rp, 999.000</p>
                        <Link href="#" className="px-4 py-2 text-xl font-semibold bg-teal-500 rounded-full hover:bg-teal-600 transition duration-300 text-white">Order Now</Link>
                    </div>
                    <Image src={phoneImage} alt="phone image" className="h-full w-auto rounded-r-md" />
                </div>
            </div>
        </div>
    )
}

export default StartCreating