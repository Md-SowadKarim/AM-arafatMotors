import React from 'react'
import Container from '../../components/shared/Container'
import Tittle from '../../components/shared/tittle/Tittle'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import Map from './Map'
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import image from "../../image/Contact.jpg"
import toast from 'react-hot-toast';
const Contact = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_futi6ie', 'template_wyu80ia', e.target, 'dl6TgV9AzDXfHTnUS')
      .then((result) => {
          //console.log(result.text);
		  toast.success("Mail send successfully")
      }, (error) => {
          //console.log(error.text);
		  toast.error("Invaild Email")
      });
      e.target.reset()
  }
  return (
    <div>
		<Helmet>
					<link rel="canonical" href="/contact" />
					<title> Contact | Arafat Motors</title>
					<meta name='description' content='This is the Contact Us page of '></meta>
					<meta name='keywords' content='contact, get in touch, let us know, call us, email us , contact us, inform us, pagla mart contact, pm contact'></meta>
			
				  </Helmet>
  <Container>
  <section>
      <Tittle first="Contact" second="Us" thired="We Are On Service 24 By 7"/>
    {/* <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:text-gray-100"> */}
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img src={image} alt="" className="w-full -mt-8 h-60 sm:h-96 rounded-xl" />
        </div>
    {/* </div> */}
    </section>
    <section className="py-8 dark:bg-gray-900 dark:text-gray-100  mx-auto text-center ">
        
	<div className=" max-w-6xl grid-cols-1 md:px-6 mx-auto  lg:px-8 md:grid-cols-2 gap-4   md:flex w-[95%] ">
		<div className="py-6 md:py-0 md:px-6 w-[95%] flex flex-col items-center justify-center border-2 border-blue-500 rounded-xl text-center ">
			<h1 className="text-4xl font-bold text-blue-500">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex item-center ">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-blue-500">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Badamtola, Beside of BRTA Office, Shiromoni- 9204, Khanjahan Ali, Khulna.</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-blue-500">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801912-536120</span><br/>
				</p>
		
        <p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-blue-500">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
				
					<span>+8801954-585500</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-blue-500">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>arafat.amdts@gmail.com</span>
				</p>
			</div>
            <div className="p-6 flex gap-3">
			<a href="https://www.facebook.com/share/8HzdZP53nV2beRfT/"> <FaFacebook className="text-blue-500 text-2xl animate-pulse" /> </a>
           <a href="https://www.instagram.com/pagla.mart.shop/profilecard/?igsh=YW44ZXQ4OHJ0aDQ4"> <FaInstagram className="text-blue-500 text-2xl animate-pulse" /></a>
            <a href="https://pin.it/5TNvv6Ab6"><FaPinterest className="text-blue-500 text-2xl animate-pulse" /></a>
           
            </div>
		</div>
		<form onSubmit={handleSubmit}  novalidate="" className="flex flex-col  space-y-6 p-2   border-2 md:mt-0 mt-4  border-blue-500 rounded-xl w-[95%]">
			<label className="block">
				<span className="mb-1 ">Full name</span>
				<input  type="text" name="user_name"  placeholder="  Your Name"  className="text-white dark:text-black dark:placeholder:text-gray-900 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri border-2 dark:bg-gray-100 bg-gray-900  border-blue-500" required />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input  type="email" name="user_email" required placeholder=" yourmail@gmail.com" className="text-white dark:text-black dark:placeholder:text-gray-900 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri border-2 dark:bg-gray-100 bg-gray-900 border-blue-500" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" placeholder=' Message' required id='message' name="message" className="text-white dark:text-black dark:placeholder:text-gray-900 block w-full rounded-md focus:ring focus:ri focus:ri border-2 dark:bg-gray-100 bg-gray-900 border-blue-500"></textarea>
			</label>
			<button type="submit" value="Send" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-blue-500  focus:ri hover:ri">Submit</button>
		</form>
        
	</div>
</section>
<Map/>
  </Container>
    </div>
  )
}

export default Contact
