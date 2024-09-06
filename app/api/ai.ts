import axios from 'axios';

export async function getReply(content: string) {
    return await axios.post("http://localhost:8000/ai_response", {
        content
    })
}