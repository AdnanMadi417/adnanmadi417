"use client";

import Modal from "@/components/ui/Modal";

interface CVPreviewModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CVPreviewModal({ open, onClose }: CVPreviewModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <iframe src="/Adnan%20CV.pdf" width="100%" height="500px"></iframe>
    </Modal>
  );
}
