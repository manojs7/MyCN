import React, { Component } from 'react'

export default class NBookChef extends Component {
    componentDidMount() {

        if (sessionStorage.getItem("first_url") === null) {
            const catch_url = sessionStorage.setItem("first_url", "x");
            console.log(catch_url);
        } else {
            let url_value = sessionStorage.getItem("first_url");
            console.log(url_value);
        }
        // this.setState({
        //   url: url_value,
        // });
    }
}
