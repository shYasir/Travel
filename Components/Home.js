import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/colors';
import activitiesData from '../assets/Data/activitiesData';
import discoverCategoriesData from '../assets/Data/discoverCategoriesData';
import discoverData from '../assets/Data/discoverData';
import learnMoreData from '../assets/Data/learnMoreData';
import profile from '../assets/image/person.jpeg'

Feather.loadFont();
Entypo.loadFont(); 

const Home=({navigation})=>{

  const renderDiscoverItem=({item})=>{
    return(
    <TouchableOpacity
      onPress={()=>navigation.navigate('Detail',{
        item:item
      })}    
    >
       <ImageBackground
          source={item.image}
          style={styles.discoverItem}
          imageStyle={styles.discoverItemImage}
>
            <Text style={styles.discoverItemTitle}>{item.title}</Text>  
            <View  style={styles.discoverItemlocationWrapper}>
              <Entypo name="location-pin" size={18} color={colors.White} style={styles.discoverlocationPin}/>
              <Text style={styles.discoverItemlocationText}>{item.location}</Text>
            </View>

         </ImageBackground>
    </TouchableOpacity>
    );
  };
    
  const renderActivityItem =({item})=>{
    return(
<View style={[styles.activityItemWrapper,{
  marginLeft: item.id ==='activities-1'? 20:0
}]}>
      <Image source={item.image} style={styles.activityItemImage}/>
      <Text style={styles.activityItemText}>{item.title}</Text>
    </View>
    );
  };
const renderlearnMoreItem=({item})=>{
  return(
    <ImageBackground
    source={item.image}
    style={styles.learnMoreitem}
    imageStyle={styles.learnMoreitemImage}
    >
      <Text style={styles.learnMoreitemText}
>{item.title}</Text>
    </ImageBackground>
  );
};
  return(
    <View style={styles.container}>
    <ScrollView> 
                                                    {/* header */}
       <SafeAreaView>
        <View style={styles.menuWrapper}>
           <Feather name="menu" size={32} color={Colors.Black} style={styles.menuIcon}/>
           <Image source={profile} style={styles.profile} />
        </View>
       </SafeAreaView>
                        {/* Discover */}
          <View style={styles.discoverWrapper}>
            <Text style={styles.discoverTitle}>Discover</Text>
             <View style={styles.discoverWrapperCategories}>
                <Text style={[styles.discovercaategoriesText,{color:colors.orange}]}>All</Text>
                <Text style={styles.discovercaategoriesText}>Destination</Text>
                <Text style={styles.discovercaategoriesText}>Cities</Text>
                <Text style={styles.discovercaategoriesText}>Experiences</Text>
             </View>
                  <View style={styles.discoverItemWrapper}> 
                     <FlatList 
                       data={discoverData}
                       renderItem={renderDiscoverItem}
                       keyExtractor={(item)=>item.id}
                       horizontal
                       showsHorizontalScrollIndicator={false}
                     />
                  </View>
            </View>     
                     {/* Activities */}
                     <View style={styles.activitiesWrapper} >
                       <Text style={styles.activitiestitle}>Activities</Text>
                       <View style={styles.activitiesitemWrapper}>
                         <FlatList
                         data={activitiesData}
                         renderItem={renderActivityItem}
                         keyExtractor={(item) =>item.id}
                              horizontal
                              showsHorizontalScrollIndicator={false}/>
                       </View>
                     </View>
                      {/* Learn more */}
                      <View style={styles.learnMoreWrapper}>
                        <Text style={styles.learnMoreTitle}>Learn More</Text>
                        <View style={styles.learnMoreitemWrapper}>
                         <FlatList
                         data={learnMoreData}
                         renderItem={renderlearnMoreItem}
                         keyExtractor={(item) =>item.id}
                              horizontal
                              showsHorizontalScrollIndicator={false}/>
                       </View>
                      </View>
    </ScrollView>
    </View>
  );
};
const styles =StyleSheet.create({
  container:{
    flex:1,
    color:colors.White
  },
  menuWrapper:{
    marginHorizontal:20,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  profile:{
  width:50,
  height:50,
  borderRadius:5
  },
  discoverWrapper:{
    marginHorizontal:20,
    marginTop:20,
  },
  discoverTitle:{
     fontSize:32,
     fontFamily:'Lato-Bold'
  },
  discoverWrapperCategories:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:"space-around"
  },
  discovercaategoriesText:{
    marginRight:20,
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:colors.gray
  },
  discoverItem:{
    width:170,
    height:250,
    justifyContent:'flex-end',
    paaddingHorizontal:10,
    paddingVertical:15,
    marginRight:20
  },
  discoverItemImage:{
    borderRadius:20
  },
  discoverItemTitle:{
    fontFamily:'Lato-Bold',
    fontSize:18,
    color:colors.White,
    marginLeft:10
  },
  discoverItemlocationText:{
    color:colors.White,
    marginLeft:10
  },
  discoverItemlocationWrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginLeft:10
  },
  discoverItemWrapper:{
    paddingVertical:20,
  },
  activitiesWrapper:{
    marginTop:10
  },
  activitiestitle:{
    marginHorizontal:20,
    fontFamily:"lato-Bold",
    fontSize:24,
    color:colors.Black
  },
  activitiesitemWrapper:{
  paddingVertical:20,
  },
  activityItemWrapper:{
   justifyContent:'flex-end',
   alignItems:'center',
   marginRight:20,
  },
  activityItemImage:{
  width:36,  
  },
  activityItemText:{
   marginTop:5,
   fontFamily:"lato-Bold",
   fontSize:14,
   color:colors.gray
  },
  learnMoreWrapper:{
  marginTop:10,
  },
  learnMoreTitle:{
   marginHorizontal:20,
   fontFamily:"lato-Bold",
   fontSize:24,
   color:colors.Black
  },
  learnMoreitemWrapper:{

  },
  learnMoreitem:{
  width:170,
  height:180,
  justifyContent:'flex-end',
  marginRight:20
  },
  learnMoreitemImage:{
   borderRadius:20,
  //  justifyContent:'space-around'
  },
  learnMoreitemText:{
    fontFamily:"lato-Bold",
    fontSize:18,
    color:colors.White,
    marginHorizontal:10,
    marginVertical:20
  }
}) 
export default Home;