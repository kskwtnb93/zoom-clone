import { Navigate, Outlet } from "react-router-dom";
import { currentUserAtom } from "../model/atoms";
import { useAtomValue } from "jotai";

const AuthGuard = () => {
  const currentUser = useAtomValue(currentUserAtom);

  if (currentUser == null) return <Navigate to="/login" />;

  return <Outlet />;
};

export default AuthGuard;
