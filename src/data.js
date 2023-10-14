import masageIcon from "./assets/masaje-facial.png";
import makeupIcon from "./assets/cambio-de-imagen.png";
import nailsIcon from "./assets/esmalte-de-unas.png";
import hairCutIcon from "./assets/corte-de-pelo.png";

import productOneIcon from "./assets/masaje.png";
import productTwoIcon from "./assets/mujer.png";
import productThreeIcon from "./assets/mujer (1).png";

import perfilOneIcon from "./assets/perfil1.png";
import perfilTwoIcon from "./assets/perfil1.png";
import perfilThreeIcon from "./assets/perfil1.png";
import perfilFourIcon from "./assets/perfil1.png";

export const heroTitle = "Deserunt";
export const heroSubtitle =
  "Aliquip cillum consectetur tempor proident duis commodo eu nulla eu commodo incididunt eu.";

export const services = [
  {
    title: "Masajes",
    subtitle: "Aliquip cillum",
    icon: masageIcon,
  },
  {
    title: "Maquillaje",
    subtitle: "Aliquip cillum",
    icon: makeupIcon,
  },
  {
    title: "Uñas",
    subtitle: "Aliquip cillum",
    icon: nailsIcon,
  },
  {
    title: "Cortes",
    subtitle: "Aliquip cillum",
    icon: hairCutIcon,
  },
];

export const productsTitle = "Precios populares";
export const productsBtnText = "Mira todos nuestros servicios";

export const products = [
  {
    title: "Masaje estetico",
    price: "$1000",
    img: productOneIcon,
  },
  {
    title: "Brushing",
    price: "$500",
    img: productTwoIcon,
  },
  {
    title: "Maquillaje social",
    price: "$1200",
    img: productThreeIcon,
  },
];

export const careTitle = "Nuestro";
export const careSubtitle = "Equipo";
export const careList = [
  {
    title: "Ana Echevarria",
    subtitle: "Masajista",
    img: perfilOneIcon,
  },
  {
    title: "Ana Echevarria",
    subtitle: "Masajista",
    img: perfilTwoIcon,
  },
  {
    title: "Ana Echevarria",
    subtitle: "Masajista",
    img: perfilThreeIcon,
  },
  {
    title: "Ana Echevarria",
    subtitle: "Masajista",
    img: perfilFourIcon,
  },
];

export const footerLinksColumnOne = [
  {
    title: "Contenido",
    links: ["Servicios", "Nosotras", "Precios"],
    img: productOneIcon,
  },
  {
    title: "Herramientas",
    links: ["APIs", "Google workspace"],
    img: productTwoIcon,
  },
];
export const footerLinksColumnTwo = [
  {
    title: "Ayuda",
    links: ["Soporte", "FAQs", "Licencia"],
    img: productOneIcon,
  },
  {
    title: "Company",
    links: ["Contacta", "Blog", "Planes"],
    img: productTwoIcon,
  },
];

export const newsletter = "Estetica movil";

export const contactTitle = "Agendate";

export const productsServices = [
  { name: "Semipermanente", price: 800.0 },
  { name: "Press on", price: 500.0 },
  { name: "Masaje", price: 800.0 },
  { name: "Masaje estetico", price: 1000.0 },
  { name: "Masaje terapeutico", price: 1000.0 },
  { name: "Peinado de novia", price: 1500.0 },
  { name: "Peinado de quince", price: 1500.0 },
  { name: "Peinado normal", price: 1200.0 },
  { name: "Brushing", price: 500.0 },
  { name: "Plancha", price: 500.0 },
  { name: "Ondas", price: 500.0 },
  { name: "Maquillaje de novia", price: 2000.0 },
  { name: "Maquillaje de quince", price: 2000.0 },
  { name: "Maquillaje social", price: 1200.0 },
];

export const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
