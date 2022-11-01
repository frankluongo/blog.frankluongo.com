import Link from "next/link";

export default function Home() {
  return (
    <div className="container blog">
      <h1>Welcome to the blog!</h1>
      <p>
        <Link href="/dropdown-menu">Read my first post here</Link>
      </p>
    </div>
  );
}
