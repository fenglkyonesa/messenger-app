"use client"

import * as React from "react"
import {useState} from "react"
import {Search,} from "lucide-react"
import {MailDisplay} from "@/app/mail/components/mail-display"
import {MailList} from "@/app/mail/components/mail-list"
import {type Mail} from "@/app/mail/data"
import {useMail} from "@/app/mail/use-mail"
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import {Input} from "@/components/ui/input";
import {TooltipProvider} from "@/components/ui/tooltip"
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import {FaFaceKissWinkHeart} from "react-icons/fa6";
import {FaRegKissWinkHeart} from "react-icons/fa";

interface MailProps {

    mails: Mail[]
}


export function Mail({
                         mails,
                     }: MailProps) {
    const [mail] = useMail()
    const [heart, setHeart] = useState(false)

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
            >
                <ResizablePanel minSize={35}  maxSize={45} order={1}>
                    <Tabs defaultValue="all">
                        <div className="flex items-center px-4 py-2">
                            <h1 className="text-xl font-bold">Inbox</h1>
                            <TabsList className="ml-auto space-x-1">
                                <TabsTrigger
                                    value={heart ? "all" : "unread"}
                                    className=" cursor-pointer "
                                    onClick={() => {
                                        setHeart(!heart)
                                    }}
                                >
                                    {heart ?
                                        <FaRegKissWinkHeart size={20}/>
                                        : <FaFaceKissWinkHeart size={20}/>
                                    }
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <Separator/>
                        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"/>
                                    <Input placeholder="Search" className="pl-8"/>
                                </div>
                            </form>
                        </div>
                        <TabsContent value="all" className="m-0">
                            <MailList items={mails}/>
                        </TabsContent>
                        <TabsContent value="unread" className="m-0">
                            <MailList items={mails.filter((item) => !item.read)}/>
                        </TabsContent>
                    </Tabs>
                </ResizablePanel>
                <ResizableHandle withHandle/>
                <ResizablePanel minSize={20}  order={2} className="hidden md:block">
                    <MailDisplay
                        mail={mails.find((item) => item.id === mail.selected) || null}
                    />
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}