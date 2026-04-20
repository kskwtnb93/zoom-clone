import type { User } from "@/entities/user";
import { atom } from "jotai";

export const currentUserAtom = atom<User>();
