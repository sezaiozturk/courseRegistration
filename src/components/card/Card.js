import { Text, View } from "react-native"
import styles from './Card.style'

export default Card = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}