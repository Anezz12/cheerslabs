import Image from 'next/image';

export default function AboutusPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <p className="text-lg text-center max-w-2xl mb-8">
                Cheers Labs
            </p>
        </div>
    );
    }