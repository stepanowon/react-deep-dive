import { Routes, Route, Link, useLocation } from 'react-router-dom';

function Stats() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0fff0' }}>
      <h3>App2 스탯</h3>
      <p>App2의 스탯 화면</p>
      <ul>
        <li>사용자: 1,234</li>
        <li>성장율: +15%</li>
      </ul>
    </div>
  );
}

function Reports() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0fff0' }}>
      <h3>App2의 리포트</h3>
      <p>App2의 분기별 리포트 화면</p>
      <ul>
        <li>1분기 리포트: 완료</li>
        <li>2분기 리포트: 처리중</li>
      </ul>
    </div>
  );
}

function Analytics() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0fff0' }}>
      <h3>App2의 분석</h3>
      <p>App2의 상세 분석 화면</p>
      <ul>
        <li>페이지 뷰 : 45,678</li>
        <li>전환율 : 23%</li>
      </ul>
    </div>
  );
}

export function App() {
  const location = useLocation();
  const isInHost = location.pathname.startsWith('/app2');
  
  return (
    <div style={{ padding: '20px', border: '2px solid green' }}>
      <h1>App2 - Remote 컴포넌트</h1>
      <p>현재 요청 경로 : {location.pathname}</p>
      <p>피더레이션 상태 : {isInHost ? '호스트앱에서 피더레이션! ' : '독립 실행'}</p>
      
      <nav style={{ margin: '10px 0', padding: '10px', backgroundColor: '#e6ffe6' }}>
        {isInHost ? (
          <>
            <Link to="/app2/stats" style={{ marginRight: '10px' }}>스탯</Link>
            <Link to="/app2/reports" style={{ marginRight: '10px' }}>리포트</Link>
            <Link to="/app2/analytics" style={{ marginRight: '10px' }}>분석</Link>
          </>
        ) : (
          <>
            <Link to="/stats" style={{ marginRight: '10px' }}>스탯</Link>
            <Link to="/reports" style={{ marginRight: '10px' }}>리포트</Link>
            <Link to="/analytics" style={{ marginRight: '10px' }}>분석</Link>
          </>
        )}
      </nav>

      <Routes>
        {/* 독립 실행용 라우트 */}
        <Route path="/stats" element={<Stats />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/analytics" element={<Analytics />} />
        
        {/* Host에서 피더레이션될때 라우트 */}
        <Route path="/app2/stats" element={<Stats />} />
        <Route path="/app2/reports" element={<Reports />} />
        <Route path="/app2/analytics" element={<Analytics />} />
        
        {/* 홈 라우트 */}
        <Route path="/" element={
          <div style={{ padding: '10px' }}>
            <h3>App2 홈</h3>
            <p>App2의 홈 화면</p>
            <p>독립 실행중</p>
          </div>
        } />
        <Route path="/app2" element={
          <div style={{ padding: '10px' }}>
            <h3>App2 홈</h3>
            <p>App2의 홈 화면</p>
            <p>호스트 앱에서 피더레이션 중</p>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;