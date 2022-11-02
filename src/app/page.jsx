import { InternalLink } from "./components/InternalLink";

export default function Home() {
  return (
    <div className="container blog">
      <h1>Welcome to the blog!</h1>
      <p>
        <InternalLink href="/dropdown-menu">
          Read my first post here
        </InternalLink>
      </p>
    </div>
  );
}
