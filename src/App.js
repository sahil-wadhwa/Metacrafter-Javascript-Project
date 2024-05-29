import './App.css';
import Products from './components/Products'
import React from 'react';

function App() {
  function listNFT(){
    for(var item of items){
    console.log("Item Name: " ,item.title);
    console.log("Item Price: " ,item.amount);
    console.log("Manufacturing Date: " ,item.date);
  }
  }
  function getTotalSupply(){
    console.log("Total NFTs: ",items.length);
  }
  function mintNFT(_id,_title,_amount,_date){
    const NFT={
      id:_id,
      title:_title,
      amount:_amount,
      date:_date
    }
    items.push(NFT);
    listNFT();
  

  }
  function mintNow(){
    mintNFT('p6','Rin',310,new Date(21,10,8));
    mintNFT('p7','Maggi',200,new Date(21,2,3));
    mintNFT('p8','Yippee',100,new Date(21,9,6));

  }
var items=[
  {
    id:'p1',
    title:'Nirma',
    amount:100,
    date:new Date(2021,8,10),
  },
  {
    id:'p2',
    title:'Surf Excel',
    amount:200,
    date:new Date(2021,2,2),
  },
  {
    id:'p3',
    title:'Tide',
    amount:130,
    date:new Date(2021,12,28),
  },
  {
    id:'p4',
    title:'Wheel',
    amount:450,
    date:new Date(2021,5,5),
  },
  {
    id:'p5',
    title:'Ariel',
    amount:220,
    date:new Date(2021,3,4),
  }
];

  return (
  <div className="main">
    <Products items={items}></Products>
    <br></br>
    <div className="buttonList"><button onClick={getTotalSupply}>Total Supply</button>
    <button onClick={mintNow}>Mint NFT</button>
    <button onClick={listNFT}>List NFT</button></div>
    
    
  </div>
  );
   
  
  
}

export default App;

