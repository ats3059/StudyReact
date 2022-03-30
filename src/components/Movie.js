import {Link} from "react-router-dom";

const Movie = ({data}) => (
    <div key={data.id}>
         
        <img src={data.medium_cover_image}/>
        <h2>
            <Link to={`/movie/${data.id}`}>{data.title}</Link>
        </h2>
        <p>{data.summary}</p>
        <ul>
            {
                data.genres?.map((inData)=>
                    <li key={inData}>{inData}</li>
                )
            }
        </ul>
    </div>
)

export default Movie;