import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar">
  {topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      topic={topic}
      onClick={() => onTopicSelect(topic.id)}
    />
  ))}
</div>
  );
};

export default TopicList;
