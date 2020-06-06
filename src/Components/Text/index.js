import React from 'react';
import { Text } from "react-native";

const Textt = ({ text, style, children }) => {
    return (
        <Text style={style}>{children}</Text>
    )
}

export default Textt