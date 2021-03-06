import React, { Component } from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import ArtistSection from '../Components/ArtistSection'
import BodyContent from '../Components/BodyContent';
import Footer from '../Components/Footer';
import '../Resources/style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Header/>
            <Search/>
            <ArtistSection/>
            <BodyContent/>
            <Footer/>
            </div>
        );
    }
}
