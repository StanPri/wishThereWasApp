import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/homeScreen';
import SearchListItemScreen from '../components/searchListItemScreen';
import SearchListScreen from '../components/searchListScreen';

const MainNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
                <Stack.Screen name={'home'} component={HomeScreen}/>
                <Stack.Screen name={'searchlist'} component={SearchListScreen}/>
                <Stack.Screen name={'searchlistitem'} component={SearchListItemScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation