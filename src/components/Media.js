import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import PlayIcon from '@material-ui/icons/PlayArrow';
import YouTube from 'react-youtube';
import axios from 'axios';


const opts = {
    paddingLeft: 20,
    height: 350,
    width: 600,
    playerVars: {
        autoplay: 1
    },
};



class Media extends Component {
    state = {
        isClicked: false,
        title: "Start Stream",
    };


    handleClick = () => {
        if (this.state.isClicked === false) {
            this.setState({
                isClicked: true,
                title: "Stop Stream",
            });
            axios.post('http://0.0.0.0:5000/stream');
        } else {
            this.setState({
                isClicked: false,
                title: "Start Stream",
            });
        }
        console.log("START STREAM");
    };

    render(){

        const styles = {
            card: {
                marginTop: 20,
                height: 430,
                width: 650,
                marginLeft: 5,
                backgroundColor: "#FAFAFA",
            },
            button: {
                backgroundColor: "#ea4335",
                margin: 5,
            },
            rightIcon: {
                marginRight: 20,
            },
        };

        return (
            <div style={styles}>
                <Card style={styles.card}>
                    <CardContent>
                        <YouTube videoId="QS_eE31Czyw" opts={opts}/>
                        <Button onClick={() => {
                            this.handleClick();
                        }} style={styles.button} color="primary" variant="contained">
                            {this.state.title}
                            <PlayIcon style={styles.rightIcon} />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Media;

// Media.prototype = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(Media);
