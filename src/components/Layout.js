import { makeStyles } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    }
})
export default function Layout({ children }) {
    const classes = useStyles()

    return (
        <div>
            {/*appbar*/}
            {/*side drawer*/}
            <Drawer>
                <div><Typography variant="h5">This is a Drawer</Typography></div>
            </Drawer>
            <div className={classes.page}>{children}</div>
        </div>
    )
}
//https://www.youtube.com/watch?v=Ix1LZGBSp-E&ab_channel=TheNetNinja
// left to see..