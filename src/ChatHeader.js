import React from "react";
import PropTypes from "prop-types";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import "./ChatHeader.css";

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
      </div>

      <div className="chatHeader__search">
        <input
          type="text"
          name="search"
          placeholder="Search"
        />
        <SearchRoundedIcon />
      </div>

      <SendRoundedIcon />
      <HelpRoundedIcon />
    </div>
  );
}
ChatHeader.propTypes = {
  channelName: PropTypes.string
};

export default ChatHeader;
