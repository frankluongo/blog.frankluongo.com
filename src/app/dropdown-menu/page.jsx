import { css, html, javascript, title } from "./content";

const DropdownMenu = () => {
  return (
    <>
      <div className="container blog block-gap:2">
        <header>
          <h1>{title}</h1>
        </header>
        <section>
          <p>
            So, let&apos;s say you&apos;re working within a framework, like
            WordPress, and you don&apos; have great access to some generated
            code. Here&apos;s how you might work around that to implement some
            nifty dropdown menus.
          </p>
          <p>
            <a
              href="https://github.com/frankluongo/vanilla-component-library/tree/main/src/dropdown"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code on GitHub.
            </a>
          </p>
        </section>
        <section>
          <h2>The HTML</h2>
          <p>
            <a
              href="https://github.com/frankluongo/vanilla-component-library/blob/main/src/dropdown/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              View HTML on GitHub.
            </a>
          </p>
          <pre>{html}</pre>
        </section>
        <section>
          <h2>The CSS</h2>
          <p>
            We need to make sure the the <code>.menu-item</code> has a relative
            position and make sure we show our <code>.sub-menu</code> when{" "}
            <code>aria-active</code> is <code>true</code>
          </p>
          <p>We&apos;ll handle setting that up via JavaScript.</p>
          <pre>{css}</pre>
        </section>
        <section>
          <h2>The JavaScript</h2>
          <h3>Dropdowns</h3>
          <p>
            <a
              href="https://github.com/frankluongo/vanilla-component-library/blob/main/src/dropdown/app.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full file on GitHub.
            </a>
          </p>
          <p>
            First, we need to check for out <code>data-dropdown</code>{" "}
            element(s) to see if the exist.
          </p>
          <p>
            If they don&apos;t, we return early. Otherwise, we get each of our{" "}
            <code>data-dropdown</code> elements and pass them to our{" "}
            <code>Dropdown</code> function.
          </p>
          <pre>{javascript.dropdowns}</pre>
        </section>
        <section>
          <h3>
            The <code>Dropdown</code> Function
          </h3>
          <p>
            This function gets every HTML element we expect to have a dropdown
            menu, and passes them to our <code>DropdownElement</code> function
            where we can <em>finally</em> get to work!
          </p>
          <pre>{javascript.dropdown}</pre>
        </section>
        <section>
          <h3>
            The <code>DropdownElement</code> Function
          </h3>
          <p>
            This function listens for when the <code>parent</code> of the
            submenu is <code>focus</code>&apos;ed, <code>hover</code>&apos;ed,{" "}
            <code>touch</code>&apos;ed, or <code>click</code>&apos;ed and reacts
            accordingly.
          </p>
          <pre>{javascript.dropdownElement}</pre>
        </section>
      </div>
    </>
  );
};

export default DropdownMenu;
