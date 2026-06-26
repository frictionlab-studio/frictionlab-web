// JsonLd — renders one or more schema.org objects as a JSON-LD script tag.
// Server component; safe because the data is serialized, not user HTML.

type JsonLdProps = {
  // A single schema object or an array of them.
  data: object | object[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline as structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
