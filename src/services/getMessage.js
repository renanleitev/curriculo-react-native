import axios from "axios";

const getMessage = async () => {
    const url = "https://api.chucknorris.io/jokes/random";
    const result = await axios.get(url);
    return result.data;
}

export default getMessage;