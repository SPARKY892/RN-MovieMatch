import React, { useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import useResults from "../hooks/useResults";
import Swiper from "react-native-deck-swiper";
import Card from "../components/Card";
import OverlayLabel from "../components/OverlayLabel";

const SwipeScreen = ({ navigation }) => {
	const useSwiper = useRef(null).current;
	const [searchApi, results, errorMessage] = useResults();

	// if (results) {
	// 	console.log(results);
	// }

	const openDetail = (index) => {
		const result = results[index];
		console.log(result + "This is the result");
		console.log(result.title);
		navigation.navigate("Settings", { result });
	};

	return (
		<>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<View style={styles.container}>
				<View style={styles.swiperContainer}>
					<Swiper
						ref={useSwiper}
						animateCardOpacity
						containerStyle={styles.container}
						cards={results ? results : []}
						renderCard={(card) => <Card card={card} />}
						cardIndex={0}
						backgroundColor="white"
						stackSize={2}
						infinite
						showSecondCard
						animateOverlayLabelsOpacity
						disableBottomSwipe={true}
						disableTopSwipe={true}
						onSwipedLeft={(index) =>
							console.log("swiped left on:" + index)
						}
						onSwipedRight={(index) =>
							console.log("swiped right on:" + index)
						}
						onTapCard={(index) => openDetail(index)}
						overlayLabels={{
							left: {
								title: "NOPE",
								element: (
									<OverlayLabel
										label="NOPE"
										color="#E5566D"
									/>
								),
								style: {
									wrapper: styles.overlayWrapper,
								},
							},
							right: {
								title: "LIKE",
								element: (
									<OverlayLabel
										label="LIKE"
										color="#4CCC93"
									/>
								),
								style: {
									wrapper: {
										...styles.overlayWrapper,
										alignItems: "flex-start",
										marginLeft: 30,
									},
								},
							},
						}}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	swiperContainer: {
		height: "85%",
	},
	overlayWrapper: {
		flexDirection: "column",
		alignItems: "flex-end",
		justifyContent: "flex-start",
	},
});

export default SwipeScreen;