import Image from "next/image"
import chat from "@/assets/chat.png"

const HowWeWork = () => {
    return (
        <div className="py-4 bg-[url('/background-1.png')] bg-cover">
            <h2 className="text-center text-xl pb-5">How We Work</h2>
            <div className="bg-black w-8/12 md:w-6/12 p-8 mx-auto rounded-md flex flex-col md:flex-row">
                <Image src={chat} alt="chat" className="rounded-md mx-auto" />
                <div className="p-8">
                    <h3 className="text-xl font-semibold">Estimate</h3>
                    <p>Estimate the cost of your application with us. Pricing is transparent at the start with gradual payment method.</p>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork