import Navbar from "../components/navbar";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
/*

Todo here:
1. insert data to the database and check if it is uploaded or not
2. fetch the data on the dashboard for the logged in user_id of clerk

*/
export default async function Page() {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center">
        <div className="w-full md:w-7/12 md:mr-8 flex justify-between items-center mt-20">
          <div className="w-full md:w-7/12 md:mr-8">
            <h2 className="text-4xl leading-10 sm:text-5xl lg:text-4xl font-extrabold tracking-tight mb-6 ">
              <span className="">Write More</span>
              <br />
              <span>Worry Less About Managing</span>
            </h2>
            <p className="text-lg md:mx-w-md leading-relaxed mb-4">
              Turn your goals into quests to beat procrastination and boost your
              productivity!
            </p>
            <div className="flex flex-col space-y-3">
              <SignedIn>
                <Button className="w-[16rem]">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              </SignedIn>
              <SignedOut>
                <Button className="w-[16rem]">
                  <Link href={"/sign-in"}>Login</Link>
                </Button>
              </SignedOut>
              <Button variant="outline" className="w-[16rem]">
                I have an account
              </Button>
            </div>
          </div>
          <div>🫂</div>
        </div>
      </main>
    </div>
  );
}
