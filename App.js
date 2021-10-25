import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomSwiper from "./src/components/Swiper";

function HomeScreen() {
	return <CustomSwiper />;
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: "Home" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
