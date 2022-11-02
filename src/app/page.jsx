import { Heading } from "./components/Heading";
import { InternalLink } from "./components/InternalLink";
import { Paragraph } from "./components/Paragraph";

export default function Home() {
  return (
    <div className="container blog">
      <Heading>Welcome to the blog!</Heading>
      <Paragraph>
        <InternalLink href="/dropdown-menu">
          Read my first post here
        </InternalLink>
      </Paragraph>
    </div>
  );
}
