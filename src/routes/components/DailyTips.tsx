import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function DailyTips() {
  return (
    <Carousel className="w-full max-w-lg ml-14">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center">
                <div className="space-y-2">
                  <h2 className="font-semibold text-md">💧 Stay Hydrated</h2>
                  <p className="text-sm">
                    Drink at least 8 glasses of water daily to maintain optimal
                    health
                  </p>
                </div>
                <Button variant="secondary">Read more</Button>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center">
                <div className="space-y-2">
                  <h2 className="font-semibold text-md">
                    🥦 Eat More Whole Foods
                  </h2>
                  <p className="text-sm">
                    Prioritize fruits, vegetables, nuts, and whole grains over
                    processed snacks. health
                  </p>
                </div>
                <Button variant="secondary">Read more</Button>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
