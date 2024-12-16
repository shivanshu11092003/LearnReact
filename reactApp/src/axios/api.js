import axios from "axios";

const Axios = async () =>{

    const response = await axios.get("https://dummyjson.com/products")
    return response
}

export default Axios