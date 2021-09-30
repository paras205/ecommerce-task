import React, { FC } from "react";

interface SidebarProps {
  item: string;
  // React.Dispatch<React.SetStateAction<string>>
  setSelected: any;
  selected: string;
}
const SidebarItem: FC<SidebarProps> = ({
  item,
  setSelected,
  selected,
}: SidebarProps) => {
  return (
    <div className="sidebar_item" onClick={() => setSelected(item)}>
      <span className={`${selected === item ? "active" : ""}`}></span>
      {item}
    </div>
  );
};

export default SidebarItem;
