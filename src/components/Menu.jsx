'use client'
import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "T-shirts", doc_count: 11 },
  { id: 2, name: "Electronics", doc_count: 8 },
  { id: 3, name: "Food", doc_count: 64 },
  { id: 4, name: "Lain-lain", doc_count: 18 },
];

const Menu =  () => {
  const [showCatMenu, setShowCatMenu] = useState(false);

  const handleSubMenuClick = () => {
    setShowCatMenu(!showCatMenu);
  }
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
                onClick={handleSubMenuClick}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map(({ id, name, doc_count }) => {
                      return (
                        <li
                          key={id}
                          className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md"
                          onClick={() => setShowCatMenu(false)}
                        >
                          <Link href={`/category/${name}`}>
                            <a>
                              {name}
                              <span className="opacity-50 text-sm">
                                ({doc_count})
                              </span>
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
