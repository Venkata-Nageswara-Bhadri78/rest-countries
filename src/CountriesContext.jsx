// CountriesContext.jsx

import React, { useEffect, useState, createContext, useContext } from 'react';

const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try{
                const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,cca3,currencies,languages,borders");

                if(!res.ok){
                    throw new Error("Failed to fetch countries");
                }
                const data = await res.json();
                setCountries(data);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        }
        fetchCountries();
    }, []);

    return (
        <CountriesContext.Provider value={{ countries, loading, error }}>
            {children}
        </CountriesContext.Provider>
    );
};

const useCountries = () => useContext(CountriesContext);

export { CountriesContext, CountriesProvider, useCountries };