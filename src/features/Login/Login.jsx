import {useDispatch, useSelector} from 'react-redux';
import { LoginGoogle, LoginEmail } from '../../config/redux/actions/authAction'
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

function Login() {
  const {dataLogin} = useSelector((state) => state.authReducer);
  // console.log(dataLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLoginGoogle = async () => {
      const data = await dispatch(LoginGoogle());
      if(data) navigate("/home"); //di return di bagian actionnya
  } 

  const handleLoginEmail = () => {
    dispatch(LoginEmail(email, password));
    setTimeout(() => {
      navigate("/dashboard")}, 1500) //nge direct setelah 1.5sec
  }

  useEffect(() => {
    if(dataLogin?.email === "admin@admin.com") navigate("/dashboard");
    if(dataLogin !== null && dataLogin?.email !== "admin@admin.com") navigate("/home")
  },[]);

  return (
    <>
      <input 
      type="email"
      placeholder="Masukkan email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <input 
      type="password" 
      placeholder="Masukkan password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginEmail}>Login</button>
      <button onClick={handleLoginGoogle}>Login with Google</button>
    </>
  );
}

export default Login;
