import development from "./development";
import staging from "./staging";
import production from "./production";
export default {development, staging, production}[process.env.NODE_ENV];
