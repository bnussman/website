import Link from "next/link";
import { Arrow } from "./Arrow";

interface Props {
  href: string;
  label: string;
}

export function LinkItem(props: Props) {
  return (
    <div className="flex flex-row gap-2 items-center hover:underline">
      <Arrow />
      <Link href={props.href} target="_blank">
        {props.label}
      </Link>
    </div>
  );
}
