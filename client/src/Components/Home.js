import { AiFillApple } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { BsMicrosoft } from 'react-icons/bs'
import { BsSpotify } from 'react-icons/bs'
import { AiFillAmazonCircle } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook


export default function Home({isAuthenticated}) {
    const navigate = useNavigate(); // Get the navigation function

    return (
        <div className="h-screen bg-bg flex flex-col items-center justify-center">
            <div className='w-[40%]'>
                <div className="flex flex-col text-black text-4xl font-bold">
                    <h1 className='py-5'>Learn to code - for free.</h1>
                    <h1 className='py-5'>Build projects.</h1>
                    <h1 className='py-5'>Earn certifications.</h1>
                </div>
                <div >
                    <p className='py-4'>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>
                    <div className='flex justify-between text-2xl py-4'>
                        <AiFillApple />
                        <AiFillGoogleCircle />
                        <BsMicrosoft />
                        <BsSpotify />
                        <AiFillAmazonCircle />
                    </div>
                </div>
                <div className='text-center mt-5'>
                <button
                    onClick={() => navigate(isAuthenticated ? '/courses' : '/login')}
                    className='bg-btn py-2 px-8 bg-gradient-to-b from-[#fecc4c] to-[#ffac33] border border-[3px] border-btn btn hover:border-[#f1a02a]'
                >
                    {isAuthenticated ? "Let's explore the courses!" : "Get Started - It's free"}
                </button>
                </div>
            </div>
        </div>
    )
}