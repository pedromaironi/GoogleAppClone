import React from "react";
import { config } from "../config";

export const useFetch =async  (search) => {
//   console.log(context);

  const { API_TOKEN, API_CONTEXT } = config;
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_TOKEN}&cx=${API_CONTEXT}&q=${search}`
  ).then((response) => response.json());

  return data;
};
