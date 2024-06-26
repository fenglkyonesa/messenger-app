'use client'
import React from 'react';
import {FaFacebookMessenger} from "react-icons/fa6";
import {BsPeople, BsPeopleFill} from "react-icons/bs";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {PiMessengerLogoBold} from "react-icons/pi";

const NavLinks = () => {
    const links = [
        {
            title: 'mail',
            href: "/mail",
            iconHand: <FaFacebookMessenger size={24}/>,
            icon: <PiMessengerLogoBold size={24}/>,
        },
        {
            title: 'users',
            href: "/users",
            iconHand: <BsPeopleFill size={24}/>,
            icon: <BsPeople size={24}/>,
        },
    ]
    const path = usePathname();
    return (

        links.map((link, index) => (
            <Link key={index} href={link.href}>
                <Button variant={link.href === path ? "secondary" : "ghost"}>
                    {link.href === path ? link.iconHand : link.icon}
                </Button>
            </Link>
        ))

    );
};

export default NavLinks;