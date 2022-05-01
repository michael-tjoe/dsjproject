import { BOOKS_API } from "@constants/api";
import Image from "next/image";
import useFetch from "@hooks/useFetch";
import { styFeaturedBookWrapper } from "./styles";
import Button from "@components/Button";

function FeaturedBookWidget() {
  const { isLoading, data } = useFetch(`${BOOKS_API}?categoryId=1&size=1`);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const bookData = data?.[0] || {};
  const bookCover = bookData?.cover_url || "";

  return (
    <section className={styFeaturedBookWrapper}>
      <div className="bg-circle" />
      <div className="book-cover">
        {bookCover && <Image alt="" src={bookCover} layout="fill" />}
      </div>

      <div className="book-info">
        <p>
          Wanna create mind-blowing content? <br />
          Here are all the tips and tricks you need to know!
        </p>
        <div className="cta">
          <Button primary>Read Now</Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBookWidget;
