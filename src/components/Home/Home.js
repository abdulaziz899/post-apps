import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import HomeCard from '../HomeCard/HomeCard'

const Home = () => {
    return (
           <ScrollView style={{marginBottom:1}}>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
           </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({})
