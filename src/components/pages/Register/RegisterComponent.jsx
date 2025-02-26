import React, { useState } from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import * as z from 'zod';
import toast from 'react-hot-toast';

const registerSchema = z.object({
    nama_pengguna: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
    kode_referensi: z.string().optional(),
});

const RegisterComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
    });
    const [submitError, setSubmitError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.status === 422) {
                throw new Error('Email sudah terdaftar');
            }

            if (!response.ok) {
                toast.error('Registration failed');
            }

            toast.success('Registration successful');

            const result = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            if (result?.error) {
                throw new Error(result.error || 'Sign in failed');
            }

            router.push('/');
        } catch (error) {
            setSubmitError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#F2EFE7] z-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-[10px] bg-white p-5 md:p-7 md:w-[450px] rounded-[20px]"
            >
                {/* Username Field */}
                <div>
                    <label className="text-[#151717] font-semibold">Username</label>
                </div>
                <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-[10px] transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
                    <svg
                        height={20}
                        viewBox="0 0 32 32"
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Layer_3" data-name="Layer 3">
                            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                        </g>
                    </svg>
                    <input
                        {...register('nama_pengguna')}
                        type="text"
                        className="ml-[10px] rounded-[10px] border-0 w-[85%] h-full focus:outline-none"
                        placeholder="Enter your Username"
                    />
                </div>
                {errors.nama_pengguna && (
                    <span className="text-red-500 text-sm">
                        {errors.nama_pengguna.message}
                    </span>
                )}

                {/* Email Field */}
                <div>
                    <label className="text-[#151717] font-semibold">Email</label>
                </div>
                <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-[10px] transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
                    <svg
                        height={20}
                        viewBox="0 0 32 32"
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Layer_3" data-name="Layer 3">
                            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                        </g>
                    </svg>
                    <input
                        {...register('email')}
                        type="email"
                        className="ml-[10px] rounded-[10px] border-0 w-[85%] h-full focus:outline-none"
                        placeholder="Enter your Email"
                    />
                </div>
                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}

                {/* Password Field */}
                <div>
                    <label className="text-[#151717] font-semibold">Password</label>
                </div>
                <div className="relative border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-[10px] transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
                    <svg
                        height={20}
                        viewBox="-64 0 512 512"
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
                    </svg>
                    <input
                        type={(showPassword ? 'text' : 'password')}
                        placeholder="Enter your Password"
                        className="ml-[10px] rounded-[10px] border-0 w-[85%] h-full focus:outline-none"
                        {...register('password')}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-2 top-[14px] focus:outline-none"
                    >
                        {showPassword ? (
                            <IoEyeOutline className="h-5 w-5 text-gray" />
                        ) : (
                            <IoEyeOffOutline className="h-5 w-5 text-gray" />
                        )}
                    </button>
                </div>
                {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}

                {/* Referral Code Field */}
                <div>
                    <label className="text-[#151717] font-semibold">Referral Code</label>
                </div>
                <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-[10px] transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
                    <svg
                        height={20}
                        viewBox="0 0 32 32"
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="Layer_3" data-name="Layer 3">
                            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                        </g>
                    </svg>
                    <input
                        {...register('kode_referensi')}
                        type="text"
                        className="ml-[10px] rounded-[10px] border-0 w-[85%] h-full focus:outline-none"
                        placeholder="Enter your Referral Code"
                    />
                </div>
                {errors.kode_referensi && (
                    <span className="text-red-500 text-sm">{errors.kode_referensi.message}</span>
                )}

                {/* Remember me */}
                <div className="flex flex-row items-center gap-[10px] justify-between">
                    <div className="flex items-center">
                        <input type="checkbox" className="cursor-pointer" />
                        <label className="text-[14px] text-black font-normal ml-[5px]">
                            Remember me
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    isLoading={isLoading}
                    className="mt-[20px] mb-[10px] bg-primary border-0 text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full cursor-pointer hover:bg-[#252727]"
                >
                    Sign Up
                </Button>

                {submitError && (
                    <p className="text-red-500 text-center">{submitError}</p>
                )}

                {/* Login Link */}
                <p className="text-center text-black text-[14px] my-[5px]">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#2d79f3] font-medium cursor-pointer">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterComponent;
