import {
  Target,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Award,
  Dumbbell,
  UtensilsCrossed,
  Video,
  CalendarCheck,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  Target,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Award,
  Dumbbell,
  UtensilsCrossed,
  Video,
  CalendarCheck,
  BrainCircuit,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
