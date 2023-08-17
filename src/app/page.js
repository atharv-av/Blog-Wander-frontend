import Layouts from "../components/Layouts";
import Link from "next/link";
import "./globals.css";

export default function Page() {

  return (
    <Layouts>
      <Link href="/signin" prefetch={false} >Signin</Link>
      <Link href="/signup" prefetch={false} >Signup</Link>
    </Layouts>
  )
}
