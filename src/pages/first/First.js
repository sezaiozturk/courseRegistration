import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import InputCard from '../../components/inputCard'
import Button from '../../components/button'
import { useDispatch } from 'react-redux'
import { addLesson, save } from '../../context/nameSlice'

const First = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');
    const [lesson, setLesson] = useState('');
    const numberHandle = (text) => setNumber(text);
    const nameHandle = (text) => setName(text);
    const lessonHandle = (text) => setLesson(text);
    const dispatch = useDispatch();
    const handleSave = () => {
        dispatch(save([name, number]));
    }
    const handleAdd = () => {
        dispatch(addLesson(lesson));
    }

    return (
        <SafeAreaView>
            <InputCard title='Student Number' placeholder={'enter number'} onChangeText={numberHandle} />
            <InputCard title='Student Name' placeholder={'enter student name'} onChangeText={nameHandle} />
            <InputCard title='Lesson Name' placeholder={'enter lesson name'} onChangeText={lessonHandle} />
            <Button title="SAVE" onPress={handleSave} />
            <Button title="ADD" onPress={handleAdd} />
        </SafeAreaView>
    )

}

export default First