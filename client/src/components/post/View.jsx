import { useAuth0 } from "@auth0/auth0-react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getPosts, deleteBlog } from "../../service/api";
const useStyles = makeStyles((theme) => ({
    container: {
        padding: "0 100px",
        [theme.breakpoints.down("md")]: {
            padding: "0 10px",
        }
    },
    image: {
        width: "100%",
        height: "50vh",
        objectFit: "cover",
    },
    icons: {
        float: "right",
        "& > *": {
            margin: 5,
        }

    },
    heading: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: "center",
        margin: "50px 0 10px 0",
    },
    subheading: {
        color: "#878787",
        display: "flex",
        margin: "0 0 20px 0",
        [theme.breakpoints.down("md")]: {
            display: "block",
        }
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    }

}))
const View = ({ match }) => {
    const url = "https://www.wallpaperup.com/uploads/wallpapers/2017/05/06/1089109/5ec08a98f5cd10e2af8329308185e23d-1000.jpg";
    const [post, setPost] = useState({});
    const history = useHistory();
    const classes = useStyles();
    const { user, isAuthenticated } = useAuth0();
    // let val = match.params.id;

    
    useEffect(() => {

        const fetchData = async () => {
            let data = await getPosts(match.params.id);
            setPost(data);
            // console.log(data);
        }
        fetchData();
    }, [match.params.id]);
    const handleDelete = async () => {
        await deleteBlog(post._id);
        history.push("/");
    }
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture} onError={(e) => { e.target.onerror = null; e.target.src = url; }} alt="post" />
            {isAuthenticated && post.user_id === user.sub &&
                <Box className={classes.icons}>
                    <Link to={`/update/${post._id}`} ><Edit color="primary" /></Link>
                    <Delete
                        onClick={() => handleDelete()}
                        color="error" />
                </Box>
            }
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                <Link to={`/?user_id=${post.user_id}`} className={classes.link}>
                    <Typography>Author : <span style={{ fontWeight: 600 }} >{post.username}</span></Typography>
                </Link>

                <Typography style={{ marginLeft: "auto" }}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>

            <Box style={{ margin: "20px 0" }}>{post.body}</Box>
        </Box>

    )
}
export default View;