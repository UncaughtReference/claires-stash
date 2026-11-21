import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSubButton,
    SidebarMenuSub,
    useSidebar,
} from "@/components/ui/sidebar"

import { Gamepad2 } from "lucide-react"
import type { MouseEvent } from "react"

export default function Navbar({ onNavigate }: { onNavigate: (href: string) => void }) {
    const { setOpenMobile } = useSidebar()
    const followLink = (event: MouseEvent<HTMLElement>, href: string) => {
        event.preventDefault()
        onNavigate(href)
        setOpenMobile(false)
    }

    return (
        <div className="bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400 p-[1px]">
            <div className="bg-background">
                <Sidebar>
                    <SidebarHeader>
                        <div className="flex gap-2 items-center">
                            <img src={`${import.meta.env.BASE_URL}logo.png`} className="w-[30px]" />claire's stash
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton render={<a href="/hacks" />} onClick={(event) => followLink(event, "/hacks")}>
                                        <Gamepad2 />Hacks
                                    </SidebarMenuButton>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubButton href="/hacks#beauty" onClick={(event) => followLink(event, "/hacks#beauty")}>
                                            beauty
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSub>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubButton href="/hacks#ascension" onClick={(event) => followLink(event, "/hacks#ascension")}>
                                            ascension
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSub>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubButton href="/hacks#stairwell" onClick={(event) => followLink(event, "/hacks#stairwell")}>
                                            stairwell
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSub>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubButton href="/hacks#snowrupt" onClick={(event) => followLink(event, "/hacks#snowrupt")}>
                                            snowrupt
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        @UncaughtReference
                    </SidebarFooter>
                </Sidebar>
            </div>
        </div >
    )
}
