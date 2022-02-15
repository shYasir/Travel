import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Liked from './Components/Liked';
import Profile from './Components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createStackNavigator } from "@react-navigation/stack";
import  colors  from './assets/colors/colors'; 
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const create =createNativeStackNavigator();
const Tab =createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator=()=>{
  return(
    <Tab.Navigator     
    //  tabBarOptions={{
    //    style:styles.tabBar,
       
    //    showLabel:false   
    //   }}
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray', 
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false 
      ,tabBarIcon: ({color})=> (<Entypo name="home" size={32} color={color}/> 
      )
    }}  
      />
      <Tab.Screen name="Liked" component={Liked} options={{headerShown:false,
      tabBarIcon: ({color})=> (<Entypo name="heart" size={32} color={color}/> 
      )
    }} 
      />
      <Tab.Screen name="Profile" component={Profile} options={{headerShown:false,
      tabBarIcon: ({color})=> (<MaterialCommunityIcons name="account" size={32} color={color}/> 
      )
    }} 
      />
    </Tab.Navigator>
  );
};

const App=()=>{
  return(
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="TabNavigator" component={TabNavigator}  options={{headerShown:false}}/>
       <Stack.Screen name="Detail" component={Detail}  options={{headerShown:false}}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor:colors.White,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
})

export default App;