import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
    const [countryName, setCountryName] = useState('');
    const navigate = useNavigate();

    const getCountryName = async (e: FormEvent) => {
        e.preventDefault();
        navigate(`/details/${countryName}`);
    };

    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://your-image-url-here.jpg")' }}>
            <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white px-8 py-6 rounded-lg bg-opacity-80 bg-blue-900 shadow-lg w-full sm:w-96">
                    <h1 className="text-4xl font-semibold mb-6">Weather App</h1>
                    <form onSubmit={getCountryName}>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="country-name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                value={countryName}
                                onChange={(e) => setCountryName(e.target.value)}
                                placeholder="Enter country name"
                                data-testid="inputbox-test-id"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-2 text-white rounded-md ${countryName === '' ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                            disabled={countryName === ''}
                            data-testid="button-testid"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};