import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Download } from "lucide-react"

import type { ReactNode } from "react"

type Hack = {
    name: string,
    description: ReactNode,
    latestVersionFilename: string,
};

const hacks: Hack[] = [
    {
        name: "beauty",
        description: (
            <p>
                Mini kaizo hack meant for beginner / intermediate players.If you hate stretching your hand to the F7 key, I have good news! This hack is meant to be played without practice savestates, as there is a checkpoint system and you can press L to retry!(You can play however you want though!)

                <br /> Note: for savestateless completions, there's no need to complete entire stages in one go; you're only required to get from checkpoint to checkpoint without savestates:) <br />

                Extended credits: https://pastebin.com/GBvaSjjA<br />

                Estimated playtime: 1h - 1h 30m
            </p>
        ),
        latestVersionFilename: "beauty_hotfix8.bps"
    },
    {
        name: "ascension",
        description: (
            <p>
                Small kaizo level I built in a couple of days, focused on fast-paced precision. Have fun!
                <br />
                Playtesters:<br />
                -ZennyTheZtarBones<br />
                -PatoBrine<br />
            </p>
        ),
        latestVersionFilename: "ascension_hotfix2.bps"
    },
    {
        name: "stairwell",
        description: (
            <p>
                Experimental hack for spooky month.
                <br /><br />
                Features gameplay gimmicks from Geometry Dash, such as the wave, ship and orbs.
                <br /><br />
                Have fun! 💜
                <br /><br />
                🎃Credits:<br />
                Playtesters - ZennyTheZtarBones, lanayxy, Crossbonnie, Ozsef<br />
                Deco inspiration - Escalator and Society by Neomarbilan & more (GD)<br />
                Music inspiration - Escalator and Society by pathetic240px<br />
                <br />
                Changelog:<br />
                1.1 - Fixed first wave being impossible for some people<br />
                1.2 - Fixed light mode music looping, added dive sign to floor 3<br />
                1.3 - Made the random text determined on hardcore, fixed bad floor 4 transition
            </p>
        ),
        latestVersionFilename: "stairwell_1.3.bps"
    },
    {
        name: "snowrupt",
        description: (
            <p>
                chill little ascension sequel ❄<br />
                super short and low effort so don't expect much<br />
                L to reset as always  <br />
            </p>
        ),
        latestVersionFilename: "snowrupt.bps"
    },
];

export default function Home() {
    return (
        <div className="flex flex-col gap-2">
            {hacks.reverse().map(hack => (
                <Hack hack={hack} />
            ))}
        </div>
    )
}

function Hack({ hack }: { hack: Hack }) {
    return (
        <div className="rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400 p-1">
            <div className="rounded-xl bg-background">
                <Card id={hack.name}>
                    <CardHeader className="text-xl">
                        {hack.name}
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-row gap-2 shrink-0 overflow-x-auto">
                            <img src={`${import.meta.env.BASE_URL}${hack.name}/1.jpg`} className="w-[200px]" />
                            <img src={`${import.meta.env.BASE_URL}${hack.name}/2.jpg`} className="w-[200px]" />
                            <img src={`${import.meta.env.BASE_URL}${hack.name}/3.jpg`} className="w-[200px]" />
                            <img src={`${import.meta.env.BASE_URL}${hack.name}/4.jpg`} className="w-[200px]" />
                        </div>
                        <p className="mt-2 text-justify">{hack.description}</p>
                        <Button
                            className="mt-2"
                            render={
                                <a
                                    href={`${import.meta.env.BASE_URL}${hack.latestVersionFilename}`}
                                    download
                                />
                            }
                        >
                            <Download /> Download
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div >
    )
}
