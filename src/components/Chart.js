import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Line, LineChart, XAxis, YAxis, Tooltip, Legend, AreaChart, Area} from 'recharts';


const styles = theme => ({
    title: {
        fontSize: 25,
        marginLeft: 20,
        paddingTop: 10,
    },
    pos: {
        width: 200,
        height: 250,
    },
    paper: {
        marginRight: 5,
        marginLeft: 5,
        marginTop: 20,
        height: 430,
        width: 405,
        backgroundColor: "#FAFAFA",
        margin: theme.spacing.unit,
    },
    text: {
        fontSize: 50,
        paddingLeft: 20,
        paddingBottom: 10,
    }
});

const data = [
    {hr: '12a', Temperature: 20, Humidity: 40},
    {hr: '3a', Temperature: 20, Humidity: 40},
    {hr: '6a', Temperature: 20, Humidity: 60},
    {hr: '9a', Temperature: 40, Humidity: 40},
    {hr: '12p', Temperature: 20, Humidity: 80},
    {hr: '3p', Temperature: 20, Humidity: 40},
    {hr: '6p', Temperature: 80, Humidity: 40},
    {hr: '9p', Temperature: 80, Humidity: 40},
];

function Chart (props) {
    const {classes} = props;

    return(
        <div>
            <Paper className={classes.paper}>
                {/*<Typography className={classes.title} color="textSecondary">*/}
                    {/*Temperature = {props.temperature}*/}
                {/*</Typography>*/}
                <Typography className={classes.title} gutterBottom component="h2" variant="h5" color="textSecondary">
                    {props.title}
                </Typography>
                <Typography className={classes.text} color="textSecondary">
                    {props.senseData}
                </Typography>

                <AreaChart width={400} height={300} data={data}
                           margin={{top: 20, right: 20, bottom:35}}>
                    <XAxis dataKey="hr"/>
                    <YAxis/>
                    {/*<CartesianGrid strokeDash="5"/>*/}
                    <Tooltip/>
                    <Legend/>
                    {(function () {
                        switch (props.title) {
                            case "Temperature":
                                return <Area type="monotone" dataKey="Temperature" dot={false} strokeWidth={2} fill="#FFEB3B" stroke="#f9ab00"/>;
                            case "Humidity":
                                return <Area type="monotone" dataKey="Humidity" dot={false} strokeWidth={2} fill="#34a853" stroke="#34a853"/>;
                            default:
                                return null;
                        }
                    }) ()}
                }
                </AreaChart>
            </Paper>
        </div>
    );
}

Chart.prototype = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chart);