import { Grid, Typography } from "@mui/material"
import notFoundImg from '../../images/no-search.png'

const NotFound =()=>{

    return(
        <Grid container spacing={2} style={{display: "flex", marginTop: 40}}>
            <center>
            <Grid item sm={12}>
                <img src={notFoundImg} alt="Not found" class="noFoundImg"/>
            </Grid>
            <Grid item sm={12} >
             <Typography variant="h2" class="noFoundHeading">Sorry, no results found!</Typography>
            </Grid>
            <Grid item sm={12}>
            <Typography variant="h5" class="noFoundHeading2">Please check the filter or try searching for something else</Typography>
            </Grid>
            </center>
        </Grid>
    )
}
export default NotFound;