import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  const handleMenuItemClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar onMenuOpenChange={setMenuOpen} className="italic">
      <NavbarContent>
        <NavbarBrand className="flex items-center">
          <Link href="/">
            {/* <div
              className="mr-2 cursor-pointer"
              style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                height: "3rem",
                width: "3rem",
              }}
            ></div> */}
            <h1 className="cursor-pointer text-2xl font-bold text-primary">
              cyruscoffee.id
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <div className="hidden cursor-pointer justify-center gap-4 text-default sm:flex">
        <NavbarContent>
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.label}-${index}`}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu className="max-w-screen flex max-h-[16rem]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="flex font-semibold text-secondary dark"
                style={{
                  height: "3rem",
                }}
                href={item.href}
                size="sm"
                onClick={handleMenuItemClick}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
      <NavbarMenuToggle
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="text-primary sm:hidden"
      />
    </Navbar>
  );
}

// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   NavbarMenuToggle,
//   NavbarMenuItem,
//   NavbarMenu,
// } from "@nextui-org/react";
// import { useState } from "react";

// export default function NavigationBar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = ["Products", "Customers", "About", "Contact"];

//   return (
//     <Navbar onMenuOpenChange={setMenuOpen} variant="sticky" className="italic">
//       <NavbarContent>
//         <NavbarBrand>
//           <h1 className="cursor-pointer text-2xl font-bold italic text-default">
//             coffee
//           </h1>
//         </NavbarBrand>
//       </NavbarContent>
//       <div className="hidden cursor-pointer justify-center gap-4 text-default sm:flex">
//         <NavbarContent>
//           <NavbarItem>
//             <Link>Products</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link>Customers</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link>About</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link>Contact</Link>
//           </NavbarItem>
//         </NavbarContent>
//         <NavbarMenu>
//           {menuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 className="flex justify-center text-secondary dark"
//                 href="#"
//                 size="sm"
//               >
//                 {item}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </NavbarMenu>
//       </div>
//       <NavbarMenuToggle
//         aria-label={menuOpen ? "Close menu" : "Open menu"}
//         className="sm:hidden"
//         onClick={() => menuOpen()}
//       />
//     </Navbar>
//   );
// }
