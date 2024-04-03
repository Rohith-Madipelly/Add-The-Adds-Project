
const token = localStorage.getItem("token");
const userName = localStorage.getItem("userName");
const initialState = {
  token: token || "",
  isLogin: token ? true : false,
  userName:userName ||"",
};

const loginReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "SET_TOKEN":
      {// sessionStorage.setItem("token", action.token);
      localStorage.setItem('token', action.token);
      localStorage.setItem('userName', action.userName);
      }
      return {
        ...state,
        token: action.token,
        isLogin: action.token ? true : false,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default loginReducer;
