import SectionHeading from "@/components/Helper/SectionHeading"
import RidesSlider from "./RidesSlider"

const Destination = () => {
    return (
        <div className="pt-20 pb-20">
            {/* SECTION HEADING */}
            <SectionHeading heading="Popular Rides" />
            {/* SECTION CONTENT */}
            <div className="mt-14 w-[80%] mx-auto">
                {/* SLIDER */}
                <RidesSlider />
            </div>
        </div>
    )
}

export default Destination