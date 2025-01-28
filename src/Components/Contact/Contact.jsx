import { useState } from "react";
import Swal from 'sweetalert2'


const Contact = () => {

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", 'fa099b8b-382e-4b79-b041-2266f4bc7c48');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setLoading(false)

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "Your Messeage has been sent Successfully",
        icon: "success"
      });
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='min-w-full min-h-screen'>
      <div className='w-11/12 mx-auto'>
      <p className='lg:text-6xl text-2xl text-center mb-3'>Get In Touch</p>
        <p className="border mx-auto"></p>
        <div className="lg:text-3xl text-xl my-5 w-full">
          <p>arhamabdullah9045@gmail.com</p>
          <p>Tel - +918979751474</p>
        </div>
        <div className="lg:w-1/2 w-full border rounded-lg mt-5">
          <form onSubmit={(event) => {onSubmit(event)}}>
            <div className="md:flex items-center justify-between">
            <div className="p-5 w-full">
            <label  className="block">First Name</label>
            <input type="text" name="firstname" id="firstname" className="border-b outline-0 bg-transparent w-full" />
            </div>
            <div className= "p-5 w-full">
            <label  className="block">Last Name</label>
            <input type="text" name="lastname" id="lastname" className="border-b outline-0 bg-transparent w-full" />
            </div>
            </div>
            <div className="md:flex items-center justify-between">
            <div className="p-5 w-full">
            <label  className="block">Email</label>
            <input type="email" name="email" id="email" className="border-b outline-0 bg-transparent w-full" />
            </div>
            <div className="p-5 w-full">
            <label className="block">Phone Number</label>
            <input type="text" name="phnumber" id="phnumber" className="border-b outline-0 bg-transparent w-full" />
            </div>
            </div>
            <div className="w-full p-5">
              <label  className="block">Write a message</label>
              <textarea name="message" id="message" className="border-b outline-0 bg-transparent w-full"></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="flex items-center justify-center border rounded-lg px-2 py-2 cursor-pointer social duration-300 ease-out w-1/2 mt-4 ml-4 mb-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
