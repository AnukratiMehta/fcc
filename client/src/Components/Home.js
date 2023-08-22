import { AiFillApple } from 'react-icons/ai'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { BsMicrosoft } from 'react-icons/bs'
import { BsSpotify } from 'react-icons/bs'
import { AiFillAmazonCircle } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom';


export default function Home({ isAuthenticated }) {
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-bg flex flex-col items-center justify-center">
            <div className='lg:w-[40%] md:w-[60%] w-[80%]'>
                <div className="flex flex-col text-black md:text-4xl text-2xl font-bold">
                    <h1 className='md:py-5 py-2'>Learn to code - for free.</h1>
                    <h1 className='md:py-5 py-2'>Build projects.</h1>
                    <h1 className='md:py-5 py-2'>Earn certifications.</h1>
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