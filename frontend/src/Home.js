import React, { useRef } from 'react';
import Navbar from './Navbar';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiUpload } from 'react-icons/bi';

function Home() {
  const myRef = useRef(null);


  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })


  return (
    <>
      <Navbar executeScroll={executeScroll} />
      <div className="w-full flex justify-between mt-24">
        <div className="ml-20 mt-10 header">
          <h2 className="text-4xl  tracking-wide">
            Confused on what credit Card to choose ?
          </h2>
          <div className="text-3xl mt-5">We got you!</div>
          <button onClick={executeScroll} className="text-xl mt-10 upload-button p-3 rounded-xl flex items-center justify-around hover:bg-black hover:text-white tracking-wider w-52">
            Test Now <AiOutlineArrowRight className="ml-2" />
          </button>
        </div>
        <img
          className="h-96 mr-10 rounded-3xl"
          src="./creditcard.gif"
          alt="creditcard"
        ></img>
      </div>
      <div className="features-section mt-20 py-20 flex justify-center text-white">
        <div className="feature-inner-section flex-col justify-center items-center text-center tracking-wider">
          <img className="feature-images-1 h-64" src="./p2.png" alt="" />
          <div className="text-xl">Personalized Results</div>
          <div className="w-full flex justify-center text-gray-300 text-sm">
            <div className="w-60 pt-5">
              Get Personalized results depending upon your transaction
            </div>
          </div>
        </div>
        <div className="feature-inner-section flex-col text-center w-full tracking-wider">
          <img className="feature-images-2 h-72" src="./p3.png" alt="" />
          <div className="text-xl">No Questionnaire Model</div>
          <div className="w-full flex justify-center text-gray-300 text-sm">
            <div className="w-60 pt-5">
              Your Recommendation purely depends on your transactions
            </div>
          </div>
        </div>
        <div className="feature-inner-section flex-col justify-center items-center text-center tracking-wider">
          <img className="feature-images-3 h-72" src="./p4.png" alt="" />
          <div className="text-xl">Wide Range of Cards</div>
          <div className="w-full flex justify-center text-gray-300 text-sm">
            <div className="w-60 pt-5">
              Recommended from 100+ curated credit Cards
            </div>
          </div>
        </div>
      </div>
      <div ref={myRef} className="upload-pdf-section flex justify-center items-center">

        <form action="">
          <label htmlFor="pdf-file">
            <input type="file" id='pdf-file' className='hidden' accept="application/pdf" />
            <div className="upload-pdf-button p-3 text-2xl rounded-xl w-72 flex items-center justify-around h-20 hover:bg-black hover:text-white cursor-pointer">
              Upload PDF <BiUpload className='text-3xl'/>
            </div>
          </label>
        </form>
      </div>

    </>
  );
}

export default Home;
