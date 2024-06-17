export interface PageInfo {
  page: string;
  destination: string;
}

export default function RedirectTo({ page, destination }: PageInfo) {
  return (
    <div className="flex flex-col items-center justify-center">
      <a
        href={destination}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:underline decoration-orange-300"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold text-center inline-block transition-transform group-hover:translate-y-1 group-hover:underline decoration-orange-300 motion-reduce:transform-none">
          {page}{" "}
        </h2>
      </a>
    </div>
  );
}
