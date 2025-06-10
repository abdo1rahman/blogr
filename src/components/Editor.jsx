export default function Editor({ windowWidth }) {
  return (
    <div className="editor">
      <h2 className="editor__title">Designed for the future</h2>
      <div className="editor__details">
        {windowWidth <= 590 && (
          <div className="mobile-visual">
            <img
              src="/images/illustration-editor-mobile.svg"
              className="editor-visual-mb"
            />
          </div>
        )}
        <div className="details__descreption">
          <div>
            <h3 className="details__title">Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>

          <div>
            <h3 className="details__title">Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>

        {windowWidth > 590 && (
          <div className="details__visual">
            <img src="/images/editor-screen.svg" className="editor-screen" />
            <img
              src="/images/editor-circles.svg"
              className="editor-circles self-orbit"
            />
          </div>
        )}
      </div>
    </div>
  );
}
