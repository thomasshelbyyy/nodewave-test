import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core';
import TestimonyCard from "./TestimonyCard"

const Testimony = () => {
    return (
        <div className="py-12 px-8">
            <h1 className="text-xl">Testimony</h1>
            <Splide options={{ drag: "free", perPage: 3, gap: 20 }}>
                <SplideSlide>
                    <TestimonyCard
                        user="Ahmad Prasetyo"
                        testimony="Buat aplikasi dengan tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave."
                    />
                </SplideSlide>
                <SplideSlide>
                    <TestimonyCard
                        user="Laras Ratnadewi"
                        testimony="Awalnya bingung mau buat website pada mahal. Hubungu tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi, Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa,langsung dibuatin dengan cepat sama Nodewave."
                    />
                </SplideSlide>
                <SplideSlide>
                    <TestimonyCard
                        user="Yusuf Uwais"
                        testimony="Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!"
                    />
                </SplideSlide>
                <SplideSlide>
                    <TestimonyCard
                        user="Rizky Afriyandi"
                        testimony="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel enim, quod rerum, recusandae eum odio fugit iusto non voluptas id soluta? Quia perferendis saepe tempore neque repudiandae nobis fugit tempora."
                    />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Testimony