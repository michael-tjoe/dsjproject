import fetch from "node-fetch";

const API_URL =
  "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories";

export default async function handler(req, res) {
  const response = await fetch(API_URL);
  const categoriesData = await response.json();

  res.json(categoriesData);
}
