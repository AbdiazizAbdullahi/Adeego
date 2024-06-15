import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="flex flex-col gap-10 lg:min-h-96">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div>
            <Star className=" fill-DeepGreen stroke-DeepGreen" />
          </div>
        ))}
      </div>
      <p className="max-w-lg lg:text-l font-medium">{testimonial.message}</p>
      <p className=" font-bold">~ {testimonial.user}</p>
    </article>
  );
};

export default TestimonialCard;
