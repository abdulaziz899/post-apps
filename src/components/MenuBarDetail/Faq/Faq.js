import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constant from "expo-constants";

const Faq = () => {
    const navigation=useNavigation(); 
    return (
        <View>
           <View style={{flexDirection:"row",elevation:4,alignItems:"center",borderBottomLeftRadius:1,borderBottomRightRadius:1, borderColor:"#A9AAAC", height:60,marginTop:Constant.statusBarHeight,backgroundColor:"#FFFFFF",}}>
                <Ionicons onPress={()=>navigation.goBack()} style={{width:"15%",height:40,marginLeft:5,paddingLeft:10,paddingTop:5,}} name="arrow-back-outline" size={28} color="#A9AAAC" />
                <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                  
                    <Text style={{fontSize:19,color:"#A9AAAC",fontWeight:"bold"}}>FAQ</Text>
                </View>
            </View>
        </View>
    )
}

export default Faq;

const styles = StyleSheet.create({})
