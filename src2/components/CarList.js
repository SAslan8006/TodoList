import { ScrollView, Text, View } from "react-native";
import React, { Component } from 'react'
import axios from "axios";
import CarDetail from './CarDetail';

class CarList extends Component {
    constructor() {
        super();
        this.state = { carList: [] }
    }
    componentDidMount() {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => {
                this.setState({ carList: response.data.categories })
            })
    }

    renderList = () => {
        return this.state.carList.map((meal, index) => {
            return <CarDetail key={index} brand={meal} />
        }
        );
    }

    componentDidUpdate() {
        console.log("Update Did mount")
    }
    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView >
        )
    }
}

export default CarList;
