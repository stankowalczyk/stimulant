export const ENV = {
  development: {
    apiUrl: "http://localhost:3000"
  },
  staging: {
    apiUrl: "http://localhost:3001"
  },
  production: {
    apiUrl: "http://localhost:3002"
  }
}[process.env.NODE_ENV];
