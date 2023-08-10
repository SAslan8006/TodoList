import React from "react";
import { View, Text } from "react-native";
import Item from "./Item";
import ItemSection from './ItemSection';


const CarDetail = props => {
    return (
        <Item>
            <ItemSection><Text>{props.brand}</Text></ItemSection>


        </Item>
    )
}

export default CarDetail;
