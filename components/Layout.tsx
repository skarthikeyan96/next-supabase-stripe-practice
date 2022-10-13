import { useRouter } from "next/router";
import React, { useEffect } from "react";
import supabaseClient from "../utils/supabase";

interface Layout {
  children: JSX.Element;
}

const Layout = ({ children }: Layout) => {
  const router = useRouter();

  const [user, setUser] = React.useState(null);

  useEffect(() => {
    checkUser();

    // will be fired when there is a change the part of the URL beginning with and following the # symbol
    window.addEventListener("hashchange", () => {
      checkUser();
    });
  }, []);

  const checkUser = () => {
    const user: any = supabaseClient.auth.user();
    setUser(user);
  };

  const handleLogin = async () => {
    await supabaseClient.auth.signIn({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push("/");
    setUser(null);
  };

  const renderUser = () => {
    const userData: any = user;

    if (userData) {
      return (
        <>
          {" "}
          <p> {userData.email} </p>{" "}
          <button onClick={handleLogout}> Logout </button>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col p-8">
      <nav className="w-full max-w-2xl flex mx-auto items-center justify-center">
        {!user && <button onClick={handleLogin}> Login </button>}
      </nav>

      <main className="flex flex-col  px-4 mt-16">
        {renderUser()}
        <div className="flex flex-col items-start max-w-2xl mx-auto pb-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
