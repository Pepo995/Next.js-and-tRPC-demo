import NextAuth from "next-auth";
import { authOptions } from "demo/server/auth";

export default NextAuth(authOptions);
