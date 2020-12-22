import React from "react";
import { Link, navigate } from "gatsby";
import Subnav from './sanityRoutingSubnav'
const doNavigate = target => {
  if (!target || !target.length) {
    return;
  }
  const internal = /^\/(?!\/)/.test(target);
  if (internal) {
    navigate(target);

  } else {
    window.location = target;
  }
};

const CTALink = props => {
  let link = props.route || props.link || "#";
  if (
    props.landingPageRoute &&
    props.landingPageRoute.slug &&
    props.landingPageRoute.slug.current
  ) {
    link = props.landingPageRoute.slug.current;
  }

  if (props.kind === "button") {
    return (
      <button id="navAction" onClick={() => doNavigate(link)}>
        {props.title}
      </button>
    );
  }

  // External
  if (props.link) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    );
  }

  return (
    <Link to={props.relativeNavItem && `${link}` || `/${link}`} sx={{'&hover':{div: {display: 'inline-block'}}}}>
      {props.title}
      {props.subnav ? <Subnav subNav= {props.subnav} /> : null}
    </Link>
  );
};

export default CTALink;
