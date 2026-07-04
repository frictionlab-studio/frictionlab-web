// Markdown — a small, dependency-free renderer for the policy documents in
// content/. It handles the exact Markdown those files use: headings,
// paragraphs, unordered lists, inline **bold**, and soft line breaks.
// It does not rewrite the text — content renders verbatim, only styled.
import { Fragment, type ReactNode } from "react";

// Convert one line of text into React nodes, turning **bold** spans into
// <strong>. No other inline syntax appears in the policy files.
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  parts.forEach((part, index) => {
    if (!part) return;
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(
        <strong
          key={`${keyPrefix}-b-${index}`}
          className="font-semibold text-foreground"
        >
          {part.slice(2, -2)}
        </strong>,
      );
    } else {
      nodes.push(
        <Fragment key={`${keyPrefix}-t-${index}`}>{part}</Fragment>,
      );
    }
  });
  return nodes;
}

// Render a paragraph's lines, keeping single newlines as soft <br> breaks so
// blocks like the mailing address read as separate lines.
function renderParagraph(lines: string[], keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  lines.forEach((line, index) => {
    if (index > 0) nodes.push(<br key={`${keyPrefix}-br-${index}`} />);
    nodes.push(...renderInline(line, `${keyPrefix}-l-${index}`));
  });
  return nodes;
}

type MarkdownProps = { source: string };

export function Markdown({ source }: MarkdownProps) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let key = 0;

  // Emit any buffered paragraph lines as a <p>.
  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const current = paragraph;
    paragraph = [];
    const id = key++;
    blocks.push(
      <p key={`p-${id}`} className="mt-4 leading-7 text-muted">
        {renderParagraph(current, `p-${id}`)}
      </p>,
    );
  };

  // Emit any buffered list items as a <ul>.
  const flushList = () => {
    if (list.length === 0) return;
    const items = list;
    list = [];
    const id = key++;
    blocks.push(
      <ul
        key={`ul-${id}`}
        className="mt-4 list-disc space-y-2 pl-6 leading-7 text-muted"
      >
        {items.map((item, index) => (
          <li key={index}>{renderInline(item, `ul-${id}-${index}`)}</li>
        ))}
      </ul>,
    );
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.trim() === "") {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h3
          key={`h-${key++}`}
          className="mt-8 text-lg font-semibold text-foreground"
        >
          {renderInline(line.slice(4), `h3-${key}`)}
        </h3>,
      );
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h2
          key={`h-${key++}`}
          className="mt-10 text-xl font-semibold text-foreground"
        >
          {renderInline(line.slice(3), `h2-${key}`)}
        </h2>,
      );
      continue;
    }
    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h1
          key={`h-${key++}`}
          className="text-3xl font-bold leading-tight text-foreground sm:text-4xl"
        >
          {renderInline(line.slice(2), `h1-${key}`)}
        </h1>,
      );
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2));
      continue;
    }

    // Any other non-empty line is body text — buffer it into a paragraph.
    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return <div className="max-w-3xl">{blocks}</div>;
}
