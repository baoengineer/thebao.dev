type FooterProps = {
  className?: string;
};

export default function Footer({ className = '' }: FooterProps) {
  return (
    <section className={`py-10 md:py-20 ${className}`}>
      <div className="container">
        <div className="min-h-1/2-screen flex flex-col items-start md:items-center justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-6xl" data-aos="fade-up">
            let's work together.
          </h3>
            <p className="text-xl md:text-2xl lg:text-4xl" data-aos="fade-up">
            i'm available for freelance work.
          </p>
          <a
            className="mx-auto relative mt-14 before:content-[' '] before:block before:opacity-80 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4"
            href="mailto:thebao.dev@gmail.com"
            aria-label="talk to me by email"
            data-aos="fade-up"
          >
            <span className="relative z-10 text-xl">talk to me →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
