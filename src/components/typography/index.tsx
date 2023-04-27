import React, { ReactNode } from "react";

import clsx from "clsx";

type Variant = "title" | "subtitle" | "default";

interface TypographyProps {
  variant: Variant;
  children: ReactNode;
  className?: string;
}

const Typography = ({
  variant = "default",
  children,
  className,
}: TypographyProps) => (
  <div
    className={clsx(
      {
        "text-l font-bold leading-6": variant === "title",
        "text-m font-bold leading-5": variant === "subtitle",
        "text-sm font-normal leading-4": variant === "default",
      },
      className
    )}
  >
    {children}
  </div>
);

export default Typography;
