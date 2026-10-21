import Link from "next/link";

export default function NotFound() {
  return (
    <main className="legal-page container">
      <p className="legal-kicker">ANZO AI · 404</p>
      <h1>A small detour.</h1>
      <div className="legal-page__body">
        <p>
          We couldn’t find that page. Let’s get you back to a more useful place.
        </p>
        <Link className="button" href="/">
          Back to ANZO AI
        </Link>
      </div>
    </main>
  );
}
