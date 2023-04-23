import { Text, StyleSheet, View, setState } from 'react-native'
import React, { Component } from 'react'


export default class frontale extends Component {

    connect = async () => {
        const URL = "http://localhost:8080";

        try {
            const response = await fetch(URL);
            if (response.status != 200) {
                throw new Error("Something is wrong ");
            }
        } catch (error) {

        }
    }


    render() {
        return (
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({})