"use client"
import { popularRides } from '@/data/data';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const RidesSlider = () => {
    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true}>
            {popularRides.map((data) => {
                return <div key={data.id} className='m-3'>
                    <div className="relative h-[400px]">
                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                        {/* IMAGE */}
                        <Image 
                            src={data.image}
                            alt={data.model}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover rounded-lg'
                        />
                    </div>
                    {/* TEXT CONTENT */}
                    <h1 className="text-lg font-semibold mt-4">{data.model}</h1>
                    <p className="text-sm text-gray-600">{data.rents}</p>
                </div>
            })}
        </Carousel>
    )
}

export default RidesSlider