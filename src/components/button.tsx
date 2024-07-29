import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export const Button: React.FC<Props> = ({ children, size = "md" }) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-5 py-3",
    lg: "text-lg px-8 py-5",
  };
  return (
    <button
      className={twMerge(
        "text-textBlack rounded-full bg-white",
        sizeClassNames[size],
      )}
    >
      {children}
    </button>
  );
};
