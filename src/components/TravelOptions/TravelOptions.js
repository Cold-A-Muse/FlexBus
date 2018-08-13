import React, { Component } from 'react';
import './TravelOptions.css';
import sampleResponseBody from '../../data/KLM-API/sample-response-body.json';

class TravelOptions extends Component {
    KLMOfferURL = "https://api.klm.com/opendata/flightoffers/available-offers";

    state = {
        currentOffers: []
    };

    componentDidMount() {
        this.fetchAvailableOffers();
    }

    fetchAvailableOffers = () => {
        fetch(this.KLMOfferURL, {
            method: "POST",
            headers: {
             "AFKL-TRAVEL-Country": "NL",
             "AFKL-TRAVEL-Host": "KL",
             "api-Key": "dbcprwdc6vmjmgmw46rf2rnt",
             "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(sampleResponseBody)
        })
        .then(response => response.json())
        .then(data => this.setState({
            currentOffers: data.flightProducts
        }));
    }

    render() {
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