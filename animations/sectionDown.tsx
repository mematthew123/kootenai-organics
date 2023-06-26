import { useInView } from "framer-motion";
import { useRef } from "react";

type SectionDownProps = {
  children: any;
};

export default function SectionDown({ children }: SectionDownProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(2000px)",
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
