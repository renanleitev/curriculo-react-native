import { View, Button, Linking } from "react-native";
import Photo from "../../components/Photo";
import Description from "../../components/Description";
import styles from "./styles";

const HomePage = ({ navigation }) => {
  const url = "https://github.com/renanleitev";

  return (
    <View style={styles.container}>
      <Photo />
      <Description />
      <View style={styles.buttonContainer}>
        <Button
          title="Sobre"
          onPress={() => navigation.navigate("Sobre")}
        />
        <Button title="Github" onPress={() => Linking.openURL(url)} />
      </View>
    </View>
  );
};

export default HomePage;
