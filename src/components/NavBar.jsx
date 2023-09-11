import Logo from "../assets/Logo.svg";
import SearchIcon from "../assets/Icon.svg";
import Menu from "../assets/Menu.svg";
export default function NavBar() {
  return (
    <header>
      <nav className='max-width flex justify-between items-center py-4'>
        <div>
          <img src={Logo} alt='' />
        </div>
        <div className='w-1/2  bg-transparent py-2 px-3 border-2 border-gray-300 rounded-md flex justify-between items-center'>
          <input
            type='text'
            placeholder='What do you want to watch?'
            className='bg bg-inherit outline-none w-full text-white placeholder:text-white placeholder:font-normal placeholder:text-base'
          />
          <img src={SearchIcon} alt='' />
        </div>
        <div className='flex items-center space-x-5'>
          <button className='text-white font-bold text-base'>Sign In</button>
          <img src={Menu} alt='' />
        </div>
      </nav>
    </header>
  );
}
