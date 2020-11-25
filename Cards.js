import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import SearchIcon from "@material-ui/icons/Search";
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import pix from "./../image/hen.jpg"
import axios from '../axios';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  margin: {
    margin: "40px",
    width: "500px",
  
  },
 
});

export default function ImgMediaCard() {
  
  const classes = useStyles();
  const [present,Setpresent]= useState([])
  const [searchState, setSearchState] = useState([]);
  const [input, setInput] = useState("");


  const getData =async ()=>{
    const res = await axios.get('/')
    console.log(res)
    if(res.data){
      return Setpresent(res.data)
    }
  }

  const checkStatus=()=>{
    console.log(input)
  }
  const checkInput = async () => {
    console.log(input);


    const result = await axios.get(`/${input}`);
    console.log(result);
    if (result.data) {
      return setSearchState(result.data);
    }



  }
  useEffect(()=>{
    getData()
    checkInput()
  },[])

  return (
    <>
       <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid"
            label="With a grid"
            value={input}
            onChange= {(e)=> setInput(e.target.value)}
             
             />
          </Grid>
          <Button onClick={checkInput} 
              variant="outlined" color="secondary">
              Seach
      </Button>
        </Grid>
      </div>
     
    

      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={searchState.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {searchState.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          public_repos: {searchState.public_repos}
              {""}
              <Typography>followers: {searchState.followers}</Typography>
              <Typography>following: {searchState.following}</Typography>
              {""}
              {""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={checkStatus} size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
   
    </>
  );
}
