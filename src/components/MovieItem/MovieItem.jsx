import { useHistory } from 'react-router-dom';
import DetailView from '../DetailView/DetailView.jsx';
import { useDispatch } from 'react-redux'

function MovieItem({movie}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        history.push(`/details/${movie.id}`)
        dispatch({
            type: 'ACTIVE_MOVIE',
            payload: movie
        })
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie.id
        })
    }

    return (
        <>
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} onClick={() => handleClick(movie)} />
            </div>
        </>
    )
}

export default MovieItem;