import React from "react";
import {
	View,
	Image,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MovieGrid = ({ results }) => {
	const navigation = useNavigation();

	return (
		<View>
			<FlatList
				data={results}
				keyExtractor={(result) => result.id.toString()}
				numColumns={3}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Details", { result: item })
							}
						>
							<Image
								style={styles.poster}
								source={
									item
										? {
												uri:
													"https://image.tmdb.org/t/p/original" +
													item.poster_path,
										  }
										: null
								}
							/>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	poster: {
		width: 120,
		height: 180,
		resizeMode: "stretch",
	},
});

export default MovieGrid;
