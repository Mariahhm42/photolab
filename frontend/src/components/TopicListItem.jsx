import React from "react";
import PropTypes from "prop-types";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onClick }) => {
  return (
    <button className="topic-list__item" onClick={onClick}>
      {topic.title}
    </button>
  );
};

TopicListItem.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopicListItem;
