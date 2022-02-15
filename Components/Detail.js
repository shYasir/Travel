import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont(); 
 
const height = Dimensions.get('window').height;
const Detail=({route,navigation})=>{
  const {item}=route.params;
  return(
    <View style={styles.container}>
     <ImageBackground source={item.imageBig} style={styles.BackgroundImage}>
       <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
         <Entypo name="chevron-left" size={32} color={colors.White}/>
       </TouchableOpacity>
       <View style={styles.titleWrapper}>
        <Text style={styles.itemTitle}>{item.title}</Text>
         <View style={styles.locationWrapper}>
          <Entypo name='location-pin' size={24} color={colors.White}/>
          <Text style={styles.locationText}>{item.location}</Text>
         </View>
       </View>
     </ImageBackground>
     <View style={styles.DescriptionWrapper}>
       <View style={styles.HeartWrapper}>
         <Entypo name='heart' size={32} color={colors.orange}/>
       </View>
        <View style={styles.DescriptionTextWrapper}>
          <Text style={styles.DescriptionTitle}>Description</Text>
          <Text style={styles.DescriptionText}>{item.description}</Text>
        </View>

        <View style={styles.InfoWrapper}>
         <View style={styles.Infoitem}>
          <Text style={styles.InfoTitle}>Price</Text>
           <View style={styles.infoTextWrapper}>
            <Text style={styles.infoText}>{item.price}</Text>
            <Text  style={styles.infoSubText}>/person</Text>            
            </View>
         </View>
         <View style={styles.Infoitem}>
          <Text style={styles.InfoTitle}>Rating</Text>
           <View style={styles.infoTextWrapper}>
            <Text style={styles.infoText}>{item.rating}</Text>
            <Text  style={styles.infoSubText}>/5</Text>            
            </View>
         </View>
         <View style={styles.Infoitem}>
          <Text style={styles.InfoTitle}>Duration</Text>
           <View style={styles.infoTextWrapper}>
            <Text style={styles.infoText}>{item.duration}</Text>
            <Text  style={styles.infoSubText}> hour</Text>            
            </View>
         </View>
        </View>

        <TouchableOpacity style={styles.ButtonWrapper} onPress={()=> alert("You Book a Trip")}>
          <Text style={styles.ButtonText}>Order Now</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:colors.White
},
BackgroundImage:{
  height:height*0.6,
  justifyContent:'space-between'
  
},
DescriptionWrapper:{
  flex:1,
  backgroundColor:colors.White,
  marginTop:-25,
  // borderTopLeftRadius:40,
  // borderTopRightRadius:40
  borderRadius:25
},
backIcon:{
  marginTop:40,
  marginLeft:20
},
titleWrapper:{
  marginHorizontal:20,
  marginBottom:40,
},
itemTitle:{
color:colors.White,
fontSize:32,
fontFamily:"Lato-Bold"
},
locationWrapper:{
flexDirection:'row',
alignItems:'center',
marginTop:5
},
locationText:{
  color:colors.White,
  fontSize:16,
  fontFamily:"Lato-Bold"
},
HeartWrapper:{
  position:"absolute",
  right:40,
  top:-30,
  width:64,
  height:64,
  backgroundColor:colors.White,
  borderRadius:64,
  justifyContent:"center",
  alignItems:"center",
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
},
DescriptionTextWrapper:{
marginTop:20,
marginHorizontal:20
},
DescriptionTitle:{
fontFamily:"lato-Bold",
fontSize:24
},
DescriptionText:{
marginTop:20,
fontFamily:"lato-Regular",
fontSize:16,
color:colors.gray,
height:85
},
InfoWrapper:{
 flexDirection:"row",
 justifyContent:"space-between",
 marginHorizontal:20,
 marginTop:20
},
Infoitem:{

},
InfoTitle:{
  fontFamily:"lato-Bold",
  fontSize:12,
  color:colors.gray,
},
infoTextWrapper:{
  flexDirection:"row",
  marginTop:5,
  alignItems:"flex-end"
  
},
infoText:{
  fontFamily:"lato-Bold",
  fontSize:24,
  color:colors.orange,
},
infoSubText:{
  fontFamily:"lato-Bold",
  fontSize:16,
  color:colors.gray,
},
ButtonWrapper:{
   marginTop:30,
   marginHorizontal:20,
   backgroundColor:colors.orange,
   alignItems:"center",
   paddingVertical:15,
   borderRadius:10
},
ButtonText:{
  fontFamily:"lato-Bold",
  fontSize:18,
  color:colors.White,
}
})
export default Detail; 