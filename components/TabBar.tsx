import { joinClass } from "@/libs/client/utils";
import { tabs } from "@/mocks/tab";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="fixed bottom-0 mx-auto flex h-20 w-full max-w-md justify-between bg-white px-6 shadow-inner shadow-md">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={joinClass(
            "flex flex-col items-center",
            pathname === tab.path ? "text-blue-500" : "text-gray-500"
          )}
        >
          <Link
            href={tab.path}
            className="block flex h-full w-full flex-col justify-center text-center"
          >
            <div>아이콘</div>
            <p className="text-sm text-gray-500">{tab.label}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
