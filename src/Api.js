const responseHandler = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    getPostsList() {
        return fetch(`${this.path}/posts`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSinglePosts(id) {
        return fetch(`${this.path}/posts/${id}`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getPosts() {
        return fetch(`${this.path}/posts/`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    signup(body) {
        return fetch(`${this.path}/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }),then(responseHandler);
    }
    login(body) {
        return fetch(`${this.path}/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }),then(responseHandler);
    }
}

const config = {
    path: "https://api.react-learning.ru",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac"
}

const api = new Api(config);

export default api;