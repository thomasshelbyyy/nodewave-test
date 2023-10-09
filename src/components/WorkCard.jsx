import Image from "next/image"

const WorkCard = ({ title, text, image, background }) => {
    const backgroundImage = `url('/${background}')`
    return (
        <div className={` bg-cover rounded-lg p-6 flex flex-col md:flex-row max-w-[800px]`} style={{ backgroundImage }}>
            <Image src={image} className="rounded-lg w-auto h-28 md:h-48" />
            <div className="p-4">
                <h3 className="text-center font-bold text-2xl">{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default WorkCard