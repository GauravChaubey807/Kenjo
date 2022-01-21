import React from "react"
import { View, StyleSheet } from "react-native"

export default function UpperContent() {
	return (
		<View style={styles.upperContent}>
			<View style={styles.innerContentLeft}></View>
			<View style={styles.innerContentRight}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	upperContent: {
		backgroundColor: "#0388fc",
		width: "100%",
		height: "25%",
		borderRadius: 10,
		marginBottom: 10,
		padding: 10,
		flexDirection: "row",
	},
	innerContentLeft: {
		backgroundColor: "#a103fc",
		width: "70%",
		borderRadius: 10,
		marginEnd: 15,
	},
	innerContentRight: {
		backgroundColor: "#fc03e3",
		width: "25%",
		borderRadius: 10,
	},
})
