import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import './MovieItem.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        // width: "10em",
        height: "22em",
    },
    title: {
        fontSize: 18,
        marginBottom: "4px"
    },
    alignCenter: {
        display: "flexbox",
        alignItems: "center",
        justifyContent: "center"
    },
    cardBox: {
        margin: "15px",
    },
});


function MovieItem({ movie }) {
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

    const classes = useStyles();

    return (
        <>
            <Grid item xs={3}>
                <Box className={classes.cardBox} boxShadow="6" key={movie.id}>
                    <Card className={classes.root} variant="outlined" onClick={() => handleClick(movie)} >
                        <CardContent>
                            <Typography className={classes.title} variant="h5" component="h3">
                                {movie.title}
                            </Typography>
                            <img className="cardPoster" src={movie.poster} alt={movie.title} />
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </>
    )
}

export default MovieItem;