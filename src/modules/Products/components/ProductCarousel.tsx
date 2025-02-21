import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductCarousel() {
  const images = [
    "https://aiworld-space.s3.ap-south-1.amazonaws.com/ashrafi-lights/IMG-20250221-WA0015.jpg",
    "https://aiworld-space.s3.ap-south-1.amazonaws.com/ashrafi-lights/IMG-20250221-WA0016.jpg",
    "https://aiworld-space.s3.ap-south-1.amazonaws.com/ashrafi-lights/IMG-20250221-WA0017.jpg",
    "https://aiworld-space.s3.ap-south-1.amazonaws.com/ashrafi-lights/IMG-20250221-WA0018.jpg",
    "https://aiworld-space.s3.ap-south-1.amazonaws.com/ashrafi-lights/IMG-20250221-WA0019.jpg",
  ];

  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-4"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="h-32 sm:h-40 md:h-48 lg:h-56 w-full object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
