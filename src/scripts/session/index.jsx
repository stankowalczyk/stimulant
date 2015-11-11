import React from "react";

export const SESSION = { authToken: null };

export function requireSignIn(nextState, replaceState) {
  if (!SESSION.authToken) {
    replaceState(null, "/sign-in")
  }
}

export function requireSignOut(nextState, replaceState) {
  if (SESSION.authToken) {
    replaceState(null, "/sign-out")
  }
}
