import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
const Card = (props) => {
  const { cardClass, headerText, content, headerClass, contentClass } = props;
  return (
    <div className={cardClass}>
      <header className={headerClass}>{headerText}</header>
      <div className={contentClass}>
        <span>{content}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headerText: PropTypes.string,
  content: PropTypes.object,
  headerClass: PropTypes.string,
  contentClass: PropTypes.string,
  cardClass: PropTypes.string,
};

Card.defaultProps = {
  headerText: "",
  content: {},
  headerClass: "header",
  contentClass: "content",
  cardClass: "card",
};

export default Card;
