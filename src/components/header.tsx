import { Button } from "./button";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6"
          >
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast text-white">
        <Container className="flex min-h-11 items-center justify-between text-lg font-bold">
          Apple TV+
          <Button size="sm">Stream now</Button>
        </Container>
      </div>
    </>
  );
};
