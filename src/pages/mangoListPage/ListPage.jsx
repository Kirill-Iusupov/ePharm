import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MangaCard from '../../components/mangaCard/MangaCard'
import { getMangaList } from '../../redux/slices/mangaListSlice'
import { fetchGenres } from '../../redux/slices/genresSlice'


const MangoListPage = () => {


  const dispatch = useDispatch()

  const {mangaList, isLoading } = useSelector(state => state.mangaListReducer)

  useEffect(() => {
    dispatch(getMangaList())
    dispatch(fetchGenres())
  }, [dispatch])

  return (
    <div >
        <Container className="flex w-[1240px] px-0 pt-[32px]" maxWidth={false}>
          {isLoading ? <h2>Loading...</h2> : <div className="flex flex-wrap content-between justify-between">
            {mangaList.map(mangaItem => 
              <MangaCard  key = {mangaItem.id} mangaInfo = {mangaItem} className="mx-[30px]"/>
            )}
          </div> }
          
          
        </Container>
    </div>
  )
}

export default MangoListPage