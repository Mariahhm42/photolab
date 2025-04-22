import React from "react";
import PropTypes from "prop-types";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onClick }) => {
  return (
    <div className="topic-list__item" onClick={onClick} style={{ cursor: 'pointer' }}>
      {topic.title}
    </div>
  );
};

TopicListItem.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default TopicListItem;
