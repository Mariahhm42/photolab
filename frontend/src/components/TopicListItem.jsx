import React from "react";
import PropTypes from "prop-types";
import "../styles/TopicListItem.scss";


const TopicListItem = ({ topic }) => {
  return (
    <div className="topic-list__item">
      {topic.title}
    </div>
  );
};

// PropTypes validation
TopicListItem.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};


export default TopicListItem;