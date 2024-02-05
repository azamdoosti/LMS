import { ReactNode } from "react";


export default function StudentLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <aside className="flex bg-gray-300 w-80 justify-center items-center"></aside>
            <main>{children}</main>
        </>
    )
}