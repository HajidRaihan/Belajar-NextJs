import { notFound } from "../../../../node_modules/next/navigation";

type DocsProps = {
  params: {
    slug: string[];
  };
};

export default function Docs({ params }: DocsProps) {
  if (params.slug?.length === 2) {
    return (
      <p>
        this is docs feature {params.slug[0]}, concept {params.slug[1]}
      </p>
    );
  }
  if (params.slug?.length === 1) {
    return <p>feature {params.slug[0]}</p>;
  }
  if (params.slug?.length === 3) {
    return notFound();
  }
  return (
    <div>
      <p>this is docs file</p>
    </div>
  );
}
