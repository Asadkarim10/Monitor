
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
  EMAILCHECK : "emailcheck",
  UPDATEUSER : "updateprofile",
  GETNOTIFICATION : "notifications",
  CHANGEPASSWORD : "changepassword",
  FORGOTEMAIL : "forgotemail",
  RESETPASSWORD : "resetpassword",
  PROPERTIES : "properties",
  PROPERTY : "property",
  ISSUES   : "issue",
  RENTPAYMENTS : "rentpayments",
//Lxry
  VEHICLES : "vehicles",
  VEHICLE  : "vehicle",
  BOOKINGS : "bookings",
  CONFIRMBOOKING : "booking/add"
}

// const API_CONTS = {
//   LOGIN: 'login',
//   LOGINVALID: "loginvalid",
//   SIGNUP : "signup",
//   GETCITY : "getcity",
//   EMAILCHECK : "emailcheck",
//   ADDPASSENGER : "passenger/add",
//   GETBOOKIG   : "booking",
//   GETPAYMENT : "payment",
//   ADDBOOKING  : "addbooking",
//   GETPASSENGER : "passenger",
//   GETDOCTOR   : "doctor",
//   ADDDOCTOR    : "adddoctor",
//   ADDCARDDETAIL : "addpayment/add",
//   GETEARNING : "booking/earning",
//   BOOKINGSTAR : "booking/start",
//   BOOKINGPICKEDUP : "booking/pickedup",
//   BOOKINGDROPOF : "booking/dropof",
//   BOOKINGEND : "booking/end",
//   UPDATEUSER : "updateprofile",
//   GETNOTIFICATION : "notifications",
//   DISMISSNOTI : "notification/delete",
//   ACCEPTETRIP : "booking/accepted",
//   BOOKINGCANCEL : "booking/canceled",
//   BOOKINGCONFIRMED : "booking/confirmed",
//   STRIPEPAYMENT : "stripepayment",
//   CHANGEPASSWORD : "changepassword",
//   FORGOTEMAIL : "forgotemail",
//   RESETPASSWORD : "resetpassword"
// }

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
};

//CarRent
const CAR_RENT = {
  GETVEHICLES:  'SET_GETVEHICLES',
  GETSINGLEVEHICLE : 'SET_GETSINGLEVEHICLE',
  GETBOOKING : 'SET_GETBOOKING',
  SETCARRENT_VALUE : 'SET_SETCARRENTVALUE',
}

const GOOGLE = {
KEY : "AIzaSyDB1ujwvkFEo87xhHyHhHP52iJ6zMlbB_w"
}
const PAYPALKEY = {
  KEY : "ASH4_d9uyvs0Dru1RJRTnTS88MtPSwD5CN7zXuT5WiCDTri4Uo6ldBJR4HstYPwLjnCbGf08rLDJd5s3"
  }
const STRIPEKEY = {
    KEY : "pk_test_51HdGqCC3I3RYGPeg0fu2V4QzsZgfc2wYOuhMPoY9BhwnJ0OKNSx7Dxgh0I80TJBU3KE8rUWSSIjmUg2ZKG6gvp2T00OvAAe4z6"
    }

const COUNTRYCITY = {
 CITY: 'SET_CITY',
 CITY_VALUE: 'SET_CITYVALUE',
}

const BOOKING = {
  GETBOOKING: 'SET_GETBOOKING',
  GETEARNING: 'SET_GETEARNING',
  GETBOOKING_VALUE: 'SET_GETBOOKINGVALUE',
 }

 const USERS = {
   GETPASSENGER : "SET_GETPASSENGER",
   GETDOCTOR : "SET_GETDOCTOR",
   GETPAYMENT : "SET_GETPAYMENT",
   SETUSERS_VALUE : "SET_SETUSERS_VALUE",
   GETNOTIFICATION : "SET_GETNOTIFICATION"

 }

const RESTHELPER = "RESTHELPER";
const RESTHELPER_VALUE = "SET_RESTHELPERVALUE";
const RESTHELPER_RESET = "RESTHELPER_RESET";

export {
  API_CONTS, RESTHELPER_VALUE, RESTHELPER, RESTHELPER_RESET,
  AUTH, COUNTRYCITY, BOOKING, USERS, GOOGLE , PAYPALKEY , STRIPEKEY ,CAR_RENT, getData, storeData , removeData 
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




