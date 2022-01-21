import React from "react"
import { View, StyleSheet, Text } from "react-native"

import colors from "../config/colors"

function pressHandler() {
	console.log("Button Pressed Succesfully")
}

let navtext = "Products"

export default function Navbar(props) {
	return (
		<View style={styles.navbar}>
			<View style={styles.navbarLeft}>
				<Text style={styles.navText}>{navtext}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: colors.primary,
		justifyContent: "flex-end",
		width: "100%",
		height: "10%",
	},
	menu: {
		left: 15,
		bottom: 10,
	},
	pressarea: {
		backgroundColor: colors.white,
		width: 50,
		height: 50,
	},
	navText: {
		fontSize: 24,
		bottom: 10,
		left: 15,
	},
})
