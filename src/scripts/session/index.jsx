export SignIn from "./sign-in";
export SignOut from "./sign-out";

export default class Session {
  static get data() {
    return JSON.parse(localStorage.getItem("session"));
  }

  static get isSignedIn() {
    return Session.data && Session.data.token;
  }

  static signIn(token) {
    localStorage.setItem("session", JSON.stringify({ token }));
  }

  static signOut() {
    localStorage.removeItem("session");
  }

  static requireSignIn(nextState, replace) {
    Session.isSignedIn || replace("/sign-in");
  }

  static requireSignOut(nextState, replace) {
    Session.isSignedIn && replace("/sign-out");
  }

  static determineRootRoute(nextState, replace) {
    Session.isSignedIn ? replace("/dashboard") : replace("/welcome");
  }
}
