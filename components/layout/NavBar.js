import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex justify-around items-center">
        <li className="flex justify-center items-center  mx-2 p-2">
          <Link href="/">
            <a
              className={
                router.pathname == "/"
                  ? "text-white bg-indigo-700 p-2 px-4 transition ease-in delay-50 duration-200 rounded"
                  : "text-gray-700 p-2 px-4 transition ease-in delay-50 duration-200 rounded  hover:bg-indigo-700 hover:text-white"
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li className="flex justify-center items-center mx-2 p-2">
          <Link href="/names-generator">
            <a
              className={
                router.pathname == "/names-generator"
                  ? "text-white bg-indigo-700 p-2 px-4 transition ease-in delay-50 duration-200 rounded"
                  : "text-gray-700 p-2 px-4 transition ease-in delay-50 duration-200 rounded  hover:bg-indigo-700 hover:text-white"
              }
            >
              Names Generator
            </a>
          </Link>
        </li>
        <li className="flex justify-center items-center mx-2 p-2">
          <Link href="/blog">
            <a
              className={
                router.pathname == "/blog"
                  ? "text-white bg-indigo-700 p-2 px-4 transition ease-in delay-50 duration-200 rounded"
                  : "text-gray-700 p-2 px-4 transition ease-in delay-50 duration-200 rounded  hover:bg-indigo-700 hover:text-white"
              }
            >
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
