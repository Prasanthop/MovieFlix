import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '../components'
import useFetch from '../hooks/useFetch'

function Search({apiPath}) {
  const[searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')
  const {data:movies} = useFetch(apiPath, queryTerm)
  return (
    <main className='py-7'>
    <section>
    <p className='text-3xl text-center text-gray700 dark:text-white'> { movies.length === 0 ? `No result found for "${queryTerm}"` :`Result for "${queryTerm}"`}                </p>
    </section>
    <section className='max-w-7xl mx-auto py-7'> 
        <div className='flex flex-wrap '>
        { movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
            

        </div>


    </section>

   
</main>
  )
}

export default Search