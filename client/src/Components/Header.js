import logo from '../assets/logo.jpeg';
import { VscGlobe } from 'react-icons/vsc';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Header({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleSignOut = () => {
        setIsAuthenticated(false);
        navigate('/'); // Navigate to the logout page or handle any other necessary cleanup
    };

    return (
        <div className="fixed top-0 w-full z-200 bg-header px-[15px] h-[38px] flex justify-between items-start py-1">
            <div className="bg-[#3b3b4f] h-full hidden md:flex flex-grow-0 flex-shrink-0 w-1/3 text-white ">
                <div className='flex items-center text-white px-2'><AiOutlineSearch /></div>
                <input placeholder='Search 9,000+ tutorials' className='bg-[#3b3b4f] w-full placeholder:text-white' />
            </div>
            <div className='h-full mx-1 block'>
                <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} >
                    <img src={logo} alt='logo' className='h-full' />
                </a>
            </div>
            <div className='flex flex-grow-0 flex-shrink-0 w-1/3 justify-end gap-[10px] h-full'>
                <div className='text-white border border-1 border-white cursor-pointer items-center md:flex hidden text-2xl px-1 hover:text-black hover:bg-white'>
                    <VscGlobe />
                </div>
                <button className='md:block hidden border border-1 border-white text-white px-4 hover:text-black hover:bg-white'>Menu</button>
                <button className='bg-btn px-3 bg-gradient-to-b from-[#fecc4c] to-[#ffac33] border border-[3px] border-btn btn hover:border-[#f1a02a]' onClick={isAuthenticated ? handleSignOut : () => navigate('/login')}>
                    {isAuthenticated ? 'Sign out' : 'Sign in'}
                </button>
            </div>
        </div>
    );
}
