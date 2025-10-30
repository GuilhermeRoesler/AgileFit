import { Card } from "@/components/ui/card";
import { icons, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  icon: IconName;
  title: string;
  description: string;
};

type FeatureGridProps = {
  items: FeatureItem[];
  variant?: "start" | "center";
};

const FeatureGrid = ({ items, variant = "start" }: FeatureGridProps) => {
  const centered = variant === "center";

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        centered ? "gap-8" : "gap-6",
      )}
    >
      {items.map((item) => {
        const Icon = icons[item.icon];
        return (
          <Card
            key={item.title}
            className={cn(
              "border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-glow)]",
              centered
                ? "flex flex-col items-center p-8 text-center hover:-translate-y-2"
                : "p-6 hover:-translate-y-1",
            )}
          >
            <div
              className={cn(
                "mb-4 flex items-center justify-center bg-linear-to-br from-primary to-primary-glow",
                centered ? "mb-6 h-16 w-16 rounded-full" : "h-12 w-12 rounded-lg",
              )}
            >
              <Icon
                className={cn(
                  "text-primary-foreground",
                  centered ? "h-8 w-8" : "h-6 w-6",
                )}
              />
            </div>
            <h3 className={cn("mb-2 font-bold", centered ? "mb-3 text-2xl" : "text-xl")}>
              {item.title}
            </h3>
            <p className="leading-relaxed text-muted-foreground">{item.description}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default FeatureGrid;
