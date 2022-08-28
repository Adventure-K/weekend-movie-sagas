import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import './DetailView.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles ({
    detailDiv: {
        height: "50vmax"
    },
    backButton: {
        position: "absolute",
        top: "4vh",
        right: "3vw",
        backgroundColor: "rgb(241, 167, 167)"
    },
    desc: {
        display: "inline-block",
        border: "1px solid",
        width: "50vw",
        position: "relative",
        alignContent: "center"
    }
})



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

    const classes = useStyles();

    return (
        <div className={classes.detailDiv}>
            <Button variant="outlined" className={classes.backButton} onClick={handleBack}>Back</Button>
            <h1 className={classes.movieTitle}>{movie.title}</h1>
            <img className={classes.poster} src={movie.poster} alt={movie.title}/>
            <p className={classes.desc}>{movie.description}</p>
            <ul id="genres">
                {genres.map((x, i) => {
                    return (
                        <li key={i}>{x.name}</li>
                    );
                })}
            </ul>
        </div>
    )
}

export default DetailView;