import { React, Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Axios from 'axios';
import '../assets/css/Localizacao.css';

export class Localizacao extends Component {

    constructor() {
        super();
        this.state = {
            marks:[]
        }
    }

    async componentDidMount() {
        this.fetchMarkers();
        await console.log(this.state.marks);
    }

    fetchMarkers = async () => {
        await Axios("http://192.168.4.224:5000/api/Localizacoes")
            .then(res => this.setState({ marks: res.data }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: -23.5365665, lng: -46.6462884 }}
            >
                {this.state.marks.map((marker) => {
                    return (<Marker position={{
                        lat: marker.latitude,
                        lng: marker.longitude
                    }} onClick={() => console.log("You clicked me!")} />)
                })}
            </Map>
        );
    }
}
const mapStyles = {
    width: '100%',
    height: '100%',
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAHJPk6sg_T1UMm1CadIyvi2B4k2ZIiaJg'
})(Map);
