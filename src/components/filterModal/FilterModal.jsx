import { Button, Checkbox } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const FilterModal = () => {

  const {genres, isLoading} = useSelector(state => state.genresReducer)

  // const types =[
  //   "Манга",
  //   "Манхва",
  //   "Комиксы",
  //   "Маньхуа"
  // ]


  console.log(genres)  


  return (
    <div className='block overflow-auto px-[20px] min-w-[400px] h-[700px] mr-[20px] border rounded-[20px] bg-white'>
      <Button>Жанры</Button>
      <ul>
        {isLoading ? <h2>Loading...</h2>: genres.map((genre)=>
            <li key = {genre.id}> <Checkbox className='p-0'/>  {genre.title}</li> ) }
      </ul>

    </div>
  )
}

export default FilterModal