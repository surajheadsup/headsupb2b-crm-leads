import { PiCommand, PiMagnifyingGlassBold } from "react-icons/pi";
import cn from "../../Utils/class-names";

export default function SearchTrigger({
  icon,
  className,
  placeholderClassName,
  ...props
}) {
  return (
    <button
      aria-label="Search"
      className={cn(
        "group inline-flex items-center focus:outline-none active:translate-y-px h-10 w-full max-w-sm rounded-lg border border-muted py-2 pe-2 ps-3.5 shadow-sm backdrop-blur-md transition-colors duration-200 hover:border-gray-900 hover:outline-double hover:outline-[0.5px] hover:outline-gray-900 focus-visible:border-gray-900 focus-visible:outline-double focus-visible:outline-[0.5px] focus-visible:outline-gray-900",
        className
      )}
      {...props}
    >
      {" "}
      {icon ? (
        icon
      ) : (
        <PiMagnifyingGlassBold className="magnifying-glass me-2 h-[18px] w-[18px]" />
      )}{" "}
      <span
        className={cn(
          "placeholder-text text-sm text-gray-600 group-hover:text-gray-900 inline-flex",
          placeholderClassName
        )}
      >
        {" "}
        Search page...{" "}
      </span>
      <span className="search-command ms-auto  items-center flex rounded-md bg-primary px-1.5 py-1 text-xs font-semibold text-primary-foreground justify-normal">
        <PiCommand strokeWidth={1.3} className="h-[15px] w-[15px]" />K
      </span>
    </button>
  );
}
