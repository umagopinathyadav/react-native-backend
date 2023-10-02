import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getTodos } from './redux/actions/todoActions'

const Notes = () => {
    const [data, setData] = useState({
        task: "",
        desc: ""
    })
    const dispatch = useDispatch()
    const { notes } = useSelector(state => state.todos)
    useEffect(() => {
        dispatch(getTodos())
    }, [])

    // console.warn(notes);
    return <View style={styles.container}>
        <TextInput
            value={data.task}
            onChangeText={value => setData({ ...data, task: value })}
            placeholder='Enter Task'
        />
        <TextInput
            value={data.desc}
            onChangeText={value => setData({ ...data, desc: value })}
            placeholder='Enter Desc'
        />
        <Button
            onPress={e => dispatch(addTodo(data))}
            title='Add Todo' />

        {
            notes && notes.map(item => <View key={item._id}>
                <Text>{item.task}</Text>
            </View>)
        }

    </View>
}

export default Notes

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 50
    }
})