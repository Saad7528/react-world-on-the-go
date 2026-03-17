import React, { use, useState } from 'react';
import Country from './showCuntry'

const Countries = ({countriesPromice}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    


    const countriesData = use(countriesPromice)
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
        
        <div className='countrys'>
            {
                countries.map(countrie => <Country key={countrie.ccn3.ccn3} countrie={countrie}></Country>)
            }
            
        </div>

        </div>
    );
};

export default Countries;