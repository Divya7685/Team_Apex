import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Home: React.FC = () => {
    const [countryName, setCountryName] = useState<string>('');
    const navigate = useNavigate();

    const getCountryName = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/details/${countryName}`);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow-lg mt-10">
            <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
            <form onSubmit={getCountryName}>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-lg font-medium mb-2">
                        Enter Country Name
                    </label>
                    <input
                        type="text"
                        id="country"
                        value={countryName}
                        placeholder="Enter country name"
                        className="w-full p-3 border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
                        data-testid="inputbox-test-id"
                        onChange={(e) => setCountryName(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full py-3 text-white font-semibold rounded ${
                        countryName === ''
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    data-testid="button-testid"
                    disabled={countryName === ''}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};