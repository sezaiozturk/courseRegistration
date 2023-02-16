import { Text, TextInput, View } from "react-native"
import styles from './InputCard.style'

export default ({ title, placeholder, onChangeText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.infoContainer}>
                <TextInput style={styles.info} placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
    )
}