import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Clock from 'react-live-clock';
import moment from 'moment';


const styles = {
    title: {
        fontSize: 25,
    },
    card: {
        marginTop: 20,
        height: 100,
        width: 250,
        marginLeft: 5,
        backgroundColor: "#FAFAFA",
    },
    text: {
        fontSize: 20,
        // paddingTop: 30,
        // color: "#fff"
    }
};

function SimpleCard(props) {
    const {classes} = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    {/*<Typography className={classes.title} color="textSecondary">*/}
                        {/*{props.title}*/}
                    {/*</Typography>*/}
                    <Typography className={classes.text} color="textSecondary">
                        Today is
                        {(function () {
                            switch (props.title) {
                                case "Time":
                                    const d = moment().format();
                                    return <Clock
                                        date={d}
                                        style={{fontSize: '5'}}
                                        format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
                                        ticking={true} />;
                                case "Date":
                                    return new Date().toLocaleDateString();
                                default:
                                    return null;
                            }
                        }) ()}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

SimpleCard.prototype = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard)