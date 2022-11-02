import { Code } from "#components/Code";
import { CodeBlock } from "#components/CodeBlock";
import { Heading } from "#components/Heading";
import { Paragraph } from "#components/Paragraph";
import { ExternalLink } from "../../components/ExternalLink";

import { css, html, javascript, title } from "./content";

const DropdownMenu = () => {
  return (
    <div className="container blog block-gap:2">
      <header>
        <Heading>{title}</Heading>
      </header>
      <section>
        <Paragraph>
          So, let&apos;s say you&apos;re working within a framework, like
          WordPress, and you don&apos;t have great access to the generated code.
          Here&apos;s how you might work around that to implement some nifty
          dropdown menus.
        </Paragraph>
        <Paragraph>
          <ExternalLink href="https://github.com/frankluongo/vanilla-component-library/tree/main/src/dropdown">
            View Source Code on GitHub.
          </ExternalLink>
        </Paragraph>
      </section>
      <section>
        <Heading size={2}>The HTML</Heading>
        <Paragraph>
          <ExternalLink href="https://github.com/frankluongo/vanilla-component-library/blob/main/src/dropdown/index.html">
            View HTML on GitHub.
          </ExternalLink>
        </Paragraph>
        <CodeBlock>{html}</CodeBlock>
      </section>
      <section>
        <Heading size={2}>The CSS</Heading>
        <Paragraph>
          We need to make sure the the <Code>.menu-item</Code> has a relative
          position and make sure we show our <Code>.sub-menu</Code> when{" "}
          <Code>aria-active</Code> is <Code>true</Code>
        </Paragraph>
        <Paragraph>We&apos;ll handle setting that up via JavaScript.</Paragraph>
        <CodeBlock>{css}</CodeBlock>
      </section>
      <section>
        <Heading size={2}>The JavaScript</Heading>
        <Heading size={3}>Dropdowns</Heading>
        <Paragraph>
          <ExternalLink href="https://github.com/frankluongo/vanilla-component-library/blob/main/src/dropdown/app.js">
            Full file on GitHub.
          </ExternalLink>
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
        <Heading size={3}>
          The <Code>Dropdown</Code> Function
        </Heading>
        <Paragraph>
          This function gets every HTML element we expect to have a dropdown
          menu, and passes them to our <Code>DropdownElement</Code> function
          where we can <em>finally</em> get to work!
        </Paragraph>
        <CodeBlock>{javascript.dropdown}</CodeBlock>
      </section>
      <section>
        <Heading size={3}>
          The <Code>DropdownElement</Code> Function
        </Heading>
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
