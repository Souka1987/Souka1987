import { THEMATIQUE_CONFIG } from "@/lib/data";
import type { Thematique } from "@/lib/types";

interface TagBadgeProps {
  thematique: Thematique;
  size?: "xs" | "sm" | "md";
  showDot?: boolean;
}

export function TagBadge({
  thematique,
  size = "sm",
  showDot = true,
}: TagBadgeProps) {
  const config = THEMATIQUE_CONFIG[thematique];

  const sizeClasses = {
    xs: "text-[9px] px-1.5 py-0.5 gap-1",
    sm: "text-[10px] px-2 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  return (
    <span
      className={`inline-flex items-center font-ui uppercase tracking-[0.15em] leading-none ${sizeClasses[size]}`}
      style={{
        color: config.color,
        border: `1px solid ${config.color}35`,
        backgroundColor: `${config.color}0D`,
      }}
    >
      {showDot && (
        <span
          className="rounded-full flex-shrink-0"
          style={{
            backgroundColor: config.color,
            width: size === "xs" ? "4px" : "5px",
            height: size === "xs" ? "4px" : "5px",
          }}
        />
      )}
      {config.label}
    </span>
  );
}
