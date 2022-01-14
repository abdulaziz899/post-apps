import React from 'react'
import { StyleSheet,Image,Alert, Text, View,Button } from 'react-native';
import { Entypo,AntDesign,MaterialIcons ,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';

const FollowerDetail = (props) => {
    const {name,img,type}=props.follower;
    console.log(props.follower.img)
    return (
        <View style={styles.container}>
        <View style={styles.profile}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
              <View>
                <Image source={{uri: "https://reactjs.org/logo-og.png"}} style={{width: 50, height: 50,borderRadius: 50,borderWidth: 1,borderColor:'#fff'
                    }} />
    
              </View>
                <View>
                     <Text style={styles.profileText}> {name}</Text>
                </View>
            </View>
            <View>
             <Button
                title={type}
                color="#A9AAAC"
                onPress={() => Alert.alert('done')}
            />
            </View>
        </View>
        
    </View>
    )
}

export default FollowerDetail;

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:80,
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#F0F0F1",
    },
    profile:{
        flexDirection:'row',
        width:"90%",
        height:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        borderColor:"#A9AAAC",
        borderBottomWidth:.25,
        
        
    },
    profileText:{
        marginLeft:12,
        fontWeight:"400",
        fontSize:15,
        marginRight:10,
        color:"black"
    },
})
