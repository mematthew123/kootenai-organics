import { useInView } from "framer-motion";
import { useRef } from "react";

type SectionUpProps = {
  children: any;
};

export default function SectionUp({ children }: SectionUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s  0.5s",
        }}
        className=" mx-auto flex flex-col justify-center overflow-hidden"
      >
        {children}
      </span>
    </section>
  );
}
