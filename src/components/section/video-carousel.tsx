import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";
import { Button } from "../button";
import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";

export const VideoCarousel = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });
  const [carouselVariant, setCarouselVariant] = useState<"active" | "inactive">(
    "inactive",
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  const maxiumumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maxiumumScale * 1.1, maxiumumScale, 1],
  );
  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0],
  );
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0],
  );

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-8">
      <div
        className="mt-[-100vh] h-[300vh] overflow-clip"
        ref={carouselWrapperRef}
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="left-1/2 mb-5 flex -translate-x-[22%] gap-5">
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXLeft }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full"
                src={movies[1].poster}
                alt={movies[1].name}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 flex w-full items-center justify-between p-5 text-lg text-white"
              >
                <p>Best video title ever</p>
                <Button>Watch now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXRight }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc(100vh-(60vw*(16/9)/2))] space-y-3"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:74s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move left-[var(--carousel-offset, 0px)] relative flex gap-3">
        {movies.map((movie, index) => (
          <div
            key={`${movie.name}-${index}`}
            className="aspect-video w-[23vw] shrink-0"
          >
            <img
              className="h-full w-full rounded-2xl object-cover"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
