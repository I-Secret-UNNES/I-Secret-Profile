import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import InstagramLogo from '@/Components/icon/InstagramLogo';
import YoutubeLogo from '@/Components/icon/YoutubeLogo';
import LinkedinLogo from '@/Components/icon/LinkedinLogo';
import XLogo from '@/Components/icon/XLogo';

export default function GuestLayout({ children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className='min-h-screen bg-gray-100'>
      <nav className='bg-white border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16 '>
            <div className='flex '>
              <div className='shrink-0 flex items-center'>
                <Link href='/'>
                  <ApplicationLogo className='block h-9 w-auto fill-current text-gray-800' />
                </Link>
              </div>
            </div>

            <div className='hidden sm:flex sm:items-center sm:ms-6'>
              <div className='hidden space-x-8 sm:-my-px sm:ms-10 sm:flex '>
                <NavLink
                  href={route('dashboard')}
                  active={route().current('dashboard')}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  href={route('events')}
                  active={route().current('Projects')}
                >
                  Projects
                </NavLink>
                <NavLink
                  href={route('events')}
                  active={route().current('events')}
                >
                  Events
                </NavLink>
                <NavLink
                  href={route('events')}
                  active={route().current('blogs')}
                >
                  Blogs
                </NavLink>
                <NavLink
                  href={route('events')}
                  active={route().current('aboutus')}
                >
                  About Us
                </NavLink>
              </div>
              <div className='ms-3 relative'>
                {/* <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            name

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown> */}
              </div>
            </div>

            <div className='-me-2 flex items-center sm:hidden'>
              <button
                onClick={() =>
                  setShowingNavigationDropdown(previousState => !previousState)
                }
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
              >
                <svg
                  className='h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    className={
                      !showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    }
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                  <path
                    className={
                      showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    }
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'
          }
        >
          <div className='pt-2 pb-3 space-y-1'>
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              Dashboard
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              Project
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              Events
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              Blogs
            </ResponsiveNavLink>
            <ResponsiveNavLink
              href={route('dashboard')}
              active={route().current('dashboard')}
            >
              About Us
            </ResponsiveNavLink>
          </div>

          <div className='pt-4 pb-1 border-t border-gray-200'>
            {/* <div className="px-4">
                        <div className="font-medium text-base text-gray-800">name</div>
                        <div className="font-medium text-sm text-gray-500">email</div>
                    </div> */}

            {/* <div className="mt-3 space-y-1"> */}
            {/* <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            Log Out
                        </ResponsiveNavLink> */}
            {/* </div> */}
          </div>
        </div>
      </nav>

      {/* {header && (
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
            </header>
        )} */}

      <main>{children}</main>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className='px-10 bg-[#1C447D] w-full h-full border-[#066cb5] border-y-2 py-10'>
      <div className='lg:flex justify-between'>
        <div className='py-3 lg:w-[50%]'>
          <img
            src='images/I-SECRET 1.png'
            alt='Logo I-Secret'
            className='lg:mx-0 w-28 h-24 mx-auto my-2'
          />
          <p className=' lg:text-left text-white font-normal text-lg mx-auto text-center'>
            Fakultas Matematika dan Ilmu Pengetahuan Alam
          </p>
          <p className=' lg:text-left text-white font-normal text-lg mx-auto text-center'>
            Teknik Informatika & Sistem Informasi
          </p>
        </div>
        <div className='py-3 hidden lg:block w-20'>
          <p className='font-bold text-white'>General</p>
          <ul className='text-white'>
            <li className='hover:underline'>
              <a href='#'>Home</a>
            </li>
            <li className='hover:underline'>
              <a href='#'>About Us</a>
            </li>
            <li className='hover:underline'>
              <a href='#'>Events</a>
            </li>
            <li className='hover:underline'>
              <a href='#'>Projects</a>
            </li>
            <li className='hover:underline'>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
        <div className='py-5 lg:py-3 lg:mx-2'>
          <div className='hidden lg:block'>
            <p className='text-white text-lg font-bold'>
              Join our mailing list!
            </p>
            <p className='text-white text-lg'>
              Always get update about our events and posts
            </p>
            <input
              type='email'
              placeholder='Your Email'
              className='placeholder:text-white text-sm w-52 px-2 py-1 my-3 border-slate-500 border-2 shadow-sm rounded-lg'
            />
            <button className='absolute bg-[#FF6666] text-black font-medium py-[3px] px-6 rounded-md mt-[13px] -ml-2'>
              Submit
            </button>
          </div>
          <p className='lg:text-white lg:text-left text-white text-center text-lg font-bold'>
            Contact us (Email) :
          </p>
          <a href='#'>
            <p className='lg:text-white lg:text-left text-white text-center text-lg underline'>
              i-secret@unnes.ac.id
            </p>
          </a>
        </div>
        <div className='flex lg:hidden gap-8 justify-center py-5'>
          <a href='#'>
            <InstagramLogo className='block h-9 w-auto fill-current text-gray-800' />
          </a>
          <a href='#'>
            <YoutubeLogo className='block h-9 w-auto fill-current text-gray-800' />
          </a>
          <a href='#'>
            <LinkedinLogo className='block h-9 w-auto fill-current text-gray-800' />
          </a>
          <a href='#'>
            <XLogo className='block h-9 w-auto fill-current text-gray-800' />
          </a>
        </div>
        <div className='hidden lg:grid max-w-10 gap-2 py-3 mx-2'>
          <a href='#'>
            <InstagramLogo className='block h-9 w-auto fill-current text-gray-800' />
          </a>
          <a href='#'>
            <YoutubeLogo className='block h-9 w-auto fill-current text-gray-800' />
          </a>
          <a href='#'>
            <LinkedinLogo className='block h-9 w-auto fill-current text-gray-800' />
          </a>
          <a href='#'>
            <XLogo className='block h-9 w-auto fill-current text-gray-800' />
          </a>
        </div>
      </div>
      <p className='lg:text-white text-white text-xl text-center pt-6'>
        &copy; 2024 I-SECRET
      </p>
    </footer>
  );
};
