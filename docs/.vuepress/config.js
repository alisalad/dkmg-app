module.exports = {
  title: "Dastuurka",
  description: "Jamhuuriyadda Federaalka ee Soomaaliya",
  description: "Jamhuuriyadda Federaalka ee Soomaaliya",

  //Displays options for langugaes
  locales: {
    "/": { lang: "Soomaali" },
    "/so/": { lang: "English" }
  },
  head: [["link", { rel: "icon", href: "/images/Somalia.png" }]],

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Dastuurka", link: "/dastuurka/" }
    ],

    sidebar: "auto"
  }
};
