
import {
  Home,
 
  History,

  Library,

  UserCircle,
} from "lucide-react";
import NavLink from "./nav-link";
export default function Navbar() {
  const menu = [
    {
      icon: <Home />,
      title: "Discover",
      href: "/",
    },
   

    {
      icon: <Library />,
      title: "Topics",
      href: "/topic",
    },
    {
      icon: <History />,
      title: "Riwayat",
      href: "/history",
    },
    
    {
      icon: <UserCircle />,
      title: "Channels",
      href: "/channels",
    },

  ];
  return (
    <div className="w-full flex lg:block">
      {menu.map((item, index) => {
        return (
          <NavLink
            key={index}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
}
