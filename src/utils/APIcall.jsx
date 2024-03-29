import axios from "axios";
import { GUEST_URL, BASE_URL } from '../Enviornment.jsx'


const config = {
  // headers: {
  //   'Access-Control-Allow-Origin': '*', // This header may not be needed here
  //   // You can add other headers if necessary
  // }
  headers: {
    'Content-Type': 'multipart/form-data',
    // 'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
  },
};



// User Login API Call 
export const UserLoginAPI = async (requestBody) => {

  return await axios.post(`${GUEST_URL}/login`, requestBody);

};

// User Login API Call 
export const UserRegisterAPI = async (requestBody) => {
  console.log("dddddd",requestBody)

const RegisterData = {
  username:"rohith",
  firstname: "madipelly",
  lastname: "goud",
  phone_Number: "9951072005",
  email: "madipellyrohith@gmail.com",
  password: "Rohith@7",
  pagename: "Male Adha",

}

  return await axios.post(`${GUEST_URL}/register`, RegisterData);

};



//Frequently Asked Questions (FAQ)
export const FAQuestionsAPI = async (token) => {

  return await axios.get(`${BASE_URL}/faq`);
};

//ContactUsAPI
export const ContactUsAPI = async () => {

  return await axios.get(`${BASE_URL}/contactus`);
};


//Terms And ConditionsAPI (FAQ)
export const TermsAndConditionsAPI = async () => {

  return await axios.get(`${BASE_URL}/terms`);
};



//AboutusAPI
export const AboutusAPI = async () => {
  return await axios.get(`${BASE_URL}/aboutus`);
};


//TermsandConditionAPI
export const TermsandConditionAPI = async () => {

  return await axios.get(`${BASE_URL}/terms`);
};

// PrivacyPolicyAPI
export const PrivacyPolicyAPI = async () => {

  return await axios.get(`${BASE_URL}/privacypolicy`);
};

// ServicesAPI
export const ServicesAPI = async () => {

  return await axios.get(`${BASE_URL}/settings`);
};



export const SettingsAPI = async () => {

  return await axios.get(`${BASE_URL}/settings`);
};




export const GetPlanInfo = async (token) => {

  return await axios.get(`${BASE_URL}/user/plans`, {
    headers: { Authorization: "Bearer " + token }
  });
};

export const getaddAPI = async () => {
  return await axios.get(`${BASE_URL}/getaddimage`)
}


export const getTemplatesAPI = async (token) => {

  return await axios.get(`${BASE_URL}/user/getimage`, {
    headers: { Authorization: "Bearer " + token }
  }
  );
}