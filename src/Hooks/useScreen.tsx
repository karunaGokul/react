import { useState, useEffect } from "react";

const useScreen = () => {
    const [screenSize, setScreenSize]: any = useState();

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => {
            // window.removeEventListener("resize");
        }
        
    })

    const checkScreenSize = () => {
        if(window.innerWidth > 992) return setScreenSize("Large");
        if(window.innerWidth < 992 && window.innerWidth > 600) return setScreenSize("Medium");
        if(window.innerWidth < 600) return setScreenSize("Small");
    }

    return screenSize;
}
 
export default useScreen;