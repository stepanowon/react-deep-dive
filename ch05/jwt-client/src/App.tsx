import { Link, Outlet } from 'react-router-dom';

import AuthButton from './components/AuthButton';

const App = () => {
    return (
      <div style={{ margin:'10px' }}>
          <div> 
            <span style={{}}>
              <Link to="/">Home</Link>&nbsp; | &nbsp;
              <Link to="/users">Users</Link>&nbsp; | &nbsp;
              <Link to="/admins">관리자페이지</Link> 
              <AuthButton />
            </span>
          </div>
          <hr/>
          <Outlet />
      </div>
    );
};
export default App;
