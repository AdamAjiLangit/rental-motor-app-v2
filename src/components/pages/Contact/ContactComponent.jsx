import React from 'react';
import AnimatedCursor from '@/components/ui/animated-cursor';
import Link from 'next/link';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@heroui/react";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import AnimatedLink from '@/components/ui/animated-link';

const ContactComponent = () => {
    return (
        <div className="min-h-screen pt-36 bg-[#F2EFE7]"
            style={{}}
        >
            <AnimatedCursor />
            <div className="flex flex-col gap-5 items-center justify-center pb-10 px-5 md:px-20">
                <h1 className="text-header font-poppinsSemiBold">📞Hubungi Kami</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Card className="w-full z-10">
                        <CardBody>
                            <div className="flex gap-5 items-center justify-center p-5">
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <RiCustomerService2Line size="48" color="#ff4d30" />
                                    <h1 className="text-body font-poppinsSemiBold text-primary">Bantuan</h1>
                                </div>
                                <Divider orientation="vertical" />
                                <div className="flex items-center justify-center gap-2">
                                    <FaWhatsapp size="27" color="#25d366" />
                                    <AnimatedLink text="0812-2222-2222" href="https://wa.me/6281222222222" target="_blank" customStyle="text-[#25d366] font-poppinsMedium after:bg-[#25d366]" />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-full z-10">
                        <CardBody>
                            <div className="flex gap-5 items-center justify-center p-5">
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <MdOutlineMail size="48" color="#ff4d30" />
                                    <h1 className="text-body font-poppinsSemiBold text-primary">Pertanyaan</h1>
                                </div>
                                <Divider orientation="vertical" />
                                <div className="flex items-center justify-center gap-2">
                                    <MdOutlineMail size="27" color="#60a5fa" />
                                    <AnimatedLink text="sewamotorkuduss@gmail.com" href="mailto:sewamotorkuduss@gmail.com" target="_blank" customStyle="text-blue-400 font-poppinsMedium after:bg-[#60a5fa]" />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="w-full z-10 md:col-span-2">
                        <CardBody>
                            <div className="flex gap-5 items-center justify-center p-5">
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <IoLocationOutline size="48" color="#ff4d30" />
                                    <h1 className="text-body font-poppinsSemiBold text-primary">Alamat</h1>
                                </div>
                                <Divider orientation="vertical" />
                                <div className="flex items-center justify-center gap-2">
                                    <IoLocationOutline size="27" color="#f87171" />
                                    <AnimatedLink text="Lokasi Google Maps" href="https://maps.app.goo.gl/hV2uffrpGhjvPSdA7" target="_blank" customStyle="text-[#f87171] font-poppinsMedium after:bg-[#f87171]" />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent