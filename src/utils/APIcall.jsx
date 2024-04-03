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


  return await axios.post(`${GUEST_URL}/register`, requestBody);

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
  console.log(token)
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


//profileapi
export const ProfileAPI = async (token) => {
  return await axios.get(`${BASE_URL}/user/profile`, {
    headers: { Authorization: "Bearer " + token }
  });
};

//UserPageAPI
export const UserPageAPI= async (userName) => {

  const reqData={
    userPageName:userName
  }
  return await axios.post(`${BASE_URL}/userpage`,reqData);
};

// DeleteLinkAPI

export const DeleteLinkAPI = async (token, LinkName, LinkURL) => {
  const DeletableLink = {
    [`${LinkName}`]: `${LinkURL}`
  }

  return await axios.post(`${BASE_URL}/user/deletelinks`, DeletableLink, {
    headers: { Authorization: "Bearer " + token }
  });
  // return 0
};


// DeleteLinkAPI

export const AddLinkAPI = async (token, LinkName, LinkURL) => {
  const DeletableLink = {
    [`${LinkName}`]: `${LinkURL}`
  }

  return await axios.post(`${BASE_URL}/user/createpage`, DeletableLink, {
    headers: { Authorization: "Bearer " + token }
  });
  // return 0
};




// Addheaders video Link Api

export const Add_Video_In_HeadersAPI = async (token, YTvideoURL) => {
  const Data = {
    headLink: YTvideoURL
  }

  console.log(token, YTvideoURL)

  return await axios.post(`${BASE_URL}/user/addheaders`, Data, {
    headers: { Authorization: "Bearer " + token }
  });

};




// Addheaders video Link Api

export const Add_Image_In_HeadersAPI = async (token, ImageFile) => {
  const formData = new FormData();
  formData.append("headlinkPic", ImageFile);
  console.log("formDat", formData)


  return await axios.post(`${BASE_URL}/user/addheaders`, formData, {
    headers: { Authorization: "Bearer " + token }
  });

};




// DeleteHeaders 

export const DeleteHeadersAPI = async (token, ID) => {
const reqData={
  headerId:ID
}


  return await axios.post(`${BASE_URL}/user/deleteheaders`, reqData, {
    headers: { Authorization: "Bearer " + token }
  });

};







// AdduserspageAPI 

export const AdduserspageAPI = async (token, UserName) => {
  const reqData={
    userPage:UserName
  }
  console.log(UserName,token)
 
    return await axios.post(`${BASE_URL}/user/adduserspage`, reqData, {
      headers: { Authorization: "Bearer " + token }
    });
  
  };