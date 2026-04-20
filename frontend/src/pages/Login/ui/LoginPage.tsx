import { Link, Navigate } from "react-router-dom";
import "./LoginPage.css";
import { authApiSignin } from "@/features/auth/api";
import { useState } from "react";
import { useAtom } from "jotai";
import { currentUserAtom } from "@/features/auth/model/atoms";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currntUser, setCurrentUser] = useAtom(currentUserAtom);

  console.log(currntUser);

  const signin = async () => {
    if (!email || !password) return;

    const { user, token } = await authApiSignin(email, password);

    localStorage.setItem("token", token);
    setCurrentUser(user);
  };

  if (currntUser) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <h1>Zoom Clone</h1>
        </div>

        <div className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="signin-button"
            disabled={!email || !password}
            onClick={signin}
          >
            サインイン
          </button>
        </div>

        <div className="login-links">
          <Link to="/signup" className="signup-link">
            アカウント作成
          </Link>
        </div>
      </div>
    </div>
  );
}
