import React from "react";

export default function Link({ to, children, ...props }) {
  function navigate(event) {
    props.onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (props.target && props.target !== "_self") ||
      props.download != null
    )
      return;
    const url = new URL(to, window.location.href);
    if (url.origin !== window.location.origin) return;
    event.preventDefault();
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
  return (
    <a {...props} href={to} onClick={navigate}>
      {children}
    </a>
  );
}
