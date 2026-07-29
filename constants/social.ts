export interface ContactInfo {
  platformName: string;
  platformIcon: string;
  platformAddress: string;
  displayText: string;
}

export const SOCIAL_LINKS: ContactInfo[] = [
  {
    platformName: "LinkedIn",
    platformIcon: "mdi:linkedin",
    platformAddress: "https://www.linkedin.com/in/adnan-madi417",
    displayText: "LinkedIn",
  },
  {
    platformName: "GitHub",
    platformIcon: "mdi:github",
    platformAddress: "https://github.com/Adnanmadi417",
    displayText: "GitHub",
  },
  {
    platformName: "Email",
    platformIcon: "mdi:email",
    platformAddress: "mailto:adnanmadi417@gmail.com",
    displayText: "Email",
  },
  {
    platformName: "Phone",
    platformIcon: "mdi:phone",
    platformAddress: "https://wa.me/+601170064361",
    displayText: "WhatsApp",
  },
];
