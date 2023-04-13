import { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ProductoCarrito } from "./ProductoCarrito";
import { NavBar } from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactos,
  productosAll,
} from "../store/slices/productos/productosSlice";
import { Producto } from "./Producto";
import { ModalProducto } from "./ModalProducto";
import "./css/Productos.css";

export const productosViewClientes = [
  {
    nombre: "Acidophilus Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379782/neolife/joxhmq6e8lg7ad3eku9a.webp",
    descripcion: [
      "Regula la actividad intestinal, promoviendo la salud del colon.",
      "Probióticos específicos para el intestino.",
      "° 5,000,000,000 de microorganismos “vivos” por cápsula.",
      "° Exclusivo Sistema de Protección Entérica “Gel-Gard” que lo protege contra los agresivos ácidos estomacales y asegura la mayor cantidad de bacterias vivas liberadas en el intestino.",
    ],
    precio: 1122,
  },
  {
    nombre: "ALL-C",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379792/neolife/v718glh0nmkbtkdsui6k.webp",
    descripcion:
      "° 4 naranjas en cada tableta. °Con rosa mosqueta y cereza acerola – las fuentes más ricas en vitamina C de la naturaleza. °Para obtener más apoyo para el sistema inmunológico, dientes y ojos saludables. °Una liberación sostenida a lo largo de 4 horas..",
    precio: 389,
  },
  {
    nombre: "All Natural Fiber",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379787/neolife/k1uqpps7yrapbrvhjlmy.webp",
    descripcion:
      "°La Neo-Polyfibra exclusiva ayuda a eliminar el colesterol sin quitarle nutrientes. ° Listo para mezclar en una agradable bebida o en tus recetas favoritas. Fórmula vegetariana. °Promueve la Regularidad. .",
    precio: 713,
  },
  {
    nombre: "Aloe Vera Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379819/neolife/yho2lgjpxldmhi5gltep.webp",
    descripcion:
      "°Mezcla especial de tés herbales. °Vitamina C para una contribución antioxidante añadida. °Endulzado de manera natural para un “límite glicémico” propicio tanto para obtener energía rápida como continua..",
    precio: 684,
  },
  {
    nombre: "Betagard",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379819/neolife/kyotaaxbgi7cpikfzs9r.webp",
    descripcion: [
      "Desarrollado por el mundialmente famoso toxicólogo, investigador y Miembro Fundador Emérito del SAB. El Dr. Arthur Furst.",
      "Basado en alimentos integrales. Antioxidantes, vitaminas y minerales para protegerse contra las toxinas ambientales.",
      "° Formulada específicamente para ayudar en la defensa de su cuerpo contra agentes nocivos en el aire, el agua y los alimentos.",
    ],
    precio: 714,
  },
  {
    nombre: "Beta-gest",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379819/neolife/utzl2esp5clsj8h4p6im.webp",
    descripcion:
      "°Ayuda a la acidez, gases e hinchazón ocasionales. °Restaura el ácido natural del estómago y los factores digestivos comprometidos por la edad o el estrés. °Ayuda a digerir los alimentos problemáticos, incluyendo los productos lácteos y las proteínas ..",
    precio: 480,
  },
  {
    nombre: "BG",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379818/neolife/ejwqliebskx4eg5cv5ey.webp",
    descripcion: [
      "°Puede ayudar a:",
      "1. Manejar la captación de la glucosa:",
      " 2. Optimizar la sensibilidad a la insulina",
      "3. Maximizar la función receptora de la insulina",
      "4. Maximizar la función pancreática normal para niveles sanos de insulina..",
    ],
    precio: 1103,
  },
  {
    nombre: "Bio-Tone NTS",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379772/neolife/zyvz3npulb0xhmor6t17.webp",
    descripcion: [
      "° Ayuda a la Retención muscular.",
      "° Ayuda a la Movilización de la grasa.",
      "° Respalda el desarrollo del tejido magro.",
      "° Ayuda a la Tonificación general del cuerpo.",
      "° Diseñado para trabajar mientras duerme.",
    ],
    precio: 811,
  },
  {
    nombre: "Carotenoid Complex",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379782/neolife/atzwubv2pk4nptccgdel.webp",
    descripcion: [
      "Mejora la función inmunológica general en un 37% en tan sólo 20 días.",
      "° Ayuda a reducir la oxidación del colesterol y promueve la salud cardíaca.",
      "° Ayuda a aumentar los niveles de antioxidantes en la sangre para la protección celular a largo plazo contra los daños de los radicales libres.",
    ],
    precio: 981,
  },
  {
    nombre: "CoQ10",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379792/neolife/ohimy2wwnpyibing5x71.webp",
    descripcion: [
      "Nutrición poderosa para:",
      "Promover energía celular mitocondrial.",
      "Apoyo en la salud cardiovascular (5,000 mitocondrias).",
      "Ayuda a reducir   el   dolor   muscular   y   la   sensibilidad.",
      "Apoya una visión y una audición saludables.",
      "Ayuda a disminuir las posibilidades de migraña.",
    ],
    precio: 930,
  },
  {
    nombre: "Cruciferous Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379813/neolife/qltwkwai6kf5mhe0mb7u.webp",
    descripcion: [
      "Ayuda a proteger y defiende las células y los tejidos.",
      "Ayuda a neutralizar las toxinas.",
      "Auxilia al estrógeno.",
    ],
    precio: 445,
  },
  {
    nombre: "Flavonoid Complex",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379812/neolife/mrxsuwbroyvokgndgptz.webp",
    descripcion: [
      "° Proporciona diversos fitonutrientes provenientes de frutas y verduras.",
      "° Potente protección antioxidante que ayuda a combatir a los radicales.",
    ],
    precio: 623,
  },
  {
    nombre: "Formula IV",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379813/neolife/c35uqsupf1sefpc1qsen.webp",
    descripcion:
      "°Amplia gama de minerales, vitaminas naturales A y D, las vitaminas del complejo B, vitamina C, bioflavonoides de cereza acerola y la familia completa de la Vitamina E. °Exclusiva Mezcla de fitoenzimas para una digestión fácil..",
    precio: 829,
  },
  {
    nombre: "Formula IV Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379817/neolife/jraamrff9nvdtojnjjjp.webp",
    descripcion:
      "°Fórmula libre de hierro. °Contribución adicional de minerales de selenio, cromo, molibdeno y 100% de CDR de zinc. °Enzimas exclusivas de origen vegetal apoyan la fácil digestión y absorción de los nutrientes.",
    precio: 857,
  },
  {
    nombre: "Full Motion",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379786/neolife/ohg4fa8kqsvsquqcorbg.webp",
    descripcion:
      "°Complejo Regenerativo Mineral, – ofrece una mezcla única de minerales clave para la salud de las articulaciones – zinc, boro y sílice. °Apoya la función saludable de la articulación y regenera el cartílago dañado o perdido. °Incrementa la capacidad aniinflamatoria natural del cuerpo..",
    precio: 456,
  },
  {
    nombre: "Garlic Allium Complex",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379784/neolife/bx0red9d0wnk0wkpmsjr.webp",
    descripcion:
      "°Ayuda a mantener niveles normales de colesterol y presión sanguínea. °Fomenta la circulación saludable y promueve la coagulación saludable. °Propiedades antimicrobianas naturales. °4,200 mcg de alicina del extracto puro de ajo en cada porción, con compuestos bioactivos de cebolla, cebollino y puerro..",
    precio: 460,
  },
  {
    nombre: "Lecithin",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379806/neolife/s8od3ycryyx1zmappa7o.webp",
    descripcion:
      "°Apoya funciones clave del cerebro incluyendo la memoria y el control muscular. °Asiste en el metabolismo de la grasa en el hígado y en el torrente sanguíneo..",
    precio: 558,
  },
  {
    nombre: "Lipotropic Adjunct",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379792/neolife/n3zfqexkv5v3bo2mmjnu.webp",
    descripcion:
      "°Ayuda a prevenir la oxidación del colesterol en placa. Evita las acumulación grasa en el hígado. °B6, B12 y acido fólico ayudan a reducir los niveles de homocisteína. °Bioflavonoides cítricos para contribuir a la salud de los vasos sanguíneos..",
    precio: 633,
  },
  {
    nombre: "Liqui-Vite",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379788/neolife/im0cpxylnlzek4nyekf7.webp",
    descripcion:
      "°Carotenoides para contribuir a la inmunidad. Tre-en-en para la energía celular. °Colina e inositol para contribuir al desarrollo cerebral. °Gran sabor cítrico, versátil –se mezcla fácilmente en otros líquidos..",
    precio: 624,
  },
  {
    nombre: "Magnesium Complex",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379820/neolife/yzkocr8npxvkfs2dlhia.webp",
    descripcion:
      "°Apoya la salud metabólica general a través de la regulación normal de la glucosa en sangre y los niveles hormonales equilibrados. °Ayuda a tener huesos y dientes fuertes. °Promueve la contracción y relajación muscular saludable. °Ayuda a prevenir calambres, debilidad muscular y problemas de coordinación asociados con bajos niveles de magnesio. °Ayuda a estimular el sistema inmune..",
    precio: 403,
  },
  {
    nombre: "NeoLifeShake",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379801/neolife/jj2kwjxcjn9zxmts4iz8.webp",
    descripcion:
      "°Tecnología de Control de la Respuesta Glicémica. Para ayudar a minimizar la acumulación de grasa y fomentar la quema de grasa. °BIOLÓGICAMENTE Completa con todos los 22 aminoácidos. Incluidos los 9 esenciales. °Que proporcionan energía duradera y animan a tu cuerpo a permanecer en una modalidad de la quema de grasas..",
    precio: 1108,
    sabores: [
      "NeoLifeShake Chocolate",
      "NeoLifeShake Frutos Rojos con Crema",
      "NeoLifeShake Mix",
      "NeoLifeShake Vainilla cremosa",
    ],
  },
  {
    nombre: "PhytoDefense",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379804/neolife/i1rezvupbh7usfzddvnm.webp",
    descripcion:
      "°Clínicamente demostrado en un estudio conducido por investigadores del USDA. 37% de aumento de la función inmunológica en tan sólo 20 días. COMBINANDO TRES NUTRICIONALES POTENTES Cada paquete conveniente ofrece: 3 cápsulas de Carotenoid Complex 2 tabletas de Flavonoid Complex 1 tableta de Cruciferous Plus.",
    precio: 1847,
  },
  {
    nombre: "Pro Vitality",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379795/neolife/qoib5f97wx6lxc9z0anc.webp",
    descripcion: [
      "CUATRO NUTRIENTES ESENCIALES: ",
      "°Tre-en-en °Carotenoid Complex  °Salmon oil plus °Complejo esencial de vitaminas y minerales",
      "Nutrientes potentes que contribuyen a:",
      "° Energía Abundante.",
      "° Protección Antioxidante Poderosa.",
      "° Bienestar Cardiaco.",
      "° Función Cerebral Saludable.",
      "° Articulaciones Saludables y visión clara.",
      "° Piel, Cabello y Uñas juveniles.",
      "° Función Genética Natural de Antienvejecimiento",
    ],
    precio: 1008,
  },
  {
    nombre: "Quelado Cal-Mag",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379801/neolife/jlizb1nga0i36u3fhozy.webp",
    descripcion:
      "°Proporciona vitamina D3, de forma fácilmente absorbible y altamente biodisponible. °Calcio farmacéuticamente puro, derivado de conchas marinas. °Está demostrado que pospone o previene el desarrollo de la osteoporosis. °Ayuda a la presión arterial normal,optimiza la función nerviosa y muscular.",
    precio: 700,
  },
  {
    nombre: "Salmon Oil Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379800/neolife/xg4bxxmyvj7y1hfcqihc.webp",
    descripcion:
      "Proporción de ácidos grasos omega-3 y omega-6 mejoría de un 43% en ocho semanas. °EQUILIBRA LA INFLAMACIÓN Promueve un equilibrio sano de factores pro y antiinflamatorios. Índice inflamatorio reducido en un 68% en tan sólo ocho semanas. Ayuda a la función cerebral. Ayuda al desarrollo fetal del cerebro y de los ojos. Promueve el equilibrio inflamatorio normal durante los días de actividad física..",
    precio: 669,
  },
  {
    nombre: "Super B",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379806/neolife/ccncor0l9gzuxtra67cp.webp",
    descripcion:
      "°Equilibrio perfecto de las 8 vitaminas del complejo B, además de inositol y colina. °Procedente de alimentos integrales únicamente. °Alta potencia – para un apoyo metabólico óptimo. °Controlado para la liberación sostenida de nutrientes del complejo B durante un período de seis horas. °Proporciona soporte metabólico máximo para ayudar a satisfacer las altas demandas de nutrientes durante el ejercicio y los períodos de estrés..",
    precio: 849,
  },
  {
    nombre: "Super C",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379778/neolife/qejrug8yerv5eoap5dhl.webp",
    descripcion:
      "°Sistema propio óptimo de liberación gradual asegurando la protección del nivel óptimo de nutrientes durante más de seis horas. °El poder de la Vitamina C de ocho naranjas en cada tableta. °Respalda el funcionamiento correcto del sistema inmunológico..",
    precio: 694,
  },
  {
    nombre: "Tré",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379777/neolife/zs7f6xpjupm3tkqsgzcc.webp",
    descripcion:
      "°Antioxidantes poderosos promueven la buena salud total. °Tré se extrae de un grupo selecto de entre las frutas más potentes y únicas de la naturaleza. La ciencia ha demostrado que los polifenoles desempeñan una amplia gama de funciones esenciales a la hora de contribuir y promover la salud, la longevidad y las funciones cognitivas. °Proporciona resveratrol, poder antioxidante y ácido alfa-lipóico.",
    precio: 1045,
  },
  {
    nombre: "Tre en en",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379767/neolife/iqyznekpstao4atbtpif.webp",
    descripcion: [
      "El primer y único suplemento en el mundo de lípidos y esteroles procedentes de granos integrales",
      "Se demostró que cuando Tre-en-en está presente en la dieta, mejoró el crecimiento y el desarrollo general, la eficiencia y utilización de los nutrientes y el desarrollo cardiovascular.",
      "° Mejora la energía y la vitalidad optimizando el funcionamiento de la membrana celular. Llena de energía todo el cuerpo, ayudando a las células a funcionar de manera más eficiente.",
    ],
    precio: 811,
  },
  {
    nombre: "Vegan D",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379777/neolife/vqngjmstyjbe3su5ptki.webp",
    descripcion:
      "La vitamina D ayuda a construir, mantener huesos, dientes y músculos fuertes, apoya la presión arterial normal y la función nerviosa, así como las defensas inmunes. • 100% vegano. Hecho completamente sin ingredientes de origen animal de ningún tipo, Vegan D cumple con los estrictos criterios de las fuentes que esperan los usuarios de suplementos vegetarianos/veganos..",
    precio: 397,
  },
  {
    nombre: "Vita-Gard",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379771/neolife/vwozcailhisbxvnmst1t.webp",
    descripcion:
      "°Zinc y selenio para maximizar las defensas de los niños de modo que se sientan de lo mejor. °Tabletas masticables con irresistible sabor a fruta. °Sin colorantes, sabores, edulcorantes, ni conservantes artificiales añadidos..",
    precio: 731,
  },
  {
    nombre: "Vitamin E plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379783/neolife/wyj6aw7gkljl7j7pej93.webp",
    descripcion: [
      "Ofrece las 8 formas de la vitamina E para una protección de amplio espectro",
      "° Ayuda a inhibir la oxidación del colesterol gracias a sus potentes efectos antioxidantes.",
      "° Mejora la función inmunológica, especialmente en los ancianos.",
      "° La tecnología innovadora miscible en agua mejora la absorción.",
      "° La vitamina E contribuye a la salud cardíaca, del cerebro y la próstata",
    ],
    precio: 1238,
  },
  {
    nombre: "Vita-Squares",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379768/neolife/felrmyxxzjcfouef0oia.webp",
    descripcion: [
      "Cargado con 18 vitaminas y minerales esenciales",
      "Proporciona nutrientes que promueven el crecimiento y el desarrollo saludable del cuerpo y la mente.",
      "° Mejorado con colina e inositol para una memoria óptima, aprendizaje y concentración.",
      "° Concentrado de granos Tre-en-en para la energía celular.",
      "° Sin colorantes, sabores, edulcorantes ni conservantes artificiales añadidos",
    ],
    precio: 498,
  },
  {
    nombre: "Zinc Quelado",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379777/neolife/tzxb5smx3furpurhzn4m.webp",
    descripcion:
      "°Contribuye a la salud de la visión y de la próstata. Mantiene su metabolismo trabajando al máximo. °Se ha demostrado que el Zinc mejora la memoria y la atención en los niños. °Quelados para una mayor absorción y suaves con tu sistema digestivo. °Zinc quelado para una mayor absorción y suave con tu sistema digestivo..",
    precio: 479,
  },
  {
    nombre: "Aloe Vera Gel",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379791/neolife/loomacocvrixd4olrrda.webp",
    descripcion: [
      "°El Gel de Aloe Vera de Nutriance contiene una rica combinación de aloe vera puro, manzanilla, tilo, aciano y extractos de hierba de San Juan, además de alantoína y caléndula para apoyar la renovación célular, tambiénDF contiene provitamina B5 (pantenol) para suavizar la piel y dar elasticidad. Clínicamente probado para hidratar, ayudar a calmar y reducir las molestias leves de la piel. También ayuda a la renovación de la misma.",
      "Fórmula única que se adapta a cada persona e interactúa con las feromonas naturales de su cuerpo mezclándose con su química personal para hacerse prácticamente imperceptible por la nariz. No entrará en conflicto con su delicado perfume o colonia favorita.",
    ],
    precio: 378,
  },
  {
    nombre: "Acondicionador Enriquecido",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379793/neolife/cyn2ptep2av2cy2flb6i.webp",
    descripcion:
      "°Enriching Conditioner te devuelve el cabello vibrante, tocable y manejable que amas aportando hidratación donde más se necesita. La ProVitamina B5 (Pantenol), el Extracto de Almendras Dulces y los acondicionadores hidratantes restauran el cuerpo y brillo saludables. Retiene la hidratación para un pelo vibrante y suave. Alisa el cabello sin apelmazarlo. Fortalece el cabello con ingredientes naturales..",
    precio: 303,
  },
  {
    nombre: "Shampoo Revitalizante Enriquecido",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379809/neolife/pqnqcmhudxk2dwcvv8je.webp",
    descripcion:
      "°Enjuaga las impurezas y añade luminosidad con el lujoso champú “Rich Revitalizing Shampoo” de Nutriance, de calidad de salón de belleza. Con Vitamina B3 y ProVitamina B5 (Pantenol), más una combinación selecta de ingredientes botánicos seleccionados para limpiar y nutrir efectivamente, además de agregar brillo, cuerpo y manejabilidad. Su cabello y cuero cabelludo se sentirán limpios y revitalizados cada vez que los mimes con esta fórmula limpiadora suave. Limpia suavemente, elimina la suciedad y los residuos de los productos de belleza. Aporta luminosidad natural, movimiento y brillo a tu cabello. Disfruta de un cabello suave, sedoso y manejable.",
    precio: 303,
  },
];

export const productosViewDistribuidores = [
  {
    nombre: "Acidophilus Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379782/neolife/joxhmq6e8lg7ad3eku9a.webp",
    descripcion: [
      "Regula la actividad intestinal, promoviendo la salud del colon.",
      "Probióticos específicos para el intestino.",
      "° 5,000,000,000 de microorganismos “vivos” por cápsula.",
      "° Exclusivo Sistema de Protección Entérica “Gel-Gard” que lo protege contra los agresivos ácidos estomacales y asegura la mayor cantidad de bacterias vivas liberadas en el intestino.",
    ],
    precio: 840,
    puntos: 32,
    caja: {
      precio: 4774,
      puntos: 192,
    },
  },
  {
    nombre: "ALL C",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379792/neolife/v718glh0nmkbtkdsui6k.webp",
    descripcion:
      "° 4 naranjas en cada tableta. °Con rosa mosqueta y cereza acerola – las fuentes más ricas en vitamina C de la naturaleza. °Para obtener más apoyo para el sistema inmunológico, dientes y ojos saludables. °Una liberación sostenida a lo largo de 4 horas..",
    precio: 293,
    puntos: 10,
    caja: {
      precio: 1663,
      puntos: 60,
    },
  },
  {
    nombre: "All Natural Fiber",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379787/neolife/k1uqpps7yrapbrvhjlmy.webp",
    descripcion:
      "°La Neo-Polyfibra exclusiva ayuda a eliminar el colesterol sin quitarle nutrientes. ° Listo para mezclar en una agradable bebida o en tus recetas favoritas. Fórmula vegetariana. °Promueve la Regularidad. .",
    precio: 537,
    puntos: 18,
    caja: {
      precio: 3039,
      puntos: 108,
    },
  },
  {
    nombre: "Aloe Vera Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379819/neolife/yho2lgjpxldmhi5gltep.webp",
    descripcion:
      "°Mezcla especial de tés herbales. °Vitamina C para una contribución antioxidante añadida. °Endulzado de manera natural para un “límite glicémico” propicio tanto para obtener energía rápida como continua..",
    precio: 515,
    puntos: 9,
    caja: {
      precio: 2930,
      puntos: 114,
    },
  },
  {
    nombre: "Betagard",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379819/neolife/kyotaaxbgi7cpikfzs9r.webp",
    descripcion: [
      "Desarrollado por el mundialmente famoso toxicólogo, investigador y Miembro Fundador Emérito del SAB. El Dr. Arthur Furst.",
      "Basado en alimentos integrales. Antioxidantes, vitaminas y minerales para protegerse contra las toxinas ambientales.",
      "° Formulada específicamente para ayudar en la defensa de su cuerpo contra agentes nocivos en el aire, el agua y los alimentos.",
    ],
    precio: 537,
    puntos: 21,
    caja: {
      precio: 3064,
      puntos: 126,
    },
  },
  {
    nombre: "Beta-Gest",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379819/neolife/utzl2esp5clsj8h4p6im.webp",
    descripcion:
      "°Ayuda a la acidez, gases e hinchazón ocasionales. °Restaura el ácido natural del estómago y los factores digestivos comprometidos por la edad o el estrés. °Ayuda a digerir los alimentos problemáticos, incluyendo los productos lácteos y las proteínas ..",
    precio: 359,
    puntos: 14,
    caja: {
      precio: 2054,
      puntos: 84,
    },
  },
  {
    nombre: "BG",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379818/neolife/ejwqliebskx4eg5cv5ey.webp",
    descripcion: [
      "°Puede ayudar a:",
      "1. Manejar la captación de la glucosa:",
      " 2. Optimizar la sensibilidad a la insulina",
      "3. Maximizar la función receptora de la insulina",
      "4. Maximizar la función pancreática normal para niveles sanos de insulina..",
    ],
    caja: {
      precio: 4702,
      puntos: 216,
    },
    precio: 1103,
  },
  {
    nombre: "Bio-Tone NTS",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379772/neolife/zyvz3npulb0xhmor6t17.webp",
    descripcion: [
      "° Ayuda a la Retención muscular.",
      "° Ayuda a la Movilización de la grasa.",
      "° Respalda el desarrollo del tejido magro.",
      "° Ayuda a la Tonificación general del cuerpo.",
      "° Diseñado para trabajar mientras duerme.",
    ],
    precio: 608,
    puntos: 27,
    caja: {
      precio: 3468,
      puntos: 162,
    },
  },
  {
    nombre: "Carotenoid Complex",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379782/neolife/atzwubv2pk4nptccgdel.webp",
    descripcion: [
      "Mejora la función inmunológica general en un 37% en tan sólo 20 días.",
      "° Ayuda a reducir la oxidación del colesterol y promueve la salud cardíaca.",
      "° Ayuda a aumentar los niveles de antioxidantes en la sangre para la protección celular a largo plazo contra los daños de los radicales libres.",
    ],
    precio: 737,
    puntos: 32,
    caja: {
      precio: 4192,
      puntos: 192,
    },
  },
  {
    nombre: "CoQ10",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379792/neolife/ohimy2wwnpyibing5x71.webp",
    descripcion: [
      "Nutrición poderosa para:",
      "Promover energía celular mitocondrial.",
      "Apoyo en la salud cardiovascular (5,000 mitocondrias).",
      "Ayuda a reducir   el   dolor   muscular   y   la   sensibilidad.",
      "Apoya una visión y una audición saludables.",
      "Ayuda a disminuir las posibilidades de migraña.",
    ],
    precio: 930,
    puntos: 34,
    caja: {
      precio: 3958,
      puntos: 204,
    },
  },
  {
    nombre: "Cruciferous Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379813/neolife/qltwkwai6kf5mhe0mb7u.webp",
    descripcion: [
      "Ayuda a proteger y defiende las células y los tejidos.",
      "Ayuda a neutralizar las toxinas.",
      "Auxilia al estrógeno.",
    ],
    precio: 336,
    puntos: 16,
    caja: {
      precio: 1908,
      puntos: 96,
    },
  },
  {
    nombre: "Flavonoid Complex",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379812/neolife/mrxsuwbroyvokgndgptz.webp",
    descripcion: [
      "° Proporciona diversos fitonutrientes provenientes de frutas y verduras.",
      "° Potente protección antioxidante que ayuda a combatir a los radicales.",
    ],
    precio: 469,
    puntos: 19,
    caja: {
      precio: 2662,
      puntos: 114,
    },
  },
  {
    nombre: "Formula IV",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379813/neolife/c35uqsupf1sefpc1qsen.webp",
    descripcion:
      "°Amplia gama de minerales, vitaminas naturales A y D, las vitaminas del complejo B, vitamina C, bioflavonoides de cereza acerola y la familia completa de la Vitamina E. °Exclusiva Mezcla de fitoenzimas para una digestión fácil..",
    precio: 627,
    puntos: 24,
    caja: {
      precio: 4553,
      puntos: 144,
    },
  },
  {
    nombre: "Formula IV Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379817/neolife/jraamrff9nvdtojnjjjp.webp",
    descripcion:
      "°Fórmula libre de hierro. °Contribución adicional de minerales de selenio, cromo, molibdeno y 100% de CDR de zinc. °Enzimas exclusivas de origen vegetal apoyan la fácil digestión y absorción de los nutrientes.",
    precio: 644,
    puntos: 24,
    caja: {
      precio: 3660,
      puntos: 144,
    },
  },
  {
    nombre: "Full Motion",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379786/neolife/ohg4fa8kqsvsquqcorbg.webp",
    descripcion:
      "°Complejo Regenerativo Mineral, – ofrece una mezcla única de minerales clave para la salud de las articulaciones – zinc, boro y sílice. °Apoya la función saludable de la articulación y regenera el cartílago dañado o perdido. °Incrementa la capacidad aniinflamatoria natural del cuerpo..",
    precio: 340,
    puntos: 14,
    caja: {
      precio: 1940,
      puntos: 84,
    },
  },
  {
    nombre: "Garlic Allium Complex",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379784/neolife/bx0red9d0wnk0wkpmsjr.webp",
    descripcion:
      "°Ayuda a mantener niveles normales de colesterol y presión sanguínea. °Fomenta la circulación saludable y promueve la coagulación saludable. °Propiedades antimicrobianas naturales. °4,200 mcg de alicina del extracto puro de ajo en cada porción, con compuestos bioactivos de cebolla, cebollino y puerro..",
    precio: 347,
    puntos: 14,
    caja: {
      precio: 1977,
      puntos: 84,
    },
  },
  {
    nombre: "Lecithin",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379806/neolife/s8od3ycryyx1zmappa7o.webp",
    descripcion:
      "°Apoya funciones clave del cerebro incluyendo la memoria y el control muscular. °Asiste en el metabolismo de la grasa en el hígado y en el torrente sanguíneo..",
    precio: 421,
    puntos: 14,
    caja: {
      precio: 2395,
      puntos: 84,
    },
  },
  {
    nombre: "Lipotropic Adjunct",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379792/neolife/n3zfqexkv5v3bo2mmjnu.webp",
    descripcion:
      "°Ayuda a prevenir la oxidación del colesterol en placa. Evita las acumulación grasa en el hígado. °B6, B12 y acido fólico ayudan a reducir los niveles de homocisteína. °Bioflavonoides cítricos para contribuir a la salud de los vasos sanguíneos..",
    precio: 474,
    puntos: 20,
    caja: {
      precio: 2713,
      puntos: 120,
    },
  },
  {
    nombre: "Liqui-Vite",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379788/neolife/im0cpxylnlzek4nyekf7.webp",
    descripcion:
      "°Carotenoides para contribuir a la inmunidad. Tre-en-en para la energía celular. °Colina e inositol para contribuir al desarrollo cerebral. °Gran sabor cítrico, versátil –se mezcla fácilmente en otros líquidos..",
    precio: 464,
    puntos: 15,
    caja: {
      precio: 2648,
      puntos: 90,
    },
  },
  {
    nombre: "Magnesium Complex",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379820/neolife/yzkocr8npxvkfs2dlhia.webp",
    descripcion:
      "°Apoya la salud metabólica general a través de la regulación normal de la glucosa en sangre y los niveles hormonales equilibrados. °Ayuda a tener huesos y dientes fuertes. °Promueve la contracción y relajación muscular saludable. °Ayuda a prevenir calambres, debilidad muscular y problemas de coordinación asociados con bajos niveles de magnesio. °Ayuda a estimular el sistema inmune..",
    precio: 303,
    puntos: 11,
    caja: {
      precio: 1715,
      puntos: 66,
    },
  },
  {
    nombre: "NeoLifeShake",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379801/neolife/jj2kwjxcjn9zxmts4iz8.webp",
    descripcion:
      "°Tecnología de Control de la Respuesta Glicémica. Para ayudar a minimizar la acumulación de grasa y fomentar la quema de grasa. °BIOLÓGICAMENTE Completa con todos los 22 aminoácidos. Incluidos los 9 esenciales. °Que proporcionan energía duradera y animan a tu cuerpo a permanecer en una modalidad de la quema de grasas..",
    precio: 829,
    puntos: 28,
    caja: {
      precio: 4708,
      puntos: 168,
    },
    sabores: [
      "NeoLifeShake Chocolate",
      "NeoLifeShake Frutos Rojos con Crema",
      "NeoLifeShake Mix",
      "NeoLifeShake Vainilla cremosa",
    ],
  },
  {
    nombre: "PhytoDefense",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379804/neolife/i1rezvupbh7usfzddvnm.webp",
    descripcion:
      "°Clínicamente demostrado en un estudio conducido por investigadores del USDA. 37% de aumento de la función inmunológica en tan sólo 20 días. COMBINANDO TRES NUTRICIONALES POTENTES Cada paquete conveniente ofrece: 3 cápsulas de Carotenoid Complex 2 tabletas de Flavonoid Complex 1 tableta de Cruciferous Plus.",
    precio: 1388,
    puntos: 56,
    caja: {
      precio: 7871,
      puntos: 336,
    },
  },
  {
    nombre: "Pro Vitality",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379795/neolife/qoib5f97wx6lxc9z0anc.webp",
    descripcion: [
      "CUATRO NUTRIENTES ESENCIALES: ",
      "°Tre-en-en °Carotenoid Complex  °Salmon oil plus °Complejo esencial de vitaminas y minerales",
      "Nutrientes potentes que contribuyen a:",
      "° Energía Abundante.",
      "° Protección Antioxidante Poderosa.",
      "° Bienestar Cardiaco.",
      "° Función Cerebral Saludable.",
      "° Articulaciones Saludables y visión clara.",
      "° Piel, Cabello y Uñas juveniles.",
      "° Función Genética Natural de Antienvejecimiento",
    ],
    precio: 756,
    puntos: 34,
    caja: {
      precio: 4295,
      puntos: 204,
    },
  },
  {
    nombre: "Quelado Cal-Mag",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379801/neolife/jlizb1nga0i36u3fhozy.webp",
    descripcion:
      "°Proporciona vitamina D3, de forma fácilmente absorbible y altamente biodisponible. °Calcio farmacéuticamente puro, derivado de conchas marinas. °Está demostrado que pospone o previene el desarrollo de la osteoporosis. °Ayuda a la presión arterial normal,optimiza la función nerviosa y muscular.",
    precio: 522,
    puntos: 18,
    caja: {
      precio: 2983,
      puntos: 108,
    },
  },
  {
    nombre: "Salmon Oil Plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379800/neolife/xg4bxxmyvj7y1hfcqihc.webp",
    descripcion:
      "Proporción de ácidos grasos omega-3 y omega-6 mejoría de un 43% en ocho semanas. °EQUILIBRA LA INFLAMACIÓN Promueve un equilibrio sano de factores pro y antiinflamatorios. Índice inflamatorio reducido en un 68% en tan sólo ocho semanas. Ayuda a la función cerebral. Ayuda al desarrollo fetal del cerebro y de los ojos. Promueve el equilibrio inflamatorio normal durante los días de actividad física..",
    precio: 504,
    puntos: 23,
    caja: {
      precio: 2857,
      puntos: 138,
    },
  },
  {
    nombre: "Super B",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379806/neolife/ccncor0l9gzuxtra67cp.webp",
    descripcion:
      "°Equilibrio perfecto de las 8 vitaminas del complejo B, además de inositol y colina. °Procedente de alimentos integrales únicamente. °Alta potencia – para un apoyo metabólico óptimo. °Controlado para la liberación sostenida de nutrientes del complejo B durante un período de seis horas. °Proporciona soporte metabólico máximo para ayudar a satisfacer las altas demandas de nutrientes durante el ejercicio y los períodos de estrés..",
    precio: 639,
    puntos: 23,
    caja: {
      precio: 3617,
      puntos: 138,
    },
  },
  {
    nombre: "Super C",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379778/neolife/qejrug8yerv5eoap5dhl.webp",
    descripcion:
      "°Sistema propio óptimo de liberación gradual asegurando la protección del nivel óptimo de nutrientes durante más de seis horas. °El poder de la Vitamina C de ocho naranjas en cada tableta. °Respalda el funcionamiento correcto del sistema inmunológico..",
    precio: 523,
    puntos: 19,
    caja: {
      precio: 2975,
      puntos: 114,
    },
  },
  {
    nombre: "Tré",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379777/neolife/zs7f6xpjupm3tkqsgzcc.webp",
    descripcion:
      "°Antioxidantes poderosos promueven la buena salud total. °Tré se extrae de un grupo selecto de entre las frutas más potentes y únicas de la naturaleza. La ciencia ha demostrado que los polifenoles desempeñan una amplia gama de funciones esenciales a la hora de contribuir y promover la salud, la longevidad y las funciones cognitivas. °Proporciona resveratrol, poder antioxidante y ácido alfa-lipóico.",
    precio: 739,
    puntos: 36,
    caja: {
      precio: 2820,
      puntos: 144,
    },
  },
  {
    nombre: "Tre en en",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379767/neolife/iqyznekpstao4atbtpif.webp",
    descripcion: [
      "El primer y único suplemento en el mundo de lípidos y esteroles procedentes de granos integrales",
      "Se demostró que cuando Tre-en-en está presente en la dieta, mejoró el crecimiento y el desarrollo general, la eficiencia y utilización de los nutrientes y el desarrollo cardiovascular.",
      "° Mejora la energía y la vitalidad optimizando el funcionamiento de la membrana celular. Llena de energía todo el cuerpo, ayudando a las células a funcionar de manera más eficiente.",
    ],
    precio: 605,
    puntos: 34,
    caja: {
      precio: 3439,
      puntos: 204,
    },
  },
  {
    nombre: "Vegan D",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379777/neolife/vqngjmstyjbe3su5ptki.webp",
    descripcion:
      "La vitamina D ayuda a construir, mantener huesos, dientes y músculos fuertes, apoya la presión arterial normal y la función nerviosa, así como las defensas inmunes. • 100% vegano. Hecho completamente sin ingredientes de origen animal de ningún tipo, Vegan D cumple con los estrictos criterios de las fuentes que esperan los usuarios de suplementos vegetarianos/veganos..",
    precio: 298,
    puntos: 10,
    caja: {
      precio: 1691,
      puntos: 60,
    },
  },
  {
    nombre: "Vita-Gard",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379771/neolife/vwozcailhisbxvnmst1t.webp",
    descripcion:
      "°Zinc y selenio para maximizar las defensas de los niños de modo que se sientan de lo mejor. °Tabletas masticables con irresistible sabor a fruta. °Sin colorantes, sabores, edulcorantes, ni conservantes artificiales añadidos..",
    precio: 549,
    puntos: 19,
    caja: {
      precio: 3112,
      puntos: 114,
    },
  },
  {
    nombre: "Vitamin E plus",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379783/neolife/wyj6aw7gkljl7j7pej93.webp",
    descripcion: [
      "Ofrece las 8 formas de la vitamina E para una protección de amplio espectro",
      "° Ayuda a inhibir la oxidación del colesterol gracias a sus potentes efectos antioxidantes.",
      "° Mejora la función inmunológica, especialmente en los ancianos.",
      "° La tecnología innovadora miscible en agua mejora la absorción.",
      "° La vitamina E contribuye a la salud cardíaca, del cerebro y la próstata",
    ],
    precio: 928,
    puntos: 30,
    caja: {
      precio: 5262,
      puntos: 180,
    },
  },
  {
    nombre: "Vita-Squares",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379768/neolife/felrmyxxzjcfouef0oia.webp",
    descripcion: [
      "Cargado con 18 vitaminas y minerales esenciales",
      "Proporciona nutrientes que promueven el crecimiento y el desarrollo saludable del cuerpo y la mente.",
      "° Mejorado con colina e inositol para una memoria óptima, aprendizaje y concentración.",
      "° Concentrado de granos Tre-en-en para la energía celular.",
      "° Sin colorantes, sabores, edulcorantes ni conservantes artificiales añadidos",
    ],
    precio: 373,
    puntos: 13,
    caja: {
      precio: 2125,
      puntos: 78,
    },
  },
  {
    nombre: "Zinc Quelado",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379777/neolife/tzxb5smx3furpurhzn4m.webp",
    descripcion:
      "°Contribuye a la salud de la visión y de la próstata. Mantiene su metabolismo trabajando al máximo. °Se ha demostrado que el Zinc mejora la memoria y la atención en los niños. °Quelados para una mayor absorción y suaves con tu sistema digestivo. °Zinc quelado para una mayor absorción y suave con tu sistema digestivo..",
    precio: 361,
    puntos: 14,
    caja: {
      precio: 2042,
      puntos: 84,
    },
  },
  {
    nombre: "Aloe Vera Gel",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379791/neolife/loomacocvrixd4olrrda.webp",
    descripcion: [
      "°El Gel de Aloe Vera de Nutriance contiene una rica combinación de aloe vera puro, manzanilla, tilo, aciano y extractos de hierba de San Juan, además de alantoína y caléndula para apoyar la renovación célular, tambiénDF contiene provitamina B5 (pantenol) para suavizar la piel y dar elasticidad. Clínicamente probado para hidratar, ayudar a calmar y reducir las molestias leves de la piel. También ayuda a la renovación de la misma.",
      "Fórmula única que se adapta a cada persona e interactúa con las feromonas naturales de su cuerpo mezclándose con su química personal para hacerse prácticamente imperceptible por la nariz. No entrará en conflicto con su delicado perfume o colonia favorita.",
    ],
    precio: 274,
    puntos: 8,
    caja: {
      precio: 1564,
      puntos: 54,
    },
  },
  {
    nombre: "Acondicionador Enriquecido",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379793/neolife/cyn2ptep2av2cy2flb6i.webp",
    descripcion:
      "°Enriching Conditioner te devuelve el cabello vibrante, tocable y manejable que amas aportando hidratación donde más se necesita. La ProVitamina B5 (Pantenol), el Extracto de Almendras Dulces y los acondicionadores hidratantes restauran el cuerpo y brillo saludables. Retiene la hidratación para un pelo vibrante y suave. Alisa el cabello sin apelmazarlo. Fortalece el cabello con ingredientes naturales..",
    precio: 220,
    puntos: 8,
    caja: {
      precio: 1248,
      puntos: 48,
    },
  },
  {
    nombre: "Shampoo Revitalizante Enriquecido",
    img: "https://res.cloudinary.com/carlosdaniel/image/upload/v1677379809/neolife/pqnqcmhudxk2dwcvv8je.webp",
    descripcion:
      "°Enjuaga las impurezas y añade luminosidad con el lujoso champú “Rich Revitalizing Shampoo” de Nutriance, de calidad de salón de belleza. Con Vitamina B3 y ProVitamina B5 (Pantenol), más una combinación selecta de ingredientes botánicos seleccionados para limpiar y nutrir efectivamente, además de agregar brillo, cuerpo y manejabilidad. Su cabello y cuero cabelludo se sentirán limpios y revitalizados cada vez que los mimes con esta fórmula limpiadora suave. Limpia suavemente, elimina la suciedad y los residuos de los productos de belleza. Aporta luminosidad natural, movimiento y brillo a tu cabello. Disfruta de un cabello suave, sedoso y manejable.",
    precio: 220,
    puntos: 8,
    caja: {
      precio: 1248,
      puntos: 48,
    },
  },
];


export const Productos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [envio, setEnvio] = useState(false);
  const [ViewAcountBancario, setViewAcountBancario] = useState(false);
  const [total, setTotal] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [tipoDePago, setTipoDePago] = useState(null);
  const dispatch = useDispatch();

  const { productos, modalProducto, carrito, enlaces } = useSelector(
    (state) => state.productos
  );

  // 1 verifica el localStorage si tiene almacenado contactos
  // 2 agrega los productos al estado global
  useEffect(() => {
    if (enlaces.length === 0) {
      dispatch(addContactos(localStorage.getItem("contacto")));
    }

    dispatch(
      productosAll(
        localStorage.getItem("contacto").length > 0
          ? productosViewDistribuidores
          : productosViewClientes
      )
    );
  }, []);

  // sumar valor de todos los productos y da el total
  useEffect(() => {
    const sumWithInitial = carrito.reduce(
      (valorAnterior, ValorActual) =>
        valorAnterior + ValorActual.precio * ValorActual.cantidad,
      0
    );

    // hace que se sumen los puntos
    const sumPuntos = carrito.reduce(
      (valorAnterior, ValorActual) =>
        valorAnterior + ValorActual.puntos * ValorActual.cantidad,
      0
    );

    setPuntos(sumPuntos);
    setTotal(sumWithInitial + (envio && 100));
  }, [carrito]);

  // enviar productos a whatsapp clientes
  const enviarWhatsappCliente = () => {
    carrito.length > 0
      ? window.open(
          `https://wa.me/?text=Hola!%0A%0APEDIDO:%0A%0A${
            carrito.length > 0 &&
            productosPedir().map((element) => {
              return JSON.stringify(element);
            })
          }%0A%0ATotal: $ ${total.toLocaleString("es-MX")}`
            .replace(/(")/gm, "")
            .replace(/(,)/gm, ""),
          "_blank"
        )
      : alert("Ningun producto agregado");
  };

  // enviar productos a whatsapp distribuidores
  const enviarWhatsappDistribuidor = (posicionTelefono) => {
    tipoDePago !== null && carrito.length > 0
      ? window.open(
          `https://wa.me/${
            typeof enlaces === "string"
              ? enlaces.split(",")[posicionTelefono]
              : enlaces[posicionTelefono]
          }?text=Hola!%0A%0APEDIDO:%0A${
            carrito.length > 0 &&
            productosPedir().map((element) => {
              return JSON.stringify(element);
            })
          }%0ATotal: $ ${total.toLocaleString(
            "es-MX"
          )}%0AForma de pago: ${tipoDePago}%0A${TipoEnvio()}`
            .replace(/(")/gm, "")
            .replace(/(,)/gm, ""),
          "_blank"
        )
      : alert("Campos requeridos");
  };

  const TipoEnvio = () => {
    if (envio) return "Tu envío tiene un costo de $100";
    if ((puntos >= 250) & !envio) return "¡ Tienes envío gratis !";
    return "Tu envío tiene un costo de $50";
  };

  // retorna los productos a pedir por whatsapp
  const productosPedir = () => {
    const prod = [];
    carrito.map((item, index) => {
      prod.push(
        `-- [${++index}] ${item.nombre} ${item.cantidad} ${
          item?.tipo === "unidad" ? "Unidad/es" : "caja/s"
        } > $${(item.cantidad * item.precio).toLocaleString("es-MX")}.00 MX%0A`
      );
    });

    return prod;
  };

  // cambiar tipo de Pago
  const changeTipoPago = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Telecomm") {
      setTipoDePago("Telecomm");
      return;
    }

    if (e.target.value === "Transferencia Bancaria/ Deposito Bancario") {
      setTipoDePago("Transferencia Bancaria/ Depósito Bancario.");
      return;
    }

    if (e.target.value === "Tarjeta de debito/Credito") {
      setTipoDePago("Tarjeta de débito/crédito.");
      return;
    }

    setViewAcountBancario(false);

    if (e.target.value === "Transferencia Bancaria/ Deposito Bancario") {
      setViewAcountBancario(true);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + productos.length) % productos.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % productos.length);
  };

  return (
    <>
      {modalProducto && <ModalProducto />}
      <NavBar view={true} />
      <div className="productos">
        <div className="productos__slice">
          <Producto
            producto={productos[currentIndex]}
            prev={handlePrev}
            next={handleNext}
            count={currentIndex}
            all={ productos }
          />
        </div>

        <div className="productos__carrito">
          {/* estado de pedido */}
          <div className="productos__carrito__informacion">
            <div className="productos__carrito__productos">
              {carrito?.length <= 0 ? (
                <div className="productos__carrito__vacio">
                  <h5>Carrito</h5>
                  <p>$0</p>
                </div>
              ) : (
                <ProductoCarrito />
              )}
            </div>

            {/* forma de pago */}
            <div className="productos__carrito__masInf">
              <p>Total estimado: $ {total.toLocaleString("es-MX")}.00 MX</p>

              {/* muestra cuantos puntos tiene y si cumple con la condicion aparece envio gratis */}
              {enlaces.length > 0 &&
                ((puntos >= 250) & !envio ? (
                  <p style={{ color: "#7aac41", fontWeight: "bold" }}>
                    Superaste los 250 puntos ¡ Tienes envio gratis !
                  </p>
                ) : (
                  <div>
                    {!envio ? (
                      <>
                        <p>{puntos} puntos acumulados</p>
                        <p className="envio">Tu envio tiene un costo de $50</p>
                      </>
                    ) : (
                      <p className="envio">Tu envio tiene un costo de $100</p>
                    )}
                  </div>
                ))}

              {enlaces.length > 0 && (
                <form className="productos__carrito__form">
                  <h6>
                    Forma de pago <span>*</span>
                  </h6>
                  <div className="productos__carrito__opc">
                    <div className="productos__carrito__opcPago">
                      <label htmlFor="Efectivo">Telecomm</label>
                      <input
                        onChange={(e) => changeTipoPago(e)}
                        type="radio"
                        name="Forma de pago"
                        value="Telecomm"
                      />
                    </div>
                    <div className="productos__carrito__opcPago">
                      <label htmlFor="Mercado_Pago">
                        Transferencia Bancaria/ Deposito Bancario,
                      </label>
                      <input
                        onChange={(e) => changeTipoPago(e)}
                        type="radio"
                        name="Forma de pago"
                        value="Transferencia Bancaria/ Deposito Bancario"
                      />
                    </div>

                    {/* view cuenta bancaria */}
                    {ViewAcountBancario && (
                      <div className="productos__carrito__CuentaBancaria">
                        <img
                          className="animate__animated animate__pulse"
                          src="https://firebasestorage.googleapis.com/v0/b/neolife-c7fcb.appspot.com/o/cuentaBancaria.jpeg?alt=media&token=240d890c-bc01-4550-86e7-76734c4d68c3"
                          alt="Cuenta bancaria"
                        />
                      </div>
                    )}

                    <div className="productos__carrito__opcPago">
                      <label htmlFor="Tarjeta">Tarjeta de débito/Crédito</label>
                      <input
                        onChange={(e) => changeTipoPago(e)}
                        type="radio"
                        name="Forma de pago"
                        value="Tarjeta de debito/Credito"
                      />
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/*  */}
            {enlaces.length > 0 && (
              <div className="contentEnvio">
                <h6 className="titleENvio">Envio</h6>
                <div className="contentEnvioInput">
                  <label onChange={() => {}} htmlFor="Tarjeta">
                    Entregar a otra dirección
                  </label>
                  <input
                    onChange={() => {
                      setEnvio(true);
                      setTotal(total + 100);
                    }}
                    type="radio"
                  />
                </div>
              </div>
            )}

            {/* hacer pedido por whatsapp */}
            <div className="productos__carrito__hacerPedido">
              <h6>Pedir por whatsapp</h6>
              {!enlaces.length > 0 ? (
                <button
                  className="btnGeneral"
                  onClick={() => {
                    enviarWhatsappCliente();
                  }}
                >
                  Elegir en mis contactos{" "}
                  <AiOutlineWhatsApp className="productos__carrito__hacerPedido--icon" />
                </button>
              ) : (
                <>
                  <button
                    className="btnGeneral"
                    onClick={() => enviarWhatsappDistribuidor(0)}
                  >
                    ATN a Distribuidor 1{" "}
                    <AiOutlineWhatsApp className="productos__carrito__hacerPedido--icon" />
                  </button>
                  <button
                    className="btnGeneral"
                    onClick={() => enviarWhatsappDistribuidor(1)}
                  >
                    ATN a Distribuidor 2{" "}
                    <AiOutlineWhatsApp className="productos__carrito__hacerPedido--icon" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
