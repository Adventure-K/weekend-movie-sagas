import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function DetailView() {

    const history = useHistory();
    const dispatch = useDispatch();

    const movie = useSelector(store => store.activeMovie);
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
        </>
    )
}

export default DetailView;