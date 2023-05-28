import { React, useState } from "react";
import "./Style.css";
import Navigation_bar from "./Componets/Navigation_bar";
import Cards from "./Componets/Cards";
import Menu from "./Componets/Menuapi";
const uniqueList=[
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  ),
  "All",
];
function App() {

  const [menuData, setMenu] = useState(Menu);
  const [MenuList, setMenuList]=useState(uniqueList);

  const filterItem=(category)=>{
    if(category==="All"){
      setMenu(Menu);
      return;
    }
    
    const updatedList=Menu.filter((curElem)=>{
  return curElem.category===category;
    });
    setMenu(updatedList);
  };

  return (
    <>
      <div className="dk-resturant">Dharmendra Kumar Resturant</div>
      <Navigation_bar filterItem={filterItem} MenuList={MenuList}/>


      <div className='card-main'>

        <Cards
          menuData={menuData}
        />

      </div>

    </>

  );
}

export default App;
