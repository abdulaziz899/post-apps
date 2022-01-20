import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, FontAwesome5,MaterialIcons,Feather,MaterialCommunityIcons, Entypo,AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           <View style={styles.detailContainer}>
                <TouchableOpacity style={styles.content} onPress={()=>navigation.navigate("Follower")}>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <FontAwesome   name="users" size={24} color="#A9AAAC"/>
                        <Text  style={{color:"#A9AAAC"}}> Follower</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content} onPress={()=>navigation.navigate("Money")}>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <FontAwesome5 name="coins" size={24} color="#A9AAAC" />
                        <Text style={{color:"#A9AAAC"}}>Earning</Text>
                    </View>
                </TouchableOpacity>
                
           </View>
           <View style={styles.detailContainer}>
            <TouchableOpacity style={styles.content} onPress={()=>navigation.navigate("AddPayment")}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <MaterialIcons name="payments" size={24} color="#A9AAAC"/>
                    <Text style={{color:"#A9AAAC"}}> Payment</Text>
                </View>
            </TouchableOpacity>
               
                <TouchableOpacity style={styles.content} onPress={()=>navigation.navigate("WithDraw")}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <FontAwesome5 name="donate" size={24} color="#A9AAAC" />
                    <Text style={{color:"#A9AAAC"}}>withdraw</Text>
                </View>
                </TouchableOpacity>
                
           </View>
           <View style={styles.detailContainer}>
           <TouchableOpacity style={styles.content} onPress={()=>navigation.navigate("Setting")}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Feather name="settings" size={24} color="#A9AAAC" />
                    <Text style={{color:"#A9AAAC"}}> Setting</Text>
                </View>
           </TouchableOpacity>
                
                <TouchableOpacity style={styles.content} onPress={()=>navigation.navigate("Faq")}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <MaterialCommunityIcons name="account-question" size={24} color="#A9AAAC"/>
                    <Text style={{color:"#A9AAAC"}}>FQA</Text>
                </View>
                </TouchableOpacity>
           </View>
           <View style={styles.socialMedia}>
               <Text style={{textTransform:"capitalize",color:"#A9AAAC",fontSize:15,marginLeft:5}}>follow on</Text>
                <FontAwesome style={styles.socialMediaIcon} name="youtube-play" size={24} color="red" />
                <FontAwesome style={styles.socialMediaIcon} name="facebook-square" size={24} color="#4267B2" />
                <Entypo style={styles.socialMediaIcon} name="linkedin" size={24} color="#0077b5" />
                <AntDesign style={styles.socialMediaIcon} name="twitter" size={24} color="#1DA1F2" />
           </View>
        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container:{
        width:"91%",
        height:"80%",
        alignItems:"center",
        marginLeft:15,
        marginTop:15,
        marginRight:30,
    },
    detailContainer:{
        width:"90%",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:20,
        
    },
    content:{
        backgroundColor:"#FFFFFF",
        borderWidth:.5,
        borderColor:"#A9AAAC",
        width:"40%",
        height:120,
        borderRadius:10,
        justifyContent:"center",alignItems:"center",
    },
    socialMedia:{
        width:"70%",
        justifyContent:"space-between",
        flexDirection:"row",
        marginTop:115,
        height:50,
        alignItems:"center",
    },
    socialMediaIcon:{
        fontSize:27,
        marginRight:5
       
    }
})
