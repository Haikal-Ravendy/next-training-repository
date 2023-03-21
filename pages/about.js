import { Navbar } from "@/src/components/navbar.component";

export default function About() {
    // about me is a page that contains information about me
    return (
        <div className={'dark'}>
            <Navbar />
            <div className={'w-[800px] text-3xl dark:bg-white bg-black '} >
                <h1>About Me</h1>
            </div>
        </div>
    )
}