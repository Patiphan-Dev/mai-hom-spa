interface RatingStarsProps {
  rating: number;
  className?: string;
}

export function RatingStars({ rating, className = "" }: RatingStarsProps) {
  return (
    <div className={`flex gap-0.5 text-gold ${className}`} aria-label={`ให้คะแนน ${rating} จาก 5 ดาว`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
