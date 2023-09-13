import IMDB from "../assets/imdb.png";
import RottenTomatoes from "../assets/rottentomatoes.png";
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




// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/authentication',
//   headers: {accept: 'application/json'}
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
