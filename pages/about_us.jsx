import Head from "next/head";
import Link from "next/link";
import Header  from "../components/Header";
import Footer from "../components/Footer";
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare} from 'react-icons/fa'
export default function About() {
  return (
    <>
    <Header/>
    <div className="mx-3 lg:mx-20">
        <div className="bg-white py-5">
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <h2 className="uppercase">About
                            Iskysoftic
                        </h2>
                        <p className="italic text-muted my-4">
                            Iskysoftic was established in 2021.We are a company of experts in the Tech space with pros in web and mobile design,developement, and management. Iskysoftic store is aimed at sales of business websites and apps to customers to enable anyone make money or manage their business from and within the online space.  
                                Iskysoftic is a trade center and a community for the everyone who wants a software or seeks to sell one; also for the experienced, young or aspiring developer. </p>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="/assets/images/about-us.jpg"  className="img-fluid mb-4 mb-lg-0"/></div>
                </div>
                <div className="flex align-items-center">

                    <div className="w-96 lg:w-48 ml-10">
                        <h2 className="font-semibold mb-5 underline text-xl">Our Services</h2>
                        <p className="font-italic text-muted">
                            <ul className="list-disc">
                                <li>Website Trade</li>
                                <li>App Trade</li>
                                <li>Web developement</li>
                                <li>App Development</li><li>Programming Education</li></ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-light py-5 ml-10">
            <div className="container py-5">
                <div className="flex mb-4">
                    <div className="col-lg-5">
                        <h2 className="text-xl font-semibold underline">Our Team</h2>
                        <p className="font-italic text-muted">
                            Iskysoftic was born by a team of Experts.</p>
                    </div>
                </div>

                <div className="flex justify-between flex-col lg:flex-row text-center">
                    <div className="flex justify-center">
                        <div className="bg-white  shadow-sm py-5 px-4 text-center"><img src="/assets/images/team/ceo.jpg" alt="" width="120" className="mx-auto border-light-400 border-2 rounded-full mb-3 shadow-sm"/>
                            <h5 className="mb-0">Erubure David Ejiro</h5><span className="small text-uppercase text-muted">CEO & CTO - Founder</span>
                            <ul className="flex mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="https://twitter.com/hiskylord" className="social-link"><FaTwitterSquare className="text-blue-300 hover:text-blue-400 text-lg"/></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/hiskylord" className="social-link"><FaInstagramSquare className="text-pink-300 hover:text-pink-400 text-lg"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white  shadow-sm py-5 px-4 text-center"><img src="/assets/images/team/cio.jpg" alt="" width="120" className="mx-auto border-light-400 border-2 rounded-full mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Ochuko Okeoghene</h5><span className="small text-uppercase text-muted">CAO </span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="https://www.facebook.com/blessing.goodlife.1" className="social-link"><FaFacebookSquare className="text-blue-300 hover:text-blue-400 text-lg"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white  shadow-sm py-5 px-4 text-center"><img src="/assets/images/team/cmo.jpg" alt="" width="120" className="mx-auto border-light-400 border-2 rounded-full mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Akpevwe Emochovwe</h5><span className="small text-uppercase text-muted">CMO </span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="https://www.facebook.com/akpevwe.emochovwe" className="social-link"><FaFacebookSquare className="text-blue-300 hover:text-blue-400 text-lg"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white  shadow-sm py-5 px-4 text-center"><img src="/assets/images/team/dm.jpg" alt="" width="120" className="mx-auto border-light-400 border-2 rounded-full mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Nahum Dangara</h5><span className="small text-uppercase text-muted">CIO </span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="https://www.facebook.com/naxydans.dangara.5" className="social-link"><FaFacebookSquare className="text-blue-300 hover:text-blue-400 text-lg"/></a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}
