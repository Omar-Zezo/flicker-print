import React from "react";

const TimeAgoComponentEn = ({ timestamp }) => {
  const timeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diff = now - past;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${يوم > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${ساعة > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${دقيقة > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${ثانية > 1 ? "s" : ""} ago`;
    }
  };

  return <span>{timeAgo(timestamp)}</span>;
};

export default TimeAgoComponentEn;
