// Import Axios library 
import axios from 'axios';
 
class EasyGPT35 {
    chat = {
        completions: {
            async create(prompt) {
                const postData = {
                    "prompt": prompt,
                    "system": "Always talk in English.",
                    "withoutContext": true,
                    "stream": false,
                };
                const headers = {
                    headers: {
                        "origin": "https://chat.jinshutuan.com",
                        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36",
                    }
                };
                const url = "https://api.binjie.fun/api/generateStream";
                const response = await axios.post(url, postData, headers);
                return response.data;
            },
        },
    };
    constructor() {}
};

export default EasyGPT35;