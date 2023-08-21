import { useState } from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';


export default function Login({ setIsAuthenticated }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // New state for error message

    const navigate = useNavigate();

    const responseGoogle = (response) => {
        setIsAuthenticated(true);
        console.log(response);
    };
    const errorGoogle = (error) => {
        console.log(error);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name || !email || !password) {
            setErrorMessage('All fields are required');
            return;
        }

        // Validate password format (at least 8 characters, containing letters and numbers)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must be at least 8 characters and contain both letters and numbers');
            return;
        }

        console.log('Form submitted'); // Debugging statement
    
        try {
          console.log('Attempting fetch request'); // Debugging statement
          const response = await fetch('http://localhost:5001/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });
    
          console.log('Response received:', response); // Debugging statement
    
          const responseData = await response.json();
          console.log('Response data:', responseData); // Debugging statement
    
          if (response.ok) {
            const { token } = responseData;
            localStorage.setItem('access_token', token);
            setIsAuthenticated(true); // Update isAuthenticated status here
            console.log('User registered successfully');
            navigate('/courses');
        } else {
            console.error('Failed to register user:', responseData.message);
            setErrorMessage(responseData.message);
        }
    } catch (error) {
        console.error('Error registering user:', error);
    }
      };

    return (
        <div className="min-h-screen bg-bg flex flex-col items-center justify-center">
            <div className="bg-white border border-black border-[3px] w-[90%] md:w-[35%] lg:w-[25%] h-[75%] py-10 md:h-3/4 flex items-center justify-center flex-col">
                <FaFreeCodeCamp className='text-4xl my-2' />
                <h1 className='text-2xl font-bold my-2 text-center'>Login to freeCodeCamp</h1>
                <form onSubmit={handleSubmit} className='flex flex-col my-2'>
                    <input
                        placeholder='Name'
                        type='text'
                        className='p-2 border border-[2px] border-black my-2'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder='Email'
                        type='email'
                        className='p-2 border border-[2px] border-black my-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder='Password'
                        type='password'
                        className='p-2 border border-[2px] border-black my-2'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='bg-btn my-5 py-2 px-8 bg-gradient-to-b from-[#fecc4c] to-[#ffac33] border border-[3px] border-btn btn hover:border-[#f1a02a]'
                    >
                        Register
                    </button>

                    <div className='w-full flex items-center justify-center'>
                        <GoogleLogin onSuccess={responseGoogle} onError={errorGoogle} />
                    </div>

                </form>
                {errorMessage && (
                        <div className="text-red-500 text-center pt-6">{errorMessage}</div>
                    )}
            </div>
        </div>
    );
}
