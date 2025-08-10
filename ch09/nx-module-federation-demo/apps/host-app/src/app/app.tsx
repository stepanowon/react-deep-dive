import * as React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const App1 = React.lazy(() => import('app1/Module'));
const App2 = React.lazy(() => import('app2/Module'));

// Host에서 App1/App2를 래핑
function App1Wrapper() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
      <h2>app1 영역</h2>
      <React.Suspense fallback={<div>app1 로딩중...</div>}>
        <App1 />
      </React.Suspense>
    </div>
  );
}

function App2Wrapper() {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
      <h2>app2 영역</h2>
      <React.Suspense fallback={<div>app2 로딩중...</div>}>
        <App2 />
      </React.Suspense>
    </div>
  );
}

export function App() {
  const location = useLocation();
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>호스트앱 - Bootstrap 패턴</h1>
      <p>현재 요청 경로 : {location.pathname}</p>
      
      <nav style={{ margin: '20px 0', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none' }}>🏠 Home</Link>
        <Link to="/app1" style={{ marginRight: '15px', textDecoration: 'none' }}>📘 App1</Link>
        <Link to="/app2" style={{ marginRight: '15px', textDecoration: 'none' }}>📗 App2</Link>
      </nav>

      <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px' }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <h2>호스트 앱 데모</h2>
                <p>app1, app2는 bootstrap.tsx를 통해 독립 실행 가능</p>
              </div>
            } 
          />
          <Route path="/app1/*" element={<App1Wrapper />} />
          <Route path="/app2/*" element={<App2Wrapper />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;