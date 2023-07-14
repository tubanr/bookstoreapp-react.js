
//Function to handle user login
export const login = (access_token, user_id, username) => {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("user_id", user_id);
    localStorage.setItem("username", username);
};

//Function to handle user logout
export const logout =( )=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
}

//Function to check if the user logged in
export const isLoggedIn = ()=>{
    return localStorage.getItem("access_token") !== null;
    
};


//Function to get user info
export const getUserInfo = () => {
    return {
       access_token: localStorage.getItem("access_token"),
       user_id: localStorage.getItem("user_id"),
       username: localStorage.getItem("username"),

    };

};




























