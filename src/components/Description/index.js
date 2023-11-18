import { View, Text } from "react-native";
import styles from "./styles";

const Description = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Renan Leite Vieira</Text>
            <Text style={styles.subtitle}>Desenvolvedor Front-end</Text>
        </View>
    )
}

export default Description;