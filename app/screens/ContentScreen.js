import React from "react"
import { View, StyleSheet } from "react-native"
import FooterContent from "./FooterContent"
import MiddleContent from "./MiddleContent"
import UpperContent from "./UpperContent"

export default function ContentScreen() {
	return (
		<View style={styles.content}>
			<UpperContent />
			<MiddleContent />
			<FooterContent />
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		height: "100%",
		backgroundColor: "#fcba03",
		padding: 8,
	},
})
