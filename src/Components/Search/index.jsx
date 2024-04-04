import React, { useState } from 'react'
import { Input, ListItemSuffix } from '@material-tailwind/react'

const searchData = [
    {
        name: 'Fashion',
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
    },
    {
        name: 'Shirt',
        image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
    },
    {
        name: 'Jacket',
        image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
    },
    {
        name: 'Mobile',
        image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg'
    },
    {
        name: 'Laptop',
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
    },
    {
        name: 'Home',
        image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
    },
    {
        name: 'book',
        image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
    },
]

function Search() {
  const [search , setSearch] = useState("");

  const filteredData = searchData.filter(obj => obj.name.toLowerCase().includes(search.toLowerCase())).slice(0,8);

  return (
    <div className='w-full lg::w-fit relative'>
        <Input label='Search' onChange={(e) => setSearch(e.target.value)}/>
        {search && 
            <div className='h-72 z-10 w-full bg-white rounded-sm shadow-md absolute px-1 overflow-y-auto overflow-x-hidden'>

                {filteredData.length > 0 ? 
                    <div className='box-border'>
                    {filteredData.map((item, index) => 
                        <div key={index} className='p-3 flex items-center cursor-pointer hover:opacity-70 transition-all duration-75'>
                            <img src={item.image} alt={item.name} className='w-10 h-10'/>
                            <p className='ms-3'>{item.name}</p>
                        </div>
                    )}
                    </div>
                    : 
                    <div className="flex justify-center my-5">
                        <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                    </div>
                }
            </div>
        }
    </div>
  )
}

export default Search;