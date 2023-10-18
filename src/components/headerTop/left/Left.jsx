import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Left.css";

export default function Left() {
  return (
    <div className="left">
      <span className="notifIcon">
        <span className="notifNumber">4</span>
        <NotificationsIcon className="icon" />
      </span>
      <span className="langIcon">
        <span className="langNumber">2</span>
        <LanguageIcon className="icon" />
      </span>
      <SettingsIcon className="icon" />
      <img src="logo192.png" alt="" />
    </div>
  );
}
