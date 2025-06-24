import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import type { Route } from "./+types/home";

// 🔸 디코딩된 유저 정보 타입 정의
type GoogleUser = {
  name: string;
  email: string;
  picture: string;
  // 필요한 경우 여기 더 추가 가능
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gmail Summary Service" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Gmail Summary Service</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            const decoded = jwtdecode<GoogleUser>(credentialResponse.credential);
            console.log("✅ 유저 정보:", decoded);
            alert(`환영합니다, ${decoded.name}님!`);
          }
        }}
        onError={() => {
          console.log("❌ 로그인 실패");
          alert("로그인 실패!");
        }}
      />
    </div>
  );
}
