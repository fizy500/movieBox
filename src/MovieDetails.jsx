import LogoBlack from "./assets/LogoBlackText.svg";
import Home from "./assets/Home.svg";
import Movies from "./assets/Movies.svg";
import Tv from "./assets/Tv.svg";
import Upcoming from "./assets/Calendar.svg";
import Logout from "./assets/Logout.svg";
import TopGunMovie from "./assets/topgunMovie.png";
import PlayGray from "./assets/PlayGray.svg";
import ExpandArrow from "./assets/ExpandArrow.svg";
import Star from "./assets/Star.svg";
import TwoTickets from "./assets/Twotickets.svg";
import List from "./assets/List.svg";

export default function MovieDetails() {
  return (
    <section className='min-h-screen'>
      <div className='container max-w-4x mx-auto'>
        <div className='grid grid-cols-12 py-6 space-x-7'>
          <div className='col-span-2 h-screen'>
            <div className='side sticky top-0  border-r-[#000000] border-r rounded-r-[45px] lg:flex flex-col space-y-16 items-center pb-4 pt-2 hidden'>
              <div className='mb-10 py-3'>
                <img src={LogoBlack} alt='Logo' />
              </div>

              <div className='grid grid-rows-4 gap gap-y-10'>
                <a
                  href=''
                  className='flex items-center space-x-2 text-[#666666] font-semibold text-xl'
                >
                  <img src={Home} alt='Home' className='w-[25px] h-[25px]' />
                  <span> Home</span>
                </a>

                <a
                  href=''
                  className='flex items-center space-x-2 text-[#666666] font-semibold text-xl'
                >
                  <img src={Movies} alt='Home' className='w-[25px] h-[25px]' />
                  <span> Movies</span>
                </a>
                <a
                  href=''
                  className='flex items-center space-x-2 text-[#666666] font-semibold text-xl'
                >
                  <img src={Tv} alt='Home' className='w-[25px] h-[25px]' />
                  <span> TV Series</span>
                </a>

                <a
                  href=''
                  className='flex items-center space-x-2 text-[#666666] font-semibold text-xl'
                >
                  <img
                    src={Upcoming}
                    alt='Home'
                    className='w-[25px] h-[25px]'
                  />
                  <span> Upcoming</span>
                </a>
              </div>

              <div className='px-6'>
                <div className='border border-[#BE123C] rounded-[20px] flex flex-col justify-center justify-items-center px-3 pt-7 pb-3 space-y-2'>
                  <p className='font-semibold text-[15px] text-[#333333]'>
                    Play movie quizes and earn free tickets
                  </p>
                  <p className='font-medium text-xs text-[#666666] '>
                    50k people are playing now
                  </p>
                  <div className='px-3'>
                    <button className='font-medium text-xs text-[#BE123C] bg-[#BE123C] bg-opacity-[20%]  rounded-[30px] py-[6px] px-4'>
                      Start playing
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href=''
                  className='flex items-center space-x-2 text-[#666666] font-semibold text-xl'
                >
                  <img src={Logout} alt='Home' className='w-[25px] h-[25px]' />
                  <span> Log out</span>
                </a>
              </div>
            </div>
          </div>

          <div className='col-span-10 py-2 px-4'>
            <div className='relative '>
              <img src={TopGunMovie} alt='' />
              <div className='absolute top-40 right-1/2 flex flex-col justify-center items-center space-y-3'>
                <div className='flex justify-center items-center bg-[#E8E8E8]  w-[7rem] h-[7rem]bg-opacity-[20%] rounded-[50%] '>
                  <img src={PlayGray} alt='Play' className='w-fit h-fit' />
                </div>
                <p className='text-[#E8E8E8] font-medium text-2xl '>
                  Watch Trailer
                </p>
              </div>
            </div>
            <div className='flex my-2'>
              <div className='space-y-3 w-[65%]'>
                <div>
                  <div className='flex space-x-6 items-center '>
                    <div className='flex space-x-6 text-[#404040] font-bold text-[23px]'>
                      <p>Top Gun: Maverick •</p>
                      <p>2022 •</p>
                      <p>PG-13 •</p>
                      <p>2h 10m</p>
                    </div>

                    <p className='text-[#B91C1C] text-[15px] font-medium border border-[#F8E7EB]  rounded-[15px] px-[17px] py-1'>
                      Action
                    </p>

                    <p className='text-[#B91C1C] text-[15px] font-medium border border-[#F8E7EB]  rounded-[15px] px-[17px] py-1'>
                      Drama
                    </p>
                  </div>
                </div>
                {/* To Do Up */}
                <p className='font-normal text-[#333333] text-xl leading-[30px]'>
                  After thirty years, Maverick is still pushing the envelope as
                  a top naval aviator, but must confront ghosts of his past when
                  he leads TOP GUN's elite graduates on a mission that demands
                  the ultimate sacrifice from those chosen to fly it.
                </p>
                <p className='font-normal text-xl py-2 space-x-2 border-y border-[#E8E8E8] border-opacity-[20%]'>
                  <span className='text-[#333333]'>Director :</span>
                  <span className=' text-[#BE123C]'>Joseph Kosinski</span>
                </p>
                <p className='font-normal text-xl space-x-2'>
                  <span className='text-[#333333]'> Writers :</span>
                  <span className=' text-[#BE123C]'>
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </p>
                <p className='font-normal text-xl space-x-2 border-y border-[#E8E8E8] border-opacity-[20%]'>
                  <span className='text-[#333333]'>
                    Stars :Tom Cruise, Jennifer Connelly, Miles Teller
                  </span>
                  <span className=' text-[#BE123C]'>
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </p>
                <div className='flex font-medium text-xl'>
                  <div className='bg-[#BE123C] text-white  rounded-[10px] w-[30%] py-3 px-5 '>
                    Top rated movie #65
                  </div>
                  <div className='border border-[#C7C7C7] rounded-tr-[10px] rounded-br-[10px] flex justify-between items-center  w-[70%] px-6'>
                    <p className='text-[#333333] '> Awards 9 nominations</p>
                    <img src={ExpandArrow} alt='' />
                  </div>
                </div>
              </div>

              <div className='w-[35%] px-8'>
                <div className='flex flex-col items-center space-y-3 px-10'>
                  <div className='flex items-center s self-end space-x-3 mb-3   '>
                    <img src={Star} alt='star' />
                    <p className=' text-xl font-medium'>
                      <span className='text-[#E8E8E8]'>8.5</span> |
                      <span className='text-[#666666]'>350k</span>
                    </p>
                  </div>

                  <button className='text-white text-xl font-medium flex space-x-2 bg-[#BE123C] rounded-[10px] px-10 py-3'>
                    <img src={TwoTickets} alt='' />
                    <span>See Showtimes</span>
                  </button>

                  <button className='text-[#333333] text-xl font-medium flex space-x-2  border border-[#BE123C]  bg-[#BE123C] bg-opacity-[5%] rounded-[10px]  px-10 py-3'>
                    <img src={List} alt='' />
                    <span>More watch options</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
