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

export const list = () => {
    return fetch(`http://localhost:8080/users`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};