import {React,useState} from 'react'
import Menu from './Menuapi';
import Cards from './Cards';

const Navigation_bar = ({filterItem,MenuList}) => {




  return (
    <>
    <div className='nav-main'>
        <div className='nav-container'>
          
          {
            MenuList.map((curElem)=>{
              return(
                
<button className='btn' onClick={()=>filterItem(curElem)}>{curElem}</button>
              );
            })
          }
            {/* <button className='btn'onClick={()=>filterItem("Lunch")}>Lunch</button>
            <button className='btn'onClick={()=>filterItem("Dinner")}>Dinner</button>
          <button className='btn'onClick={()=>setMenu(Menu)}>All</button> */}
          
        </div>

    </div>
    </>

  )
}

export default Navigation_bar;