import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white dark:text-gray-300 p-4 gap-4 font-bold text-lg flex flex-row items-center"
            >
              <Image src="/logo.jpg" width={50} height={50} alt="Logo" />
              JavaScript Journeys
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
