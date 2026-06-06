import { useState, useEffect } from "react";
const REVELACIONES = [
 {id:"r1",e:"💧",f:["Producir ","1 kg de ternera"," consume tanta agua como ducharse durante ","6 meses"],q:"\"Lo que haces a la naturaleza, te lo haces a ti mismo.\""},
 {id:"r2",e:"🌍",f:["Si el mundo adoptara una dieta vegana, reduciríamos las emisiones de gases de efecto invernadero relacionadas con la alimentación en un ","70%"],q:"— Estudio Universidad de Oxford, 2016"},
 {id:"r3",e:"🐄",f:["Una vaca ","llora lágrimas reales"," cuando le separan a su cría. Tiene el mismo sistema límbico que tú."],q:"— Neurociencia animal — Cambridge Declaration on Consciousness, 2012"},
 {id:"r4",e:"🧬",f:["Los veganos tienen un ","32% menos de riesgo"," de enfermedad cardíaca según el mayor estudio nutricional de la historia."],q:"— EPIC-Oxford Study, Universidad de Oxford"},
 {id:"r5",e:"🌱",f:["Con la tierra usada para criar animales para comida, podríamos alimentar a ","4 veces la población mundial"," con vegetales."],q:"— FAO, Naciones Unidas"},
 {id:"r6",e:"✨",f:["\"El que es cruel con los animales ","no puede ser un buen hombre",".\""],q:"— Arthur Schopenhauer, filósofo"},
 {id:"r7",e:"🏥",f:["La carne procesada fue clasificada por la OMS como ","carcinógeno Grupo 1",", la misma categoría que el tabaco y el amianto."],q:"— Organización Mundial de la Salud, 2015"},
 {id:"r8",e:"🐷",f:["Los cerdos son más inteligentes que los perros. ","Superan a los perros en tests cognitivos"," y tienen la inteligencia emocional de un niño de 3 años."],q:"— Cambridge University, estudios de cognición animal"},
 {id:"r9",e:"🌊",f:["El 46% del plástico en los océanos son ","redes de pesca abandonadas",". No las pajitas. Las redes."],q:"— Estudio Ocean Cleanup Foundation, 2018"},
 {id:"r10",e:"⚡",f:["Carl Lewis ganó ","9 medallas olímpicas de oro"," siendo vegano. \"Mi mejor año atlético fue el primero siendo vegano.\""],q:"— Carl Lewis, velocista olímpico"},
 {id:"r11",e:"🧠",f:["\"Nada beneficiará tanto la salud humana ni aumentará las posibilidades de supervivencia en la Tierra como la ","evolución hacia una dieta vegetariana",".\""],q:"— Albert Einstein, físico, Premio Nobel"},
 {id:"r12",e:"🐟",f:["Los peces tienen receptores del dolor idénticos a los nuestros. ","Sienten el dolor igual que tú.","\""],q:"— Dr. Victoria Braithwaite, Universidad de Edimburgo — Do Fish Feel Pain?, 2010"},
 {id:"r13",e:"🏭",f:["La ganadería industrial usa el ","80% de la tierra agrícola mundial"," y produce solo el 20% de las calorías globales."],q:"— Our World in Data, Universidad de Oxford"},
 {id:"r14",e:"💪",f:["Novak Djokovic, ","24 Grand Slams",", lleva años con dieta vegana. \"Cambió todo: energía, concentración, recuperación.\""],q:"— Novak Djokovic, mejor tenista de la historia"},
 {id:"r15",e:"🌏",f:["En India la vaca es sagrada. En Vietnam se comen los perros. En Occidente comemos cerdos y vacas. ","Ninguno tiene razón absoluta."," El sufrimiento no depende del animal. Depende de quién lo mira."],q:"— Reflexión intercultural"},
 {id:"r16",e:"🧪",f:["Un estudio de Stanford con gemelos idénticos demostró que en 8 semanas el gemelo vegano tenía ","marcadores de envejecimiento más lentos"," y menor inflamación sistémica."],q:"— Stanford University, Prevención, 2023"},
 {id:"r17",e:"🐋",f:["Las ballenas son los mayores sumideros de CO₂ del planeta. ","Una ballena captura el equivalente a 33 toneladas de CO₂.","\""],q:"— Fondo Monetario Internacional, 2019"},
 {id:"r18",e:"🏅",f:["Venus Williams se hizo vegana tras un diagnóstico autoinmune. ","Volvió a ganar Grand Slams"," después. \"La comida puede ser tu medicina o tu veneno.\""],q:"— Venus Williams, tenista"},
 {id:"r19",e:"⚖️",f:["\"Mientras los hombres masacren a los animales, ","seguirán matándose unos a otros",".\""],q:"— Pitágoras, matemático y filósofo"},
 {id:"r20",e:"🦠",f:["El 75% de las enfermedades infecciosas emergentes vienen de animales. ","La COVID-19, el Ébola, la gripe porcina.","\""],q:"— OMS y CDC — zoonosis"},
 {id:"r21",e:"🐬",f:["\"Si quieres saber si tu corazón está en el lugar correcto, ","observa cómo tratas a los animales",".\""],q:"— Fiódor Dostoyevski, escritor"},
 {id:"r22",e:"🔬",f:["La carne procesada fue clasificada por la OMS en ","Grupo 1 de cancerígenos","."],q:"\"El conocimiento que no se aplica no cambia nada.\""},
 {id:"r23",e:"🧠",f:["\"Nada beneficiará tanto la salud humana y aumentará las posibilidades de supervivencia de la vida en la Tierra como la ","evolución hacia una dieta vegetariana","."],q:"— Albert Einstein"},
 {id:"r24",e:"💎",f:["\"Mientras los hombres masacren a los animales, ","seguirán matándose unos a otros",".\""],q:"— Pitágoras, matemático y filósofo"},
 {id:"r25",e:"⚖️",f:["\"Todo lo que haces a otros, ","regresa a ti multiplicado",". Es la ley más antigua del universo.\""],q:"— Principio universal · Karma, regla de oro, ley de causa y efecto"},
 {id:"r26",e:"🏆",f:["Lewis Hamilton ganó ","sus 7 mundiales de F1"," siendo vegano. Djokovic suma 24 Grand Slams. Mike Tyson recuperó su forma. ","La élite ya lo sabe.","."],q:"\"La proteína vegetal no solo funciona — me hace mejor atleta.\" — Lewis Hamilton"},
 {id:"r27",e:"💪",f:["Patrik Baboumian, hombre más fuerte de Alemania, ","cargó 555kg en sus hombros"," siendo 100% vegano."],q:"\"¿De dónde sacas la fuerza?\" \"De las plantas, igual que el toro.\" — Patrik Baboumian"},
 {id:"r28",e:"🌊",f:["El sector ganadero genera más gases de efecto invernadero que ","todos los aviones, coches, barcos y trenes del mundo juntos","."],q:"— Informe FAO de la ONU"},
 {id:"r29",e:"💧",f:["Producir 1kg de carne de vacuno requiere ","15.400 litros de agua",". Producir 1kg de legumbres: 4.000 litros."],q:"— Water Footprint Network"},
 {id:"r30",e:"🌱",f:["\"No matarás\" no dice ","\"solo a humanos\"",". Lo dice todo. Y todo significa todo lo que siente, ama y teme."],q:"— León Tolstói, escritor y filósofo"},
 {id:"r31",e:"🌍",f:["Cada año son sacrificados ","más de 80.000 millones de animales terrestres"," para alimentación. Cada uno sintió miedo."],q:"— FAO, datos globales anuales"},
 {id:"r32",e:"🧘",f:["\"La grandeza de una nación y su progreso moral pueden medirse por ","cómo tratan a sus animales",".\""],q:"— Mahatma Gandhi"},
 {id:"r33",e:"🏃",f:["Scott Jurek, ultramaratoniano vegano, corrió ","3.523km del sendero Appalachian"," en 46 días batiendo el récord mundial."],q:"\"Las plantas me dieron lo que la carne nunca pudo.\" — Scott Jurek"},
 {id:"r34",e:"✨",f:["Tu cuerpo se renueva por completo cada 7 años. Cada célula nueva ","la construyes con lo que comes",". Decide qué versión de ti quieres ser."],q:"— Biología celular"},
 {id:"r35",e:"🐟",f:["El 70% de los océanos están sobreexplotados. Sin pesca masiva, ","los océanos se regenerarían en 10 años","."],q:"— Seaspiracy, datos científicos"},
 {id:"r36",e:"🌿",f:["Venus Williams se hizo vegana tras un diagnóstico autoinmune. Volvió a ganar. \"La comida ","puede ser tu medicina o tu veneno",". Yo elegí mi medicina.\""],q:"— Venus Williams, tenista"},
 {id:"r37",e:"💫",f:["Cuando dejas de formar parte del sufrimiento, ","tu vida cambia",". Mejor salud, más energía, paz interior. Tu mejor versión."],q:"\"Cada vez que cambias lo que comes, cambias quién eres.\""},
 {id:"r38",e:"🎸",f:["Paul McCartney lleva décadas siendo vegano. \"","Si los mataderos tuvieran paredes de cristal",", todo el mundo sería vegetariano.\""],q:"— Paul McCartney, The Beatles"},
 {id:"r39",e:"📊",f:["Un estudio con 96.000 personas demostró que los veganos tienen ","57% menos de diabetes tipo 2"," que los omnívoros."],q:"— Adventist Health Study-2, Universidad de Loma Linda"},
 {id:"r40",e:"🦁",f:["Los gorilas más fuertes del mundo — hasta 10 veces más fuertes que un humano — ","comen 100% plantas",". La fuerza no viene de la carne."],q:"— Biología comparada animal"},
 {id:"r41",e:"🧬",f:["Las personas veganas tienen en promedio un ","índice de masa corporal 5 puntos más bajo"," que los omnívoros y viven más años."],q:"— EPIC-Oxford Study, 20 años de seguimiento"},
 {id:"r42",e:"🌺",f:["\"No puedo imaginar ningún espíritu elevado ","que quiera continuar comiendo carne",".\""],q:"— Leonardo da Vinci, genio universal · pintor, escultor, científico, inventor"},
 {id:"r43",e:"🎯",f:["Joaquin Phoenix, ","Oscar al mejor actor",", dedica su vida al activismo vegano. \"Damos voz a quienes no pueden hablar.\""],q:"— Joaquin Phoenix, discurso Oscars 2020"},
 {id:"r44",e:"🌾",f:["Si todos los humanos fuéramos veganos, ","liberaríamos el 75% de la tierra agrícola mundial",". Suficiente para reforestar Europa, EE.UU., China y Australia juntos."],q:"— Universidad de Oxford, 2018"},
 {id:"r45",e:"🔥",f:["Serena Williams, ","23 títulos de Grand Slam",", adoptó la dieta vegana. \"Me siento más fuerte, más rápida y más enfocada.\""],q:"— Serena Williams, tenista"},
 {id:"r46",e:"🧿",f:["\"En todas las tradiciones espirituales —budismo, hinduismo, jainismo, primeras civilizaciones— ","no hacer daño a los seres vivos"," era la base de la sabiduría.\""],q:"— Ahimsa, principio universal de no violencia"},
 {id:"r47",e:"💡",f:["Cada vegano ahorra de media ","1.500 kg de CO₂ al año",", 400.000 litros de agua y la vida de 100 animales. Solo cambiando lo que come."],q:"— The Vegan Society, cálculo anual"},
 {id:"r48",e:"🏋️",f:["Kendrick Farris, único halterófilo americano en los Juegos Olímpicos de Río 2016, ","levantó más peso que nunca siendo vegano","."],q:"— Kendrick Farris, halterófilo olímpico"},
 {id:"r49",e:"🌙",f:["\"Hay una violencia que no reconocemos como tal ","porque la hemos normalizado desde pequeños",".\""],q:"— Reflexión filosófica contemporánea"},
 {id:"r50",e:"🐘",f:["Los elefantes — los animales terrestres más fuertes del planeta —","son herbívoros puros",". 6.000kg de músculo construido solo con plantas."],q:"— Biología animal"},
 {id:"r51",e:"📱",f:["El 69% de los jóvenes de 18-35 años ya ","reduce su consumo de carne"," activamente. El cambio ya está ocurriendo."],q:"— Ipsos Global Trends, 2023"},
 {id:"r52",e:"🫀",f:["La dieta vegana puede ","revertir enfermedades cardíacas",", no solo prevenirlas. Es el único tratamiento dietético con evidencia de reversión."],q:"— Dr. Dean Ornish, Universidad de California — estudio con seguimiento de 5 años"},
 {id:"r53",e:"🕊️",f:["\"No hay amor sincero mientras ","se siga comiendo animales",".\""],q:"— George Bernard Shaw, dramaturgo, Premio Nobel Literatura"},
 {id:"r54",e:"🌿",f:["Miley Cyrus, Billie Eilish, Natalie Portman, Ariana Grande, Woody Harrelson. ","La cultura pop ya eligió","."],q:"Cuando la élite cultural habla, el mundo escucha."},
 {id:"r55",e:"⚡",f:["Tu cerebro funciona mejor con una dieta basada en plantas. ","Menor inflamación neurológica"," equivale a mayor claridad mental, mejor memoria y menos depresión."],q:"— Nutritional Neuroscience Journal, 2020"},
 {id:"r56",e:"🌊",f:["Por cada kilo de pescado capturado en alta mar, ","se capturan y matan 5kg de otras especies"," involuntariamente (delfines, tortugas, tiburones)."],q:"— FAO, bycatch data"},
 {id:"r57",e:"🏆",f:["El equipo ciclista Bahrain Victorious, ","ganador de etapas en el Tour de France",", adoptó nutrición 100% vegetal para recuperación."],q:"— Bahrain Victorious Team, 2022"},
 {id:"r58",e:"🧘",f:["\"Practica la no violencia no solo en palabras y pensamientos. ","Praticala en tu plato.","\""],q:"— Mahatma Gandhi"},
 {id:"r59",e:"🔬",f:["La Harvard Medical School recomienda la dieta basada en plantas como ","la más eficaz para prevenir las 5 principales causas de muerte"," en el mundo occidental."],q:"— Harvard T.H. Chan School of Public Health"},
 {id:"r60",e:"💫",f:["Cada vez que comes, ","estás votando"," por el tipo de mundo que quieres. Tres veces al día, tienes el poder de cambiarlo todo."],q:"\"Tu tenedor es tu arma más poderosa.\" — anónimo"},
,
 {id:"r61",e:"🌊",f:["Los océanos absorben el ","30% del CO₂"," que producen los humanos. Sin ellos, ya estaríamos a 50°C."],q:"— NOAA, National Oceanic Atmospheric Administration"},
 {id:"r62",e:"🐋",f:["Una sola ballena grande captura ","33 toneladas de CO₂"," durante su vida. Un árbol captura solo 22kg al año."],q:"— Fondo Monetario Internacional, 2019"},
 {id:"r63",e:"🌿",f:["El plancton oceánico produce entre el ","50% y el 80% del oxígeno mundial",". Más que todos los bosques juntos."],q:"— National Geographic, ciencia oceánica"},
 {id:"r64",e:"💀",f:["Microplásticos del pescado encontrados en ","sangre, pulmones y placenta humana"," en el 80% de las personas estudiadas."],q:"— Environment International Journal, 2022"},
 {id:"r65",e:"🦈",f:["Cada año matamos ","100 millones de tiburones",". Los tiburones existían antes que los árboles. Pueden desaparecer en una generación."],q:"— Universidad de Dalhousie, estudio marino"},
 {id:"r66",e:"🌡️",f:["El IPCC concluyó que ","cambiar a dieta basada en plantas"," es una de las acciones individuales más efectivas contra el cambio climático."],q:"— IPCC Climate Report, 2019"},
 {id:"r67",e:"🌍",f:["La ganadería ocupa el ","83% de la tierra agrícola"," pero produce solo el 18% de las calorías. Es el peor uso de recursos posible."],q:"— Universidad de Oxford, Joseph Poore, 2018"},
 {id:"r68",e:"🏞️",f:["La deforestación de la Amazonia es en un ","91% para ganadería"," y soja para alimentar ganado. No para tu mesa directamente, sino para la carne."],q:"— Yale School of the Environment"},
 {id:"r69",e:"🩺",f:["The China Study siguió a ","880 millones de chinos"," durante décadas. La conclusión: a más alimentos vegetales, menos cáncer, diabetes y enfermedad cardíaca."],q:"— Dr. T. Colin Campbell, Universidad Cornell"},
 {id:"r70",e:"🧓",f:["En las Blue Zones (lugares donde la gente vive 100+ años) la dieta es ","95% vegetal",". Okinawa, Loma Linda, Cerdeña, Nicoya, Ikaria."],q:"— Estudio National Geographic, Dan Buettner"},
 {id:"r71",e:"💉",f:["El 80% de los antibióticos del mundo se dan al ","ganado, no a los humanos",". Es la principal causa de bacterias resistentes."],q:"— Organización Mundial de la Salud"},
 {id:"r72",e:"🥩",f:["Una hamburguesa de ternera produce ","tanto CO₂ como conducir 26 km",". Una de seitán produce ","el equivalente a 0,5 km",". 50 veces menos."],q:"— Universidad de Michigan, 2021"},
 {id:"r73",e:"🐔",f:["Cada año matamos ","70.000 millones de pollos","— casi 9 por persona del planeta. Sus vidas duran 35 días en promedio."],q:"— FAOSTAT, datos globales"},
 {id:"r74",e:"🌎",f:["Si todo el mundo siguiera dieta vegana, podríamos liberar tierra equivalente a ","África entera"," y reforestar el planeta."],q:"— Universidad de Oxford"},
 {id:"r75",e:"🏃‍♀️",f:["Hannah Teter, ","medallista olímpica de oro"," en snowboard, es vegana. \"Me siento más limpia, más rápida, más conectada.\""],q:"— Hannah Teter, Juegos Olímpicos"},
 {id:"r76",e:"🏄‍♂️",f:["Tia Blanco, ","campeona mundial de surf",", es vegana desde los 8 años. \"Mis padres me enseñaron que el cuerpo es un templo.\""],q:"— Tia Blanco, ISA World Surfing Champion"},
 {id:"r77",e:"💪",f:["Frank Medrano, calistenia extrema, ","100% vegano",". Sus vídeos tienen cientos de millones de visitas. \"La fuerza viene de las plantas.\""],q:"— Frank Medrano, calistenia"},
 {id:"r78",e:"⚗️",f:["The Lancet Planetary Health Diet propone una dieta global. Conclusión: ","reducir carne un 90%"," y duplicar legumbres salvaría 11 millones de vidas/año."],q:"— EAT-Lancet Commission, 2019"},
 {id:"r79",e:"🦷",f:["Los humanos tenemos sistema digestivo de ","frugívoro y herbívoro",": intestinos largos, dientes planos, saliva alcalina. Los carnívoros tienen lo opuesto."],q:"— Dr. Milton Mills, anatomía comparada"},
 {id:"r80",e:"🌳",f:["Para producir 1kg de ternera se necesitan ","12kg de cereal y soja",". Se podría alimentar a 12 personas con esos cereales en lugar de a 1 con la carne."],q:"— FAO, eficiencia alimentaria"},
 {id:"r81",e:"❄️",f:["El Ártico está perdiendo ","12% del hielo cada década",". El metano de la ganadería es 28 veces más potente que el CO₂."],q:"— NASA, Climate Change Report"},
 {id:"r82",e:"🍃",f:["\"Lo que no se puede hacer con amor y respeto, ","no debería hacerse en absoluto",".\""],q:"— Mahatma Gandhi"},
 {id:"r83",e:"🐮",f:["Una vaca lechera produce ","8 veces más leche"," de lo que necesita su cría. Está siempre embarazada o pariendo. Vive 5 años en vez de 20."],q:"— Datos veterinarios, industria láctea"},
 {id:"r84",e:"🧪",f:["El Estudio Adventista siguió a ","96.000 personas durante años","en. Los veganos tienen 32% menos riesgo cardiovascular y viven 9 años más."],q:"— Adventist Health Study-2, Loma Linda"},
 {id:"r85",e:"🌐",f:["Si cada persona del mundo dejara la carne 1 día a la semana, sería como ","quitar 240 millones de coches"," de circulación durante un año."],q:"— Environmental Defense Fund"},
 {id:"r86",e:"🥬",f:["Un solo huevo industrial cuesta a una gallina ","6 horas de su tiempo",", calcio de sus huesos y una vida en jaula de tamaño A4. Pone 300 al año en lugar de 12."],q:"— Industry Welfare Reports"},
 {id:"r87",e:"💎",f:["\"Los animales del mundo existen por sus propias razones. ","No fueron creados para los humanos","\""],q:"— Alice Walker, Premio Pulitzer"},
 {id:"r88",e:"🎤",f:["Beyoncé y Jay-Z, Ariana Grande, Stevie Wonder, Pamela Anderson, Joaquin Phoenix, Natalie Portman, Russell Brand. ","Las voces más influyentes ya eligieron","."],q:"— Famosos veganos, lista creciente"},
 {id:"r89",e:"🏥",f:["La Universidad de Harvard recomienda la dieta basada en plantas como ","la mejor para reducir todas las causas de mortalidad","."],q:"— Harvard T.H. Chan School of Public Health"},
 {id:"r90",e:"🌿",f:["\"Si los mataderos tuvieran paredes de cristal, ","todo el mundo sería vegetariano",".\""],q:"— Paul McCartney, The Beatles"},
 {id:"r91",e:"🌊",f:["Las algas captan ","20 veces más CO₂"," que los bosques tropicales. Restaurar océanos vegetales es urgente."],q:"— UNESCO, ciencia oceánica"},
 {id:"r92",e:"🦠",f:["La gripe aviar, gripe porcina, COVID, vaca loca, sarampión... ","todas pandemias humanas vienen de la ganadería intensiva","."],q:"— OMS, zoonosis y salud pública"},
 {id:"r93",e:"💰",f:["Si la ganadería pagara por su impacto ambiental real, una hamburguesa costaría ","12€ y un filete 35€",". Subvencionamos su destrucción con impuestos."],q:"— True Cost Initiative, 2020"},
 {id:"r94",e:"🌟",f:["Lewis Hamilton, ","7 mundiales de Fórmula 1",", invierte en startups veganas. \"Lo siento como mi misión personal.\""],q:"— Lewis Hamilton, Forbes 2023"},
 {id:"r95",e:"🐰",f:["La industria cosmética testa en ","500.000 conejos al año"," en la UE para productos NO esenciales. Las marcas veganas no testan en animales."],q:"— Cruelty Free International"},
 {id:"r96",e:"🌋",f:["El gas metano del ganado equivale a las emisiones de ","32 volcanes Krakatoa al año","en. Pero a las vacas no las podemos apagar."],q:"— Penn State University, climatología"},
 {id:"r97",e:"⚖️",f:["\"Pensar es fácil. Actuar es difícil. ","Pero actuar como pensamos es lo más difícil de todo","\""],q:"— Johann Wolfgang von Goethe"},
 {id:"r98",e:"🌏",f:["Si los humanos somos solo el 0,01% de la biomasa pero hemos eliminado el ","83% de mamíferos salvajes",", ¿quién es la verdadera plaga del planeta?"],q:"— PNAS, biomasa global"},
 {id:"r99",e:"💫",f:["Has llegado lejos. Pero esto es solo el principio. La transformación real ocurre cuando ","cambias lo que comes",", cambias quién eres."],q:"— Tu propio camino"},
 {id:"r100",e:"🎬",f:["Has llegado al final... por ahora. ","¿Quieres seguir aprendiendo?"," En la sección **Más → Documentales y Canales** tienes contenido que cambiará tu visión del mundo. Pulsa el botón ▶ para ir directamente."],q:"— Tu próximo paso"}
];


// 📌 NOVEDADES — edita aquí para añadir nuevos productos o anuncios
const NOVEDADES = [
 { id:"nv1", tipo:"evento", super:"Madrid", e:"🎤", titulo:"Rivas Vegan Fest 2026", desc:"20 de junio · Madrid. La voz de los animales a través de las activistas que luchan por sus derechos. Avda. Armando Rodriguez Vallina (Metro Rivas Urbanizaciones)", link:"https://rivasveganfest.com/", col:"#9B59B6" },
];
// ── EMPEZAR SIN MIEDO ──
const DUDAS = [
 { id:"q1",e:"💪",q:"¿De dónde sacaré la proteína?",
   a:"De legumbres, tofu, tempeh, seitán, frutos secos y semillas. Las lentejas tienen 9g por cada 100g cocidas. El tofu, 17g. Los garbanzos, 19g. Si comes legumbre o tofu en cada comida principal, vas sobrado.\n\nLewis Hamilton (7 mundiales de F1), Novak Djokovic (24 Grand Slams) y Mike Tyson son veganos. La proteína vegetal funciona — y muchas veces, incluso mejor." },
 { id:"q2",e:"💊",q:"¿Necesito tomar suplementos?",
   a:"Para más tranquilidad y comodidad, un suplemento de B12 es la opción más fácil — barato, una toma a la semana y listo.\n\nA medida que avances irás conociendo otras fuentes naturales muy interesantes como la chlorella, el alga nori, alimentos fortificados (leches vegetales, levadura nutricional) y otros que iremos descubriendo juntos.\n\nLo importante: que no te falte. Como sea que decidas hacerlo." },
 { id:"q3",e:"⚡",q:"¿Tendré energía suficiente?",
   a:"Sí, y muchas personas reportan más energía que antes. Sin la carga digestiva de procesar carne, el cuerpo dedica esa energía a regenerarse.\n\nUn estudio de Stanford con gemelos idénticos (uno vegano, otro omnívoro) demostró que en 8 semanas el gemelo vegano mostraba marcadores de envejecimiento más lentos y menor inflamación.\n\nY si quieres pruebas vivas: Lewis Hamilton, Novak Djokovic, Mike Tyson, Venus Williams… campeones de élite que rinden al máximo siendo veganos.\n\nLa energía no falla — al contrario." },
 { id:"q4",e:"💶",q:"¿Es más caro?",
   a:"No, suele ser más barato. La base de la dieta vegana son los alimentos más económicos del supermercado:\n\n• 1kg de lentejas: 1,50€ (= 35 raciones de proteína)\n• 1kg de pollo: 8€ (= 6 raciones)\n• 500g de tofu: 2,50€\n• 500g de ternera: 8€\n\nLos productos veganos procesados (hamburguesas, quesos) son algo más caros, pero son extras, no la base.\n\nY aunque algo fuera más caro… ¿qué es caro de verdad? La salud de tus hijos, los años extra que vivirás, la vida de un animal, el planeta que les dejas. Por no mencionar la elevación de tu alma. Esa inversión es la más barata que harás en tu vida.\n\nComo dijo Leonardo da Vinci: «Llegará el día en que los hombres como yo verán el asesinato de un animal como ahora ven el de un hombre»." },
 { id:"q5",e:"🍽️",q:"¿Qué tengo que comer durante la semana?",
   a:"Tranquilidad: lo importante es lo que comes durante la semana, no la perfección de cada comida.\n\nQue a lo largo de la semana aparezcan: legumbres o tofu (casi a diario), un cereal (arroz, pasta, pan), verduras y frutas variadas, y un puñadito de frutos secos o semillas.\n\nEjemplos: lentejas con arroz, garbanzos con cuscús, tofu con pasta, hummus con pan integral.\n\nSi esos grupos están con regularidad, vas sobrado." },
 { id:"q6",e:"👨‍👩‍👧",q:"¿Mis hijos pueden ser veganos?",
   a:"Sí, totalmente. Y muchas familias lo hacen sin problema desde el embarazo.\n\nLa Asociación Americana de Dietética y la Academia Española de Nutrición confirman que una dieta vegana bien planificada es saludable en todas las etapas de la vida, incluyendo infancia y adolescencia.\n\nLas claves: B12 suplementada, suficientes calorías, variedad de alimentos y, si es posible, un pediatra que conozca el tema." },
 { id:"q7",e:"🍴",q:"¿Y cuando coma fuera de casa?",
   a:"Cada vez es más fácil. La mayoría de restaurantes tienen al menos una opción vegana o pueden adaptar un plato. Pizzerías, asiáticos, mexicanos, italianos, libaneses, hindús — todos tienen opciones.\n\nAplicaciones como HappyCow te muestran restaurantes veganos cerca de ti, y una búsqueda rápida en Google (\"restaurante vegano + tu ciudad\") te sorprenderá: está cambiando todo muy rápido." },
 { id:"q8",e:"🤔",q:"¿Es muy complicado?",
   a:"Al principio parece, pero en 2-3 semanas se vuelve automático. Tu cerebro aprende rápido las nuevas opciones y dejas de pensar.\n\nVe a tu ritmo. Solo tú sabes la mejor forma de llegar a tu objetivo. Lo importante es llegar.\n\nEsta app está hecha precisamente para acompañarte: tienes recetas, productos por supermercado, una semana ejemplo y la lista de la compra hecha. No estás solo en este camino." },
];
const PLATO_FACIL = [
 ["🫘","Una proteína","#7A4A8B","Legumbres,tofu,tempeh,seitán,etc."],
 ["🌾","Un cereal o tubérculo","#C8983B","Arroz,pasta,pan,patata,quinoa,etc."],
 ["🥗","Verduras a tope","#5A8A2A","Crudas y cocidas. Cuanto más colorido,mejor"],
 ["🥑","Una grasa buena","#4A7A2A","Aceite oliva,aguacate,frutos secos,etc."],
];
const SEMANA_EJ = [
 ["Lunes","Lentejas con verduras + arroz integral","Crema de calabaza + tostada con hummus"],
 ["Martes","Garbanzos con espinacas y cúrcuma","Tofu salteado con brócoli y arroz"],
 ["Miércoles","Pasta boloñesa con soja texturizada","Tortilla de garbanzo + ensalada"],
 ["Jueves","Quinoa con verduras al horno + aguacate","Crema de calabacín + sopa miso"],
 ["Viernes","Hamburguesa vegetal + ensalada con semillas","Curry de garbanzos con arroz"],
 ["Sábado","Paella de verduras","Falafel con hummus y pan de pita"],
 ["Domingo","Estofado de seitán con patatas","Pizza vegana casera con verduras"],
];
const COMPRA_SEM = [
 ["🫘 Legumbres y proteínas",["Lentejas pardinas (500g)","Garbanzos cocidos (2 botes)","Tofu firme (400g)","Soja texturizada (200g)","Seitán (300g)","Hamburguesas vegetales (4 ud)","Falafel (1 paquete)"]],
 ["🌾 Cereales y panes",["Arroz integral (500g)","Arroz basmati (250g)","Quinoa (250g)","Pasta (500g)","Pan de pita (4 ud)","Pan integral","Tortillas de garbanzo (2 ud)"]],
 ["🥬 Verduras y frutas",["Calabaza","Calabacín (3)","Espinacas (300g)","Brócoli","Tomates (6)","Aguacate (2)","Patatas (1kg)","Cebolla (4)","Ajo","Pimientos (3)"]],
 ["🥛 Otros",["Hummus","Salsa de tomate (2 botes)","Aceite de oliva","Especias","Levadura nutricional","Semillas variadas","Frutos secos"]],
];
const NUTRI = [
 ["🫘","#7A4A8B","Proteína","Legumbres,tofu,tempeh,seitán,frutos secos."],
 ["🩸","#C04040","Hierro","Lentejas,garbanzos,espinacas,sésamo. Con vitamina C."],
 ["🦴","#E8B84B","Calcio","Tofu,tahini,brócoli,almendras,leches fortificadas."],
 ["💊","#4A8AC0","B12","Suplemento o alimentos fortificados. Lo más importante."],
 ["🐟","#3A8A6A","Omega-3","Lino molido,chía,nueces. Una cucharada al día."],
 ["☀️","#F0A030","Vitamina D","Sol 15 min al día. Suplemento en invierno."],
];
const EST = [
 ["🌸","Primavera","#E8B89B","Depuración y vitalidad","Tras el invierno,el cuerpo pide alimentos que ayuden al hígado a limpiarse y a recuperar energía con vitaminas y antioxidantes.","Alcachofas,espárragos,guisantes,habas,fresas,cerezas,nísperos,rabanitos,ortigas,brotes tiernos,etc."],
 ["☀️","Verano","#F0D070","Hidratación y minerales","Con el calor perdemos agua y sales. Frutas y verduras con mucha agua y potasio te mantienen fresco por dentro.","Tomates,sandía,melón,pepino,calabacín,pimientos,melocotón,ciruelas,judía verde,albahaca,etc."],
 ["🍂","Otoño","#C8854A","Defensas y energía estable","Cambian las temperaturas. El cuerpo pide alimentos densos y nutritivos para reforzar el sistema inmune antes del frío.","Calabaza,setas,granadas,uvas,manzanas,peras,boniato,castañas,nueces,todo tipo de coles,etc."],
 ["❄️","Invierno","#7A9DB0","Calor interno y vitamina C","En el frío,el cuerpo necesita más energía y muchísima vitamina C para esquivar resfriados.","Naranjas,mandarinas,kiwis,pomelo,brócoli,coliflor,puerros,alcachofas,escarola,acelgas,todo tipo de tubérculos,etc."],
];
// ── LEGAL ──
const LEGAL = [
 { id:"l1",e:"⚕️",t:"Aviso nutricional",txt:"La información contenida en esta aplicación tiene carácter exclusivamente orientativo y educativo. No sustituye en ningún caso el consejo,diagnóstico o tratamiento de profesionales sanitarios cualificados (médicos,nutricionistas,dietistas).\n\nAntes de realizar cambios significativos en tu dieta,especialmente si padeces alguna enfermedad,estás embarazada,en período de lactancia,o se trata de menores,consulta con un profesional de la salud.\n\nLos resultados individuales pueden variar. Esta app no se responsabiliza de las decisiones tomadas únicamente en base a la información aquí presentada." },
 { id:"l2",e:"📄",t:"Aviso legal",txt:"Titular: Asociación W.E.S.A. (World Evolution Sports Association)\nCIF: G86461241\nInscrita en el Registro Nacional de Asociaciones — Grupo 1,Sección 1,Número 600087\nDomicilio fiscal: C/ Monte Escorial,nº 22, 28200 San Lorenzo del Escorial,Madrid\nContacto: heroesveganos@gmail.com\n\nEsta aplicación tiene como finalidad facilitar información sobre alimentación vegana,recetas,productos,restaurantes,santuarios y temas relacionados con un estilo de vida basado en plantas.\n\nLa Asociación W.E.S.A. se reserva el derecho a modificar el contenido sin previo aviso. El acceso a esta aplicación implica la aceptación de los presentes términos." },
 { id:"l3",e:"🔒",t:"Política de privacidad",txt:"En cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679) y la LOPDGDD,te informamos:\n\nResponsable: Asociación W.E.S.A. (World Evolution Sports Association) · CIF: G86461241 · heroesveganos@gmail.com\n\nDatos recogidos: únicamente el nombre que introduces y la fecha en que comenzaste a ser vegano. Estos datos se almacenan exclusivamente en tu propio dispositivo (almacenamiento local del navegador). No se envían a ningún servidor.\n\nFinalidad: personalizar tu experiencia y calcular tu impacto positivo.\n\nDerechos: acceso,rectificación,supresión,limitación,portabilidad y oposición. Ejerce estos derechos escribiendo a heroesveganos@gmail.com.\n\nNo se realiza tratamiento automatizado de datos ni se ceden a terceros." },
 { id:"l4",e:"🍪",t:"Política de cookies",txt:"Esta aplicación NO utiliza cookies de seguimiento,publicidad ni analítica.\n\nÚnicamente utiliza el almacenamiento local del navegador (localStorage) para recordar tu nombre y la fecha de inicio que tú mismo proporcionas. Esta información permanece exclusivamente en tu dispositivo.\n\nPuedes borrar estos datos en cualquier momento desde la configuración de tu navegador." },
 { id:"l5",e:"⚖️",t:"Términos de uso",txt:"Al usar esta aplicación aceptas:\n\n• Utilizarla con fines personales y no comerciales.\n\n• No reproducir,modificar ni distribuir el contenido sin autorización expresa.\n\n• Reconocer que la información se proporciona \"tal cual\",sin garantías de ningún tipo.\n\n• Eximir al titular de responsabilidad por decisiones tomadas en base al contenido.\n\n• La legislación aplicable es la española. Cualquier conflicto se someterá a los tribunales competentes de Madrid.\n\nLas marcas,productos y enlaces externos mencionados pertenecen a sus respectivos propietarios." },
];
const CATEGORIAS = [
 { id:"des",e:"🌅",nm:"Desayunos",col:"#2A6A5A",sidebar:"#2d7a45" },
 { id:"ens",e:"🥗",nm:"Entrantes/Ensaladas",col:"#3A6B2A",sidebar:"#3a7a2a" },
 { id:"sal",e:"🧄",nm:"Salsas",col:"#6a7a1a",sidebar:"#5a7a1a" },
 { id:"sop",e:"🍜",nm:"Sopas/Guisos",col:"#1a6a5a",sidebar:"#1a6a4a" },
 { id:"pro",e:"💪",nm:"Proteínas/Legumbres",col:"#2a5a7a",sidebar:"#2a5a6a" },
 { id:"pas",e:"🍝",nm:"Pastas/Arroces",col:"#5a5a1a",sidebar:"#4a5a1a" },
 { id:"piz",e:"🍕",nm:"Pizzas/Wraps/Burgers",col:"#7a4a1a",sidebar:"#6a4a1a" },
 { id:"pos",e:"🍮",nm:"Postres",col:"#6a3a6a",sidebar:"#5a3a5a" },
];
// 📌 RECETAS — 47 recetas reales
const PLATOS = {
 des:[
 { id:"d1",e:"🥣",nm:"Avena overnight",col:"#2A6A5A",desc:"Avena,leche vegetal,yogur vegano,chía y…",t:"5 min + reposo noche",kal:"290 kcal",nut:"Prot 9g · Carbos 48g · Grasas 7g",compra:["1 taza — copos de avena","2 cdas. — semillas de chía","½ cdta. — canela","½ taza — yogur de soja natural","1 taza — leche de avena","2 cdas. — sirope de arce o agave","½ cdta. — extracto de vainilla"],receta:["Mezclar todos los ingredientes de la base y repartir en vasitos individuales.","Dejar en el frigorífico por la noche para que la avena absorba bien la leche.","Por la mañana añadir la fruta y toppings al gusto y disfrutar."] },
 { id:"d2",e:"🍳",nm:"Revuelto de tofu",col:"#2A6A5A",desc:"Tofu desmenuzado con puerro,champiñon…",t:"15 min",kal:"200 kcal",nut:"Prot 16g · Carbos 10g · Grasas 10g",compra:["1 bloque — tofu","Puerro","Tomate","Champiñones","Cualquier verdura que tengas a mano","Pimentón al gusto","Pimienta al gusto","Sal negra al gusto","Cúrcuma al gusto","1 cda. — maizena","Levadura de cerveza al gusto","1 cdta. — levadura de repostería","½ taza — leche de soja sin azúcar"],receta:["Saltear el puerro, el tomate, los champiñones y las verduras elegidas.","Desmigar el tofu y añadir a la sartén.","Incorporar la cúrcuma, el pimentón, la pimienta y la maizena.","Añadir la leche de soja y la levadura de cerveza. Remover bien.","Cocinar hasta obtener la textura deseada. Añadir queso vegano y sal negra si se desea."] },
 { id:"d3",e:"🥑",nm:"Tostada de aguacate",col:"#2A6A5A",desc:"Pan tostado con aguacate aplastado,ac…",t:"5 min",kal:"280 kcal",nut:"Prot 4g · Carbos 22g · Grasas 18g · Fibra 6g",compra:["Pan tostado","Aguacate maduro","Aceite de oliva al gusto","Sal al gusto","Tomate en rodajas (opcional)","Brotes frescos (opcional)","Mix de semillas: chía,lino,cáñamo,calabaza o sésamo"], receta:["Tostar la rebanada de pan.","Aplastar el aguacate con un tenedor hasta textura cremosa.","Extender sobre el pan tostado.","Añadir aceite de oliva y sal al gusto.","Opcional: tomate en rodajas y brotes frescos.","Terminar con semillas al gusto."] },
 { id:"d4",e:"🥞",nm:"Tortitas veganas",col:"#2A6A5A",desc:"Tortitas esponjosas sin huevo ni láct…",t:"20 min",kal:"280 kcal",nut:"Prot 5g · Carbos 42g · Grasas 8g · Fibra 2g",compra:["Harina 2 tazas","Levadura de repostería 1 sobre","Sal ½ cdta.","Leche vegetal 2 tazas","Aceite de girasol 4 cdas.","Extracto de vainilla 1 cdta.","Canela en polvo ½ cdta.","Pepitas de chocolate (opcional)","Plátano en rodajas (opcional)","Sirope de arce (opcional)"], receta:["Mezclar ingredientes secos: harina,levadura,sal y canela.","Mezclar líquidos: leche vegetal,aceite y vainilla.","Unir ambas mezclas con movimientos suaves — está bien que queden grumos.","Dejar reposar 5 minutos.","Calentar sartén a fuego medio con un poco de aceite.","Verter porciones de masa. Cuando salgan burbujas dar la vuelta.","Servir con sirope de arce,plátano o pepitas de chocolate."] },
 { id:"d5",e:"🥣",nm:"Granola casera crujiente",col:"#2A6A5A",t:"30 min",kal:"380 kcal",nut:"Prot 8g · Carbos 48g · Grasas 18g",compra:["3 tazas — copos de avena gruesos","½ taza — nueces o almendras troceadas","½ taza — semillas de girasol o calabaza","½ taza — coco rallado sin azúcar","3 cdas. — aceite de coco derretido","4 cdas. — sirope de arce o agave","1 cdta. — canela","1 cdta. — vainilla","1 pizca — sal","½ taza — pasas o arándanos secos (añadir al final)"],receta:["Precalentar el horno a 170°C.","Mezclar en un bol grande la avena, los frutos secos, las semillas y el coco.","Añadir el aceite de coco, el sirope, la canela, la vainilla y la sal. Remover bien hasta que todo esté impregnado.","Extender en una bandeja de horno en una capa fina y uniforme.","Hornear 20-25 minutos removiendo a los 12 minutos para que se dore de manera uniforme.","Dejar enfriar completamente sin tocar — así se forman los grumos crujientes.","Añadir las pasas o arándanos una vez fría. Guardar en bote hermético hasta 3 semanas."] },
 { id:"d6",e:"🥤",nm:"Batido verde energético",col:"#2A6A5A",t:"5 min",kal:"180 kcal",nut:"Prot 4g · Carbos 36g · Grasas 4g",compra:["2 puñados — espinacas frescas","2 — plátanos maduros congelados","1 cdta. — jengibre fresco rallado","Zumo de ½ limón","300 ml — leche vegetal (avena, almendra o coco)","1 cda. — semillas de chía o lino molido","Opcional: ½ aguacate para más cremosidad","Opcional: 1 cda. mantequilla de cacahuete"],receta:["Meter todos los ingredientes en la batidora — primero los líquidos para facilitar el triturado.","Batir a máxima potencia durante 1 minuto hasta que quede completamente liso y sin trozos de espinaca.","Probar y ajustar: más limón si quieres más frescor, más plátano si quieres más dulzor.","Servir inmediatamente para aprovechar los nutrientes. Se puede guardar en la nevera máximo 24h.","Consejo: congelar los plátanos maduros por porciones — así el batido queda más frío y cremoso."] },
 { id:"d7",e:"🫐",nm:"Muffins de arándanos veganos",col:"#2A6A5A",t:"35 min",kal:"210 kcal",nut:"Prot 3g · Carbos 38g · Grasas 6g",compra:["2 tazas — harina","¾ taza — azúcar","1 sobre — levadura de repostería","½ cdta. — sal","½ cdta. — canela","1 taza — leche de soja sin azúcar","½ taza — aceite de girasol","1 cdta. — extracto de vainilla","1 cdta. — vinagre de manzana","1 taza — arándanos frescos o congelados","Ralladura de 1 limón"],receta:["Precalentar el horno a 180°C. Preparar un molde de muffins con cápsulas de papel.","Mezclar en un bol los ingredientes secos: harina, azúcar, levadura, sal y canela.","En otro bol mezclar los líquidos: leche de soja, aceite, vainilla, vinagre de manzana y ralladura de limón. El vinagre activa la levadura y sustituye al huevo.","Unir los líquidos con los secos con movimientos suaves — no sobrebatir, que queden algunos grumos.","Incorporar los arándanos con movimientos envolventes.","Repartir la masa en los moldes llenando ¾ partes. Poner un arándano extra encima de cada uno.","Hornear 20-22 minutos. Comprobar con un palillo — debe salir limpio. Dejar enfriar 10 minutos antes de desmoldar."] },
 { id:"d8",e:"🥔",nm:"Tortilla de patata vegana",col:"#2A6A5A",t:"45 min",kal:"260 kcal",nut:"Prot 10g · Carbos 38g · Grasas 9g",compra:["6 — patatas medianas o grandes","1 — cebolla","½ taza — harina de garbanzo","½ taza — harina de trigo","1 taza — agua o leche vegetal sin azúcar","2 cdas. — levadura nutricional","1 cdta. — levadura de repostería","½ cdta. — sal negra kala namak","½ cdta. — ajo en polvo","½ cdta. — cúrcuma","Sal y pimienta al gusto","Aceite para freír"],receta:["Pelar y cortar las patatas en láminas finas. Picar la cebolla en juliana.","Freír las patatas y la cebolla en abundante aceite a fuego medio durante 15-20 minutos hasta que estén tiernas. Escurrir bien el aceite.","En un bol mezclar la harina de garbanzo, la harina de trigo, el agua o leche vegetal, la levadura nutricional, la levadura de repostería, la sal negra, el ajo en polvo, la cúrcuma y la pimienta. Batir hasta que no haya grumos.","Añadir las patatas y cebolla escurridas a la mezcla. Remover bien para que se integren. Ajustar sal al gusto.","Calentar una sartén antiadherente con un poco de aceite. Verter la mezcla y cocinar a fuego medio-bajo tapado durante 10 minutos.","Dar la vuelta con la ayuda de un plato y cocinar otros 8 minutos por el otro lado.","Dejar reposar 5 minutos antes de cortar. La sal negra le da ese sabor característico a huevo."] },
 ],
 ens:[
 { id:"e1",e:"🌶️",nm:"Hummus de jalapeño",col:"#3A6B2A",desc:"Crema de anacardos y alubias blancas …",t:"10 min + remojo",kal:"180 kcal",nut:"Prot 6g · Carbos 10g · Grasas 13g",compra:["1 taza — anacardos (en remojo con agua caliente 30 minutos)","½ taza — alubias blancas escurridas","1 cda. — aceite de oliva","½ taza — agua","¾ cdta. — sal","1 cda. — zumo de limón","¼ cdta. — ajo en polvo","1 cda. — levadura de cerveza","8 rodajas — jalapeño"],receta:["Batir primero los anacardos escurridos, las alubias blancas, el aceite de oliva y el agua hasta obtener una base cremosa.","Añadir el resto de ingredientes (sal, zumo de limón, ajo en polvo, levadura de cerveza y jalapeño) y batir de nuevo hasta conseguir una crema fina y homogénea.","Ajustar sal al gusto."] },
 { id:"e2",e:"🫘",nm:"Hummus de alubias blancas",col:"#3A6B2A",desc:"Alubias blancas con ajo sofrito,romer…",t:"15 min",kal:"190 kcal",nut:"Prot 9g · Carbos 22g · Grasas 8g",compra:["1 bote — alubias blancas escurridas","4 dientes — ajo","Aceite de oliva","1 rama — romero","Zumo de limón al gusto","Sal al gusto","Queso parmesano al gusto","Tomates secos (opcional)"],receta:["Sofreír los 4 dientes de ajo en aceite de oliva junto con la rama de romero.","Retirar el romero y triturar las alubias escurridas junto con los ajos, el aceite, el zumo de limón y la sal.","Añadir el queso parmesano y los tomates secos (unos 4) si los vas a usar y triturar hasta obtener una textura cremosa."] },
 { id:"e3",e:"🧀",nm:"Salsa para nachos",col:"#3A6B2A",desc:"Salsa tipo queso con patata,anacardos…",t:"30 min",kal:"190 kcal",nut:"Prot 8g · Carbos 26g · Grasas 7g",compra:["3 — patatas","1 — zanahoria (cocer hasta blanda)","1 — boniato (opcional)","½ taza — agua de cocción de las patatas","½ taza — leche de soja","¼ taza — levadura de cerveza + 2 cdas.","½ taza — anacardos remojados","2 cdas. — miso en pasta (miso blanco)","1 cda. — zumo de limón","1 cdta. — vinagre","1 cdta. — sal","1 cdta. — cebolla en polvo","2 cdtas. — ajo en polvo","¼ cdta. — cúrcuma","½ cdta. — mostaza","½ cdta. — caldo en polvo"],receta:["Cocer las patatas, la zanahoria y el boniato (si se usa) hasta que estén muy blandos.","Poner todos los ingredientes en la batidora junto con el agua de cocción.","Batir hasta conseguir una salsa cremosa y homogénea."] },
 { id:"e4",e:"🥗",nm:"Aliño de mostaza dulce",col:"#3A6B2A",desc:"Aceite de oliva,limón,sirope de arce,ta…",t:"5 min",kal:"160 kcal",nut:"Prot 2g · Carbos 12g · Grasas 13g",compra:["⅓ taza — aceite de oliva","⅓ taza — zumo de limón","¼ taza — sirope de arce o agave","3 cdtas. — mostaza","3 cdas. — tahini","2 dientes — ajo","2 cdas. — agua","Sal y pimienta al gusto"],receta:["Poner todos los ingredientes en un vaso batidor.","Batir hasta obtener un aliño cremoso y homogéneo.","Ajustar sal y pimienta al gusto.","Si lo ves muy espeso, añade un poquito más de agua."] },
 { id:"e5",e:"🌻",nm:"Aliño de limón y girasol",col:"#3A6B2A",desc:"Semillas de girasol,limón,miso y ajo …",t:"5 min",kal:"140 kcal",nut:"Prot 4g · Carbos 8g · Grasas 10g",compra:["¾ taza — semillas de girasol crudas","1 ¼ taza — agua","⅓ taza — zumo de limón","2 dientes — ajo","4 cdtas — miso blanco","1 cda — sirope de arce o agave","½ cdta -  sal"],receta:["Poner todos los ingredientes en la batidora","Batir todo hasta conseguir una salsa cremosa","Ajustar sal al gusto."] },
 { id:"e6",e:"🥬",nm:"Aliño César vegano",col:"#3A6B2A",desc:"Anacardos,aceite,limón,mostaza y ajo en…",t:"5 min",kal:"180 kcal",nut:"Prot 5g · Carbos 6g · Grasas 15g",compra:["½ taza — anacardos remojados","¼ taza — agua","2 cdas. — aceite de oliva","1 cda. — zumo de limón","½ cda. — mostaza","½ cdta. — ajo en polvo","½ cdta. — sal","½ cdta. — pimienta"],receta:["Poner todos los ingredientes en la batidora.","Mezclar con la máquina hasta obtener una salsa fina y cremosa.","Mezclar con kale o tus hojas verdes preferidas, puedes echar por encima unos dados de pan tostado con ajo, sal y aceite, ¡quedan deliciosos!"] },
 { id:"e7",e:"🤠",nm:"Aliño ranchero",col:"#3A6B2A",desc:"Mayonesa vegana,leche de soja,hierbas…",t:"5 min",kal:"160 kcal",nut:"Prot 5g · Carbos 6g · Grasas 15g",compra:["1½ taza — mayonesa vegana","⅓ taza — leche de soja","1½ cdta. — vinagre de manzana","1 diente — ajo","½ cda. — perejil","1 cdta. — eneldo","1 cdta. — cebolla en polvo","¼ cdta. — pimentón","¼ cdta. — pimienta","Sal al gusto"],receta:["Poner todos los ingredientes en un bol.","Batir a mano hasta integrar bien.","Refrigerar antes de servir."] },
 { id:"e8",e:"🥦",nm:"Ensalada de brócoli cremosa",col:"#3A6B2A",desc:"Repollo,brócoli y kale con salsa crem…",t:"15 min",kal:"220 kcal",nut:"Prot 7g · Carbos 14g · Grasas 16g",compra:["Repollo — en tiras","Brócoli — en tiras","Kale — en tiras","Queso rallado vegano al gusto","4-5 cdas. — mayonesa vegana","1 cdta. — mostaza Dijon","2 cdas. — parmesano vegano","Zumo de limón al gusto","Ajo al gusto (opcional)","Sal y pimienta al gusto"],receta:["Cortar el repollo, el brócoli y el kale en tiras finas.","Mezclar todos los ingredientes de la salsa en un bol.","Combinar las verduras con la salsa y el queso rallado.","Remover bien y dejar reposar unos minutos antes de servir."] },
 { id:"e9",e:"🥔",nm:"Ensalada campera",col:"#3A6B2A",desc:"Patatas,pasta,tofu salteado,pimientos, …",t:"35 min",kal:"420 kcal",nut:"Prot 16g · Carbos 42g · Grasas 22g",compra:["4-5 — patatas cocidas","250 g — pasta cocida","250 g — tofu salteado","1 — cebolla","½ — pimiento verde","½ — pimiento rojo","½ taza — nueces","½ taza — aceitunas","2 — aguacates","1 diente — ajo + perejil machacado","Aceite, vinagre, sal y pimienta al gusto"],receta:["Cocer las patatas y la pasta. Dejar enfriar.","Saltear el tofu y reservar.","Cortar la cebolla, los pimientos y los aguacates.","Mezclar todo en un bol grande.","Aliñar con ajo machacado con perejil, aceite, vinagre, sal y pimienta."] },
 { id:"e10",e:"🍅",nm:"Gazpacho andaluz",col:"#3A6B2A",t:"15 min + 2h frío",kal:"120 kcal",nut:"Prot 2g · Carbos 12g · Grasas 7g",compra:["1 kg — tomates maduros (tipo pera)","1 — pepino mediano pelado","1 — pimiento verde italiano","½ — pimiento rojo","1 diente — ajo","½ — cebolla","2 rebanadas — pan del día anterior","100 ml — aceite de oliva virgen extra","2 cdas. — vinagre de manzana","Sal al gusto","Agua fría si queda muy espeso"],receta:["Lavar y trocear los tomates, el pepino, los pimientos, la cebolla y el ajo en trozos grandes.","Poner todo en la batidora junto con el pan, el vinagre y la sal. Triturar a máxima potencia hasta que quede fino.","Añadir el aceite de oliva poco a poco mientras sigues batiendo para que emulsione.","Colar con un colador fino para eliminar pieles y pepitas. Si queda muy espeso, añade un poco de agua fría.","Probar y ajustar sal y vinagre al gusto.","Guardar en la nevera al menos 2 horas. Servir muy frío. Ideal con pepino picado y pan tostado por encima."] },
 { id:"e11",e:"🍅",nm:"Salmorejo cordobés",col:"#3A6B2A",t:"10 min + 1h frío",kal:"180 kcal",nut:"Prot 3g · Carbos 18g · Grasas 10g",compra:["1 kg — tomates maduros tipo pera (pelados)","150 g — pan del día anterior (con miga, no de molde)","1 diente — ajo","100 ml — aceite de oliva virgen extra","1 cda. — vinagre de manzana","Sal al gusto","Toppings: tofu frito en dados, aguacate en trozos, tomate picado, garbanzos tostados"],receta:["Pelar los tomates y cortarlos en trozos. Colocar en la batidora.","Añadir el pan troceado, el ajo y el vinagre. Batir a máxima potencia hasta obtener una crema fina.","Incorporar el aceite de oliva en hilo mientras sigues batiendo para que emulsione bien.","Añadir sal al gusto. La textura debe ser espesa — más que el gazpacho.","Colar si quieres una textura perfectamente lisa.","Enfriar en la nevera mínimo 1 hora. Servir con tofu frito, aguacate y tomate picado por encima."] },
 { id:"e12",e:"🧆",nm:"Falafel casero",col:"#3A6B2A",t:"30 min + remojo noche",kal:"280 kcal",nut:"Prot 11g · Carbos 30g · Grasas 12g",compra:["250 g — garbanzos secos (en remojo 12h, NO cocidos)","1 — cebolla","4 dientes — ajo","1 puñado — perejil fresco","1 puñado — cilantro fresco","1 cdta. — comino en polvo","1 cdta. — cilantro en polvo","½ cdta. — pimentón","½ cdta. — sal","2 cdas. — harina de garbanzo o pan rallado","½ cdta. — levadura de repostería","Aceite de girasol para freír"],receta:["Escurrir los garbanzos remojados (no cocerlos — esto es clave para que queden bien).","Triturar en el robot de cocina los garbanzos con la cebolla, el ajo, el perejil y el cilantro. No triturar demasiado — debe quedar una textura granulada, no un puré.","Añadir el comino, cilantro en polvo, pimentón, sal, harina y levadura. Mezclar bien.","Si la mezcla está muy blanda, añadir un poco más de harina. Refrigerar 30 minutos.","Formar bolitas del tamaño de una nuez grande y aplanar ligeramente.","Freír en aceite caliente a fuego medio-alto durante 3-4 minutos por lado hasta que estén dorados.","Escurrir sobre papel. Servir con pan de pita, hummus y salsa tzatziki vegana."] },
 ],
 sal:[
 { id:"s1",e:"🥓",nm:"Salsa para beicon vegano",col:"#8A5A18",desc:"Salsa ahumada de soja y pimentón para…",t:"25 min",kal:"90 kcal",nut:"Prot 3g · Carbos 6g · Grasas 6g",compra:["2 cdas — aceite de girasol","3cdtas — salsa de soja","2 cdtas — pimentón","1 cda — ajo en polvo","4 cdas — levadura de cerveza","1 cda — sirope de arce/agave","1 cdta — extracto de humo","50ml — agua fría","Sal y pimienta al gusto","Obleas de Arroz"],receta:["Mezclar todos los ingredientes en un bol hasta obtener una salsa homogénea.","Coge las obleas, uno por uno y mójala en agua caliente, escurre un poco el agua, cortar en tiras anchas y pásala por la mezcla, que quede bien pegada la salsa por ambos lados, las vas colocando en una bandeja de horno.","Hornear a 180 grados unos 17minutos aproximadamente, dándoles la vuelta después de 10 minutos, deben quedar firmes y algo crocantes, cuidado que no se quemen!"] },
 { id:"s2",e:"🍗",nm:"Salsa marrón tipo gravy",col:"#8A5A18",desc:"Salsa oscura de caldo vegetal,levadur…",t:"10 min",kal:"80 kcal",nut:"Prot 2g · Carbos 8g · Grasas 6g",compra:["2 tazas — caldo vegetal","½ cdta. — cebolla en polvo","½ cdta. — ajo en polvo","2 cdas. — levadura de cerveza","1 cda. — salsa de soja","½ cdta. — mostaza","⅓ taza — harina","Sal y pimienta al gusto"],receta:["Mezclar todos los ingredientes.","Batir bien hasta integrar.","Cocer a fuego medio removiendo hasta espesar."] },
 { id:"s3",e:"🫙",nm:"Crema agria vegana",col:"#8A5A18",desc:"Anacardos con yogur vegano,limón y vi…",t:"5 min",kal:"130 kcal",nut:"Prot 4g · Carbos 7g · Grasas 10g",compra:["¾ taza — anacardos remojados","½ taza — yogur natural vegano","2 cdas. — zumo de limón","¾ cdta. — vinagre de manzana","¾ cdta. — sal"],receta:["Poner todos los ingredientes en la batidora.","Batir a velocidad 8 durante 1 minuto hasta obtener una crema lisa.","Dejar reposar en nevera antes de servir."] },
 { id:"s4",e:"🌿",nm:"Pesto de albahaca vegano",col:"#8A5A18",desc:"Albahaca,nueces,almendras,semillas y le…",t:"8 min",kal:"210 kcal",nut:"Prot 3g · Carbos 2g · Grasas 14g",compra:["2 tazas — albahaca fresca","⅓ taza — piñones (o otros frutos secos como nueces y almendras)","2 dientes — ajo","⅓ taza — aceite de oliva virgen extra","2 cdas. — levadura nutricional","2 cdas. — semillas trituradas (lino, chía, sésamo, cáñamo, calabaza)","Zumo de ½ limón","Sal al gusto"],receta:["Poner la albahaca, los piñones o frutos secos y el ajo en la batidora.","Añadir el aceite de oliva y triturar.","Añadir la levadura nutricional, las semillas, el zumo de limón y la sal.","Batir hasta obtener una salsa homogénea.","Ajustar sal y consistencia al gusto. Servir con pasta, en pizzas o en sándwiches, ¡da un toque alucinante!"] },
 { id:"s5",e:"🧀",nm:"Parmesano vegano",col:"#8A5A18",desc:"Nueces,levadura de cerveza,ajo en pol…",t:"3 min",kal:"110 kcal",nut:"Prot 4g · Carbos 3g · Grasas 8g",compra:["1 taza — nueces","4 cdas. — levadura nutricional","½ cdta. — ajo en polvo","½ cdta. — sal"],receta:["Poner todos los ingredientes en un procesador.","Pulsar hasta obtener un polvo fino tipo parmesano.","Guardar en un bote hermético en la nevera.","Dura hasta 2 semanas."] },
 { id:"s6",e:"🥒",nm:"Tzatziki vegano",col:"#8A5A18",desc:"Mayonesa vegana con pepino rallado,en…",t:"10 min",kal:"120 kcal",nut:"Prot 3g · Carbos 4g · Grasas 8g",compra:["1 taza — yogur vegano natural sin azúcar ó mayonesa","½ — pepino rallado y escurrido","1 diente — ajo picado fino","1 cda. — aceite de oliva","1 cda. — zumo de limón","1 cda. — eneldo fresco o seco","Sal al gusto"],receta:["Rallar el pepino y escurrirlo bien con las manos.","Mezclar el yogur o la mayonesa con el pepino escurrido.","Añadir el ajo, el aceite, el zumo de limón y el eneldo.","Salar al gusto y refrigerar 30 minutos antes de servir."] },
 ],
 sop:[
 { id:"so1",e:"🍛",nm:"Dhal de lentejas rojas",col:"#1A4A78",desc:"Lentejas rojas con leche de coco,gara…",t:"35 min",kal:"340 kcal",nut:"Prot 9g · Carbos 28g · Grasas 6g",compra:["1½ taza — lentejas rojas","2 dientes — ajo picados","½ — cebolla picada","1 — puerro picado","1 — zanahoria picada","½ cdta. — ajo en polvo","¼ cdta. — jengibre en polvo (o 1 cdta. fresco rallado)","½ cdta. — cúrcuma","1 cdta. — garam masala","2 cdtas. — curry en pasta o polvo","2 tazas — caldo vegetal","1 taza — tomate triturado natural","1 cda. — azúcar","1 lata — leche de coco","2 cdas. — sriracha (opcional)","Sal y pimienta al gusto"],receta:["Sofreír la cebolla, el ajo, el puerro y la zanahoria en aceite de coco.","Añadir todas las especias, remover 1 minuto.","Incorporar las lentejas, el caldo, el tomate, azúcar, sriracha y leche de coco.","Cocer a fuego bajo, tapado, 35 minutos aproximadamente hasta que las lentejas se deshagan.","Añadir zumo de limón y sal al gusto.","Servir con arroz o pan naan."] },
 { id:"so2",e:"🌮",nm:"Enchiladas veganas",col:"#1A4A78",desc:"Tortillas rellenas de alubias negras …",t:"50 min",kal:"380 kcal",nut:"Prot 13g · Carbos 52g · Grasas 14g",compra:["1 paquete — tortillas mexicanas","Queso vegano al gusto","Para el Relleno:","1 - cebolla","1 - puerro","½ - pimiento verde","1 - boniato (precocinado anteriormente)","2 tazas — alubias negras precocinadas","1 cdta — comino","½ cdta — canela","3 cdas — salsa de tomate frito","½ taza — queso rallado vegano","Sal/pimienta al gusto","Para la salsa:","3 cdas — aceite de oliva","3 cdas — harina","1 cda — chili en polvo","1 cdta — cominos","½ cdta — ajo en polvo","¼ cdta — orégano","¼ cdta — sal","⅛ cdta — canela","2 tazas — caldo de verduras o ¨pollo¨vegano","2 cdas - salsa de tomate","1 cdta — vinagre"],receta:["Sofreír la cebolla, el puerro y el pimiento hasta que se ablandan. Añadir la pulpa del boniato, las alubias y los demás ingredientes. Mezclar bien. Reservar","Hacer la salsa: calentar el aceite y añadir la harina mezclada con todas las especias, removiendo bien.","Incorporar el caldo removiendo constantemente, la salsa de tomate y el vinagre. Cocinar unos minutos hasta espesar.","Montaje: extender un poco de la salsa en el fondo de una fuente, rellenar las tortillas mexicanas, enrollarlas y colocarlas en la bandeja","Cubrir con el resto de la salsa y mas queso vegano rallado. Hornear 25 minutos."] },
 { id:"so3",e:"🥘",nm:"Estofado con puré de patata",col:"#1A4A78",desc:"Seitán,zanahoria,boniato,guisantes y ca…",t:"50 min",kal:"350 kcal",nut:"Prot 14g · Carbos 46g · Grasas 8g",compra:["1 — cebolla","2 dientes — ajo","2 — zanahorias","2 ramas — apio","Guisantes al gusto","Boniatos al gusto","Seitán cortado en cubos (saltear y añadir al final)","1 chorro — vino tinto","2 cdas. — tomate frito","1 cdta. — condimento italiano","1 cdta. — polvo de shiitake (opcional)","4 tazas — caldo vegetal","½ cdta. — pimentón","3 cdas. — salsa de soja","¼ taza — harina (para espesar)","Sal y pimienta al gusto"],receta:["Sofreír la cebolla, el ajo, las zanahorias y el apio.","Añadir el tomate frito, el condimento italiano, el polvo de shiitake, la salsa de soja, el pimentón y el vino tinto.","Incorporar el caldo, los guisantes y los boniatos. Añadir la harina removiendo bien para que no queden grumos.","Cocer a fuego bajo hasta espesar.","Saltear el seitán en cubos y añadir al final.","Servir encima de puré de patata."] },
 { id:"so4",e:"🫘",nm:"Potaje de garbanzos",col:"#1A4A78",desc:"Garbanzos con puerro,repollo,espinaca…",t:"45 min",kal:"320 kcal",nut:"Prot 16g · Carbos 46g · Grasas 7g",compra:["1 — puerro","¼ cabeza — repollo","1 — zanahoria","1 rama — apio","2 cdas. de aceite de oliva","2 cdas. — pimentón dulce","1 — pastilla de caldo","1 hoja — laurel","1 — pimiento verde (retirar al final)","1 taza — espinacas salteadas aparte","1 bote / 2 tazas — garbanzos precocinados","1 taza — macarrones","Tofu en tiras salteado (para servir encima)"],receta:["Sofreír el puerro, el repollo, la zanahoria y el apio con aceite, pimentón y la pastilla de caldo.","Añadir 1,8 litros de agua, el laurel y el pimiento verde. Dejar cocer 20 minutos.","Retirar el pimiento verde y añadir los garbanzos y los macarrones.","Cocer 10 minutos más.","Añadir las espinacas salteadas, remover y apagar.","Servir con el tofu en tiras por encima."] },
 { id:"so5",e:"🥣",nm:"Crema de puerros Vichyssoise",col:"#1A4A78",desc:"Crema suave de puerros y patata con n…",t:"35 min",kal:"210 kcal",nut:"Prot 5g · Carbos 32g · Grasas 7g",compra:["5 — puerros","3 — patatas","4 tazas — caldo vegetal","Nuez moscada al gusto","Sal y pimienta al gusto","Nata vegetal al gusto"],receta:["Saltear los puerros y las patatas troceadas.","Añadir el caldo y cocinar hasta que las patatas estén tiernas.","Triturar todo junto hasta obtener una crema fina.","Añadir nata vegetal, nuez moscada, sal y pimienta al gusto.","Se puede servir caliente o fría."] },
 { id:"so6",e:"🧄",nm:"Sopa de ajo castellana",col:"#1a6a5a",t:"25 min",kal:"190 kcal",nut:"Prot 5g · Carbos 28g · Grasas 7g",compra:["8 dientes — ajo laminados","4 rebanadas — pan del día anterior","1 litro — caldo vegetal","4 cdas. — aceite de oliva virgen extra","1 cdta. — pimentón dulce","½ cdta. — pimentón ahumado","Sal y pimienta al gusto","Perejil fresco para decorar"],receta:["Calentar el aceite en una cazuela a fuego medio y dorar los ajos laminados hasta que estén dorados pero no quemados.","Añadir el pan troceado y remover para que absorba el aceite y se dore ligeramente.","Retirar del fuego un momento y añadir el pimentón dulce y ahumado. Remover rápidamente para que no se queme.","Volver al fuego y verter el caldo vegetal caliente. Remover bien.","Cocer a fuego bajo 10 minutos para que el pan se deshaga y la sopa quede densa.","Ajustar sal y pimienta. Servir bien caliente con perejil picado."] },
 { id:"so7",e:"🥕",nm:"Crema de zanahoria y jengibre",col:"#1a6a5a",t:"35 min",kal:"180 kcal",nut:"Prot 3g · Carbos 22g · Grasas 8g",compra:["600 g — zanahorias peladas y troceadas","1 — puerro troceado","1 — cebolla","2 dientes — ajo","1 — patata mediana troceada","1 cdta. — jengibre fresco rallado (o ½ cdta. en polvo)","1 lata — leche de coco","800 ml — caldo vegetal","1 cdta. — cúrcuma","½ cdta. — comino","Aceite de oliva, sal y pimienta","Semillas de calabaza para decorar (opcional)"],receta:["Sofreír la cebolla, el puerro y el ajo en aceite a fuego medio hasta que estén blandos.","Añadir el jengibre, la cúrcuma y el comino. Remover 1 minuto para que suelten el aroma.","Incorporar las zanahorias y la patata troceadas. Mezclar bien con el sofrito.","Verter el caldo vegetal hasta cubrir. Cocer tapado a fuego medio 20 minutos hasta que las verduras estén muy tiernas.","Añadir la leche de coco y triturar con la batidora hasta obtener una crema muy fina.","Ajustar sal, pimienta y consistencia — si queda muy espesa añadir un poco más de caldo.","Servir caliente con semillas de calabaza y un chorrito de aceite de oliva por encima."] },
 { id:"so8",e:"🥦",nm:"Crema de brócoli y coco",col:"#1a6a5a",t:"30 min",kal:"160 kcal",nut:"Prot 6g · Carbos 14g · Grasas 9g",compra:["1 — brócoli grande (unos 500 g) cortado en ramitos","1 — cebolla picada","2 dientes — ajo","1 — patata mediana","1 lata — leche de coco","700 ml — caldo vegetal","½ cdta. — nuez moscada","1 cda. — levadura nutricional","Aceite de oliva, sal y pimienta","Pipas de girasol tostadas para decorar"],receta:["Sofreír la cebolla y el ajo en aceite hasta que estén transparentes.","Añadir la patata troceada y los ramitos de brócoli. Remover 2 minutos.","Verter el caldo vegetal y cocer tapado 15 minutos hasta que todo esté tierno.","Añadir la leche de coco, la levadura nutricional y la nuez moscada.","Triturar con batidora hasta obtener una crema verde brillante y muy fina.","Ajustar sal y pimienta al gusto. Si queda muy espesa añadir un poco de caldo.","Servir con pipas de girasol tostadas y un hilo de aceite de oliva."] },
 { id:"so9",e:"🍲",nm:"Cocido vegano madrileño",col:"#1a6a5a",t:"1h 30 min",kal:"420 kcal",nut:"Prot 18g · Carbos 52g · Grasas 10g",compra:["1 bote — garbanzos cocidos","2 — patatas medianas","2 — zanahorias","1 — nabo","¼ cabeza — repollo","1 — puerro","2 ramas — apio","200 g — seitán o tofu ahumado en trozos","1 — chorizo vegano (opcional)","1 — morcilla vegana (opcional)","1 pastilla — caldo vegetal","1 hoja — laurel","1 cdta. — pimentón ahumado","Aceite de oliva, sal y pimienta","Fideos finos para la sopa (opcional)"],receta:["Poner en una olla grande el puerro, el apio, la zanahoria, el nabo y el repollo con 2 litros de agua, la pastilla de caldo y el laurel. Cocer 30 minutos a fuego medio.","Añadir las patatas troceadas y los garbanzos. Cocer otros 20 minutos.","En una sartén aparte dorar el seitán o tofu ahumado con el pimentón y un chorrito de aceite. Añadir a la olla junto con el chorizo y morcilla veganos si se usan.","Cocer 15 minutos más hasta que todo esté bien integrado. Ajustar sal.","Servir en dos vuelcos: primero el caldo con fideos cocidos en él, y después los garbanzos y verduras con el seitán y las 'carnes' veganas por encima.","Aliñar con un chorrito de aceite de oliva y pimentón ahumado al servir."] },
 { id:"so10",e:"🍜",nm:"Sopa miso casera",col:"#1a6a5a",t:"20 min",kal:"130 kcal",nut:"Prot 8g · Carbos 12g · Grasas 5g",compra:["1 litro — agua o caldo dashi vegano (alga kombu + agua)","3 cdas. — miso blanco o rojo (shiro o aka miso)","200 g — tofu firme en dados pequeños","1 trozo — alga wakame seca (rehidratar en agua 5 min)","2 — cebolletas o cebollino picado","1 cdta. — aceite de sésamo","Salsa de soja al gusto","Opcional: setas shiitake, fideos soba, espinacas"],receta:["Preparar el caldo: si usas kombu, poner el alga en agua fría y calentar a fuego lento sin que hierva. Retirar el alga antes de que hierva.","Añadir el tofu en dados y las setas si se usan. Cocer a fuego suave 5 minutos.","Añadir el alga wakame rehidratada y escurrida.","Retirar del fuego. Disolver el miso en un cucharón con un poco del caldo caliente hasta que no queden grumos y añadir a la olla. NUNCA hervir el miso — destruye sus propiedades.","Añadir el aceite de sésamo y ajustar con salsa de soja si hace falta sal.","Servir inmediatamente con cebolleta o cebollino picado por encima."] },
 ],
 pro:[
 { id:"pr1",e:"🥬",nm:"Judías verdes de restaurante",col:"#5A3A8A",desc:"Judías verdes con ajo tostado,tahini,…",t:"20 min",kal:"130 kcal",nut:"Prot 4g · Carbos 12g · Grasas 8g",compra:["1 bandeja — judías verdes","1 cabeza — ajos","2 cdas. — aceite de oliva","1 tsp. — tahini","4 cdas. — salsa de soja","2 cdas. — azúcar de coco"],receta:["Cortar las judías y hervir 8 minutos. Colar.","Triturar la cabeza de ajos con 2 cdas. de aceite de oliva.","Saltear las judías hasta que doren.","Añadir el ajo y cocinar unos minutos más.","Incorporar el tahini, la salsa de soja y el azúcar de coco.","Cocinar hasta que la salsa se funda y ligue bien."] },
 { id:"pr2",e:"🧆",nm:"Tofu coreano",col:"#5A3A8A",desc:"Tofu crujiente con salsa de soja,srir…",t:"25 min",kal:"260 kcal",nut:"Prot 14g · Carbos 8g · Grasas 10g",compra:["400g — tofu firme","3 cdas. — salsa de soja","1 cda. — sirope de arce","1 cda. — aceite de sésamo","1 cda. — sriracha o gochujang","1 diente — ajo picado","1 cdta. — jengibre rallado","1 cda. — maicena","Semillas de sésamo al gusto","Cebollino picado al gusto"],receta:["Cortar el tofu en cubos y secar bien con papel.","Mezclar salsa de soja, sirope, aceite de sésamo, sriracha, ajo y jengibre.","Rebozar el tofu en maicena.","Freír el tofu en sartén hasta dorar por todos los lados.","Verter la salsa por encima y cocinar 2 minutos más.","Servir con sésamo y cebollino."] },
 { id:"pr3",e:"💪",nm:"Seitán casero",col:"#5A3A8A",desc:"Gluten de trigo con caldo,soja y acei…",t:"1h 20 min",kal:"180 kcal",nut:"Prot 24g · Carbos 6g · Grasas 7g",compra:["500 g — gluten de trigo","750 ml — agua","1 taza — aceite de oliva (freír la cebolla picada hasta dorar, colar y usar solo el aceite)","1 — cebolla picada","3 cdas. — salsa de soja","2 cdas. — salsa de champiñón","1 cdta. — pimienta (½ blanca, ½ negra)","1¼ cdta. — sal","2 cdtas. — caldo en polvo"],receta:["Freír la cebolla picada en el aceite de oliva hasta dorar. Colar y reservar solo el aceite.","En el robot de cocina, poner primero los líquidos (incluido el aceite colado).","Añadir el gluten y mezclar a potencia 4 durante 3 minutos vigilando.","Separar en dos porciones y dar forma.","Cocinar al vapor a fuego bajo durante 1 hora."] },
 { id:"pr4",e:"🍗",nm:"Nuggets de seitán",col:"#5A3A8A",desc:"Nuggets de gluten de trigo con tahini…",t:"45 min",kal:"260 kcal",nut:"Prot 22g · Carbos 24g · Grasas 8g",compra:["2 tazas — gluten de trigo","5 cdas. — levadura de cerveza","2 cdtas. — cebolla en polvo","3 cdtas. — ajo en polvo","1 cdta. — sal","1 cdta. — pimienta","1 cdta. — salsa picante","2 cdas. — salsa de soja","4 cdas. — tahín","1½ taza — caldo vegano sabor pollo","Líquido: 1 cda. mostaza, 1 cda. ketchup, 3 cdas. maicena, ½ taza agua","Rebozado: 1 taza harina de espelta, 2 cdtas. sal, 1 cdta. pimienta blanca, 1 cdta. cebolla en polvo, 1 cdta. ajo en polvo, 1 cdta. pimentón"],receta:["Mezclar todos los ingredientes de la masa y amasar bien hasta obtener una textura elástica.","Dar forma de nuggets.","Pasar cada nugget primero por el baño líquido y luego por el rebozado.","Freír con poco aceite hasta que estén dorados."] },
 { id:"pr5",e:"🌿",nm:"Espinacas con garbanzos sevillana",col:"#5A3A8A",desc:"Garbanzos y espinacas con salsa de aj…",t:"25 min",kal:"310 kcal",nut:"Prot 12g · Carbos 22g · Grasas 8g",compra:["600g — espinacas cocidas","800g — garbanzos cocidos","10 dientes — ajo tostados","2 rebanadas — pan tostado","1 cdta. — cominos en polvo","2 cdtas. — sal","400 ml — agua","4 cdas. — aceite","2 cdtas. — pimentón"],receta:["Sofreír los ajos tostados en aceite.","Batir en la batidora los ajos, el pan tostado, cominos, sal y agua.","Volver a la sartén con las espinacas y garbanzos.","Añadir el pimentón y cocer 15 minutos."] },
 { id:"pr6",e:"🥙",nm:"Torta de hummus y verduras asadas",col:"#5A3A8A",desc:"Masa con hummus,verduras asadas y que…",t:"30 min",kal:"320 kcal",nut:"Prot 10g · Carbos 42g · Grasas 12g",compra:["Masa (hojaldre, masa brisa o masa de pizza)","Hummus (cantidad al gusto)","Cualquier verdura que tengas a mano (tomates cherry, calabacín, champiñones, cebolla, puerro...)","Sal y aceite de oliva","Queso vegano al gusto"],receta:["Cortar las verduras y hornear con sal y aceite hasta que estén tiernas.","Untar la masa con hummus generosamente.","Repartir las verduras asadas por encima y añadir el queso.","Hornear a 210° durante 20 minutos aproximadamente."] },
 { id:"pr7",e:"🫙",nm:"Frijoles refritos mexicanos",col:"#5A3A8A",desc:"Judías pintas cocidas con ajo y cebol…",t:"3h + cocción",kal:"220 kcal",nut:"Prot 8g · Carbos 24g · Grasas 5g",compra:["2 botes — alubias pintas o negras","1 — cebolla picada","2 dientes — ajo","1 cdta. — comino","½ cdta. — chile en polvo","2 cdas. — aceite de oliva","Sal al gusto","Zumo de lima al gusto"],receta:["Sofreír la cebolla y el ajo en aceite.","Añadir el comino y el chile, remover 1 minuto.","Incorporar las alubias escurridas.","Pasar por la batidora las alubias e incorporar a la sartén.","Cocinar 10 minutos removiendo.","Añadir sal y zumo de lima al gusto."] },
 { id:"pr9",e:"🧇",nm:"Croquetas de espinacas y champiñones",col:"#2a5a7a",t:"1h + reposo",kal:"180 kcal",nut:"Prot 5g · Carbos 20g · Grasas 8g",compra:["200 g — espinacas frescas o congeladas","200 g — champiñones picados muy finos","1 — cebolla picada fina","2 dientes — ajo picados","3 cdas. — harina","500 ml — leche de soja sin azúcar","2 cdas. — levadura nutricional","Nuez moscada, sal y pimienta al gusto","Aceite de oliva","Rebozado: leche de soja + harina de garbanzo (para mojar) y pan rallado (para rebozar)"],receta:["Sofreír la cebolla y el ajo en aceite. Añadir los champiñones y cocinar hasta que pierdan toda el agua.","Añadir las espinacas y cocinar hasta que se integren. Salpimentar y añadir nuez moscada.","Incorporar la harina y tostar 2 minutos removiendo constantemente.","Añadir la leche de soja poco a poco sin dejar de remover hasta obtener una bechamel densa que se despegue de las paredes. Añadir la levadura nutricional.","Volcar en un recipiente, tapar con film a piel y dejar enfriar en la nevera mínimo 2 horas.","Formar las croquetas con las manos húmedas. Pasar por la mezcla de leche de soja y harina de garbanzo y luego por pan rallado.","Freír en aceite abundante bien caliente hasta que estén doradas. Escurrir sobre papel."] },
 { id:"pr10",e:"🥙",nm:"Shawarma de seitán",col:"#2a5a7a",t:"30 min",kal:"380 kcal",nut:"Prot 22g · Carbos 38g · Grasas 14g",compra:["300 g — seitán en tiras finas","1 — cebolla roja en juliana","1 cdta. — comino","1 cdta. — coriandro en polvo","1 cdta. — pimentón ahumado","½ cdta. — cúrcuma","½ cdta. — canela","½ cdta. — ajo en polvo","2 cdas. — salsa de soja","1 cda. — aceite de oliva","Pan de pita o naan","Para servir: lechuga, tomate, pepino, salsa tzatziki vegana o tahini"],receta:["Mezclar todas las especias con la salsa de soja y el aceite para hacer la marinada.","Cortar el seitán en tiras finas y marinar al menos 15 minutos — mejor 1 hora.","Saltear la cebolla en una sartén a fuego medio-alto hasta que esté pochada y con bordes dorados.","Añadir el seitán marinado y cocinar a fuego alto 5-7 minutos removiendo hasta que esté bien dorado y con los bordes crujientes.","Calentar el pan de pita o naan.","Servir el shawarma en el pan con lechuga, tomate, pepino y salsa tzatziki vegana o tahini con limón."] },
 { id:"pr11",e:"🌿",nm:"Seitán a la plancha con chimichurri",col:"#2a5a7a",t:"20 min",kal:"290 kcal",nut:"Prot 26g · Carbos 8g · Grasas 14g",compra:["300 g — seitán en filetes","Sal, pimienta y aceite para la plancha","Chimichurri:","1 manojo — perejil fresco picado fino","4 dientes — ajo picados finos","½ — guindilla o chile fresco picado","1 cdta. — orégano seco","½ cdta. — pimentón","100 ml — aceite de oliva virgen extra","3 cdas. — vinagre de manzana","Sal al gusto"],receta:["Preparar el chimichurri: mezclar el perejil, el ajo, la guindilla, el orégano y el pimentón. Añadir el aceite y el vinagre. Salar y dejar reposar al menos 15 minutos para que los sabores se integren.","Cortar el seitán en filetes de 1 cm de grosor. Salpimentar.","Calentar la plancha o sartén a fuego muy alto con un poco de aceite.","Cocinar los filetes de seitán 3-4 minutos por cada lado hasta que estén bien marcados y crujientes por fuera.","Servir inmediatamente con el chimichurri por encima y acompañado de patatas, arroz o ensalada."] },
 ],
 pas:[
 { id:"pa1",e:"🧀",nm:"Mac & Cheese vegano",col:"#7A4A10",desc:"Macarrones con salsa cremosa de anaca…",t:"30 min",kal:"420 kcal",nut:"Prot 10g · Carbos 38g · Grasas 14g",compra:["2 cdas. — margarina","5 dientes — ajo","1 cda. — orégano","1 cdta. — piri piri (saltear 1 minuto)","2 tazas — caldo vegano sabor pollo","¾ taza — crema de anacardos (¾ taza anacardos remojados, escurridos y batidos con ½ taza leche soja sin azúcar, 1 cda. limón y sal)","3 cdtas. — mostaza","2 cdas. — levadura nutricional","⅓ taza — tomates secos","2 tazas — queso rallado vegano","2 cdas. — tapioca","Sal y pimienta al gusto","Un poco de agua de la pasta"],receta:["Cocer la pasta según indicaciones del paquete.","Saltear la margarina con el ajo, orégano y piri piri 1 minuto.","Añadir el caldo, la crema de anacardos, la mostaza y la levadura.","Incorporar los tomates secos, el queso rallado y la tapioca.","Cocer a fuego medio hasta espesar, añadiendo agua de la pasta si necesita.","Mezclar con la pasta y servir."] },
 { id:"pa2",e:"🍝",nm:"Tallarines tipo Alfredo",col:"#7A4A10",desc:"Salsa cremosa de anacardos y ajo con …",t:"25 min",kal:"280 kcal",nut:"Prot 8g · Carbos 42g · Grasas 12g",compra:["250g — tallarines","1 — cebolla","4 dientes — ajo","1 taza — caldo sabor pollo (para sofreír)","1 taza — anacardos remojados en agua caliente 30 minutos","½ cdta. — sal","½ cdta. — pimienta","2 cdas. — levadura nutricional","½ cda. — limón","2 tazas — caldo vegano sabor pollo (para la salsa)","Bocados de pollo vegano (opcional, por encima)"],receta:["Cocer la pasta según indicaciones.","Sofreír la cebolla y el ajo con 1 taza de caldo hasta absorber líquido.","Pasar a la batidora con los anacardos escurridos, sal, pimienta, levadura, limón y 2 tazas de caldo. Batir bien hasta conseguir una salsa cremosa.","Volver a la sartén y cocer hasta espesar.","Mezclar con la pasta y servir. Puedes añadir bocados de pollo vegano por encima."] },
 { id:"pa3",e:"🍝",nm:"Pasta Boloñesa Vegana",col:"#7A4A10",desc:"Boloñesa 100% vegetal con soja textur…",t:"30 min",kal:"480 kcal",compra:["Soja fina texturizada 80g","Salsa de tomate triturado 400g","Pasta al gusto 1 paquete","Aceite de oliva 3 cdas.","Azúcar 1 cda.","Sal 1 cdta.","Orégano seco 1 cdta.","Ajo en polvo ½ cdta.","Cebolla en polvo ½ cdta.","Comino ½ cdta.","Pimentón ½ cdta.","Pimienta negra al gusto"], receta:["Hidratar la soja en agua caliente o caldo vegetal. Escurrir bien.","Cocer la pasta según instrucciones. Escurrir y reservar.","Saltear la soja con aceite, ajo, cebolla, comino, pimentón, sal y pimienta 5-7 min hasta dorar.","Freír el tomate con azúcar, sal y orégano hasta reducir.","Mezclar soja con la salsa. Servir sobre la pasta con más orégano."] },
 { id:"pa4",e:"🥬",nm:"Pasta con Tofu y Espinacas",col:"#7A4A10",desc:"Pasta cremosa con tofu dorado,espinac…",t:"30 min",kal:"520 kcal",compra:["Tofu firme 200g","Espinacas 150g","Ajo x3 dientes","Leche de soja 250ml","Maizena 1½ cdas.","Pasta al gusto 1 paquete","Aceite de oliva 2 cdas.","Sal 1 cdta.","Pimienta negra al gusto","Queso vegano rallado ½ taza (opcional)"], receta:["Cocer la pasta. Escurrir y reservar.","Dorar el tofu en dados con aceite hasta dorado. Salpimentar.","Cocer espinacas 3-4 min. Escurrir.","Disolver maizena en leche fría. Calentar resto de leche,añadir mezcla,sal y pimienta. Remover hasta bechamel.","Saltear espinacas con ajo 2-3 min. Añadir tofu y pasta. Verter bechamel y mezclar.","Añadir queso vegano,mezclar y servir."] },
 { id:"pa5",e:"🥘",nm:"Paella de verduras",col:"#5a5a1a",t:"45 min",kal:"380 kcal",nut:"Prot 8g · Carbos 62g · Grasas 10g",compra:["2 tazas — arroz bomba o redondo","1 — pimiento rojo en tiras","1 — pimiento verde en tiras","2 — tomates maduros rallados","1 taza — judía verde troceada","1 taza — alcachofas (frescas o congeladas)","1 taza — champiñones","1 — cebolla picada","4 dientes — ajo picados","1 cdta. — pimentón dulce","1 pizca — azafrán (o ½ cdta. cúrcuma)","5 tazas — caldo vegetal caliente","Aceite de oliva, sal y romero al gusto"],receta:["Calentar aceite en la paellera a fuego medio-alto y sofreír los pimientos, la cebolla y el ajo hasta que se ablanden.","Añadir los tomates rallados y el pimentón. Sofreír 5 minutos hasta que se haga un sofrito denso.","Incorporar las judías verdes, las alcachofas y los champiñones. Cocinar 5 minutos más.","Añadir el arroz y mezclar bien con el sofrito durante 2 minutos.","Verter el caldo caliente con el azafrán o la cúrcuma disueltos. Extender el arroz en una capa uniforme y NO remover más.","Cocer a fuego alto 5 minutos, luego a fuego medio-bajo 15 minutos hasta que el caldo se absorba.","Al final subir el fuego 1-2 minutos para conseguir el socarrat (costrita tostada en el fondo). Reposar 5 minutos tapado con papel de cocina antes de servir."] },
 { id:"pa6",e:"🍄",nm:"Risotto de setas",col:"#5a5a1a",t:"35 min",kal:"360 kcal",nut:"Prot 8g · Carbos 56g · Grasas 10g",compra:["300 g — arroz arborio o carnaroli","400 g — setas variadas (portobello, champiñones, shiitake)","1 — cebolla picada fina","3 dientes — ajo picados","150 ml — vino blanco seco","1 litro — caldo vegetal caliente","3 cdas. — levadura nutricional","2 cdas. — mantequilla vegana o margarina","Aceite de oliva","Romero o tomillo al gusto","Sal y pimienta negra al gusto"],receta:["Saltear las setas en aceite con un poco de ajo, sal y tomillo hasta que estén doradas. Reservar.","En la misma olla, sofreír la cebolla y el ajo restante en aceite a fuego medio hasta que estén transparentes.","Añadir el arroz y tostar 2 minutos removiendo constantemente.","Verter el vino blanco y remover hasta que se absorba por completo.","Añadir el caldo caliente poco a poco (un cucharón cada vez) removiendo constantemente. No añadir más caldo hasta que el anterior se absorba. Este proceso dura unos 18-20 minutos.","Cuando el arroz esté al dente y cremoso, retirar del fuego y añadir la levadura nutricional y la mantequilla vegana. Remover con energía.","Incorporar las setas reservadas, ajustar sal y pimienta. Servir inmediatamente."] },
 { id:"pa7",e:"🍚",nm:"Arroz frito chino con verduras",col:"#5a5a1a",t:"25 min",kal:"360 kcal",nut:"Prot 10g · Carbos 58g · Grasas 10g",compra:["2 tazas — arroz blanco cocido del día anterior (frío)","1 taza — guisantes","2 — zanahorias en daditos","1 — pimiento rojo en daditos","3 — cebolletas picadas","3 dientes — ajo picados","1 cdta. — jengibre fresco rallado","3 cdas. — salsa de soja","1 cda. — aceite de sésamo","1 cda. — aceite de girasol","Opcional: tofu en dados salteado, edamame, brotes de soja"],receta:["El truco principal: usar arroz frío del día anterior — el arroz recién hecho queda pegajoso.","Calentar el aceite de girasol en un wok o sartén grande a fuego muy alto.","Saltear el ajo y el jengibre 30 segundos. Añadir las zanahorias y el pimiento y saltear 3 minutos a fuego muy alto.","Añadir los guisantes y el tofu si se usa. Saltear 2 minutos más.","Incorporar el arroz frío desmenuzado con las manos. Saltear todo junto a fuego máximo 3-4 minutos removiendo constantemente.","Añadir la salsa de soja y el aceite de sésamo. Remover bien y saltear 1 minuto más.","Servir con cebolleta picada por encima y más salsa de soja al gusto."] },
 { id:"pa8",e:"🍚",nm:"Arroz con leche vegano",col:"#5a5a1a",t:"45 min",kal:"280 kcal",nut:"Prot 4g · Carbos 52g · Grasas 6g",compra:["200 g — arroz redondo","1 litro — leche de avena o de coco","200 ml — agua","6 cdas. — azúcar","1 rama — canela","Piel de 1 limón","Piel de ½ naranja (opcional)","1 cdta. — vainilla","Canela en polvo para decorar"],receta:["Poner el arroz con el agua en un cazo a fuego medio. Remover hasta que el agua se absorba.","Añadir la leche vegetal poco a poco (no toda de golpe), la rama de canela, la piel de limón y la piel de naranja.","Cocer a fuego bajo removiendo frecuentemente durante 35-40 minutos hasta que el arroz esté muy tierno y la mezcla haya espesado.","Añadir el azúcar y la vainilla en los últimos 5 minutos. Remover bien.","Retirar la rama de canela y las pieles de cítricos.","Servir caliente o frío. Espolvorear canela en polvo por encima antes de servir.","Al enfriar espesa más — si queda muy denso añadir un poco más de leche vegetal."] },
 { id:"pa9",e:"🍝",nm:"Pasta al pomodoro con albahaca",col:"#5a5a1a",t:"25 min",kal:"380 kcal",nut:"Prot 10g · Carbos 68g · Grasas 8g",compra:["400 g — pasta (espagueti, rigatoni o penne)","800 g — tomates maduros o 1 lata de tomate pelado de calidad","4 dientes — ajo laminados","1 puñado — albahaca fresca","4 cdas. — aceite de oliva virgen extra","1 cdta. — azúcar","Sal y pimienta al gusto","Parmesano vegano al gusto para servir"],receta:["Calentar el aceite a fuego medio-bajo y dorar los ajos laminados muy lentamente hasta que estén dorados y fragantes. No quemar.","Añadir los tomates troceados o el tomate en lata. Subir el fuego y cocer 20 minutos removiendo hasta que la salsa reduzca y concentre.","Añadir el azúcar, salpimentar. En los últimos 2 minutos añadir la albahaca fresca rasgada con las manos.","Mientras tanto cocer la pasta en agua muy salada según las instrucciones. Reservar un vaso del agua de cocción.","Escurrir la pasta al dente y añadirla directamente a la sartén con la salsa. Saltar todo junto añadiendo un poco del agua de cocción para ligar.","Servir inmediatamente con más albahaca fresca y parmesano vegano por encima."] },
 ],
 piz:[
 { id:"pi1",e:"🥙",nm:"Kebabs 2.0",col:"#6A2A10",desc:"Proteína especiada con mezcla árabe,e…",t:"30 min",kal:"380 kcal",nut:"Prot 12g · Carbos 30g · Grasas 8g",compra:["200g — seitán en tiras","1 — cebolla roja en juliana","Lechuga cortada en finas tiras","Tomate en rodajas","Queso feta vegano en lonchas","Especias: 1 cda. pimentón, 1 cdta. cebolla en polvo, 1 cdta. ajo en polvo, 1 cda. cominos, ½ cda. orégano, ½ cdta. zaatar, sal y pimienta al gusto"],receta:["Mezclar todas las especias.","Saltear el seitán con la mezcla de especias.","Servir en pan de pita o pan naan con la cebolla, lechuga, tomate y queso feta vegano y por encima salsa Tzatziki."] },
 { id:"pi2",e:"🍕",nm:"Focaccia y masa para pizza",col:"#6A2A10",desc:"Masa esponjosa con aceite de oliva,aj…",t:"1h 30 min",kal:"280 kcal",nut:"Prot 7g · Carbos 48g · Grasas 7g",compra:["1 taza — agua templada","2½ cdtas. — levadura de pan","½ cdta. — azúcar","2½ tazas — harina","½ cdta. — sal"],receta:["Mezclar agua templada con levadura y azúcar. Dejar activar.","Añadir la harina y la sal. Amasar bien.","Tapar y dejar levar una hora.","Extender con la mano y dejar reposar 20 minutos.","Hornear 20 minutos a 240 grados."] },
 { id:"pi3",e:"🌯",nm:"Rollitos frescos de verano",col:"#6A2A10",desc:"Papel de arroz con zanahoria,lechuga,…",t:"20 min",kal:"260 kcal",nut:"Prot 10g · Carbos 32g · Grasas 11g",compra:["3 — zanahorias ralladas","1 puñado — espinacas frescas cortaditas","100g — fideos de soja remojados y escurridos","1 — aguacate en rodajas","1 paquete — tofu cortado en tiras y salteado con sal y pimienta","1 bandeja — setas salteadas","1 paquete — obleas de arroz","Salsa: ¼ taza crema de cacahuete, 1 cda. sriracha, 2 cdas. vinagre, 1 cda. salsa de soja, 2 dientes de ajo picados, 4 cdas. agua"],receta:["Preparar todos los ingredientes cortados y listos.","Remojar una oblea de arroz en agua templada hasta ablandar.","Rellenar con los ingredientes y enrollar bien cerrado.","Preparar la salsa: batir la crema de cacahuete con sriracha, vinagre, salsa de soja, ajo y agua.","Servir los rollitos con la salsa aparte."] },
 { id:"pi4",e:"🥢",nm:"Rollitos vietnamitas fritos",col:"#6A2A10",desc:"Rollitos crujientes de setas,tofu,rep…",t:"50 min",kal:"290 kcal",nut:"Prot 14g · Carbos 34g · Grasas 10g",compra:["200g — fideos de soja remojados y escurridos","1 bandeja — setas salteadas","1 taza — soja texturizada fina remojada, escurrida y salteada con aceite, sal y pimienta","¼ cabeza — repollo cortado en finas tiras","1 — cebolla picada","1 paquete — tofu salteado en tiras","1 — patata hervida y rallada","2 — zanahorias ralladas","1 — calabacín rallado","Sal y pimienta al gusto","Masa para rollitos"],receta:["Preparar todos los ingredientes cortados y salteados según se indica.","Mezclar todos los rellenos en un bol grande.","Rellenar las obleas de masa para rollitos y cerrar bien.","Cocinar en la sartén con aceite hasta dorar por todos los lados."] },
 { id:"pi5",e:"🥟",nm:"Baozis — bollos chinos al vapor",col:"#6A2A10",desc:"Bollos esponjosos al vapor rellenos d…",t:"1h 45 min",kal:"180 kcal",nut:"Prot 8g · Carbos 28g · Grasas 4g",compra:["Masa: 180ml agua templada, 1 cubito levadura fresca, ½ cdta. azúcar","450g — harina de trigo blanca","1 cdta. — sal","15ml — aceite","Relleno: setas salteadas, soja texturizada o tofu salteado, cebolla, zanahoria, fideos de arroz, al gusto"],receta:["Mezclar agua templada con levadura y azúcar. Dejar activar.","Añadir harina, sal y aceite. Amasar todo junto.","Tapar y dejar levar una hora.","Hacer el relleno: saltear setas, soja texturizada o tofu, cebolla, zanahoria y fideos de arroz al gusto. Es muy versátil.","Separar la masa en bolitas. Extender con la mano hasta formar un círculo.","Poner 2 cdas. de relleno y cerrar la bolita.","Cocer al vapor 20 minutos."] },
 { id:"pi6",e:"🍔",nm:"Hamburguesas de alubias negras",col:"#6A2A10",desc:"Alubias negras con ajo,comino,srirach…",t:"35 min",kal:"280 kcal",nut:"Prot 12g · Carbos 40g · Grasas 6g",compra:["2 tazas — alubias negras precocinadas","½ — cebolla (sofreír)","3 dientes — ajo (sofreír)","1½ cdta. — comino","1 cda. — ajo en polvo","½ cdta. — pimentón","1 cda. — salsa de soja","1 cdta. — sriracha","1 cda. — ketchup","1 cda. — salsa barbacoa","1 — huevo de lino","½ taza — pan rallado","Sal y pimienta al gusto"],receta:["Sofreír la cebolla y el ajo. Reservar.","Chafar las alubias y mezclar con todos los ingredientes.","Formar las hamburguesas y hornear 20 minutos."] },
 { id:"pi7",e:"🍄",nm:"Hamburguesas de champiñones",col:"#6A2A10",desc:"Champiñones,pipas de girasol,harina y…",t:"30 min",kal:"220 kcal",nut:"Prot 6g · Carbos 22g · Grasas 10g",compra:["200g — pipas de girasol en remojo 1 hora y escurridas","400g — champiñones picados y salteados","1 cdta. — cebolla en polvo","1 cdta. — salsa picante","2 cdas. — salsa de soja","200g — harina","4 cdas. — fibra de psyllium","2 cdas. — agua"],receta:["Picar en la batidora las pipas de girasol remojadas y escurridas.","Mezclar en un bol las pipas y los champiñones salteados, yo los trituro rápido con la batidora.","Añadir cebolla en polvo, salsa picante, salsa de soja, harina, fibra de psyllium y agua.","Hacer la mezcla y formar hamburguesas.","Cocinar en la sartén hasta dorar por ambos lados."] },
 { id:"pi8",e:"🫓",nm:"Pan naan / pita casero",col:"#6A2A10",desc:"Pan plano esponjoso con harina integr…",t:"1h 30 min",kal:"220 kcal",nut:"Prot 5g · Carbos 32g · Grasas 4g",compra:["500g — harina","1 cdta. — sal","360ml — agua templada","3 cdtas. — levadura de pan","1 cdta. — azúcar"],receta:["Mezclar todos los ingredientes.","Tapar y dejar levar una hora.","Separar en 9 bolitas.","Dejar levar otros 20 minutos.","Extender con rodillo.","Cocinar en la sartén hasta salir burbujas y dar la vuelta."] },
 { id:"pi9",e:"🌮",nm:"Tofu y nueces estilo taco",col:"#6A2A10",desc:"Tofu y nueces horneados con comino,pi…",t:"40 min",kal:"380 kcal",nut:"Prot 14g · Carbos 18g · Grasas 28g",compra:["2 tazas — nueces","450 g — tofu","1 cdta. — cebolla en polvo","1 cdta. — ajo en polvo","½ cdta. — comino","½ cdta. — pimentón","1 cdta. — orégano","¼ cdta. — cayena","1 cda. — levadura de cerveza","1 cda. — aceite de oliva","2 cdas. — salsa de soja","1 cda. — sirope de arce","2 cdas. — pasta de tomate"],receta:["Triturar brevemente las nueces y el tofu (textura tipo crumble, no fino).","Mezclar en un bol el resto de ingredientes hasta formar una salsa.","Combinar la salsa con el tofu y las nueces y extender en una bandeja de horno.","Hornear a 180° durante 35 minutos, removiendo y mezclando a los 15 minutos."] },
 { id:"pi10",e:"🥟",nm:"Empanada gallega vegana",col:"#7a4a1a",t:"1h 15 min",kal:"320 kcal",nut:"Prot 8g · Carbos 42g · Grasas 12g",compra:["Masa: 400 g harina, 1 cdta. sal, 150 ml agua templada, 80 ml aceite de oliva, 1 cdta. pimentón dulce","2 — cebollas grandes en juliana","2 — pimientos rojos en tiras","2 — pimientos verdes en tiras","200 g — espinacas frescas","2 dientes — ajo picados","1 cdta. — pimentón dulce","Aceite de oliva, sal y pimienta al gusto","Leche vegetal para pintar (opcional)"],receta:["Masa: mezclar la harina con la sal, el pimentón, el aceite y el agua templada. Amasar 5 minutos hasta obtener una masa lisa. Dividir en dos partes y dejar reposar 20 minutos tapada.","Relleno: sofreír la cebolla y el ajo en aceite a fuego bajo durante 15 minutos hasta que estén muy pochados.","Añadir los pimientos y seguir sofriendo 10 minutos más. Incorporar las espinacas y el pimentón, salpimentar. Cocinar 5 minutos hasta que las espinacas se integren. Dejar enfriar.","Extender una de las masas en la bandeja de horno engrasada. Repartir el relleno dejando borde libre.","Cubrir con la segunda masa, cerrar los bordes pellizcándolos bien. Hacer un agujero en el centro para que salga el vapor.","Pintar con leche vegetal si se desea. Hornear a 200°C durante 30-35 minutos hasta que esté dorada."] },
 { id:"pi11",e:"🌮",nm:"Tacos de soja texturizada",col:"#7a4a1a",t:"25 min",kal:"340 kcal",nut:"Prot 16g · Carbos 36g · Grasas 14g",compra:["150 g — soja texturizada fina","1 — cebolla picada","3 dientes — ajo picados","1 — pimiento rojo picado","3 cdas. — salsa de soja","1 cdta. — comino","1 cdta. — pimentón ahumado","½ cdta. — orégano","½ cdta. — chile en polvo","1 cda. — aceite de oliva","Tortillas de maíz o trigo","Para servir: aguacate, tomate, cilantro, zumo de lima, lechuga"],receta:["Hidratar la soja texturizada en agua caliente o caldo vegetal 10 minutos. Escurrir y exprimir bien.","Sofreír la cebolla, el ajo y el pimiento en aceite hasta que se ablanden.","Añadir la soja escurrida y saltear 5 minutos a fuego medio-alto hasta que dore ligeramente.","Incorporar la salsa de soja, el comino, el pimentón, el orégano y el chile. Cocinar 3 minutos más removiendo.","Calentar las tortillas en la sartén o directamente sobre el fuego.","Servir los tacos con crema agria vegana, salsa nacho, aguacate aplastado, tomate picado, cilantro y un chorrito de lima. Ajustar sal al gusto."] },
 { id:"pi12",e:"🌯",nm:"Wrap de hummus y verduras",col:"#7a4a1a",t:"20 min",kal:"310 kcal",nut:"Prot 10g · Carbos 40g · Grasas 12g",compra:["4 — tortillas de trigo grandes","1 taza — hummus casero o de bote","1 — calabacín en rodajas","1 — pimiento rojo en tiras","1 — berenjena en rodajas finas","1 puñado — espinacas o rúcula","½ — aguacate en láminas","Aceite de oliva, sal y orégano","Opcional: queso vegano rallado, sriracha"],receta:["Cortar el calabacín, el pimiento y la berenjena. Aliñar con aceite, sal y orégano.","Asar las verduras en el horno a 200°C durante 15 minutos o en la sartén a fuego fuerte hasta que estén doradas.","Calentar las tortillas en la sartén o microondas 20 segundos.","Extender hummus generosamente sobre cada tortilla.","Colocar las verduras asadas, las espinacas y el aguacate.","Añadir sriracha o queso vegano si se desea. Enrollar bien apretado, cortar por la mitad y servir."] },
 ],
 pos:[
 { id:"po1",e:"🍫",nm:"Natillas de tofu y chocolate",col:"#7A3A6A",desc:"Tofu con crema de cacahuete,sirope y …",t:"20 min + reposo",kal:"280 kcal",nut:"Prot 6g · Carbos 18g · Grasas 8g",compra:["350g — tofu japonés","4 cdas. — crema de cacahuete","4 cdas. — sirope de arce o agave","1 cdta. — vainilla","1 pizca — sal","Topping: 50g chocolate negro, ½ lata leche de coco"],receta:["Batir el tofu, la crema de cacahuete, el sirope, la vainilla y la sal hasta cremoso.","Para el topping: fundir 50g de chocolate negro con media lata de leche de coco.","Verter la mezcla de tofu en vasitos.","Añadir el topping de chocolate por encima.","Dejar enfriar en la nevera al menos 2 horas."] },
 { id:"po2",e:"🍏",nm:"Compota de manzana",col:"#7A3A6A",desc:"Manzanas cocidas con canela,vainilla …",t:"30 min",kal:"80 kcal",nut:"Prot 0g · Carbos 20g · Grasas 0g",compra:["6 — manzanas cortadas en trozos pequeños","1 — zumo de limón","350 ml — agua","1 rama — canela","1 cdta. — vainilla"],receta:["Pelar y cortar las manzanas en trozos pequeños.","Poner en un cazo con el agua, el zumo de limón, la canela y la vainilla.","Cocer a fuego medio durante 20-25 minutos removiendo de vez en cuando.","Retirar la rama de canela y triturar al gusto."] },
 { id:"po3",e:"🍌",nm:"Pan de plátano",col:"#7A3A6A",desc:"Plátanos maduros,aceite de girasol,ha…",t:"45 min",kal:"280 kcal",compra:["3 plátanos maduros","¼ taza de aceite de girasol","1 cdta extracto de vainilla","1 taza de azúcar","2 tazas de harina","½ cdta de sal","1 cdta bicarbonato","½ taza de pepitas de chocolate y/o nueces picadas (opcional)"],receta:["Batir los plátanos junto con el aceite de girasol","Mezclar con los demás ingredientes en un bol","Verter en un molde tipo pan","Hornear a 180º durante 35 minutos"] },
 { id:"po4",e:"🍰",nm:"Bizcocho de chocolate ligero",col:"#7A3A6A",desc:"Bizcocho esponjoso sin huevos ni láct…",t:"45 min",kal:"230 kcal",compra:["115g azúcar","3 cdas cacao puro en polvo","½ cdta sal","170g harina","½ cdta bicarbonato","½ cdta canela en polvot","90ml aceite de girasol","1 cdta extracto de vainilla","2 cdas vinagre de manzana","200ml de agua fría"],receta:["En un bol grande los ingredientes secos a los ingredientes líquidos y batir hasta conseguir una consistencia homogénea.","Verter en un recipiente de horno y hornear a 180º durante 35 minutos. Dejar enfriar porque si no, se deshace!"] },
 { id:"po5",e:"🧁",nm:"Magdalenas clásicas veganas",col:"#7A3A6A",desc:"Esponjosas,sin huevos — con ralladura…",t:"30 min",kal:"180 kcal",nut:"Prot 2g · Carbos 40g · Grasas 8g",compra:["3 tazas de harina","1 taza de azúcar","1 cdta bicarbonato","2 cdtas vainilla","3 cdas sirope de ágave","½ taza de aceite de girasol","1¾ tazas de leche de soja sin azúcar","Ralladura de 1 limón"],receta:["Mezclar con una batidora todos los ingredientes","Verter en unos moldes de magdalena/muffin engrasado o con papelitos para horno","Hornear a 180º durante 20 minutos, dejar enfriar"] },
 { id:"po6",e:"🍋",nm:"Tarta de queso vegana",col:"#6a3a6a",t:"20 min + 4h nevera",kal:"310 kcal",nut:"Prot 7g · Carbos 22g · Grasas 22g",compra:["Base: 150 g dátiles sin hueso, 100 g nueces o almendras","2 tazas — anacardos (remojo 4h o 30 min en agua caliente)","Zumo de 2 limones","Ralladura de 1 limón","4 cdas. — sirope de arce o agave","4 cdas. — aceite de coco derretido","½ taza — leche de coco (la parte cremosa)","1 cdta. — vainilla","1 pizca — sal"],receta:["Base: triturar los dátiles y los frutos secos en el robot hasta obtener una masa pegajosa. Forrar la base de un molde desmontable y prensar bien. Meter en el congelador.","Relleno: escurrir los anacardos y triturarlos con todos los demás ingredientes del relleno hasta obtener una crema muy fina y sin grumos.","Verter el relleno sobre la base fría. Alisar la superficie.","Meter en la nevera mínimo 4 horas (mejor toda la noche) hasta que la tarta esté firme.","Desmoldar con cuidado. Decorar con ralladura de limón, frutos rojos o sirope.","Conservar en nevera. Aguanta 5 días perfectamente."] },
 { id:"po7",e:"🍪",nm:"Galletas de cacahuete y chocolate",col:"#6a3a6a",t:"25 min",kal:"145 kcal",nut:"Prot 3g · Carbos 19g · Grasas 7g",compra:["½ taza — azúcar blanca","½ taza — azúcar moreno","1 cdta. — sal","¼ taza — margarina vegana","¼ taza — crema de cacahuete","1 cdta. — vainilla","2 tazas — harina","½ cdta. — bicarbonato","½ taza — pepitas de chocolate vegano"],receta:["Precalentar el horno a 180°C.","Mezclar bien todos los ingredientes en un bol grande hasta obtener una masa homogénea.","Formar bolas con una cuchara grande y colocarlas en una bandeja de horno con papel vegetal, dejando espacio entre ellas.","Aplanar ligeramente cada bola con la palma de la mano.","Hornear 15 minutos a 180°C hasta que estén doradas por los bordes.","Dejar enfriar sobre la bandeja unos minutos antes de moverlas — al salir del horno están blandas pero endurecen al enfriarse."] },
 { id:"po8",e:"🍫",nm:"Mousse de chocolate y aguacate",col:"#6a3a6a",t:"10 min + 1h nevera",kal:"260 kcal",nut:"Prot 4g · Carbos 22g · Grasas 18g",compra:["2 — aguacates muy maduros","4 cdas. — cacao puro en polvo sin azúcar","4 cdas. — sirope de arce o agave","1 cdta. — extracto de vainilla","1 pizca — sal","3 cdas. — leche de coco (la parte cremosa)","Opcional: ½ cdta. canela, 1 cdta. café soluble para intensificar el sabor","Toppings: frutos rojos, virutas de chocolate, coco rallado"],receta:["Abrir los aguacates, retirar el hueso y vaciar la pulpa en la batidora.","Añadir el cacao, el sirope, la vainilla, la sal y la leche de coco.","Triturar a máxima potencia hasta obtener una crema completamente lisa y sin grumos. El aguacate debe desaparecer por completo.","Probar y ajustar dulzor con más sirope o intensidad con más cacao.","Repartir en vasitos o copas. Tapar con film y meter en la nevera 1 hora como mínimo.","Servir frío con frutos rojos, virutas de chocolate o coco rallado por encima."] },
 { id:"po9",e:"🍮",nm:"Flan vegano de coco",col:"#6a3a6a",t:"15 min + 3h nevera",kal:"230 kcal",nut:"Prot 2g · Carbos 28g · Grasas 12g",compra:["1 lata — leche de coco entera (400 ml)","200 ml — leche vegetal (avena o almendra)","4 cdas. — azúcar","1 cdta. — vainilla","3 cdtas. — agar agar en polvo","Caramelo: 6 cdas. azúcar + 2 cdas. agua"],receta:["Caramelo: poner el azúcar con el agua en un cazo a fuego medio sin remover hasta que tome color dorado. Verter rápidamente en el fondo de los moldes y dejar solidificar.","Mezclar la leche de coco, la leche vegetal, el azúcar y la vainilla en un cazo.","Añadir el agar agar y remover bien en frío antes de encender el fuego.","Calentar a fuego medio removiendo constantemente hasta que hierva. Mantener el hervor 2 minutos para que el agar agar active bien.","Verter sobre los moldes con el caramelo ya solidificado.","Dejar enfriar a temperatura ambiente y luego meter en la nevera mínimo 3 horas.","Para desmoldar pasar un cuchillo por los bordes y volcar sobre un plato."] },
 { id:"po10",e:"🍓",nm:"Cheesecake de frutos rojos sin horno",col:"#6a3a6a",t:"25 min + 6h nevera",kal:"340 kcal",nut:"Prot 6g · Carbos 26g · Grasas 24g",compra:["Base: 180 g galletas veganas, 4 cdas. aceite de coco derretido","2 tazas — anacardos (remojo 4h o 30 min en agua caliente)","200 g — frutos rojos (fresas, frambuesas o mezcla)","Zumo de 1 limón","4 cdas. — sirope de arce o agave","4 cdas. — aceite de coco derretido","½ taza — leche de coco cremosa","1 cdta. — vainilla","Cobertura: 150 g frutos rojos + 2 cdas. sirope de arce"],receta:["Base: triturar las galletas hasta que queden como arena. Mezclar con el aceite de coco. Forrar la base de un molde desmontable y prensar bien. Meter en el congelador.","Relleno: escurrir los anacardos y batirlos con todos los ingredientes del relleno hasta obtener una crema completamente fina y sin grumos.","Verter sobre la base fría. Alisar la superficie. Meter en el congelador 2 horas o en la nevera 6 horas.","Cobertura: triturar los frutos rojos con el sirope. Colar si se quiere sin pepitas.","Verter la cobertura sobre la tarta ya firme. Volver a la nevera 1 hora más.","Desmoldar con cuidado. Decorar con frutos rojos frescos por encima."] },
 { id:"po11",e:"🍯",nm:"Caramelo de dátiles",col:"#6a3a6a",t:"25 min",kal:"180 kcal",nut:"Prot 2g · Carbos 32g · Grasas 5g",compra:["1½ taza — dátiles sin hueso","½ cdta. — sal","2 cdtas. — extracto de vainilla","⅓ taza — aceite de coco derretido","1 taza — leche vegetal"],receta:["Dejar los dátiles en agua caliente durante 15 minutos para ablandarlos.","Escurrir bien los dátiles eliminando el agua.","Poner los dátiles en la batidora junto con la sal, la vainilla, el aceite de coco derretido y la leche vegetal.","Batir bien hasta obtener una crema completamente lisa y sin grumos.","Servir con avena, helado, yogur o lo que prefieras. ¡Es increíble!"] },
 ],
};
const TODOS_PLATOS = Object.values(PLATOS).flat();
const SUPERMERCADOS = [
 { id:"car",nm:"Carrefour",col:"#004A97" },
 { id:"lid",nm:"Lidl",col:"#0050AA" },
 { id:"ald",nm:"Aldi",col:"#1A4A72" },
 { id:"mer",nm:"Mercadona",col:"#00883A" },
 { id:"alc",nm:"Alcampo",col:"#C03020" },
 { id:"otr",nm:"Otros",col:"#6A6A6A" },
];
// 📌 PRODUCTOS ESTRELLA — añade novedades veganas por supermercado
const ITEMS_SUPER = {
 car:[
 {cat:"🐟 Alternativas al pescado",items:[
 ["c1","Vuna — Garden Gourmet"],
 ["c2","Filetes marinos Heura tipo merluza"],
 ]},
 {cat:"🍗 Heura — gama completa",items:[
 ["c3","Bocados tipo pollo Heura"],
 ["c4","Nuggets Heura"],
 ["c5","Hamburguesas Heura"],
 ["c6","Salchichas Heura"],
 ["c7","Chorizo Heura"],
 ]},
 {cat:"🍱 Platos preparados",items:[
 ["c8","Cocido Madrileño Vegano"],
 ["c9","Risotto de Setas vegano"],
 ["c10","Risotto Mediterráneo vegano"],
 ["c11","Albóndigas veganas"],
 ["c12","Bacon vegano ahumado"],
 ["c13","Lonchas veganas para sándwich"],
 ]},
 {cat:"🧀 Quesos veganos",items:[
 ["c14","Camembert vegano Hi Vegs"],
 ["c15","Queso para fundir vegano"],
 ["c16","Quesos Violife variados"],
 ]},
 {cat:"🍦 Helados veganos",items:[
 ["c17","Magnum vegano"],
 ["c18","Ben & Jerry's vegano"],
 ]},
 {cat:"🍕 Otros",items:[
 ["c19","Pizzas veganas"],
 ["c20","Caldo sabor pollo vegano"],
 ]},
 ],
 lid:[
 {cat:"🥟 Congelados especiales",items:[
 ["l1","Gyozas/dumplings veganos"],
 ["l2","Pizzas veganas"],
 ]},
 {cat:"🍔 Proteínas vegetales",items:[
 ["l3","Next Level Burger"],
 ["l4","Tortilla de patata vegana"],
 ]},
 {cat:"🍦 Helados",items:[
 ["l5","Tarrinas helado vegano"],
 ]},
 {cat:"🧪 Ingredientes especiales",items:[
 ["l6","Agar agar"],
 ["l7","Mayonesa vegana"],
 ]},
 ],
 ald:[
 {cat:"🍔 Proteínas y burgers",items:[
 ["a1","Hamburguesas veganas"],
 ["a2","Wonder Burger"],
 ["a3","Bocados tipo pollo vegano"],
 ["a4","Filetes empanados veganos"],
 ["a5","Nuggets veganos"],
 ]},
 {cat:"🫘 Proteínas naturales",items:[
 ["a6","Falafel"],
 ["a7","Seitán"],
 ["a8","Tofu"],
 ["a9","Tempeh"],
 ]},
 {cat:"🍦 Helados y postres",items:[
 ["a10","Tarrinas helado vegano"],
 ["a11","Pastel de manzana"],
 ["a12","Pastel de cereza"],
 ]},
 {cat:"✨ Especiales de temporada",items:[
 ["a13","Caviar vegano"],
 ["a14","Novedades temporales"],
 ]},
 ],
 mer:[
 {cat:"🍗 Proteínas vegetales",items:[
 ["m1","Filetes veganos empanados"],
 ["m2","Tofu firme Hacendado"],
 ["m3","Seitán Hacendado"],
 ]},
 {cat:"🍜 Platos y sopas",items:[
 ["m4","Sopa miso instantánea"],
 ["m5","Croquetas de espinacas veganas"],
 ]},
 ],
 alc:[
 {cat:"🐟 Alternativas al pescado",items:[
 ["ac1","Vuna — Garden Gourmet"],
 ["ac2","Filetes de pollo vegetal"],
 ]},
 {cat:"🍔 Proteínas vegetales",items:[
 ["ac3","Green Moments Maheso — hamburguesas"],
 ["ac4","Green Moments Maheso — nuggets tipo pollo"],
 ]},
 {cat:"🧀 Quesos y charcutería",items:[
 ["ac5","Quesos veganos variados"],
 ["ac6","Patés veganos"],
 ]},
 {cat:"🍕 Platos preparados",items:[
 ["ac7","Pizzas veganas"],
 ["ac8","Alternativas a la carne"],
 ]},
 ],
 otr:[
 {cat:"🟢 El Corte Inglés / Supercor",items:[
 ["e1","Vuna — Garden Gourmet"],
 ["e2","Heura — gama completa"],
 ["e3","Gardein — gama completa"],
 ["e4","Quesos Violife — gran selección"],
 ["e5","Pizzas veganas"],
 ["e6","Hamburguesas veganas"],
 ["e7","Chorizos y salchichas veganas"],
 ]},
 {cat:"🔵 La Sirena",items:[
 ["s1","Atún rojo vegetal — Current Foods"],
 ["s2","Salmón ahumado vegano — Current Foods"],
 ["s3","Veggirena sabor pollo"],
 ["s4","Veggirena sabor bacalao"],
 ["s5","Veggirena sabor merluza"],
 ["s6","The Vegetarian Butcher"],
 ["s7","Beyond Meat"],
 ["s8","Heura — gama congelada"],
 ["s9","Gardein — gama congelada"],
 ["s10","Albóndigas Heura con tomate y arroz"],
 ["s11","Bocados Heura con fusilli y pisto"],
 ["s12","Kebab loncheado vegano"],
 ["s13","Ben & Jerry's Cookie Dough vegano"],
 ["s14","Magnum vegano de almendras"],
 ["s15","Sorbete de horchata vegano"],
 ]},
 {cat:"🟡 IKEA",items:[
 ["i1","Albóndigas HUVUDROLL vegetales"],
 ["i2","Helado vegano de fresa — 1€"],
 ["i3","Mousse de chocolate vegano"],
 ["i4","Leche vegetal para el café"],
 ]},
 {cat:"🔴 Costco",items:[
 ["co1","Beyond Meat hamburguesas"],
 ["co2","Rollitos de primavera de verduras"],
 ]},
 {cat:"🟠 Tiendas Asiáticas",items:[
 ["as1","Tofu en varios formatos"],
 ["as2","Proteína pollo vegano"],
 ["as3","Gyozas veganas"],
 ["as4","Baozis — bollos al vapor"],
 ["as5","Rollitos de primavera"],
 ["as6","Masa para rollitos"],
 ["as7","Obleas de arroz"],
 ["as8","Algas variadas"],
 ]},
 ],
};
// 📌 SANTUARIOS — edita aquí para añadir o modificar
const SANTUARIOS_DEST = [
 {
 id:"s1",nm:"Fundación Santuario Vegan",loc:"Brunete,Madrid",url:"https://santuariovegan.org",e:"🐷",desc:"~300 animales rescatados: cerdos,burros,cabra…"
 },
 {
 id:"s2",nm:"Fundación Santuario Gaia",loc:"Girona,Cataluña",url:"https://fundacionsantuariogaia.org",e:"🐄",desc:"Centro vegano de rescate y recuperación. Uno de…"
 },
 {
 id:"s3",nm:"Fundación El Hogar Animal Sanctuary",loc:"Córdoba,Andalucía",url:"https://elhogarsantuario.org",e:"🐓",desc:"Una de las fundaciones con más trayectoria en E…"
 },
];
const SANTUARIOS_CCAA = [
 { ccaa:"Galicia",items:[
 { nm:"O Caserío da Castiñeira",loc:"Ourense — Ribeira Sacra",desc:"Casa rural y santuario combinados. Hospedaje so…",url:"" },
 { nm:"Santuario Vacaloura",loc:"Santiago de Compostela",desc:"Vida digna para los animales y difusión del ant…",url:"" },
 { nm:"Frente L.A. Santuario Animal",loc:"Lugo",desc:"Hogar para animales discriminados. Libertad,cu…",url:"" },
 ]},
 { ccaa:"Cataluña",items:[
 { nm:"Casa Albets",loc:"Lladurs,Lleida",desc:"Hotel rural 4★ con filosofía santuario. Cocina …",url:"https://casaalbets.com" },
 { nm:"Almas Veganas",loc:"Osor,Girona",desc:"Fundación sin ánimo de lucro desde 2025. Rescat…",url:"" },
 ]},
 { ccaa:"Andalucía",items:[
 { nm:"Holistic Hotel Rancho Los Lobos",loc:"Jimena de la Frontera,Cádiz",desc:"Santuario y hotel boutique en el Parque Natural…",url:"" },
 { nm:"Vegan Guesthouse Finca Pereila",loc:"Málaga",desc:"Casa vegana con animales rescatados orientada a…",url:"" },
 ]},
 { ccaa:"La Rioja",items:[
 { nm:"El Molino del Corregidor",loc:"San Román de Cameros",desc:"Casa rural vegana. Parte de los ingresos van a …",url:"" },
 ]},
 { ccaa:"Navarra",items:[
 { nm:"Santuario Corazón Verde",loc:"Navarra",desc:"Refugio animal dedicado al rescate y conciencia…",url:"" },
 ]},
 { ccaa:"Murcia",items:[
 { nm:"Santuario Espíritu Libre",loc:"Murcia",desc:"Condiciones de vida óptimas para los animales m…",url:"" },
 ]},
 { ccaa:"Castilla-La Mancha",items:[
 { nm:"Santuario La Frontera",loc:"Ciudad Real",desc:"El único santuario de Castilla-La Mancha. Refug…",url:"" },
 ]},
 { ccaa:"Castilla y León",items:[
 { nm:"León Vegano Animal Sanctuary",loc:"León",desc:"Rescate y protección de animales de granja víct…",url:"" },
 ]},
];
const SANTUARIOS_COMO = ["Hazte socio/a","Apadrina un animal","Únete a su Teaming","Donación puntual","Compra en su tienda","Voluntariado parcial","Voluntariado en residencia"];
// 📌 TURISMO VEGANO — edita aquí para añadir o modificar
const TURISMO = [
 {
 id:"tur1",cat:"100% Veganos",e:"🏆",col:"#2D7A45",items:[
 { nm:"Villa Vegana",loc:"Mallorca,Baleares",desc:"Uno de los primeros hoteles 100% veganos de Eur…",url:"https://villavegana.com" },
 { nm:"Casa Albets",loc:"Lladurs,Lleida — Prepirineo catalán",desc:"Masía del siglo XI. Cena de 7 platos ecológicos…",url:"https://casaalbets.com" },
 { nm:"O Viso Ecovillage",loc:"Ourol,Lugo — Galicia",desc:"100% vegano y pet-friendly a 15 min de la playa…",url:"" },
 { nm:"Caserío da Castiñeira",loc:"Montederramo,Ourense — Ribeira Sacra",desc:"Serra do Burgo,cerca del Cañón del Sil. 4 apar…",url:"" },
 ]
 },
 {
 id:"tur2",cat:"Casas Rurales Veganas",e:"🏡",col:"#3A6B2A",items:[
 { nm:"El Molino del Corregidor",loc:"San Román de Cameros,La Rioja",desc:"Molino harinero de 400 años. 6 habitaciones,de…",url:"" },
 { nm:"Vegan Guesthouse Finca Pereila",loc:"Andalucía",desc:"Casa de campo andaluza con 2 habitaciones y cas…",url:"" },
 { nm:"Holistic Hotel Rancho Los Lobos",loc:"Jimena de la Frontera,Cádiz",desc:"Boutique en el Parque Natural Los Alcornocales.…",url:"" },
 ]
 },
 {
 id:"tur3",cat:"Hoteles Urbanos Vegan-Friendly",e:"🏙️",col:"#1A5A7A",items:[
 { nm:"Hotel Catalonia Gran Vía",loc:"Madrid",desc:"En el corazón de Madrid. Restaurante Bloved Veg…",url:"https://hoteles-catalonia.com" },
 ]
 },
 {
 id:"tur4",cat:"Experiencias Únicas",e:"🌱",col:"#5A7A2A",items:[
 { nm:"El Retiro de Kun Kan",loc:"Comunidad Valenciana",desc:"Estancia diferente para recuperar el espíritu, …",url:"" },
 { nm:"Santuario Fundación El Hogar",loc:"Varias ubicaciones",desc:"Hospedaje solidario dentro del santuario. Convi…",url:"https://elhogarsantuario.org" },
 { nm:"Domos Ecológicos",loc:"Sierra del Segura,Murcia",desc:"Cúpulas ecológicas con energía solar. Cestas ve…",url:"" },
 ]
 },
];
const TURISMO_WEBS = [
 { nm:"Rutas Veganas",url:"https://rutasveganas.es" },
 { nm:"Susipei Vegan",url:"https://susipeivegan.com/hoteles-veganos" },
 { nm:"Hoteles con Encanto",url:"https://hotelesconencanto.club" },
 { nm:"HappyCow",url:"https://happycow.net" },
];
// 📌 DOCUMENTALES — edita aquí para añadir o modificar
const DOCUMENTALES = [
 { id:"d1",e:"🌊",nm:"Seaspiracy",ano:2021,plat:"Netflix",url:"https://netflix.com",desc:"Explotación marina,ecosistemas y corrupción en…" },
 { id:"d2",e:"🐙",nm:"Lo que el pulpo me enseñó",ano:2020,plat:"Netflix",url:"https://netflix.com",desc:"Un buceador y un pulpo hembra. Sin hablar de ve…" },
 { id:"d3",e:"💪",nm:"The Game Changers",ano:2018,plat:"Netflix",url:"https://netflix.com",desc:"Dieta plant-based en atletas de élite. Producid…" },
 { id:"d4",e:"🎙️",nm:"Dominion",ano:2018,plat:"YouTube gratis",url:"https://www.youtube.com/watch?v=LQRAfJyEsko",desc:"Sucesor de Earthlings,narrado por Joaquin Phoe…" },
 { id:"d5",e:"🐄",nm:"73 Cows",ano:2018,plat:"YouTube gratis",url:"",desc:"Cortometraje. Ganador del BAFTA 2018. Un granje…" },
 { id:"d6",e:"🎭",nm:"Okja",ano:2017,plat:"Netflix",url:"https://netflix.com",desc:"Ciencia ficción surcoreana sobre una niña y su …" },
 { id:"d7",e:"🏥",nm:"What The Health",ano:2017,plat:"Netflix",url:"https://netflix.com",desc:"Vínculos entre consumo de carne y enfermedades.…" },
 { id:"d8",e:"🇪🇸",nm:"Empatía",ano:2017,plat:"YouTube gratis",url:"https://www.youtube.com/watch?v=rbNuikVDrN4",desc:"El único documental español de la lista. Sin im…" },
 { id:"d9",e:"🌍",nm:"Cowspiracy",ano:2014,plat:"Netflix",url:"https://netflix.com",desc:"El impacto medioambiental de la ganadería. Audi…" },
 { id:"d10",e:"🍴",nm:"Forks Over Knives",ano:2011,plat:"Netflix",url:"https://netflix.com",desc:"Cómo una dieta vegana reduce drásticamente el r…" },
 { id:"d11",e:"🔴",nm:"Earthlings (Terrícolas)",ano:2005,plat:"YouTube gratis",url:"https://www.youtube.com/watch?v=ce4DJh-L7Ys",desc:"El original y el más influyente. Narrado por Jo…" },
];
// 📌 CANALES DE YOUTUBE — edita aquí para añadir o modificar
const CANALES = [
 { id:"c1",e:"👑",nm:"Supreme Master TV",url:"https://suprememastertv.com",desc:"Cortos premiados. Contenido espiritual y vegano…" },
 { id:"c2",e:"🌿",nm:"Reinas y Repollos",url:"https://youtube.com/@ReinasyRepollos",desc:"Jessica y Carla. Vida sostenible,recetas,moda…" },
 { id:"c3",e:"🍽️",nm:"Dimensión Vegana",url:"https://youtube.com/@DimensionVegana",desc:"Recetas veganas en España: embutidos,sushi y m…" },
 { id:"c4",e:"👩‍🍳",nm:"Veganeando — Miriam Faba",url:"https://youtube.com/@veganeando",desc:"Chef vegana y crudivegana con +10 años de exper…" },
 { id:"c5",e:"🧬",nm:"Carla Zaplana",url:"https://youtube.com/@CarlaZaplana",desc:"Nutricionista española especializada en plant-b…" },
 { id:"c6",e:"💪",nm:"My Vegan Booty — Paola",url:"https://youtube.com/@MyVeganBooty",desc:"Fitness + veganismo. Tips de nutrición,ejercic…" },
];
// 📌 TIENDAS ONLINE — edita aquí para añadir o modificar tiendas
const TIENDAS = [
 {
 id:"t2",nm:"Happy Vegetal",url:"https://happyvegetal.es",e:"💚",desc:"Más de 1.000 productos 100% veganos verificados…",col:"#3A8A3A"
 },
 {
 id:"t3",nm:"Foody",url:"https://foody.es",e:"🥗",desc:"Supermercado online especializado en alimentaci…",col:"#2A7A3A"
 },
 {
 id:"t4",nm:"True Vegan",url:"https://truevegan.es",e:"🌍",desc:"Más de 20 marcas internacionales de carne veget…",col:"#4A7A2A"
 },
 {
 id:"t5",nm:"Veggie Room",url:"https://veggieroom.es",e:"🌿",desc:"Tienda de Madrid 100% comprometida con el vegan…",col:"#2A6A3A"
 },
 {
 id:"t6",nm:"Veggieanimals",url:"https://veggieanimals.com",e:"🐾",desc:"Alimentación vegana para todo tipo de mascotas.…",col:"#5A7A2A"
 },
];
const S = {
 ph:{ width:360,height:760,background:"#FDFCFA",borderRadius:44,overflow:"hidden",boxShadow:"0 30px 60px rgba(0,0,0,0.8),0 0 0 8px #111,0 0 0 10px #333",display:"flex",flexDirection:"column",position:"relative" },
 scroll:{ flex:1,overflowY:"auto",overflowX:"hidden" },
 nav:{ background:"white",borderTop:"1px solid rgba(0,0,0,0.07)",display:"flex",justifyContent:"space-around",padding:"8px 0 16px",flexShrink:0 },
 sb:{ display:"flex",justifyContent:"space-between",fontSize:12,padding:"12px 20px 0",color:"rgba(255,255,255,0.4)",marginBottom:10 },
 bk:(c="rgba(255,255,255,0.55)")=>({ color:c,fontSize:13,cursor:"pointer",marginBottom:8,display:"inline-flex",alignItems:"center",gap:4 }),btn:(bg,c,r=12,p="12px 16px")=>({ border:"none",cursor:"pointer",fontFamily:"system-ui",background:bg,color:c,borderRadius:r,padding:p,fontSize:14,fontWeight:600 }),
};
const APP_URL = "https://heroesveganos.app";
const ONESIGNAL_APP_ID = "3732e253-225c-43b7-9cc6-340cf2113836";
const SUPABASE_URL = "https://zwjpphjvoiryaaomtqqw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3anBwaGp2b2lyeWFhb210cXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMzY2MjUsImV4cCI6MjA5NTkxMjYyNX0.E3F_GegC4nJJNTGEbRFF0UYkxH6l_PJGjnVtHN2_96w";

// 📲 PWA Install
const isIos = () => /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
const isInStandaloneMode = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;

// 🎆 Confetti ligero para novedades nuevas
const lanzarConfetti = () => {
 const script = document.getElementById("confetti-script");
 const fire = () => {
  if (window.confetti) {
   window.confetti({ particleCount:120, spread:80, origin:{y:0.5}, colors:["#8FBC4A","#E8B84B","#4A7C2F","#C8983B","#ffffff"] });
   setTimeout(() => window.confetti({ particleCount:60, spread:120, origin:{y:0.3}, colors:["#8FBC4A","#E8B84B","#ffffff"] }), 300);
  }
 };
 if (!window.confetti) {
  const s = document.createElement("script");
  s.id = "confetti-script";
  s.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";
  s.onload = fire;
  document.head.appendChild(s);
 } else { fire(); }
};
const APP_TAGLINE = "La manera más fácil de ser un héroe hoy en día.";
function calcImpacto(dias) {
 return {
 vidas: Math.max(0,Math.round(dias * 0.27)),co2:  (Math.max(0,dias * 1.5)).toFixed(1),agua:  Math.max(0,Math.round(dias * 11.2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
 };
}
export default function App() {
 // Load from localStorage on startup - fixes "forgot who I am" bug
 const _ls = k => { try { return localStorage.getItem(k); } catch(e) { return null; } };
 const _lss = (k,v) => { try { localStorage.setItem(k,v); } catch(e) {} };
 const [registered,setRegistered]  = useState(() => _ls("hv_reg") === "1");
 const [regStep,setRegStep]  = useState(0);
 const [deferredPrompt,setDeferredPrompt]  = useState(null);
 const [novedadesRemote,setNovedadesRemote] = useState([]);
 const [showInstallIos,setShowInstallIos]  = useState(false);
 const [showInstallSteps,setShowInstallSteps] = useState(false);
 const [showCarInfo,setShowCarInfo] = useState(false);
 const [regName,setRegName]  = useState(() => _ls("hv_name") || "");
 const [yaEsVegano,setYaEsVegano]  = useState(() => { const v=_ls("hv_vegano"); return v===null?null:v==="1"; });
 const [fechaVegano,setFechaVegano] = useState(() => _ls("hv_fecha") || "");
 const [screen,setScreen]  = useState("home");
 const [catIdx,setCatIdx]  = useState(0);
 const [platoSel,setPlatoSel]  = useState(null);
 const [recSearch,setRecSearch]  = useState("");
 const [superSel,setSuperSel]  = useState(null);
 const [revIdx,setRevIdx]  = useState(() => { const v=parseInt(_ls("hv_revidx")||"0"); return isNaN(v)?0:v; });
 const [vistosNov,setVistosNov]  = useState(()=>{
  try { return JSON.parse(_ls("hv_vistosnov")||"[]"); } catch(e) { return []; }
 });
 const [impMode,setImpMode]  = useState("sld");
 const [causa,setCausa]  = useState(0);
 const [tipo,setTipo]  = useState("u");
 const [donAmt,setDonAmt]  = useState("");
 const [donAmtIdx,setDonAmtIdx] = useState(1);
 const [apoyaOk,setApoyaOk]  = useState(false);
 const [dudaOpen,setDudaOpen]  = useState(null);
 const [compraSemOpen,setCompraSemOpen] = useState(false);
 const [carIdx,setCarIdx]  = useState(() => { const v=parseInt(_ls("hv_caridx")||"0"); return isNaN(v)?0:v; });
 const [mantraPlaying,setMantraPlaying] = useState(false);
 const [mantraShown,setMantraShown]  = useState(false);
 const [mantraTooltip,setMantraTooltip] = useState(false);
 // Auto-update: register SW and listen for new versions (smart, non-disruptive)
 useEffect(() => {
  if (!('serviceWorker' in navigator)) return;
  let pendingReload = false;
  navigator.serviceWorker.register('/sw.js').then(reg => {
   // Check for updates only every 30 minutes (not 60 seconds — too aggressive)
   setInterval(() => reg.update(), 30 * 60 * 1000);
   reg.addEventListener('updatefound', () => {
    const newWorker = reg.installing;
    if (!newWorker) return;
    newWorker.addEventListener('statechange', () => {
     if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
      // Mark that there's a pending update — will activate on next reload by user
      pendingReload = true;
      newWorker.postMessage('SKIP_WAITING');
     }
    });
   });
  }).catch(() => {});
  // Only reload when the page is hidden (user not interacting)
  document.addEventListener('visibilitychange', () => {
   if (pendingReload && document.visibilityState === 'hidden') {
    setTimeout(() => window.location.reload(), 100);
   }
  });
 }, []);

 // Persist vistosNov to localStorage whenever it changes
 useEffect(() => {
  _lss("hv_vistosnov", JSON.stringify(vistosNov));
 }, [vistosNov]);

 // PWA Install prompt listener (correctly wrapped in useEffect)
 useEffect(() => {
  const handler = (e) => {
   e.preventDefault();
   setDeferredPrompt(e);
  };
  window.addEventListener("beforeinstallprompt", handler);
  return () => window.removeEventListener("beforeinstallprompt", handler);
 }, []);

 // Fetch novedades from Supabase on mount and every 5 minutes
 useEffect(() => {
  const fetchNovedades = async () => {
   try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/novedades?activo=eq.true&order=created_at.desc`, {
     headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
     }
    });
    if (res.ok) {
     const data = await res.json();
     // Transform Supabase format to internal format
     const transformed = data.map(n => ({
      id: `sb_${n.id}`,
      tipo: n.tipo || "evento",
      super: n.super || "",
      e: n.emoji || "📢",
      titulo: n.titulo || "",
      desc: n.desc || "",
      link: n.link || null,
      col: n.color || "#9B59B6"
     }));
     setNovedadesRemote(transformed);
    }
   } catch(err) {
    console.log("Supabase fetch error:", err);
   }
  };
  fetchNovedades();
  const interval = setInterval(fetchNovedades, 30 * 60 * 1000); // every 30 minutes
  return () => clearInterval(interval);
 }, []);

 // OneSignal — load on mount always
 useEffect(() => {
  if (window.OneSignalDeferred) return;
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  const script = document.createElement("script");
  script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
  script.defer = true;
  script.onload = () => {
   window.OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
     appId: ONESIGNAL_APP_ID,
     safari_web_id: "",
     notifyButton: { enable: false },
     allowLocalhostAsSecureOrigin: false,
    });
   });
  };
  document.head.appendChild(script);
 }, []);

 // Compute days as vegan
 const diasVegano = (() => {
 if (!registered) return 30;
 if (yaEsVegano && fechaVegano) {
 const start = new Date(fechaVegano);
 const diff = Math.floor((Date.now() - start.getTime()) / 86400000);
 return Math.max(1,diff);
 }
 return 1; // started today
 })();
 const impacto = calcImpacto(diasVegano);
 // Cuerpo: valores que crecen con el tiempo,llegando al 100% en 1 año
 const cuerpoP = Math.min(1,diasVegano / 365);
 const cuerpo = {
 anos:  (4.2 * cuerpoP).toFixed(1),energia: Math.round(40 * Math.min(1,diasVegano / 90)),cancer:  Math.round(18 * cuerpoP),cognitivo:Math.round(35 * cuerpoP),
 };
 const nombre  = regName || "Miguel";
 // Niveles: cada uno tiene un umbral de días. La barra se llena proporcionalmente hasta el siguiente.
 const NIVELES = [
  {nm:"Héroe Nuevo",      e:"🌱", d:0},
  {nm:"Héroe Semilla",    e:"🌿", d:30},
  {nm:"Héroe Guardián",   e:"⚔️", d:90},
  {nm:"Héroe Luz",        e:"✨", d:180},
  {nm:"Héroe Leyenda",    e:"🌟", d:365},
  {nm:"Héroe Eterno",     e:"🦅", d:730},
  {nm:"Héroe Iluminado",  e:"👑", d:1825},
  {nm:"Héroe Maestro",    e:"💫", d:3650},
 ];
 const nivelIdx = (() => {
  for (let i = NIVELES.length - 1; i >= 0; i--) { if (diasVegano >= NIVELES[i].d) return i; }
  return 0;
 })();
 const nivel = NIVELES[nivelIdx].nm;
 const nivelE = NIVELES[nivelIdx].e;
 const nivelPct = (() => {
  if (nivelIdx >= NIVELES.length - 1) return 100; // Maestro = barra completa
  const actual = NIVELES[nivelIdx].d;
  const siguiente = NIVELES[nivelIdx + 1].d;
  return Math.min(100, ((diasVegano - actual) / (siguiente - actual)) * 100);
 })();
 const nivelSig = nivelIdx < NIVELES.length - 1 ? NIVELES[nivelIdx + 1] : null;
 // Detectar subida de nivel y lanzar fuegos artificiales (después de nivelIdx ya definido)
 useEffect(() => {
  if (!registered) return;
  const lastLevel = parseInt(_ls("hv_lastlevel") || "-1");
  if (nivelIdx > lastLevel) {
   if (lastLevel >= 0) { lanzarConfetti(); setTimeout(lanzarConfetti, 600); }
   _lss("hv_lastlevel", String(nivelIdx));
  }
 }, [nivelIdx, registered]);
 const novPendientes = [...novedadesRemote, ...NOVEDADES].filter(n => !vistosNov.includes(n.id));
 const hayNovedad  = novPendientes.length > 0;
 const go = s => setScreen(s);
 const shareLegado = () => {
 const txt = `🛡️ Llevo ${diasVegano} días siendo vegano/a y esto es lo que he logrado:\n\n🐾 ${impacto.vidas} vidas salvadas\n💧 ${impacto.agua} L de agua preservada\n🌿 ${impacto.co2} kg de CO₂ evitado\n❤️ +${cuerpo.anos} años de esperanza de vida\n⚡ +${cuerpo.energia}% más energía\n🎗️ -${cuerpo.cancer}% riesgo de cáncer\n\n¿Tú también quieres ser un Héroe? Es más fácil de lo que crees 👇\n👉 ${APP_URL}`;
 if (navigator.share) navigator.share({ text: txt,url: APP_URL });
 else navigator.clipboard.writeText(txt);
 };
 const Nav = () => (
 <div style={S.nav}>
 {[["🏠","home"],["🍽️","rec"],["🛒","cmp"],["✨","apoya"],["☰","mas"]].map(([e,id,t])=>(
 <div key={id} onClick={()=>go(id)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,cursor:"pointer",padding:"4px 6px",position:"relative"}}>
 <span style={{fontSize:19}}>{e}</span>
 <span style={{fontSize:10,fontWeight:screen===id?700:500,color:screen===id?"#2D5016":"#bbb"}}>{t}</span>
 {id==="home"&&hayNovedad&&<div style={{position:"absolute",top:0,right:4,width:8,height:8,borderRadius:"50%",background:"#E84040",border:"2px solid white"}}></div>}
 </div>
 ))}
 </div>
 );
 const HomeScreen = () => {
 const rev = REVELACIONES[revIdx];
 // Unified carousel: first "tu cuerpo" card,then novedades,then revelaciones
 const carousel = [
 { tipo:"cuerpo" },
 ...novPendientes.map(n=>({ tipo:"novedad",data:n })),
 ...REVELACIONES.map((r,i)=>({ tipo:"revelacion",data:r,idx:i })),
 ];
 const card = carousel[Math.min(carIdx,carousel.length-1)];
 // Auto-jump to first pending novedad when novedadesRemote loads
 useEffect(() => {
  if (novPendientes.length > 0) {
   // The first novedad is at index 1 (index 0 is "cuerpo")
   setCarIdx(1);
   _lss("hv_caridx", "1");
  }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [novedadesRemote.length]);
 // Launch confetti when arriving at a novedad the user hasn't dismissed yet
 useEffect(() => {
  if (card && card.tipo === "novedad" && !vistosNov.includes(card.data.id)) {
   lanzarConfetti();
  }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [carIdx]);
 const shareRev = (r) => {
 const txt = `${r.e} ${r.f.join("")}\n\n${r.q}\n\n🌱 ¿Te unes? Únete a los Héroes Veganos — la app gratuita que te lo pone fácil:\n👉 ${APP_URL}`;
 if (navigator.share) navigator.share({ text: txt });
 else navigator.clipboard.writeText(txt);
 };
 return (
 <div style={{background:"#F5F0E8",minHeight:"100%"}}>
 <div style={{background:"linear-gradient(160deg,#111e07,#2D5016 60%,#3d6b1e)",padding:"44px 20px 20px"}}>
 <div style={S.sb}></div>
 {/* Nombre + escudo grande */}
 <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
 <span style={{fontSize:28}}>🛡️</span>
 <span style={{fontSize:22,fontWeight:900,color:"white"}}>{nombre}</span>
 </div>
 {/* Tu legado label + contadores */}
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
 <div style={{fontSize:9,fontWeight:700,color:"#E8B84B",letterSpacing:2,textTransform:"uppercase",marginTop:4}}>Tu legado</div>
 <div style={{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"}}>
 {[["🐾",impacto.vidas+" vidas"],["💧",impacto.agua+" L"],["🌿",impacto.co2+" kg CO₂"]].map(([e,t])=>(
 <div key={t} style={{display:"flex",alignItems:"center",gap:5,background:"rgba(255,255,255,0.07)",borderRadius:8,padding:"4px 10px"}}>
 <span style={{fontSize:13}}>{e}</span>
 <span style={{fontSize:14,color:"rgba(255,255,255,0.9)",fontWeight:700}}>{t}</span>
 </div>
 ))}
 </div>
 </div>
 {/* Barra con nivel y días dentro */}
 <div style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:13,padding:"11px 14px"}}>
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
 <div>
 <div style={{fontSize:9,fontWeight:700,color:"#E8B84B",letterSpacing:2,textTransform:"uppercase",marginBottom:2}}>Tu legado crece</div>
 <div style={{color:"rgba(255,255,255,0.35)",fontSize:10}}>
 {nivelIdx >= NIVELES.length - 1 ? "¡Nivel máximo! 💫" : `${Math.round(nivelPct)}% hacia ${nivelSig.e} ${nivelSig.nm}`}
 </div>
 </div>
 <div style={{textAlign:"right"}}>
 <div style={{fontSize:13,fontWeight:700,color:"white",marginBottom:2}}>{nivelE} {nivel}</div>
 <div><span style={{fontSize:20,fontWeight:900,color:"#E8B84B"}}>{diasVegano}</span> <span style={{fontSize:10,color:"rgba(255,255,255,0.35)"}}>días</span></div>
 </div>
 </div>
 <div style={{background:"rgba(0,0,0,0.3)",borderRadius:6,height:6,marginTop:6}}>
 <div style={{width:nivelPct+"%",height:"100%",background:"linear-gradient(90deg,#5a9e20,#8FBC4A,#E8B84B)",borderRadius:6,transition:"width 1s"}}></div>
 </div>
 </div>
 </div>
 <div style={{padding:"12px 16px"}}>
 <div style={{background: card.tipo==="cuerpo"?"linear-gradient(135deg,#2a0a3a,#4a1a6a)":card.tipo==="novedad"?"linear-gradient(135deg,#FFF4B5,#FFE066)":"linear-gradient(135deg,#0e1f08,#1a3510)",border: card.tipo==="cuerpo"?"1px solid rgba(224,90,138,0.3)":card.tipo==="novedad"?"1px solid rgba(232,184,75,0.5)":"1px solid rgba(143,188,74,0.2)",borderRadius:16,padding:"14px",marginBottom:10,position:"relative",overflow:"hidden",minHeight:120}}>
 {/* ❓ info button */}
 <div onClick={(e)=>{e.stopPropagation();setShowCarInfo(!showCarInfo);}} style={{position:"absolute",top:8,right:8,width:20,height:20,borderRadius:"50%",background:card.tipo==="novedad"?"rgba(0,0,0,0.15)":"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:11,color:card.tipo==="novedad"?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.4)",zIndex:10,fontWeight:700}}>?</div>
 {showCarInfo && (
  <div onClick={()=>setShowCarInfo(false)} style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",borderRadius:16,zIndex:20,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",cursor:"pointer"}}>
   <div style={{textAlign:"center"}}>
    <div style={{fontSize:22,marginBottom:8}}>🎉</div>
    <div style={{fontSize:12,color:"rgba(255,255,255,0.9)",lineHeight:1.65,fontWeight:600,marginBottom:6}}>Este espacio te mantiene informado</div>
    <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",lineHeight:1.6}}>Cuando haya un nuevo producto vegano en tu supermercado, una novedad importante o cualquier información relevante, aparecerá aquí con confeti. 🎊</div>
    <div style={{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:10}}>Toca para cerrar</div>
   </div>
  </div>
 )}
 {card.tipo==="novedad"&&<div style={{position:"absolute",top:8,right:10,fontSize:16}}>⭐</div>}
 {card.tipo==="cuerpo"&&(
 <>
 <div style={{color:"rgba(224,90,138,0.9)",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>❤️ Tu cuerpo — lo que ya estás logrando</div>
 <div style={{display:"flex",flexDirection:"column",gap:6}}>
 {[["💗","#E05A8A","+"+cuerpo.anos,"años","más de esperanza de vida"],["⚡","#F0A030","+"+cuerpo.energia+"%","energía","nivel reportado"],["🎗️","#C060C0","−"+cuerpo.cancer+"%","riesgo","de cáncer"],["🧠","#4A9EBF","−"+cuerpo.cognitivo+"%","deterioro","cognitivo"]].map(([e,c,n,u,d])=>(
 <div key={u} style={{display:"flex",alignItems:"center",gap:10}}>
 <div style={{width:30,height:30,borderRadius:8,background:c+"2a",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>{e}</div>
 <div>
 <span style={{fontSize:14,fontWeight:900,color:"white"}}>{n} </span>
 <span style={{fontSize:10,color:"rgba(255,255,255,0.4)"}}>{u} </span>
 <span style={{fontSize:11,color:"rgba(255,255,255,0.5)"}}>{d}</span>
 </div>
 </div>
 ))}
 </div>
 </>
 )}
 {card.tipo==="novedad"&&(
 <>
 <div style={{color:"#8B6914",fontSize:10,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:5}}>
 {card.data.tipo==="producto"?`⭐ Nuevo en ${card.data.super}`:card.data.tipo==="restaurante"?"🍽️ Restaurante vegano cerca":card.data.tipo==="evento"?`📅 Evento · ${card.data.super}`:"📢 Anuncio"}
 </div>
 <div style={{color:"#1a1a1a",fontSize:14,fontWeight:700,marginBottom:3}}>{card.data.titulo}</div>
 <div style={{color:"rgba(26,26,26,0.8)",fontSize:12,marginBottom:10,lineHeight:1.5}}>{card.data.desc}</div>
 <div style={{display:"flex",gap:6,alignItems:"center"}}>
 {card.data.link && <button onClick={()=>{ const lnk=card.data.link; if(lnk.startsWith("#")){ go(lnk.slice(1)); } else { window.open(lnk,"_blank"); } }} style={{background:"rgba(45,80,22,0.9)",color:"white",border:"none",borderRadius:8,padding:"6px 12px",cursor:"pointer",fontFamily:"system-ui",fontSize:11,fontWeight:600}}>{card.data.link.startsWith("#")?"→ Ir a la sección":"🔗 Más info"}</button>}
 <button onClick={()=>{ setVistosNov(p=>[...p,card.data.id]); setCarIdx(c=>{ const n=Math.max(0,c-1); _lss("hv_caridx",String(n)); return n; }); }} style={{background:"rgba(0,0,0,0.15)",color:"rgba(0,0,0,0.7)",border:"none",borderRadius:8,padding:"6px 12px",cursor:"pointer",fontFamily:"system-ui",fontSize:11,fontWeight:600}}>Visto ✓</button>
 </div>
 </>
 )}
 {card.tipo==="revelacion"&&(
 <>
 <div style={{color:"#8FBC4A",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>💡 Revelación</div>
 <div style={{fontSize:24,marginBottom:6,textAlign:"center"}}>{card.data.e}</div>
 <div style={{color:"white",fontSize:15,fontWeight:700,lineHeight:1.5,marginBottom:7,textAlign:"center"}}>
 {card.data.f.map((t,i)=>i%2===0?<span key={i}>{t}</span>:<span key={i} style={{color:"#E8B84B"}}>{t}</span>)}
 </div>
 <div style={{color:"rgba(255,255,255,0.6)",fontSize:13,lineHeight:1.5,fontStyle:"italic",textAlign:"center",marginBottom:9}}>{card.data.q}</div>
 </>
 )}
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginTop:10}}>
 <button onClick={()=>setCarIdx(c=>{ const n=Math.max(0,c-1); _lss("hv_caridx",String(n)); return n; })} style={{...S.btn("rgba(255,255,255,0.07)","rgba(255,255,255,0.5)",8,"4px 12px"),fontSize:16,opacity:carIdx===0?0.3:1,flexShrink:0}}>‹</button>
 {card.tipo==="revelacion" && (card.data.id==="r100" ? (
  <button onClick={()=>go("mas")} style={{...S.btn("linear-gradient(135deg,#E8B84B,#C8983B)","#1a1a1a",8,"7px 12px"),flex:1,fontSize:12,fontWeight:700,display:"flex",alignItems:"center",gap:6,justifyContent:"center"}}>
   ▶ Documentales
  </button>
 ) : (
  <button onClick={()=>shareRev(card.data)} style={{...S.btn("rgba(143,188,74,0.15)","#8FBC4A",8,"7px 12px"),flex:1,fontSize:12,display:"flex",alignItems:"center",gap:6,justifyContent:"center",border:"1px solid rgba(143,188,74,0.2)"}}>
   🌱 Compartir
  </button>
 ))}
 {card.tipo!=="revelacion" && <div style={{flex:1}}></div>}
 <button onClick={()=>setCarIdx(c=>{ const n=c+1>=carousel.length?1:c+1; _lss("hv_caridx",String(n)); return n; })} style={{...S.btn("rgba(255,255,255,0.07)","rgba(255,255,255,0.5)",8,"4px 12px"),fontSize:16,opacity:1,flexShrink:0}}>›</button>
 </div>
 </div>
 <div style={{fontSize:14,fontWeight:700,color:"#2D5016",marginBottom:9}}>¿Qué quieres hacer hoy?</div>
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
 {[
 {e:"🍃",t:"Recetas",s:"",dk:false,ac:()=>go("rec")},
 {e:"🛒",t:"Donde Comprar",s:"Productos estrella",dk:false,ac:()=>go("cmp")},
 {e:"🌱",t:"Empezar sin miedo",s:"Dudas resueltas",dk:true,ac:()=>go("esm")},
 {e:"☰",t:"Descubre más",s:"Docs,tiendas y más",dk:false,ac:()=>go("mas")},
 ].map((b,i)=>(
 <div key={i} onClick={b.ac} style={{background:b.dk?"linear-gradient(135deg,#111e07,#2D5016)":"white",borderRadius:13,padding:12,boxShadow:"0 2px 8px rgba(0,0,0,0.05)",cursor:"pointer"}}>
 <div style={{fontSize:21,marginBottom:5}}>{b.e}</div>
 <div style={{fontSize:13,fontWeight:600,color:b.dk?"white":"#1a1a1a"}}>{b.t}</div>
 <div style={{fontSize:11,color:b.dk?"rgba(255,255,255,0.42)":"#aaa",marginTop:1}}>{b.s}</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
 };
 const RecScreen = () => {
 const cat = CATEGORIAS[catIdx];
 const platos = PLATOS[cat.id] || [];
 const generarLista = () => {
 let t = "🛒 Lista de la compra — Semana equilibrada\n\n";
 COMPRA_SEM.forEach(([cat,items])=>{ t += cat+"\n"; items.forEach(i=>t+="• "+i+"\n"); t+="\n"; });
 return t + APP_TAGLINE + "\n" + APP_URL;
 };
 return (
 <div style={{background:"#F5F0E8",minHeight:"100%",display:"flex",flexDirection:"column"}}>
 <div style={{background:"linear-gradient(160deg,#111e07,#2D5016)",padding:"44px 16px 0"}}>
 <div style={S.sb}></div>
 <div style={{color:"white",fontSize:19,fontWeight:700,marginBottom:16}}>Recetas 🍽️</div>
 </div>
 <div style={{display:"flex",flex:1,overflow:"hidden"}}>
 <div style={{width:70,background:CATEGORIAS[catIdx]?.sidebar||"#1e3d0f",display:"flex",flexDirection:"column",overflowY:"auto",flexShrink:0}}>
 {CATEGORIAS.map((c,i)=>(
 <div key={c.id} onClick={()=>setCatIdx(i)} style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"12px 4px",cursor:"pointer",background:catIdx===i?"rgba(255,255,255,0.18)":"transparent",borderLeft:catIdx===i?"3px solid white":"3px solid transparent",borderBottom:"1px solid rgba(255,255,255,0.08)",transition:"all 0.2s"}}>
 <span style={{fontSize:22,lineHeight:1,marginBottom:4}}>{c.e || "🌿"}</span>
 <span style={{fontSize:8,fontWeight:700,color:catIdx===i?"white":"rgba(255,255,255,0.6)",textAlign:"center",lineHeight:1.2,maxWidth:60}}>{c.nm}</span>
 </div>
 ))}
 </div>
 <div style={{flex:1,overflowY:"auto",background:"#F5F0E8"}}>
 <div style={{background:cat.sidebar+"18",borderBottom:"2px solid "+(cat.sidebar||"#2d7a45")+"40",padding:"12px 14px",display:"flex",alignItems:"center",gap:10}}>
 <span style={{fontSize:26}}>{cat.e || "🌿"}</span>
 <div style={{color:cat.sidebar,fontSize:15,fontWeight:800}}>{cat.nm}</div>
 </div>
 {platos.map((p,i)=>(
 <div key={p.id}>
 {i>0&&<div style={{height:1,background:"rgba(0,0,0,0.06)",marginLeft:14}}></div>}
 <div onClick={()=>{setPlatoSel(p);go("plato");}} style={{display:"flex",gap:12,cursor:"pointer",padding:"12px 14px",background:"white"}}>
 <div style={{width:54,height:54,borderRadius:13,background:cat.sidebar+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{p.e || "🌿"}</div>
 <div style={{flex:1,minWidth:0}}>
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:2}}>
 <div style={{fontSize:14,fontWeight:700,color:cat.sidebar,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"70%"}}>{p.nm}</div>
 <div style={{fontSize:10,color:"#bbb",flexShrink:0,marginLeft:4}}>{p.kal}</div>
 </div>
 <div style={{fontSize:11,color:"#777",lineHeight:1.4,marginBottom:4,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{p.desc}</div>
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <span style={{fontSize:10,color:"#ccc"}}>⏱ {p.t}</span>
 <span style={{fontSize:11,color:p.col,fontWeight:600}}>Ver →</span>
 </div>
 </div>
 </div>
 </div>
 ))}
 {platos.length===0&&<div style={{textAlign:"center",padding:"40px 20px",color:"#ccc"}}>Próximamente…</div>}
 <div style={{height:12}}></div>
 </div>
 </div>
 </div>
 );
 };
 const EsmScreen = () => {
 const generarLista = () => {
 let t = "🛒 Lista de la compra — Semana equilibrada\n\n";
 COMPRA_SEM.forEach(([cat,items])=>{ t += cat+"\n"; items.forEach(i=>t+="• "+i+"\n"); t+="\n"; });
 return t + APP_TAGLINE + "\n" + APP_URL;
 };
 return (
 <div style={{background:"#F5F0E8",minHeight:"100%",overflowY:"auto"}}>
 <div style={{background:"linear-gradient(160deg,#111e07,#2D5016)",padding:"44px 18px 20px"}}>
 <div style={S.sb}></div>
 <div style={{display:"inline-block",background:"rgba(232,184,75,0.18)",border:"1px solid rgba(232,184,75,0.35)",borderRadius:18,padding:"3px 10px",marginBottom:8}}>
 <span style={{fontSize:10,fontWeight:700,color:"#E8B84B",letterSpacing:1.5,textTransform:"uppercase"}}>🌱 Tu transición</span>
 </div>
 <div style={{color:"white",fontSize:22,fontWeight:900,lineHeight:1.2,marginBottom:5}}>Empezar sin miedo</div>
 <div style={{color:"rgba(255,255,255,0.7)",fontSize:12,lineHeight:1.55}}>Es normal tener dudas. Resolveremos todas para que cambies el chip con tranquilidad.</div>
 </div>
 <div style={{padding:"18px 18px 4px"}}>
 <div style={{fontSize:11,fontWeight:700,color:"#2D5016",letterSpacing:1.5,textTransform:"uppercase",marginBottom:10}}>💬 Tus dudas,resueltas</div>
 {DUDAS.map(d => (
 <div key={d.id} style={{background:"white",borderRadius:13,marginBottom:7,boxShadow:"0 2px 6px rgba(0,0,0,0.04)",border:dudaOpen===d.id?"1px solid #2D5016":"1px solid rgba(0,0,0,0.05)",overflow:"hidden"}}>
 <div onClick={()=>setDudaOpen(dudaOpen===d.id?null:d.id)} style={{display:"flex",alignItems:"center",gap:11,padding:"12px 14px",cursor:"pointer"}}>
 <div style={{width:36,height:36,borderRadius:9,background:"rgba(45,80,22,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{d.e}</div>
 <div style={{flex:1,fontSize:13,fontWeight:600,color:"#1a1a1a",lineHeight:1.35}}>{d.q}</div>
 <span style={{fontSize:14,color:"#aaa",transform:dudaOpen===d.id?"rotate(90deg)":"none",transition:"transform 0.2s"}}>›</span>
 </div>
 {dudaOpen===d.id && <div style={{padding:"4px 14px 14px",fontSize:12,color:"#555",lineHeight:1.65,whiteSpace:"pre-line",borderTop:"1px solid rgba(0,0,0,0.04)",paddingTop:10}}>{d.a}</div>}
 </div>
 ))}
 </div>
 <div style={{padding:"16px 18px 4px"}}>
 <div style={{fontSize:11,fontWeight:700,color:"#2D5016",letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>🍽️ El plato fácil</div>
 <div style={{fontSize:11,color:"#888",lineHeight:1.5,marginBottom:11,fontStyle:"italic"}}>Sin medir,sin pensar mucho. Solo asegúrate de que en tu plato haya estos 4 ingredientes.</div>
 <div style={{background:"linear-gradient(135deg,#fffbf2,#f5efe0)",borderRadius:16,padding:"14px",border:"1px solid rgba(232,184,75,0.2)"}}>
 {PLATO_FACIL.map(([e,nm,col,d],i)=>(
 <div key={nm} style={{display:"flex",alignItems:"center",gap:12,padding:"9px 0",borderBottom:i<3?"1px dashed rgba(0,0,0,0.08)":"none"}}>
 <div style={{width:38,height:38,borderRadius:10,background:col+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{e}</div>
 <div style={{flex:1}}>
 <div style={{fontSize:13,fontWeight:800,color:col,marginBottom:2}}>{nm}</div>
 <div style={{fontSize:11,color:"#666",lineHeight:1.4}}>{d}</div>
 </div>
 </div>
 ))}
 </div>
 <div style={{textAlign:"center",marginTop:11,padding:"11px 14px",background:"linear-gradient(135deg,#2D5016,#4A7C2F)",borderRadius:13,color:"white",fontSize:12,fontWeight:700,lineHeight:1.45}}>Si cada día comes estos 4,<br/>vas sobrado. No mides nada.</div>
 <div style={{fontSize:11,color:"#888",textAlign:"center",lineHeight:1.5,marginTop:7,fontStyle:"italic"}}>+ recuerda la B12 y la vitamina D del sol</div>
 </div>
 <div style={{padding:"16px 18px 4px"}}>
 <div style={{fontSize:11,fontWeight:700,color:"#2D5016",letterSpacing:1.5,textTransform:"uppercase",marginBottom:5}}>📅 Una semana ejemplo</div>
 <div style={{fontSize:11,color:"#888",lineHeight:1.5,marginBottom:10,fontStyle:"italic"}}>Esta es solo una idea. Cuando te suelte el chip,harás las tuyas.</div>
 <div style={{background:"white",borderRadius:13,overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
 {SEMANA_EJ.map(([dia,com,cen],i)=>(
 <div key={dia} style={{borderBottom:i<6?"1px solid rgba(0,0,0,0.05)":"none",padding:"9px 12px"}}>
 <div style={{fontSize:11,fontWeight:800,color:"#2D5016",letterSpacing:0.5,textTransform:"uppercase",marginBottom:3}}>{dia}</div>
 <div style={{display:"flex",gap:6,marginBottom:2}}><span style={{fontSize:10,fontWeight:700,color:"#888",minWidth:46}}>Comida:</span><span style={{fontSize:11,color:"#333",lineHeight:1.4,flex:1}}>{com}</span></div>
 <div style={{display:"flex",gap:6}}><span style={{fontSize:10,fontWeight:700,color:"#888",minWidth:46}}>Cena:</span><span style={{fontSize:11,color:"#333",lineHeight:1.4,flex:1}}>{cen}</span></div>
 </div>
 ))}
 </div>
 </div>
 <div style={{padding:"16px 18px 4px"}}>
 <div style={{fontSize:11,fontWeight:700,color:"#2D5016",letterSpacing:1.5,textTransform:"uppercase",marginBottom:9}}>🛒 Lista de la compra</div>
 <div onClick={()=>setCompraSemOpen(!compraSemOpen)} style={{background:"linear-gradient(135deg,#2D5016,#4A7C2F)",color:"white",borderRadius:12,padding:"11px 13px",cursor:"pointer",display:"flex",alignItems:"center",gap:9,boxShadow:"0 4px 12px rgba(45,80,22,0.25)"}}>
 <span style={{fontSize:20}}>🛒</span>
 <div style={{flex:1}}>
 <div style={{fontSize:13,fontWeight:700}}>Ver lista de la compra</div>
 <div style={{fontSize:11,color:"rgba(255,255,255,0.7)"}}>Todo para los 7 días</div>
 </div>
 <span style={{fontSize:16,transform:compraSemOpen?"rotate(180deg)":"none",transition:"transform 0.3s"}}>▾</span>
 </div>
 {compraSemOpen && (
 <div style={{background:"white",borderRadius:12,padding:"11px",marginTop:7,boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
 <div style={{background:"rgba(232,184,75,0.1)",border:"1px solid rgba(232,184,75,0.25)",borderRadius:9,padding:"8px 11px",marginBottom:10,fontSize:11,color:"#7a5a25",lineHeight:1.5}}>💡 Esto es un ejemplo. Ajústala a tus gustos o cambia recetas.</div>
 {COMPRA_SEM.map(([cat,items])=>(
 <div key={cat} style={{marginBottom:9}}>
 <div style={{fontSize:10,fontWeight:700,color:"#2D5016",letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>{cat}</div>
 {items.map(it=>(
 <div key={it} style={{display:"flex",alignItems:"center",gap:7,padding:"3px 0",borderBottom:"1px solid rgba(0,0,0,0.04)"}}>
 <div style={{width:5,height:5,borderRadius:"50%",background:"#8FBC4A",flexShrink:0}}></div>
 <span style={{fontSize:12,color:"#444"}}>{it}</span>
 </div>
 ))}
 </div>
 ))}
 <div style={{display:"flex",gap:6,marginTop:10}}>
 <button onClick={()=>window.open("https://wa.me/?text="+encodeURIComponent(generarLista()),"_blank")} style={{flex:1,background:"#128C7E",color:"white",border:"none",borderRadius:8,padding:"8px",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"system-ui"}}>💬 WhatsApp</button>
 <button onClick={()=>window.open("mailto:?subject=Lista&body="+encodeURIComponent(generarLista()),"_blank")} style={{flex:1,background:"#1a73e8",color:"white",border:"none",borderRadius:8,padding:"8px",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"system-ui"}}>✉️ Email</button>
 <button onClick={()=>{navigator.clipboard.writeText(generarLista());}} style={{flex:1,background:"#f0f0f0",color:"#333",border:"none",borderRadius:8,padding:"8px",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"system-ui"}}>📋 Copiar</button>
 </div>
 </div>
 )}
 </div>
 <div style={{padding:"16px 18px 4px"}}>
 <div style={{fontSize:11,fontWeight:700,color:"#2D5016",letterSpacing:1.5,textTransform:"uppercase",marginBottom:9}}>🧬 Nutrientes que conviene cuidar</div>
 <div style={{background:"white",borderRadius:12,padding:"4px 12px",boxShadow:"0 2px 6px rgba(0,0,0,0.04)"}}>
 {NUTRI.map(([e,col,n,d],i)=>(
 <div key={n} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<NUTRI.length-1?"1px solid rgba(0,0,0,0.04)":"none",alignItems:"flex-start"}}>
 <div style={{width:28,height:28,borderRadius:7,background:col+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>{e}</div>
 <div style={{flex:1}}>
 <div style={{fontSize:12,fontWeight:700,color:col,marginBottom:1}}>{n}</div>
 <div style={{fontSize:11,color:"#666",lineHeight:1.4}}>{d}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div style={{padding:"16px 18px 4px"}}>
 <div style={{fontSize:11,fontWeight:700,color:"#2D5016",letterSpacing:1.5,textTransform:"uppercase",marginBottom:5}}>🌍 Por temporada</div>
 <div style={{fontSize:11,color:"#888",lineHeight:1.5,marginBottom:9,fontStyle:"italic"}}>El cuerpo pide cosas distintas según la época.</div>
 {EST.map(([e,est,col,n,d,ej])=>(
 <div key={est} style={{background:"white",borderRadius:12,padding:"10px 12px",marginBottom:6,boxShadow:"0 2px 6px rgba(0,0,0,0.04)",borderLeft:"4px solid "+col}}>
 <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
 <span style={{fontSize:17}}>{e}</span>
 <div style={{flex:1}}>
 <div style={{fontSize:13,fontWeight:800,color:col,lineHeight:1.2}}>{est}</div>
 <div style={{fontSize:10,fontWeight:600,color:"#888",marginTop:1}}>{n}</div>
 </div>
 </div>
 <div style={{fontSize:11,color:"#555",lineHeight:1.45,marginBottom:5}}>{d}</div>
 <div style={{fontSize:11,color:col,lineHeight:1.4,fontWeight:600,fontStyle:"italic",paddingTop:5,borderTop:"1px dashed rgba(0,0,0,0.08)",wordBreak:"break-word",overflowWrap:"break-word",whiteSpace:"normal"}}>{ej}</div>
 </div>
 ))}
 </div>
 <div style={{padding:"16px 18px 22px"}}>
 <div style={{background:"linear-gradient(135deg,#111e07,#1e3410)",borderRadius:13,padding:"15px",textAlign:"center"}}>
 <div style={{fontSize:22,marginBottom:5}}>🌱</div>
 <div style={{fontSize:12,fontWeight:700,color:"#E8B84B",marginBottom:4}}>No tienes que hacerlo perfecto</div>
 <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",lineHeight:1.55}}>Hazlo paso a paso. Cada plato vegano es una victoria.</div>
 </div>
 <a href="mailto:heroesveganos@gmail.com" style={{display:"flex",alignItems:"center",gap:9,background:"rgba(143,188,74,0.1)",border:"1px solid rgba(143,188,74,0.25)",borderRadius:11,padding:"10px 13px",textDecoration:"none",marginTop:9}}>
 <span style={{fontSize:17}}>✉️</span>
 <div style={{flex:1}}>
 <div style={{fontSize:12,fontWeight:700,color:"#2D5016",marginBottom:1}}>¿Más dudas? Escríbenos</div>
 <div style={{fontSize:11,color:"#5a8a4a"}}>heroesveganos@gmail.com</div>
 </div>
 <span style={{color:"#8FBC4A",fontSize:14}}>→</span>
 </a>
 </div>
 </div>
 );
 };
 const PlatoScreen = () => {
 if(!platoSel) return null;
 const p = platoSel;
 const shareMsg = "🌱 " + p.nm + (p.compra && p.compra.length > 0 ? "\n\n" + p.compra.map(i=>"• "+i).join("\n") : "") + "\n\n" + APP_TAGLINE + "\n" + APP_URL;
 return (
 <div style={{background:"#FDFCFA",minHeight:"100%"}}>
 <div style={{background:`linear-gradient(160deg,#0a1a06,${p.col})`,padding:"44px 20px 20px"}}>
 <div style={S.sb}></div>
 <div onClick={()=>go("rec")} style={S.bk()}>← La carta</div>
 <div style={{fontSize:42,marginBottom:8}}>{p.e}</div>
 <div style={{color:"white",fontSize:20,fontWeight:700,lineHeight:1.2,marginBottom:4}}>{p.nm}</div>
 <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
 <div style={{background:"rgba(255,255,255,0.12)",borderRadius:8,padding:"4px 10px",fontSize:12,color:"white"}}>⏱ {p.t}</div>
 <div style={{background:"rgba(255,255,255,0.12)",borderRadius:8,padding:"4px 10px",fontSize:12,color:"white"}}>🔥 {p.kal}</div>
 {p.nut&&<div style={{background:"rgba(255,255,255,0.08)",borderRadius:8,padding:"4px 10px",fontSize:11,color:"rgba(255,255,255,0.7)"}}>{p.nut}</div>}
 </div>
 </div>
 <div style={{padding:"14px 20px"}}>
 {p.receta && p.receta.length > 0 ? (
 <div style={{background:"white",borderRadius:15,padding:"14px",boxShadow:"0 2px 10px rgba(0,0,0,0.06)",marginBottom:10}}>
 <div style={{fontSize:14,fontWeight:700,color:"#2D5016",marginBottom:10}}>📋 Preparación</div>
 {p.receta.map((paso,i)=>(
 <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
 <div style={{width:21,height:21,borderRadius:"50%",background:p.col,color:"white",fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{i+1}</div>
 <div style={{fontSize:13,color:"#444",lineHeight:1.5,paddingTop:2}}>{paso}</div>
 </div>
 ))}
 </div>
 ) : (
 <div style={{background:"#f9f9f9",borderRadius:15,padding:"14px",marginBottom:10,textAlign:"center"}}>
 <div style={{fontSize:13,color:"#aaa"}}>📋 Pasos de preparación próximamente</div>
 </div>
 )}
 {p.video && (
 <div onClick={()=>window.open(p.video,"_blank")} style={{background:"linear-gradient(135deg,#111e07,#1e3410)",borderRadius:14,padding:"12px 14px",display:"flex",alignItems:"center",gap:12,marginBottom:10,cursor:"pointer"}}>
 <div style={{width:44,height:44,background:"rgba(255,255,255,0.1)",borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>▶️</div>
 <div style={{flex:1}}>
 <div style={{color:"white",fontSize:13,fontWeight:600}}>Ver vídeo receta</div>
 <div style={{color:"rgba(255,255,255,0.42)",fontSize:11,marginTop:2}}>Paso a paso en YouTube</div>
 </div>
 <span style={{color:"rgba(255,255,255,0.3)"}}>→</span>
 </div>
 )}
 {p.compra && p.compra.length > 0 ? (
 <div style={{background:"white",borderRadius:15,padding:"14px",boxShadow:"0 2px 10px rgba(0,0,0,0.06)",marginBottom:10}}>
 <div style={{fontSize:14,fontWeight:700,color:"#2D5016",marginBottom:8}}>🛒 Ingredientes</div>
 {p.compra.map((it,i)=>(
 <div key={i} style={{display:"flex",alignItems:"center",gap:9,padding:"6px 0",borderBottom:i<p.compra.length-1?"1px solid rgba(0,0,0,0.05)":"none"}}>
 <div style={{width:6,height:6,borderRadius:"50%",background:p.col,flexShrink:0}}></div>
 <span style={{fontSize:13,color:"#333"}}>{it}</span>
 </div>
 ))}
 </div>
 ) : (
 <div style={{background:"#f9f9f9",borderRadius:15,padding:"14px",marginBottom:10,textAlign:"center"}}>
 <div style={{fontSize:13,color:"#aaa"}}>🛒 Lista de ingredientes próximamente</div>
 </div>
 )}
 <div style={{display:"flex",gap:7,marginBottom:16}}>
 <button onClick={()=>window.open("https://wa.me/?text="+encodeURIComponent(shareMsg),"_blank")} style={{...S.btn("#128C7E","white",10,"10px 12px"),flex:1,fontSize:12,display:"flex",alignItems:"center",gap:6,justifyContent:"center"}}>💬 WhatsApp</button>
 <button onClick={()=>window.open("mailto:?subject=Receta&body="+encodeURIComponent(shareMsg),"_blank")} style={{...S.btn("#f0f4ff","#3355bb",10,"10px 12px"),flex:1,fontSize:12,border:"1px solid #dde4ff",display:"flex",alignItems:"center",gap:6,justifyContent:"center"}}>✉️ Email</button>
 </div>
 </div>
 </div>
 );
 };
 const CmpScreen = () => {
 const sup = SUPERMERCADOS.find(s=>s.id===superSel);
 const itms = sup ? (ITEMS_SUPER[superSel]||[]) : [];
 return (
 <div style={{background:"#FDFCFA",minHeight:"100%"}}>
 <div style={{background:`linear-gradient(160deg,#0a0a0a,${sup?.col||"#333"})`,padding:"44px 20px 0",transition:"background 0.4s"}}>
 <div style={S.sb}></div>
 <div style={{color:"white",fontSize:20,fontWeight:700,marginBottom:14}}>Donde Comprar 🛒</div>
 <div style={{display:"flex",overflowX:"auto",scrollbarWidth:"none",gap:2}}>
 {SUPERMERCADOS.map(s=>(
 <div key={s.id} onClick={()=>setSuperSel(superSel===s.id?null:s.id)} style={{flexShrink:0,cursor:"pointer",padding:"6px 9px",background:superSel===s.id?"white":s.col+"18",borderRadius:"8px 8px 0 0",border:`1px solid ${superSel===s.id?s.col+"70":"rgba(255,255,255,0.1)"}`,
 borderBottom:superSel===s.id?"1px solid white":"none",marginBottom:superSel===s.id?-1:0,zIndex:superSel===s.id?3:1,}}>
 <div style={{fontSize:9,fontWeight:700,color:superSel===s.id?s.col:"rgba(255,255,255,0.7)",whiteSpace:"nowrap"}}>{s.nm}</div>
 </div>
 ))}
 </div>
 </div>
 <div style={{background:"white",minHeight:400,padding:"12px 16px"}}>
 {!superSel ? (
 <div style={{textAlign:"center",padding:"28px 16px"}}>
 <div style={{fontSize:32,marginBottom:10}}>⭐ 🛒 ✨</div>
 <div style={{fontSize:15,fontWeight:800,color:"#1a5c33",marginBottom:8}}>Productos veganos estrella</div>
 <div style={{fontSize:13,color:"#5a8a6a",lineHeight:1.65,marginBottom:16}}>Cosas que no se encuentran en todos lados. Actualizadas con novedades cada semana. Toca un supermercado.</div>
 <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>
 {SUPERMERCADOS.map(s=>(
 <div key={s.id} onClick={()=>setSuperSel(s.id)} style={{background:s.col,color:"white",fontSize:12,fontWeight:700,padding:"7px 14px",borderRadius:20,cursor:"pointer",boxShadow:`0 3px 8px ${s.col}50`}}>{s.nm}</div>
 ))}
 </div>
 </div>
 ) : (
 <>
 <div style={{fontSize:10,color:sup?.col,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:8,paddingBottom:6,borderBottom:`1px solid ${sup?.col}20`}}>⭐ Productos estrella en {sup?.nm}</div>
 {itms.map(({cat,items})=>(
 <div key={cat}>
 <div style={{fontSize:10,fontWeight:700,color:"#8B6F47",letterSpacing:1.3,textTransform:"uppercase",margin:"10px 0 5px"}}>{cat}</div>
 {items.map(([k,nm,ds])=>(
 <div key={k} style={{display:"flex",alignItems:"center",gap:9,padding:"8px 0",borderBottom:"1px solid rgba(0,0,0,0.04)"}}>
 <div style={{width:6,height:6,borderRadius:"50%",background:sup?.col,flexShrink:0}}></div>
 <div style={{flex:1}}>
 <div style={{fontSize:13,color:"#1a1a1a",fontWeight:500}}>{nm}</div>
 {ds&&<div style={{fontSize:11,color:"#aaa",marginTop:1}}>{ds}</div>}
 </div>
 </div>
 ))}
 </div>
 ))}
 <div style={{height:16}}></div>
 </>
 )}
 </div>
 </div>
 );
 };
 const ApoyaScreen = () => (
 <div style={{background:"#070c05",minHeight:"100%"}}>
 <div style={{background:"linear-gradient(160deg,#040803,#0f1a08)",padding:"44px 20px 20px"}}>
 <div style={S.sb}></div>
 <div style={{fontSize:34,marginBottom:8}}>✨</div>
 <div style={{color:"white",fontSize:22,fontWeight:900,marginBottom:4}}>Apoya el proyecto</div>
 <div style={{color:"rgba(255,255,255,0.45)",fontSize:13,lineHeight:1.6}}>Tú decides a dónde va tu contribución. 100% transparente.</div>
 </div>
 <div style={{padding:"16px 20px"}}>
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
 {[["🐾","Animales"],["🌱","Este proyecto"],["🤲","Humanitario"]].map(([e,n,d],i)=>(
 <div key={n} onClick={()=>{ setCausa(i); setTipo(i===1?"m":"u"); }} style={{background:causa===i?"rgba(143,188,74,0.12)":"rgba(255,255,255,0.04)",border:`1px solid ${causa===i?"#8FBC4A":"rgba(255,255,255,0.08)"}`,borderRadius:13,padding:"12px 8px",cursor:"pointer",textAlign:"center"}}>
 <span style={{fontSize:24,display:"block",marginBottom:5}}>{e}</span>
 <div style={{fontSize:12,fontWeight:700,color:"white"}}>{n}</div>
 <div style={{fontSize:10,color:causa===i?"rgba(143,188,74,0.7)":"rgba(255,255,255,0.3)",marginTop:3,lineHeight:1.3}}>{d}</div>
 </div>
 ))}
 </div>
 <div style={{display:"flex",background:"rgba(0,0,0,0.3)",borderRadius:11,padding:3,gap:3,marginBottom:14}}>
 {[["u","Una vez"],["m","Cada mes"]].map(([t,l])=>(
 <button key={t} onClick={()=>{ if(t==="m"&&causa!==1) return; setTipo(t); }} style={{flex:1,padding:8,borderRadius:8,border:"none",cursor:t==="m"&&causa!==1?"not-allowed":"pointer",fontFamily:"system-ui",fontSize:13,fontWeight:600,background:tipo===t&&!(t==="m"&&causa!==1)?"white":"transparent",color:tipo===t&&!(t==="m"&&causa!==1)?"#2D5016":t==="m"&&causa!==1?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.4)",opacity:t==="m"&&causa!==1?0.4:1}}>{l}</button>
 ))}
 </div>
 {/* Importes mensuales — solo para Este proyecto con Cada mes */}
 {causa===1 && tipo==="m" ? (
 <div style={{marginBottom:14}}>
 <div style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginBottom:8,textAlign:"center"}}>Elige tu aportación mensual:</div>
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:6}}>
 {[[0,"3€","https://buy.stripe.com/9B6bJ22jIeOb46kgA9c3m04"],[1,"6€","https://buy.stripe.com/6oUcN69Ma49x5aogA9c3m03"],[2,"15€","https://buy.stripe.com/dRm6oI3nMcG38mA97Hc3m05"]].map(([i,amt])=>(
 <div key={i} onClick={()=>setDonAmtIdx(i)} style={{background:donAmtIdx===i?"rgba(143,188,74,0.2)":"rgba(255,255,255,0.06)",border:donAmtIdx===i?"1.5px solid #8FBC4A":"0.5px solid rgba(255,255,255,0.15)",borderRadius:8,padding:"10px 4px",textAlign:"center",cursor:"pointer"}}>
 <div style={{fontSize:15,fontWeight:600,color:donAmtIdx===i?"#8FBC4A":"white"}}>{amt}</div>
 <div style={{fontSize:10,color:donAmtIdx===i?"rgba(143,188,74,0.6)":"rgba(255,255,255,0.3)"}}>/mes</div>
 </div>
 ))}
 </div>
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:14}}>
 {[[3,"30€","https://buy.stripe.com/cNi00k7E2cG3byM4Rrc3m06"],[4,"60€","https://buy.stripe.com/eVqfZi2jIeObcCQ1Ffc3m07"]].map(([i,amt])=>(
 <div key={i} onClick={()=>setDonAmtIdx(i)} style={{background:donAmtIdx===i?"rgba(143,188,74,0.2)":"rgba(255,255,255,0.06)",border:donAmtIdx===i?"1.5px solid #8FBC4A":"0.5px solid rgba(255,255,255,0.15)",borderRadius:8,padding:"10px 4px",textAlign:"center",cursor:"pointer"}}>
 <div style={{fontSize:15,fontWeight:600,color:donAmtIdx===i?"#8FBC4A":"white"}}>{amt}</div>
 <div style={{fontSize:10,color:donAmtIdx===i?"rgba(143,188,74,0.6)":"rgba(255,255,255,0.3)"}}>/mes</div>
 </div>
 ))}
 </div>
 <button onClick={()=>{
 const links=["https://buy.stripe.com/9B6bJ22jIeOb46kgA9c3m04","https://buy.stripe.com/6oUcN69Ma49x5aogA9c3m03","https://buy.stripe.com/dRm6oI3nMcG38mA97Hc3m05","https://buy.stripe.com/cNi00k7E2cG3byM4Rrc3m06","https://buy.stripe.com/eVqfZi2jIeObcCQ1Ffc3m07"];
 window.open(links[donAmtIdx],"_blank");
 }} style={{...S.btn("linear-gradient(135deg,#2D5016,#4A7C2F)","white"),width:"100%",fontSize:15,padding:"14px"}}>
 Contribuir {["3€","6€","15€","30€","60€"][donAmtIdx]}/mes 🌱
 </button>
 </div>
 ) : (
 <div style={{marginBottom:14}}>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.5)",marginBottom:7}}>¿Cuánto quieres aportar?</div>
 <div style={{display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:12,padding:"8px 14px"}}>
 <span style={{color:"rgba(255,255,255,0.5)",fontSize:18}}>€</span>
 <input value={donAmt} onChange={e=>setDonAmt(e.target.value.replace(/[^0-9.]/g,""))} style={{flex:1,border:"none",outline:"none",background:"transparent",color:"white",fontSize:22,fontWeight:700,fontFamily:"system-ui"}} placeholder="0" type="number" min="1"/>
 </div>
 </div>
 )}
 {!(causa===1&&tipo==="m") && (
 <button onClick={()=>{ const links=["https://buy.stripe.com/5kQ6oI1fE6hF5aoabLc3m01","https://buy.stripe.com/7sY14o9MadK7byM97Hc3m00","https://buy.stripe.com/3cIaEY1fE21pauI0Bbc3m02"]; window.open(links[causa],"_blank"); }} style={{...S.btn("linear-gradient(135deg,#2D5016,#4A7C2F)","white"),width:"100%",fontSize:15,padding:"14px",marginBottom:14}}>
 Contribuir a {["Animales 🐾","Este proyecto 🌱","Humanitario 🤲"][causa]}
 </button>
 )}
 <div style={{fontSize:12,color:"rgba(255,255,255,0.4)",textAlign:"center",marginTop:10,lineHeight:1.6}}>
 Sabrás exactamente donde va cada euro.<br/>Se anunciarán las cantidades y el destino.
 </div>
 <div style={{background:"linear-gradient(145deg,#111e07,#1e3410)",border:"1px solid rgba(143,188,74,0.14)",borderRadius:16,padding:"16px",marginTop:18}}>
 <div style={{color:"#8FBC4A",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:8,textAlign:"center"}}>✦ Comparte tu legado ✦</div>
 <div style={{color:"white",fontSize:16,fontWeight:900,lineHeight:1.3,marginBottom:5,textAlign:"center"}}>Cada decisión tuya<br/><span style={{color:"#E8B84B",fontStyle:"italic"}}>planta una semilla en otros</span></div>
 <div style={{color:"rgba(255,255,255,0.45)",fontSize:12,textAlign:"center",marginBottom:12,fontStyle:"italic"}}>{APP_TAGLINE}</div>
 <button onClick={shareLegado} style={{...S.btn("#2D5016","white"),width:"100%",fontSize:14,padding:"13px",borderRadius:10,fontWeight:800}}>📤 Compartir</button>
 <div style={{textAlign:"center",marginTop:10}}>
 <div style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>🌱 Descarga la app: <span style={{color:"#8FBC4A"}}>{APP_URL}</span></div>
 </div>
 </div>
 </div>
 </div>
 );
 const [restOpen,setRestOpen]  = useState(false);
 const [tiendasOpen,setTiendasOpen] = useState(false);
 const [docsOpen,setDocsOpen]  = useState(false);
 const [turismoOpen,setTurismoOpen]  = useState(false);
 const [santuariosOpen,setSantuariosOpen] = useState(false);
 const [legalOpen,setLegalOpen]  = useState(null);
 const [legalItemOpen,setLegalItemOpen] = useState(null);
 const MasScreen = () => (
 <div style={{background:"#070c05",minHeight:"100%"}}>
 <div style={{background:"linear-gradient(160deg,#040803,#0c1607)",padding:"44px 20px 20px"}}>
 <div style={S.sb}></div>
 <div style={{color:"white",fontSize:22,fontWeight:900,marginBottom:3}}>Descubre más 🌿</div>
 <div style={{color:"rgba(255,255,255,0.42)",fontSize:13}}>Vive el veganismo con todos los sentidos</div>
 </div>
 <div style={{padding:"16px 20px"}}>
 <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
 <div style={{background:"rgba(143,188,74,0.15)",border:"1px solid rgba(143,188,74,0.2)",borderRadius:16,overflow:"hidden"}}>
 <div onClick={()=>setTiendasOpen(!tiendasOpen)} style={{display:"flex",alignItems:"center",gap:13,padding:"14px",cursor:"pointer"}}>
 <div style={{width:48,height:48,borderRadius:13,background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🛍️</div>
 <div style={{flex:1}}>
 <div style={{fontSize:15,fontWeight:700,color:"white",marginBottom:2}}>Tiendas Online</div>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.5)"}}>{TIENDAS.length} tiendas veganas recomendadas</div>
 </div>
 <span style={{color:"rgba(255,255,255,0.4)",fontSize:18,transform:tiendasOpen?"rotate(180deg)":"none",transition:"transform 0.3s"}}>▾</span>
 </div>
 {tiendasOpen && (
 <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",padding:"8px 12px 12px"}}>
 {TIENDAS.map(t=>(
 <div key={t.id} onClick={()=>window.open(t.url,"_blank")} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:13,padding:"12px",marginBottom:8,cursor:"pointer"}}>
 <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
 <div style={{width:36,height:36,borderRadius:9,background:t.col+"40",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{t.e}</div>
 <div style={{flex:1}}>
 <div style={{fontSize:14,fontWeight:700,color:"white"}}>{t.nm}</div>
 <div style={{fontSize:10,color:"rgba(143,188,74,0.7)"}}>{t.url.replace("https://","")}</div>
 </div>
 <span style={{fontSize:12,color:"rgba(255,255,255,0.3)"}}>→</span>
 </div>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",lineHeight:1.5,marginBottom:7}}>{t.desc}</div>
 <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
 </div>
 </div>
 ))}
 </div>
 )}
 </div>
 <div style={{background:"rgba(74,158,191,0.15)",border:"1px solid rgba(74,158,191,0.25)",borderRadius:16,overflow:"hidden"}}>
 <div onClick={()=>setDocsOpen(!docsOpen)} style={{display:"flex",alignItems:"center",gap:13,padding:"14px",cursor:"pointer"}}>
 <div style={{width:48,height:48,borderRadius:13,background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🎬</div>
 <div style={{flex:1}}>
 <div style={{fontSize:15,fontWeight:700,color:"white",marginBottom:2}}>Canales y Documentales</div>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.5)"}}>6 canales · 11 documentales</div>
 </div>
 <span style={{color:"rgba(255,255,255,0.4)",fontSize:18,transform:docsOpen?"rotate(180deg)":"none",transition:"transform 0.3s"}}>▾</span>
 </div>
 {docsOpen && (
 <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",padding:"10px 12px 12px"}}>
 <div style={{fontSize:10,fontWeight:700,color:"rgba(74,158,191,0.9)",letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>📺 Canales de YouTube</div>
 {CANALES.map(canal=>(
 <div key={canal.id} onClick={()=>window.open(canal.url,"_blank")} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"10px 12px",marginBottom:7,cursor:"pointer",display:"flex",gap:10,alignItems:"flex-start"}}>
 <div style={{width:34,height:34,borderRadius:9,background:"rgba(255,80,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{canal.e}</div>
 <div style={{flex:1}}>
 <div style={{fontSize:13,fontWeight:700,color:"white",marginBottom:3}}>{canal.nm}</div>
 <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>{canal.desc}</div>
 </div>
 </div>
 ))}
 <div style={{fontSize:10,fontWeight:700,color:"rgba(74,158,191,0.9)",letterSpacing:1.5,textTransform:"uppercase",margin:"14px 0 8px"}}>🎥 Documentales</div>
 {DOCUMENTALES.map(d=>(
 <div key={d.id} onClick={()=>window.open(d.url,"_blank")} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"10px 12px",marginBottom:7,cursor:"pointer"}}>
 <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:4}}>
 <span style={{fontSize:16,flexShrink:0}}>{d.e}</span>
 <div style={{flex:1}}>
 <span style={{fontSize:13,fontWeight:700,color:"white"}}>{d.nm}</span>
 <span style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginLeft:6}}>{d.ano}</span>
 </div>
 <span style={{fontSize:10,fontWeight:600,color:d.plat.includes("gratis")?"rgba(143,188,74,0.9)":"rgba(229,9,20,0.9)",background:d.plat.includes("gratis")?"rgba(143,188,74,0.12)":"rgba(229,9,20,0.12)",padding:"2px 7px",borderRadius:8,flexShrink:0}}>{d.plat}</span>
 </div>
 <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>{d.desc}</div>
 </div>
 ))}
 </div>
 )}
 </div>
 <div style={{background:"rgba(232,184,75,0.15)",border:"1px solid rgba(232,184,75,0.25)",borderRadius:16,overflow:"hidden"}}>
 <div onClick={()=>setTurismoOpen(!turismoOpen)} style={{display:"flex",alignItems:"center",gap:13,padding:"14px",cursor:"pointer"}}>
 <div style={{width:48,height:48,borderRadius:13,background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🗺️</div>
 <div style={{flex:1}}>
 <div style={{fontSize:15,fontWeight:700,color:"white",marginBottom:2}}>Turismo Vegano</div>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.5)"}}>Hoteles,casas rurales y experiencias en España</div>
 </div>
 <span style={{color:"rgba(255,255,255,0.4)",fontSize:18,transform:turismoOpen?"rotate(180deg)":"none",transition:"transform 0.3s"}}>▾</span>
 </div>
 {turismoOpen && (
 <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",padding:"10px 12px 12px"}}>
 {TURISMO.map(cat=>(
 <div key={cat.id} style={{marginBottom:14}}>
 <div style={{fontSize:10,fontWeight:700,color:"rgba(232,184,75,0.85)",letterSpacing:1.3,textTransform:"uppercase",marginBottom:8,display:"flex",alignItems:"center",gap:6}}>
 <span>{cat.e}</span>{cat.cat}
 </div>
 {cat.items.map(h=>(
 <div key={h.nm} onClick={()=>h.url&&window.open(h.url,"_blank")} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"10px 12px",marginBottom:6,cursor:h.url?"pointer":"default"}}>
 <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:3}}>
 <div style={{fontSize:13,fontWeight:700,color:"white",flex:1}}>{h.nm}</div>
 {h.url&&<span style={{fontSize:10,color:"rgba(232,184,75,0.7)"}}>→</span>}
 </div>
 <div style={{fontSize:10,color:"rgba(232,184,75,0.6)",marginBottom:4}}>📍 {h.loc}</div>
 <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>{h.desc}</div>
 </div>
 ))}
 </div>
 ))}
 <div style={{fontSize:10,fontWeight:700,color:"rgba(232,184,75,0.85)",letterSpacing:1.3,textTransform:"uppercase",marginBottom:8}}>🔍 Busca más opciones</div>
 <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
 {TURISMO_WEBS.map(w=>(
 <div key={w.nm} onClick={()=>window.open(w.url,"_blank")} style={{background:"rgba(232,184,75,0.12)",border:"1px solid rgba(232,184,75,0.25)",borderRadius:20,padding:"5px 12px",cursor:"pointer"}}>
 <span style={{fontSize:11,color:"rgba(232,184,75,0.9)",fontWeight:600}}>{w.nm}</span>
 </div>
 ))}
 </div>
 </div>
 )}
 </div>
 <div style={{background:"linear-gradient(145deg,#111e07,#1e3410)",border:"1px solid rgba(143,188,74,0.14)",borderRadius:16,padding:"16px",marginBottom:14}}>
 <div style={{color:"#8FBC4A",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:8,textAlign:"center"}}>✦ Comparte tu legado ✦</div>
 <div style={{color:"white",fontSize:16,fontWeight:900,lineHeight:1.3,marginBottom:5,textAlign:"center"}}>Cada decisión tuya<br/><span style={{color:"#E8B84B",fontStyle:"italic"}}>planta una semilla en otros</span></div>
 <div style={{color:"rgba(255,255,255,0.45)",fontSize:12,textAlign:"center",marginBottom:12,fontStyle:"italic"}}>{APP_TAGLINE}</div>
 <button onClick={shareLegado} style={{...S.btn("#2D5016","white"),width:"100%",fontSize:14,padding:"13px",borderRadius:10,fontWeight:800}}>📤 Compartir</button>
 <div style={{textAlign:"center",marginTop:10}}>
 <div style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>🌱 Descarga la app: <span style={{color:"#8FBC4A"}}>{APP_URL}</span></div>
 </div>
 </div>
 {/* Notificaciones */}
 <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,padding:"14px",marginBottom:14}}>
 <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
 <span style={{fontSize:16}}>🔔</span>
 <div style={{fontSize:13,fontWeight:700,color:"white"}}>Notificaciones</div>
 </div>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.5)",lineHeight:1.6,marginBottom:10}}>Activa las notificaciones para saber cuándo hay nuevos productos veganos, novedades o cualquier información importante.</div>
 <button onClick={async ()=>{
  try {
   // Método 1: API nativa del navegador (más fiable)
   if(typeof Notification !== "undefined"){
    const permission = await Notification.requestPermission();
    if(permission === "granted"){
     // Si OneSignal está cargado, suscribir
     if(window.OneSignalDeferred){
      window.OneSignalDeferred.push(async function(OneSignal){
       try { await OneSignal.User.PushSubscription.optIn(); } catch(e) {}
      });
     }
     alert("✅ Notificaciones activadas. Te avisaremos cuando haya novedades.");
    } else if(permission === "denied"){
     alert("⚠️ Has bloqueado las notificaciones. Ve a los ajustes del navegador para activarlas.");
    }
   } else {
    alert("Tu navegador no soporta notificaciones.");
   }
  } catch(err){
   alert("No se pudieron activar las notificaciones. Asegúrate de tener la app instalada.");
  }
 }} style={{...S.btn("linear-gradient(135deg,#2D5016,#4A7C2F)","white"),width:"100%",fontSize:13,padding:"11px",borderRadius:10,fontWeight:700,display:"flex",alignItems:"center",gap:8,justifyContent:"center"}}>
 🔔 Activar notificaciones
 </button>
 </div>
 <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,padding:"14px",marginBottom:14}}>
 <div style={{fontSize:13,fontWeight:700,color:"white",marginBottom:6}}>✉️ Contacto</div>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.5)",lineHeight:1.6,marginBottom:8}}>¿Tienes sugerencias,quieres colaborar o simplemente quieres saludar?</div>
 <a href="mailto:heroesveganos@gmail.com" style={{display:"flex",alignItems:"center",gap:8,background:"rgba(143,188,74,0.1)",border:"1px solid rgba(143,188,74,0.25)",borderRadius:10,padding:"10px 13px",textDecoration:"none"}}>
 <span style={{fontSize:16}}>✉️</span>
 <span style={{fontSize:13,color:"#8FBC4A",fontWeight:600}}>heroesveganos@gmail.com</span>
 </a>
 </div>
 <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,overflow:"hidden",marginBottom:14}}>
 <div onClick={()=>setLegalOpen(legalOpen==="bloque"?null:"bloque")} style={{display:"flex",alignItems:"center",gap:9,padding:"13px 14px",cursor:"pointer",background:legalOpen==="bloque"?"rgba(232,184,75,0.06)":"transparent"}}>
 <span style={{fontSize:14}}>📋</span>
 <span style={{flex:1,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",letterSpacing:1.5,textTransform:"uppercase"}}>Información legal</span>
 <span style={{fontSize:13,color:"rgba(255,255,255,0.3)",transform:legalOpen==="bloque"?"rotate(90deg)":"none",transition:"transform 0.2s"}}>›</span>
 </div>
 {legalOpen==="bloque" && (
 <div style={{padding:"4px 10px 12px"}}>
 {LEGAL.map(l => (
 <div key={l.id} style={{marginBottom:5}}>
 <div onClick={()=>setLegalItemOpen(legalItemOpen===l.id?null:l.id)} style={{display:"flex",alignItems:"center",gap:9,padding:"9px 10px",background:legalItemOpen===l.id?"rgba(232,184,75,0.08)":"rgba(255,255,255,0.03)",borderRadius:9,cursor:"pointer",border:"1px solid "+(legalItemOpen===l.id?"rgba(232,184,75,0.25)":"rgba(255,255,255,0.04)")}}>
 <span style={{fontSize:15}}>{l.e}</span>
 <span style={{flex:1,fontSize:12,color:legalItemOpen===l.id?"#E8B84B":"rgba(255,255,255,0.6)",fontWeight:600}}>{l.t}</span>
 <span style={{fontSize:13,color:"rgba(255,255,255,0.3)",transform:legalItemOpen===l.id?"rotate(90deg)":"none",transition:"transform 0.2s"}}>›</span>
 </div>
 {legalItemOpen===l.id && (
 <div style={{padding:"10px 12px",fontSize:11,color:"rgba(255,255,255,0.6)",lineHeight:1.65,whiteSpace:"pre-line",background:"rgba(0,0,0,0.2)",borderRadius:9,marginTop:4,border:"1px solid rgba(232,184,75,0.1)"}}>
 {l.txt}
 </div>
 )}
 </div>
 ))}
 </div>
 )}
 </div>
 <div style={{height:8}}></div>
 </div>
 </div>
 </div>
 );
 const screens = { home:<HomeScreen/>, rec:<RecScreen/>, cmp:<CmpScreen/>, apoya:<ApoyaScreen/>, mas:<MasScreen/>, plato:<PlatoScreen/>, esm:<EsmScreen/> };
 // ── REGISTRO ────────────────────────────────────────────────────────────────
 if (!registered) return (
 <div style={{background:"#0a0f06",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 16px",fontFamily:"system-ui,-apple-system,sans-serif",overflowY:"auto"}}>
 <div style={{width:"100%",maxWidth:400,background:"linear-gradient(160deg,#111e07,#2D5016 60%,#3d6b1e)",borderRadius:28,padding:"32px 24px",boxShadow:"0 30px 60px rgba(0,0,0,0.8)"}}>
 {regStep === 0 ? (
 <>
  <div style={{textAlign:"center",marginBottom:20}}>
   <div style={{fontSize:52,marginBottom:8}}>🛡️</div>
   <div style={{color:"#E8B84B",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:6}}>Bienvenido a</div>
   <div style={{fontSize:26,fontWeight:900,color:"white",lineHeight:1.2,marginBottom:8}}>Héroes Veganos</div>
   <div style={{fontSize:14,fontWeight:700,color:"rgba(255,255,255,0.85)",lineHeight:1.5,marginBottom:10}}>La manera más fácil de ser un héroe hoy en día.</div>
   <div style={{fontSize:12,color:"rgba(255,255,255,0.55)",lineHeight:1.7,marginBottom:20}}>Esta app te facilita la vida, mejora tu salud y tu energía mientras cuidas del planeta. Platos exquisitos y fáciles, donde conseguir productos, dudas resueltas, tu impacto positivo en tiempo real y mucho más.</div>
  </div>
  {/* Frase encima del botón */}
  <div style={{textAlign:"center",fontSize:15,fontWeight:800,color:"white",marginBottom:12}}>¡Quiero ser un Héroe! 🛡️</div>
  {/* Botón único — comportamiento según dispositivo */}
  {!isInStandaloneMode() && (
   <button onClick={async ()=>{
    if(deferredPrompt && !isIos()){
     // Android con prompt → instala sola, NO pasa al registro aquí
     deferredPrompt.prompt();
     const r = await deferredPrompt.userChoice;
     setDeferredPrompt(null);
     if(r.outcome==="accepted"){
      setShowInstallSteps("installed");
     } else {
      setRegStep(1);
     }
    } else {
     // iPhone o Android sin prompt → muestra instrucciones
     setShowInstallSteps(true);
    }
   }} style={{...S.btn("linear-gradient(135deg,#E8B84B,#C8983B)","#1a1a1a"),width:"100%",fontSize:16,padding:"15px",borderRadius:12,marginBottom:8,fontWeight:800}}>
    📲 Instalar
   </button>
  )}
  {/* Instrucciones — solo aparecen al pulsar si no hay prompt */}
  {showInstallSteps==="installed" && (
   <div style={{background:"rgba(45,80,22,0.3)",border:"1px solid rgba(143,188,74,0.4)",borderRadius:12,padding:"14px",marginBottom:10,textAlign:"center"}}>
    <div style={{fontSize:28,marginBottom:6}}>🎉</div>
    <div style={{fontSize:14,fontWeight:700,color:"#8FBC4A",marginBottom:4}}>¡Instalada con éxito!</div>
    <div style={{fontSize:12,color:"rgba(255,255,255,0.7)",lineHeight:1.6}}>Abre la app desde el icono en tu pantalla de inicio para registrarte y empezar.</div>
   </div>
  )}
  {showInstallSteps===true && !isIos() && (
   <div style={{background:"rgba(232,184,75,0.1)",border:"1px solid rgba(232,184,75,0.3)",borderRadius:10,padding:"12px 14px",marginBottom:10,fontSize:12,color:"rgba(255,255,255,0.75)",lineHeight:1.8,textAlign:"left"}}>
    📲 <strong style={{color:"#E8B84B"}}>Instalar en Android:</strong><br/>
    1. Pulsa los <strong style={{color:"#E8B84B"}}>3 puntos ⋮</strong> arriba a la derecha en Chrome<br/>
    2. Toca <strong style={{color:"#E8B84B"}}>"Añadir a pantalla de inicio"</strong><br/>
    3. Confirma con <strong style={{color:"#E8B84B"}}>"Instalar"</strong>
   </div>
  )}
  {showInstallSteps===true && isIos() && (
   <div style={{background:"rgba(232,184,75,0.1)",border:"1px solid rgba(232,184,75,0.3)",borderRadius:10,padding:"12px 14px",marginBottom:10,fontSize:12,color:"rgba(255,255,255,0.75)",lineHeight:1.8,textAlign:"left"}}>
    📲 <strong style={{color:"#E8B84B"}}>Instalar en iPhone:</strong><br/>
    1. Pulsa <strong style={{color:"#E8B84B"}}>Compartir ⬆️</strong> en la barra de Safari<br/>
    2. Toca <strong style={{color:"#E8B84B"}}>"Añadir a pantalla de inicio"</strong><br/>
    3. Confirma con <strong style={{color:"#E8B84B"}}>"Añadir"</strong>
   </div>
  )}
  {/* Si ya instalada → solo continuar */}
  {isInStandaloneMode() && (
   <button onClick={()=>setRegStep(1)} style={{...S.btn("linear-gradient(135deg,#E8B84B,#C8983B)","#1a1a1a"),width:"100%",fontSize:16,padding:"15px",borderRadius:12,marginBottom:8,fontWeight:800}}>
    Continuar →
   </button>
  )}
  {/* Siempre visible abajo: seguir sin instalar */}
  <div onClick={()=>setRegStep(1)} style={{textAlign:"center",cursor:"pointer",marginTop:6}}>
   <span style={{color:"rgba(255,255,255,0.25)",fontSize:11,textDecoration:"underline"}}>Seguir en la web sin instalar →</span>
  </div>
 </>
 ) : regStep === 1 ? (
 <>
 <div style={{fontSize:36,marginBottom:12,textAlign:"center"}}>👋</div>
 <div style={{fontSize:22,fontWeight:800,color:"#2D5016",marginBottom:6,textAlign:"center"}}>¿Cómo te llamas?</div>
 <div style={{fontSize:13,color:"#888",marginBottom:20,textAlign:"center",lineHeight:1.5}}>Te llamaremos así dentro de la app</div>
 <input value={regName} onChange={e=>setRegName(e.target.value)} style={{width:"100%",border:"2px solid #e0e0e0",borderRadius:12,padding:"12px 16px",fontFamily:"system-ui",fontSize:16,outline:"none",boxSizing:"border-box",marginBottom:16}} placeholder="Tu nombre…"/>
 <button onClick={()=>{if(regName.trim())setRegStep(2);}} style={{...S.btn("linear-gradient(135deg,#2D5016,#4A7C2F)","white"),width:"100%",fontSize:15,padding:"14px",borderRadius:12,opacity:regName.trim()?1:0.4}}>
 Continuar →
 </button>
 </>
 ) : (
 <>
 <div style={{fontSize:36,marginBottom:12,textAlign:"center"}}>🌱</div>
 <div style={{fontSize:20,fontWeight:800,color:"#2D5016",marginBottom:4,textAlign:"center"}}>Hola, {regName}!</div>
 <div style={{fontSize:13,color:"#888",marginBottom:20,textAlign:"center",lineHeight:1.5}}>Para calcular tu impacto real necesitamos saber cuándo empezaste</div>
 <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:20}}>
 <div onClick={()=>setYaEsVegano(true)} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:13,border:`2px solid ${yaEsVegano===true?"#2D5016":"#e0e0e0"}`,background:yaEsVegano===true?"rgba(45,80,22,0.06)":"white",cursor:"pointer"}}>
 <span style={{fontSize:24}}>✅</span>
 <div>
 <div style={{fontSize:14,fontWeight:700,color:"#1a1a1a"}}>Ya soy vegano/a</div>
 <div style={{fontSize:12,color:"#aaa"}}>Pondré la fecha en que empecé</div>
 </div>
 </div>
 <div onClick={()=>setYaEsVegano(false)} style={{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:13,border:`2px solid ${yaEsVegano===false?"#2D5016":"#e0e0e0"}`,background:yaEsVegano===false?"rgba(45,80,22,0.06)":"white",cursor:"pointer"}}>
 <span style={{fontSize:24}}>🌱</span>
 <div>
 <div style={{fontSize:14,fontWeight:700,color:"#1a1a1a"}}>Estoy empezando hoy</div>
 <div style={{fontSize:12,color:"#aaa"}}>El contador empieza desde ahora</div>
 </div>
 </div>
 </div>
 {yaEsVegano===true && (
 <div style={{marginBottom:16}}>
 <div style={{fontSize:13,color:"white",marginBottom:6,fontWeight:600}}>¿Cuándo empezaste?</div>
 <input type="date" value={fechaVegano} onChange={e=>setFechaVegano(e.target.value)} max={new Date().toISOString().split("T")[0]} style={{width:"100%",border:"2px solid #e0e0e0",borderRadius:12,padding:"11px 14px",fontFamily:"system-ui",fontSize:15,outline:"none",boxSizing:"border-box"}}/>
 </div>
 )}
 <button
 onClick={()=>{
 if(yaEsVegano===null) return;
 if(yaEsVegano && !fechaVegano) return;
 _lss("hv_reg","1");
 _lss("hv_name",regName);
 _lss("hv_vegano",yaEsVegano?"1":"0");
 _lss("hv_fecha",fechaVegano);
 setRegistered(true);
 // Pedir permiso de notificaciones justo tras registrarse
 setTimeout(()=>{
  if(window.OneSignalDeferred){
   window.OneSignalDeferred.push(async function(OneSignal){
    try { await OneSignal.Notifications.requestPermission(); } catch(e) {}
   });
  }
 }, 1500);
 }}
 style={{...S.btn("linear-gradient(135deg,#2D5016,#4A7C2F)","white"),width:"100%",fontSize:15,padding:"14px",borderRadius:12,opacity:(yaEsVegano===null||(yaEsVegano&&!fechaVegano))?0.4:1}}
 >
 ¡Empezar mi aventura! 🛡️
 </button>
 </>
 )}
 </div>
 </div>
 );
 // ── MANTRA ──────────────────────────────────────────────────────────────────
 const toggleMantra = () => {
 const audio = document.getElementById("mantra-audio");
 if (!audio) return;
 if (mantraPlaying) { audio.pause(); setMantraPlaying(false); }
 else { audio.play().catch(()=>{}); setMantraPlaying(true); setMantraShown(true); }
 };
 // ── APP PRINCIPAL ───────────────────────────────────────────────────────────
 return (
 <div style={{background:"#111",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,fontFamily:"system-ui,-apple-system,sans-serif"}}>
 <div style={{color:"rgba(255,255,255,0.25)",fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>
 {({home:"Inicio",rec:"Recetas y nutrición",esm:"Empezar sin miedo",cmp:"Donde Comprar",apoya:"Apoya el Proyecto",mas:"Descubre Más",plato:platoSel?.nm||"Receta"})[screen]}
 </div>
 <div style={S.ph}>
 <div style={S.scroll}>{screens[screen]}</div>
 {screen!=="plato"&&<Nav/>}
 <audio id="mantra-audio" loop src="/mantra.mp3" preload="none"/>
 {mantraTooltip && (
 <div style={{position:"absolute",bottom:124,right:10,width:220,background:"linear-gradient(135deg,#1a0a2e,#2d1a4a)",border:"1px solid rgba(232,184,75,0.4)",borderRadius:14,padding:"13px 15px",zIndex:300,boxShadow:"0 8px 24px rgba(0,0,0,0.6)",pointerEvents:"none"}}>
 <div style={{fontSize:12,fontWeight:700,color:"rgba(232,184,75,0.9)",letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>♫ Mantra de protección y elevación</div>
 <div style={{fontSize:13,color:"rgba(255,255,255,0.85)",lineHeight:1.65}}>En bucle continuo eleva la energía del espacio donde estés.</div>
 <div style={{fontSize:12,color:"rgba(232,184,75,0.7)",marginTop:7,fontWeight:600}}>{mantraPlaying?"▶ Sonando en bucle…":"Toca para activar"}</div>
 </div>
 )}
 <div
 onClick={toggleMantra}
 onMouseEnter={()=>setMantraTooltip(true)}
 onMouseLeave={()=>setMantraTooltip(false)}
 onTouchStart={()=>setMantraTooltip(true)}
 onTouchEnd={()=>setTimeout(()=>setMantraTooltip(false),2000)}
 style={{position:"absolute",bottom:70,right:12,width:46,height:46,borderRadius:"50%",background:"linear-gradient(135deg,#F5D770,#E8B84B,#C8983B)",border:"2px solid rgba(255,235,150,0.9)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:24,lineHeight:1,zIndex:200,boxShadow:mantraPlaying?"0 0 0 4px rgba(232,184,75,0.45),0 0 0 9px rgba(232,184,75,0.18),0 4px 14px rgba(200,150,50,0.5)":"0 0 0 2px rgba(232,184,75,0.25),0 4px 12px rgba(0,0,0,0.4)",transition:"all 0.3s",userSelect:"none"}}
 ><span style={{color:"#1a1a1a",fontSize:24,fontWeight:800,lineHeight:1}}>♫</span></div>
 </div>
 </div>
 );
}