import React, { useEffect, useRef } from "react";

export default function StickyHeader() {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const sticky = header.offsetTop;

        const handleScroll = () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="sticky" ref={headerRef} className="header">
             <div className="sticky-header">

            <div className="newnav">
                <h4>Atlas Database</h4>
                <a href="">Overview</a>
                <a href="">Features</a>
                <a href="">Getting Started</a>
                <a href="">Resources</a>
            </div>
            <div>

            </div>

        </div>
        </div>
    );
}
