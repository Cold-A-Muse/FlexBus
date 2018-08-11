import React, { Component } from 'react';
import './App.css';
import TravelOptions from '../TravelOptions/TravelOptions';
import SearchBar from '../SearchBar/SearchBar';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <SearchBar/> */}
                <TravelOptions/>
            </div>
        );
    }
}