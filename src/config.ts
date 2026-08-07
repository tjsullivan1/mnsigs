export const SITE = {
  title: "Greater Minnesota Alumni Chapter",
  shortTitle: "MN Sigs",
  description:
    "A chartered alumni chapter of the Sigma Chi Fraternity serving Greater Minnesota.",
  url: "https://mnsigs.com",
  founded: 2019,
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the Chapter", href: "/about" },
      { label: "Province Structure", href: "/about/province" },
    ],
  },
  { label: "Officers", href: "/officers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Bylaws", href: "/bylaws" },
  { label: "Contact", href: "/contact" },
] as const

export const MAILING_LIST_URL =
  "https://mailchi.mp/dbad76a77b1d/greater-minnesota-alumni-chapter-mailing-list"

export const DONATE_URL =
  "https://www.paypal.com/donate/?hosted_button_id=G6JF8K99ZSUN4"
