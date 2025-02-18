import profile from "../../../public/Profile.jpeg"
import react from "../../../public/React.webp"
import express from "../../../public/express.png"
import node from "../../../public/node_js.png"
import js from "../../../public/js.png"
import mongoDb from "../../../public/Mongodb.png"
import tailwind from "../../../public/tailwind.png"
import redux from "../../../public/redux.png"
import { Link } from "react-router-dom"
import "./Home.css"
import Projects from "../Projects/Projects"

const Home = () => {
  return (
    <div>

    <div className='w-full h-full lg:flex justify-between relative'>
      <div className='w-full lg:w-1/2 lg:h-1/2 lg:px-8 px-4'>
      <div className='md:w-11/12 mx-auto w-full mt-4'>
      <p className='lg:text-2xl text-xl'>FullStack Web Developer </p>
      </div>
      <div className='md:w-11/12 mx-auto w-full mt-8'>
      <p className='lg:text-5xl text-2xl font-medium'>Hello. I'm Arham Abdullah, A Web Developer who can make and maintain your website.</p>
      <Link to={"https://drive.google.com/file/d/1C7gsl1d6EDu3zQnI27ViFAQkMF1K8n-M/view?usp=drive_link"} download={"ArhamAbdullahResume.pdf"} target="_blank" rel="noopener noreferrer"><p className="flex items-center justify-center border rounded-lg px-2 py-2 cursor-pointer social duration-300 ease-out w-1/2 mt-4">Download CV <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"></path></svg></p></Link>
      </div>
      </div>
      <div className='w-1/2 h-1/2 mx-auto md:flex items-center justify-center mt-5'>
      <img src={profile} alt="" className='w-80 rounded-full bg-center' />
      </div>
    </div>
    <div className="mt-10">
    <p className="w-11/12 border mx-auto"></p>
        <p className="text-center text-3xl pt-5">Libraries & Frameworks</p>
      <div className="w-full lg:h-56 h-full flex items-center justify-around flex-wrap py-5">
        <img src={js} alt="" className="w-24 mr-2 lg:mr-0 lg:w-36" />
        <img src={react} alt="" className="w-24 mr-2 lg:mr-0  lg:w-36"  />
        <img src={redux} alt="" className="w-24 mr-2 lg:mr-0 lg:w-36"  />
        <img src={tailwind} alt="" className="w-24 mr-2 lg:mr-0 lg:w-36 mt-3 lg:mt-0"  />
        <img src={node} alt="" className="w-24 mr-2 lg:mr-0 lg:w-36 mt-3 lg:mt-0"  />
        <img src={express} alt="" className="w-24 mr-2 lg:mr-0 lg:w-36 mt-3 lg:mt-0"  />
        <img src={mongoDb} alt="" className="w-24 mr-2 lg:mr-0 lg:w-36 mt-3 lg:mt-0"  />
      </div>
    </div>
    <div className="mt-10">
    <p className="w-11/12 border mx-auto"></p>
    <Projects/>
    </div>
    <div className="my-10">
    <p className="w-11/12 border mx-auto"></p>
    <div className="w-11/12 mx-auto flex justify-between flex-wrap">
    <div className="md:w-1/2 w-full border-b md:border-b-0">
    <p className="text-center text-3xl my-5">What I Can Do</p>
    <ul className="w-11/12 mx-auto text-2xl font-medium text-center mb-5 md:mb-0">
      <li >Front End Development</li>
      <li>Back End Development</li>
      <li>Responsive Design</li>
      <li>Optimizing Your Code Base</li>
    </ul>
    </div>
    <div className="md:w-1/2 w-full">
    <p className="text-center text-3xl mt-5 md:mt-5">My Socials</p>
    <ul className="w-11/12 mx-auto text-2xl flex-wrap mt-5 flex gap-x-4 md:gap-x-2 items-center justify-center gap-y-4 md:gap-y-0">
      <Link to={'https://github.com/ArhamX24'} target="_blank" rel="noopener noreferrer"><div className="flex items-center justify-center border rounded-lg px-2 py-2 cursor-pointer social duration-300 ease-out">Github <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg></div></Link>
      <Link to={"https://www.linkedin.com/in/arham-abdullah-2b7754199/by"} target="_blank" rel="noopener noreferrer"><div className="flex items-center justify-center  border rounded-lg px-2 py-2 cursor-pointer social duration-300 ease-out">LinkedIn <svg className="ml-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(70,146,221,1)"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg></div></Link>
      <Link to={"https://twitter.com/arham_its"} target="_blank" rel="noopener noreferrer"><div className="flex items-center justify-center border rounded-lg px-2 py-2 cursor-pointer social duration-300 ease-out">Twitter <svg className="ml-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg></div></Link>
      <Link to={'https://www.instagram.com/_arham9045/'} target="_blank" rel="noopener noreferrer"><div className="flex items-center justify-center border rounded-lg px-2 py-2 cursor-pointer social duration-300 ease-out">Instagram <svg className="ml-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg></div></Link>
    </ul>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home
