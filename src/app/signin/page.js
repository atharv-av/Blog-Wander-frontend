import Layouts from "@/components/Layouts";
import Link from "next/link";
import "../globals.css";

export default function Page() {

  return (
    <Layouts>
      <Link href="/" prefetch={false} >Home</Link>
    </Layouts>
  )
}
