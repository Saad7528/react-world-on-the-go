import React, { use, useState } from 'react';
import Country from './showCuntry'

const Countries = ({countriesPromice}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries = (countrie) => {
        const newVisitedCountries = [...visitedCountries,countrie]
        setVisitedCountries(newVisitedCountries)
        console.log("visitedCountries clicked", newVisitedCountries, countrie);
    }

    const handleVisitedFlag =(flag) => {
        console.log('Add flag clicked', flag);
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag)

    }

    const countriesData = use(countriesPromice)
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <div className='stikey'>
            <h1>Total Countries: {countries.length}</h1>
            <h3>Total Visited Countries: {visitedCountries.length}</h3>
            <ol>
            {
                visitedCountries.map(country =>  <li>{country.name.common}</li>)
            }

            </ol>
            <h3>Visited Flags: {visitedFlag.length}</h3>

            <div className='imgContainer'>
            {
                visitedFlag.map(flag => <img src={flag}></img>)
            }

            </div>

            </div>
        
        <div className='countrys'>
            {
                countries.map(countrie => <Country handleVisitedCountries={handleVisitedCountries}  key={countrie.ccn3.ccn3} countrie={countrie} handleVisitedFlag={handleVisitedFlag}></Country>)
            }
            
        </div>

        </div>
    );
};

export default Countries;