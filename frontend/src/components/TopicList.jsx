import React from "react";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => {
  return (
    <div className="topic-list">
      {topics.map((topic) => (
        <button 
          key={topic.id} 
          className="topic-list__item" 
          onClick={() => onTopicSelect(topic.id)}  // Call onTopicSelect with the topic id
        >
          {topic.title}
        </button>
      ))}
    </div>
  );
};

export default TopicList;
