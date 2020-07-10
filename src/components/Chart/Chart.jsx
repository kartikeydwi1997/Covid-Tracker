import React,{useState,useEffect} from 'react'
import {fetchdailyData}  from '../../API';
import {Line,Bar} from 'react-chartjs-2'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
root:{
    display:'flex',
    // alignItems:'center',
    justifyContent:'center',
    // flexDirection:'column',
    width:'90%',
    marginTop:"10px",
    padding:theme.spacing(2)
}
}))
const Chart=({data:{confirmed,deaths, recovered},country})=>{
    const [dailyData,setdailyData]=useState([])
    const classes = useStyles();
    
    
    useEffect(()=>{
     const fetchAPI=async()=>{
        setdailyData(await fetchdailyData());
        // setdailyData(initialDailyData)
     }
        fetchAPI()
    },[]);

    const lineChart=(
        dailyData.length!=0?
        (<Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:' #36d4c1',
                fill:'true'
               
                // #3333ff
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:' rgb(241, 89, 55)',
                fill:'true'
               
                // rgba(255,0,0,0.5)
            }
        ]
    }}
        />):null
    );
    const barchart =(
       confirmed?(
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                        label:'People',
                        backgroundColor:['#36d4c1','rgba(45, 218, 34,0.8)','rgba(241, 89, 55,0.8)'],
                        data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in  ${country}`},
            }}
            />
        ):null
    );

    return(
       <div className={classes.root}>
        {country?    barchart: lineChart}
       </div>
    )
}
export default Chart;