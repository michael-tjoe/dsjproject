import Image from "next/image";
import Button from "@components/Button";

import type { BookData } from "@src/types";
import { styFeaturedBookWrapper } from "./styles";

interface FeaturedBookWidgetProps {
  book: BookData;
}

function FeaturedBookWidget({ book }: FeaturedBookWidgetProps) {
  const cover = book.cover_url;

  return (
    <section className={styFeaturedBookWrapper}>
      <div className="bg-circle" />
      <div className="book-cover">
        <Image alt="" src={cover} layout="fill" />
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
