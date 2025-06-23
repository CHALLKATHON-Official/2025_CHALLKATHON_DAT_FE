import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'; // 토큰 해석을 위한 패키지

function App() {
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('사용자 정보:', decoded);
    alert(`환영합니다, ${decoded.name}`);
  };

  return (
    <GoogleOAuthProvider clientId='756449302310-eps05rvo5jqvqtk40o6vppih9hfd5fqc.apps.googleusercontent.com'>
      <div style={{ padding: '20px' }}>
        <h1>구글 로그인 테스트</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log('로그인 실패');
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
