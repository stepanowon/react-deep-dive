import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../AuthProvider';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();
    const [userid, setUserid] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { from } = location.state || { from: { pathname: '/' } };
    const login = () => {        
        //auth.login(userid, password, () => navigate(from));
        auth.loginProcess(userid, password, ({ status, message })=>{
            if (status === "ok") {
                alert("로그인 성공");
                navigate(from);
            } else {
                alert("로그인 실패 : " + message);
            }
        })
    };

    return (
      <div style={{ margin:"20px" }}>
        <div style={{ marginTop:"10px", marginBottom:"10px" }}>
        아이디 : <input type="text" value={userid} onChange={(e)=>setUserid(e.target.value)} /><br/>
        암호 : <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} /><br />
        </div>
        <button onClick={login}>로그인</button>
      </div>
    );
};

export default LoginPage;
