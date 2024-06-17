export interface ProfileProps {
  action: string;
  path: string;
}

export default function ProfileButton({ action, path }: ProfileProps) {
  return (
    <p className="text-orange-300 dark:text-orange-400">
      <a
        href={path}
        className="inline-flex items-center font-medium text-white hover:underline transition-all"
      >
        {action}
        <svg
          className="w-4 h-4 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="#FDBA74"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </p>
  );
}
