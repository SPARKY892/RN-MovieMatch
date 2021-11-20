import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MovieScreen = ({ route }) => {
	const { result } = route.params;
	console.log(result);

	return (
		<View style={styles.container}>
			<Text>Movie Details for: {result.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default MovieScreen;
