import React, { FC, useState } from "react";

interface SidebarProps {
  item: string;
}
const SidebarItem: FC<SidebarProps> = ({ item }: SidebarProps) => {
  const [selected, setSelected] = useState<any>([]);
  const handleCheckBox = (item: string) => {
    console.log(item);
  };

  return (
    <div className="sidebar_item">
      <label>
        <input
          type="checkbox"
          value={item}
          checked={selected.includes(item)}
          onChange={() => handleCheckBox(item)}
        />
        {item}
      </label>
    </div>
  );
};

export default SidebarItem;
