import Image from "next/image"
import listIcon from "@/assets/material-symbols_list.svg"
import basketballIcon from "@/assets/fluent_sport-basketball-20-regular.svg"
import bookIcon from "@/assets/ph_book-bold.svg"
import eCommerceIcon from "@/assets/ant-design_shop-outlined.svg"
import companyIcon from "@/assets/mdi_company.svg"
import cashierIcon from "@/assets/streamline_money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine.svg"
import chatIcon from "@/assets/ph_chat-bold.svg"
import mechanicIcon from "@/assets/fluent-emoji-high-contrast_man-mechanic.svg"
import constructionIcon from "@/assets/healthicons_construction-outline.svg"

const Applications = () => {
    return (
        <div className="p-12 px-6">
            <h1 className="text-2xl font-semibold text-center">Applications that can be made</h1>
            <div className="flex flex-wrap justify-center gap-6 py-8">
                <div className="w-[400px] pb-8">
                    <span className="flex gap-10 text-xl items-center font-semibold">
                        <Image src={listIcon} alt="list icon" />
                        Online Attendance
                    </span>
                    <p>With the times, your tam may be able to work n the office or outside the office. Get the accuracy of your teams work hours with your own companys specialonline attendance feature with features such as</p>
                    <ul className="list-disc">
                        <li>Clock in and Clock Out attendance</li>
                        <li>Face Photo</li>
                        <li>Face Recognition</li>
                        <li>Accurate time stamp down to seconds</li>
                        <li>GPS location of employees</li>
                    </ul>
                </div>
                <div className="w-[400px] pb-8">
                    <span className="flex gap-10 text-xl items-center font-semibold">
                        <Image src={basketballIcon} alt="basketball icon" />
                        Sport Center
                    </span>
                    <p>Create you sports center field booking application. Suitable for futsal, mini soccer, badmintion, tennis, golf, basketball, to table tennis. Give your customers the freedom to:</p>
                    <ul className="list-disc">
                        <li>Choose a booking schedule</li>
                        <li>Online Payments</li>
                        <li>Automatic scheduling system</li>
                        <li>Search for Freinds feature</li>
                        <li>Split payment with team members</li>
                        <li>Informations and announcements from you</li>
                    </ul>
                </div>
                <div className="w-[400px] pb-8">
                    <span className="flex gap-10 text-xl items-center font-semibold">
                        <Image src={bookIcon} alt="book icon" />
                        Booking
                    </span>
                    <p>Offer you services in your own application to place orders to delivery directly to the clients house. Suitabled for ac service, cleanig, cleaning sevice, CCTV, massage, and eve other digital services/ Features that can be made: </p>
                    <ul className="list-disc">
                        <li>Memilih jenis dan kategori jasa yang dikehendaki</li>
                        <li>Melakukan reservasi online dan pembayaran dengan metode pembayaran digital</li>
                        <li>Penjadwalandengan tim lapangan</li>
                        <li>Aplikasi khususuntuk tim</li>
                        <li>Promosi dan kode voucher khusus</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex gap-4 items-center">
                    <Image src={eCommerceIcon} alt="e commerce icon" />
                    <p className="font-medium">E-Commerce</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Image src={companyIcon} alt="company icon" />
                    <p className="font-medium">Company Profile</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Image src={cashierIcon} alt="cashier icon" />
                    <p className="font-medium">Cashier</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Image src={chatIcon} alt="chat icon" />
                    <p className="font-medium">Chat</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Image src={mechanicIcon} alt="mechanic icon" />
                    <p className="font-medium">Workshop</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Image src={constructionIcon} alt="construction icon" />
                    <p className="font-medium">Construction</p>
                </div>
                <div className="flex items-center">
                    <p className="font-medium">and many others</p>
                </div>
            </div>
        </div>
    )
}

export default Applications