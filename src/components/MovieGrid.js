import React from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MovieGrid = ({ results, openDetail }) => {
	const navigation = useNavigation();

	return (
		<View>
			<FlatList
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								//navigation.navigate("Details", { result })
								console.log(item)
							}
						>
							<Text>{console.log(item)}Output</Text>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default MovieGrid;
