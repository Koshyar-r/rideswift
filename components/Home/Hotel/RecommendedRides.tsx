import SectionHeading from "@/components/Helper/SectionHeading"
import { recommendedRides } from "@/data/data"
import RecommendedRidesCard from "./RecommendedRidesCard"

const RecommendedRides = () => {
    return (
        <div className="pt-20 pb-20">
            {/* SECTION HEADING */}
            <SectionHeading heading="Recommended Rides" />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
                {/* RECOMMENDED RIDES CARD */}
                {recommendedRides.map((data, i) => {
                    return (
                        <div key={data.id} data-aos="fade-right" data-aos-ancho-placement="top-center" data-aos-delay={`${i * 100}`}>
                            <RecommendedRidesCard car={data} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecommendedRides