// app/components/FloatingNavServer.tsx

import { checkUser } from "@/lib/checkUser";
import { FloatingNavDemo } from "./FloatingNavbar";


export default async function FloatingNavServer() {
  const user = await checkUser(); // ✅ server-side
  return <FloatingNavDemo user={user} />;
}
