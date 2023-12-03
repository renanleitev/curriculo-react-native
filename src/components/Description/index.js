import { View, Text } from "react-native";
import styles from "./styles";

const Description = (props) => {
    const message = props.message || "Carregando API do Chuck Norris...";

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{message}</Text>
        </View>
    )
}

export default Description;