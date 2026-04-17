import type { User } from "@/entities/user";
import api from "@/shared/api";

export async function authApiSignup(
  name: string,
  email: string,
  password: string,
): Promise<{
  user: User;
  token: string;
}> {
  const result = await api.post<{ user: User; token: string }>("/auth/signup", {
    name,
    email,
    password,
  });
  return result.data;
}
