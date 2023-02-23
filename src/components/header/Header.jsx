import React from 'react'
import { Container, TextField, Button } from '@mui/material'


const Header = () => {

  return (
    <div className="bg-[#F3F3F3] shadow-[0_4px_30px_rgba(0, 0, 0, 0.15)]">
      <Container maxWidth={false} className="p-0 w-[1240px]">
        <nav className='flex justify-between h-[110px] items-center' >
          <TextField placeholder='Placeholder' color='primary' className="w-[342px] h-[56px] focus:border-[5px]" />
          
          <div>
            <Button variant='outlined' className="mr-[15px] text-black
            // Стили при наведении
              hover:text-white 
              hover:bg-[#AD02E0] 
              hover:shadow-[0_0_20px_#AD02E0]
            // Стили при нажатии
              active:text-white
              active:bg-[#740994] 
              active:shadow-[0_0_20px_rgba(0, 0, 0, 0.25)]
            ">Войти</Button>
            <Button variant='contained'  className='
            // Стили при наведении
              hover:bg-[#AD02E0] 
              hover:shadow-[0_0_20px_#AD02E0]
            // Стили при нажатии
              active:text-white
              active:bg-[#740994] 
              active:shadow-[0_0_20px_rgba(0, 0, 0, 0.25)]'>Регистрация</Button>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header