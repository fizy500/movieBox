import IMDB from "../assets/imdb.png";
import RottenTomatoes from "../assets/rotten_Tomatoes.png";
export default function Rating() {
  return (
    <div className='flex justify-between'>
      <div className='flex space-x-3'>
        <img src={IMDB} alt='' />
        <p>86.0 / 100</p>
      </div>
      <div className='flex space-x-3'>
        <img src={RottenTomatoes} alt='' />
        <p>97%</p>
      </div>
    </div>
  );
}
