import { StyleSheet, Text, View, SafeAreaView ,ScrollView, Dimensions} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EventBloc } from './EventBloc';
import { Normalize } from "../Global/Normalize"

export const Envents = () => {
  return (
    <View style={{ width:Dimensions.get("screen").width ,display:"flex", justifyContent:"center", alignItems:"center"}}>
            
                <ScrollView style={{height:"58%",  width:Dimensions.get("screen").width , }} horizontal showsHorizontalScrollIndicator={false}>
                    <EventBloc widthBloc={Normalize(270)} heightBloc="100%" />
                    <EventBloc widthBloc={Normalize(270)} heightBloc="100%" />
                    <EventBloc widthBloc={Normalize(270)} heightBloc="100%"/>
                    <EventBloc widthBloc={Normalize(270)} heightBloc="100%"/>
                    <EventBloc widthBloc={Normalize(270)} heightBloc="100%" />
                    <EventBloc widthBloc={Normalize(270)} heightBloc="100%" />

                </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({})