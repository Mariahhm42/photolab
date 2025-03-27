import React from "react";
//import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

// const sampleDataForTopicList = [
//   {
//     id: 1,
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: 2,
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: 3,
//     slug: "topic-3",
//     title: "People",
//   },
// ];

/**
 * TopicList Component
 * Renders a list of topics.
 */
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