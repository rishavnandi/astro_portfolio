export default {
  title: "Rishav Nandi",
  titleTemplate: "%s - Portfolio",
  description: "My personal website - rishavnandi",
  defaultTitle: "Rishav Nandi",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/images/pic.jpg",
    },
    {
      rel: "preload",
      href: "/fonts/Satoshi.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/CascadiaCode.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rishavnandi.com/",
    site_name: "Rishav Nandi",
    images: [
      {
        url: "https://www.rishavnandi.com/images/og_image.png",
        alt: "Rishav Nandi",
      },
    ],
  },
  twitter: {
    handle: "@rishav_nandi",
    site: "@rishav_nandi",
    cardType: "summary_large_image",
  },
};
