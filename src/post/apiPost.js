export const create = (userId, token, post) => {
    // `${process.env.REACT_APP_API_URL}/post/${userId}`
    // http://localhost:8080/post/
    return fetch(`http://localhost:8080/post/new/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: post
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};

export const list = page => {
    return fetch(`${process.env.REACT_APP_API_URL}/posts/?page=${page}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singlePost = postId => {
    return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};