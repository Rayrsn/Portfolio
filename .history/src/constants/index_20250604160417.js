import { label } from "three/tsl";

   const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];




 const words=[
    {text: 'Ideas', imgPath: '/image/ideas.svg'},
    {text: 'Concepts', imgPath: '/image/concepts.svg'},
    {text: 'Design', imgPath: '/image/design.svg'},
    {text: 'Code', imgPath: '/image/code.svg'},
    {text: 'Ideas', imgPath: '/image/ideas.svg'},
    {text: 'Concepts', imgPath: '/image/concepts.svg'},
    {text: 'Design', imgPath: '/image/design.svg'},
    {text: 'Code', imgPath: '/image/code.svg'},

  ];


  const counterItems=[
    {value:15 , suffix: "+", label: "Year of Experience"},
    {value:30 , suffix: "+", label: "Satisfied Clients"},
    {value:20 , suffix: "+", label: "Projects Completed"},
    {value:45, suffix: "%", label: "Client Retention Rate" },
  ];


   const logoIconsList = [
    {
      imgPath: "/image/logos/company-logo-1.png",
    },
    {
      imgPath: "/image/logos/company-logo-2.png",
    },
    {
      imgPath: "/image/logos/company-logo-3.png",
    },
    {
      imgPath: "/image/logos/company-logo-4.png",
    },
    {
      imgPath: "/image/logos/company-logo-5.png",
    },
    {
      imgPath: "/image/logos/company-logo-6.png",
    },
    {
      imgPath: "/image/logos/company-logo-7.png",
    },
    {
      imgPath: "/image/logos/company-logo-8.png",
    },
    {
      imgPath: "/image/logos/company-logo-9.png",
    },
    {
      imgPath: "/image/logos/company-logo-10.png",
    },
    {
      imgPath: "/image/logos/company-logo-11.png",
    },
  ];

   const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];


  export{
    navLinks, 
    words,
    counterItems,
    logoIconsList,
    abilities
  };