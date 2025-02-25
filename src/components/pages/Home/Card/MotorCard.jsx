import React, { useRef, useEffect } from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import AnimatedLink from "@/components/ui/animated-link";

const MotorCard = ({
    id,
    image,
    title,
    dailyPrice,
    weeklyPrice,
    availability,
    onRent,
    onDetails,
}) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const angle = Math.atan2(-x, y);
            card.style.setProperty("--rotation", `${angle}rad`);
        };

        card.addEventListener("mousemove", handleMouseMove);
        return () => card.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <Card
            ref={cardRef}
            className="max-w-sm bg-white shadow-lg rounded-xl border-2 relative p-5 border-transparent z-[1]"
            style={{
                backgroundImage: `linear-gradient(white, white), linear-gradient(calc(var(--rotation)), #ff4d30 0, #ff4d30 20%, transparent 80%)`,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
            }}
        >
            <img src={image} alt={title} className="w-full h-60 object-contain rounded-t-xl" loading="lazy" />

            <CardBody className="text-center p-4">
                <h2 className="text-xl font-bold text-red-500">{title}</h2>

                <div className="flex justify-between text-gray-700 font-semibold my-2">
                    <div>
                        <p className="text-sm">Harian:</p>
                        <p className="font-bold">Rp {dailyPrice.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-sm">Mingguan:</p>
                        <p className="font-bold">Rp {weeklyPrice.toLocaleString()}</p>
                    </div>
                </div>

                <p className={`font-semibold ${availability ? "text-green-600" : "text-red-500"}`}>
                    {availability ? "Tersedia" : "Tidak Tersedia"}
                </p>
            </CardBody>

            <CardFooter className="flex flex-col gap-2 text-center pb-4">
                <Button
                    className="w-full bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                    onPress={onRent}
                >
                    Sewa Sekarang!
                </Button>

                <AnimatedLink text="Lihat Detail" href={`/booking/${id}`} customStyle="text-primary text-button after:bg-primary" />
            </CardFooter>
        </Card>
    );
};

export default MotorCard;
