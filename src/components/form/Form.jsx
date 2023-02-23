import { Button } from '@mui/material'
import React, {useRef, useState} from 'react'
const Form = ( {act} ) => {  

  const fileRef = useRef()
  const [label, setLabel] = useState(act)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [file, setFile] = useState(null)
  
  
  //Общие стили для схожих элементов в окнах
  const style="border-[1px] border-solid border-black p-[10px] rounded-[8px] mb-[30px]"
  const winFormStyle = "m-auto leading-[35px] text-[24px]"
  const line = "border-[2px] border-[#878787] mb-[40px]"
  const formFlex = "flex flex-col"
  const underline = "absolute w-[100%] border-[4px] border-[#AD02E0] rounded bottom-[-6px]"
  //

  

  const handleClick = () =>{
    fileRef.current.click() 
  }

  const handleChange = (e) => {
    setFile(e.target.files[0])
    
  }

  const regUser = () =>{
    // const formData = new FormData();
    // formData.append("username", username)
    // formData.append("nickname", nickname)
    // formData.append("password", password)
    // formData.append("image_file", file)

    const obj = {
      "username": username,
      "nickname": nickname,
      "password": password
    }

    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://134.122.75.14:8666/swagger/api/auth/signup/', [])
  
    xhr.send([obj])

    xhr.onload = function() {
      alert(`Загружено: ${xhr.status} ${xhr.response}`);
    };

    console.log(file) 

    // const response = await fetch('http://134.122.75.14:8666/swagger/api/auth/signup/', {
    //   method: 'POST',
    //   body: formData
    // })
    // const data = await response.json()


    // console.log(data)
  }
 

  return (
    <div className='w-[600px] p-[50px] border-[1px] border-[solid] border-black rounded-[30px] m-auto bg-white'> 
      {label === "Регистрация" 
        ?
        //Окно регистрации
        <div>
          <div className={winFormStyle}>
            <button onClick={(e)=>{
              setLabel(e.target.innerText)
            }} className="mr-[30px]">Вход</button>
            <button onClick ={(e)=>{
              setLabel(e.target.innerText)
            }} className="relative">
              Регистрация
              <div className={underline}/>
            </button>
            <div className={line} />
          </div>
          <div className={formFlex} >
          <span className='block w-[180px] h-[180px] border-[1px] border-solid border-black rounded-[50%] mx-auto mb-[20px]'></span>
            <button onClick = {handleClick} className="uppercase mb-[40px]">Добавить фото</button>
            <input 
                  className='opacity-0 h-0 w-0 leading-[0] overflow-hidden p-0 m-0'
                  type="file"
                  ref={fileRef}
                  onChange={handleChange} 
                  accept='image/*, .png,.svg,.jpg,.jpeg'/>
            <input type="text" 
                  value={username} 
                  onChange = {e=> setUsername(e.target.value)} 
                  placeholder='Username' 
                  className={style}/>
            <input type="text"
                  onChange = {e=> setNickname(e.target.value)} 
                  value={nickname} 
                  placeholder='Nickname' 
                  className={style}/>
            <input type="password" 
                  value={password} 
                  placeholder='Password' 
                  className={style}
                  onChange ={e => setPassword(e.target.value)} />
            <Button variant="contained" 
                    color="primary"
                    onClick={regUser}
                    >{label}</Button>
          </div>
        </div>
        : 
        //Окно авторизации
        <div>
          <div className={winFormStyle}>
            <button onClick={(e)=>{
              setLabel(e.target.innerText)
            }} className="relative mr-[30px]" >Вход
              <div className={underline}/>
            </button>
            <button onClick ={(e)=>{
              setLabel(e.target.innerText)
            }}>Регистрация</button>
            <div className={line} />
          </div>
          <form className={formFlex}>
            <input type="text" placeholder='Username' className={style}/>
            <input type="password" placeholder='Password' className={style}/>
            <Button variant="contained" color="primary" >{label}</Button>
          </form>
        </div> 
      }
    </div>
  )
}

export default Form