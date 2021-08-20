
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginButton from "./account/login";
import LogOutButton from "./account/logout";
import { useAuth0 } from "@auth0/auth0-react";
const useStyles = makeStyles({
    navbar: {
        background: "white",
        color: "black",
    },
    elements: {
        display: "flex",
        justifyContent:"center",
        '& > *':{
            padding: "20px" ,
            backgroundColor:"unset",
            border:"none",
            fontSize :"20px",
            fontFamily:"Roboto",
            textDecoration:"none",
            color :"inherit",
            height:"100%",
            '&:hover':{
        
                cursor: "pointer",
                color:"grey",
               
            }
            
        },
        
    },
    link:{
        // textDecoration:"none",
        // color :"inherit",
    },
    
})
const Header = () => {
    const classes = useStyles();
    const {isAuthenticated} = useAuth0();
    return (
        <AppBar className={classes.navbar}>
            <Toolbar className={classes.elements}>
               <Link to = {"/"} className={classes.link}> <Typography>Home</Typography> </Link>
            
               <Link to = {"/about"} className={classes.link}> <Typography>About</Typography> </Link>
               
                {isAuthenticated ?<LogOutButton className = {classes.button}/>:<LoginButton className = {classes.button}/>}
                {/* <Link to = {"/register"} className={classes.link}> <Typography>Login</Typography> </Link> */}
                

            </Toolbar>
        </AppBar>
    )
}

export default Header;