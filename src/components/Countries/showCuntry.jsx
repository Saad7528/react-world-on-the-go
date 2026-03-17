import React, { useState } from 'react';

const Country = ({countrie}) => {
    const [visited, setVisited] = useState(false)
    // console.log(countrie.currencies.currencies);

    const handleVisit = () =>{
        
        // Basic System
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // Ternari System
        // setVisited(visited ? false : true)

        setVisited(!visited)



    }

    return (
        <div className='countryCard'>
            <div>
                <img  src={countrie.flags.flags.png} alt="" />
            </div>
            <div>
            <h2>Country Name: {countrie.name.common}</h2>
            <p>Population: {countrie.population.population} </p>
            <p>Area: {countrie.area.area} - {countrie.area.area > 3000 ? 'Big Country' : 'Small Country'}</p>
            <button id='visiteBtn' className={`visited-Btn ${visited && 'not-visited-Btn'}`} onClick={handleVisit}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            </div>
            

            
        </div>
    );
};

export default Country;

