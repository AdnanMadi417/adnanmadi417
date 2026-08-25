"use client";

import { useDisclosure } from "@/hooks/useDisclosure";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/buttons/Button";
import { Hero } from "@/components/ui/hero/Hero";
import CVPreviewModal from "./CVPreviewModal";

export default function Landing() {
  const { isOpen: isCvOpen, open: openCv, close: closeCv } = useDisclosure();

  return (
    <>
      <Hero
        id="landing"
        light
        headline={
          <>
            Building modern, scalable{" "}
            <span className="text-muted">software solutions end-to-end</span>
          </>
        }
        subheadline="Hi, I'm Adnan Madi — a Software Engineer focused on building fast, scalable, and reliable applications across the full stack."
        actions={
          <>
            <Button variant="primary" href={ROUTES.projects}>
              View My Work
            </Button>
            <Button variant="secondary" onClick={openCv}>
              View Resume
            </Button>
          </>
        }
      />
      <CVPreviewModal open={isCvOpen} onClose={closeCv} />
    </>
  );
}
