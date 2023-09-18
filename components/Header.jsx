import {React,useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaSearch,FaTimes,FaCaretDown}  from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';

 const Header = ({fcartcount}) => {
    let [Sidebar,setSidebar]=useState(false);
    let [categories,setCategories]=useState([])
     let [Catmenu,setCatmenu]=useState(false); 
    let [Search,setSearch]=useState(false);
    const [CartCount,setCartCount]=useState(fcartcount)
    useEffect(async ()=>{
    const res = await fetch('https://dummyjson.com/products/categories');
const catgories  = await res.json();
setCategories(catgories);
    },[])
    function setShow(opt){
        switch (opt) {
            case 'Sidebar':
                setSidebar(!Sidebar);
                break;
            case 'Catmenu':
                setCatmenu(!Catmenu);
                console.log(opt)
                break;
            case 'Search':
                setSearch(!Search);
                break;
            default:
                break;
        }
    };

  return (
    <>
    <div className={(Sidebar?'visible ':'hidden ') + "right-0 absolute z-50 bg-white w-64 h-full drop-shadow-md"}>
    <div className='flex flex-row items-center  justify-between border-b-ash-400 w-full'>   
    <Image src='/assets/logo.png' alt={process.env.SITENAME} width='120' height='70'/>
    <a href="#" onClick={(e)=>setShow('Sidebar')}  className='mx-1'><FaTimes className='text-red-500 block mr-2 hover:text-red-200'/></a></div>
    <div className='flex uppercase  mt-10 flex-col justify-items-center px-4 drop-shadow-md'>
    <Link href="/">
       <a  className="hover:bg-rose-100 border-y-2 border-ash-100 py-2 text-rose-500 hover:text-black">
          Home
        </a></Link> 
        <Link href="/#about_us">
       <a  className="hover:bg-rose-100 border-b-2 border-ash-100 py-2 text-rose-500 hover:text-black">
          About
        </a></Link> 
        <Link href="/contact">
       <a  className="hover:bg-rose-100 border-b-2 border-ash-100 py-2 text-rose-500 hover:text-black">
          Contact
        </a></Link> 
        <Link href="/faq">
       <a  className="hover:bg-rose-100 border-b-2 border-ash-100 py-2 text-rose-500 hover:text-black">
          Faq
        </a></Link> 
        <Link href="/blog">
       <a  className="hover:bg-rose-100 border-b-2 border-ash-100 py-2 text-rose-500 hover:text-black">
         Blog
        </a></Link> 
        
       <div className="border-b-2 border-ash-100 py-2 text-rose-500 hover:text-black"><a  href="#"  id='categories-menu' onClick={(e)=>setShow('Catmenu')} aria-haspopup='true' aria-expanded="true">
          <span className='flex items-center'>Categories <FaCaretDown/></span>
        </a>
        <div className={ (Catmenu?'visible ':'hidden ') + "categories-menu  mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" arialabelledby="catergoies-menu"  tabIndex="-1">
    {categories.map((cat)=><div className="py-1" role="none">
      <a href={'/item/'+cat} className="hover:bg-rose-100 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">{cat}</a>
    </div>)}
  </div>

        </div> 
   <div className='flex justify-center'>
        <Link href="/access/signup" >
        <a title='signup' className="inline-block  mx-1 text-sm px-4 py-2 leading-none  rounded text-rose  border-dark text-rose-500 bg-black mt-4 hover:bg-rose-500  hover:text-white hover:border-white lg:mt-0">Signup</a>
        </Link>
        <Link href="/access/signin" >
        <a title='signin' className="inline-block mx-1 text-sm px-4 py-2 leading-none border rounded text-black border-dark hover:border-transparent hover:text-rose-500 hover:bg-black mt-4 lg:mt-0">signin</a>
        </Link>
      </div>
    </div>
    </div>
    <nav className="flex items-center justify-between flex-wrap bg-black py-4 uppercase">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Image src='/assets/logo.png' alt={process.env.SITENAME} width='120' height='70'/>
    </div>
    
    <div className="flex items-center justify-around lg:hidden w-48">
    {/* <Link  href='/cart' className=''><a className='relative mr-6'><MdShoppingCart className='text-xl text-rose-500 hover:text-white justify-items-stretch'/><span className='absolute text-sm text-rose-500 hover:text-white' style={{top:'-10px',right:'-10px'}}>{CartCount}</span></a></Link> */}
    <button onClick={(e)=>setShow('Search')}><FaSearch className='text-rose-500 hover:text-white justify-items-stretch'/></button>
      <button onClick={(e)=>setShow('Sidebar')} className="flex items-center px-3 py-2 border rounded  hover:text-white text-rose-500 border-rose-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="hidden lg:flex relative w-full bg-ash-700 flex-grow bg-transparent items-center w-auto">
   <div className="text-sm flex-grow flex flex-row text-left">
  <Link href="/">
       <a  className="block mt-4 lg:inline-block lg:mt-0 text-rose-500 hover:text-white mr-4">
          Home
        </a></Link> 
        <Link href="/about_us">
       <a  className="block mt-4 lg:inline-block lg:mt-0 text-rose-500 hover:text-white mr-4">
          About
        </a></Link> 
        <Link href="/contact">
       <a  className="block mt-4 lg:inline-block lg:mt-0 text-rose-500 hover:text-white mr-4">
          Contact
        </a></Link> 
        <Link href="/faq">
       <a  className="block mt-4 lg:inline-block lg:mt-0 text-rose-500 hover:text-white mr-4">
          Faq
        </a></Link> 
        <Link href="/blog">
       <a  className="block mt-4 lg:inline-block lg:mt-0 text-rose-500 hover:text-white mr-4">
          Blog
        </a></Link> 
        <Link href="/pricing">
       <a  className="block mt-4 lg:inline-block lg:mt-0 text-rose-500 hover:text-white mr-4">
          Pricing
        </a></Link> 
       
      </div>
      <form method='get' className='flex mr-6'><input name='query' className='pl-2 py-2 rounded-l focus:outline-none' placeholder='Search'/><button className='pr-3 py-3 rounded-r bg-white'><FaSearch className='text-rose'/></button></form>
      {/* <Link  href='/cart' className=''><a className='relative mr-6'><MdShoppingCart className='text-xl text-rose-200 hover:text-white justify-items-stretch'/><span className='absolute text-sm text-rose-200 hover:text-white' style={{top:'-10px',right:'-10px'}}>{CartCount}</span></a></Link> */}
      <div className='flex justify-center'>
        <Link href="/access/signup" >
        <a title='signup' className="inline-block  mx-1 text-sm px-4 py-2 leading-none  rounded text-white  border-rose-200 border-2 text-rose-500 bg-w mt-4 hover:border-transparent  hover:text-rose-500 hover:bg-white lg:mt-0">Signup</a>
        </Link>
        <Link href="/access/signin" >
        <a title='signin' className="inline-block mx-1 text-sm px-4 py-2 leading-none  rounded text-white border-rose-200 border-2 hover:border-transparent hover:text-rose-500 hover:bg-white mt-4 lg:mt-0">signin</a>
        </Link>
      </div>
    </div>
  </nav><div className={(Search?'visible ':'hidden ') + "searchform w-full absolute max-h-[100px] bg-slate-200/20 h-fit py-10  z-10  backdrop-blur transition-colors duration-500"}>
    <form   method='get' className='flex h-fit mx-auto my-auto border-2 border-rose-400 w-80 hover:w-96 rounded place-self-auto'><input   name='query' className='pl-2 py-2 rounded-l flex-grow  focus:w-96 focus:outline-none' placeholder='Search'/><button className='pr-auto p-2  py-3 rounded-r bg-white'><FaSearch className='text-rose'/></button></form>
        </div></>
  )
}



export default Header;