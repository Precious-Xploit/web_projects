import {React,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineEmail}  from 'react-icons/md';
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
    let categories=[{title:'education',link:'education'},{title:'Investments',link:'investment'},{title:'Ecommerce',link:'title'},{title:'company',link:'title'},{title:'blogs',link:'title'}];
    return(

        <footer className='w-full' style={{background:"linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"}}>
            <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-2 mx-6 my-10 py-2'>
<div className='flex flex-col  mx-6 mt-4'>
<div className="py-1" role="none"> <p className='text-yellow-500  text-2lg font-semibold'>CATEGORIES</p></div>
{categories.map((category,k)=>  <div key={k} className="py-1" role="none">
      <Link key={k} href={'/'+category.link}><a  className="text-white block  text-sm text-white hover:text-gray-300">{category.title.toUpperCase()}</a></Link>
    </div>)}
</div>
<div className='flex flex-col mx-6 mt-4'>
<div className="py-1" role="none"> <p className='text-yellow-500  text-2lg font-semibold'>QUICK PAGES</p></div>
<div className='py-1' role='none'>
<Link href='/access/signup'><a  className="text-white block  py-2 lg:py-1 text-sm text-white hover:text-gray-300 uppercase">Account Signup</a></Link>
<Link href='/access/signin'><a  className="text-white block  py-2 lg:py-1 text-sm text-white hover:text-gray-300 uppercase">Account Signin </a></Link>
<Link href='/access/reset'><a  className="text-white block  py-2 lg:py-1 text-sm text-white hover:text-gray-300 uppercase">Password Reset</a></Link>
</div>
</div>
<div className='flex flex-col mx-6 mt-4'>
<div className="py-1" role="none"> <p className='text-yellow-500 text-2lg font-semibold'>LEGAL</p></div>
<div className='py-1' role='none'>

<Link href='/about_us'><a  className="text-white block  py-2 lg:py-1 text-sm text-white hover:text-gray-300 uppercase">About Us</a></Link>
<Link href='/privacy'><a  className="text-white block  py-2 lg:py-1 text-sm text-white hover:text-gray-300 uppercase">Privacy Policy</a></Link>
<Link href='/terms'><a  className="text-white block  py-2 lg:py-1 text-sm text-white hover:text-gray-300 uppercase">Terms Of Service</a></Link></div>
</div>
<div className='flex flex-col mx-6 mt-4'>
<div className='py-1' role='none'>
<div className="py-1" role="none"> <p className='text-yellow-500 text-2lg font-semibold uppercase'>Follow Us</p></div>
<p className='flex'><a href={process.env.INSTAGRAM} target='_blank'><FaInstagramSquare className='text-2xl text-pink-500 hover:pink-blue-400'/></a><a href={process.env.FACEBOOK} target='_blank'><FaFacebookSquare className='text-2xl text-blue-500 hover:text-blue-400'/></a> <a href={process.env.TWITTER} target='_blank'><FaTwitterSquare className='text-2xl text-blue-300 hover:text-blue-300'/></a></p>
</div></div>
</div>
<div className="py-1 ml-6" role="none"> <p className='text-yellow-500 text-2lg font-semibold uppercase'>Subscribe</p>
<form className="subscription-form validate" action="/subscribe" method="post" name="mc-embedded-subscribe-form" target="_blank">
    <div className="input-group flex"><MdOutlineEmail className='text-xl bg-white h-full py-4 pl-1 rounded-l-lg leading-7'/><input className="bg-white text-sm leading-7" type="email" name="email" placeholder="Your email"/><button className="rounded-r-lg bg-yellow-400 px-1 leading-7" type="submit" name="subscribe">Subscribe</button></div><div style={{position: 'absolute', left:'-5000px'}} aria-hidden="true"></div><div className="text-white opacity-50 text-xs">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</div></form></div>
<div className='bg-slate-900 border-white border-t-2 py-6 text-white flex justify-center'>
    <p className='mx-auto'>&copy; COPYRIGHT {process.env.SITENAME} 2021-{new Date().getFullYear()}</p>
</div>   </footer>
    )
}
export default Footer;