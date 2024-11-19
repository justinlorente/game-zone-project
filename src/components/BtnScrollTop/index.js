import React, { useEffect, useState } from "react";
import { scrollToTop } from "../../utils";

const BtnScrollTop = () => {
    const [dynamicClass, setDynamicClass] = useState('translate-y-20');

    useEffect(() => {
        if(!document || !window) return;
        const updateClass = () => {
            const classToSet = window.scrollY >= 80 ? "translate-y-0 opacity-100" : "opacity-0 translate-y-20";
            setDynamicClass(classToSet);
        };
        document.addEventListener('scroll', updateClass);
        return () => {
            document.removeEventListener('scroll', updateClass);
        }
    },[]);

    return (
        <div className="relative z-50 h-full">
            <button onClick={scrollToTop} className={`Btn-scroll-top ${dynamicClass}`}>
                <span className="text-white opacity-70 text-[25px] leading-[50%] font-extralight" ><i className="fal fa-angle-up" /></span>
            </button>
        </div>
    )

}

export default BtnScrollTop;
