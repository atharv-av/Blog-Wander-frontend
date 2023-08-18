import Layouts from "@/components/Layouts";
import Link from "next/link";
import "../globals.css";
import Signup from "@/components/auth/Signup";

export default function Page() {
  return (
    <Layouts>
      <Link href="/">Home</Link>
      <Signup/>
    </Layouts>
  );
}
