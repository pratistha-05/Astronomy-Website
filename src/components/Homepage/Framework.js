import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root:{
backgroundColor:'black'
}
}));

export default function Framework(){
    const classes = useStyles();
    return(
<div >
    <h2>Made using</h2>
</div>
    );
}