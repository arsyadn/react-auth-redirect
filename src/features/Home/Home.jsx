import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react'

const Home = () => {
    const data = useSelector((globalStore) => globalStore);
    // console.log(data)
    const navigate = useNavigate();

    const checkLogin = () => {
        if(data.authReducer.dataLogin === null || data.authReducer.dataLogin?.email === "admin@admin.com") navigate("/");
    };

    useEffect(() => {
        checkLogin();
    },[]);

    return(
        <h1>Welcome! This is landing page</h1>
    )
}
export default Home;