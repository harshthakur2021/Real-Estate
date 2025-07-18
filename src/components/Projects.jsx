import React, { useState, useEffect } from 'react';
import { assets, projectsData } from '../assets/assets';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setcardsToShow] = useState(1);

  // useEffect to handle responsive number of cards
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setcardsToShow(projectsData.length);
      } else {
        setcardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  // Next and Previous project functions
  const nextproject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevproject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
      id='Projects'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects{' '}
        <span className='underline underline-offset-4 decoration-1 font-light'>
          Completed
        </span>
      </h1>
      <p className='text-center text-gray-600 mt-4'>
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Navigation buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button
          onClick={prevproject}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button
          onClick={nextproject}
          className='p-3 bg-gray-200 rounded'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Project cards slider */}
      <div className='overflow-hidden'>
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='relative flex-shrink-0 w-full sm:w-1/4'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto mb-14'
              />
              <div className='absolute left-0 right-0 bottom-0 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-xl font-semibold text-gray-800'>
                    {project.title}
                  </h2>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;