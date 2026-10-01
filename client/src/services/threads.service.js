// import apiClient from "./apiClient";

// export async function getThreads() {
//   const res = await apiClient.get("/api/threads");
//   return res.data.threads;
// }

import apiClient from "./apiClient";

export const getThreads = async (page = 1) => {
  const res = await apiClient.get("/api/threads", {
    params: {
      page,
    },
  });

  return res.data;
};