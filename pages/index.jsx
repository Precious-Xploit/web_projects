import Head from "next/head";
import { useState,useEffect } from "react";
import Link from "next/link";
import Header  from "../components/Header";
import Footer  from "../components/Footer";
import {PItemcard,NItemcard} from "../components/Itemcard"
import Image from "next/image";
import {BiUserPlus,BiEdit} from 'react-icons/bi'
import {FaCartPlus,FaEye,FaAngleRight,FaHeart,FaRegGem,FaTagss,FaTags,FaTwitterSquare,FaInstagramSquare,FaFacebookSquare,FaGithubSquare}   from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  lg from "../public/assets/logo.png"
import  wave1 from "../public/assets/wave-1.svg"
import  wave2 from "../public/assets/wave-2.svg"
import  shopping1 from "../public/assets/images/shopping1.png"
import groupimg from '../public/assets/images/group.png'
import  slideimg from '../public/assets/images/features/slide.png'
import  salesimg from '../public/assets/images/features/sales.png'
import  productimg from '../public/assets/images/features/product.png'
import descimg from '../public/assets/images/features/desc.png'

 function Home({products,fcartcount}) {
 return (
    <>
    <Header fcartcount={fcartcount}/>
    <div className="block">
    <div className="flex flex-col justify-between w-full  mx-auto">
    <div className='mx-auto py-3'>

<div className="relative">

  <div className="flex flex-row justify-content-between"><div className="w-full lg:w-3/6"><Image src={shopping1}  className="h-[100%] w-auto" 
    objectFit='contain'/></div>
<div className="w-full lg:w-3/6 "><h2 className="font-bold text-xl lg:text-2xl py-2">{process.env. SITENAME}</h2><p className="text-lg lg:text-xl font-semibold py-2">Get Your Own Customized E-commerce Shop in 5 minutes</p><p className="text-lg lg:text-xl text-light py-2 mb-3">Try our eccommerce shop maker for free</p><a href='/access/signup' className="bg-rose-500 rounded-lg p-2 shadow text-white hover:text-slate-500 mt-5">VIEW DEMO</a></div>
  </div>

  <Carousel autoPlay interval="2500" transitionTime="50" className="drop-shadow-lg lg:mt-[-200px]" showThumbs={false}>
      { [wave1,wave2].map((slide)=>
        <div className="relative">
                    <Image src={slide} alt='Slider'  className='w-full  h-[30px]' />
                 
                </div>
                 )}
              
            </Carousel> </div>
       
    </div>
    <iframe  height="435" className="mx-auto w-full lg:w-3/6 " src="https://youtu.be/RrCKH2UP6kQ">
</iframe>
<div className="pt-5 mx-3 lg:mx-1">
<p className="mx-auto w-full text-center"> <h2 className="mx-auto uppercase text-3xl font-bold">get Started in Few Minutes</h2><h4 className="text-sm font-semibold uppercase">It doesn't get easier</h4></p>
<section className="flex flex-col lg:flex-row container text-center mx-auto">
<div className="card bg-blue-yellow shadow py-6 px-5 w-full  lg:w-2/6 mx-2 my-3">
<BiUserPlus className="mx-auto bg-white rounded-full h-30 border-2 border-slate-200 shadow text-4xl my-2"/>
  <h2 className="font-bold">Sign Up</h2>
  <p className="font-light">Create an Account with us in minutes</p>
</div>
<div className="card bg-blue-yellow shadow w-full lg:w-2/6 mx-2 py-6 px-5 my-3">
<BiEdit className="mx-auto bg-white  rounded-full h-30 border-2 border-slate-200 shadow text-4xl"/>
  <h2 className="font-bold">Customize Store</h2>
  <p className="font-light">Add your categories and products</p>
</div>

<div className="card  bg-blue-yellow shadow py-6 px-5 w-full lg:w-2/6 mx-2 my-3">
<FaTags className="mx-auto bg-white rounded-full h-30 border-2 border-slate-200 shadow text-4xl"/>
  <h2 className="font-bold">Make Sales</h2>
  <p className="font-light">Make the sales you desire by sharing your new shop to friends and family.</p>
</div>
</section>


<section  className="bg-blue-200 flex flex-col justify-around py-10 mt-10  lg:flex-row container text-center mx-auto py-6">
<div className="w-3/9 py-5">
  <p className="text-5xl">$0</p>
  <small>Starting At</small>
</div>
<div className="w-3/9 py-5">
  <p className="text-5xl">100+</p>
  <small>Supported Countries</small>
</div>
<div className="w-3/9 py-5">
  <p className="text-5xl">103M+</p>
  <small>Potential Support</small>
</div>

</section>
<section className="bg-gray-50  container text-center mx-auto py-6">
<h2 className="text-2xl font-semibold bg-white w-full py-3">FEATURES</h2>
  <table className="table-auto border-2">
  <thead> <tr><th>Feature</th><th>Image</th></tr></thead><tbody>
    <tr><td><b>Recent Product Slide</b><br/>
    <div className="jusify">
      This slide shows the list of recent pinned items added to a shop.This helps to ensure that at a glance the users of a shop can see the product the owner would want them to see.
    </div>
    </td><td><Image src={slideimg} className='w-[400px] h-[450px]'/></td></tr>
    <tr><td><b>Hot list</b><br/>
    <div className="jusify">
This shows a list of items with the most percentage discount.This gives the users a glance at items currenly on sale (discount).
    </div>
    </td><td><Image src={salesimg} className='w-[400px] h-[450px]'/></td></tr>
    <tr><td><b>Product View</b><br/>
    <div className="jusify">
This shows details of a particularly selected item with one touch image viewer,detailed description, price, and reviews of an item.
    </div>
    </td><td><Image src={productimg} className='w-[400px] h-[450px]'/>
    <Image src={descimg} className='w-[400px] h-[450px]'/></td></tr></tbody>
  </table>
</section>
<section  className="bg-gray-50 flex flex-col lg:flex-row container text-center mx-auto py-6">

<div className="w-full lg:w-3/6 ">
  <Image src={groupimg} className="w-full h-[300px]"/>
</div>
<div className="w-full lg:w-3/6 hidden">
<p className="text-xl font-bold uppercase mt-20">What Makes Us A Great PICK</p>
<ul className="list-disc text-left ml-10"><li>Our shops come with free for ever plans.</li>
  <li>Our shops are easily customized to suit your need.</li>
  <li>Personal credit card setup.</li>
  <li>No hidden fees.</li>
  <li>We have some of the best designed eccomerce shops.</li>
  <li>Inbuilt SEO support.</li>
  <li>Once click Promotion of items to major social medias.</li>
</ul>

</div>

</section>
<section className="bg-gray-50  container text-center mx-auto py-6">
<div className="mx-3 lg:mx-20">
        <div className="bg-white py-5">
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <h2 className="uppercase text-3xl font-bold">About  
                             {process.env.SITENAME}
                        </h2>
                        <p className="italic text-muted my-4">
                        {process.env.SITENAME} has been an idea i have had in mind for a couple of months before i joined the ALX Software Engineering program.Creating a fully functional Ecommerce shop maker has bene one of my dreams, i always hopped i could provide a system that makes free/cheap ecommerce shops available to everyone while at thesame time ensuring the same standard of security and user experince with it, finally this is a reality as i hope to push this project into full scale production.</p>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="/assets/images/about-us.jpg"  className="img-fluid mb-4 mb-lg-0"/></div>
                </div>
            
            </div>
        </div>

        <div className="bg-light py-5 ml-10">
            <div className="container py-5">
                <div className="flex mb-4">
                    <div className="col-lg-5">
                        <h2 className="text-xl font-semibold underline mx-auto text-center">Our Team</h2>
                        <p className="font-italic text-muted">
                            </p>
                    </div>
                </div>

                <div className="flex justify-between flex-col lg:flex-row text-center">
                    <div className="flex justify-center">
                        <div className="bg-white  shadow-sm py-5 px-4 text-center"><img src="/assets/images/team/ceo.jpg" alt="" width="120" className="mx-auto border-light-400 border-2 rounded-full mb-3 shadow-sm"/>
                            <h5 className="mb-0">Erubure David Ejiro</h5>
                            <ul className="flex mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="https://twitter.com/hiskylord" className="social-link"><FaTwitterSquare className="text-blue-300 hover:text-blue-400 text-lg"/></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/hiskylord" className="social-link"><FaInstagramSquare className="text-pink-300 hover:text-pink-400 text-lg"/></a></li>
                                <li className="list-inline-item"><a href="https://github.com/hiskylord/shopmaker" className="social-link"><FaGithubSquare className="text-pink-300 hover:text-pink-400 text-lg"/></a></li>
                            </ul>
                        </div>
                    </div>
                   
                    </div>
            </div>
        </div>
    </div>
</section>
</div>

    </div>
    <Footer className='flex-[4]'/>
    </div>
    
    </>
  );
}
// export async function getStaticProps() {
//   return { props: { title: 'HomePage' } }
// }
// export async function getServerSideProps(context) {
//   let products= await fetch('https://dummyjson.com/products').then(res=>{
//     if(res.ok){
//       return res.json()
//     }
//   }).then(data => {
// return data.products;
//   }).catch(err => {
//       console.error({err})})
//       let fcartcount= await fetch('https://dummyjson.com/carts/user/5').then(res=>{
//         if(res.ok){
//           return res.json()
//         }
//       }).then(data => {
//         console.log(data.carts[0].products)
//     return data.carts[0].products.length;
//       }).catch(err => {
//           console.error({err})})
//   return {
//     props: {products,fcartcount},
//      // will be passed to the page component as props
//   }

 
//   }

  
export default Home;