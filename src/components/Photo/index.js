import { Image } from "react-native";
import image from "../../assets/profile.jpeg";
import styles from "./styles";

const Photo = () => {
    return (
        <Image source={image} style={styles.photo}/>
    )
}

export default Photo;