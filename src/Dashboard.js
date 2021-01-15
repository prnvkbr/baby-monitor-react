import React, {Component} from 'react'
import SimpleAppBar from "./components/SimpleAppBar";
import SimpleCard from "./components/SimpleCard";
import Media from "./components/Media";
import Chart from "./components/Chart";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import moment from 'moment';



const YOUTUBE_API = ""

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            temperature:"20F",
            humidity:"40%",
            temp_list: [],
            humidity_list:[],
            video_id: null,
        };
    }

    fetch() {
        axios.get("http://192.168.0.16:5000/get")
            .then((response) => {
                this.setState({temperature: response.data["temp"],
                    humidity: response.data["humidity"],
                    temp_list:this.state.temp_list.concat(response.data["temp"]),
                    humidity_list:this.state.humidity_list.concat(response.data["humidity"])})
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    fetch_media() {
        axios.get(YOUTUBE_API)
            .then((responseJson) => {
            console.log(responseJson);
            console.log(responseJson.items[0].id.videoId);
                if (responseJson && responseJson.items[0]) this.setState({ videoId: responseJson.items[0].id.videoId })
            })
            .catch((error) => {
                console.error(error)
            });
    }

    componentDidMount() {
        this.fetch_media();
        // Fetch the first time for an initial value
        this.fetch();
        const passedTime = moment().startOf('hour').fromNow();
        console.log(passedTime);
        this.timerID = setInterval(
            () => this.fetch(),
            15*60*1000
        );
    }

    render(){
        return (
            <div>
                <SimpleAppBar/>
                <Grid container xs={12}>
                    <Grid item xs={3}>
                        <Chart title={"Temperature"} senseData={this.state.temperature}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Chart title={"Humidity"} senseData={this.state.humidity}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Media/>
                    </Grid>
                </Grid>
                {/*<Grid container xs={8}>*/}
                    {/*/!*<Grid item xs={4}>*!/*/}
                        {/*/!*<SimpleCard title={"Date"} />*!/*/}
                    {/*/!*</Grid>*!/*/}
                    {/*<Grid item xs={4}>*/}
                        {/*<SimpleCard title={"Time"} />*/}
                    {/*</Grid>*/}
                {/*</Grid>*/}

            </div>
        );
    }
}

export default Dashboard;
