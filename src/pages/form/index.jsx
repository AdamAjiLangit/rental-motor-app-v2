'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";

const Form = () => {
    const router = useRouter();
    const { data: session } = useSession();

    if (!session) {
        return (
            <>
                <h1></h1>
                <Button onPress={() => router.push("/login")}>
                    Login
                </Button>
            </>
        )
    }
    return (
        <>
        <h1></h1>
            <button onClick={async () => {
                await signOut({ redirect: false })
                router.push("/login")
            }}>
                Keluar
            </button>
        </>
    )
}

export default Form