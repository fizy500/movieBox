import Faceboook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";

export default function Footer() {
  return (
    <footer className='flex lg:justify-center items-center py-10'>
      <div className='space-y-6 flex flex-col items-center lg:justify-center'>
        <div className='flex items-center justify-center space-x-8 '>
          <a href=''>
            <img src={Faceboook} alt='Faceboook' />
          </a>
          <a href=''>
            {" "}
            <img src={Instagram} alt='Instagram' />
          </a>
          <a href=''>
            {" "}
            <img src={Twitter} alt='Twitter' />
          </a>
          <a href=''>
            {" "}
            <img src={Youtube} alt='Youtube' />
          </a>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center lg:justify-center lg:space-x-8 text-gray-900 font-bold text-lg '>
          <a href=''>Conditions of Use</a>
          <a href=''>Privacy & Policy</a>
          <a href=''>Press Room</a>
        </div>
        <p className="text-gray-500 font-bold text-lg" >© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </footer>
  );
}
