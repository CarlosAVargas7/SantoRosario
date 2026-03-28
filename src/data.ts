// ============================================================
//  data.ts — Capa de datos: instrucciones, misterios, oraciones
// ============================================================

export interface StepInstruction {
  title: string;
  action: string;
  text: string;
  prayers: string[];
}

export interface DayInfo {
  name: string;
  type: MysteryType;
  color: string;
}

export interface MysteryDetail {
  title: string;
  desc: string;
  fruit: string;
}

export interface Prayer {
  id: string;
  name: string;
  text: string;
  origin: string;
}

export type MysteryType = "Gozosos" | "Dolorosos" | "Gloriosos" | "Luminosos";
export type DayKey =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

// -------------------------------------------------------------------

export const stepInstructions: Record<number, StepInstruction> = {
  1: {
    title: "1. La Señal de la Cruz y El Credo",
    action: "Sosteniendo el Crucifijo",
    text: "Haz la Señal de la Cruz y luego recita el Credo de los Apóstoles, como profesión de fe antes de comenzar.",
    prayers: ["Señal de la Cruz", "El Credo"],
  },
  2: {
    title: "2. Cuenta Grande Inicial",
    action: "En la primera cuenta grande",
    text: "Reza un Padrenuestro por las intenciones del Santo Padre (el Papa).",
    prayers: ["Padrenuestro"],
  },
  3: {
    title: "3. Las Tres Cuentas Pequeñas",
    action: "En las siguientes tres cuentas juntas",
    text: "Reza tres Avemarías. Tradicionalmente se ofrecen para pedir el aumento de las virtudes teologales: Fe, Esperanza y Caridad. Al finalizar las tres, reza un Gloria.",
    prayers: ["Avemaría (x3)", "Gloria"],
  },
  4: {
    title: "4. La Medalla (Centro)",
    action: "Llegando a la medalla que une el rosario",
    text: "Aquí se enuncia el Primer Misterio correspondiente al día. Tras una breve pausa para la meditación, se reza un Padrenuestro.",
    prayers: ["Anuncio del Misterio", "Padrenuestro"],
  },
  5: {
    title: "5. Las Decenasx (El Ciclo Principal)",
    action: "A lo largo de las cuentas pequeñas del círculo",
    text: "El rosario consta de 5 «decenas». Por cada decena:<br><br>1. En cada una de las 10 cuentas pequeñas, reza un <b>Avemaría</b> meditando el misterio.<br>2. Al terminar las 10, reza un <b>Gloria</b> y la <b>Oración de Fátima</b>.<br>3. En la cuenta grande siguiente, anuncia el siguiente misterio y reza un <b>Padrenuestro</b>.<br><br>Repite este ciclo 5 veces hasta completar la vuelta.",
    prayers: ["10 Avemarías", "Gloria", "Oración de Fátima", "Padrenuestro"],
  },
  6: {
    title: "6. Conclusión",
    action: "Al finalizar las 5 decenas",
    text: "El rosario se concluye rezando la Salve como homenaje a la Virgen María. Opcionalmente se recitan las Letanías Lauretanas y se finaliza con la Señal de la Cruz.",
    prayers: ["La Salve", "Señal de la Cruz"],
  },
};

// -------------------------------------------------------------------

export const mysteriesData: Record<DayKey, DayInfo> = {
  lunes: {
    name: "Lunes",
    type: "Gozosos",
    color: "bg-blue-50 text-blue-800 border-blue-200",
  },
  martes: {
    name: "Martes",
    type: "Dolorosos",
    color: "bg-purple-50 text-purple-800 border-purple-200",
  },
  miercoles: {
    name: "Miércoles",
    type: "Gloriosos",
    color: "bg-yellow-50 text-yellow-800 border-yellow-200",
  },
  jueves: {
    name: "Jueves",
    type: "Luminosos",
    color: "bg-amber-50 text-amber-800 border-amber-200",
  },
  viernes: {
    name: "Viernes",
    type: "Dolorosos",
    color: "bg-purple-50 text-purple-800 border-purple-200",
  },
  sabado: {
    name: "Sábado",
    type: "Gozosos",
    color: "bg-blue-50 text-blue-800 border-blue-200",
  },
  domingo: {
    name: "Domingo",
    type: "Gloriosos",
    color: "bg-yellow-50 text-yellow-800 border-yellow-200",
  },
};

export const mysteryDetails: Record<MysteryType, MysteryDetail[]> = {
  Gozosos: [
    {
      title: "La Encarnación",
      desc: "El Hijo de Dios se hace hombre en el seno de la Virgen María.",
      fruit: "La humildad.",
    },
    {
      title: "La Visitación",
      desc: "María visita a su prima Santa Isabel para ayudarla.",
      fruit: "El amor al prójimo.",
    },
    {
      title: "El Nacimiento",
      desc: "Jesús nace en un humilde portal en Belén.",
      fruit: "Desapego de los bienes materiales.",
    },
    {
      title: "La Presentación",
      desc: "María y José presentan al Niño Jesús en el Templo.",
      fruit: "La obediencia y pureza.",
    },
    {
      title: "El Niño Perdido",
      desc: "Jesús es hallado en el Templo predicando a los doctores.",
      fruit: "Alegría de encontrar a Jesús.",
    },
  ],
  Dolorosos: [
    {
      title: "La Agonía en el Huerto",
      desc: "Jesús suda sangre al aceptar la voluntad del Padre.",
      fruit: "Dolor por nuestros pecados.",
    },
    {
      title: "La Flagelación",
      desc: "Jesús es cruelmente azotado atado a la columna.",
      fruit: "Mortificación de los sentidos.",
    },
    {
      title: "La Coronación de Espinas",
      desc: "Los soldados se burlan de Jesús coronándolo con espinas.",
      fruit: "Fortaleza ante las burlas.",
    },
    {
      title: "La Cruz a Cuestas",
      desc: "Jesús carga la pesada cruz hacia el monte Calvario.",
      fruit: "Paciencia en las adversidades.",
    },
    {
      title: "La Crucifixión",
      desc: "Jesús muere en la cruz por la salvación del mundo.",
      fruit: "Perseverancia, salvación.",
    },
  ],
  Gloriosos: [
    {
      title: "La Resurrección",
      desc: "Jesús resucita victorioso sobre el pecado y la muerte.",
      fruit: "Aumento de la fe.",
    },
    {
      title: "La Ascensión",
      desc: "Jesús asciende al cielo en presencia de sus apóstoles.",
      fruit: "Deseo del cielo, esperanza.",
    },
    {
      title: "Venida del Espíritu Santo",
      desc: "El Espíritu Santo desciende sobre María y los Apóstoles.",
      fruit: "Dones del Espíritu Santo.",
    },
    {
      title: "La Asunción de María",
      desc: "María es elevada en cuerpo y alma al cielo.",
      fruit: "Gracia de una buena muerte.",
    },
    {
      title: "La Coronación de María",
      desc: "María es coronada Reina del cielo y de la tierra.",
      fruit: "Confianza en María.",
    },
  ],
  Luminosos: [
    {
      title: "El Bautismo de Jesús",
      desc: "Jesús es bautizado en el Jordán y el Padre lo proclama su Hijo.",
      fruit: "Gratitud por el don de la fe.",
    },
    {
      title: "Las Bodas de Caná",
      desc: "Jesús realiza su primer milagro a petición de María.",
      fruit: "Confianza en la intercesión de María.",
    },
    {
      title: "El Anuncio del Reino",
      desc: "Jesús invita a la conversión y anuncia el Reino de Dios.",
      fruit: "Deseo de santidad, arrepentimiento.",
    },
    {
      title: "La Transfiguración",
      desc: "Jesús manifiesta su gloria divina en el monte Tabor.",
      fruit: "Reverencia y temor de Dios.",
    },
    {
      title: "La Institución de la Eucaristía",
      desc: "Jesús se nos da como alimento en la Última Cena.",
      fruit: "Amor a Jesús Eucaristía.",
    },
  ],
};

export const prayersList: Prayer[] = [
  {
    id: "cruz",
    name: "Señal de la Cruz",
    text: "Por la señal de la Santa Cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.",
    origin:
      "<strong>Origen Histórico:</strong> Es una de las prácticas cristianas más antiguas. Tertuliano, un teólogo del siglo II, ya mencionaba que los cristianos se persignaban la frente en casi todas las acciones diarias. La forma actual se estandarizó a lo largo de los primeros siglos como recordatorio constante del bautismo y la redención.",
  },
  {
    id: "credo",
    name: "El Credo de los Apóstoles",
    text: "Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.",
    origin:
      "<strong>Origen Histórico:</strong> Aunque la leyenda dice que fue dictado por los 12 apóstoles, históricamente es un antiguo símbolo bautismal de la Iglesia de Roma. Su forma actual se consolidó en la Galia en el siglo VIII. Sirve como resumen esencial de las verdades fundamentales de la fe cristiana.",
  },
  {
    id: "padrenuestro",
    name: "El Padrenuestro",
    text: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación y líbranos del mal. Amén.",
    origin:
      "<strong>Origen Bíblico:</strong> Enseñada directamente por Jesucristo a sus discípulos cuando le pidieron que les enseñara a orar. Se encuentra en los Evangelios de Mateo (Mt 6, 9-13) y Lucas (Lc 11, 2-4). Ha sido la base litúrgica desde el siglo I.",
  },
  {
    id: "avemaria",
    name: "El Avemaría",
    text: "Dios te salve, María, llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios y Madre nuestra, ruega por nosotros pecadores, ahora y en la hora de nuestra muerte. Amén.",
    origin:
      "<strong>Origen Bíblico e Histórico:</strong> Combina el saludo del Arcángel Gabriel (Lucas 1,28) y el de Santa Isabel (Lucas 1,42). La segunda parte («Santa María...») se añadió oficialmente en el siglo XVI por el Papa Pío V, con raíces en el Concilio de Éfeso (431).",
  },
  {
    id: "gloria",
    name: "El Gloria (Doxología Menor)",
    text: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",
    origin:
      "<strong>Origen Histórico:</strong> Conocida como doxología menor, surgió en el siglo IV para afirmar la igualdad de las tres personas de la Santísima Trinidad en respuesta a la herejía arriana. Se recitaba al final de los salmos.",
  },
  {
    id: "fatima",
    name: "Oración de Fátima",
    text: "Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia.",
    origin:
      "<strong>Origen Histórico:</strong> Es la oración más moderna del Rosario. Según la tradición, fue enseñada por la Virgen María a los tres pastorcitos de Fátima, Portugal, en 1917, pidiéndoles que la recitaran al final de cada decena.",
  },
  {
    id: "salve",
    name: "La Salve (Salve Regina)",
    text: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios y Madre nuestra. Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.",
    origin:
      "<strong>Origen Histórico:</strong> Himno mariano del siglo XI, atribuido al monje Hermann de Reichenau. Se popularizó en Europa impulsado por los monjes cistercienses y los Dominicos, cantándose habitualmente al final del día.",
  },
];
