const axiosInstance = require("../middleware/axios");

async function delivery(date) {
  try {
    const response = await axiosInstance.get(
      `/insight/message/delivery?date={${date}}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}

async function followers(date) {
  try {
    const response = await axiosInstance.get(
      `/insight/followers?date={${date}}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}
async function demographic() {
  try {
    const response = await axiosInstance.get("/insight/demographic");
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}
async function aggregationInfo() {
  try {
    const response = await axiosInstance.get("/message/aggregation/info");
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}
async function aggregationList() {
  try {
    const response = await axiosInstance.get("/message/aggregation/list");
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}

module.exports = {
  aggregationInfo,
  aggregationList,
  delivery,
  demographic,
  followers,
};
