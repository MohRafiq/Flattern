import React from 'react';
import { useState } from 'react';
import './style.css';
import Menu from "./menuApi.js"; 
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqueList = [
  ...new Set(Menu.map((courElem) =>{
  return courElem.category;
})
),
"All",
];

console.log(uniqueList);

const Resturant = () => {
 const [menuData, setMenuData] = useState(Menu);
const [menuList, setMenuList] = useState(uniqueList);

 const filterItem = (category) => {

if (category==="All"){
  setMenuData(Menu);
  return; 
}

  const updatedList = Menu.filter((courElem) => {
    return courElem.category=== category; 
  });

  setMenuData(updatedList);
 };
 
  return (
   <>
  <Navbar filterItem ={filterItem} menuList={menuList} />
  <MenuCard menuData={menuData} />
  </>
  );
};

export default Resturant;