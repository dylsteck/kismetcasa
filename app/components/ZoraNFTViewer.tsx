"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { OpenGraphResponse } from '../utils/types';

export default function ZoraNFTViewer({ zoraURL }: { zoraURL: string }) {
    const [ogData, setOgData] = useState<OpenGraphResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchOGData() {
            try {
                setLoading(true);
                const response = await fetch(`/api/getZoraNFTInfo?url=${encodeURIComponent(zoraURL)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setOgData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        }

        if (zoraURL) {
            fetchOGData();
        }
    }, [zoraURL]);

    if (loading) return <div className="flex justify-center items-center">Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="relative pt-1 max-w-[25vw]">
            {ogData?.ogImage && ogData.ogImage[0] && (
                <>
                    <Image 
                        src={ogData.ogImage[0].url} 
                        alt={`OG Image for ${ogData.ogTitle}`} 
                        layout="responsive" 
                        width={700}
                        height={475}
                        objectFit='contain'
                        className="rounded-md" 
                    />
                    <button 
                        onClick={() => window.open(zoraURL, '_blank')}
                        className="absolute bottom-0 right-0 bg-black/80 text-white p-1.5 rounded-md text-xs hover:bg-black/90 transition"
                    >
                        Mint
                    </button>
                </>
            )}
            <h1 className="text-lg mt-2.5">{ogData?.ogTitle}</h1>
        </div>
    );
}