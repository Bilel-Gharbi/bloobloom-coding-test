/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { isSidebarOpen, toggleSideBar } from "../../reducers/ui/uiSlice";
//@ts-ignore
import Slide from "react-reveal/Slide";
import "./style.css";
import { MenuItem } from "../../utils/constants";
import { addCategory } from "../../reducers/product/productSlice";
type Props = {
  menuItems: Array<any>;
};

const SideMenu = ({ menuItems }: Props) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<
    undefined | MenuItem
  >(undefined);
  const showSideBar = useAppSelector(isSidebarOpen);
  const dispatch = useAppDispatch();
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, !showSideBar);
    return () => {
      document.removeEventListener("click", handleClickOutside, !showSideBar);
    };
  });

  useEffect(() => {
    // clean up state
    return () => setSelectedMenuItem(undefined);
  }, [showSideBar]);

  useEffect(() => {
    if (selectedMenuItem?.parent) {
      let category: string[] = [
        selectedMenuItem?.parent.label,
        selectedMenuItem.label,
      ];
      dispatch(addCategory(category.join(" ")));
    } else if (selectedMenuItem) dispatch(addCategory(selectedMenuItem.label));
  }, [selectedMenuItem]);

  // TODO: fix click event inside the side bar
  const handleClickOutside = (event: any) => {
    if (ref.current !== event.target) dispatch(toggleSideBar(false));
  };
  const handleMouseHover = (
    menu: MenuItem,
    isSubMenu: boolean,
    parent?: MenuItem
  ) => {
    if (!isSubMenu && menu) setSelectedMenuItem(menu);
    else setSelectedMenuItem({ ...menu, parent });
  };

  const renderMenuItem = (
    element: any,
    isSubMenu: boolean,
    parent?: MenuItem
  ) => {
    return (
      <>
        <div
          className="sidebar-menu-item"
          key={element.id}
          onMouseEnter={() => handleMouseHover(element, isSubMenu, parent)}
        >
          <div className="sidebar-menu-item-title">{element.label}</div>
          <div className="icon">
            {element.sub?.length ? <i className="arrow right"></i> : null}
          </div>
        </div>
      </>
    );
  };

  const handleGoBack = () => {
    setSelectedMenuItem(undefined);
    dispatch(toggleSideBar(true));
  };

  return (
    <>
      {showSideBar && (
        <div ref={ref} id="side-bar">
          <Slide left>
            <div className="side-menu">
              {menuItems?.map((menu: MenuItem) => renderMenuItem(menu, false))}
            </div>
          </Slide>
          {selectedMenuItem?.sub?.length ? (
            <>
              <div className="side-sub-menu">
                <>
                  {selectedMenuItem?.sub?.map((subMenu: MenuItem) =>
                    renderMenuItem(subMenu, true, selectedMenuItem)
                  )}
                  <div
                    className="sidebar-menu-item go-back"
                    onClick={handleGoBack}
                  >
                    <div className="sidebar-menu-item-title">
                      <div>
                        <i className="arrow left"></i>
                      </div>
                      <div className="sidebar-menu-item-title">go back</div>
                    </div>
                  </div>
                </>
              </div>
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default SideMenu;
