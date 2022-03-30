
import {useState , useEffect} from 'react';
import Movie from '../components/Movie';
const Home = () => {
  const [loading , setLoading] = useState(true);
  const [movies , setMovies] = useState([]);
  const getMovies = async () => {
    const response  = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
  }
  useEffect(() => {
    getMovies();
    setLoading(false);
  },[]);
 
  return (
    <div className="App">
      {loading ? <h3>Loading...</h3> : 
        movies?.map((data)=>
        <Movie data = {data} key={data.id}/>
      )}

    </div>
    
  );
}
export default Home;