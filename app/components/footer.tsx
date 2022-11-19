type FooterProps = {
  className?: string;
};

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer
      className={`pt-4 font-primary bg-black text-white dark:bg-white dark:text-black ${className}`}
      data-aos="fade-up"
    >
      <div className="container">
        <div className="min-h-1/2-screen flex flex-col md:flex-row items-center justify-center md:justify-end">
          <h3 className="text-2xl md:text-3xl lg:text-6xl text-left grayscale">
            let's work together.
          </h3>

          <a
            className="mx-auto relative mt-4 before:content-[' '] before:block before:opacity-80 before:text-gray-200 before:bg-gray-200 before:opacity-20 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4  before:hover:w-16 before:hover:h-16  before:hover:opacity-30 before:transition-all before:duration-400 hover:underline"
            href="mailto:thebao.dev@gmail.com"
            aria-label="talk to me by email"
          >
            <span className="relative z-10 text-xl">talk to me →</span>
          </a>
        </div>
      </div>
      <div className="flex items-center text-xs justify-start px-8 lg:px-20">
        <p className="ml-2">
          made with love by{' '}
          <a
            className="opacity-60 hover:opacity-30 transition-opacity"
            href="https://thebao.dev"
            target="_blank"
            rel="noreferrer"
          >
            bao
          </a>
        </p>
      </div>
    </footer>
  );
}
