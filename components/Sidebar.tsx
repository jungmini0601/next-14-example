import React from "react";
import Navigator from "./Navigator";

function Sidebar() {
  return (
    <nav className="w-[240px] pl-4 border-r-[1px] border-neutral-700 bg-black">
      {/* 로고는 오늘 하기 귀찮아서 여기까지만 하고 로고 코드 작성 할 것 */}
      <div className="p-[24px]">로고</div>
      <div>
        <Navigator />
      </div>
    </nav>
  );
}

export default Sidebar;
