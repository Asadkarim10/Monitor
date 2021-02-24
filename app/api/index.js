export const BASE_URL = 'https://luxrymobility.irdemo.xyz/api/';


let config = {
   access_token            : null,
};

export const getAPIConfig = () => ({ ...config });

export const updateAPIConfig = access_token => {
   config = {
      ...config,
      access_token : "Bearer " + access_token
   };
};


export const callAPI = (endpoint, method = 'get', data, header = { Accept : "application/json" } ) => {
   const headerOptions = {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : getAPIConfig().access_token,
        ...header
      }
   }
   if ( data !== null ){
      headerOptions.body = JSON.stringify(data)
   }
   return fetch( `${BASE_URL}${endpoint}` , headerOptions )
   .then((response) => response.json())
   .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};


export const uploadMediaAPI = (endpoint, method = 'get', data ) => {
   const headerOptions = {
      method: method,
      headers: {
         'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization' : getAPIConfig().access_token
      },
      body: data
   }
   console.log(headerOptions)
   return fetch( `${BASE_URL}${endpoint}` , headerOptions )
   .then((response) => response.json())
   .then((json) => {
      console.log(json)
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

