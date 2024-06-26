import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

const Logo = () => {
    return (
        <Avatar className={"mt-12 mb-6"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
};

export default Logo;