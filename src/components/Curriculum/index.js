import { ScrollView, Text, Button, Linking } from "react-native";
import styles from "./styles";

const Curriculum = () => {
  const url = "https://www.linkedin.com/in/renan-leite-vieira-b81a85247/";

  return (
    <ScrollView>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
        Atualmente trabalha como Desenvolvedor Web, com foco em React
        (Javascript/Typescript). Possui conhecimento em testes (Jest) e deploy
        de aplicações em nuvem (Docker). Além disso, possui experiência com
        sistemas Linux (Ubuntu) e Bash Script. Possui uma sólida base em
        gerenciamento de projetos (Scrum).
      </Text>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text style={styles.text}>Estagiário – Encora</Text>
      <Text style={styles.text}>23/01/2022 – Atualmente</Text>
      <Text style={styles.text}>Linguagens: Javascript/Typescript</Text>
      <Text style={styles.text}>Framework: React</Text>
      <Text style={styles.text}>Ferramenta de Testes: Jest</Text>
      <Text style={styles.text}>
        Outras tecnologias: Docker, Git, Bash Script
      </Text>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.text}>Email: renanleitev@gmail.com</Text>
      <Text style={styles.text}>
      <Button title="LinkedIn" onPress={() => Linking.openURL(url)} />
      </Text>
    </ScrollView>
  );
};

export default Curriculum;
