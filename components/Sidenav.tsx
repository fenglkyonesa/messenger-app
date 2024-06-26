import React from 'react';
import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import More from "@/components/More";

const Sidenav = () => {
    return (
        <div className="w-20 flex items-center  min-h-screen flex-col border-r  ">
            <Logo/>
            <NavLinks/>
            <More/>
        </div>
    );
};

export default Sidenav;