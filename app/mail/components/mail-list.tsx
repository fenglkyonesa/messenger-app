import {useEffect} from "react"

import {cn} from "@/lib/utils"

import {Mail} from "@/app/mail/data"
import {useMail} from "@/app/mail/use-mail"
import {ScrollArea} from "@/components/ui/scroll-area";
import {formatDistanceToNow} from "date-fns/formatDistanceToNow";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface MailListProps {
    items: Mail[]
}

export function MailList({items}: MailListProps) {
    const [mail, setMail] = useMail()
    useEffect(() => {
        mail.selected = null
    }, [mail])
    return (
        <ScrollArea className="h-screen ">
            <div className="flex flex-col gap-2 p-4 pt-0">
                {items.map((item) => (
                    <button
                        key={item.id}
                        className={cn(
                            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                            mail.selected === item.id && "bg-muted"
                        )}
                        onClick={() =>
                            setMail({
                                ...mail,
                                selected: item.id,
                            })
                        }
                    >
                        <div className="flex w-full flex-col gap-1 overflow-hidden">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className={"flex flex-col"}>
                                        <div
                                            className=" flex flex-row gap-2 items-center justify-between font-semibold">
                                            {item.name}
                                            {!item.read && (
                                                <span className="flex h-2 w-2 rounded-full bg-blue-600"/>
                                            )}
                                            <div
                                                className={cn(
                                                    "ml-auto text-xs",
                                                    mail.selected === item.id
                                                        ? "text-foreground"
                                                        : "text-muted-foreground"
                                                )}
                                            >
                                                {formatDistanceToNow(new Date(item.date), {
                                                    addSuffix: true,
                                                })}
                                            </div>
                                        </div>
                                        <div className="line-clamp-2 text-xs text-muted-foreground">
                                            {item.text.substring(0, 300)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </ScrollArea>
    )
}
