import React, { useState } from 'react'
import { StyleSheet, Text,Button, View,Image, TextInput,Alert,ScrollView} from 'react-native';





const CreatePost = () => {

    return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:7,width:"85%"}}>
                        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                                style={{width: 50, height: 50,borderRadius: 50,borderWidth: 1,borderColor:'#fff'
                                }} />
                        <Text style={styles.profileText}> ABDUL AZIZ</Text>
                    </View>
                    <View style={styles.inputContainer}>
                    <TextInput numberOfLines={10} maxLength={200}   placeholder="useless placeholder" style={styles.textInputField} />
                    
                </View>
                <View style={{width:"85%", marginTop:10, height:20}}>
                    <Button
                            title="Press me"
                            color="#0D8AF0"
                            
                            onPress={() => Alert.alert('Button with adjusted color pressed')}
                        />
                </View>
            </View>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems:"center",
    },
    profile:{
        flexDirection:'row',
        width:"100%",
        height:"15%",
        alignItems:"center",
        justifyContent:"space-between",
    },
    profileText:{
        marginLeft:9,
        color:"#A9AAAC",
        fontWeight:"bold",
        fontSize:16,
    },
    inputContainer:{
        width:"85%",
        marginTop:8,
        height:"auto"
    },
    textInputField:{
        backgroundColor:"#FFFFFF",
        borderWidth:.5,
        borderColor:"#A9AAAC",
        borderRadius:5,
        width:"100%",
        height:100,
    },

   
})
