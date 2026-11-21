import './App.css'
import { useEffect, useState } from 'react'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Navbar from "@/components/Navbar"
import Home from "@/components/pages/Home"

export default function App() {
    const [pathname, setPathname] = useState(() => window.location.pathname.replace(/\/$/, "") || "/")

    useEffect(() => {
        const syncPathname = () => setPathname(window.location.pathname.replace(/\/$/, "") || "/")
        window.addEventListener("popstate", syncPathname)
        return () => window.removeEventListener("popstate", syncPathname)
    }, [])

    useEffect(() => {
        if (pathname === "/") {
            window.history.replaceState({}, "", "/hacks")
            setPathname("/hacks")
        }
    }, [pathname])

    const navigate = (href: string) => {
        const destination = new URL(href, window.location.href)
        window.history.pushState({}, "", destination)
        setPathname(destination.pathname.replace(/\/$/, "") || "/")

        if (destination.hash) {
            requestAnimationFrame(() => {
                document.getElementById(decodeURIComponent(destination.hash.slice(1)))?.scrollIntoView({ behavior: "smooth" })
            })
        } else {
            window.scrollTo({ top: 0 })
        }
    }

    return (
        <>
            <main className="min-h-svh animated-gradient dark">
                <SidebarProvider>
                    <div className="flex min-h-svh w-full">

                        <Navbar onNavigate={navigate} />
                        <div className="min-w-0 flex-1 p-4">
                            <div className="fixed top-2 left-2 z-50 md:hidden">
                                <SidebarTrigger className="bg-background shadow-md" />
                            </div>
                            {pathname === "/programs" ? (
                                <p>huh</p>
                            ) : (
                                <Home />
                            )}
                        </div>
                    </div>
                </SidebarProvider>
            </main>
        </>
    )
}
