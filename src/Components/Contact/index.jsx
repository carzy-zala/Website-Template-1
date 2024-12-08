import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <div className="flex p-10 gap-20 justify-center">
        <div>
          <div className="bg-gray-200 p-2">
            <h1 className="text-3xl">Get in touch</h1>
            <p className="leading-9">Fill in the form to start conversation</p>
            <p className="leading-8">
              <IoLocationOutline className=" mr-1 inline" />
              Ahmedabad ,Gujarat
            </p>
            <p className="leading-8">
              <IoCallOutline className=" mr-1 inline" />
              +91 1234567890
            </p>
            <p className="leading-8">
              <MdOutlineEmail className=" mr-1 inline" />
              xyz@gmail.com
            </p>
          </div>
        </div>
        <div>
          <form className="flex flex-col">
            <input
              type="text"
              className="m-1 px-2 py-1 min-w-60 border-2 rounded-md border-gray-300"
              placeholder="Enter your name here ..."
            
            />
            <input
              type="email"
              className="m-1 px-2 py-1 min-w-60 border-2 rounded-md border-gray-300  "
              placeholder="Enter your email ..."
            />
            <input
              type="number "
              className="m-1 px-2 py-1 min-w-60 border-2 rounded-md border-gray-300 "
              placeholder="Enter your phone number ..."
            />

            <div>
              <button className="m-1 bg-red-500 px-4 py-1 rounded-md text-white">
                Contact Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
