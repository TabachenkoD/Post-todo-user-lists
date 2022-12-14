import axios from "axios";

const fetchUrl = async (param) => {
    const apiUrl = `https://jsonplaceholder.typicode.com/${param}`;
    
    try{
        const response = await axios.get(apiUrl);

        if (response.statusText !== "OK" && response.status !== 200){
            throw new Error("Server error!");
        }
       return response.data 
    } catch (error) {
        return error.message;
    }
}

export default fetchUrl;
