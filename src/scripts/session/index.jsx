import React from "react";

export const SESSION = { authToken: null };

// An ES7 decorator that enforces sign-in for a specified route handler.
export function isSignedIn(target) {
  if (!(target.prototype instanceof React.Component)) {
    throw new Error("Specified target is not a React component.");
  }

  target.willTransitionTo = transition => {
    if (!SESSION.authToken) {
      transition.redirect("/sign-in");
    }
  };
}

// An ES7 decorator that enforces sign-out for a specified route handler.
export function isSignedOut(target) {
  if (!(target.prototype instanceof React.Component)) {
    throw new Error("Specified target is not a React component.");
  }

  target.willTransitionTo = transition => {
    if (SESSION.authToken) {
      transition.redirect("/sign-out");
    }
  };
}
