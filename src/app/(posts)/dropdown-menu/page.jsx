import { Code } from "#components/Code";
import { CodeBlock } from "#components/CodeBlock";

import { css, html, javascript, title } from "./content";

const DropdownMenu = () => {
  return (
    <div className="container blog block-gap:2">
      <header>
        <h1>{title}</h1>
      </header>
      <section>
        <p>
          So, let&apos;s say you&apos;re working within a framework, like
          WordCodeBlockss, and you don&apos; have great access to some generated
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
        <CodeBlock>{html}</CodeBlock>
      </section>
      <section>
        <h2>The CSS</h2>
        <p>
          We need to make sure the the <Code>.menu-item</Code> has a relative
          position and make sure we show our <Code>.sub-menu</Code> when{" "}
          <Code>aria-active</Code> is <Code>true</Code>
        </p>
        <p>We&apos;ll handle setting that up via JavaScript.</p>
        <CodeBlock>{css}</CodeBlock>
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
          First, we need to check for out <Code>data-dropdown</Code> element(s)
          to see if the exist.
        </p>
        <p>
          If they don&apos;t, we return early. Otherwise, we get each of our{" "}
          <Code>data-dropdown</Code> elements and pass them to our{" "}
          <Code>Dropdown</Code> function.
        </p>
        <CodeBlock>{javascript.dropdowns}</CodeBlock>
      </section>
      <section>
        <h3>
          The <Code>Dropdown</Code> Function
        </h3>
        <p>
          This function gets every HTML element we expect to have a dropdown
          menu, and passes them to our <Code>DropdownElement</Code> function
          where we can <em>finally</em> get to work!
        </p>
        <CodeBlock>{javascript.dropdown}</CodeBlock>
      </section>
      <section>
        <h3>
          The <Code>DropdownElement</Code> Function
        </h3>
        <p>
          This function listens for when the <Code>parent</Code> of the submenu
          is <Code>focus</Code>&apos;ed, <Code>hover</Code>&apos;ed,{" "}
          <Code>touch</Code>&apos;ed, or <Code>click</Code>&apos;ed and reacts
          accordingly.
        </p>
        <CodeBlock>{javascript.dropdownElement}</CodeBlock>
      </section>
    </div>
  );
};

export default DropdownMenu;
