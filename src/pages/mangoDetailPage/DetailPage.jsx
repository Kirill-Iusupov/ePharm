import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { fetchMangaDetail } from '../../redux/slices/mangaDetailSlice'
import {fetchGenres} from '../../redux/slices/genresSlice'

const MangoDetailPage = () => {

  const {id} = useParams()

  const dispatch = useDispatch()

  const {mangaInfo} = useSelector(state => state.mangaDetailReducer)
  const {genres} = useSelector(state => state.genresReducer)

  useEffect(()=>{
    dispatch(fetchMangaDetail(id))
    dispatch(fetchGenres())
  }, [dispatch, id])

  const descrip = () =>{
    return {__html:mangaInfo.description}
  }
  console.log("genres => ", genres)
  console.log("mangaInfo => ", mangaInfo)


  return (
    <Container className="w-[1240px] px-0" maxWidth={false}>
      <p className="cursor-pointer my-[32px] text-[24px] leading-[29px] text-normal text-[#878787]">{'\u2190'} Назад</p>
      <div className='flex'>
        <span style ={ {backgroundImage: `url(${mangaInfo.image})`, backgroundSize: "100% 100%"} } 
              className='block w-[328px] h-[328px] mr-[41px] rounded-[16px]'></span>
        <div className="flex flex-col justify-around">
          <h2 className='text-[40px] leading-[49px] font-medium'>{mangaInfo.ru_name}</h2>
          <h2 className='text-[30px] leading-[37px] font-normal'>Информация:</h2>
          <p className='text-[24px] leading-[35px] font-medium text-[#878787]'><b className='text-black'>Тип:</b> {mangaInfo.type}</p>
          <p className='text-[24px] leading-[35px] font-medium text-[#878787]'><b className='text-black'>Год:</b> {mangaInfo.issue_year}</p>
          <p className='text-[24px] leading-[35px] font-medium text-[#878787]'><b className='text-black'>Жанр:</b> </p>  
        </div> 
      </div>
      <div className='w-[100%] border-[2px] border-[#CECECE] my-[32px]' />
      <p className='text-[35px] leading-[43px] font-medium mb-[10px]'>Синопсис</p>
      <div dangerouslySetInnerHTML={descrip()} className="text-[24px] leading-[140%] font-normal text-[#616161]"/> 
      <div className='w-[100%] border-[2px] border-[#CECECE] my-[32px]' />
      <div>
        <p className='text-[35px] leading-[43px] font-medium mb-[10px]'>Топ рецензий</p>

      </div>
    </Container>
  )
}

export default MangoDetailPage