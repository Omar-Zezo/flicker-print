import React from "react";

const TimeAgoComponentAr = ({ timestamp }) => {
  const timeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diff = now - past; // الفرق بالمللي ثانية

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `منذ ${years} سنة${years > 1 ? "s" : ""}`;
    } else if (months > 0) {
      return `منذ ${months} شهر${months > 1 ? "s" : ""}`;
    } else if (days > 0) {
      return `منذ ${days} يوم${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `منذ ${hours} ساعة${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `منذ ${minutes} دقيقة${minutes > 1 ? "s" : ""}`;
    } else {
      return `منذ ${seconds} ثانية${seconds > 1 ? "s" : ""}`;
    }
  };

  return <span>{timeAgo(timestamp)}</span>;
};

export default TimeAgoComponentAr;
