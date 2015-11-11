export class Session {
  static authToken = null

  static get isSignedIn() {
    return Session.authToken !== null;
  }

  static signIn(authToken) {
    Session.authToken = authToken;
  }

  static signOut() {
    Session.authToken = null;
  }

  static requireSignIn(nextState, replaceState) {
    if (!Session.isSignedIn) {
      replaceState(null, "/sign-in");
    }
  }

  static requireSignOut(nextState, replaceState) {
    if (Session.isSignedIn) {
      replaceState(null, "/sign-out");
    }
  }

  constructor() {
    throw new Error("Static class cannot be instantiated.");
  }
}
