export interface ContactInfo {
  platformName: string;
  platformIcon: string;
  platformAddress: string;
  displayText: string;
}

export const WHATSAPP_LINK = "https://wa.me/+601170064361";
export const EMAIL = "adnanmadi417@gmail.com";
export const EMAIL_LINK = `mailto:${EMAIL}`;

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
    platformAddress: EMAIL_LINK,
    displayText: "Email",
  },
  {
    platformName: "Phone",
    platformIcon: "mdi:phone",
    platformAddress: WHATSAPP_LINK,
    displayText: "WhatsApp",
  },
];
