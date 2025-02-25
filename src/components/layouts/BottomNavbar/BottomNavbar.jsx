import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMotorbikeFill, RiCustomerService2Line } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from "@heroui/react";

const BottomNavbar = () => {
    const pathname = usePathname();
    return (
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 px-3">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                {/* Beranda */}
                <Tooltip content="Beranda">
                    <Link
                        href="/"
                        data-tooltip-target="tooltip-home"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <svg
                            className={`w-5 h-5 mb-1 ${pathname === "/" ? "text-primary dark:text-primary" : "text-gray-500 dark:text-gray-400"
                                } group-hover:text-primary`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className="sr-only">Beranda</span>
                    </Link>
                </Tooltip>
                <div
                    id="tooltip-home"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
                >
                    Beranda
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                {/* Pesanan */}
                <Tooltip content="Pesanan">
                    <Link
                        href="/pesanan"
                        data-tooltip-target="tooltip-wallet"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <svg
                            className={`w-5 h-5 mb-1 ${pathname === "/pesanan" ? "text-primary dark:text-primary" : "text-gray-500 dark:text-gray-400"
                                } group-hover:text-primary`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                        </svg>
                        <span className="sr-only">Pesanan</span>
                    </Link>
                </Tooltip>
                <div
                    id="tooltip-wallet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
                >
                    Pesanan
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                {/* Katalog */}
                <Tooltip content="Katalog">
                    <Link
                        href="/katalog"
                        data-tooltip-target="tooltip-settings"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <RiMotorbikeFill
                            className={`w-6 h-6 mb-1 ${pathname === "/katalog" ? "text-primary dark:text-primary" : "text-gray-500 dark:text-gray-400"
                                } group-hover:text-primary`}
                        />
                        <span className="sr-only">Katalog</span>
                    </Link>
                </Tooltip>
                <div
                    id="tooltip-settings"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
                >
                    Katalog
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                {/* Tentang */}
                <Tooltip content="Tentang">
                    <Link
                        href="/tentang"
                        data-tooltip-target="tooltip-settings"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <FaRegQuestionCircle
                            className={`w-6 h-6 mb-1 ${pathname === "/tentang" ? "text-primary dark:text-primary" : "text-gray-500 dark:text-gray-400"
                                } group-hover:text-primary`}
                        />
                        <span className="sr-only">Tentang</span>
                    </Link>
                </Tooltip>
                <div
                    id="tooltip-settings"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
                >
                    Tentang
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                {/* Kontak */}
                <Tooltip content="Kontak">
                    <Link
                        href="/kontak"
                        data-tooltip-target="tooltip-profile"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                    >
                        <RiCustomerService2Line
                            className={`w-6 h-6 mb-1 ${pathname === "/kontak" ? "text-primary dark:text-primary" : "text-gray-500 dark:text-gray-400"
                                } group-hover:text-primary`}
                        />
                        <span className="sr-only">Kontak</span>
                    </Link>
                </Tooltip>
                <div
                    id="tooltip-profile"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
                >
                    Kontak
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>
    )
}

export default BottomNavbar