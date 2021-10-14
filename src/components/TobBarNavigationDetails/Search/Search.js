import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import Constant from "expo-constants";
import { useNavigation } from '@react-navigation/native';



const Search = () => {
    const navigation=useNavigation();
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:"row",elevation:4,alignItems:"center",borderBottomLeftRadius:1,borderBottomRightRadius:1, borderColor:"#A9AAAC", height:60,marginTop:Constant.statusBarHeight,backgroundColor:"#FFFFFF",}}>
                <Ionicons onPress={()=>navigation.goBack()} style={{width:"15%",height:40,marginLeft:5,paddingLeft:10,paddingTop:5,}} name="arrow-back-outline" size={28} color="#A9AAAC" />
                <View style={{width:"80%",zIndex:-1}}>
                    <TextInput placeholder="Type Here..." style={{backgroundColor:"#FFFFFF",elevation:4,width:"100%",borderRadius:5,height:35,paddingLeft:10}}/>
                </View>
                <FontAwesome style={{width:"10%",marginLeft:-37,zIndex:1}} name="search" size={24} color="#A9AAAC" />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
