import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SwipeScreen from "./src/screens/SwipeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Swipe" component={SwipeScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;
