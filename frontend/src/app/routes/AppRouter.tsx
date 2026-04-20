import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { MeetingPage } from "@/pages/meeting";
import { SettingsPage } from "@/pages/settings";
import { SignupPage } from "@/pages/signup";
import AuthGuard from "@/features/auth/components/authGuard";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<AuthGuard />}>
        <Route index element={<HomePage />} />
        <Route path="/meetings/:id" element={<MeetingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
