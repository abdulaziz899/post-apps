import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Zocial ,FontAwesome,FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const color="#A9AAAC";
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{margin:7,width:"40%"}}>
                 <Zocial name="posterous" style={{marginLeft:4}} size={30} color="#0E8EF2" />
            </View>
            <View style={{padding:7,flexDirection:"row",width:"60%",justifyContent:"flex-end"}}>
                <FontAwesome name="search" size={27} color={color}  onPress={()=>navigation.navigate("Search")}/>
                <FontAwesome5 name="coins" style={{marginLeft:20,marginRight:35}} size={24} color={color} onPress={()=>navigation.navigate("Money")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        width:"100%"
}
})
