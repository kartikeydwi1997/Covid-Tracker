import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl, Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {fetchcountries} from '../../API'
const useStyles = makeStyles((theme) => ({
    root:{
    //    width:'30%',
       marginTop:"50px",
     
        // padding:"40px 0px"
    },
    list:{
        display:"flex",
        alignItems:'center'
    },
    choose:{
        ['@media (max-width:350px)']:{fontSize:"15px!important",width:"200px!important"},
    }
}))

const CountryPicker=({handleCountryChange})=>{
    const classes = useStyles();
    const [countrydata,setcountrydata]=useState([])
 
    useEffect(()=>{
        const fetchCountriesAPI=async()=>{
            setcountrydata(await fetchcountries());
        }
        fetchCountriesAPI()
       },[])
       console.log(countrydata)
    return(
     <div  className={classes.root}>
     <Grid container>
         <Grid item xs={5} >
             <Typography className={classes.choose} style={{textAlign:'left',marginTop:'5px',marginLeft:'15px'}}>Choose Country:</Typography>
         </Grid>
         <Grid item xs={6}>
        <FormControl label ="outlined" >
            {/* <div className={classes.list}> */}
        {/* <p style={{marginRight:"15px"}}>Choose Country:</p> */}
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countrydata.map((country,i)=><option key={i} value={country}>{country}</option>)}
                </NativeSelect>
                {/* </div> */}
        </FormControl>  
        </Grid>
        </Grid>
        </div>
    )
}
export default CountryPicker;