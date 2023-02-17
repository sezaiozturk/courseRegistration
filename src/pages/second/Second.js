import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/card';

const Second = () => {
    const name = useSelector((state) => state.name.name);
    const number = useSelector((state) => state.name.number);
    const lessonList = useSelector((state) => state.name.lessonList);
    const renderLesson = ({ item }) => <Card text={item} />
    return (
        <View>
            <Card text={name} />
            <Card text={number} />
            <FlatList data={lessonList} renderItem={renderLesson} />
        </View>
    )
}

export default Second