import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function DetailView() {

    const history = useHistory();
    const dispatch = useDispatch();

    const movie = useSelector(store => store.activeMovie);
    const genres = useSelector(store => store.genres);
    console.log(genres)

    // console.log(movie);
    const handleBack = () => {
        dispatch({
            type: 'DESELECT_MOVIE'
        })
        history.push('/');
    }

    return (
        <>
            <button onClick={handleBack}>Back</button>
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title}/>
            <p>{movie.description}</p>
            <ul id="genres">
                {genres.map((x, i) => {
                    return (
                        <li key={i}>{x.name}</li>
                    );
                })}
            </ul>
        </>
    )
}

export default DetailView;