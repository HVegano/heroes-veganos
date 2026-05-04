import { useState } from "react";
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
const NOVEDADES = [];
// ── EMPEZAR SIN MIEDO ──
const DUDAS = [
 { id:"q1",e:"💪",q:"¿De dónde sacaré la proteína?",a:"De legumbres,tofu,tempeh,seitán,frutos secos y semillas. Lentejas: 9g/100g cocidas. Tofu: 17g. Garbanzos: 19g.\n\nLewis Hamilton (7 mundiales F1),Djokovic (2…" },
 { id:"q2",e:"💊",q:"¿Necesito tomar suplementos?",a:"Para más tranquilidad y comodidad,un suplemento de B12 es la opción más fácil — barato,una toma a la semana y listo.\n\nA medida que avances irás conociendo …" },
 { id:"q3",e:"⚡",q:"¿Tendré energía suficiente?",a:"Sí, y muchas personas reportan más energía que antes. Sin la carga digestiva de procesar carne,el cuerpo dedica esa energía a regenerarse.\n\nUn estudio de S…" },
 { id:"q4",e:"💶",q:"¿Es más caro?",a:"No,suele ser más barato. La base de la dieta vegana son los alimentos más económicos del supermercado:\n\n• 1kg de lentejas: 1,50€\n• 1kg de pollo: 8€\n• 500…" },
 { id:"q5",e:"🍽️",q:"¿Qué tengo que comer durante la semana?",a:"Tranquilidad: lo importante es lo que comes durante la semana,no la perfección de cada comida.\n\nQue a lo largo de la semana aparezcan: legumbres o tofu (ca…" },
 { id:"q6",e:"👨‍👩‍👧",q:"¿Mis hijos pueden ser veganos?",a:"Sí, totalmente. Y muchas familias lo hacen sin problema desde el embarazo.\n\nLa Asociación Americana de Dietética y la Academia Española de Nutrición confir…" },
 { id:"q7",e:"🍴",q:"¿Y cuando coma fuera de casa?",a:"Cada vez es más fácil. La mayoría de restaurantes tienen al menos una opción vegana o pueden adaptar un plato. Pizzerías,asiáticos,mexicanos,italianos,libane…" },
 { id:"q8",e:"🤔",q:"¿Es muy complicado?",a:"Al principio parece,pero en 2-3 semanas se vuelve automático. Tu cerebro aprende rápido las nuevas opciones y dejas de pensar.\n\nVe a tu ritmo. Solo tú sabe…" },
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
 { id:"d1",e:"🥣",nm:"Avena overnight",col:"#2A6A5A",desc:"Avena,leche vegetal,yogur vegano,chía y…",t:"5 min + reposo noche",kal:"290 kcal" },
 { id:"d2",e:"🍳",nm:"Revuelto de tofu",col:"#2A6A5A",desc:"Tofu desmenuzado con puerro,champiñon…",t:"15 min",kal:"200 kcal" },
 { id:"d3",e:"🥑",nm:"Tostada de aguacate",col:"#2A6A5A",desc:"Pan tostado con aguacate aplastado,ac…",t:"5 min",kal:"280 kcal",nut:"Prot 4g · Carbos 22g · Grasas 18g · Fibra 6g",compra:["Pan al gusto x1 rebanada", "Aguacate maduro x½", "Aceite de oliva al gusto", "Sal al gusto", "Tomate en rodajas (opcional)", "Brotes frescos (opcional)", "Mix de semillas: chía,lino,cáñamo,calabaza o sésamo"], receta:["Tostar la rebanada de pan.", "Aplastar el aguacate con un tenedor hasta textura cremosa.", "Extender sobre el pan tostado.", "Añadir aceite de oliva y sal al gusto.", "Opcional: tomate en rodajas y brotes frescos.", "Terminar con semillas al gusto."] },
 { id:"d4",e:"🥞",nm:"Tortitas veganas",col:"#2A6A5A",desc:"Tortitas esponjosas sin huevo ni láct…",t:"20 min",kal:"280 kcal",nut:"Prot 5g · Carbos 42g · Grasas 8g · Fibra 2g",compra:["Harina 2 tazas", "Levadura de repostería 1 sobre", "Sal ½ cdta.", "Leche vegetal 2 tazas", "Aceite de girasol 4 cdas.", "Extracto de vainilla 1 cdta.", "Canela en polvo ½ cdta.", "Pepitas de chocolate (opcional)", "Plátano en rodajas (opcional)", "Sirope de arce (opcional)"], receta:["Mezclar ingredientes secos: harina,levadura,sal y canela.", "Mezclar líquidos: leche vegetal,aceite y vainilla.", "Unir ambas mezclas con movimientos suaves — está bien que queden grumos.", "Dejar reposar 5 minutos.", "Calentar sartén a fuego medio con un poco de aceite.", "Verter porciones de masa. Cuando salgan burbujas dar la vuelta.", "Servir con sirope de arce,plátano o pepitas de chocolate."] },
 ],
 ens:[
 { id:"e1",e:"🌶️",nm:"Hummus de jalapeño",col:"#3A6B2A",desc:"Crema de anacardos y alubias blancas …",t:"10 min + remojo",kal:"180 kcal" },
 { id:"e2",e:"🫘",nm:"Hummus de alubias blancas",col:"#3A6B2A",desc:"Alubias blancas con ajo sofrito,romer…",t:"15 min",kal:"190 kcal" },
 { id:"e3",e:"🧀",nm:"Salsa para nachos",col:"#3A6B2A",desc:"Salsa tipo queso con patata,anacardos…",t:"30 min",kal:"190 kcal" },
 { id:"e4",e:"🥗",nm:"Aliño de mostaza dulce",col:"#3A6B2A",desc:"Aceite de oliva,limón,sirope de arce,ta…",t:"5 min",kal:"160 kcal" },
 { id:"e5",e:"🌻",nm:"Aliño de limón y girasol",col:"#3A6B2A",desc:"Semillas de girasol,limón,miso y ajo …",t:"5 min",kal:"140 kcal" },
 { id:"e6",e:"🥬",nm:"Aliño César vegano",col:"#3A6B2A",desc:"Anacardos,aceite,limón,mostaza y ajo en…",t:"5 min",kal:"180 kcal" },
 { id:"e7",e:"🤠",nm:"Aliño ranchero",col:"#3A6B2A",desc:"Mayonesa vegana,leche de soja,hierbas…",t:"5 min",kal:"160 kcal" },
 { id:"e8",e:"🥦",nm:"Ensalada de brócoli cremosa",col:"#3A6B2A",desc:"Repollo,brócoli y kale con salsa crem…",t:"15 min",kal:"220 kcal" },
 { id:"e9",e:"🥔",nm:"Ensalada campera",col:"#3A6B2A",desc:"Patatas,pasta,tofu salteado,pimientos, …",t:"35 min",kal:"420 kcal" },
 ],
 sal:[
 { id:"s1",e:"🥓",nm:"Salsa para beicon vegano",col:"#8A5A18",desc:"Salsa ahumada de soja y pimentón para…",t:"25 min",kal:"90 kcal" },
 { id:"s2",e:"🍗",nm:"Salsa marrón tipo gravy",col:"#8A5A18",desc:"Salsa oscura de caldo vegetal,levadur…",t:"10 min",kal:"80 kcal" },
 { id:"s3",e:"🫙",nm:"Crema agria vegana",col:"#8A5A18",desc:"Anacardos con yogur vegano,limón y vi…",t:"5 min",kal:"130 kcal" },
 { id:"s4",e:"🌿",nm:"Pesto de albahaca vegano",col:"#8A5A18",desc:"Albahaca,nueces,almendras,semillas y le…",t:"8 min",kal:"210 kcal" },
 { id:"s5",e:"🧀",nm:"Parmesano vegano",col:"#8A5A18",desc:"Nueces,levadura de cerveza,ajo en pol…",t:"3 min",kal:"110 kcal" },
 { id:"s6",e:"🥒",nm:"Tzatziki vegano",col:"#8A5A18",desc:"Mayonesa vegana con pepino rallado,en…",t:"10 min",kal:"120 kcal" },
 ],
 sop:[
 { id:"so1",e:"🍛",nm:"Dhal de lentejas rojas",col:"#1A4A78",desc:"Lentejas rojas con leche de coco,gara…",t:"35 min",kal:"340 kcal" },
 { id:"so2",e:"🌮",nm:"Enchiladas veganas",col:"#1A4A78",desc:"Tortillas rellenas de alubias negras …",t:"50 min",kal:"380 kcal" },
 { id:"so3",e:"🥘",nm:"Estofado con puré de patata",col:"#1A4A78",desc:"Seitán,zanahoria,boniato,guisantes y ca…",t:"50 min",kal:"350 kcal" },
 { id:"so4",e:"🫘",nm:"Potaje de garbanzos",col:"#1A4A78",desc:"Garbanzos con puerro,repollo,espinaca…",t:"45 min",kal:"320 kcal" },
 { id:"so5",e:"🥣",nm:"Crema de puerros Vichyssoise",col:"#1A4A78",desc:"Crema suave de puerros y patata con n…",t:"35 min",kal:"210 kcal" },
 ],
 pro:[
 { id:"pr1",e:"🥬",nm:"Judías verdes de restaurante",col:"#5A3A8A",desc:"Judías verdes con ajo tostado,tahini,…",t:"20 min",kal:"130 kcal" },
 { id:"pr2",e:"🧆",nm:"Tofu coreano",col:"#5A3A8A",desc:"Tofu crujiente con salsa de soja,srir…",t:"25 min",kal:"260 kcal" },
 { id:"pr3",e:"💪",nm:"Seitán casero",col:"#5A3A8A",desc:"Gluten de trigo con caldo,soja y acei…",t:"1h 20 min",kal:"180 kcal" },
 { id:"pr4",e:"🍗",nm:"Nuggets de seitán",col:"#5A3A8A",desc:"Nuggets de gluten de trigo con tahini…",t:"45 min",kal:"260 kcal" },
 { id:"pr5",e:"🌿",nm:"Espinacas con garbanzos sevillana",col:"#5A3A8A",desc:"Garbanzos y espinacas con salsa de aj…",t:"25 min",kal:"310 kcal" },
 { id:"pr6",e:"🥙",nm:"Torta de hummus y verduras asadas",col:"#5A3A8A",desc:"Masa con hummus,verduras asadas y que…",t:"30 min",kal:"320 kcal" },
 { id:"pr7",e:"🫙",nm:"Frijoles refritos mexicanos",col:"#5A3A8A",desc:"Judías pintas cocidas con ajo y cebol…",t:"3h + cocción",kal:"220 kcal" },
 ],
 pas:[
 { id:"pa1",e:"🧀",nm:"Mac & Cheese vegano",col:"#7A4A10",desc:"Macarrones con salsa cremosa de anaca…",t:"30 min",kal:"420 kcal" },
 { id:"pa2",e:"🍝",nm:"Tallarines tipo Alfredo",col:"#7A4A10",desc:"Salsa cremosa de anacardos y ajo con …",t:"25 min",kal:"280 kcal" },
 { id:"pa3",e:"🍝",nm:"Pasta Boloñesa Vegana",col:"#7A4A10",desc:"Boloñesa 100% vegetal con soja textur…",t:"30 min",kal:"480 kcal",compra:["Soja fina texturizada 80g", "Salsa de tomate triturado 400g", "Pasta al gusto 1 paquete", "Aceite de oliva 3 cdas.", "Azúcar 1 cda.", "Sal 1 cdta.", "Orégano seco 1 cdta.", "Ajo en polvo ½ cdta.", "Cebolla en polvo ½ cdta.", "Comino ½ cdta.", "Pimentón ½ cdta.", "Pimienta negra al gusto"], receta:["Hidratar la soja en agua caliente o caldo vegetal. Escurrir bien.", "Cocer la pasta según instrucciones. Escurrir y reservar.", "Saltear la soja con aceite,ajo,cebolla,comino,pimentón y pimienta 5-7 min hasta dorar.", "Freír el tomate con azúcar,sal y orégano 8-10 min hasta reducir.", "Mezclar soja con la salsa. Servir sobre la pasta con más orégano."] },
 { id:"pa4",e:"🥬",nm:"Pasta con Tofu y Espinacas",col:"#7A4A10",desc:"Pasta cremosa con tofu dorado,espinac…",t:"30 min",kal:"520 kcal",compra:["Tofu firme 200g", "Espinacas 150g", "Ajo x3 dientes", "Leche de soja 250ml", "Maizena 1½ cdas.", "Pasta al gusto 1 paquete", "Aceite de oliva 2 cdas.", "Sal 1 cdta.", "Pimienta negra al gusto", "Queso vegano rallado ½ taza (opcional)"], receta:["Cocer la pasta. Escurrir y reservar.", "Dorar el tofu en dados con aceite hasta dorado. Salpimentar.", "Cocer espinacas 3-4 min. Escurrir.", "Disolver maizena en leche fría. Calentar resto de leche,añadir mezcla,sal y pimienta. Remover hasta bechamel.", "Saltear espinacas con ajo 2-3 min. Añadir tofu y pasta. Verter bechamel y mezclar.", "Añadir queso vegano,mezclar y servir."] },
 ],
 piz:[
 { id:"pi1",e:"🥙",nm:"Kebabs 2.0",col:"#6A2A10",desc:"Proteína especiada con mezcla árabe,e…",t:"30 min",kal:"380 kcal" },
 { id:"pi2",e:"🍕",nm:"Focaccia y masa para pizza",col:"#6A2A10",desc:"Masa esponjosa con aceite de oliva,aj…",t:"1h 30 min",kal:"280 kcal" },
 { id:"pi3",e:"🌯",nm:"Rollitos frescos de verano",col:"#6A2A10",desc:"Papel de arroz con zanahoria,lechuga,…",t:"20 min",kal:"260 kcal" },
 { id:"pi4",e:"🥢",nm:"Rollitos vietnamitas fritos",col:"#6A2A10",desc:"Rollitos crujientes de setas,tofu,rep…",t:"50 min",kal:"290 kcal" },
 { id:"pi5",e:"🥟",nm:"Baozis — bollos chinos al vapor",col:"#6A2A10",desc:"Bollos esponjosos al vapor rellenos d…",t:"1h 45 min",kal:"180 kcal" },
 { id:"pi6",e:"🍔",nm:"Hamburguesas de alubias negras",col:"#6A2A10",desc:"Alubias negras con ajo,comino,srirach…",t:"35 min",kal:"280 kcal" },
 { id:"pi7",e:"🍄",nm:"Hamburguesas de champiñones",col:"#6A2A10",desc:"Champiñones,pipas de girasol,harina y…",t:"30 min",kal:"220 kcal" },
 { id:"pi8",e:"🫓",nm:"Pan naan / pita casero",col:"#6A2A10",desc:"Pan plano esponjoso con harina integr…",t:"1h 30 min",kal:"220 kcal" },
 { id:"pi9",e:"🌮",nm:"Tofu y nueces estilo taco",col:"#6A2A10",desc:"Tofu y nueces horneados con comino,pi…",t:"40 min",kal:"380 kcal" },
 ],
 pos:[
 { id:"po1",e:"🍫",nm:"Natillas de tofu y chocolate",col:"#7A3A6A",desc:"Tofu con crema de cacahuete,sirope y …",t:"20 min + reposo",kal:"280 kcal" },
 { id:"po2",e:"🍏",nm:"Compota de manzana",col:"#7A3A6A",desc:"Manzanas cocidas con canela,vainilla …",t:"30 min",kal:"80 kcal" },
 { id:"po3",e:"🍌",nm:"Pan de plátano",col:"#7A3A6A",desc:"Plátanos maduros,aceite de girasol,ha…",t:"45 min",kal:"280 kcal" },
 { id:"po4",e:"🍰",nm:"Bizcocho de chocolate ligero",col:"#7A3A6A",desc:"Bizcocho esponjoso sin huevos ni láct…",t:"45 min",kal:"230 kcal" },
 { id:"po5",e:"🧁",nm:"Magdalenas clásicas veganas",col:"#7A3A6A",desc:"Esponjosas,sin huevos — con ralladura…",t:"30 min",kal:"180 kcal" },
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
 const [onboarded,setOnboarded]  = useState(false);
 // Load from localStorage on startup - fixes "forgot who I am" bug
 const _ls = k => { try { return localStorage.getItem(k); } catch(e) { return null; } };
 const _lss = (k,v) => { try { localStorage.setItem(k,v); } catch(e) {} };
 const [registered,setRegistered]  = useState(() => _ls("hv_reg") === "1");
 const [regStep,setRegStep]  = useState(0);
 const [deferredPrompt,setDeferredPrompt]  = useState(null);
 const [showInstallIos,setShowInstallIos]  = useState(false);
 const [regName,setRegName]  = useState(() => _ls("hv_name") || "");
 const [yaEsVegano,setYaEsVegano]  = useState(() => { const v=_ls("hv_vegano"); return v===null?null:v==="1"; });
 const [fechaVegano,setFechaVegano] = useState(() => _ls("hv_fecha") || "");
 const [screen,setScreen]  = useState("home");
 const [catIdx,setCatIdx]  = useState(0);
 const [platoSel,setPlatoSel]  = useState(null);
 const [recSearch,setRecSearch]  = useState("");
 const [superSel,setSuperSel]  = useState(null);
 const [revIdx,setRevIdx]  = useState(() => { const v=parseInt(_ls("hv_revidx")||"0"); return isNaN(v)?0:v; });
 const [vistosNov,setVistosNov]  = useState([]);
 const [impMode,setImpMode]  = useState("sld");
 const [causa,setCausa]  = useState(0);
 const [tipo,setTipo]  = useState("u");
 const [donAmt,setDonAmt]  = useState("");
 const [apoyaOk,setApoyaOk]  = useState(false);
 const [dudaOpen,setDudaOpen]  = useState(null);
 const [compraSemOpen,setCompraSemOpen] = useState(false);
 const [carIdx,setCarIdx]  = useState(() => { const v=parseInt(_ls("hv_caridx")||"0"); return isNaN(v)?0:v; });
 const [mantraPlaying,setMantraPlaying] = useState(false);
 const [mantraShown,setMantraShown]  = useState(false);
 const [mantraTooltip,setMantraTooltip] = useState(false);
 // PWA Install prompt listener
 if (typeof window !== "undefined" && !deferredPrompt) {
  window.addEventListener("beforeinstallprompt", (e) => {
   e.preventDefault();
   setDeferredPrompt(e);
  }, { once: true });
 }

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
 anos:  (4.2 * cuerpoP).toFixed(1),energia: Math.round(40 * Math.min(1,diasVegano / 90)),cardio:  Math.round(32 * cuerpoP),diabetes:Math.round(23 * cuerpoP),
 };
 const nombre  = regName || "Miguel";
 const nivel  = diasVegano >= 365 ? "Héroe Leyenda" : diasVegano >= 180 ? "Héroe Luz" : diasVegano >= 90 ? "Héroe Guardián" : diasVegano >= 30 ? "Héroe Semilla" : "Héroe Nuevo";
 const nivelPct = Math.min(100, (diasVegano % 90) / 90 * 100);
 const novPendientes = NOVEDADES.filter(n => !vistosNov.includes(n.id));
 const hayNovedad  = novPendientes.length > 0;
 const go = s => setScreen(s);
 const shareLegado = () => {
 const txt = `🛡️ Llevo ${diasVegano} días siendo vegano/a y esto es lo que he logrado:\n\n🐾 ${impacto.vidas} vidas salvadas\n💧 ${impacto.agua} L de agua preservada\n🌿 ${impacto.co2} kg de CO₂ evitado\n❤️ +${cuerpo.anos} años de esperanza de vida\n⚡ +${cuerpo.energia}% más energía\n🛡️ -${cuerpo.cardio}% riesgo cardiovascular\n\n¿Tú también quieres ser un Héroe? Es más fácil de lo que crees 👇\n👉 ${APP_URL}`;
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
 const shareRev = (r) => {
 const txt = `${r.e} ${r.f.join("")}\n\n${r.q}\n\n🌱 ¿Te unes? Únete a los Héroes Veganos — la app gratuita que te lo pone fácil:\n👉 ${APP_URL}`;
 if (navigator.share) navigator.share({ text: txt });
 else navigator.clipboard.writeText(txt);
 };
 return (
 <div style={{background:"#F5F0E8",minHeight:"100%"}}>
 <div style={{background:"linear-gradient(160deg,#111e07,#2D5016 60%,#3d6b1e)",padding:"44px 20px 20px"}}>
 <div style={S.sb}><span>9:41</span><span>●●●</span></div>
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
 <div>
 <div style={{color:"rgba(255,255,255,0.5)",fontSize:12,marginBottom:2}}>Bienvenido,</div>
 <div style={{color:"white",fontSize:22,fontWeight:700}}>{nombre}</div>
 <div style={{display:"inline-flex",alignItems:"center",gap:5,background:"rgba(232,184,75,0.15)",border:"1px solid rgba(232,184,75,0.3)",borderRadius:8,padding:"4px 9px",marginTop:5}}>
 <span style={{fontSize:14}}>🛡️</span>
 <span style={{fontSize:11,fontWeight:700,color:"#E8B84B"}}>{nivel} · Día {diasVegano}</span>
 </div>
 </div>
 <div style={{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"}}>
 {[["🐾",impacto.vidas+" vidas"],["💧",impacto.agua+" L"],["🌿",impacto.co2+" kg CO₂"]].map(([e,t])=>(
 <div key={t} style={{display:"flex",alignItems:"center",gap:5,background:"rgba(255,255,255,0.07)",borderRadius:8,padding:"3px 8px"}}>
 <span style={{fontSize:11}}>{e}</span>
 <span style={{fontSize:10,color:"rgba(255,255,255,0.7)",fontWeight:600}}>{t}</span>
 </div>
 ))}
 </div>
 </div>
 <div style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:13,padding:"11px 14px"}}>
 <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
 <span style={{color:"rgba(255,255,255,0.5)",fontSize:11}}>Tu legado crece</span>
 <span style={{color:"#E8B84B",fontSize:16,fontWeight:700}}>{diasVegano} <span style={{fontSize:10,fontWeight:400,color:"rgba(255,255,255,0.35)"}}>días</span></span>
 </div>
 <div style={{color:"rgba(255,255,255,0.35)",fontSize:10,marginBottom:7}}>
 {nivel === "Héroe Leyenda" ? "¡Eres una leyenda viva! 🌟" : `${Math.round(nivelPct)}% hacia el siguiente nivel`}
 </div>
 <div style={{background:"rgba(0,0,0,0.3)",borderRadius:6,height:6}}>
 <div style={{width:nivelPct+"%",height:"100%",background:"linear-gradient(90deg,#5a9e20,#8FBC4A,#E8B84B)",borderRadius:6,transition:"width 1s"}}></div>
 </div>
 </div>
 </div>
 <div style={{padding:"12px 16px"}}>
 <div style={{background: card.tipo==="cuerpo"?"linear-gradient(135deg,#2a0a3a,#4a1a6a)":card.tipo==="novedad"?"linear-gradient(135deg,#0a1a10,#1a3a20)":"linear-gradient(135deg,#0e1f08,#1a3510)",border: card.tipo==="cuerpo"?"1px solid rgba(224,90,138,0.3)":card.tipo==="novedad"?"1px solid rgba(0,136,58,0.4)":"1px solid rgba(143,188,74,0.2)",borderRadius:16,padding:"14px",marginBottom:10,position:"relative",overflow:"hidden",minHeight:120}}>
 {card.tipo==="novedad"&&<div style={{position:"absolute",top:8,right:10,fontSize:16}}>⭐</div>}
 {card.tipo==="cuerpo"&&(
 <>
 <div style={{color:"rgba(224,90,138,0.9)",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>❤️ Tu cuerpo — lo que ya estás logrando</div>
 <div style={{display:"flex",flexDirection:"column",gap:6}}>
 {[["💗","#E05A8A","+"+cuerpo.anos,"años","más de esperanza de vida"],["⚡","#F0A030","+"+cuerpo.energia+"%","energía","nivel reportado"],["🛡️","#7B52AB","−"+cuerpo.cardio+"%","riesgo","enf. cardiovasculares"],["🧬","#4A9EBF","−"+cuerpo.diabetes+"%","riesgo","diabetes tipo 2"]].map(([e,c,n,u,d])=>(
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
 <div style={{color:card.data.col,fontSize:10,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:5}}>
 {card.data.tipo==="producto"?`⭐ Nuevo en ${card.data.super}`:card.data.tipo==="restaurante"?"🍽️ Restaurante vegano cerca":"📢 Anuncio"}
 </div>
 <div style={{color:"white",fontSize:14,fontWeight:700,marginBottom:3}}>{card.data.titulo}</div>
 <div style={{color:"rgba(255,255,255,0.55)",fontSize:12,marginBottom:10}}>{card.data.desc}</div>
 <button onClick={()=>{ setVistosNov(p=>[...p,card.data.id]); setCarIdx(c=>{ const n=Math.max(0,c-1); _lss("hv_caridx",String(n)); return n; }); }} style={{...S.btn("rgba(255,255,255,0.1)","rgba(255,255,255,0.6)",8,"6px 12px"),fontSize:11}}>Visto ✓</button>
 </>
 )}
 {card.tipo==="revelacion"&&(
 <>
 <div style={{color:"#8FBC4A",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>💡 Revelación</div>
 <div style={{fontSize:20,marginBottom:4,textAlign:"center"}}>{card.data.e}</div>
 <div style={{color:"white",fontSize:12,fontWeight:700,lineHeight:1.4,marginBottom:3,textAlign:"center"}}>
 {card.data.f.map((t,i)=>i%2===0?<span key={i}>{t}</span>:<span key={i} style={{color:"#E8B84B"}}>{t}</span>)}
 </div>
 <div style={{color:"rgba(255,255,255,0.5)",fontSize:11,lineHeight:1.4,fontStyle:"italic",textAlign:"center",marginBottom:6}}>{card.data.q}</div>
 {card.data.id==="r100" ? (
  <button onClick={()=>go("mas")} style={{...S.btn("linear-gradient(135deg,#E8B84B,#C8983B)","#1a1a1a",10,"10px 12px"),width:"100%",fontSize:13,fontWeight:700,display:"flex",alignItems:"center",gap:8,justifyContent:"center",marginTop:4}}>
   ▶ Ir a Documentales y Canales
  </button>
 ) : (
  <button onClick={()=>shareRev(card.data)} style={{...S.btn("rgba(143,188,74,0.15)","#8FBC4A",8,"6px 12px"),width:"100%",fontSize:11,display:"flex",alignItems:"center",gap:6,justifyContent:"center",border:"1px solid rgba(143,188,74,0.2)"}}>
   🌱 Compartir
  </button>
 )}
 </>
 )}
 <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:10}}>
 <button onClick={()=>setCarIdx(c=>{ const n=Math.max(0,c-1); _lss("hv_caridx",String(n)); return n; })} style={{...S.btn("rgba(255,255,255,0.07)","rgba(255,255,255,0.5)",8,"4px 10px"),fontSize:14,opacity:carIdx===0?0.3:1}}>‹</button>
 <div style={{display:"flex",gap:3,flexWrap:"wrap",justifyContent:"center",maxWidth:160}}>
 {carousel.map((_,i)=>(
 <div key={i} onClick={()=>{ _lss("hv_caridx",String(i)); setCarIdx(i); }} style={{width:i===carIdx?12:4,height:4,borderRadius:2,background:i===carIdx?"#8FBC4A":"rgba(255,255,255,0.2)",cursor:"pointer",transition:"all 0.3s"}}></div>
 ))}
 </div>
 <button onClick={()=>setCarIdx(c=>{ const n=c+1>=carousel.length?1:c+1; _lss("hv_caridx",String(n)); const nc=carousel[n]; if(nc&&nc.tipo==="novedad"&&!vistosNov.includes(nc.data.id)){setVistosNov(v=>[...v,nc.data.id]);lanzarConfetti();} return n; })} style={{...S.btn("rgba(255,255,255,0.07)","rgba(255,255,255,0.5)",8,"4px 10px"),fontSize:14,opacity:1}}>›</button>
 </div>
 </div>
 <div style={{fontSize:14,fontWeight:700,color:"#2D5016",marginBottom:9}}>¿Qué quieres hacer hoy?</div>
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
 {[
 {e:"🍃",t:"Recetas",s:"49 recetas veganas",dk:false,ac:()=>go("rec")},
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
 <div style={S.sb}><span>9:41</span><span>●●●</span></div>
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
 <div style={S.sb}><span>9:41</span><span>●●●</span></div>
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
 <div style={{fontSize:11,color:col,lineHeight:1.4,fontWeight:600,fontStyle:"italic",paddingTop:5,borderTop:"1px dashed rgba(0,0,0,0.08)"}}>{ej}</div>
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
 <div style={S.sb}><span>9:41</span><span>●●●</span></div>
 <div onClick={()=>go("rec")} style={S.bk()}>← La carta</div>
 <div style={{fontSize:42,marginBottom:8}}>{p.e}</div>
 <div style={{color:"white",fontSize:20,fontWeight:700,lineHeight:1.2,marginBottom:4}}>{p.nm}</div>
 <div style={{color:"rgba(255,255,255,0.55)",fontSize:13,marginBottom:10}}>{p.desc}</div>
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
 <div style={S.sb}><span>9:41</span><span>●●●</span></div>
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
 <div style={S.sb}><span>9:41</span><span>●●●</span></div>
 <div style={{fontSize:34,marginBottom:8}}>✨</div>
 <div style={{color:"white",fontSize:22,fontWeight:900,marginBottom:4}}>Apoya el proyecto</div>
 <div style={{color:"rgba(255,255,255,0.45)",fontSize:13,lineHeight:1.6}}>Tú decides a dónde va tu contribución. 100% transparente.</div>
 </div>
 <div style={{padding:"16px 20px"}}>
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:16}}>
 {[["🐾","Animales"],["🌱","Este proyecto"],["🤲","Humanitario"]].map(([e,n,d],i)=>(
 <div key={n} onClick={()=>setCausa(i)} style={{background:causa===i?"rgba(143,188,74,0.12)":"rgba(255,255,255,0.04)",border:`1px solid ${causa===i?"#8FBC4A":"rgba(255,255,255,0.08)"}`,borderRadius:13,padding:"12px 8px",cursor:"pointer",textAlign:"center"}}>
 <span style={{fontSize:24,display:"block",marginBottom:5}}>{e}</span>
 <div style={{fontSize:12,fontWeight:700,color:"white"}}>{n}</div>
 <div style={{fontSize:10,color:causa===i?"rgba(143,188,74,0.7)":"rgba(255,255,255,0.3)",marginTop:3,lineHeight:1.3}}>{d}</div>
 </div>
 ))}
 </div>
 <div style={{display:"flex",background:"rgba(0,0,0,0.3)",borderRadius:11,padding:3,gap:3,marginBottom:14}}>
 {[["u","Una vez"],["m","Cada mes"]].map(([t,l])=>(
 <button key={t} onClick={()=>setTipo(t)} style={{flex:1,padding:8,borderRadius:8,border:"none",cursor:"pointer",fontFamily:"system-ui",fontSize:13,fontWeight:600,background:tipo===t?"white":"transparent",color:tipo===t?"#2D5016":"rgba(255,255,255,0.4)"}}>{l}</button>
 ))}
 </div>
 <div style={{marginBottom:14}}>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.5)",marginBottom:7}}>¿Cuánto quieres aportar?</div>
 <div style={{display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:12,padding:"8px 14px"}}>
 <span style={{color:"rgba(255,255,255,0.5)",fontSize:18}}>€</span>
 <input value={donAmt} onChange={e=>setDonAmt(e.target.value.replace(/[^0-9.]/g,""))} style={{flex:1,border:"none",outline:"none",background:"transparent",color:"white",fontSize:22,fontWeight:700,fontFamily:"system-ui"}} placeholder="0" type="number" min="1"/>
 {tipo==="m"&&<span style={{color:"rgba(255,255,255,0.3)",fontSize:12}}>/mes</span>}
 </div>
 </div>
 {apoyaOk ? (
 <div style={{textAlign:"center",padding:"14px",background:"rgba(143,188,74,0.1)",border:"1px solid rgba(143,188,74,0.3)",borderRadius:13}}>
 <div style={{fontSize:28,marginBottom:6}}>🌱</div>
 <div style={{color:"#8FBC4A",fontSize:15,fontWeight:700}}>¡Gracias por tu apoyo!</div>
 <div style={{color:"rgba(255,255,255,0.5)",fontSize:12,marginTop:4}}>Tu contribución hace el mundo más verde.</div>
 </div>
 ) : (
 <button onClick={()=>setApoyaOk(true)} style={{...S.btn("linear-gradient(135deg,#2D5016,#4A7C2F)","white"),width:"100%",fontSize:15,padding:"14px"}}>
 Contribuir {donAmt?"con "+donAmt+"€":""}{tipo==="m"?" al mes":""} 🌱
 </button>
 )}
 <div style={{fontSize:12,color:"rgba(255,255,255,0.4)",textAlign:"center",marginTop:10,lineHeight:1.6}}>
 Sabrás exactamente donde va cada euro.<br/>Se anunciarán las cantidades y el destino.
 </div>
 <div style={{background:"linear-gradient(145deg,#111e07,#1e3410)",border:"1px solid rgba(143,188,74,0.14)",borderRadius:16,padding:"16px",marginTop:18}}>
 <div style={{color:"#8FBC4A",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:8,textAlign:"center"}}>✦ Comparte tu legado ✦</div>
 <div style={{color:"white",fontSize:16,fontWeight:900,lineHeight:1.3,marginBottom:5,textAlign:"center"}}>Cada decisión tuya<br/><span style={{color:"#E8B84B",fontStyle:"italic"}}>planta una semilla en otros</span></div>
 <div style={{color:"rgba(255,255,255,0.45)",fontSize:12,textAlign:"center",marginBottom:12,fontStyle:"italic"}}>{APP_TAGLINE}</div>
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
 {[["📸","linear-gradient(135deg,#C13584,#7B2FBE)","Instagram"],["💬","#128C7E","WhatsApp"],["👍","#1877F2","Facebook"],["✕","#1a1a1a","Twitter"]].map(([e,bg,t])=>(
 <button key={t} onClick={shareLegado} style={{...S.btn(bg,"white",10,"9px 10px"),display:"flex",alignItems:"center",gap:6,justifyContent:"center",fontSize:12,border:t==="Twitter"?"1px solid #333":"none"}}>{e} {t}</button>
 ))}
 </div>
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
 <div style={S.sb}><span>9:41</span><span>●●●</span></div>
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
 <div style={{fontSize:15,fontWeight:700,color:"white",marginBottom:2}}>Documentales y Canales</div>
 <div style={{fontSize:12,color:"rgba(255,255,255,0.5)"}}>11 docs · 6 canales de YouTube</div>
 </div>
 <span style={{color:"rgba(255,255,255,0.4)",fontSize:18,transform:docsOpen?"rotate(180deg)":"none",transition:"transform 0.3s"}}>▾</span>
 </div>
 {docsOpen && (
 <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",padding:"10px 12px 12px"}}>
 <div style={{fontSize:10,fontWeight:700,color:"rgba(74,158,191,0.9)",letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>🎥 Documentales</div>
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
 <div style={{fontSize:10,fontWeight:700,color:"rgba(74,158,191,0.9)",letterSpacing:1.5,textTransform:"uppercase",margin:"14px 0 8px"}}>📺 Canales de YouTube</div>
 {CANALES.map(canal=>(
 <div key={canal.id} onClick={()=>window.open(canal.url,"_blank")} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"10px 12px",marginBottom:7,cursor:"pointer",display:"flex",gap:10,alignItems:"flex-start"}}>
 <div style={{width:34,height:34,borderRadius:9,background:"rgba(255,80,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{canal.e}</div>
 <div style={{flex:1}}>
 <div style={{fontSize:13,fontWeight:700,color:"white",marginBottom:3}}>{canal.nm}</div>
 <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>{canal.desc}</div>
 </div>
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
 <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
 {[["📸","linear-gradient(135deg,#C13584,#7B2FBE)"],["💬","#128C7E"],["👍","#1877F2"],["✕","#1a1a1a"]].map(([e,bg,t])=>(
 <button key={t} onClick={shareLegado} style={{...S.btn(bg,"white",10,"9px 10px"),display:"flex",alignItems:"center",gap:6,justifyContent:"center",fontSize:12,border:t==="Twitter"?"1px solid #333":"none"}}>{e} {t}</button>
 ))}
 </div>
 <div style={{textAlign:"center",marginTop:10}}>
 <div style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>🌱 Descarga la app: <span style={{color:"#8FBC4A"}}>{APP_URL}</span></div>
 </div>
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
 // ── ONBOARDING ──────────────────────────────────────────────────────────────
 if (!onboarded) return (
 <div style={{background:"#111",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,fontFamily:"system-ui,-apple-system,sans-serif"}}>
 <div style={{width:360,background:"linear-gradient(160deg,#111e07,#2D5016 60%,#3d6b1e)",borderRadius:28,padding:"40px 28px",boxShadow:"0 30px 60px rgba(0,0,0,0.8)",textAlign:"center"}}>
 <div style={{fontSize:56,marginBottom:16}}>🛡️</div>
 <div style={{color:"#E8B84B",fontSize:12,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>Bienvenido a</div>
 <div style={{color:"white",fontSize:32,fontWeight:900,marginBottom:4}}>Héroes Veganos</div>
 <div style={{color:"rgba(255,255,255,0.75)",fontSize:17,fontWeight:700,lineHeight:1.5,marginBottom:12}}>
 La manera más fácil de ser un héroe.
 </div>
 <div style={{color:"rgba(255,255,255,0.55)",fontSize:13,lineHeight:1.75,marginBottom:30}}>
 Esta app te facilita y mejora la vida a la vez que cuidas del planeta. Encontrarás recetas veganas,dónde comprar productos veganos,revelaciones que inspiran,turismo vegano,tu impacto positivo en tiempo real y mucho más.
 </div>
 <button onClick={()=>setOnboarded(true)} style={{...S.btn("linear-gradient(135deg,#E8B84B,#C8983B)","#1a1a1a"),width:"100%",fontSize:16,padding:"15px",borderRadius:14,fontWeight:800}}>
 Quiero ser un Héroe 🌱
 </button>
 <div style={{color:"rgba(255,255,255,0.25)",fontSize:11,marginTop:12}}>{APP_URL}</div>
 </div>
 </div>
 );
 // ── REGISTRO ────────────────────────────────────────────────────────────────
 if (!registered) return (
 <div style={{background:"#111",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,fontFamily:"system-ui,-apple-system,sans-serif"}}>
 <div style={{width:360,background:"#FDFCFA",borderRadius:28,padding:"36px 28px",boxShadow:"0 30px 60px rgba(0,0,0,0.8)"}}>
 {regStep === 0 ? (
 <>
  <div style={{textAlign:"center",marginBottom:16}}>
   <div style={{fontSize:52,marginBottom:8}}>🛡️</div>
   <div style={{fontSize:22,fontWeight:900,color:"#2D5016",lineHeight:1.2,marginBottom:10}}>Héroes Veganos</div>
   <div style={{fontSize:13,color:"#555",lineHeight:1.65,marginBottom:18}}>
    La manera más fácil de ser un héroe hoy en día.<br/><br/>
    Todo lo que haces a los demás, te lo haces a ti. Esta app te da las herramientas para que dar el paso sea sencillo, claro y posible para cualquiera.<br/><br/>
    <strong style={{color:"#2D5016"}}>Recetas. Productos. Dudas resueltas. Tu impacto en tiempo real.</strong><br/><br/>
    Gratis. Sin registro complicado. En tu móvil siempre contigo.
   </div>
  </div>
  {/* Botón instalar Android */}
  {deferredPrompt && (
   <button onClick={async ()=>{ deferredPrompt.prompt(); const r=await deferredPrompt.userChoice; if(r.outcome==="accepted"){setDeferredPrompt(null);} }} style={{...S.btn("linear-gradient(135deg,#E8B84B,#C8983B)","#1a1a1a"),width:"100%",fontSize:14,padding:"13px",borderRadius:12,marginBottom:10,fontWeight:700}}>
    📲 Instalar app en tu móvil
   </button>
  )}
  {/* Tutorial iOS */}
  {isIos() && !isInStandaloneMode() && (
   <div style={{background:"rgba(45,80,22,0.06)",border:"1px solid rgba(45,80,22,0.2)",borderRadius:12,padding:"12px 14px",marginBottom:12,fontSize:12,color:"#2D5016",lineHeight:1.6}}>
    📲 <strong>Para instalarla en tu iPhone:</strong><br/>
    1. Pulsa el botón <strong>Compartir ⬆️</strong> de Safari<br/>
    2. Toca <strong>"Añadir a pantalla de inicio"</strong><br/>
    3. Confirma con <strong>"Añadir"</strong>
   </div>
  )}
  <button onClick={()=>setRegStep(1)} style={{...S.btn("linear-gradient(135deg,#2D5016,#4A7C2F)","white"),width:"100%",fontSize:15,padding:"14px",borderRadius:12}}>
   ¡Quiero ser un Héroe! 🛡️
  </button>
  <div style={{textAlign:"center",marginTop:10,fontSize:11,color:"#ccc"}}>La app es 100% gratuita y no requiere registro de email</div>
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
 <div style={{fontSize:13,color:"#555",marginBottom:6,fontWeight:600}}>¿Cuándo empezaste?</div>
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
 <div style={{position:"absolute",bottom:120,right:10,width:190,background:"linear-gradient(135deg,#1a0a2e,#2d1a4a)",border:"1px solid rgba(232,184,75,0.4)",borderRadius:14,padding:"11px 13px",zIndex:300,boxShadow:"0 8px 24px rgba(0,0,0,0.6)",pointerEvents:"none"}}>
 <div style={{fontSize:10,fontWeight:700,color:"rgba(232,184,75,0.85)",letterSpacing:1.5,textTransform:"uppercase",marginBottom:5}}>♫ Mantra de protección y elevación</div>
 <div style={{fontSize:11,color:"rgba(255,255,255,0.75)",lineHeight:1.6}}>En bucle continuo eleva la energía del espacio donde estés.</div>
 <div style={{fontSize:10,color:"rgba(232,184,75,0.6)",marginTop:6}}>{mantraPlaying?"▶ Sonando en bucle…":"Toca para activar"}</div>
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
