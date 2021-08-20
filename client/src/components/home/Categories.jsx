import { Button, makeStyles, Table, TableBody, TableRow, TableCell, TableHead } from "@material-ui/core";
import { Link } from "react-router-dom";
import table_value from "./Categories_value";
import { useAuth0 } from "@auth0/auth0-react";
const useStyles = makeStyles({
    create: {
        margin: 20,
        background: "blue",
        color: "white",
        width: "80%",
    },
    table: {
        border: "1px solid rgba(224,224,224,1)",
        margin: "5px",
    },
    link: {
        textDecoration: "none",
        color: "inherit",


    },
    cell: {
        width: "500px",
        '&:hover': {

            backgroundColor: "#722e2e",
            color: "white",
        }
    },
    head: {
        fontWeight: "bold",
    }
})


const Categories = () => {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();
    return (
        <>
            {isAuthenticated &&
                <Link to={"/create"} className={classes.link}>
                    <Button varient="contained" className={classes.create}>Create Blog</Button>
                </Link>
            }


            <Table className={classes.table}>
                <TableHead >
                    <TableCell className={classes.head}>

                        Categories

                    </TableCell>
                </TableHead>
                <TableBody>
                    {
                        table_value.map(ele => (
                            <TableRow>

                                <Link to={`/?category=${ele}`} className={classes.link} >

                                    <TableCell className={classes.cell}>
                                        {ele}
                                    </TableCell>

                                </Link>
                            </TableRow>



                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;