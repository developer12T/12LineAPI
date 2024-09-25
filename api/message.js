const axiosInstance = require("../middleware/axios");

async function sendMessage(data) {
  try {
    const response = await axiosInstance.post("/message/push", {
      to: data.userID,
      messages: [
        {
          type: "text",
          text: data.message,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}

async function sendStickers(data) {
  try {
    const response = await axiosInstance.post("/message/push", {
      to: data.userID,
      messages: [
        {
          type: "sticker",
          packageId: "446",
          stickerId: "1988",
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}
async function sendVideo(data) {
  try {
    const response = await axiosInstance.post("/message/push", {
      to: data.userID,
      messages: [
        {
          type: "video",
          originalContentUrl: "https://example.com/original.mp4",
          previewImageUrl: "https://example.com/preview.jpg",
          trackingId: "track-id",
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}
async function sendAudio(data) {
  try {
    const response = await axiosInstance.post("/message/push", {
      to: data.userID,
      messages: [
        {
          type: "audio",
          originalContentUrl: "https://example.com/original.m4a",
          duration: 60000,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}
async function sendLocation(data) {
  try {
    const response = await axiosInstance.post("/message/push", {
      to: data.userID,
      messages: [
        {
          type: "location",
          title: "my location",
          address: "1-3 Kioicho, Chiyoda-ku, Tokyo, 102-8282, Japan",
          latitude: 35.67966,
          longitude: 139.73669,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order type:", error);
    throw error; // Re-throw the error if needed
  }
}

module.exports = {
  sendMessage,
  sendAudio,
  sendVideo,
  sendStickers,
  sendLocation,
};
