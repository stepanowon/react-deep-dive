import { Routes, Route, Link, useLocation } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f8ff' }}>
      <h3>App1 대시보드</h3>
      <p>App1의 대시보드 화면</p>
    </div>
  );
}

function Profile() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f8ff' }}>
      <h3>App1 프로필</h3>
      <p>App1의 프로필 화면</p>
    </div>
  );
}

function Settings() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f8ff' }}>
      <h3>App1 설정</h3>
      <p>App1의 설정 화면</p>
    </div>
  );
}

export function App() {
  const location = useLocation();
  const isInHost = location.pathname.startsWith('/app1');
  
  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h1>App1 - Remote 컴포넌트</h1>
      <p>현재 요청 경로 : {location.pathname}</p>
      <p>피더레이션 상태 : {isInHost ? '호스트앱에서 피더레이션! ' : '독립 실행'}</p>
      
      <nav style={{ margin: '10px 0', padding: '10px', backgroundColor: '#e6f3ff' }}>
        {isInHost ? (
          <>
            <Link to="/app1/dashboard" style={{ marginRight: '10px' }}>대시보드</Link>
            <Link to="/app1/profile" style={{ marginRight: '10px' }}>프로필</Link>
            <Link to="/app1/settings" style={{ marginRight: '10px' }}>설정</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={{ marginRight: '10px' }}>대시보드</Link>
            <Link to="/profile" style={{ marginRight: '10px' }}>프로필</Link>
            <Link to="/settings" style={{ marginRight: '10px' }}>설정</Link>
          </>
        )}
      </nav>

      <Routes>
        {/* 독립 실행용 라우트 */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* Host에서 피더레이션될때 라우트 */}
        <Route path="/app1/dashboard" element={<Dashboard />} />
        <Route path="/app1/profile" element={<Profile />} />
        <Route path="/app1/settings" element={<Settings />} />
        
        {/* 홈 라우트 */}
        <Route path="/" element={
          <div style={{ padding: '10px' }}>
            <h3>App1 홈</h3>
            <p>App1의 홈 화면</p>
            <p>독립 실행중</p>
          </div>
        } />
        <Route path="/app1" element={
          <div style={{ padding: '10px' }}>
            <h3>App1 홈</h3>
            <p>App1의 홈 화면</p>
            <p>호스트 앱에서 피더레이션 중</p>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;