/* eslint-disable no-unused-vars */
import pb from "./pocketbase";

export const updatePb = async (data) => {
  const record = await pb
    .collection("TodayDoIt")
    .update("8d1w7trqhfflfr4", data);
};
