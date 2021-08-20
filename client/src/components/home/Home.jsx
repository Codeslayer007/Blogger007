import { Grid } from "@material-ui/core";
import Categories from "./Categories";
import Posts from "./Posts";
import Card from "./moving/card"

const Home = () => {
    return (
        <>
            <Card/>
           
            <Grid container>
                <Grid item lg ={2} xs = {12} sm = {2}>
                    <Categories />
                </Grid>
                <Grid container item lg = {10} xs = {12} sm = {10}>
                    <Posts />
                </Grid>

            </Grid>

        </>
    )
}

export default Home;