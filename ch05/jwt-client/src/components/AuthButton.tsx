import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const AuthButton = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const userInfo = auth.getCurrentUserInfo();

    return userInfo.userid ? (
        <span style={{ marginLeft : "100px", color: "blue" }}>
            Loggined : (Role : {userInfo.role}) &nbsp;&nbsp;
            <button onClick={() => { auth.logoutProcess(() => navigate("/"));  }}>logout </button>
        </span>
    ) : (
        <span style={{ marginLeft : "100px", color: "red" }}>Not Loggined</span>
    );
};

export default AuthButton;
