import { Code } from "#components/Code";
import { CodeBlock } from "#components/CodeBlock";
import { Paragraph } from "#components/Paragraph";

import { css, html, javascript, title } from "./content";

const DropdownMenu = () => {
  return (
    <div className="container blog block-gap:2">
      <header>
        <h1>{title}</h1>
      </header>
      <section>
        <Paragraph>
          So, let&apos;s say you&apos;re working within a framework, like
          WordPress, and you don&apos; have great access to some generated code.
          Here&apos;s how you might work around that to implement some nifty
          dropdown menus.
        </Paragraph>
        <Paragraph>
          <a
            href="https://github.com/frankluongo/vanilla-component-library/tree/main/src/dropdown"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code on GitHub.
          </a>
        </Paragraph>
      </section>
      <section>
        <h2>The HTML</h2>
        <Paragraph>
          <a
            href="https://github.com/frankluongo/vanilla-component-library/blob/main/src/dropdown/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            View HTML on GitHub.
          </a>
        </Paragraph>
        <CodeBlock>{html}</CodeBlock>
      </section>
      <section>
        <h2>The CSS</h2>
        <Paragraph>
          We need to make sure the the <Code>.menu-item</Code> has a relative
          position and make sure we show our <Code>.sub-menu</Code> when{" "}
          <Code>aria-active</Code> is <Code>true</Code>
        </Paragraph>
        <Paragraph>We&apos;ll handle setting that up via JavaScript.</Paragraph>
        <CodeBlock>{css}</CodeBlock>
      </section>
      <section>
        <h2>The JavaScript</h2>
        <h3>Dropdowns</h3>
        <Paragraph>
          <a
            href="https://github.com/frankluongo/vanilla-component-library/blob/main/src/dropdown/app.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full file on GitHub.
          </a>
        </Paragraph>
        <Paragraph>
          First, we need to check for out <Code>data-dropdown</Code> element(s)
          to see if the exist.
        </Paragraph>
        <Paragraph>
          If they don&apos;t, we return early. Otherwise, we get each of our{" "}
          <Code>data-dropdown</Code> elements and pass them to our{" "}
          <Code>Dropdown</Code> function.
        </Paragraph>
        <CodeBlock>{javascript.dropdowns}</CodeBlock>
      </section>
      <section>
        <h3>
          The <Code>Dropdown</Code> Function
        </h3>
        <Paragraph>
          This function gets every HTML element we expect to have a dropdown
          menu, and passes them to our <Code>DropdownElement</Code> function
          where we can <em>finally</em> get to work!
        </Paragraph>
        <CodeBlock>{javascript.dropdown}</CodeBlock>
      </section>
      <section>
        <h3>
          The <Code>DropdownElement</Code> Function
        </h3>
        <Paragraph>
          This function listens for when the <Code>parent</Code> of the submenu
          is <Code>focus</Code>&apos;ed, <Code>hover</Code>&apos;ed,{" "}
          <Code>touch</Code>&apos;ed, or <Code>click</Code>&apos;ed and reacts
          accordingly.
        </Paragraph>
        <CodeBlock>{javascript.dropdownElement}</CodeBlock>
      </section>
    </div>
  );
};

export default DropdownMenu;
