import { iconSize } from "../iconSize";

export default function SiteMasterIcon({
    strokeWidth,
    color = 'black',
    ...props
  }) {
    return (
        <svg
        id="fi_9384086"
        height={512}
        viewBox="0 0 24 24"
        width={512}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        {...props}
        style={{height:iconSize.size, width:iconSize.size}}

      >
        <path fill={color} stroke={color}  d="m20.473 16.253v-2.6a2.417 2.417 0 0 0 -2.413-2.417h-5.46v-3.489a2.727 2.727 0 1 0 -1.2 0v3.49h-5.455a2.42 2.42 0 0 0 -2.418 2.417v2.6a2.728 2.728 0 1 0 1.2 0v-2.6a1.22 1.22 0 0 1 1.218-1.218h5.455v3.816a2.727 2.727 0 1 0 1.2 0v-3.815h5.46a1.218 1.218 0 0 1 1.214 1.218v2.6a2.727 2.727 0 1 0 1.2 0zm-14.818 2.655a1.527 1.527 0 1 1 -1.527-1.527 1.529 1.529 0 0 1 1.527 1.527zm7.873 0a1.527 1.527 0 1 1 -1.528-1.527 1.53 1.53 0 0 1 1.527 1.527zm-1.528-12.289a1.528 1.528 0 1 1 1.527-1.527 1.529 1.529 0 0 1 -1.527 1.527zm7.873 13.817a1.528 1.528 0 1 1 1.527-1.528 1.53 1.53 0 0 1 -1.527 1.529z" />
      </svg>
    );
  }
  