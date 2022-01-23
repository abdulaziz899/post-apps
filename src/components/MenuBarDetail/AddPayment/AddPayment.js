import React, { useState } from 'react'
import { StyleSheet, Text, View,Picker} from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constant from "expo-constants";

const AddPayment = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    const navigation=useNavigation(); 
    return (
        <View>
           <View style={{flexDirection:"row",elevation:4,alignItems:"center",borderBottomLeftRadius:1,borderBottomRightRadius:1, borderColor:"#A9AAAC", height:60,marginTop:Constant.statusBarHeight,backgroundColor:"#FFFFFF",}}>
                <Ionicons onPress={()=>navigation.goBack()} style={{width:"15%",height:40,marginLeft:5,paddingLeft:10,paddingTop:5,}} name="arrow-back-outline" size={28} color="#A9AAAC" />
                <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                  
                    <Text style={{fontSize:17,color:"#A9AAAC",fontWeight:"400"}}>Pay Method</Text>
                </View>
            </View>
            <View style={styles.methodContainer}>
               <View>
                   <Text style={{color:"#A9AAAC",fontSize:17,fontWeight:"400",textTransform:"capitalize"}}>Select your payment method</Text>
               </View>
            </View>

            <View style={{width:"100%",height:100, backgroundColor:"green"}}>
            <Picker 
                selectedValue={selectedValue} 
                style={{ height: 50,backgroundColor:"green", width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            </View>
        </View>
    )
}

export default AddPayment;

const styles = StyleSheet.create({
    methodContainer:{
        marginTop:20,
        width:"90%",
        height:"100%",
        alignItems:"center"
    }
})
