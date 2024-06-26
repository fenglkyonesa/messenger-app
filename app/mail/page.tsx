import {mails} from "@/app/mail/data";
import {Mail} from "@/app/mail/components/mail";


export default function MailPage() {

    return (
        <>
            <div className={"w-full h-screen flex flex-row flex-1 overflow-hidden"}>
                <Mail
                    mails={mails}
                />
            </div>
        </>
    )
}