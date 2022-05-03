import { tag1 } from "@styles/typography";
import { styFeedbackWrapper } from "./styles";

function Feedback() {
  return (
    <section className={styFeedbackWrapper}>
      <h1 className={tag1}>Feedback for book API</h1>
      <ul>
        <li>Add total data so we can count how many page for the book list</li>
        <li>Instead return 500, return empty array if we hit the API with invalid page</li>
        <li>Adding hasMore flag is nice (useful for infinite scrolling)</li>
        <li>Adding search feature</li>
        <li>Use GQL</li>
      </ul>
    </section>
  );
}

export default Feedback;
