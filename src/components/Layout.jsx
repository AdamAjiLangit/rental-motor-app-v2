import Navbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}