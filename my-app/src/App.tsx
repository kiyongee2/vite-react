
import { useState } from 'react'
import './App.css'
import Store from './components/Store'
import type { Restaurant}  from './types/restaurant'

let data: Restaurant = {
  name: "기용샘 식당",
  category: "korean",
  address: {
    city: 'incheon',
    detail: 'somewhere',
    zipCode: 12345
  },
  menu: [
    {name:'pasta', price:5000, category: "PASTA"},
    {name:'pizza', price:8000, category: "PIZZA"},
  ]
}

function App() {
  const[restaurant, setRestaurant] = useState<Restaurant>(data);

  // 식당 이름 변경
  const changeName = () => {
    setRestaurant({
      ...restaurant,
      name: "기용샘 스페셜 식당",
    });
  };

  //메뉴 추가
  const addMenu = () => {
    setRestaurant({
      ...restaurant,
      menu: [
        ...restaurant.menu,
        {name: "burger", price: 7000, category: "BURGER"}
      ]
    });
  }

  // 주소 변경
  const changeAddress = () => {
    setRestaurant({
      ...restaurant,
      address: {
        ...restaurant.address,
        city: "Seoul",
        detail: "Gangnam",
      },
    });
  };

  return (
    <>
      <div className='App'>
        <Store info={restaurant} />
        <button onClick={changeName}>식당 이름 변경</button>
        <button onClick={addMenu}>메뉴 추가</button>
        <button onClick={changeAddress}>주소 변경</button>
      </div>
    </>
  )
}

export default App
