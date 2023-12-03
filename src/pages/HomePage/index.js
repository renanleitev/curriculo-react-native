import { useEffect, useState } from "react";
import { View, Button, Linking } from "react-native";
import Photo from "../../components/Photo";
import Description from "../../components/Description";
import Map from "../../components/Map";
import getMessage from "../../services/getMessage";
import styles from "./styles";

const HomePage = ({ navigation }) => {
  const url = "https://github.com/renanleitev";
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const result = await getMessage();
      setMessage(result.value);
    };
    fetchMessage();
  }, []);

  return (
    <View style={styles.container}>
      <Photo />
      <Description message={message} />
      <Map />
      <View style={styles.buttonContainer}>
        <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
        <Button title="Github" onPress={() => Linking.openURL(url)} />
      </View>
    </View>
  );
};

export default HomePage;
