import React, { FC, ReactNode, useState, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
}

const ResizableSidebar: FC<Props> = ({ children }) => {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(30);

  useEffect(() => {
    const stopResizing = () => setIsResizing(false);
    const resize = (e: MouseEvent) => {
      isResizing && setSidebarWidth(e.clientX / (window.innerWidth / 100));
    };
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing]);

  return (
    <div
      ref={sidebarRef}
      className="sidebar"
      style={{ width: `${sidebarWidth}%` }}
    >
      <div className="sidebar__scroll">
        <div className="sidebar__content">{children}</div>
      </div>
      <div
        className="sidebar__resizer"
        onMouseDown={(e) => {
          e.preventDefault();
          setIsResizing(true);
        }}
      />
    </div>
  );
};

export default ResizableSidebar;
