import {useState} from 'react';
import {Sidebar, SidebarBody, SidebarLink} from "@/components/ui/sidebar";
import {IconHome} from "@tabler/icons-react";
import {NfcIcon} from "lucide-react";
function CustomSidebar() {

    const links = [
        {
            label: "Accueil",
            href: "/",
            icon: (
                <IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Contact",
            href: "https://cal.com/imrane-sallak/30min",
            icon: (
                <NfcIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        }
    ];

    const [open, setOpen] = useState(false)

    return (
        <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody className="!bg-zinc-900 border-r border-gray-500">
                <div>
                    <p className="text-2xl text-white">Imrane Sallak</p>
                    <p className="text-stone-400 text-xs">Software Engineer</p>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                    {links.map((link, idx) => (
                        <SidebarLink className="py-4 px-3 text border-gray-500 border rounded-lg !bg-metal font-display" key={idx} link={link}/>
                    ))}
                </div>
            </SidebarBody>
        </Sidebar>
    );
}

export default CustomSidebar;
