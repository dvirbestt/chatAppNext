'use client'
import { UseSelector, useSelector } from "react-redux";

import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const user = useSelector((state) => state.authReducer.value);
  const router = useRouter()

  useEffect(() => {
    if (!user.isAuth) {
      router.push("/login")
    }
  })

  return (
    <main>
      {user.isAuth ?
        <div>
          <Navbar />
        </div>
         :
        <>
        </>
        }


    </main>
  );
}
