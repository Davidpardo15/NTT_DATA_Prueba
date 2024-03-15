import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useForm} from './hook/useForm'




const Login = () => {



    const navigate = useNavigate()

    const {name, password, onInputChange, onResetForm} = 
    useForm({
        name: "",
        password: '',
    });

    const onLogin = (e) => {
        e.preventDefault()

        navigate('/frutas', {
            replace:true, 
            state: {
                logged:true,
                name
            }
        })
        
        onResetForm();
    }

    

    return ( 
        <div>
            <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"background-image" : "url('../src/assets/bg1.jpg')"}}>
                <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative '>
                    <h1 className='text-4xl text-white font-bold text-center mb'>Login</h1>
                    <form onSubmit={onLogin}>
                        <div className='relative my-4'>
                            <input type="name" name='name' id='name' value={name} onChange={onInputChange} className='block w-72 py-2 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' required />
                            <label htmlFor= "name" className='absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0:scale-75 peer-focus:-translate-y-6' >usuario</label>
                        </div>
                        <div className='relative my-4'>
                            <input type="password" name='password' id='password' value={password} onChange={onInputChange} className='block w-72 py-2 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' required/>
                            <label htmlFor="" className='absolute text-xl text-white duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0:scale-75 peer-focus:-translate-y-6'>password</label>
                        </div>
                        
                        <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type="submit">Login</button>
                        
                    </form>
                </div>
            </div>
        </div>
         
     );
};
 
export default Login;