import React, { Component } from 'react';
import './TravelOptions.css';
import flix from 'flix';

class TravelOptions extends Component {
    render() {
        flix.stations({
            key: 'k8LKgcuFoHnN5x/NdDYD6QSvjB4='
        }).then((data) => {
            console.log(data);
        })

        return (
            <div className="travel-options">
                TravelOptions ...
                {/* <TravelOptionsList></TravelOptionsList> */}
                {/* <TravelOptionsMap></TravelOptionsMap> */}
            </div>
        )
    }
}

export default TravelOptions;