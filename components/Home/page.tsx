"use client"

import { useEffect } from "react"
import Destination from "./Rides/Rides"
import Hero from "./Hero/Hero"
import Hotel from "./Hotel/RecommendedRides"
import News from "./News/News"
import Newsletter from "./Newsletter/Newsletter"
import Reviews from "./Reviews/Reviews"
import WhyChooseUS from "./WhyChooseUS/WhyChooseUS"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import("aos")
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom"
            })
        }
        initAOS()
    }, [])

    return (
        <div className="overflow-hidden">
            <Hero />
            <Destination />
            <Hotel />
            <WhyChooseUS />
            <Reviews />
            <News />
            <Newsletter />
        </div>
    )
}

export default Home