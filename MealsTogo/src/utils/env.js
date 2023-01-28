const liveHost = "";
const localHost = "http://127.0.0.1:5001/mealstogoudemy-5f42f/us-central1";
export const isDevelopment =
  process.env.NODE_ENV === "development" ? localHost : liveHost;
export const host = isDevelopment ? localHost : liveHost;
