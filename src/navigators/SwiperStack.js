import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwipeScreen from "../screens/SwipeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

const SwiperStack = () => {
	return (
		<Stack.Navigator initialRouteName="Movies">
			<Stack.Screen name="Movies" component={SwipeScreen} />
			<Stack.Screen name="Details" component={DetailScreen} />
		</Stack.Navigator>
	);
};

export default SwiperStack;
