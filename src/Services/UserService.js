import axios from 'axios'
const UserService = {}

UserService.register = function ( data){

    return axios.post('http://localhost:3300/api/users/register',data)

}

UserService.signin=function(data){
    return axios.post('http://localhost:3300/api/users/login',data)
}
export default UserService;