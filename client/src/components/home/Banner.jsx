
import {Box,makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    image:{
        background: 'url("https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg") center/55% repeat-x #000',
        height: "50vh",
        width: "100%",

    }
})
const Banner = () =>{
    const classes = useStyles();
    return (
        <Box className={classes.image}>

        </Box>
    )
}

export default Banner;