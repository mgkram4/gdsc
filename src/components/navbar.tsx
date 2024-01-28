import { RxHamburgerMenu } from "react-icons/rx";
import { PiCookingPotLight } from "react-icons/pi";
import Link from "next/link";
import { ROUTES } from "@config/routes";
import { createClient } from "@utils/supabase/server";
import { cookies } from "next/headers";
import { signOutAction } from "../actions/auth/signup/actions";
import Burger from "./button/nav-hamburger";
import Button, { BUTTON_VARIANTS } from "./button/button";

export default async function Navbar() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = await supabase.auth.getUser();
  const email = user.data.user?.email;

  return (
    <div className="bg-primary ">
      <div className="w-full flex  items-center p-2">
        {/* Mobile Hamburger (Always visible) */}
        <Burger />
        <Link href="/">
          <PiCookingPotLight className="w-14 h-14 text-slate-200" />
        </Link>
        <div className="flex items-center ml-auto space-x-4">
          {/* Logo */}
          <PiCookingPotLight className="w-10 h-10" />

          {/* Mobile Hamburger */}
          <button className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <RxHamburgerMenu className="w-6 h-6" />
          </button>
          {/* Nav Elements */}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium text-lg flex flex-col p-1 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4 md:mt-0  ">
              <li>
                <a
                  href="#"
                  className="block text-green-600 p-2  hover:text-green-500 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 p-2  hover:text-green-500 "
                >
                  Recipes
                </a>
              </li>
              <li>
                {email ? (
                  <form action={signOutAction}>
                    <Button varient={BUTTON_VARIANTS.NAVBAR}>{email}</Button>
                  </form>
                ) : (
                  <Link href={ROUTES.SIGNIN}>
                    <Button varient={BUTTON_VARIANTS.NAVBAR}>Login</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
