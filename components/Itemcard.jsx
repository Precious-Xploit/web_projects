import React, { Component } from 'react'
import Link from 'next/link';
import {FaCartPlus,FaEye,FaAngleRight,FaHeart,FaRegGem}   from 'react-icons/fa';
function addToCart(item){
  fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 5,
    products: [
      item]})
})
.then(res => res.json())
.then(console.log);
}
export function PItemcard ({data}) {
  // console.log(data)
  if(data.title) data.ltitle=(data.title).replace(/[^a-zA-Z0-9]/g,'_');
    return (
        <Link href={`item/${data.ltitle}/${data.id}`}><a><div class="relative bg-light-100 lg:w-full pb-3 rounded-lg shadow-lg mx-15"  style={{minHeight:'160px',backgroundImage:`url('${data.thumbnail}')`}}>
  <div class="">
  <span class="bg-yellow-400 rounded-full absolute right-0 top-0">-{Number(data.discountPercentage).toFixed(2)}</span>
  <p className="mt-10 py-3 truncate text-white bg-black opacity-70 rounded-l-lg">{data.title}!</p>
   <div className="py-6 mt-4 relative h-">
    <div className="flex w-full  justify-between bottom-5 mt-4"><Link href='#' className="my-auto"><button className="bg-slate-100 hover:bg-slate-200 flex justify-between text-indigo p-2 rounded-l-sm opacity-70"><text className="mx-2 my-auto "><a className="text-black-900 flex justify-between"><span>${ Number(data.price*(100-data.discountPercentage)/100).toFixed(2)}</span></a></text></button></Link> <br/><Link href={`/item/${data.ltitle}/${data.id}`} className="right-0"><button className="bg-indigo-500 hover:bg-indigo-400 flex justify-between text-white px-2 rounded-full"><text className="mx-2 my-auto">VIEW</text> <FaEye className="my-auto text-white-300 my-auto"/></button></Link></div>
    </div>
    
  </div>
</div></a></Link>
    )
  
}
export function NItemcard({data}){
  if(data.title) data.ltitle=(data.title).replace(/[^a-zA-Z0-9]/g,'_');
    return(
       <div class="bg-light-100 lg:w-full pb-3 relative">  <FaHeart className="absolute z-[200] text-xl hover:bg-ash-400 hover:text-yellow-400 bg-white rounded-full p-1 top-0 right-0  text-red-500 "/>
  <div className="bg-white rounded-lg shadow-lg">
    <img src={data.thumbnail} alt="" class="rounded-t-lg" style={{height:'300px'}}/>
    <div className="py-6">
     <div className="flex justify-between"><Link href='#'><a className="text-black-900">${ Number(data.price*(100-data.discountPercentage)/100).toFixed(2)} <del>{data.price}</del></a></Link>   <Link href="#" className="text-sm"><a className="text-purple-600 hover:text-purple-500 uppercase">{data.category}</a></Link></div>
    <p className="text-purple-700 my-2  py-3 truncate">{data.title}!</p>
      <div  className="flex justify-between py-2"><Link href={`/item/${data.ltitle}/${data.id}`}><button className="bg-slate-100 hover:bg-slate-200 flex justify-between text-indigo p-2 rounded-full"><text className="mx-2">VIEW</text> <FaEye className="text-white-300 my-auto"/></button></Link> 
      <a href='#' onClick={(data)=>addToCart({id:data.id,quantity: 1,})}><button className="bg-black hover:opacity-70 flex justify-between text-yellow-400 p-2 rounded-full"><text className="mx-2">CART</text> <FaCartPlus className="text-white-300 my-auto"/></button></a></div>
      <div  className="flex justify-between"></div>
      
    
    </div>
  </div>
</div>
    )

}