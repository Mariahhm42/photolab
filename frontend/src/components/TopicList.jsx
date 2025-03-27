import React from "react";
import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  return (
    <div className="topic-list">
      {topics.map((topic) => (
        <button key={topic.id} className="topic-list__item">
          {topic.title}
        </button>
      ))}
    </div>
  );
};

export default TopicList;