// app/components/FloatingNavServer.tsx

import { checkUser } from "@/lib/checkUser";
import { FloatingNavDemo } from "./FloatingNavbar";
import Header from "@/components/Header";


export default async function FloatingNavServer() {
  const user = await checkUser(); // ✅ server-side
  return <Header user={user} />;
}
