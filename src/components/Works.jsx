import { Splide, SplideSlide } from "@splidejs/react-splide"
import WorkCard from "./WorkCard"
import rayuMotor from "@/assets/thumnail-4.png"
import jasabung from "@/assets/thumnail-5.png"

const Works = () => {
    return (
        <div className="p-8">
            <h1 className="text-center text-xl font-bold">Our Works</h1>
            <Splide options={{ drag: "free", perPage: 1.5, gap: 20 }}>
                <SplideSlide>
                    <WorkCard
                        title="Rayu Motor"
                        text="AC service workshop that has implelemted online registration to make it easier for consumers, mechanocs, and sales"
                        image={rayuMotor}
                        background="rectangle-13-(1).png"
                    />
                </SplideSlide>
                <SplideSlide>
                    <WorkCard
                        title="Jasabung"
                        text="AC service workshop that has implelemted online registration to make it easier for consumers, mechanocs, and sales"
                        image={jasabung}
                        background="rectangle-13.png"
                    />
                </SplideSlide>
                <SplideSlide>
                    <WorkCard
                        title="Rayu Motor"
                        text="AC service workshop that has implelemted online registration to make it easier for consumers, mechanocs, and sales"
                        image={rayuMotor}
                        background="rectangle-13-(1).png"
                    />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Works