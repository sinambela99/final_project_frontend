"use client";
import React, { useState, useEffect } from "react";
import { Button, IconButton, Input, Navbar, Typography, Menu, MenuHandler, Avatar, MenuList, MenuItem } from "@material-tailwind/react";
import { HiSearch, HiShoppingCart, HiOutlineUserCircle, HiOutlineShoppingCart, HiOutlineLogout, HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getUser } from "@/api/user";

const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  // const [search, setSearch] = useState("");
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState([]);
  // console.log(search);

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.clear();
    setIsLogin(false);
    router.push("/login");
  };

  console.log(userId);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLogin(true);
      getUser(localStorage.getItem("id")).then((res) => {
        setUserId(res);
        console.log(res.id);
      });
    }
  }, []);

  // Profile Menu Component
  // const profileMenuItem = [
  //   {
  //     label: "Profile",
  //     icon: HiOutlineUserCircle,
  //     url: "/profile/edit/1",
  //   },
  //   {
  //     label: "Orders",
  //     icon: HiOutlineShoppingCart,
  //     url: "/",
  //   },
  //   // {
  //   //   label: 'Contact',
  //   //   icon:
  //   // },
  //   {
  //     label: "Logout",
  //     icon: HiOutlineLogout,
  //     url: "/login",
  //   },
  // ];

  // Navigation List Menu
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="black" className="font-normal">
        <Link href={"/products"} className="flex items-center">
          {" "}
          Products{" "}
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="black" className="font-normal">
        <Link href={"/"} className="flex items-center">
          {" "}
          Orders{" "}
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="black" className="font-normal">
        <Link href={`/profile/${userId.id}`} className="flex items-center">
          {" "}
          {isLogin ? "Profile" : ""}
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="black" className="font-normal">
        <Link href={"/products/add"} className="flex items-center">
          {" "}
          Add New Product{" "}
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="black" className="font-normal">
        <Link href={"/login"} className="flex items-center" onClick={handleLogout}>
          {" "}
          {isLogin ? "Logout" : "Login"}
        </Link>
      </Typography>
      <Link href={"/cart"}>
        <IconButton variant="text">
          <HiShoppingCart size={25} color="black" />
          <div className="absolute -top-2 -right-1 rounded-full text-white bg-blue-500 p-1 flex items-center justify-center text-xs font-extrabold">{cartTotalQuantity}</div>
        </IconButton>
      </Link>
    </ul>
  );

  // function ProfileMenu() {
  //   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  //   const closeMenu = () => setIsMenuOpen(false);

  //   return (
  //     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
  //       <MenuHandler>
  //         <Button variant="text" color="blue-gray" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
  //           <Avatar
  //             variant="circular"
  //             size="sm"
  //             alt="tania andrew"
  //             className="border border-blue-500 p-0.5"
  //             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
  //           />
  //           <HiChevronDown strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
  //         </Button>
  //       </MenuHandler>
  //       <MenuList className="p-1">
  //         {profileMenuItem.map(({ label, icon, url }, key) => {
  //           const isLastItem = key === profileMenuItem.length - 1;
  //           return (
  //             <MenuItem key={label} onClick={closeMenu} className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""}`}>
  //               {React.createElement(icon, {
  //                 className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
  //                 strokeWidth: 2,
  //               })}
  //               <Typography as="span" variant="small" className="font-normal" color={isLastItem ? "red" : "inherit"}>
  //                 <Link href={url} className="flex items-center" key={url}>
  //                   {label}
  //                 </Link>
  //               </Typography>
  //             </MenuItem>
  //           );
  //         })}
  //       </MenuList>
  //     </Menu>
  //   );

  return (
    <>
      <Navbar className="fixed top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="li" variant="h4" color="black" className="font-bold">
            <Link href={"/"} className="flex items-center">
              {" "}
              Final Project Team 1{" "}
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
              <span> Buy Now </span>
            </Button> */}
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
