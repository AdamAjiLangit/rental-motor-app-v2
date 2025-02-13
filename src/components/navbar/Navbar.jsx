import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useAppStore from "@/utils/store";

export default function Navbar() {
    const pathname = usePathname();
    const { setShowCurveTransition } = useAppStore();

    const handleNavigation = (href) => {
        if (href === "/" && pathname !== "/") {
            setShowCurveTransition(true); // Enable Curve Transition when going to Home
        }
    };

    return (
        <nav className="fixed top-5 left-0 w-full flex gap-4 p-4 bg-white shadow-md z-[999]">
            <Link href="/" onClick={() => handleNavigation("/")}>Home</Link>
            <Link href="/about" onClick={() => handleNavigation("/about")}>About</Link>
            <Link href="/contact" onClick={() => handleNavigation("/contact")}>Contact</Link>
        </nav>
    );
}
