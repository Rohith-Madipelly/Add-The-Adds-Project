
const token = localStorage.getItem("token");
const initialState = {
  token: token || "",
  isLogin: token ? true : false,
};

const loginReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "SET_TOKEN":
      // sessionStorage.setItem("token", action.token);
      localStorage.setItem('token', action.token);

      return {
        ...state,
        token: action.token,
        isLogin: action.token ? true : false,
      };
    default:
      return state;
  }
};

export default loginReducer;
