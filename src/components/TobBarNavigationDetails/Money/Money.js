import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import Constant from "expo-constants";
import { useNavigation } from '@react-navigation/native';

const Money = () => {
    const navigation=useNavigation(); 
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:"row",elevation:4,alignItems:"center",borderBottomLeftRadius:1,borderBottomRightRadius:1, borderColor:"#A9AAAC", height:60,marginTop:Constant.statusBarHeight,backgroundColor:"#FFFFFF",}}>
                <Ionicons onPress={()=>navigation.goBack()} style={{width:"15%",height:40,marginLeft:5,paddingLeft:10,paddingTop:5,}} name="arrow-back-outline" size={28} color="#A9AAAC" />
                <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                    <FontAwesome  name="dollar" size={24} color="black" />
                    <Text style={{fontSize:25,color:"black",fontWeight:"bold"}}>100</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.earningContainer}>
                   <View style={styles.inner}>
                   <Text style={{fontSize:16,color:"#A9AAAC"}}>Total earning</Text>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#A9AAAC"}}>$ 100</Text>
                   </View>
                </View>
                <View style={styles.earningContainer}>
                   <View style={styles.inner}>
                   <Text style={{fontSize:16,color:"#A9AAAC"}}>Current earning</Text>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#A9AAAC"}}>$ 100</Text>
                   </View>
                </View>
                <View style={styles.earningContainer}>
                   <View style={styles.inner}>
                   <Text style={{fontSize:16,color:"#A9AAAC"}}>Available Withdrawal</Text>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#A9AAAC"}}>$ 100</Text>
                   </View>
                </View>
                <View style={styles.earningContainer}>
                   <View style={styles.inner}>
                   <Text style={{fontSize:16,color:"#A9AAAC"}}>Total Withdrawal</Text>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#A9AAAC"}}>$ 100</Text>
                   </View>
                </View>
            </View>
        </View>
    )
}

export default Money;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flexWrap:"wrap",
        width:"100%",
        height:"85%",
        padding:10,
    },
    earningContainer:{
        width:"47%",
        height:"30%",
        elevation:4,
        backgroundColor:"#ffffff",
        borderRadius:5,
        borderWidth:.3,
        borderColor:"gray",
        margin:5
    },
    inner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    }
})
