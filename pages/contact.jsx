import Head from "next/head";
import Link from "next/link";
import Header  from "../components/Header";
import Footer  from "../components/Footer";
import * as FA  from 'react-icons';
export default function Contact() {
  return (
    <>
    <Header/>
    <div className="container mx-auto shadow" title='contact'>
      <div className='container row card mx-auto account p-4'>   <div className='col-12'>      <img src='/assets/images/contact-us.png' className="mx-auto" style={{height:'250px'}} alt='About Us'/>
     <div className='w-[96%] lg:w-[48%] mt-6 mx-auto'>    <div className="input-group mt-2 p-4">
<span className='input-group-prepend text-center'><i className="fa fa-pen vcenter"></i></span>
<input type="text" name="subject" className="pl-2 py-2  w-full rounded hover:rounded-lg border-2 border-ash-200" placeholder="Enter Subject" />
</div>
<div className="input-group mt-2 p-4">
<input type="text" name="name" className="pl-2 py-2  w-full rounded hover:rounded-lg border-2 border-ash-200" placeholder="Enter Name" />
</div>
<div className="input-group mt-2 p-4">
<input type="email"  name='email' className="pl-2 py-2  w-full rounded hover:rounded-lg border-2 border-ash-200" placeholder="Enter Email" />
</div>
<div className="input-group mt-2 p-4">

<textarea name="message" className="pl-2 py-2  w-full rounded hover:rounded-lg border-2 border-ash-200" placeholder="Enter Message"  rows='10 '/>
</div>
<div className="input-group mt-2">
<button type='submit' className='p-3 bg-blue-300 hover:bg-blue-400  rounded-xl w-full text-center mx-auto'>SEND MESSAGE</button>
</div></div>
        </div></div>
    </div>
    <Footer/>
    </>
  );
}
