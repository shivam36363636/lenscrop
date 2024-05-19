import Link from "next/link";
import Heading from "./Heading";
import WidthWrapper from "./WidthWrapper";

const blogs: BlogCardProps[] = [
  {
    cardColor: "green",
    topHead: "NEW",
    title: "How AI is Revolutionizing Your Shopping Experience",
    content: `From personalized recommendations to frictionless checkout, AI is transforming the way you shop.Discover the future of retail and how AI is making shopping faster, easier, and more enjoyable....`,
  },
  {
    cardColor: "yellow",
    topHead: "May 8, 2024",
    title: "Generative AI",
    content: `In today&apos;s data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....`,
  },
  {
    cardColor: "red",
    topHead: "April 25, 2024",
    title: "The Evolution of AI in Games",
    content: `The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...`,
  },
];

export default function Blogs() {
  return (
    <div>
      <WidthWrapper>
        <div className="flex flex-col items-center gap-10">
          <Heading gap={2}>OUR BLOGS</Heading>
          <p className="text-5xl max-[900px]:text-2xl text-center">
            Inhouse Mindscape
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-14 max-[660px]:grid-cols-1">
          {blogs.map((blog, index) => (
            <BlogCard {...blog} key={index} />
          ))}
        </div>
      </WidthWrapper>
    </div>
  );
}

type BlogCardProps = {
  topHead: string;
  title: string;
  content: string;
  cardColor: "green" | "yellow" | "red";
};
function BlogCard({ cardColor, content, title, topHead }: BlogCardProps) {
  const tailwindColor = {
    green: "bg-green-200",
    yellow: "bg-yellow-100",
    red: "bg-red-200",
  };
  return (
    <div
      className={`shadow-xl group rounded-lg p-5 pb-14 overflow-hidden relative `}
    >
      <div className="flex h-full flex-col duration-300 transition-all group-hover:-translate-y-14 gap-6">
        <p>{topHead}</p>
        <h3 className="text-3xl mb-2">{title}</h3>
        <p
          className={`${tailwindColor[cardColor]} leading-7 flex-1 rounded-lg p-2 py-4`}
        >
          {content}
        </p>
      </div>
      <Link
        className="text-red-600 group-hover:block absolute bottom-8 left-5 hidden"
        href={"#"}
      >
        Read More...
      </Link>
    </div>
  );
}
