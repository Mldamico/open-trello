import mongoose from "mongoose";

const connection = {
  isConnected: 0,
};

export const connect = async () => {
  if (connection.isConnected) {
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return;
    }
    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL!);

  connection.isConnected = 1;
  console.log("Connected to mongoDB");
};

export const disconnect = async () => {
  if (connection.isConnected === 0) return;
  await mongoose.disconnect();
  console.log("Disconnected ");
};
