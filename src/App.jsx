import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromice = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

function App() {

  return (
    <>
      <h1>Get started</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries countriesPromice={countriesPromice}></Countries>
      </Suspense>
         
    </>
  )
}

export default App
