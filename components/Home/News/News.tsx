import SectionHeading from "@/components/Helper/SectionHeading"
import NewsCard from "./NewsCard"
import { newsData } from "@/data/data"

const News = () => {
    return (
        <div className="pt-16 pb-16">
            {/* SECTION HEADING */}
            <SectionHeading heading="Exciting Travel News For You" />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
                {newsData.map((data) => {
                    return (
                        <div key={data.id} data-aos="fade-left" data-aos-ancho-placement="top-center">
                            <NewsCard image={data.image} title={data.title} date={data.date} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default News