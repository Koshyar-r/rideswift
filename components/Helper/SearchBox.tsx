import React, { useRef } from "react";
import { FaCalendarWeek, FaCar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const SearchBox = () => {
    const startDateRef = useRef<HTMLInputElement | null>(null);
    const endDateRef = useRef<HTMLInputElement | null>(null);

    const handleOpenPicker = (ref: React.RefObject<HTMLInputElement | null>) => {
        if (ref.current) {
            if (ref.current.showPicker) {
                ref.current.showPicker();
            } else {
                ref.current.click();
            }
        }
    };

    return (
        <div className="bg-blue-700 text-white opacity-75 rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]">
            <div className="flex items-center space-x-6">
                <FaCar className="w-6 h-6 text-white" />
                <div>
                    <p className="text-sm sm:text-lg text-white font-medium mb-[0.2rem]">Car Model</p>
                    <input type="text" placeholder="Choose model" className="text-sm sm:text-lg text-white outline-none border-none placeholder:text-white" />
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <FaCalendarWeek className="w-6 h-6 cursor-pointer" onClick={() => handleOpenPicker(startDateRef)} />
                <div>
                    <p className="text-sm sm:text-lg font-medium mb-[0.2rem]">Start Date</p>
                    <input type="date" ref={startDateRef} className="outline-none border-none text-sm sm:text-lg appearance-none [&::-webkit-calendar-picker-indicator]:hidden" />
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <FaCalendarWeek className="w-6 h-6 cursor-pointer" onClick={() => handleOpenPicker(endDateRef)} />
                <div>
                    <p className="text-sm sm:text-lg font-medium mb-[0.2rem]">End Date</p>
                    <input type="date" ref={endDateRef} className="outline-none border-none text-sm sm:text-lg appearance-none [&::-webkit-calendar-picker-indicator]:hidden" />
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <FaUserGroup className="w-6 h-6" />
                <div>
                    <p className="text-sm sm:text-lg font-medium mb-[0.2rem]">Passengers</p>
                    <input type="text" placeholder="Number of Passengers" className="text-sm sm:text-lg outline-none border-none placeholder:text-white" />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
