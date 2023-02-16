import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Second = () => {
    const name = useSelector((state) => state.name.name);
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default Second