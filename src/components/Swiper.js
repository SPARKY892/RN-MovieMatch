import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import { photoCards } from "../../assets/data.js";
import Card from "./Card";
import OverlayLabel from "./OverlayLabel";

const CustomSwiper = () => {
	const useSwiper = useRef(null).current;
	const handleOnSwipedLeft = () => useSwiper.swipeLeft();
	const handleOnSwipedTop = () => useSwiper.swipeTop();
	const handleOnSwipedRight = () => useSwiper.swipeRight();

	return (
		<View style={styles.container}>
			<View style={styles.swiperContainer}>
				<Swiper
					ref={useSwiper}
					animateCardOpacity
					containerStyle={styles.container}
					cards={photoCards}
					renderCard={(card) => <Card card={card} />}
					cardIndex={0}
					backgroundColor="white"
					stackSize={2}
					infinite
					showSecondCard
					animateOverlayLabelsOpacity
					overlayLabels={{
						left: {
							title: "NOPE",
							element: (
								<OverlayLabel label="NOPE" color="#E5566D" />
							),
							style: {
								wrapper: styles.overlayWrapper,
							},
						},
						right: {
							title: "LIKE",
							element: (
								<OverlayLabel label="LIKE" color="#4CCC93" />
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
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	swiperContainer: {
		height: "80%",
	},
	overlayWrapper: {
		flexDirection: "column",
		alignItems: "flex-end",
		justifyContent: "flex-start",
	},
});

export default CustomSwiper;
