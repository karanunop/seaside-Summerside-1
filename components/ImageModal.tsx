// components/ImageModal.js
import React from 'react';
import Image from 'next/image';

interface ImageModalProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50">
            <div className="relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-white text-lg z-50 focus:outline-none">&times;</button>
                <Image src={src} alt={alt} width={800} height={600} />
            </div>
        </div>
    );
};

export default ImageModal;

