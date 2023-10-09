import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 relative",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    >
      {decorative && (
        <>
          <div
            className={cn(
              "bg-gray-500",
              orientation === "horizontal"
                ? "h-full w-1/2 left-1/2 transform -translate-x-1/2"
                : "w-full h-1/2 top-1/2 transform -translate-y-1/2",
              "absolute",
            )}
          ></div>
          <div
            className={cn(
              "bg-border rounded-full bg-gray-500",
              orientation === "horizontal"
                ? "h-[4px] w-[4px] left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
                : "w-[4px] h-[4px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
              "absolute",
            )}
          ></div>
        </>
      )}
    </SeparatorPrimitive.Root>
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
