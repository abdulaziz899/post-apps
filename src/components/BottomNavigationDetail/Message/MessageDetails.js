import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const MessageDetails = (props) => {
    const {name, id, img}=props.message;
    return (
        <View style={styles.container}>
            <Image style={styles.profileImg} source={{uri:img}}/>
            <Text style={styles.profileText}>{name}</Text>
        </View>
    )
}

export default MessageDetails

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:65,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:.5,
        borderColor:"#A9AAAC",
    },
    profileImg:{
        backgroundColor:"green",
        width:50, 
        height:50,
        borderRadius:50,
        marginLeft:15
    },
    profileText:{
        width:"80%",
        fontSize:16,
        marginLeft:8,
        textTransform:"capitalize"
    }
})
