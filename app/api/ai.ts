import axios from 'axios';

export async function getReply(content: string) {
    return await axios.post("https://ai-api.fracher21.top/ai_response", {
        content
    })
}