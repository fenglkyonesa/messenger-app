import {mails} from "@/app/mail/data";
import {Mail} from "@/app/mail/components/mail";


export default function MailPage() {

    return (
        <>
            <div className={" h-screen "}>
                <Mail
                    mails={mails}
                />
            </div>
        </>
    )
}