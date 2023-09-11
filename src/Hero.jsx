import NavBar from "./components/NavBar";
import Play from "./assets/Play.svg";
import FeaturedMovie from "./components/FeaturedMovie";
import Rating from "./components/Rating";

export default function Hero() {
  return (
    <main className='mb-40'>
      <section>
        <div className=" hero  w-full bg-[ur('.//assets/Poster.png')] bg-cover bg-center bg-no-repeat h-[40rem]">
          <NavBar />

          <div className='max-width h-[80%] flex justify-center items-center '>
            <div className='text-white space-y-4'>
              <h2 className=' font-bold text text-5xl lg:w-[30%]'>
                John Wick 3 : Parabellum
              </h2>
              <div className="lg:w-[20%]">
                <Rating />
              </div>

              <p className='lg:w-[30%] font-medium text-sm '>
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
              <button className='font-bold text-sm rounded-md bg-rose-700 flex items-center py-2 px-4 space-x-4 uppercase'>
                <img src={Play} alt='play' />
                <span> Watch trailer</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center'>
        <div className='max-width flex justify-between w-full py-10'>
          <h2 className=' text-black font-bold text-4xl pl-3  '>
            Featured Movie
          </h2>
          <button className='flex items-center space-x-3 pr-3'>
            <span className='text-rose-700 text-lg font-normal'>
              {" "}
              See more{" "}
            </span>
            <svg
              width='9'
              height='15'
              viewBox='0 0 9 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.5 1.66668L7.33333 7.50001L1.5 13.3333'
                stroke='#B91C1C'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>

        <div className='max-width grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-40 '>
          <FeaturedMovie />
          <FeaturedMovie />
          <FeaturedMovie />
          <FeaturedMovie />
          <FeaturedMovie />
          <FeaturedMovie />
          <FeaturedMovie />
          <FeaturedMovie />
        </div>
      </section>
    </main>
  );
}
