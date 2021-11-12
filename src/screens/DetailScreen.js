import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
	const { result } = route.params;
	console.log(result);

	return (
		<View style={styles.container}>
			<Image
				style={styles.banner}
				source={
					result
						? {
								uri:
									"https://image.tmdb.org/t/p/original" +
									result.backdrop_path,
						  }
						: null
				}
			/>
			<View style={styles.posterShadow}>
				<Image
					style={styles.poster}
					source={
						result
							? {
									uri:
										"https://image.tmdb.org/t/p/original" +
										result.poster_path,
							}
							: null
					}
				/>
			</View>
			<Text style={styles.title}>{result.title}</Text>
			<Text style={styles.overview}>{result.overview}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
	},
	banner: {
		width: '100%',
		height: 250,
		position: "absolute"
	},
	poster: {
		width: 100,
		height: 150,
		resizeMode: "stretch",
	},
	posterShadow: {
		width: 100,
		height: 150,
		marginTop: 100,
		marginLeft: 5, 
	},
	title: {
		fontWeight: "bold",
		marginLeft: 5
	},
	overview: {
		marginLeft: 5,
		marginRight: 5
	}
});

export default DetailScreen;
