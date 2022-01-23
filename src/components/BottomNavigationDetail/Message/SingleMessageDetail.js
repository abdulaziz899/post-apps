import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from 'react-native';
import ChatDetail from './ChatDetail';


const SingleMessageDetail = (props) => {
    const {name, id, img}=props.message;
    const navigation = useNavigation();
    
    return (
        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"flex-end"}}>
            <TouchableOpacity  onPress={()=>navigation.navigate("ProfilesStack")}>
                <Image  style={styles.profileImg} source={{uri:img}}/>
            </TouchableOpacity>
        </View>

    )
}

export default SingleMessageDetail;



const styles = StyleSheet.create({
   
profileImg:{
    width:50, 
    height:50,
    borderRadius:50,
    marginLeft:15,
    flexDirection:"row",
    alignItems:"center",
},
})
