import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
	const { result } = route.params;
	console.log(result);

	return (
		<View style={styles.container}>
			<Text>Movie Details for: {result.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},
	image: {
		width: 250,
		height: 120,
		borderRadius: 4,
		marginBottom: 5,
	},
	name: {
		fontWeight: "bold",
	},
});

export default DetailScreen;
