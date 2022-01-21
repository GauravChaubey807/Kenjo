import React from "react"
import { View, StyleSheet } from "react-native"

export default function MiddleContent() {
	return (
		<View style={styles.middleContent}>
			<View style={styles.innerContentLeft}></View>
			<View style={styles.innerContentRight}>
				<View style={styles.innerUpperContent} />
				<View style={styles.innerLowerContent} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	middleContent: {
		backgroundColor: "#0388fc",
		width: "100%",
		height: "50%",
		borderRadius: 10,
		marginBottom: 10,
		padding: 10,
		flexDirection: "row",
	},
	innerContentLeft: {
		backgroundColor: "#a103fc",
		width: "25%",
		borderRadius: 10,
		marginEnd: 15,
	},
	innerContentRight: {
		width: "70%",
		borderRadius: 10,
		flexDirection: "column",
	},
	innerUpperContent: {
		backgroundColor: "#4efc03",
		width: "100%",
		height: "70%",
		borderRadius: 10,
		marginBottom: 10,
	},
	innerLowerContent: {
		backgroundColor: "#f76d02",
		width: "100%",
		height: "25%",
		borderRadius: 10,
		marginBottom: 10,
	},
})
