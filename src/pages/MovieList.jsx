import React from 'react'

import { Card } from '../components'
import useFetch from '../hooks/useFetch'

function MovieList({apiPath}) {

  const {data:movies} = useFetch(apiPath)

  return (
   
   
    <main className=''>
        <section className='max-w-7xl mx-auto py-7'> 
            <div className='flex justify-start flex-wrap other:justify-evenly'>
            { movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
            ))}
                

            </div>


        </section>

      
    </main>

  
  )
}

export default MovieList




