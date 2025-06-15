export default function Features() {
  return (
    <div className="features">
      <div className="features__visual">
        <img
          src="/images/laptop.svg"
          alt="illustration laptop"
          className="laptop"
        />
        <img
          src="/images/editor-circles.svg"
          className="features-circles self-orbit"
        />
      </div>
      <div className="features__descreption">
        <h3>Free, open, simple</h3>
        <p>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h3>Powerful tooling</h3>
        <p>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  );
}
