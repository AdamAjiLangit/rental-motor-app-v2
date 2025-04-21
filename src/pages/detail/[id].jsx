import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { detailMotorAPI } from '@/api/get';
import Navbar from '@/components/layouts/Navbar/Navbar';
import Footer from '@/components/layouts/Footer/Footer';
import { Card, CardBody, CardFooter, Button } from '@heroui/react';
import AnimatedLink from '@/components/ui/animated-link';

const DetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [motorData, setMotorData] = useState([]);
    const [available, setAvailable] = useState(true);

    useEffect(() => {
        const fetchMotorData = async () => {
            try {
                if (id) {
                    const response = await detailMotorAPI.get(id);
                    const motor = response.data.listMotor;
                    setMotorData(motor);

                    if (motor.status_motor === "Tersedia") {
                        setAvailable(true);
                    } else {
                        setAvailable(false);
                    }
                }
            } catch (error) {
                console.error('Error fetching motor data:', error);
            }
        };

        fetchMotorData();
    }, [id]);

    const statusColor = motorData.status_motor === 'Tidak Tersedia'
        ? 'text-red-500'
        : motorData.status_motor === 'Tertunda'
            ? 'text-yellow-500'
            : 'text-green-500';

    return (
        <>
            <Navbar />
            <div className='min-h-screen py-10 px-5 md:px-20 flex items-center justify-center'>
                <Card
                    className="min-w-[350px] max-w-[350px] md:min-w-[800px] md:max-w-[800px] flex md:flex-row flex-col items-center bg-white shadow-lg rounded-2xl border-2 relative p-14 border-transparent z-[1]"
                    style={{
                        backgroundImage: `linear-gradient(white, white), linear-gradient(calc(var(--rotation)), #ff4d30 0, #ff4d30 20%, transparent 80%)`,
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                    }}
                >
                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${motorData.gambar_motor}`} alt={motorData.nama_motor} className="w-full h-96 object-contain rounded-t-xl" loading="lazy" />

                    <CardBody className="text-center md:text-start p-4 space-y-3">
                        <h2 className="text-3xl font-bold text-red-500">{motorData.nama_motor}</h2>

                        <div className="flex justify-between w-full text-gray-700 font-semibold my-2">
                            <div>
                                <p className="text-base">Harian :</p>
                                <p className="font-bold text-red-500 text-lg">Rp {motorData.harga_motor_per_1_hari?.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-base">Mingguan :</p>
                                <p className="font-bold text-red-500 text-lg">Rp {motorData.harga_motor_per_1_minggu?.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div>
                                <h3 className='font-semibold'>Tipe :</h3>
                                <p className='text-red-500 text-lg font-semibold'>{motorData.tipe_motor}</p>
                            </div>
                            <div>
                                <h3 className='font-semibold'>Merek :</h3>
                                <p className='text-red-500 text-lg font-semibold'>{motorData.merk_motor}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='font-semibold'>Fasilitas :</h3>
                            <p className='text-red-500 text-lg font-semibold'>2 Helm & 2 Jas hujan</p>
                        </div>
                        <div>
                            <h3 className='font-semibold'>Status :</h3>
                            <div className={`flex items-center ${statusColor}`}>
                                <span className="h-4 w-4 rounded-full bg-current mr-2"></span>
                                <p className='text-lg font-semibold'>{motorData.status_motor}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Button
                                className="w-full bg-red-500 text-white px-5 py-2 rounded-lg text-base font-semibold hover:bg-red-600 transition"
                                // onPress={() => handlePress(id)}
                                isDisabled={!available}
                            >
                                Sewa Sekarang!
                            </Button>
                            <AnimatedLink text="Cek Motor Lainnya " href='/katalog' customStyle="text-primary text-button after:bg-primary" />
                        </div>
                    </CardBody>
                </Card>
            </div >
            <Footer />
        </>
    );
};

export default DetailPage;
