import { StyleSheet, Text, View } from "react-native"
import ContentScreen from "./app/screens/ContentScreen"
import Navbar from "./app/screens/Navbar"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen"

export default function App() {
	return (
		<View style={styles.appscreen}>
			<Navbar />
			<ContentScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	appscreen: {
		flex: 1,
	},
})
