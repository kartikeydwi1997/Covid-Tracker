import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CountUp from 'react-countup';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display:'flex',
    // alignItems:'center',
    // justifyContent:'column',
    paddingTop:theme.spacing(2),
    overflow:"hidden"
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    // maxWidth: 500,
    boxShadow: "0px 0px 0px 0px #ffffff!important"
  },
  image: {
    width: 125,
    height: 120,
    marginTop:"12px"
  },
  img: {
    margin: 'auto',
    display: 'block',
    // maxWidth: '100%',
    // maxHeight: '100%',
    width: 120,
    // marginTop:"15px",
    height: 110,
    borderRadius:'8%'
  },
  cases:{
    ['@media (max-width:400px)']:{fontSize:"22px!important"},
    ['@media (max-width:350px)']:{fontSize:"22px!important"},
  }
}));
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate }}) => {
  const classes = useStyles();
  // const confirmed=props
  if(!confirmed){
    return 'Loading..'
  }
  // console.log(confirmed)
  
  return (
    <div className={classes.root}>
     <Grid container  spacing={3} 
     style={{paddingLeft:"15px",paddingRight:"13px"}}
     >

{/* md={4} sm={12} xl={4}style={{boxShadow: '0px 0px 0px 5px #000'}} */}
        <Grid item xs={12}  lg={4}  >
          <Paper className={classes.paper} style={{backgroundColor:"#36d4c1",borderRadius:"5%"}}>
            <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="Images/infected.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="h4" className={classes.cases} style={{textAlign:"left",marginTop:"12px",color:" #061c94",fontWeight:700}}>
                  Infected
                </Typography>
                <Typography variant="body2" gutterBottom  style={{textAlign:"left"}}>
               <CountUp start={0} end={confirmed.value}  style={{fontWeight:800}} duration={2.5} separator=","/>
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{textAlign:"left"}}>
                  <div style={{  display: 'flex', color:'#000',
                    alignItems: 'center '}}>
                <CalendarTodayOutlinedIcon/><div style={{marginLeft:'10px',fontWeight:700}}>{new Date(lastUpdate).toDateString()}</div></div>
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{textAlign:"left",color:"#000",fontWeight:700}}>
                Number of active cases
                </Typography>
              </Grid>
             
            </Grid>
            
          </Grid>
        </Grid>
          </Paper>
        </Grid>









        {/* rgb(45, 218, 34) */}

        
        <Grid item xs={12}  lg={4}  >
        <Paper className={classes.paper} style={{backgroundColor:"rgb(45, 218, 34)",borderRadius:"5%"}}>
            <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="Images/recovered.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="h4" className={classes.cases}  style={{textAlign:"left",marginTop:"12px",color:"rgb(6, 107, 19)",fontWeight:700}}>
                  Recovered
                </Typography>
                <Typography variant="body2" gutterBottom style={{textAlign:"left"}}>
                <CountUp start={0} end={recovered.value} style={{fontWeight:800}} duration={2.5} separator=","/>
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{textAlign:"left"}}>
                <div style={{  display: 'flex', color:'#000',
                    alignItems: 'center '}}>
                <CalendarTodayOutlinedIcon/>  <div style={{marginLeft:'10px',fontWeight:700}}>{new Date(lastUpdate).toDateString()}</div></div>
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{textAlign:"left",color:"#000",fontWeight:700}}>
                Number of recovered cases
                </Typography>
              </Grid>
             
            </Grid>
            
          </Grid>
        </Grid>
          </Paper>
        </Grid>


        <Grid item xs={12} lg={4}>
         <Paper className={classes.paper} style={{backgroundColor:"rgb(241, 89, 55)",borderRadius:"5%"}}>
            <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="Images/death.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={1 }>
              <Grid item xs>
                <Typography gutterBottom variant="h4" className={classes.cases}  style={{textAlign:"left",marginTop:"12px",color:" rgb(148, 6, 6)",fontWeight:700}}>
                  Deaths
                </Typography>
                <Typography variant="body2" gutterBottom style={{textAlign:"left"}}>
                <CountUp start={0} end={deaths.value}  style={{fontWeight:800}} duration={2.5} separator=","/>
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{textAlign:"left"}}>
                <div style={{  display: 'flex', color:'#000',
                    alignItems: 'center '}}>
                <CalendarTodayOutlinedIcon/>  <div style={{marginLeft:'10px',fontWeight:700}}>    {new Date(lastUpdate).toDateString()}</div></div>
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{textAlign:"left",color:"#000",fontWeight:700}}>
                Number of death caused
                </Typography>
              </Grid>
             
            </Grid>
            
          </Grid>
        </Grid>
          </Paper>
        </Grid>
      </Grid>
    
    
    </div>
  )
}
export default Cards;