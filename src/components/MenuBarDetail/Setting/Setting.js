import React from 'react'
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { Ionicons,FontAwesome,EvilIcons,MaterialIcons,AntDesign,Entypo  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constant from "expo-constants";

const Setting = () => {
    const navigation=useNavigation(); 
    return (
        <>
           <View style={{flexDirection:"row",elevation:4,alignItems:"center",borderBottomLeftRadius:1,borderBottomRightRadius:1, borderColor:"#A9AAAC", height:60,marginTop:Constant.statusBarHeight,backgroundColor:"#FFFFFF",}}>
                <Ionicons onPress={()=>navigation.goBack()} style={{width:"15%",height:40,marginLeft:5,paddingLeft:10,paddingTop:5,}} name="arrow-back-outline" size={28} color="#A9AAAC" />
                <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                    <Text style={{fontSize:17,color:"#A9AAAC",fontWeight:"400"}}>Setting</Text>
                </View>
            </View>
            <View style={{width:"100%",marginTop:10}}>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>
                        <EvilIcons name="user" size={30} color="#A9AAAC" />
                        <Text style={styles.settingText}>personal account information</Text>
                    </View>
                </View>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>
                        <MaterialIcons name="privacy-tip" style={styles.iconStyle} size={30} color="#A9AAAC" />
                        <Text style={styles.settingText}>account privacy information</Text>
                    </View>
                </View>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>
                       <AntDesign name="lock" style={styles.iconStyle} size={30} color="#A9AAAC" />
                        <Text style={styles.settingText}>Change password</Text>
                    </View>
                </View>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>  
                        <Ionicons name="notifications" style={styles.iconStyle} size={30} color="#A9AAAC" />
                        <Text style={styles.settingText}>Notification</Text>
                    </View>
                </View>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>
                        <EvilIcons name="location" style={styles.iconStyle} size={30} color="#A9AAAC" />
                        <Text style={styles.settingText}>your location</Text>
                    </View>
                </View>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>
                        <FontAwesome name="language" style={styles.iconStyle} size={30} color="#A9AAAC"  />
                        <Text style={styles.settingText}> language</Text>
                    </View>
                </View>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>
                        <FontAwesome name="history" style={styles.iconStyle} size={30} color="#A9AAAC"  />
                        <Text style={styles.settingText}> check your history </Text>
                    </View>
                </View>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>
                        <Entypo  name="block" style={styles.iconStyle} size={30} color="#A9AAAC"  />
                        <Text style={styles.settingText}> block setting </Text>
                    </View>
                </View>
                <View style={styles.settingDetails}>
                    <View style={styles.settingDetailsText}>
                        <AntDesign  some name="question" style={styles.iconStyle} size={30} color="#A9AAAC"  />
                        <Text style={styles.settingText}> About</Text>
                    </View>
                </View>
                
            </View>
        </>
    )
}

export default Setting;

const styles = StyleSheet.create({
    settingDetails:{
        width:"100%",
        height:58,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:.5, 
        borderColor:"#A9AAAC"
    },
    settingDetailsText:{
        width:"90%",
        height:"60%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    settingText:{
        fontSize:18,
        color:"#A9AAAC",
        textTransform:"capitalize",
        justifyContent:"flex-start", 
        flexDirection:"row",
        width:"95%",
        marginLeft:1
    },
    iconStyle:{
        width:"10%",
        height:"100%",
    }
})
