import {useDispatch, useSelector} from 'react-redux';
import { LoginGoogle } from './config/redux/actions/authAction'

function App() {
  const dispatch = useDispatch();

  const {dataLogin} = useSelector((store) => store.authReducer);
  console.log(dataLogin);
  const dataUsers = dataLogin.user;
  console.log(dataUsers);

  return (
    <>
    <button onClick={() => dispatch(LoginGoogle())}>Login with Google</button><br/><br/><br/>
    <img src={dataUsers.photoURL} alt="img-mail" />
    <p>{dataUsers.displayName}</p>
    <p>{dataUsers.email}</p>
    </>
  );
}

export default App;
