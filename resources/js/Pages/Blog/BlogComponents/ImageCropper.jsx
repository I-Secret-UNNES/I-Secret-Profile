import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const ImageCropper = ({ imageSrc, onCrop }) => {
    const cropperRef = useRef(null);

    const handleCrop = () => {
        const cropper = cropperRef.current.cropper;
        onCrop(cropper.getCroppedCanvas().toDataURL());
    };

    return (
        <div>
            <Cropper
                src={imageSrc}
                style={{ height: 400, width: '100%' }}
                // initialAspectRatio={16/9}
                aspectRatio={16/9}
                guides={false}
                ref={cropperRef}
                viewMode={1}
                autoCropArea={1}
                background={false}
                responsive={true}
                checkOrientation={false}
            />
            <div className='flex items-end justify-end'>
                <button type='button' onClick={handleCrop} className='btn text-white mt-4'>
                    Crop Image
                </button>
            </div>
        </div>
    );
};

export default ImageCropper;
