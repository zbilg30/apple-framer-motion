import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Button: React.FC<Props> = ({
  children,
  size = "md",
  className,
}) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-5 py-3",
    lg: "text-lg px-12 py-5",
  };
  return (
    <button
      className={twMerge(
        "rounded-full bg-white text-textBlack",
        sizeClassNames[size],
        className,
      )}
    >
      {children}
    </button>
  );
};
