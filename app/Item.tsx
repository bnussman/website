import Link from "next/link";

interface Props {
  title: string;
  icon?: React.ReactNode;
  link: string;
  description: string | React.ReactNode;
}

export function Item(props: Props) {
  return (
    <div>
      <div className="flex flow-row gap-2 items-center">
        <Link href={props.link} target="_blank" className="hover:underline">
          {props.title}
        </Link>
        {props.icon}
      </div>
      <div className="text-sm text-neutral-500">{props.description}</div>
    </div>
  );
}
