import React from 'react';
import Link from 'next/link';
import AnimatedCursor from '@/components/ui/animated-cursor';
import { Image } from '@heroui/react';
import { IoLocationSharp } from 'react-icons/io5';

const AboutComponent = () => {
    return (
        <div className="min-h-screen pt-36 bg-[#F2EFE7]"
            style={{}}
        >
            <AnimatedCursor />
            <div className="flex flex-col gap-5 items-center justify-center pb-10 px-5 md:px-20">
                <h1 className="text-subheader md:text-header font-poppinsSemiBold">Tentang Kami👋</h1>
                <p className="text-button md:text-body text-center font-poppinsMedium">Selamat datang di layanan <span className="text-primary">sewa motor terpercaya di Kudus!</span> Kami adalah solusi transportasi andalan Anda, menyediakan akses mudah dan nyaman ke berbagai destinasi di sekitar Kudus. Dengan komitmen kami untuk memberikan layanan terbaik, kami bangga menjadi mitra perjalanan pilihan bagi masyarakat lokal dan wisatawan.</p>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center pb-10 px-5 md:px-20">
                <h1 className="text-subheader md:text-header font-poppinsSemiBold">Layanan Kami🛵</h1>
                <p className="text-button md:text-body text-center font-poppinsMedium">Kami menyediakan berbagai pilihan <span className="text-primary">motor berkualitas tinggi</span> untuk memenuhi kebutuhan perjalanan Anda. Dengan tarif yang kompetitif dan proses penyewaan yang sederhana, kami memastikan pengalaman menyewa motor Anda menjadi lancar dan menyenangkan. Kami juga menawarkan berbagai paket sewa harian dan mingguan yang dapat disesuaikan dengan kebutuhan Anda.</p>
            </div>
            <div className="flex flex-col gap-10 items-center justify-center pb-10 px-5 md:px-20">
                <h1 className="text-subheader md:text-header font-poppinsSemiBold">Keunggulan Kami✨</h1>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
                    <ImageCard src="/assets/images/about/1.png" text="Kualitas Terbaik" />
                    <ImageCard src="/assets/images/about/2.png" text="24/7 Customer Service" />
                    <ImageCard src="/assets/images/about/3.png" text="Harga Pas" />
                    <ImageCard src="/assets/images/about/4.png" text="Kemudahan Pembayaran" />
                    <ImageCard src="/assets/images/about/5.png" text="Layanan Antar Jemput Kendaraan" />
                    <ImageCard src="/assets/images/about/6.png" text="Pemantauan GPS untuk keamanan" />
                </div>
            </div>
            <div className="flex flex-col gap-5 items-center justify-center px-10 py-20 bg-primary w-full">
                <h1 className="text-subheader md:text-header font-poppinsSemiBold text-white">Lokasi Kami🗺️</h1>
                <div className="w-full max-w-[700px] overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.872378039436!2d110.89978167475574!3d-6.785381493211696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70db4255192741%3A0x6e1d151b0d52676c!2sSewa%20Motor%20Kudus!5e0!3m2!1sid!2sid!4v1722223502208!5m2!1sid!2sid"
                        className="w-full h-64 lg:h-80"
                        allowFullScreen=""
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='flex flex-row gap-2 items-center mt-4 mb-10 bg-[#F2EFE7] p-3 rounded-lg'>
                    <IoLocationSharp size='24' color='red' />
                    <Link href="https://maps.app.goo.gl/xFp83TkWAVgps3No7" target='_blank'>
                        <span
                            className='font-semibold text-primary text-sm lg:text-base hover:underline'
                        >
                            Trengguluh, Honggosoco, Kec. Jekulo, Kabupaten Kudus, Jawa Tengah
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

const ImageCard = ({ src, text }) => {
    return <div className="flex flex-col gap-3 items-center justify-center">
        <Image src={src} alt="rental motor kudus" className="w-32 h-32 object-cover" />
        <p className="text-button md:text-body text-center font-poppinsMedium text-default-700 max-w-44">{text}</p>
    </div>
}

export default AboutComponent;