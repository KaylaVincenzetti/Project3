import axios from 'axios';

export default {
    addComment: function (data) {
        return axios.post("/api/comment", data)
    }
}