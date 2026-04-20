import "./App.css";
import { AppRouter } from "./routes";
import { WithRouter } from "./providers";
import { authApiGetCurrentUser } from "@/features/auth/api";
import { currentUserAtom } from "@/features/auth/model/atoms";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const setCurrentUser = useSetAtom(currentUserAtom);

  const fetchCurrentUser = async () => {
    try {
      const user = await authApiGetCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (isLoading) return <div></div>;

  return (
    <WithRouter>
      <AppRouter />
    </WithRouter>
  );
}

export default App;
