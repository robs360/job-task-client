import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import { setItem } from 'localforage'
function App() {
  
  const [items, setItems] = useState([])
  const [search,setSearch]=useState('')
  const [show, setShow] = useState(0);
  const [pagenumber, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedOption, setSelectedOption] = useState('All');

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => {
        if(selectedOption==='All'){
          setItems(data)
          setPages((Math.ceil(data.length / 9)))
        }
        else{
          if(selectedOption==='laptop'){
             const information=data.filter(info=>info.category==='laptop')
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='mobile'){
            const information=data.filter(info=>info.category==='mobile')
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='watch'){
            const information=data.filter(info=>info.category==='watch')
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='Dell'){
            const information=data.filter(info=>info.brand==='Dell')
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='Apple'){
            const information=data.filter(info=>info.brand==='Apple')
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='Samsung'){
            const information=data.filter(info=>info.brand==='Samsung')
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='Casio'){
            const information=data.filter(info=>info.brand==='Casio')
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='Asos'){
            const information=data.filter(info=>info.brand==='Asos')
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='under 400'){
            const information=data.filter(info=>{
              const num=parseInt(info.price)
              return num<=400
            })
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='400-600'){
            const information=data.filter(info=>{
              const num=parseInt(info.price)
              return num>=400&&num<=600
            })
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
          if(selectedOption==='over 600'){
            const information=data.filter(info=>{
              const num=parseInt(info.price)
              return num>600
            })
             setItems(information)
             setPages((Math.ceil(information.length / 9)))
          }
        }
        
      })

  },[selectedOption])
  const pages = [...Array(pagenumber).keys()]
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
 const handelSearch=()=>{
  if(!search){
     alert("You have not search any thing")
     return
  }
  
      fetch(`http://localhost:5000/search?q=${search}`)
      .then(res=>res.json())
      .then(data=>setItems(data))
 
 }
  return (
    <div>
      <Nav></Nav>

      <div className='w-[96%] mx-auto rounded-sm mt-10'>
       <div>
       <div className='w-[300px] mx-auto'>
          <select id="options" className='border-[3px] w-[120px] rounded-md' onChange={handleChange}>
            <option value="All">
              All
            </option>
            <option className='text-[17px] font-medium' value="laptop">Laptop</option>
            <option className='text-[17px] font-medium' value="watch">Watch</option>
            <option className='text-[17px] font-medium' value="mobile">Mobile</option>
          </select>
        </div>
        <div className='w-[300px] mx-auto mt-5'>
          <select id="options" className='border-[3px] w-[120px] rounded-md' onChange={handleChange}>
            <option value="All">
              All
            </option>
            <option className='text-[17px] font-medium' value="Dell">Dell</option>
            <option className='text-[17px] font-medium' value="Samsung">Samsung</option>
            <option className='text-[17px] font-medium' value="Apple">Apple</option>
            <option className='text-[17px] font-medium' value="Casio">Casio</option>
            <option className='text-[17px] font-medium' value="Asos">Asos</option>
            
          </select>
        </div>
        <div className='w-[300px] mx-auto mt-5'>
          <select id="options" className='border-[3px] w-[120px] rounded-md' onChange={handleChange}>
            <option value="All">
              All
            </option>
            <option className='text-[17px] font-medium' value="under 400">Under 400</option>
            <option className='text-[17px] font-medium' value="400-600">400-600</option>
            <option className='text-[17px] font-medium' value="over 600">Over 600</option>
            
          </select>
        </div>
        <div className='w-[356px] mx-auto mt-6'>
          <input name='sea' className='w-[230px] h-[50px] rounded-l-3xl
          border-gray-400 border-2 p-1' placeholder='Search Category' type="text" value={search} onChange={(e)=>{
             setSearch(e.target.value)
          }} />
          <button className='text-[18px] font-medium btn h-[50px]
           rounded-r-3xl bg-orange-300 rounded-l-[-10px]' onClick={handelSearch}>Search</button>
        </div>
       </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            items.slice(show, show + 9).map(info => <div className='w-[350px] mb-12 mx-auto
               shadow-md rounded-md p-3'>
              <img src={info.image} className='w-full h-[280px] rounded-md' alt="" srcset="" />
              <div className='mt-3'>
                <p className='text-center mb-1 text-[17px] font-medium'>Category:{info.category}</p>
                <p className='text-center mb-1 text-[17px] font-medium'>Brand:{info.brand}</p>
                <p className='text-center mb-1 text-[17px] font-medium'>Price:{info.price}</p>
              </div>
            </div>)
          }
        </div>
        <div className='w-[360px] mx-auto'>
          {
            pages.map(page => <button onClick={() => {
              setCurrentPage(page)
              setShow(page * 9)
            }} className={`mr-1 text-black p-2 px-3 rounded-md ${currentPage === page && 'bg-orange-400'}  `}>{page}</button>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
