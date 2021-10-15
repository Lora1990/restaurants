import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Restaurants from '../screens/Restaurants'
import Favorites from '../screens/Favorites'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Accounts from '../screens/Accounts'

const Tap = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tap.Navigator>
                <Tap.Screen
                    name="RestaurantStack"
                    component={Restaurants}
                    options={{title:"Restaurantes"}}
                >
                </Tap.Screen>
                <Tap.Screen
                    name="favorites"
                    component={Favorites}
                    options={{title:"Favoritos"}}
                >
                </Tap.Screen>
                <Tap.Screen
                    name="top-restaurants"
                    component={TopRestaurants}
                    options={{title:"Top 5"}}
                >
                </Tap.Screen>
                <Tap.Screen
                    name="search"
                    component={Search}
                    options={{title:"Buscar"}}
                >
                </Tap.Screen>
                <Tap.Screen
                    name="accounts"
                    component={Accounts}
                    options={{title:"Cuenta"}}
                >
                </Tap.Screen>

                
            </Tap.Navigator>
        </NavigationContainer>
    )
}
