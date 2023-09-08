import React , {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UserService from '../Services/UserService';


const Login =()=>{

    const navigate= useNavigate();

    const [email, setEmail] = useState('');
  
    const [password, setPassword] = useState('');
  
    const signin=async(e)=>{
        e.preventDefault();
        console.log("form submited");
        console.log("form data", email,password);
      
         const data = {
          
         
            email: email,
            
            password: password,
        }

        try{
            const response = await UserService.signin(data)
            console.log("response===>",response);

            localStorage.setItem('user_data', JSON.stringify(response.data.user))
            localStorage.setItem('token',response.data.token)


            toast.success('successfully created!')

            
            setEmail   ('')
            setPassword('')

            navigate("/home")
            
           
           
        
        }catch(err){
        console.log(err);
        toast.error('failed ');
        }
        
    }

return (

<div className='login'>
    <Toaster/>

<div className='login-cover'>

</div>

<div  className='login-content'></div>

<div>
<h1>Space</h1>
<p> Space Application</p>
</div>


<div>
<form onSubmit={signin}>

<div className='form-group'>
        <label> Email</label>
        <input className = 'input'type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className='form-group'>
        <label> Password</label>
        <input className = 'input'type="password"value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button className='btn signup' type='submit'>Sign up</button>
</form>
</div>




</div>
)


}
export default Login;