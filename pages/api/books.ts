import fetch from "node-fetch";

const API_URL =
  "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books";

export default async function handler(req, res) {
  const queryParams = new URLSearchParams(req.query).toString();

  const response = await fetch(`${API_URL}?${queryParams}`);
  const booksData = await response.json();

  res.json(booksData);
}
