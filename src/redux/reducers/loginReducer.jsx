
const token = localStorage.getItem("token");
const userName = localStorage.getItem("userName");
const isAdmin = localStorage.getItem("isAdmin");
console.log("check in reducer",isAdmin)

const initialState = {
  token: token || "",
  isLogin: token ? true : false,
  userName:userName ||"",
  isAdmin:isAdmin?isAdmin : false,
};

const loginReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "SET_TOKEN":
      {// sessionStorage.setItem("token", action.token);
      localStorage.setItem('token', action.token);
      localStorage.setItem('userName', action.userName);
      localStorage.setItem('isAdmin', action.isAdmin);
      }
      return {
        ...state,
        token: action.token,
        isLogin: action.token ? true : false,
        userName: action.userName,
        isAdmin: action.isAdmin ? action.isAdmin : false,
      };
    default:
      return state;
  }
};

export default loginReducer;
