import axios from 'axios'

const UserService = {}

UserService.register = function ( data){

    return axios.post('http://localhost:3300/api/users/register',data)

}

UserService.signin=function(data){
    return axios.post('http://localhost:3300/api/users/login',data)
}



const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub20iOiJhbG1pYSIsInByZW5vbSI6ImdoYXNzZW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTM4Njk0Njd9.XhHtS-4_Rw-oOH3Vm8F1TFtL8L83Rre1fkL-_SDVLXQ'; // Replace with your actual authentication token



UserService.stage = function (data) {
  const stageUrl = 'http://localhost:3300/api/users/registerstage';
  const headers = {
    Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
  };

 return axios.post(stageUrl, data, { headers });
};






UserService.job = function (data) {
  const stageUrl = 'http://localhost:3300/api/users/registerjob';
  const headers = {
    Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
  };

  return axios.post(stageUrl, data, { headers });
};




export default UserService;