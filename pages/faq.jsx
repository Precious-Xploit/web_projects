
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaAngleDoubleRight,FaTimesCircle } from 'react-icons/fa'
export default function Faq(){
    return(
        <><Header/>
    <div className='container  mx-auto mt-4'>
        
<div className='w-96 lg:w-3/6 shadow  mx-auto'>
<h2 className='mx-auto text-center uppercase font-bold'>Frequently Asked Questions</h2>
<div className="accordion A1">
<div className="accordion-item">
 <h2 className="accordion-header flex justify-between font-bold hover:font-semibold hover:bg-gray-200" data-id="A1" onClick={()=>{document.querySelector('#A1').classList.toggle("hidden")}}>
   <span>How is</span> <FaAngleDoubleRight/>
 </h2>
 <div id="A1" className="accordion-content hidden">
   <div className="accordion-body ml-4">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
 </div>
</div>
</div></div></div>
     <Footer/>
     </>
    )
}