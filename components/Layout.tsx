import Link from "next/link";
import { useRouter } from "next/router";


interface Layout {
    children: JSX.Element
}


const Layout = ({ children }: Layout) => {
    const router = useRouter();

  return (
    <div className="flex flex-col p-8">
      <nav className="w-full max-w-2xl flex mx-auto items-center justify-center">

      </nav>

      <main className="flex flex-col  px-4 mt-16">
        <div className="flex flex-col items-start max-w-2xl mx-auto pb-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
