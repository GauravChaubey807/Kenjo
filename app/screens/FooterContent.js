import React from "react"
import { View, StyleSheet } from "react-native"

export default function FooterContent() {
	return (
		<View style={styles.footerContent}>
			<View style={styles.infootercontent}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	footerContent: {
		backgroundColor: "#0388fc",
		width: "100%",
		height: "12%",
		borderRadius: 10,
		marginBottom: 10,
		padding: 10,
	},
	infootercontent: {
		backgroundColor: "#0a45ab",
		flex: 1,
		borderRadius: 10,
	},
})
