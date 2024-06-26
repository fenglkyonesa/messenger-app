'use client'
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {Button} from "@/components/ui/button";
import {Keyboard, Moon, Settings, Sun, User} from "lucide-react";
import {RiMenuFill} from "react-icons/ri";
import {useTheme} from "next-themes";

const More = () => {
    const {theme, setTheme} = useTheme()

    return (
        <div className={"bottom-0 fixed"}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost"><RiMenuFill size={20}/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4"/>
                            <span>Profile</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4"/>
                            <span>Settings</span>
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Keyboard className="mr-2 h-4 w-4"/>
                            <span>Keyboard shortcuts</span>
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                {theme === "dark" ? <Moon className="mr-2 h-4 w-4"/> : <Sun className="mr-2 h-4 w-4"/>}
                                <span>外观设置</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        <Sun className="mr-2 h-4 w-4"/>
                                        <span>白天</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        <Moon className="mr-2 h-4 w-4"/>
                                        <span>黑夜</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                        {theme === "dark" ? <Moon className="mr-2 h-4 w-4"/> :
                                            <Sun className="mr-2 h-4 w-4"/>}

                                        <span>跟随系统</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>

                    </DropdownMenuGroup>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default More;