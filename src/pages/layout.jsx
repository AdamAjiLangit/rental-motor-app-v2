import Navbar from "@/components/navbar/Navbar"

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}