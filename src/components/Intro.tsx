import Image from "next/image";


export default function Intro({className}:{className : string}) {
    return (
        <div className={`flex flex-col ml-96 ${className}`}>
            <Image className="rounded-full mt-20" width={150} height={150} src="/image.png" alt="profile"></Image>
            <h1 className="font-raleway mt-10 text-4xl font-medium">Hi I'm Arnav</h1>
            <h2 className="mt-2 text-xl font-normal text-green-200">learning and building stuff.</h2>
            <h1 className="mt-20 font-bold text-3xl">Education</h1>
            <div className="flex justify-start items-center">
            <Image src="/jecrc.png" className="rounded-md mt-10" width={50} height={60} alt="college logo"></Image>
            <div className="mt-10 ml-10">
            <h3 className="font-raleway font-semibold text-lg">B.Tech Computer Science & Engineering</h3>
            <h3 className="font-mono text-sm">JECRC University — (2022-2026)</h3>
            </div>
            </div>
        </div>
    )
}