
import AsyncStorage from '@react-native-community/async-storage';


const getData = async (KEYValue) => {
  try {
    let value = await AsyncStorage.getItem(KEYValue);
    if (value !== null) {
      return Promise.resolve(value)
    }
    return null;
  }
  catch (error) {
    return Promise.reject(error);
  }
}


const storeData = async (KEYValue, value) => {
  if ( KEYValue === null) return false;

  try {
    await removeData(KEYValue);

    await AsyncStorage.setItem(KEYValue , (value).toString());
  } catch (e) {

  }
  return true;
}

const removeData = async ( KEYValue ) => {
  try {
    await AsyncStorage.removeItem(KEYValue)
  } catch(e) {
    // remove error
  }
  return true;
}


const API_CONTS = {
  LOGIN: 'login',
  LOGINVALID: "loginvalid",
  SIGNUP : "signup",
  GETCITY : "getcity",
  EMAILCHECK : "emailcheck",
  ADDPASSENGER : "passenger/add",
  GETBOOKIG   : "booking",
  GETPAYMENT : "payment",
  ADDBOOKING  : "addbooking",
  GETPASSENGER : "passenger",
  GETDOCTOR   : "doctor",
  ADDDOCTOR    : "adddoctor",
  ADDCARDDETAIL : "addpayment/add"
}

// Auth
const AUTH = {
  SET_STATUS: 'SET_AUTH_STATUS',
  REGISTER_USER: 'AUTH_REGISTER_USER',
  LOGIN_VALID: "SET_VALIDATELOGIN",
  LOGIN_USER: 'AUTH_LOGIN_USER',
  LOGOUT_USER: 'AUTH_LOGOUT_USER',
  USER: 'AUTH_USER_AUTH',
  USER_DATA: 'AUTH_USER_DATA',
  UPDATE_USER: "AUTH_USER_UPDATE",
  NAME:"AUTH_NAME",
  NUMBER:"AUTH_NUMBER",
  EMERGENCYMESSAGE:'AUTH_EMERGENCYMESSAGE',
  FULLNAME:"AUTH_FULLNAME",
  EMAIL:"AUTH_EMAIL",
  FEEDBACK:'AUTH_FEEDBACK'
};

const GOOGLE = {
KEY : "AIzaSyDB1ujwvkFEo87xhHyHhHP52iJ6zMlbB_w"
}

const COUNTRYCITY = {
 CITY: 'SET_CITY',
 CITY_VALUE: 'SET_CITYVALUE',
}

const BOOKING = {
  GETBOOKING: 'SET_GETBOOKING',
  GETBOOKING_VALUE: 'SET_GETBOOKINGVALUE',
 }

 const EMERGENCYCONTACT = {
  GETNAME: 'SET_GETNAME',
  GETNUMBER: 'SET_GETNUMBER',
  GETNAME_VALUE: 'SET_GETNAMEVALUE',
  GETNUMBER_VALUE: 'SET_GETNUMBERVALUE',
 }

 const EMERGENCYMESSAGE = {
  GETFULLNAME:"SET_FULLNAME",
  GETEMAIL:"SET_EMAIL",
  GETFEEDBACK:"SET_FEEDBACK",
 }
 

 const USERS = {
   GETPASSENGER : "SET_GETPASSENGER",
   GETDOCTOR : "SET_GETDOCTOR",
   GETPAYMENT : "SET_GETPAYMENT",
   SETUSERS_VALUE : "SET_SETUSERS_VALUE"

 }

const RESTHELPER = "RESTHELPER";
const RESTHELPER_VALUE = "SET_RESTHELPERVALUE";
const RESTHELPER_RESET = "RESTHELPER_RESET";

export {
  API_CONTS, RESTHELPER_VALUE, RESTHELPER, RESTHELPER_RESET,
  AUTH, COUNTRYCITY, BOOKING, USERS, GOOGLE , getData, storeData , removeData 
};

export const restAction = payload => ({
  type: RESTHELPER,
  payload
});

export const restActionValue = payload => ({
  type: RESTHELPER_VALUE,
  payload
});

export const RESTHELPERRESET = () => ({
  type: RESTHELPER_RESET
});




