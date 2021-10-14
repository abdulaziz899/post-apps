import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{width:150, height:150,borderRadius:150}} />
                <View style={{paddingTop:10,color:"#A9AAAC"}}>
                    <Text>MD ABDUL AZIZ</Text>
                </View>
                <View style={styles.following}>
                    <View style={styles.followingBox}>
                        <Text>100 </Text>
                        <Text>Following</Text>
                    </View>
                    <View style={styles.followingBox}>
                        <Text>100 </Text>
                        <Text>Follower</Text>
                    </View>
                    <View style={styles.followingBox}>
                        <Text>100 </Text>
                        <Text>liked</Text>
                    </View>
                </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        paddingTop:30
    },
    following:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingTop:30,
        width:"100%",
    },
    followingBox:{
        width:"30%",
        height:"100%",
        padding:5,
        paddingLeft:35,
        color:"#A9AAAC",
        borderWidth:0.4,
        borderColor:"#A9AAAC"
    }
})
