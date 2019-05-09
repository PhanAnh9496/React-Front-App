export const read = (userId, token) => {
    // `${process.env.REACT_APP_API_URL}/user/${userId}`
    // http://localhost:8080/user/
    return fetch(`http://localhost:8080/user/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const update = (userId, token, user) => {
    // `${process.env.REACT_APP_API_URL}/user/${userId}`
    // http://localhost:8080/user/
    return fetch(`http://localhost:8080/user/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: user
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const remove = (userId, token) => {
    // `${process.env.REACT_APP_API_URL}/user/${userId}`
    // http://localhost:8080/user/
    return fetch(`http://localhost:8080/user/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const list = () => {
    return fetch(`http://localhost:8080/users`, {
            method: "GET"
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};