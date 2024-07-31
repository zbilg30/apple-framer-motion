import { Button } from "../button";
import { Container } from "../container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <div className="relative bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="o absolute left-0 top-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/img/apple-tv-rebuild/napoleon.webp"
          alt="Napolean"
        />
      </motion.div>
      <Container className="relative z-10 flex min-h-[--hero-height] flex-col items-start justify-end pb-7">
        <motion.div
          className="flex flex-col items-start justify-end"
          whileInView={"visible"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          exit={"hidden"}
          animate={"hidden"}
          viewport={{ amount: 0.9 }}
        >
          <h1 className="text-5xl font-bold">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button className="mb-16" size="lg">
            Large button
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
