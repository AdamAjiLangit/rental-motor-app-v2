import React, { useState } from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

const LoginComponent = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        if (submitted) return;

        try {
            const result = await signIn('credentials', {
                ...data,
                redirect: false,
            });

            if (result?.ok) {
                toast.success("Selamat, Anda berhasil login!");
                setSubmitted(true);
                router.push("/");
            } else if (result?.error) {
                toast.error("Password atau email kurang tepat.");
            }
        } catch (error) {
            console.error('An error occurred during sign-in:', error);
            toast.error('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#F2EFE7] z-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-[10px] bg-white p-5 md:p-7 md:w-[450px] rounded-[20px]"
            >
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
                        type="email"
                        placeholder="Enter your Email"
                        className="ml-[10px] rounded-[10px] border-0 w-[85%] h-full focus:outline-none"
                        {...register('email')}
                        disabled={isSubmitting || submitted}
                    />
                </div>
                {errors.email && (
                    <p className="text-red-500 text-[12px]">{errors.email.message}</p>
                )}

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
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your Password"
                        className="ml-[10px] rounded-[10px] border-0 w-[85%] h-full focus:outline-none"
                        {...register('password')}
                        disabled={isSubmitting || submitted}
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
                    <p className="text-red-500 text-[12px]">{errors.password.message}</p>
                )}

                <div className="flex flex-row items-center gap-[10px] justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            disabled={isSubmitting || submitted}
                        />
                        <label className="text-[14px] text-black font-normal ml-[5px]">
                            Remember me
                        </label>
                    </div>
                    <span className="text-[14px] ml-[5px] text-[#2d79f3] font-medium cursor-pointer">
                        Forgot password?
                    </span>
                </div>

                <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className="mt-[20px] mb-[10px] bg-primary border-0 text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full cursor-pointer hover:bg-[#252727]"
                >
                    Sign In
                </Button>

                <p className="text-center text-black text-[14px] my-[5px]">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-[#2d79f3] font-medium cursor-pointer">
                        Sign Up
                    </Link>
                </p>
                <p className="text-center text-black text-[14px] my-[5px]">Or With</p>

                <div className="flex flex-row items-center gap-[10px] justify-between">
                    <button className="mt-[10px] w-full h-[50px] rounded-[10px] flex justify-center items-center font-medium gap-[10px] border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]">
                        <svg
                            version="1.1"
                            width={20}
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: 'new 0 0 512 512' }}
                            xmlSpace="preserve"
                        >
                            <path
                                style={{ fill: '#FBBB00' }}
                                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                C103.821,274.792,107.225,292.797,113.47,309.408z"
                            />
                            <path
                                style={{ fill: '#518EF8' }}
                                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                            />
                            <path
                                style={{ fill: '#28B446' }}
                                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                            />
                        </svg>
                        Google
                    </button>
                    <button className="mt-[10px] w-full h-[50px] rounded-[10px] flex justify-center items-center font-medium gap-[10px] border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]">
                        <svg
                            version="1.1"
                            height={20}
                            width={20}
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 22.773 22.773"
                            style={{ enableBackground: 'new 0 0 22.773 22.773' }}
                            xmlSpace="preserve"
                        >
                            <g>
                                <g>
                                    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
                  c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                                    <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
                  c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
                  c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
                  c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
                  c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
                  c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                                </g>
                            </g>
                        </svg>
                        Apple
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginComponent;
