import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { MeetingPage } from "@/pages/meeting";
import { SettingsPage } from "@/pages/settings";
import { SignupPage } from "@/pages/signup";

/** ルーター設定（FSD: app / routes セグメント） */
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/meetings/:id" element={<MeetingPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
