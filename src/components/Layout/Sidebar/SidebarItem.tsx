import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SidebarItemProps {
  path: string;
  image: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

function SidebarItem({
  image,
  path,
  title,
  isActive,
  onClick,
}: SidebarItemProps) {
  return (
    <Link href={path}>
      <a className={`${isActive ? "active" : ""}`} onClick={onClick}>
        <div className="icon">
          <Image src={image} alt="" layout="fill" />
        </div>
        <p>{title}</p>
      </a>
    </Link>
  );
}

export default SidebarItem;
