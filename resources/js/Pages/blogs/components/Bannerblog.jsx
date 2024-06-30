import { useState, useEffect } from 'react';

function BannerEvents({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  function prevSlide() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      const newIndex = Math.max(currentIndex - 1, 0);
      carousel.scrollTo({
        left: newIndex * carousel.clientWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  }

  function nextSlide() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      const newIndex = (currentIndex + 1) % totalSlides; // Loop back to start
      carousel.scrollTo({
        left: newIndex * carousel.clientWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(newIndex);
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <section className='h-[calc(100vh-4rem)] w-full bg-orange-200 relative overflow-hidden'>
      {' '}
      {/* Adjust height to account for navbar */}
      <div
        id='carousel'
        className='w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth flex'
      >
        {images.map((image, index) => (
          <div key={index} className='flex-none w-full h-full'>
            <img
              src={image.src}
              alt={image.alt}
              className='w-full h-full object-cover snap-center'
            />
          </div>
        ))}
      </div>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 ${currentIndex === index ? 'bg-blue-500' : 'bg-blue-200'} rounded-full`}
          ></div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className='absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>
    </section>
  );
}

export default BannerEvents;

const Jarak = ({ tinggi }) => {
    return <div className={tinggi}></div>;
  };