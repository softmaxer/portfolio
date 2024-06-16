export interface PageInfo {
  page: string;
  destination: string;
}

export default function RedirectTo({ page, destination }: PageInfo) {
  return (
    <div className="flex flex-col items-center justify-center">
      <a
        href={destination}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold text-center">
          {page}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </a>
    </div>
  );
}
