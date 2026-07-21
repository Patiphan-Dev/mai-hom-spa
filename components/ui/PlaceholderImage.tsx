const GRADIENTS: Record<string, string> = {
  "warm-1": "from-terracotta/70 via-cream-deep to-moss/40",
  "warm-2": "from-moss/60 via-cream-deep to-terracotta/40",
  "warm-3": "from-gold/60 via-cream-deep to-terracotta/50",
  "warm-4": "from-terracotta/60 via-cream-deep to-gold/40",
  "warm-5": "from-moss/70 via-cream-deep to-gold/30",
  "warm-6": "from-gold/50 via-cream-deep to-moss/50",
  "warm-7": "from-terracotta/50 via-cream-deep to-moss/60",
  "warm-8": "from-moss/50 via-cream-deep to-terracotta/60",
};

interface PlaceholderImageProps {
  id: string;
  caption?: string;
  className?: string;
  rounded?: string;
}

export function PlaceholderImage({
  id,
  caption,
  className = "",
  rounded = "rounded-2xl",
}: PlaceholderImageProps) {
  const gradient = GRADIENTS[id] ?? GRADIENTS["warm-1"];

  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br ${gradient} ${rounded} ${className}`}
    >
      <div className="absolute inset-0 bg-organic-texture opacity-60" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(58,50,44,0.06) 0px, rgba(58,50,44,0.06) 2px, transparent 2px, transparent 12px)",
        }}
      />
      {caption ? (
        <p className="relative z-10 p-4 text-sm font-medium text-charcoal/80">{caption}</p>
      ) : null}
    </div>
  );
}
