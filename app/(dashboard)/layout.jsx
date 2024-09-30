
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({children}) {

    return (
      <div className="h-screen flex">
        {/* LEFT */}
        <div className="w-[14%] md:w-[10%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-scroll">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <Image src="/logo.png" alt="logo" width={28} height={28} />
            <span className="hidden lg:block font-bold">SchooLama</span>
          </Link>
          <Menu />
        </div>
        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
    );
  }