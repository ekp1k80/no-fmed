// Datos de los quizzes de Anatomía - Tegumento Común
// FMED 1ro - Basado en Di Rísio

const quizzes = {
  "anato-tegumento": {
    "titulo": "Tegumento Común",
    "descripcion": "Piel, anexos, glándulas, vascularización",
    "totalPreguntas": 152,
    "partes": [
      {
        "id": 1,
        "nombre": "Tegumento + Piel",
        "preguntas": 16,
        "data": [
          {
            "question": "¿Cuáles son las dos capas que componen el tegumento común?",
            "options": [
              {
                "text": "Piel y tejido subcutáneo",
                "isCorrect": true,
                "rationale": "El tegumento común está dispuesto en dos capas: la piel (más superficial) y el tejido subcutáneo o hipodermis (más profunda)."
              },
              {
                "text": "Epidermis y dermis",
                "isCorrect": false,
                "rationale": "Estas son las dos capas de la PIEL, no del tegumento común completo."
              },
              {
                "text": "Dermis y tejido subcutáneo",
                "isCorrect": false,
                "rationale": "Falta la epidermis que es parte de la piel."
              },
              {
                "text": "Piel y fascia",
                "isCorrect": false,
                "rationale": "La fascia de revestimiento es el límite profundo del tejido subcutáneo, no una capa del tegumento."
              }
            ],
            "hint": "Una es visible externamente, la otra está debajo...",
            "image": "imagen:diagrama-capas-tegumento"
          },
          {
            "question": "¿Qué estructuras forman parte del sistema tegumentario además de la piel?",
            "options": [
              {
                "text": "Glándulas sudoríparas, sebáceas, pelos, músculo erector del pelo, uñas y tejido subcutáneo",
                "isCorrect": true,
                "rationale": "El sistema tegumentario incluye la piel con sus anexos (glándulas, pelos, músculo erector, uñas) más el tejido subcutáneo."
              },
              {
                "text": "Solo la epidermis y dermis",
                "isCorrect": false,
                "rationale": "Eso es solo la piel, falta todo el sistema de anexos."
              },
              {
                "text": "Músculos, huesos y tendones",
                "isCorrect": false,
                "rationale": "Estos son parte del sistema musculoesquelético, no tegumentario."
              },
              {
                "text": "Vasos sanguíneos y nervios únicamente",
                "isCorrect": false,
                "rationale": "Aunque están presentes, no son las estructuras definitorias del sistema."
              }
            ],
            "hint": "Pensá en todo lo que 'sale' de la piel o está asociado a ella...",
            "image": "imagen:anexos-piel-glándulas-pelos-uñas"
          },
          {
            "question": "¿Cuál es la superficie aproximada de la piel en un adulto?",
            "options": [
              {
                "text": "Aproximadamente 1,80 m²",
                "isCorrect": true,
                "rationale": "La piel es el mayor órgano del cuerpo con ~1,80 m² de superficie."
              },
              {
                "text": "Aproximadamente 0,50 m²",
                "isCorrect": false,
                "rationale": "Muy pequeño, sería menos que una hoja de papel A1."
              },
              {
                "text": "Aproximadamente 5,00 m²",
                "isCorrect": false,
                "rationale": "Demasiado grande, excede el área corporal real."
              },
              {
                "text": "Aproximadamente 0,10 m²",
                "isCorrect": false,
                "rationale": "Extremadamente pequeño, sería solo una mano."
              }
            ],
            "hint": "Es suficiente para cubrir una cama individual..."
          },
          {
            "question": "¿Qué porcentaje del peso corporal representa la piel?",
            "options": [
              {
                "text": "Aproximadamente 16%",
                "isCorrect": true,
                "rationale": "La piel representa aproximadamente el 16% del peso corporal total."
              },
              {
                "text": "Aproximadamente 5%",
                "isCorrect": false,
                "rationale": "Subestima el peso de este gran órgano."
              },
              {
                "text": "Aproximadamente 35%",
                "isCorrect": false,
                "rationale": "Sobreestima demasiado, sería más de un tercio del cuerpo."
              },
              {
                "text": "Aproximadamente 50%",
                "isCorrect": false,
                "rationale": "Imposible, sería la mitad del peso corporal."
              }
            ],
            "hint": "Es el órgano más pesado del cuerpo..."
          },
          {
            "question": "¿Cuál de estas NO es una función de la piel?",
            "options": [
              {
                "text": "Producción de insulina",
                "isCorrect": true,
                "rationale": "La insulina se produce en el páncreas, no en la piel."
              },
              {
                "text": "Protección contra agresiones físicas y químicas",
                "isCorrect": false,
                "rationale": "Esta SÍ es función de la piel."
              },
              {
                "text": "Regulación de la temperatura corporal",
                "isCorrect": false,
                "rationale": "Esta SÍ es función de la piel a través del sudor y vasodilatación."
              },
              {
                "text": "Síntesis de vitamina D",
                "isCorrect": false,
                "rationale": "Esta SÍ es función de la piel mediante exposición solar."
              }
            ],
            "hint": "La piel hace muchas cosas, pero no produce hormonas pancreáticas..."
          },
          {
            "question": "¿Cuál es la función de la piel relacionada con la contención corporal?",
            "options": [
              {
                "text": "Envolver el cuerpo brindando contención para líquidos extracelulares y órganos profundos",
                "isCorrect": true,
                "rationale": "La piel actúa como envoltura que mantiene en su lugar líquidos y órganos internos."
              },
              {
                "text": "Producir anticuerpos",
                "isCorrect": false,
                "rationale": "Esa es función del sistema inmune, no de contención."
              },
              {
                "text": "Filtrar sangre",
                "isCorrect": false,
                "rationale": "Esa es función renal."
              },
              {
                "text": "Digestión de nutrientes",
                "isCorrect": false,
                "rationale": "Esa es función del sistema digestivo."
              }
            ],
            "hint": "Pensá en la piel como un 'saco' que contiene todo..."
          },
          {
            "question": "¿Qué sentidos puede percibir la piel según sus funciones?",
            "options": [
              {
                "text": "Tacto, temperatura y dolor",
                "isCorrect": true,
                "rationale": "La piel es órgano de los sentidos para tacto, temperatura y dolor a través de sus receptores."
              },
              {
                "text": "Olfato y gusto",
                "isCorrect": false,
                "rationale": "Estos sentidos corresponden a nariz y lengua."
              },
              {
                "text": "Vista y audición",
                "isCorrect": false,
                "rationale": "Estos sentidos corresponden a ojos y oídos."
              },
              {
                "text": "Propiocepción y equilibrio",
                "isCorrect": false,
                "rationale": "Estos sentidos dependen de músculos, tendones y oído interno."
              }
            ],
            "hint": "Sensaciones que podés sentir al tocar algo..."
          },
          {
            "question": "¿Cuál es la capa epitelial más superficial de la piel?",
            "options": [
              {
                "text": "Epidermis",
                "isCorrect": true,
                "rationale": "La epidermis es la capa epitelial más superficial de la piel."
              },
              {
                "text": "Dermis",
                "isCorrect": false,
                "rationale": "La dermis está debajo de la epidermis, es más profunda."
              },
              {
                "text": "Tejido subcutáneo",
                "isCorrect": false,
                "rationale": "Es la capa más profunda, debajo de la dermis."
              },
              {
                "text": "Fascia",
                "isCorrect": false,
                "rationale": "La fascia está debajo del tejido subcutáneo."
              }
            ],
            "hint": "Es la que vemos y tocamos directamente...",
            "image": "imagen:capas-piel-epidermis-dermis"
          },
          {
            "question": "¿Qué tipo de tejido forma la dermis?",
            "options": [
              {
                "text": "Tejido conectivo",
                "isCorrect": true,
                "rationale": "La dermis está formada por tejido conectivo, específicamente conectivo denso."
              },
              {
                "text": "Tejido epitelial",
                "isCorrect": false,
                "rationale": "El tejido epitelial forma la epidermis, no la dermis."
              },
              {
                "text": "Tejido muscular",
                "isCorrect": false,
                "rationale": "Aunque tiene algunas células musculares lisas, no es el tejido principal."
              },
              {
                "text": "Tejido nervioso",
                "isCorrect": false,
                "rationale": "Contiene nervios pero no está formada por tejido nervioso."
              }
            ],
            "hint": "Es la misma familia de tejidos que une y sostiene estructuras..."
          },
          {
            "question": "¿Qué son las crestas en la superficie de la piel?",
            "options": [
              {
                "text": "Elevaciones de la superficie cutánea",
                "isCorrect": true,
                "rationale": "Las crestas son elevaciones de la superficie de la piel."
              },
              {
                "text": "Depresiones entre las líneas",
                "isCorrect": false,
                "rationale": "Eso describen los surcos, no las crestas."
              },
              {
                "text": "Glándulas sudoríparas",
                "isCorrect": false,
                "rationale": "Las glándulas son estructuras profundas, no superficiales."
              },
              {
                "text": "Terminaciones nerviosas",
                "isCorrect": false,
                "rationale": "Las terminaciones nerviosas son microscópicas y no forman crestas visibles."
              }
            ],
            "hint": "Son lo 'alto' de la topografía de la piel..."
          },
          {
            "question": "¿Qué separan los surcos en la piel?",
            "options": [
              {
                "text": "Las crestas",
                "isCorrect": true,
                "rationale": "Los surcos son las depresiones que separan las crestas de la piel."
              },
              {
                "text": "Las células",
                "isCorrect": false,
                "rationale": "Las células son microscópicas, los surcos son estructuras macroscópicas."
              },
              {
                "text": "Los vasos sanguíneos",
                "isCorrect": false,
                "rationale": "Los vasos están en la dermis, no forman surcos superficiales."
              },
              {
                "text": "Los folículos pilosos",
                "isCorrect": false,
                "rationale": "Los folículos son estructuras individuales, no forman surcos continuos."
              }
            ],
            "hint": "Son las 'líneas' que ves entre las elevaciones..."
          },
          {
            "question": "¿Dónde están muy desarrolladas las papilas de la dermis?",
            "options": [
              {
                "text": "En palma y planta",
                "isCorrect": true,
                "rationale": "Las papilas dérmicas están muy desarrolladas en palma de manos y planta de pies por la mayor exigencia mecánica."
              },
              {
                "text": "En el cuero cabelludo",
                "isCorrect": false,
                "rationale": "Aunque hay muchos folículos, las papilas no están especialmente desarrolladas allí."
              },
              {
                "text": "En los párpados",
                "isCorrect": false,
                "rationale": "Los párpados tienen piel muy fina con papilas poco desarrolladas."
              },
              {
                "text": "En la espalda",
                "isCorrect": false,
                "rationale": "La espalda no tiene la misma exigencia mecánica que palmas y plantas."
              }
            ],
            "hint": "Piensa en las zonas que más usás para agarrar o apoyar...",
            "image": "imagen:papilas-dermis-palma-planta"
          },
          {
            "question": "¿Qué característica tienen las huellas digitales?",
            "options": [
              {
                "text": "Configuración única en cada individuo",
                "isCorrect": true,
                "rationale": "Las huellas digitales tienen configuración única del ordenamiento de surcos en el pulpejo de los dedos."
              },
              {
                "text": "Son idénticas en gemelos idénticos",
                "isCorrect": false,
                "rationale": "Aunque similares, no son idénticas; tienen variaciones únicas."
              },
              {
                "text": "Cambian cada año",
                "isCorrect": false,
                "rationale": "Las huellas se forman en el feto y permanecen invariables toda la vida."
              },
              {
                "text": "Son iguales en todos los dedos de una persona",
                "isCorrect": false,
                "rationale": "Cada dedo tiene huella diferente incluso en la misma persona."
              }
            ],
            "hint": "Por eso se usan para identificación forense..."
          },
          {
            "question": "¿Dónde se encuentran los pliegues de flexión?",
            "options": [
              {
                "text": "En superficies de las articulaciones",
                "isCorrect": true,
                "rationale": "Los pliegues de flexión se encuentran en superficies de las articulaciones."
              },
              {
                "text": "En la cara",
                "isCorrect": false,
                "rationale": "En la cara hay líneas de expresión, no pliegues de flexión."
              },
              {
                "text": "En el cuero cabelludo",
                "isCorrect": false,
                "rationale": "El cuero cabelludo no tiene articulaciones ni pliegues de flexión."
              },
              {
                "text": "En las uñas",
                "isCorrect": false,
                "rationale": "Las uñas tienen lúnula y placa, no pliegues de flexión."
              }
            ],
            "hint": "Aparecen donde la piel se dobla al moverse...",
            "image": "imagen:pliegues-flexion-articulaciones"
          },
          {
            "question": "¿Qué causan las arrugas o líneas de expresión?",
            "options": [
              {
                "text": "Contracción de músculos subyacentes",
                "isCorrect": true,
                "rationale": "Las arrugas de expresión son características del envejecimiento producidas por contracción de músculos subyacentes."
              },
              {
                "text": "Acumulación de grasa",
                "isCorrect": false,
                "rationale": "La grasa produce volumen, no arrugas de expresión."
              },
              {
                "text": "Infecciones bacterianas",
                "isCorrect": false,
                "rationale": "Las infecciones causan inflamación, no arrugas características."
              },
              {
                "text": "Exposición exclusiva al frío",
                "isCorrect": false,
                "rationale": "El frío causa piel de gallina temporal, no arrugas permanentes."
              }
            ],
            "hint": "Aparecen donde más te expresás con el rostro..."
          },
          {
            "question": "¿Dónde se interrumpe la piel para continuar con mucosas?",
            "options": [
              {
                "text": "En los orificios naturales",
                "isCorrect": true,
                "rationale": "Los orificios naturales son donde la piel se interrumpe y continúa con las mucosas."
              },
              {
                "text": "En las yemas de los dedos",
                "isCorrect": false,
                "rationale": "Las yemas tienen piel gruesa, no mucosa."
              },
              {
                "text": "En el cuero cabelludo",
                "isCorrect": false,
                "rationale": "El cuero cabelludo es piel continua, no hay mucosa allí."
              },
              {
                "text": "En las uñas",
                "isCorrect": false,
                "rationale": "Las uñas son anexos de la piel, no orificios naturales."
              }
            ],
            "hint": "Boca, nariz, oídos, ano, uretra..."
          }
        ]
      },
      {
        "id": 2,
        "nombre": "Epidermis",
        "preguntas": 24,
        "data": [
          {
            "question": "¿Qué tipo de epitelio es la epidermis?",
            "options": [
              {
                "text": "Epitelio estratificado escamoso queratinizado",
                "isCorrect": true,
                "rationale": "La epidermis es un epitelio estratificado (en capas), escamoso (células planas) y queratinizado (con queratina)."
              },
              {
                "text": "Epitelio simple cúbico",
                "isCorrect": false,
                "rationale": "El epitelio simple cúbico es de una sola capa de células cúbicas, como en los túbulos renales."
              },
              {
                "text": "Epitelio columnar pseudoestratificado",
                "isCorrect": false,
                "rationale": "Este tipo se encuentra en las vías respiratorias, no en la piel."
              },
              {
                "text": "Epitelio de transición",
                "isCorrect": false,
                "rationale": "El epitelio de transición se encuentra en vejiga y uréteres, adaptándose a distensión."
              }
            ],
            "hint": "Pensá en las características: tiene capas, células planas, y produce una proteína dura...",
            "image": "imagen:tipos-epitelios-epidermis"
          },
          {
            "question": "¿La epidermis tiene vasos sanguíneos?",
            "options": [
              {
                "text": "No, carece de vasos sanguíneos y linfáticos",
                "isCorrect": true,
                "rationale": "La epidermis no tiene vasos sanguíneos ni linfáticos; recibe nutrientes por difusión desde la dermis."
              },
              {
                "text": "Sí, tiene una densa red capilar",
                "isCorrect": false,
                "rationale": "Los vasos están en la dermis, no en la epidermis."
              },
              {
                "text": "Solo tiene vasos linfáticos",
                "isCorrect": false,
                "rationale": "No tiene ni vasos sanguíneos ni linfáticos."
              },
              {
                "text": "Tiene vasos sanguíneos solo en las capas profundas",
                "isCorrect": false,
                "rationale": "Ninguna capa de la epidermis tiene vasos; todos están en la dermis."
              }
            ],
            "hint": "Por eso una raspadura superficial no sangra..."
          },
          {
            "question": "¿Cuál es la capa más profunda de la epidermis?",
            "options": [
              {
                "text": "Estrato basal",
                "isCorrect": true,
                "rationale": "El estrato basal es la capa más profunda de la epidermis, también llamado estrato germinativo."
              },
              {
                "text": "Estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo es la capa más superficial, no la más profunda."
              },
              {
                "text": "Estrato lúcido",
                "isCorrect": false,
                "rationale": "El estrato lúcido está entre el granuloso y el córneo, no es el más profundo."
              },
              {
                "text": "Estrato espinoso",
                "isCorrect": false,
                "rationale": "El estrato espinoso está por encima del basal, no es el más profundo."
              }
            ],
            "hint": "Es donde se generan las nuevas células...",
            "image": "imagen:capas-epidermis-orden"
          },
          {
            "question": "¿Cuánto tarda la epidermis en regenerarse completamente?",
            "options": [
              {
                "text": "Aproximadamente 30 días",
                "isCorrect": true,
                "rationale": "Las células del estrato basal regeneran la epidermis en aproximadamente 30 días."
              },
              {
                "text": "1 día",
                "isCorrect": false,
                "rationale": "Sería una regeneración extremadamente rápida, imposible para un tejido tan complejo."
              },
              {
                "text": "6 meses",
                "isCorrect": false,
                "rationale": "Es demasiado tiempo; la piel se renueva mucho más frecuentemente."
              },
              {
                "text": "2 años",
                "isCorrect": false,
                "rationale": "El tiempo de renovación es mucho menor, alrededor de un mes."
              }
            ],
            "hint": "Aproximadamente un mes..."
          },
          {
            "question": "¿Dónde se ubican las células dendríticas de Langerhans?",
            "options": [
              {
                "text": "En el estrato espinoso",
                "isCorrect": true,
                "rationale": "Las células dendríticas de Langerhans se ubican en el estrato espinoso de la epidermis."
              },
              {
                "text": "En el estrato basal",
                "isCorrect": false,
                "rationale": "En el estrato basal se encuentran los queratinocitos en división y melanocitos."
              },
              {
                "text": "En el estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo tiene células muertas queratinizadas, sin células vivas."
              },
              {
                "text": "En la dermis",
                "isCorrect": false,
                "rationale": "Las células de Langerhans son exclusivas de la epidermis, específicamente del estrato espinoso."
              }
            ],
            "hint": "Es una capa intermedia, entre el basal y el córneo...",
            "image": "imagen:celulas-langerhans-ubicacion"
          },
          {
            "question": "¿En qué tipo de piel se encuentra el estrato lúcido?",
            "options": [
              {
                "text": "Solo en piel gruesa",
                "isCorrect": true,
                "rationale": "El estrato lúcido solo está presente en la piel gruesa (palmas y plantas)."
              },
              {
                "text": "En toda la piel del cuerpo",
                "isCorrect": false,
                "rationale": "La piel delgada (mayor parte del cuerpo) carece de estrato lúcido."
              },
              {
                "text": "Solo en piel delgada",
                "isCorrect": false,
                "rationale": "Es al revés: la piel delgada NO tiene estrato lúcido."
              },
              {
                "text": "En la dermis",
                "isCorrect": false,
                "rationale": "El estrato lúcido es una capa de la epidermis, no de la dermis."
              }
            ],
            "hint": "Está entre el granuloso y el córneo, pero solo en ciertas zonas..."
          },
          {
            "question": "¿Cuál es la capa más superficial de la epidermis?",
            "options": [
              {
                "text": "Estrato córneo",
                "isCorrect": true,
                "rationale": "El estrato córneo es la capa más superficial, formada por células muertas queratinizadas."
              },
              {
                "text": "Estrato basal",
                "isCorrect": false,
                "rationale": "El estrato basal es la capa más profunda, no la más superficial."
              },
              {
                "text": "Estrato lúcido",
                "isCorrect": false,
                "rationale": "El estrato lúcido está debajo del córneo (cuando existe)."
              },
              {
                "text": "Estrato granuloso",
                "isCorrect": false,
                "rationale": "El estrato granuloso está por debajo del lúcido y córneo."
              }
            ],
            "hint": "Es la que se desprende constantemente en forma de escamas...",
            "image": "imagen:estrato-corneo-superficial"
          },
          {
            "question": "¿Qué sucede con las células del estrato córneo?",
            "options": [
              {
                "text": "Se eliminan por descamación",
                "isCorrect": true,
                "rationale": "Las células maduras queratinizadas del estrato córneo se eliminan constantemente por descamación."
              },
              {
                "text": "Se dividen constantemente",
                "isCorrect": false,
                "rationale": "Las células del córneo están muertas y no se dividen; la división ocurre en el estrato basal."
              },
              {
                "text": "Producen melanina",
                "isCorrect": false,
                "rationale": "La melanina se produce en los melanocitos del estrato basal, no en el córneo."
              },
              {
                "text": "Son receptores del tacto",
                "isCorrect": false,
                "rationale": "Los receptores táctiles están en capas más profundas (células de Merkel)."
              }
            ],
            "hint": "Es un proceso continuo de renovación superficial..."
          },
          {
            "question": "¿Qué células forman la epidermis?",
            "options": [
              {
                "text": "Queratinocitos",
                "isCorrect": true,
                "rationale": "Los queratinocitos son las células que forman la epidermis, produciendo queratina."
              },
              {
                "text": "Neuronas",
                "isCorrect": false,
                "rationale": "Las neuronas son células del sistema nervioso, no forman la epidermis."
              },
              {
                "text": "Adipocitos",
                "isCorrect": false,
                "rationale": "Los adipocitos son células grasas del tejido subcutáneo, no de la epidermis."
              },
              {
                "text": "Fibroblastos",
                "isCorrect": false,
                "rationale": "Los fibroblastos están en la dermis, produciendo colágeno, no en la epidermis."
              }
            ],
            "hint": "Su nombre indica que producen una proteína específica..."
          },
          {
            "question": "¿Qué es la queratina?",
            "options": [
              {
                "text": "Proteína que protege del calor, materiales extraños y repele agua",
                "isCorrect": true,
                "rationale": "La queratina protege las capas profundas del calor, entrada de materiales extraños y repele agua."
              },
              {
                "text": "Pigmento oscuro que protege de radiación UV",
                "isCorrect": false,
                "rationale": "Eso es la melanina, no la queratina."
              },
              {
                "text": "Hormona que regula la temperatura",
                "isCorrect": false,
                "rationale": "La queratina es una proteína estructural, no una hormona."
              },
              {
                "text": "Líquido que humecta la piel",
                "isCorrect": false,
                "rationale": "Eso sería el sebo o el sudor, no la queratina."
              }
            ],
            "hint": "Es una proteína fibrosa que da resistencia y protección..."
          },
          {
            "question": "¿De qué origen son los melanocitos?",
            "options": [
              {
                "text": "Neuroectodermo",
                "isCorrect": true,
                "rationale": "Los melanocitos son células pigmentadas de origen neuroectodérmico."
              },
              {
                "text": "Endodermo",
                "isCorrect": false,
                "rationale": "El endodermo forma el tubo digestivo y órganos asociados, no los melanocitos."
              },
              {
                "text": "Mesodermo",
                "isCorrect": false,
                "rationale": "El mesodermo forma músculos, huesos y dermis, pero no melanocitos."
              },
              {
                "text": "Ectodermo superficial únicamente",
                "isCorrect": false,
                "rationale": "Específicamente vienen del neuroectodermo, no del ectodermo general."
              }
            ],
            "hint": "Tienen origen neural, relacionado con el sistema nervioso...",
            "image": "imagen:origen-melanocitos-neuroectodermo"
          },
          {
            "question": "¿Dónde se ubican los melanocitos?",
            "options": [
              {
                "text": "En capas profundas de la epidermis",
                "isCorrect": true,
                "rationale": "Los melanocitos están ubicados en capas profundas de la epidermis, cerca del estrato basal."
              },
              {
                "text": "En el estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo tiene células muertas sin melanocitos."
              },
              {
                "text": "En la dermis",
                "isCorrect": false,
                "rationale": "Los melanocitos son exclusivos de la epidermis, no de la dermis."
              },
              {
                "text": "En el tejido subcutáneo",
                "isCorrect": false,
                "rationale": "El tejido subcutáneo está por debajo de la dermis, sin melanocitos."
              }
            ],
            "hint": "Están cerca de donde se generan las nuevas células..."
          },
          {
            "question": "¿Qué protege la melanina en la piel?",
            "options": [
              {
                "text": "Protege al estrato basal de radiaciones ultravioletas nocivas",
                "isCorrect": true,
                "rationale": "La melanina protege específicamente las células del estrato basal del daño UV."
              },
              {
                "text": "Protege contra golpes físicos",
                "isCorrect": false,
                "rationale": "Esa protección mecánica la da el espesor de la piel y la dermis."
              },
              {
                "text": "Evita la pérdida de agua",
                "isCorrect": false,
                "rationale": "Esa función la cumple el estrato córneo y los lípidos."
              },
              {
                "text": "Regula la temperatura corporal",
                "isCorrect": false,
                "rationale": "Esa es función de los vasos sanguíneos y glándulas sudoríparas."
              }
            ],
            "hint": "Es el pigmento que nos broncea y protege del sol..."
          },
          {
            "question": "¿De dónde se originan las células dendríticas de Langerhans?",
            "options": [
              {
                "text": "De la médula ósea",
                "isCorrect": true,
                "rationale": "Las células dendríticas de Langerhans se originan en la médula ósea."
              },
              {
                "text": "Del estrato basal",
                "isCorrect": false,
                "rationale": "El estrato basal produce queratinocitos, no células inmunes."
              },
              {
                "text": "Del neuroectodermo",
                "isCorrect": false,
                "rationale": "Ese es el origen de los melanocitos, no de las células de Langerhans."
              },
              {
                "text": "De las glándulas sudoríparas",
                "isCorrect": false,
                "rationale": "Las glándulas producen sudor, no células dendríticas."
              }
            ],
            "hint": "Son células inmunes que vienen de la sangre..."
          },
          {
            "question": "¿Cuál es la forma de las células dendríticas de Langerhans?",
            "options": [
              {
                "text": "Forma estrellada con muchas ramificaciones",
                "isCorrect": true,
                "rationale": "Las células dendríticas tienen forma estrellada con múltiples ramificaciones (de ahí su nombre)."
              },
              {
                "text": "Forma cúbica regular",
                "isCorrect": false,
                "rationale": "Esa forma es típica de epitelios de revestimiento, no de células dendríticas."
              },
              {
                "text": "Forma esférica",
                "isCorrect": false,
                "rationale": "Las células dendríticas se caracterizan por sus prolongaciones, no por ser esféricas."
              },
              {
                "text": "Forma cilíndrica alargada",
                "isCorrect": false,
                "rationale": "Esa forma es típica de células musculares, no de Langerhans."
              }
            ],
            "hint": "Su nombre viene de las prolongaciones tipo 'dendritas'...",
            "image": "imagen:forma-celulas-langerhans"
          },
          {
            "question": "¿Qué función tienen las células dendríticas de Langerhans?",
            "options": [
              {
                "text": "Desencadenan respuestas inmunitarias primarias",
                "isCorrect": true,
                "rationale": "Las células dendríticas de Langerhans desencadenan respuestas inmunitarias primarias como células presentadoras de antígenos."
              },
              {
                "text": "Producen melanina",
                "isCorrect": false,
                "rationale": "Esa es función de los melanocitos."
              },
              {
                "text": "Generan nuevas células epidérmicas",
                "isCorrect": false,
                "rationale": "Esa es función de los queratinocitos del estrato basal."
              },
              {
                "text": "Perciben el tacto",
                "isCorrect": false,
                "rationale": "Esa es función de las células de Merkel."
              }
            ],
            "hint": "Son células del sistema inmunológico..."
          },
          {
            "question": "¿Dónde están las células de Merkel (epiteliocitos táctiles)?",
            "options": [
              {
                "text": "En contacto con la membrana basal",
                "isCorrect": true,
                "rationale": "Las células de Merkel (epiteliocitos táctiles) están en contacto con la membrana basal."
              },
              {
                "text": "En el estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo tiene células muertas sin receptores."
              },
              {
                "text": "En la dermis papilar",
                "isCorrect": false,
                "rationale": "Las células de Merkel son epidérmicas, aunque están en la base de la epidermis."
              },
              {
                "text": "En el tejido subcutáneo",
                "isCorrect": false,
                "rationale": "El tejido subcutáneo está demasiado profundo para estas células."
              }
            ],
            "hint": "Están en la base de la epidermis, tocando la división con la dermis...",
            "image": "imagen:celulas-merkel-ubicacion"
          },
          {
            "question": "¿Qué función tienen las células de Merkel?",
            "options": [
              {
                "text": "Son receptores del tacto conectados a neuronas sensitivas",
                "isCorrect": true,
                "rationale": "Los epiteliocitos táctiles (células de Merkel) son receptores del tacto conectados a terminaciones nerviosas."
              },
              {
                "text": "Producen queratina",
                "isCorrect": false,
                "rationale": "Esa es función de los queratinocitos."
              },
              {
                "text": "Producen melanina",
                "isCorrect": false,
                "rationale": "Esa es función de los melanocitos."
              },
              {
                "text": "Forman el estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo se forma de queratinocitos queratinizados."
              }
            ],
            "hint": "Son células sensoriales especializadas..."
          },
          {
            "question": "¿Dónde se encuentra la piel gruesa?",
            "options": [
              {
                "text": "En palmas de las manos y plantas de los pies",
                "isCorrect": true,
                "rationale": "La piel gruesa está presente exclusivamente en palmas y plantas."
              },
              {
                "text": "En todo el cuerpo",
                "isCorrect": false,
                "rationale": "La mayor parte del cuerpo tiene piel delgada."
              },
              {
                "text": "Solo en el cuero cabelludo",
                "isCorrect": false,
                "rationale": "El cuero cabelludo tiene piel delgada con muchos folículos pilosos."
              },
              {
                "text": "En los párpados",
                "isCorrect": false,
                "rationale": "Los párpados tienen la piel más delgada del cuerpo."
              }
            ],
            "hint": "Son las zonas que más fricción soportan...",
            "image": "imagen:ubicacion-piel-gruesa-palmas-plantas"
          },
          {
            "question": "¿Qué característica diferencia a la piel gruesa de la delgada?",
            "options": [
              {
                "text": "La piel gruesa tiene estrato lúcido",
                "isCorrect": true,
                "rationale": "La piel gruesa tiene estrato lúcido, mientras que la piel delgada carece de él."
              },
              {
                "text": "La piel gruesa tiene melanocitos",
                "isCorrect": false,
                "rationale": "Ambos tipos de piel tienen melanocitos."
              },
              {
                "text": "La piel gruesa tiene vasos sanguíneos",
                "isCorrect": false,
                "rationale": "Ninguna epidermis tiene vasos sanguíneos."
              },
              {
                "text": "La piel gruesa tiene folículos pilosos",
                "isCorrect": false,
                "rationale": "La piel gruesa justamente NO tiene pelos; la delgada sí."
              }
            ],
            "hint": "Es una capa extra que solo existe en palmas y plantas..."
          },
          {
            "question": "¿Cuál es el orden correcto de las capas de la epidermis de profundo a superficial?",
            "options": [
              {
                "text": "Basal → Espinoso → Granuloso → Lúcido → Córneo",
                "isCorrect": true,
                "rationale": "El orden correcto es: basal (profundo), espinoso, granuloso, lúcido (solo en piel gruesa), córneo (superficial)."
              },
              {
                "text": "Córneo → Lúcido → Granuloso → Espinoso → Basal",
                "isCorrect": false,
                "rationale": "Este orden es de superficial a profundo, no de profundo a superficial."
              },
              {
                "text": "Basal → Granuloso → Espinoso → Lúcido → Córneo",
                "isCorrect": false,
                "rationale": "El espinoso está antes que el granuloso, no después."
              },
              {
                "text": "Espinoso → Basal → Granuloso → Lúcido → Córneo",
                "isCorrect": false,
                "rationale": "El basal es el más profundo, debe ir primero."
              }
            ],
            "hint": "Recordá: Las células nacen abajo y van subiendo hasta la superficie...",
            "image": "imagen:orden-capas-epidermis"
          },
          {
            "question": "¿Cuál de estas células NO pertenece a la epidermis?",
            "options": [
              {
                "text": "Fibroblasto",
                "isCorrect": true,
                "rationale": "Los fibroblastos están en la dermis, produciendo colágeno y elastina. Todas las demás son de la epidermis."
              },
              {
                "text": "Queratinocito",
                "isCorrect": false,
                "rationale": "Los queratinocitos son las células principales de la epidermis."
              },
              {
                "text": "Melanocito",
                "isCorrect": false,
                "rationale": "Los melanocitos están en la epidermis (capas profundas)."
              },
              {
                "text": "Célula de Langerhans",
                "isCorrect": false,
                "rationale": "Las células de Langerhans están en el estrato espinoso de la epidermis."
              }
            ],
            "hint": "Una de estas células produce colágeno en la capa de abajo..."
          },
          {
            "question": "¿Cuál es la función principal de los melanocitos?",
            "options": [
              {
                "text": "Producir melanina",
                "isCorrect": true,
                "rationale": "Los melanocitos producen melanina, el pigmento oscuro que protege del UV."
              },
              {
                "text": "Formar el estrato córneo",
                "isCorrect": false,
                "rationale": "Esa es función de los queratinocitos."
              },
              {
                "text": "Detectar patógenos",
                "isCorrect": false,
                "rationale": "Esa es función de las células de Langerhans."
              },
              {
                "text": "Percibir el tacto",
                "isCorrect": false,
                "rationale": "Esa es función de las células de Merkel."
              }
            ],
            "hint": "Son las células que dan color a la piel..."
          },
          {
            "question": "¿Por qué la epidermis no tiene vasos sanguíneos?",
            "options": [
              {
                "text": "Recibe nutrientes por difusión desde la dermis",
                "isCorrect": true,
                "rationale": "La epidermis carece de vasos propios y recibe nutrientes por difusión desde los vasos de la dermis."
              },
              {
                "text": "No necesita nutrientes",
                "isCorrect": false,
                "rationale": "Todas las células vivas necesitan nutrientes."
              },
              {
                "text": "Produce sus propios nutrientes",
                "isCorrect": false,
                "rationale": "Las células no producen sus propios nutrientes; los obtienen de la sangre."
              },
              {
                "text": "Los vasos están en el estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo tiene células muertas, sin vasos."
              }
            ],
            "hint": "Las células de la epidermis están muy cerca de la dermis vascularizada..."
          }
        ]
      },
      {
        "id": 3,
        "nombre": "Dermis",
        "preguntas": 21,
        "data": [
          {
            "question": "¿Dónde está ubicada la dermis?",
            "options": [
              {
                "text": "Profunda a la membrana basal de la epidermis",
                "isCorrect": true,
                "rationale": "La dermis está ubicada profunda a la membrana basal de la epidermis."
              },
              {
                "text": "Superficial a la epidermis",
                "isCorrect": false,
                "rationale": "La epidermis es la capa más superficial, la dermis está debajo."
              },
              {
                "text": "Por encima del tejido subcutáneo",
                "isCorrect": false,
                "rationale": "La dermis está por debajo de la epidermis, pero por encima del tejido subcutáneo es la epidermis."
              },
              {
                "text": "Dentro del tejido subcutáneo",
                "isCorrect": false,
                "rationale": "El tejido subcutáneo está por debajo de la dermis, no dentro de ella."
              }
            ],
            "hint": "Está entre la piel visible y la grasa de debajo...",
            "image": "imagen:ubicacion-dermis-entre-epidermis-hipodermis"
          },
          {
            "question": "¿Qué característica tiene la dermis respecto al grosor?",
            "options": [
              {
                "text": "Es la capa más gruesa de la piel",
                "isCorrect": true,
                "rationale": "La dermis es la capa más gruesa de la piel, mucho más gruesa que la epidermis."
              },
              {
                "text": "Es más delgada que la epidermis",
                "isCorrect": false,
                "rationale": "La dermis es considerablemente más gruesa que la epidermis."
              },
              {
                "text": "Tiene el mismo grosor que la epidermis",
                "isCorrect": false,
                "rationale": "La dermis es mucho más gruesa que la epidermis."
              },
              {
                "text": "No tiene grosor definido",
                "isCorrect": false,
                "rationale": "La dermis tiene grosor definido y es la capa más gruesa."
              }
            ],
            "hint": "Es la parte 'gruesa' de la piel que da volumen y resistencia..."
          },
          {
            "question": "¿Qué contiene la dermis?",
            "options": [
              {
                "text": "Vasos sanguíneos, linfáticos, nervios y anexos cutáneos",
                "isCorrect": true,
                "rationale": "La dermis contiene vasos sanguíneos y linfáticos, nervios y anexos cutáneos (pelos, glándulas)."
              },
              {
                "text": "Solo células muertas queratinizadas",
                "isCorrect": false,
                "rationale": "Eso describe el estrato córneo de la epidermis."
              },
              {
                "text": "Solo tejido adiposo",
                "isCorrect": false,
                "rationale": "El tejido adiposo principal está en el tejido subcutáneo."
              },
              {
                "text": "Solo músculo estriado",
                "isCorrect": false,
                "rationale": "La dermis no contiene músculo estriado; tiene músculo liso (erector del pelo)."
              }
            ],
            "hint": "Es la capa 'viva' con irrigación y estructuras especializadas...",
            "image": "imagen:contenido-dermis-vasos-nervios-anexos"
          },
          {
            "question": "¿Qué tipo de tejido forma la dermis?",
            "options": [
              {
                "text": "Tejido conectivo denso",
                "isCorrect": true,
                "rationale": "La dermis está formada por tejido conectivo denso con gran resistencia y elasticidad."
              },
              {
                "text": "Tejido epitelial estratificado",
                "isCorrect": false,
                "rationale": "Eso forma la epidermis, no la dermis."
              },
              {
                "text": "Tejido adiposo",
                "isCorrect": false,
                "rationale": "El tejido adiposo es predominante en el tejido subcutáneo."
              },
              {
                "text": "Tejido cartilaginoso",
                "isCorrect": false,
                "rationale": "El cartílago se encuentra en articulaciones, nariz, oídos; no en la dermis."
              }
            ],
            "hint": "Es un tejido de soporte denso que da resistencia..."
          },
          {
            "question": "¿Qué fibras contiene la dermis?",
            "options": [
              {
                "text": "Fibras de colágeno orientadas en sentido de líneas de Langer",
                "isCorrect": true,
                "rationale": "La dermis contiene fibras de colágeno orientadas según líneas de tensión (líneas de Langer), entrelazadas con fibras elásticas."
              },
              {
                "text": "Fibras de queratina únicamente",
                "isCorrect": false,
                "rationale": "La queratina está en la epidermis, no en la dermis."
              },
              {
                "text": "Fibras musculares estriadas",
                "isCorrect": false,
                "rationale": "La dermis no contiene músculo estriado."
              },
              {
                "text": "Fibras nerviosas únicamente",
                "isCorrect": false,
                "rationale": "Aunque tiene fibras nerviosas, también tiene colágeno y elastina como componentes principales."
              }
            ],
            "hint": "Son fibras que dan resistencia y elasticidad a la piel...",
            "image": "imagen:fibras-colageno-elastina-dermis"
          },
          {
            "question": "¿Cuál es la capa más superficial de la dermis?",
            "options": [
              {
                "text": "Capa papilar",
                "isCorrect": true,
                "rationale": "La capa papilar es la más superficial de la dermis, limita con la epidermis."
              },
              {
                "text": "Capa reticular",
                "isCorrect": false,
                "rationale": "La capa reticular es la más profunda de la dermis."
              },
              {
                "text": "Tejido subcutáneo",
                "isCorrect": false,
                "rationale": "El tejido subcutáneo está por debajo de la dermis."
              },
              {
                "text": "Estrato basal",
                "isCorrect": false,
                "rationale": "El estrato basal es de la epidermis, no de la dermis."
              }
            ],
            "hint": "Tiene proyecciones que suben hacia la epidermis...",
            "image": "imagen:capa-papilar-superficial-dermis"
          },
          {
            "question": "¿Qué caracteriza a la capa papilar de la dermis?",
            "options": [
              {
                "text": "Tejido conectivo con fibras finas de colágeno y elastina",
                "isCorrect": true,
                "rationale": "La capa papilar tiene tejido conectivo con fibras finas de colágeno y elastina."
              },
              {
                "text": "Tejido conectivo denso irregular",
                "isCorrect": false,
                "rationale": "Eso caracteriza a la capa reticular, no a la papilar."
              },
              {
                "text": "Células muertas queratinizadas",
                "isCorrect": false,
                "rationale": "Eso es el estrato córneo de la epidermis."
              },
              {
                "text": "Tejido adiposo abundante",
                "isCorrect": false,
                "rationale": "El tejido adiposo está en el tejido subcutáneo."
              }
            ],
            "hint": "Es una capa más delicada con fibras finas..."
          },
          {
            "question": "¿Qué estructuras presenta la capa papilar?",
            "options": [
              {
                "text": "Papilas dérmicas",
                "isCorrect": true,
                "rationale": "La capa papilar presenta proyecciones cónicas redondeadas llamadas papilas dérmicas."
              },
              {
                "text": "Folículos pilosos",
                "isCorrect": false,
                "rationale": "Los folículos atraviesan toda la dermis, no son específicos de la capa papilar."
              },
              {
                "text": "Glándulas sudoríparas",
                "isCorrect": false,
                "rationale": "Las glándulas sudoríparas se originan en la dermis profunda o tejido subcutáneo."
              },
              {
                "text": "Células adiposas",
                "isCorrect": false,
                "rationale": "Las células adiposas están en el tejido subcutáneo."
              }
            ],
            "hint": "Son proyecciones que suben hacia la epidermis aumentando la superficie de contacto...",
            "image": "imagen:papilas-dermicas-proyecciones"
          },
          {
            "question": "¿Cuál es la capa más profunda de la dermis?",
            "options": [
              {
                "text": "Capa reticular",
                "isCorrect": true,
                "rationale": "La capa reticular es la más profunda de la dermis, limita con el tejido subcutáneo."
              },
              {
                "text": "Capa papilar",
                "isCorrect": false,
                "rationale": "La capa papilar es la más superficial de la dermis."
              },
              {
                "text": "Estrato basal",
                "isCorrect": false,
                "rationale": "El estrato basal es de la epidermis."
              },
              {
                "text": "Tejido subcutáneo",
                "isCorrect": false,
                "rationale": "El tejido subcutáneo está debajo de la dermis, no es parte de ella."
              }
            ],
            "hint": "Limita directamente con el tejido subcutáneo..."
          },
          {
            "question": "¿Qué caracteriza a la capa reticular de la dermis?",
            "options": [
              {
                "text": "Tejido conectivo denso irregular con fibras de colágeno en red",
                "isCorrect": true,
                "rationale": "La capa reticular tiene tejido conectivo denso irregular con fibras de colágeno formando red y fibras elásticas entrelazadas."
              },
              {
                "text": "Fibras finas de colágeno únicamente",
                "isCorrect": false,
                "rationale": "Las fibras finas son de la capa papilar; la reticular tiene fibras gruesas."
              },
              {
                "text": "Ausencia de fibras elásticas",
                "isCorrect": false,
                "rationale": "La capa reticular SÍ tiene fibras elásticas entrelazadas."
              },
              {
                "text": "Tejido epitelial estratificado",
                "isCorrect": false,
                "rationale": "La dermis es tejido conectivo, no epitelial."
              }
            ],
            "hint": "Es una capa más gruesa y resistente que la papilar...",
            "image": "imagen:capa-reticular-fibras-colageno-red"
          },
          {
            "question": "¿Qué propiedades otorgan las fibras de la capa reticular?",
            "options": [
              {
                "text": "Resistencia, extensibilidad y elasticidad",
                "isCorrect": true,
                "rationale": "Las redes de fibras de colágeno y elásticas otorgan resistencia, extensibilidad y elasticidad a la piel."
              },
              {
                "text": "Producción de melanina",
                "isCorrect": false,
                "rationale": "La melanina se produce en los melanocitos de la epidermis."
              },
              {
                "text": "Síntesis de vitamina D",
                "isCorrect": false,
                "rationale": "La vitamina D se sintetiza en la epidermis."
              },
              {
                "text": "Protección contra UV",
                "isCorrect": false,
                "rationale": "La protección UV es función de la melanina en la epidermis."
              }
            ],
            "hint": "Son propiedades mecánicas de la piel..."
          },
          {
            "question": "¿Qué ocupa el espacio entre las fibras de la capa reticular?",
            "options": [
              {
                "text": "Células adiposas, vasos, fibras nerviosas y anexos de la piel",
                "isCorrect": true,
                "rationale": "El espacio entre las fibras de la capa reticular está ocupado por células adiposas, vasos, fibras nerviosas y anexos."
              },
              {
                "text": "Células muertas queratinizadas",
                "isCorrect": false,
                "rationale": "Eso está en el estrato córneo de la epidermis."
              },
              {
                "text": "Aire",
                "isCorrect": false,
                "rationale": "El espacio está ocupado por células y estructuras, no por aire."
              },
              {
                "text": "Líquido sinovial",
                "isCorrect": false,
                "rationale": "El líquido sinovial está en las articulaciones."
              }
            ],
            "hint": "Es una matriz con células y estructuras funcionales...",
            "image": "imagen:matriz-capa-reticular-contenido"
          },
          {
            "question": "¿Qué son las papilas dérmicas?",
            "options": [
              {
                "text": "Protrusiones cónicas redondeadas de la capa papilar",
                "isCorrect": true,
                "rationale": "Las papilas dérmicas son protrusiones cónicas redondeadas de la capa papilar."
              },
              {
                "text": "Glándulas productoras de sudor",
                "isCorrect": false,
                "rationale": "Las glándulas sudoríparas son estructuras glandulares, no papilas."
              },
              {
                "text": "Células receptoras del tacto",
                "isCorrect": false,
                "rationale": "Aunque contienen receptores, las papilas son estructuras anatómicas, no células."
              },
              {
                "text": "Fibras de colágeno aisladas",
                "isCorrect": false,
                "rationale": "Las papilas son estructuras tridimensionales, no fibras sueltas."
              }
            ],
            "hint": "Son como 'dedos' que suben desde la dermis hacia la epidermis..."
          },
          {
            "question": "¿Hacia dónde se proyectan las papilas dérmicas?",
            "options": [
              {
                "text": "Hacia la epidermis",
                "isCorrect": true,
                "rationale": "Las papilas dérmicas se proyectan hacia la epidermis formando una amplia superficie de unión."
              },
              {
                "text": "Hacia el tejido subcutáneo",
                "isCorrect": false,
                "rationale": "Las papilas van hacia arriba (epidermis), no hacia abajo."
              },
              {
                "text": "Hacia los músculos",
                "isCorrect": false,
                "rationale": "Las papilas no llegan hasta los músculos."
              },
              {
                "text": "Hacia los vasos sanguíneos profundos",
                "isCorrect": false,
                "rationale": "Las papilas suben hacia la superficie, no hacia vasos profundos."
              }
            ],
            "hint": "Van en dirección opuesta al tejido subcutáneo...",
            "image": "imagen:papilas-dermicas-direccion-epidermis"
          },
          {
            "question": "¿Qué relación existe entre altura de papilas y exigencia mecánica?",
            "options": [
              {
                "text": "La cantidad y altura está relacionada con la exigencia mecánica del sector",
                "isCorrect": true,
                "rationale": "La cantidad y altura de las papilas está relacionada con la exigencia mecánica de esa zona."
              },
              {
                "text": "No tienen relación con la mecánica",
                "isCorrect": false,
                "rationale": "Sí existe relación directa con la exigencia mecánica."
              },
              {
                "text": "Son más altas donde menos fricción hay",
                "isCorrect": false,
                "rationale": "Es al revés: son más desarrolladas donde hay más fricción."
              },
              {
                "text": "Tienen la misma altura en todo el cuerpo",
                "isCorrect": false,
                "rationale": "La altura varía según la región y su función mecánica."
              }
            ],
            "hint": "Piensa en las palmas de las manos vs. el abdomen..."
          },
          {
            "question": "¿Qué se encuentra en las papilas dérmicas?",
            "options": [
              {
                "text": "Asas capilares y receptores táctiles",
                "isCorrect": true,
                "rationale": "En las papilas dérmicas se encuentran asas capilares y receptores táctiles."
              },
              {
                "text": "Glándulas sebáceas",
                "isCorrect": false,
                "rationale": "Las glándulas sebáceas desembocan en folículos pilosos, no en las papilas."
              },
              {
                "text": "Melanocitos",
                "isCorrect": false,
                "rationale": "Los melanocitos están en la epidermis, no en las papilas dérmicas."
              },
              {
                "text": "Células de Merkel",
                "isCorrect": false,
                "rationale": "Las células de Merkel están en la base de la epidermis, no en las papilas."
              }
            ],
            "hint": "Son estructuras relacionadas con nutrición y sensación...",
            "image": "imagen:contenido-papilas-dermicas-vasos-receptores"
          },
          {
            "question": "¿Quién estudió las líneas de tensión de la piel?",
            "options": [
              {
                "text": "Karl Langer",
                "isCorrect": true,
                "rationale": "Karl Langer estudió las líneas de tensión presentes en la piel."
              },
              {
                "text": "William Harvey",
                "isCorrect": false,
                "rationale": "Harvey descubrió la circulación sanguínea."
              },
              {
                "text": "Robert Koch",
                "isCorrect": false,
                "rationale": "Koch trabajó en microbiología y enfermedades infecciosas."
              },
              {
                "text": "Sigmund Freud",
                "isCorrect": false,
                "rationale": "Freud fue un psicoanalista, no un anatomista de la piel."
              }
            ],
            "hint": "Su apellido se asocia a las líneas de tensión cutánea..."
          },
          {
            "question": "¿En qué dirección siguen las líneas de Langer?",
            "options": [
              {
                "text": "La dirección de las fibras de colágeno en la dermis reticular",
                "isCorrect": true,
                "rationale": "Las líneas de Langer siguen la dirección de las fibras de colágeno de la dermis reticular."
              },
              {
                "text": "La dirección del flujo sanguíneo",
                "isCorrect": false,
                "rationale": "Las líneas de Langer están relacionadas con fibras de colágeno, no con vasos."
              },
              {
                "text": "La dirección del crecimiento del pelo",
                "isCorrect": false,
                "rationale": "Las líneas de tensión no siguen el patrón del crecimiento piloso."
              },
              {
                "text": "La dirección de las líneas de expresión",
                "isCorrect": false,
                "rationale": "Las líneas de expresión siguen músculos; las de Langer siguen fibras de colágeno."
              }
            ],
            "hint": "Están relacionadas con la estructura del tejido conectivo...",
            "image": "imagen:lineas-langer-direccion-fibras-colageno"
          },
          {
            "question": "¿Qué sucede con incisiones paralelas a las líneas de Langer?",
            "options": [
              {
                "text": "Curan con muy poco tejido cicatrizal",
                "isCorrect": true,
                "rationale": "Las incisiones paralelas a las líneas de Langer curan con muy poco tejido cicatrizal."
              },
              {
                "text": "Producen cicatrices hipertróficas siempre",
                "isCorrect": false,
                "rationale": "Eso ocurre cuando se cortan las líneas, no cuando son paralelas."
              },
              {
                "text": "Causan más dolor",
                "isCorrect": false,
                "rationale": "No hay relación directa con el dolor."
              },
              {
                "text": "Sangran más",
                "isCorrect": false,
                "rationale": "El sangrado depende de vasos, no de la dirección de las fibras."
              }
            ],
            "hint": "Los cirujanos las usan para mejores resultados estéticos..."
          },
          {
            "question": "¿Qué sucede con incisiones que cortan las líneas de Langer?",
            "options": [
              {
                "text": "Pueden producir defecto estético y cicatrices hipertróficas",
                "isCorrect": true,
                "rationale": "Cortar las líneas de Langer produce retracción de fibras, dificultad de cicatrización y posibles defectos estéticos."
              },
              {
                "text": "Curan más rápido",
                "isCorrect": false,
                "rationale": "Curan peor, no más rápido."
              },
              {
                "text": "No hay diferencia con las paralelas",
                "isCorrect": false,
                "rationale": "Sí hay diferencia significativa en la cicatrización."
              },
              {
                "text": "Producen menos dolor",
                "isCorrect": false,
                "rationale": "No hay relación con el dolor."
              }
            ],
            "hint": "Van contra la estructura natural del tejido...",
            "image": "imagen:incisiones-vs-lineas-langer-cicatrizacion"
          },
          {
            "question": "¿Por qué se dificulta la aposición de bordes al cortar las líneas de Langer?",
            "options": [
              {
                "text": "Por la retracción de las fibras colágenas",
                "isCorrect": true,
                "rationale": "Cortar las líneas lleva a retracción de fibras colágenas, dificultando la aposición de bordes."
              },
              {
                "text": "Por falta de irrigación",
                "isCorrect": false,
                "rationale": "La irrigación no se ve afectada por la dirección del corte."
              },
              {
                "text": "Por destrucción de nervios",
                "isCorrect": false,
                "rationale": "Los nervios no son la causa de la dificultad de aposición."
              },
              {
                "text": "Por pérdida de queratina",
                "isCorrect": false,
                "rationale": "La queratina no está involucrada en este proceso."
              }
            ],
            "hint": "Las fibras se 'encogen' al ser cortadas perpendicularmente..."
          }
        ]
      },
      {
        "id": 4,
        "nombre": "Glándulas Cutáneas",
        "preguntas": 17,
        "data": [
          {
            "question": "¿Qué tipo de glándulas son las sudoríparas ecrinas?",
            "options": [
              {
                "text": "Glándulas tubulares simples enrolladas",
                "isCorrect": true,
                "rationale": "Las glándulas sudoríparas ecrinas son tubulares simples enrolladas."
              },
              {
                "text": "Glándulas acinosas ramificadas",
                "isCorrect": false,
                "rationale": "Ese tipo corresponde a las glándulas sebáceas."
              },
              {
                "text": "Glándulas tubulares compuestas",
                "isCorrect": false,
                "rationale": "Las ecrinas son simples, no compuestas."
              },
              {
                "text": "Glándulas holocrinas",
                "isCorrect": false,
                "rationale": "Las holocrinas son las sebáceas; las ecrinas son merocrinas."
              }
            ],
            "hint": "Son tubos enrollados sobre sí mismos...",
            "image": "imagen:glándula-sudorípara-ecrina-tubular"
          },
          {
            "question": "¿Dónde está ubicada la porción secretora de las glándulas ecrinas?",
            "options": [
              {
                "text": "A nivel de la dermis profunda o tejido subcutáneo",
                "isCorrect": true,
                "rationale": "La porción secretora está a nivel de la dermis profunda, en ocasiones en el tejido subcutáneo."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "La epidermis no tiene glándulas; las glándulas están en la dermis o más profundo."
              },
              {
                "text": "En la capa papilar de la dermis",
                "isCorrect": false,
                "rationale": "Es demasiado superficial para la porción secretora."
              },
              {
                "text": "En el estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo tiene células muertas, sin glándulas."
              }
            ],
            "hint": "Está bastante profunda, cerca de la grasa subcutánea..."
          },
          {
            "question": "¿Dónde termina el conducto excretor de las glándulas ecrinas?",
            "options": [
              {
                "text": "En la superficie de la piel a través de un poro",
                "isCorrect": true,
                "rationale": "El conducto excretor termina en la superficie de la piel a través de un poro sudoríparo."
              },
              {
                "text": "En folículos pilosos",
                "isCorrect": false,
                "rationale": "Esa es la característica de las glándulas apocrinas, no las ecrinas."
              },
              {
                "text": "En glándulas sebáceas",
                "isCorrect": false,
                "rationale": "Las glándulas no desembocan en otras glándulas."
              },
              {
                "text": "En la dermis",
                "isCorrect": false,
                "rationale": "El conducto llega hasta la superficie, no termina en la dermis."
              }
            ],
            "hint": "Es el sudor que ves salir a través de la piel..."
          },
          {
            "question": "¿Dónde están más numerosas las glándulas ecrinas?",
            "options": [
              {
                "text": "En frente, palmas y plantas",
                "isCorrect": true,
                "rationale": "Las ecrinas están más numerosas en frente, palmas de las manos y plantas de los pies."
              },
              {
                "text": "Solo en axilas e ingles",
                "isCorrect": false,
                "rationale": "Esa es la ubicación de las glándulas apocrinas."
              },
              {
                "text": "Solo en el cuero cabelludo",
                "isCorrect": false,
                "rationale": "En el cuero cabelludo hay más sebáceas que ecrinas."
              },
              {
                "text": "Solo en los párpados",
                "isCorrect": false,
                "rationale": "Los párpados no son la zona de mayor concentración."
              }
            ],
            "hint": "Piensa dónde sudás más o necesitás más regulación térmica...",
            "image": "imagen:distribución-glándulas-ecrinas-zonas"
          },
          {
            "question": "¿Cuál es la función de las glándulas sudoríparas ecrinas?",
            "options": [
              {
                "text": "Regular la temperatura corporal por evaporación del sudor",
                "isCorrect": true,
                "rationale": "Producen sudor que con su evaporación contribuye a la regulación de la temperatura corporal."
              },
              {
                "text": "Producir sebo para humectar el pelo",
                "isCorrect": false,
                "rationale": "Esa es función de las glándulas sebáceas."
              },
              {
                "text": "Sintetizar vitamina D",
                "isCorrect": false,
                "rationale": "Esa es función de la epidermis con exposición solar."
              },
              {
                "text": "Producir melanina",
                "isCorrect": false,
                "rationale": "Esa es función de los melanocitos."
              }
            ],
            "hint": "El sudor te enfría cuando se evapora..."
          },
          {
            "question": "¿Dónde se ubican las glándulas sudoríparas apocrinas?",
            "options": [
              {
                "text": "En piel con vello",
                "isCorrect": true,
                "rationale": "Las glándulas apocrinas se ubican en piel con vello (axila, ingle, aréola)."
              },
              {
                "text": "En palmas y plantas",
                "isCorrect": false,
                "rationale": "Palmas y plantas tienen ecrinas, no apocrinas."
              },
              {
                "text": "En los párpados",
                "isCorrect": false,
                "rationale": "Los párpados no tienen glándulas apocrinas."
              },
              {
                "text": "En la frente",
                "isCorrect": false,
                "rationale": "La frente tiene ecrinas abundantes, no apocrinas."
              }
            ],
            "hint": "Están asociadas a los folículos pilosos...",
            "image": "imagen:ubicación-glándulas-apocrinas-axila-ingle"
          },
          {
            "question": "¿Cuándo comienzan a funcionar las glándulas apocrinas?",
            "options": [
              {
                "text": "En la pubertad",
                "isCorrect": true,
                "rationale": "Las glándulas apocrinas comienzan a funcionar en la pubertad."
              },
              {
                "text": "Al nacer",
                "isCorrect": false,
                "rationale": "No están funcionales al nacer."
              },
              {
                "text": "A los 5 años",
                "isCorrect": false,
                "rationale": "Comienzan con los cambios hormonales de la pubertad."
              },
              {
                "text": "A los 50 años",
                "isCorrect": false,
                "rationale": "Comienzan mucho antes, en la pubertad."
              }
            ],
            "hint": "Coincide con los cambios hormonales de la adolescencia..."
          },
          {
            "question": "¿Dónde desemboca el conducto de las glándulas apocrinas?",
            "options": [
              {
                "text": "En los folículos pilosos",
                "isCorrect": true,
                "rationale": "El conducto excretor de las apocrinas se abre en los folículos pilosos."
              },
              {
                "text": "Directamente en la superficie de la piel",
                "isCorrect": false,
                "rationale": "Esa es la característica de las ecrinas, no las apocrinas."
              },
              {
                "text": "En glándulas sebáceas",
                "isCorrect": false,
                "rationale": "No desembocan en glándulas sebáceas, sino en folículos."
              },
              {
                "text": "En la dermis",
                "isCorrect": false,
                "rationale": "El conducto llega al folículo piloso, no termina en la dermis."
              }
            ],
            "hint": "Su secreción viaja por el folículo hasta la superficie..."
          },
          {
            "question": "¿En qué zonas específicas se encuentran las glándulas apocrinas?",
            "options": [
              {
                "text": "Axila, ingle y aréola",
                "isCorrect": true,
                "rationale": "Las apocrinas se encuentran específicamente en axila, ingle y aréola."
              },
              {
                "text": "Frente, palmas y plantas",
                "isCorrect": false,
                "rationale": "Esas zonas tienen ecrinas, no apocrinas."
              },
              {
                "text": "Cuero cabelludo y cara",
                "isCorrect": false,
                "rationale": "Estas zonas no son las principales para apocrinas."
              },
              {
                "text": "Párpados y labios",
                "isCorrect": false,
                "rationale": "Estas zonas no tienen glándulas apocrinas."
              }
            ],
            "hint": "Zonas con abundante vello y asociadas a olor...",
            "image": "imagen:zonas-apocrinas-axila-ingle-aréola"
          },
          {
            "question": "¿Qué tipo de glándulas son las sebáceas?",
            "options": [
              {
                "text": "Glándulas holocrinas acinosas ramificadas en racimo",
                "isCorrect": true,
                "rationale": "Las glándulas sebáceas son holocrinas (liberan célula completa) y acinosas ramificadas en racimo."
              },
              {
                "text": "Glándulas tubulares simples",
                "isCorrect": false,
                "rationale": "Ese tipo son las sudoríparas ecrinas."
              },
              {
                "text": "Glándulas merocrinas",
                "isCorrect": false,
                "rationale": "Las sebáceas son holocrinas, no merocrinas."
              },
              {
                "text": "Glándulas endocrinas",
                "isCorrect": false,
                "rationale": "Las sebáceas son exocrinas, no endocrinas."
              }
            ],
            "hint": "Liberan su contenido destruyendo la célula completa...",
            "image": "imagen:tipo-glándula-sebácea-holocrina"
          },
          {
            "question": "¿Qué producen las glándulas sebáceas?",
            "options": [
              {
                "text": "Sebo, una sustancia oleosa",
                "isCorrect": true,
                "rationale": "Las glándulas sebáceas producen sebo, una sustancia oleosa."
              },
              {
                "text": "Sudor acuoso",
                "isCorrect": false,
                "rationale": "Eso producen las glándulas sudoríparas."
              },
              {
                "text": "Melanina",
                "isCorrect": false,
                "rationale": "La melanina la producen los melanocitos."
              },
              {
                "text": "Queratina",
                "isCorrect": false,
                "rationale": "La queratina la producen los queratinocitos."
              }
            ],
            "hint": "Es una secreción aceitosa que humecta..."
          },
          {
            "question": "¿Dónde desembocan la mayoría de las glándulas sebáceas?",
            "options": [
              {
                "text": "En los folículos pilosos",
                "isCorrect": true,
                "rationale": "La mayoría de las sebáceas desembocan en folículos pilosos, formando el complejo pilosebáceo."
              },
              {
                "text": "Directamente en la superficie de la piel",
                "isCorrect": false,
                "rationale": "Esas son las ecrinas y las sebáceas libres."
              },
              {
                "text": "En la dermis",
                "isCorrect": false,
                "rationale": "No desembocan en la dermis, sino en folículos o superficie."
              },
              {
                "text": "En glándulas sudoríparas",
                "isCorrect": false,
                "rationale": "No desembocan en otras glándulas."
              }
            ],
            "hint": "El sebo viaja por el pelo hasta la superficie...",
            "image": "imagen:desembocadura-sebácea-folículo-piloso"
          },
          {
            "question": "¿Qué es el complejo pilosebáceo?",
            "options": [
              {
                "text": "La unión del folículo piloso con la glándula sebácea",
                "isCorrect": true,
                "rationale": "El complejo pilosebáceo es la estructura formada por el folículo piloso y la glándula sebácea asociada."
              },
              {
                "text": "La unión de dos glándulas sudoríparas",
                "isCorrect": false,
                "rationale": "No se refiere a sudoríparas, sino a pelo y sebácea."
              },
              {
                "text": "Un tipo de célula epitelial",
                "isCorrect": false,
                "rationale": "Es una estructura anatómica, no una célula."
              },
              {
                "text": "Un músculo de la piel",
                "isCorrect": false,
                "rationale": "El músculo asociado es el erector del pelo, no el complejo pilosebáceo."
              }
            ],
            "hint": "Es la unión entre el pelo y la glándula que lo lubrica..."
          },
          {
            "question": "¿Dónde NO existen glándulas sebáceas?",
            "options": [
              {
                "text": "En palma de las manos y planta de los pies",
                "isCorrect": true,
                "rationale": "Las glándulas sebáceas no existen en palma de las manos ni en planta de los pies."
              },
              {
                "text": "En el cuero cabelludo",
                "isCorrect": false,
                "rationale": "El cuero cabelludo tiene abundantes glándulas sebáceas."
              },
              {
                "text": "En la cara",
                "isCorrect": false,
                "rationale": "La cara tiene muchas glándulas sebáceas."
              },
              {
                "text": "En el tórax",
                "isCorrect": false,
                "rationale": "El tórax tiene glándulas sebáceas."
              }
            ],
            "hint": "Son las zonas de piel gruesa sin vello...",
            "image": "imagen:ausencia-sebáceas-palmas-plantas"
          },
          {
            "question": "¿Cuál es la primera función del sebo?",
            "options": [
              {
                "text": "Recubrir y humectar la superficie del pelo",
                "isCorrect": true,
                "rationale": "El sebo recubre la superficie del pelo y lo humecta."
              },
              {
                "text": "Regular la temperatura corporal",
                "isCorrect": false,
                "rationale": "Esa es función del sudor."
              },
              {
                "text": "Proteger de radiación UV",
                "isCorrect": false,
                "rationale": "Esa es función de la melanina."
              },
              {
                "text": "Producir vitamina D",
                "isCorrect": false,
                "rationale": "Esa es función de la epidermis."
              }
            ],
            "hint": "El sebo lubrica el pelo para que no se reseque..."
          },
          {
            "question": "¿Cuál es la segunda función del sebo?",
            "options": [
              {
                "text": "Evitar la evaporación del agua de la piel",
                "isCorrect": true,
                "rationale": "El sebo evita la evaporación del agua de la piel, actuando como barrera."
              },
              {
                "text": "Producir sudor",
                "isCorrect": false,
                "rationale": "El sudor lo producen las glándulas sudoríparas."
              },
              {
                "text": "Producir pigmento",
                "isCorrect": false,
                "rationale": "El pigmento lo producen los melanocitos."
              },
              {
                "text": "Generar nuevas células",
                "isCorrect": false,
                "rationale": "Esa es función del estrato basal."
              }
            ],
            "hint": "Mantiene la hidratación de la piel..."
          },
          {
            "question": "¿Cuál es la tercera función del sebo?",
            "options": [
              {
                "text": "Mantener la piel flexible y suave",
                "isCorrect": true,
                "rationale": "El sebo mantiene la piel flexible y suave."
              },
              {
                "text": "Proteger de bacterias",
                "isCorrect": false,
                "rationale": "Aunque tiene algo de efecto antimicrobiano, no es su función principal."
              },
              {
                "text": "Regular el pH",
                "isCorrect": false,
                "rationale": "No es la función principal del sebo."
              },
              {
                "text": "Sintetizar hormonas",
                "isCorrect": false,
                "rationale": "El sebo no sintetiza hormonas."
              }
            ],
            "hint": "Sin sebo la piel se vuelve áspera y seca..."
          }
        ]
      },
      {
        "id": 5,
        "nombre": "Pelos",
        "preguntas": 21,
        "data": [
          {
            "question": "¿Qué son los pelos?",
            "options": [
              {
                "text": "Filamentos córneos producidos por la epidermis",
                "isCorrect": true,
                "rationale": "Los pelos son filamentos córneos producidos por la epidermis."
              },
              {
                "text": "Extensiones de la dermis",
                "isCorrect": false,
                "rationale": "Los pelos son de origen epidérmico, no dérmico."
              },
              {
                "text": "Glándulas modificadas",
                "isCorrect": false,
                "rationale": "Las glándulas son estructuras diferentes; los pelos son filamentos."
              },
              {
                "text": "Células nerviosas especializadas",
                "isCorrect": false,
                "rationale": "Los pelos no son células nerviosas."
              }
            ],
            "hint": "Son filamentos duros que salen de la piel...",
            "image": "imagen:estructura-pelo-filamento-corneo"
          },
          {
            "question": "¿Qué es la vaina radicular del pelo?",
            "options": [
              {
                "text": "Cilindro epitelial invaginado que rodea al pelo",
                "isCorrect": true,
                "rationale": "La vaina radicular es un cilindro que rodea al pelo, formado por epitelio invaginado."
              },
              {
                "text": "La punta visible del pelo",
                "isCorrect": false,
                "rationale": "Eso es la porción libre o tallo, no la vaina."
              },
              {
                "text": "Un músculo que mueve el pelo",
                "isCorrect": false,
                "rationale": "El músculo que mueve el pelo es el erector, no la vaina."
              },
              {
                "text": "Una glándula productora de sebo",
                "isCorrect": false,
                "rationale": "La glándula sebácea es diferente de la vaina radicular."
              }
            ],
            "hint": "Es el tubo que envuelve la raíz del pelo...",
            "image": "imagen:vaina-radicular-pelo-cilindro"
          },
          {
            "question": "¿Qué es la raíz del pelo?",
            "options": [
              {
                "text": "Porción profunda que penetra en la dermis",
                "isCorrect": true,
                "rationale": "La raíz es la porción profunda del pelo que penetra en la dermis."
              },
              {
                "text": "La punta que sobresale de la piel",
                "isCorrect": false,
                "rationale": "Eso es el tallo o porción libre, no la raíz."
              },
              {
                "text": "Una estructura de la glándula sebácea",
                "isCorrect": false,
                "rationale": "La glándula sebácea es una estructura aparte."
              },
              {
                "text": "El músculo que erige el pelo",
                "isCorrect": false,
                "rationale": "Eso es el músculo erector del pelo."
              }
            ],
            "hint": "Está dentro de la piel, no fuera..."
          },
          {
            "question": "¿Qué forman el bulbo piloso y la papila dérmica del pelo juntos?",
            "options": [
              {
                "text": "El folículo piloso",
                "isCorrect": true,
                "rationale": "El bulbo piloso + papila dérmica = folículo piloso."
              },
              {
                "text": "La glándula sebácea",
                "isCorrect": false,
                "rationale": "La glándula sebácea es una estructura aparte."
              },
              {
                "text": "El músculo erector del pelo",
                "isCorrect": false,
                "rationale": "El músculo erector es una estructura diferente."
              },
              {
                "text": "La vaina radicular",
                "isCorrect": false,
                "rationale": "La vaina es epitelial, no formada por bulbo + papila."
              }
            ],
            "hint": "Es el conjunto de estructuras de la base del pelo...",
            "image": "imagen:foliculo-piloso-bulbo-papila-componentes"
          },
          {
            "question": "¿Dónde están ausentes los pelos?",
            "options": [
              {
                "text": "En palmas, superficie palmar de dedos, talones y plantas",
                "isCorrect": true,
                "rationale": "No hay pelos en: palmas, superficie palmar de dedos, talones y plantas."
              },
              {
                "text": "En el cuero cabelludo",
                "isCorrect": false,
                "rationale": "El cuero cabelludo tiene la mayor densidad de pelos."
              },
              {
                "text": "En los brazos",
                "isCorrect": false,
                "rationale": "Los brazos tienen pelos (vellos)."
              },
              {
                "text": "En la espalda",
                "isCorrect": false,
                "rationale": "La espalda tiene pelos."
              }
            ],
            "hint": "Zonas de piel gruesa que usamos para agarrar/apoyar...",
            "image": "imagen:zonas-sin-pelos-palmas-plantas"
          },
          {
            "question": "¿Dónde hay mayor densidad de pelos?",
            "options": [
              {
                "text": "En el cuero cabelludo",
                "isCorrect": true,
                "rationale": "La mayor densidad de pelos se encuentra en el cuero cabelludo."
              },
              {
                "text": "En las palmas de las manos",
                "isCorrect": false,
                "rationale": "Las palmas no tienen pelos."
              },
              {
                "text": "En los párpados",
                "isCorrect": false,
                "rationale": "Aunque tienen pestañas, la densidad no es mayor que en el cuero cabelludo."
              },
              {
                "text": "En la planta de los pies",
                "isCorrect": false,
                "rationale": "Las plantas no tienen pelos."
              }
            ],
            "hint": "Es donde más pelo tenemos por cm²..."
          },
          {
            "question": "¿Dónde aparecen nuevos pelos a partir de la pubertad?",
            "options": [
              {
                "text": "En pubis, genitales externos, axilas y cara",
                "isCorrect": true,
                "rationale": "A partir de la pubertad aparecen pelos en pubis, genitales externos, axilas y cara."
              },
              {
                "text": "En el cuero cabelludo",
                "isCorrect": false,
                "rationale": "El pelo del cuero cabelludo está desde antes de la pubertad."
              },
              {
                "text": "En las palmas",
                "isCorrect": false,
                "rationale": "Las palmas nunca desarrollan pelos."
              },
              {
                "text": "En los párpados",
                "isCorrect": false,
                "rationale": "Las pestañas están desde el nacimiento."
              }
            ],
            "hint": "Son los pelos sexuales secundarios...",
            "image": "imagen:distribucion-pelos-pubertad-zonas"
          },
          {
            "question": "¿Cuál es la primera función de los pelos?",
            "options": [
              {
                "text": "Participación en la percepción táctil",
                "isCorrect": true,
                "rationale": "Los pelos participan en la percepción táctil a través de sus terminaciones nerviosas."
              },
              {
                "text": "Producción de vitamina D",
                "isCorrect": false,
                "rationale": "La vitamina D se produce en la epidermis."
              },
              {
                "text": "Secreción de hormonas",
                "isCorrect": false,
                "rationale": "Los pelos no secretan hormonas."
              },
              {
                "text": "Síntesis de proteínas",
                "isCorrect": false,
                "rationale": "Los pelos metabólicamente inertes no sintetizan proteínas."
              }
            ],
            "hint": "Los pelos nos permiten sentir cosas antes de tocarlas..."
          },
          {
            "question": "¿Cuál es la segunda función de los pelos?",
            "options": [
              {
                "text": "Protección solar",
                "isCorrect": true,
                "rationale": "Los pelos proporcionan protección contra la radiación solar."
              },
              {
                "text": "Producción de melanina",
                "isCorrect": false,
                "rationale": "La melanina se produce en la epidermis."
              },
              {
                "text": "Síntesis de sebo",
                "isCorrect": false,
                "rationale": "El sebo se produce en glándulas sebáceas."
              },
              {
                "text": "Absorción de agua",
                "isCorrect": false,
                "rationale": "Los pelos no absorben agua; de hecho, la repelen."
              }
            ],
            "hint": "Nos protegen de los rayos UV..."
          },
          {
            "question": "¿Cuál es la tercera función de los pelos?",
            "options": [
              {
                "text": "Disminución de la pérdida de calor",
                "isCorrect": true,
                "rationale": "Los pelos disminuyen la pérdida de calor corporal (aislamiento)."
              },
              {
                "text": "Aumento de sudoración",
                "isCorrect": false,
                "rationale": "Los pelos no producen sudor; las glándulas sí."
              },
              {
                "text": "Fotosíntesis",
                "isCorrect": false,
                "rationale": "Los humanos no hacen fotosíntesis."
              },
              {
                "text": "Producción de glucosa",
                "isCorrect": false,
                "rationale": "Los pelos metabólicamente inertes no producen glucosa."
              }
            ],
            "hint": "Nos mantienen calientes..."
          },
          {
            "question": "¿Cuál es la cuarta función de los pelos?",
            "options": [
              {
                "text": "Proteger de partículas extrañas en nariz y oído",
                "isCorrect": true,
                "rationale": "Los pelos protegen de la entrada de partículas extrañas en cavidad nasal y conducto auditivo externo."
              },
              {
                "text": "Producir cera",
                "isCorrect": false,
                "rationale": "La cera se produce en glándulas del oído, no en los pelos."
              },
              {
                "text": "Absorber sonidos",
                "isCorrect": false,
                "rationale": "Los pelos no absorben sonidos."
              },
              {
                "text": "Secretar mucosidad",
                "isCorrect": false,
                "rationale": "Las células mucosas secretan mucosidad, no los pelos."
              }
            ],
            "hint": "Los vellos nasales y del oído filtran entrada de cosas..."
          },
          {
            "question": "¿Cuál es la quinta función de los pelos?",
            "options": [
              {
                "text": "Proteger los ojos (pestañas y cejas)",
                "isCorrect": true,
                "rationale": "Las pestañas y cejas protegen a los ojos de sudor, polvo y luz."
              },
              {
                "text": "Producir lágrimas",
                "isCorrect": false,
                "rationale": "Las lágrimas se producen en la glándula lagrimal."
              },
              {
                "text": "Regular la presión ocular",
                "isCorrect": false,
                "rationale": "Las pestañas no regulan presión intraocular."
              },
              {
                "text": "Focalizar la imagen",
                "isCorrect": false,
                "rationale": "Esa es función de la córnea y el cristalino."
              }
            ],
            "hint": "Las cejas y pestañas tienen un propósito protector...",
            "image": "imagen:funcion-protectora-pestanas-cejas"
          },
          {
            "question": "¿Dónde está ubicado el músculo erector del pelo?",
            "options": [
              {
                "text": "En el espesor de la dermis",
                "isCorrect": true,
                "rationale": "El músculo erector del pelo está en el espesor de la dermis."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "La epidermis no tiene músculos."
              },
              {
                "text": "En el tejido subcutáneo",
                "isCorrect": false,
                "rationale": "Está en la dermis, no en el tejido subcutáneo."
              },
              {
                "text": "En el hueso",
                "isCorrect": false,
                "rationale": "No está asociado al hueso directamente."
              }
            ],
            "hint": "Está entre la epidermis y el tejido subcutáneo..."
          },
          {
            "question": "¿Qué tipo de músculo es el erector del pelo?",
            "options": [
              {
                "text": "Músculo liso",
                "isCorrect": true,
                "rationale": "El músculo erector del pelo es músculo liso (involuntario)."
              },
              {
                "text": "Músculo estriado esquelético",
                "isCorrect": false,
                "rationale": "No es estriado ni voluntario."
              },
              {
                "text": "Músculo cardíaco",
                "isCorrect": false,
                "rationale": "El músculo cardíaco es exclusivo del corazón."
              },
              {
                "text": "Músculo estriado cardíaco",
                "isCorrect": false,
                "rationale": "No es cardíaco, es liso."
              }
            ],
            "hint": "No podemos controlarlo voluntariamente..."
          },
          {
            "question": "¿Cuál es el trayecto del músculo erector del pelo?",
            "options": [
              {
                "text": "Desde el folículo piloso hasta la capa papilar de la dermis",
                "isCorrect": true,
                "rationale": "El músculo erector se extiende desde el folículo piloso hasta la capa papilar."
              },
              {
                "text": "Desde la epidermis hasta el hueso",
                "isCorrect": false,
                "rationale": "No llega al hueso."
              },
              {
                "text": "Desde la piel hasta los músculos profundos",
                "isCorrect": false,
                "rationale": "Su trayecto es más superficial, dentro de la dermis."
              },
              {
                "text": "Alrededor del pelo formando un anillo",
                "isCorrect": false,
                "rationale": "No forma un anillo alrededor del pelo."
              }
            ],
            "hint": "Va desde el pelo hasta la parte superior de la dermis...",
            "image": "imagen:trayecto-músculo-erector-pelo"
          },
          {
            "question": "¿Qué produce la contracción del músculo erector del pelo?",
            "options": [
              {
                "text": "La 'piel de gallina' y erección del pelo",
                "isCorrect": true,
                "rationale": "La contracción pone la 'piel de gallina' y produce erección del pelo."
              },
              {
                "text": "La caída del pelo",
                "isCorrect": false,
                "rationale": "No produce caída, sino erección."
              },
              {
                "text": "El crecimiento del pelo",
                "isCorrect": false,
                "rationale": "No afecta el crecimiento, solo la posición."
              },
              {
                "text": "La producción de sebo",
                "isCorrect": false,
                "rationale": "No produce sebo directamente."
              }
            ],
            "hint": "Cuando tenemos frío o miedo, el pelo se 'para'..."
          },
          {
            "question": "¿Qué ocurre con la glándula sebácea cuando el músculo erector se contrae?",
            "options": [
              {
                "text": "Se comprime y vacía hacia la superficie",
                "isCorrect": true,
                "rationale": "Cuando cambia la inclinación del pelo, comprime y vacía la glándula sebácea hacia la superficie."
              },
              {
                "text": "Se detiene la producción de sebo",
                "isCorrect": false,
                "rationale": "No se detiene, se libera lo acumulado."
              },
              {
                "text": "Aumenta la producción de sebo",
                "isCorrect": false,
                "rationale": "No aumenta la producción, libera lo existente."
              },
              {
                "text": "Se produce nuevos pelos",
                "isCorrect": false,
                "rationale": "No produce nuevos pelos."
              }
            ],
            "hint": "La contracción 'aprieta' la glándula..."
          },
          {
            "question": "¿Qué sistema inerva el músculo erector del pelo?",
            "options": [
              {
                "text": "Sistema simpático",
                "isCorrect": true,
                "rationale": "El músculo erector del pelo está inervado por fibras del sistema simpático."
              },
              {
                "text": "Sistema parasimpático",
                "isCorrect": false,
                "rationale": "No es inervado por el parasimpático."
              },
              {
                "text": "Sistema nervioso central voluntario",
                "isCorrect": false,
                "rationale": "Es involuntario (autónomo), no voluntario."
              },
              {
                "text": "Sistema nervioso periférico somático",
                "isCorrect": false,
                "rationale": "No es somático, es visceral/autónomo."
              }
            ],
            "hint": "Es parte del sistema de respuesta al estrés y frío..."
          },
          {
            "question": "¿Qué estimula la contracción del músculo erector?",
            "options": [
              {
                "text": "Frío o emociones",
                "isCorrect": true,
                "rationale": "El frío o las emociones estimulan la contracción del músculo erector."
              },
              {
                "text": "Calor intenso",
                "isCorrect": false,
                "rationale": "El calor produce sudoración, no piel de gallina."
              },
              {
                "text": "Presión mecánica",
                "isCorrect": false,
                "rationale": "No responde a presión mecánica directa."
              },
              {
                "text": "Luz brillante",
                "isCorrect": false,
                "rationale": "No estimula directamente el músculo erector."
              }
            ],
            "hint": "Miedo, frío, emociones fuertes...",
            "image": "imagen:estimulos-contracción-músculo-erector"
          },
          {
            "question": "¿Dónde está AUSENTE el músculo erector del pelo?",
            "options": [
              {
                "text": "En pestañas, cejas, vibrisas, tragos y barba",
                "isCorrect": true,
                "rationale": "El músculo erector está ausente en pestañas, cejas, vibrisas, tragos y barba."
              },
              {
                "text": "En el cuero cabelludo",
                "isCorrect": false,
                "rationale": "En el cuero cabelludo SÍ existe el músculo erector."
              },
              {
                "text": "En los brazos",
                "isCorrect": false,
                "rationale": "En los vellos del brazo SÍ existe."
              },
              {
                "text": "En el tórax",
                "isCorrect": false,
                "rationale": "En el vello del tórax SÍ existe."
              }
            ],
            "hint": "Son pelos faciales especiales y de los sentidos...",
            "image": "imagen:ausencia-músculo-erector-zonas-especiales"
          },
          {
            "question": "¿Qué son las vibrisas?",
            "options": [
              {
                "text": "Pelos especializados sin músculo erector",
                "isCorrect": true,
                "rationale": "Las vibrisas son pelos donde está ausente el músculo erector del pelo."
              },
              {
                "text": "Glándulas modificadas",
                "isCorrect": false,
                "rationale": "No son glándulas, son pelos."
              },
              {
                "text": "Músculos faciales",
                "isCorrect": false,
                "rationale": "No son músculos."
              },
              {
                "text": "Células sensoriales de la nariz",
                "isCorrect": false,
                "rationale": "Son pelos, no células."
              }
            ],
            "hint": "Son pelos muy sensibles, como los de los gatos..."
          }
        ]
      },
      {
        "id": 6,
        "nombre": "Uñas",
        "preguntas": 10,
        "data": [
          {
            "question": "¿Qué son las uñas (unguis)?",
            "options": [
              {
                "text": "Estructuras producidas por la epidermis que protegen los dedos",
                "isCorrect": true,
                "rationale": "Las uñas son producidas por la epidermis y protegen el extremo distal de los dedos."
              },
              {
                "text": "Huesos pequeños de los dedos",
                "isCorrect": false,
                "rationale": "Las uñas no son huesos; son tejido epitelial queratinizado."
              },
              {
                "text": "Músculos especializados",
                "isCorrect": false,
                "rationale": "Las uñas no son músculos."
              },
              {
                "text": "Glándulas secretoras",
                "isCorrect": false,
                "rationale": "Las uñas no secretan sustancias."
              }
            ],
            "hint": "Son placas duras en las puntas de los dedos...",
            "image": "imagen:estructura-uña-protección-dedo"
          },
          {
            "question": "¿Cuál es la función principal de las uñas?",
            "options": [
              {
                "text": "Proteger el extremo distal de los dedos y aumentar resistencia a la presión",
                "isCorrect": true,
                "rationale": "Las uñas protegen el extremo distal de los dedos y aumentan la resistencia a la presión del pulpejo."
              },
              {
                "text": "Producir melanina",
                "isCorrect": false,
                "rationale": "La melanina se produce en la epidermis."
              },
              {
                "text": "Regular temperatura",
                "isCorrect": false,
                "rationale": "Las uñas no regulan temperatura."
              },
              {
                "text": "Sintetizar vitamina D",
                "isCorrect": false,
                "rationale": "La vitamina D se sintetiza en la epidermis."
              }
            ],
            "hint": "Nos protegen cuando apoyamos o golpeamos los dedos..."
          },
          {
            "question": "¿De qué están formadas las uñas?",
            "options": [
              {
                "text": "Escamas córneas aplicadas sobre el lecho ungueal",
                "isCorrect": true,
                "rationale": "Las uñas están formadas por escamas córneas que se aplican sobre el lecho ungueal."
              },
              {
                "text": "Células óseas calcificadas",
                "isCorrect": false,
                "rationale": "No son células óseas, son queratinocitos queratinizados."
              },
              {
                "text": "Tejido cartilaginoso",
                "isCorrect": false,
                "rationale": "No es cartílago; es queratina compactada."
              },
              {
                "text": "Músculo estriado",
                "isCorrect": false,
                "rationale": "No contienen tejido muscular."
              }
            ],
            "hint": "Son capas de células muertas queratinizadas..."
          },
          {
            "question": "¿Qué es el lecho ungueal?",
            "options": [
              {
                "text": "La superficie donde se aplican las escamas córneas de la uña",
                "isCorrect": true,
                "rationale": "El lecho ungueal es donde se aplican las escamas córneas que forman la uña."
              },
              {
                "text": "La punta blanca de la uña",
                "isCorrect": false,
                "rationale": "Esa es la porción libre, no el lecho."
              },
              {
                "text": "La cutícula de la base",
                "isCorrect": false,
                "rationale": "La cutícula es diferente del lecho ungueal."
              },
              {
                "text": "El músculo que mueve la uña",
                "isCorrect": false,
                "rationale": "Las uñas no tienen músculos propios."
              }
            ],
            "hint": "Es la 'piel' que está debajo de la uña visible...",
            "image": "imagen:lecho-ungeal-estructura-base"
          },
          {
            "question": "¿Qué es la raíz ungueal?",
            "options": [
              {
                "text": "La porción proximal del lecho que cubre la matriz",
                "isCorrect": true,
                "rationale": "La raíz ungueal está en la región proximal del lecho y cubre la matriz ungueal."
              },
              {
                "text": "La punta libre de la uña",
                "isCorrect": false,
                "rationale": "Esa es la porción distal, no la raíz."
              },
              {
                "text": "El centro de la uña",
                "isCorrect": false,
                "rationale": "La raíz está en la base, no en el centro."
              },
              {
                "text": "La cutícula lateral",
                "isCorrect": false,
                "rationale": "La cutícula lateral no es la raíz."
              }
            ],
            "hint": "Está en la base de la uña, bajo la piel..."
          },
          {
            "question": "¿Qué función tiene la matriz ungueal?",
            "options": [
              {
                "text": "Es responsable del crecimiento continuo de la uña",
                "isCorrect": true,
                "rationale": "La matriz ungueal es responsable del crecimiento continuo de la uña."
              },
              {
                "text": "Producir melanina",
                "isCorrect": false,
                "rationale": "La melanina de la uña (si existe) viene de la matriz, pero su función principal es el crecimiento."
              },
              {
                "text": "Regular la temperatura del dedo",
                "isCorrect": false,
                "rationale": "No tiene función termorreguladora."
              },
              {
                "text": "Secretar aceite para la uña",
                "isCorrect": false,
                "rationale": "No secreta aceite; las glándulas cercanas sí."
              }
            ],
            "hint": "Es donde se 'fabrica' la uña nueva...",
            "image": "imagen:matriz-ungeal-crecimiento"
          },
          {
            "question": "¿Hasta dónde se extiende la matriz ungueal?",
            "options": [
              {
                "text": "Hasta el arco de la lúnula",
                "isCorrect": true,
                "rationale": "La matriz ungueal se extiende hasta el arco de la lúnula (la zona blanquecina en la base)."
              },
              {
                "text": "Hasta la punta de la uña",
                "isCorrect": false,
                "rationale": "La matriz no llega hasta la punta; la uña crece hacia allí."
              },
              {
                "text": "Solo bajo la cutícula",
                "isCorrect": false,
                "rationale": "Se extiende más allá, hasta la lúnula visible."
              },
              {
                "text": "Por toda la uña",
                "isCorrect": false,
                "rationale": "No, solo está en la porción proximal."
              }
            ],
            "hint": "La lúnula blanca marca el límite de la matriz..."
          },
          {
            "question": "¿Qué es el arco de la lúnula?",
            "options": [
              {
                "text": "La zona hasta donde se extiende la matriz ungueal",
                "isCorrect": true,
                "rationale": "El arco de la lúnula marca hasta dónde se extiende la matriz ungueal."
              },
              {
                "text": "La punta de la uña",
                "isCorrect": false,
                "rationale": "La punta es la porción libre, no la lúnula."
              },
              {
                "text": "La cutícula de la uña",
                "isCorrect": false,
                "rationale": "La cutícula es la piel que cubre la base, no la lúnula."
              },
              {
                "text": "El borde lateral de la uña",
                "isCorrect": false,
                "rationale": "La lúnula está en el centro de la base, no a los lados."
              }
            ],
            "hint": "Es la zona blanquecina en la base de la uña...",
            "image": "imagen:lunula-arco-matriz-ungeal"
          },
          {
            "question": "¿Qué es la placa ungueal?",
            "options": [
              {
                "text": "La uña propiamente dicha, formada por escamas córneas",
                "isCorrect": true,
                "rationale": "La placa ungueal es la uña visible, formada por escamas córneas aplicadas."
              },
              {
                "text": "El lecho bajo la uña",
                "isCorrect": false,
                "rationale": "El lecho es la piel de soporte, no la placa."
              },
              {
                "text": "La cutícula alrededor",
                "isCorrect": false,
                "rationale": "La cutícula es tejido dérmico, no la placa."
              },
              {
                "text": "El músculo del dedo",
                "isCorrect": false,
                "rationale": "No es músculo; es tejido queratinizado."
              }
            ],
            "hint": "Es la parte dura y visible de la uña..."
          },
          {
            "question": "¿Qué es el hiponiquio?",
            "options": [
              {
                "text": "Porción de epidermis cubierta por la placa ungueal en la parte distal",
                "isCorrect": true,
                "rationale": "El hiponiquio es la porción de epidermis cubierta por la placa ungueal ubicada más distal."
              },
              {
                "text": "La base de la uña",
                "isCorrect": false,
                "rationale": "La base tiene la lúnula y matriz, no el hiponiquio."
              },
              {
                "text": "El centro de la uña",
                "isCorrect": false,
                "rationale": "El hiponiquio está en la punta, no en el centro."
              },
              {
                "text": "La cutícula lateral",
                "isCorrect": false,
                "rationale": "No es cutícula; es epidermis bajo la punta de la uña."
              }
            ],
            "hint": "Está en la punta del dedo, bajo el borde libre de la uña...",
            "image": "imagen:hiponiquio-ubicacion-distal"
          }
        ]
      },
      {
        "id": 7,
        "nombre": "Tejido Subcutáneo",
        "preguntas": 12,
        "data": [
          {
            "question": "¿Qué es el tejido subcutáneo (hipodermis)?",
            "options": [
              {
                "text": "Tejido ubicado profundo a la dermis, compuesto por conectivo laxo",
                "isCorrect": true,
                "rationale": "El tejido subcutáneo está profundo a la dermis y está compuesto mayormente por tejido conectivo laxo."
              },
              {
                "text": "La capa más superficial de la piel",
                "isCorrect": false,
                "rationale": "La más superficial es la epidermis."
              },
              {
                "text": "Una glándula de la piel",
                "isCorrect": false,
                "rationale": "No es una glándula; es una capa de tejido."
              },
              {
                "text": "Un músculo de la piel",
                "isCorrect": false,
                "rationale": "La hipodermis es tejido conectivo y adiposo, no músculo."
              }
            ],
            "hint": "Es la capa de grasa y tejido laxo debajo de la piel...",
            "image": "imagen:tejido-subcutaneo-hipodermis-ubicacion"
          },
          {
            "question": "¿Qué contiene el tejido subcutáneo?",
            "options": [
              {
                "text": "Porciones profundas de anexos, conectivo laxo, vasos y nervios",
                "isCorrect": true,
                "rationale": "El tejido subcutáneo contiene porciones profundas de anexos cutáneos, tejido conectivo laxo, vasos y nervios."
              },
              {
                "text": "Solo células epiteliales",
                "isCorrect": false,
                "rationale": "Las células epiteliales están en la epidermis."
              },
              {
                "text": "Solo músculos estriados",
                "isCorrect": false,
                "rationale": "No contiene músculos estriados."
              },
              {
                "text": "Solo vasos linfáticos",
                "isCorrect": false,
                "rationale": "Contiene vasos sanguíneos y nervios también."
              }
            ],
            "hint": "Es una capa de transición con varios componentes..."
          },
          {
            "question": "¿Qué es el panículo adiposo?",
            "options": [
              {
                "text": "La capa más superficial del tejido subcutáneo, principal almacén de grasa",
                "isCorrect": true,
                "rationale": "El panículo adiposo es la capa más superficial del tejido subcutáneo y el principal almacén de tejido adiposo del cuerpo."
              },
              {
                "text": "Una glándula sudorípara",
                "isCorrect": false,
                "rationale": "No es una glándula; es tejido adiposo."
              },
              {
                "text": "La capa más profunda del tejido subcutáneo",
                "isCorrect": false,
                "rationale": "Es la más superficial, no la más profunda."
              },
              {
                "text": "Un músculo de la piel",
                "isCorrect": false,
                "rationale": "No es músculo; es tejido graso."
              }
            ],
            "hint": "Es la 'gordura' que está justo debajo de la piel...",
            "image": "imagen:paniculo-adiposo-capa-superficial"
          },
          {
            "question": "¿Cómo varía el espesor del panículo adiposo?",
            "options": [
              {
                "text": "Varía con el estado nutricional",
                "isCorrect": true,
                "rationale": "El grosor del panículo adiposo varía según el estado nutricional de la persona."
              },
              {
                "text": "Es constante en todo el cuerpo",
                "isCorrect": false,
                "rationale": "No es constante; varía por región y nutrición."
              },
              {
                "text": "Solo varía con la edad",
                "isCorrect": false,
                "rationale": "Varía principalmente con nutrición, aunque la edad también influye."
              },
              {
                "text": "No varía nunca",
                "isCorrect": false,
                "rationale": "Sí varía considerablemente."
              }
            ],
            "hint": "Aumenta cuando engordamos y disminuye cuando adelgazamos..."
          },
          {
            "question": "¿Cómo está estructurado el panículo adiposo?",
            "options": [
              {
                "text": "Dividido en lobulillos separados por tabiques de tejido fibroso",
                "isCorrect": true,
                "rationale": "El panículo adiposo está dividido en lobulillos separados por tabiques de tejido fibroso que contienen vasos."
              },
              {
                "text": "Como una masa sólida sin divisiones",
                "isCorrect": false,
                "rationale": "No es sólido; está lobulillado."
              },
              {
                "text": "Como una red de músculos",
                "isCorrect": false,
                "rationale": "No es tejido muscular; es adiposo."
              },
              {
                "text": "Como una capa uniforme de células iguales",
                "isCorrect": false,
                "rationale": "Está dividido en lobulillos, no es uniforme."
              }
            ],
            "hint": "Está dividido en 'compartimentos' pequeños...",
            "image": "imagen:lobulillos-paniculo-tabiques-fibrosos"
          },
          {
            "question": "¿Qué son los tabiques de tejido fibroso del panículo adiposo?",
            "options": [
              {
                "text": "Estructuras que separan lobulillos y contienen vasos",
                "isCorrect": true,
                "rationale": "Los tabiques de tejido fibroso separan los lobulillos y en ellos se encuentran los vasos."
              },
              {
                "text": "Células grasas",
                "isCorrect": false,
                "rationale": "No son células; son tejido conectivo."
              },
              {
                "text": "Nervios sensoriales",
                "isCorrect": false,
                "rationale": "Aunque pueden contener nervios, su función principal es separar lobulillos."
              },
              {
                "text": "Glándulas sudoríparas",
                "isCorrect": false,
                "rationale": "No son glándulas; son tejido fibroso."
              }
            ],
            "hint": "Son paredes divisorias que contienen vasos sanguíneos..."
          },
          {
            "question": "¿Qué son los ligamentos cutáneos (retinacula cutis)?",
            "options": [
              {
                "text": "Estructuras que fijan la piel a planos profundos atravesando el tejido subcutáneo",
                "isCorrect": true,
                "rationale": "Los ligamentos cutáneos atraviesan el tejido subcutáneo y fijan la piel a los planos profundos."
              },
              {
                "text": "Músculos que mueven la piel",
                "isCorrect": false,
                "rationale": "No son músculos; son ligamentos de tejido conectivo."
              },
              {
                "text": "Nervios sensitivos de la piel",
                "isCorrect": false,
                "rationale": "No son nervios; son estructuras de sostén."
              },
              {
                "text": "Vasos sanguíneos",
                "isCorrect": false,
                "rationale": "No son vasos; son bandas de tejido fibroso."
              }
            ],
            "hint": "Mantienen la piel unida a lo que está debajo...",
            "image": "imagen:ligamentos-cutaneos-retinacula-fijacion"
          },
          {
            "question": "¿Cuál es el efecto de ligamentos largos y escasos?",
            "options": [
              {
                "text": "Piel móvil",
                "isCorrect": true,
                "rationale": "Ligamentos largos y escasos permiten que la piel sea móvil."
              },
              {
                "text": "Piel fija",
                "isCorrect": false,
                "rationale": "Eso lo producen ligamentos cortos y abundantes."
              },
              {
                "text": "Piel gruesa",
                "isCorrect": false,
                "rationale": "El espesor no depende de los ligamentos."
              },
              {
                "text": "Piel más pigmentada",
                "isCorrect": false,
                "rationale": "La pigmentación no está relacionada con los ligamentos."
              }
            ],
            "hint": "Menos anclas = más movilidad..."
          },
          {
            "question": "¿Cuál es el efecto de ligamentos cortos y abundantes?",
            "options": [
              {
                "text": "Piel fija",
                "isCorrect": true,
                "rationale": "Ligamentos cortos y abundantes hacen que la piel sea fija."
              },
              {
                "text": "Piel móvil",
                "isCorrect": false,
                "rationale": "La piel móvil resulta de ligamentos largos y escasos."
              },
              {
                "text": "Piel delgada",
                "isCorrect": false,
                "rationale": "El espesor no depende de los ligamentos."
              },
              {
                "text": "Mayor sudoración",
                "isCorrect": false,
                "rationale": "La sudoración no está relacionada con los ligamentos."
              }
            ],
            "hint": "Muchas anclas = menos movilidad..."
          },
          {
            "question": "¿Cuál es un ejemplo de ligamentos cutáneos muy desarrollados?",
            "options": [
              {
                "text": "Ligamentos suspensorios de la mama",
                "isCorrect": true,
                "rationale": "Los ligamentos suspensorios de la mama (Cooper) son un ejemplo de ligamentos cutáneos muy desarrollados."
              },
              {
                "text": "Tendones del brazo",
                "isCorrect": false,
                "rationale": "Los tendones unen músculo a hueso, no son ligamentos cutáneos."
              },
              {
                "text": "Ligamentos de las articulaciones",
                "isCorrect": false,
                "rationale": "Los ligamentos articulares son diferentes; unen huesos."
              },
              {
                "text": "Fascia muscular",
                "isCorrect": false,
                "rationale": "La fascia es diferente de los ligamentos cutáneos específicos."
              }
            ],
            "hint": "En el pecho hay ligamentos que sostienen el tejido glandular...",
            "image": "imagen:ligamentos-suspensorios-mama"
          },
          {
            "question": "¿Cuál es la primera función del tejido subcutáneo?",
            "options": [
              {
                "text": "Termorregulación como aislante térmico",
                "isCorrect": true,
                "rationale": "El tejido subcutáneo actúa como aislante térmico, reteniendo el calor corporal."
              },
              {
                "text": "Producción de melanina",
                "isCorrect": false,
                "rationale": "La melanina se produce en la epidermis."
              },
              {
                "text": "Síntesis de vitamina D",
                "isCorrect": false,
                "rationale": "La vitamina D se sintetiza en la epidermis."
              },
              {
                "text": "Protección UV",
                "isCorrect": false,
                "rationale": "La protección UV es función de la melanina en la epidermis."
              }
            ],
            "hint": "La grasa retiene el calor..."
          },
          {
            "question": "¿Cuál es la segunda función del tejido subcutáneo?",
            "options": [
              {
                "text": "Amortiguar compresiones sobre eminencias óseas",
                "isCorrect": true,
                "rationale": "El tejido subcutáneo amortigua las compresiones producidas por el apoyo sobre eminencias óseas."
              },
              {
                "text": "Producir pelos",
                "isCorrect": false,
                "rationale": "Los pelos se originan en la epidermis."
              },
              {
                "text": "Secretar sudor",
                "isCorrect": false,
                "rationale": "El sudor se produce en glándulas sudoríparas."
              },
              {
                "text": "Fijar músculos a huesos",
                "isCorrect": false,
                "rationale": "Esa es función de los tendones."
              }
            ],
            "hint": "Actúa como colchón cuando nos apoyamos..."
          }
        ]
      },
      {
        "id": 8,
        "nombre": "Vascularización/Inervación",
        "preguntas": 18,
        "data": [
          {
            "question": "¿Qué son las anastomosis arteriovenosas?",
            "options": [
              {
                "text": "Conexiones entre arterias y venas en capas profundas de la dermis",
                "isCorrect": true,
                "rationale": "Las anastomosis arteriovenosas son conexiones directas entre arterias y venas en capas profundas de la dermis."
              },
              {
                "text": "Nervios sensitivos de la piel",
                "isCorrect": false,
                "rationale": "No son nervios; son conexiones vasculares."
              },
              {
                "text": "Glándulas sudoríparas",
                "isCorrect": false,
                "rationale": "No son glándulas."
              },
              {
                "text": "Células de la epidermis",
                "isCorrect": false,
                "rationale": "No son células epiteliales."
              }
            ],
            "hint": "Permiten que la sangre circule directamente de arterias a venas...",
            "image": "imagen:anastomosis-arteriovenosas-conexion"
          },
          {
            "question": "¿Cuál es la función de las anastomosis arteriovenosas cuando están permeables?",
            "options": [
              {
                "text": "Reducen la circulación superficial evitando pérdida de calor",
                "isCorrect": true,
                "rationale": "Cuando están permeables, reducen la circulación en plexos superficiales, evitando pérdida de calor."
              },
              {
                "text": "Aumentan la sudoración",
                "isCorrect": false,
                "rationale": "No están directamente relacionadas con sudoración."
              },
              {
                "text": "Producen melanina",
                "isCorrect": false,
                "rationale": "No producen pigmento."
              },
              {
                "text": "Fijan la piel a planos profundos",
                "isCorrect": false,
                "rationale": "Esa es función de los ligamentos."
              }
            ],
            "hint": "Son un mecanismo de shunt para controlar temperatura..."
          },
          {
            "question": "¿Dónde se ubican los capilares linfáticos de la piel?",
            "options": [
              {
                "text": "En la región profunda de la capa papilar de la dermis",
                "isCorrect": true,
                "rationale": "Los capilares linfáticos se ubican en la región profunda de la capa papilar."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "La epidermis no tiene vasos linfáticos."
              },
              {
                "text": "En el estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo no tiene estructuras vivas."
              },
              {
                "text": "En el tejido óseo",
                "isCorrect": false,
                "rationale": "No están en el hueso."
              }
            ],
            "hint": "Están en la dermis papilar, cerca de los vasos sanguíneos..."
          },
          {
            "question": "¿Qué proporción de inervación tiene la piel?",
            "options": [
              {
                "text": "Mayoritariamente sensitiva (aferente)",
                "isCorrect": true,
                "rationale": "La inervación de la piel es mayoritariamente sensitiva (aferente), con simpática en menor proporción."
              },
              {
                "text": "Exclusivamente motora",
                "isCorrect": false,
                "rationale": "No es exclusivamente motora; es principalmente sensitiva."
              },
              {
                "text": "Solamente autónoma simpática",
                "isCorrect": false,
                "rationale": "Aunque hay simpática, la mayor parte es sensitiva."
              },
              {
                "text": "Únicamente parasimpática",
                "isCorrect": false,
                "rationale": "La parasimpática no inerva la piel de forma significativa."
              }
            ],
            "hint": "La piel es principalmente un órgano de los sentidos..."
          },
          {
            "question": "¿Dónde se encuentran los epiteliocitos táctiles (células de Merkel)?",
            "options": [
              {
                "text": "En la porción profunda de la epidermis",
                "isCorrect": true,
                "rationale": "Los epiteliocitos táctiles (células de Merkel) están en la porción profunda de la epidermis."
              },
              {
                "text": "En la capa reticular de la dermis",
                "isCorrect": false,
                "rationale": "Están en la epidermis, no en la dermis reticular."
              },
              {
                "text": "En el tejido subcutáneo",
                "isCorrect": false,
                "rationale": "No están tan profundos."
              },
              {
                "text": "En el estrato córneo",
                "isCorrect": false,
                "rationale": "El estrato córneo tiene células muertas."
              }
            ],
            "hint": "Son receptores táctiles en la base de la epidermis...",
            "image": "imagen:epiteliocitos-tactiles-merkel-ubicacion"
          },
          {
            "question": "¿Dónde se encuentra el corpúsculo táctil ovoideo de Meissner?",
            "options": [
              {
                "text": "En la capa papilar de la dermis",
                "isCorrect": true,
                "rationale": "El corpúsculo de Meissner es un receptor táctil ubicado en la capa papilar de la dermis."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "Está en la dermis papilar, no en la epidermis."
              },
              {
                "text": "En el tejido subcutáneo",
                "isCorrect": false,
                "rationale": "En el tejido subcutáneo está el corpúsculo de Pacini."
              },
              {
                "text": "En el hueso",
                "isCorrect": false,
                "rationale": "No está en el hueso."
              }
            ],
            "hint": "Es un receptor de discriminación táctil fina en las yemas de los dedos...",
            "image": "imagen:corpúsculo-meissner-receptor-tactil"
          },
          {
            "question": "¿Dónde se encuentra el corpúsculo lamelar de Pacini?",
            "options": [
              {
                "text": "En el tejido subcutáneo",
                "isCorrect": true,
                "rationale": "El corpúsculo de Pacini es un receptor ubicado en el tejido subcutáneo."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "No está en la epidermis."
              },
              {
                "text": "En la capa papilar",
                "isCorrect": false,
                "rationale": "Ahí está el corpúsculo de Meissner."
              },
              {
                "text": "En el estrato córneo",
                "isCorrect": false,
                "rationale": "No está en el estrato córneo."
              }
            ],
            "hint": "Es un receptor de presión profunda, muy sensible a vibraciones...",
            "image": "imagen:corpúsculo-pacini-tejido-subcutaneo"
          },
          {
            "question": "¿Qué destina la inervación simpática (eferente) en la piel?",
            "options": [
              {
                "text": "Músculos erectores del pelo, glándulas sudoríparas y vasos",
                "isCorrect": true,
                "rationale": "La inervación simpática se destina a músculos erectores de pelos, glándulas sudoríparas y vasos sanguíneos."
              },
              {
                "text": "Receptores táctiles",
                "isCorrect": false,
                "rationale": "Los receptores táctiles son inervados por fibras sensitivas, no simpáticas."
              },
              {
                "text": "Células de Merkel",
                "isCorrect": false,
                "rationale": "Las células de Merkel reciben inervación sensitiva."
              },
              {
                "text": "Melanocitos",
                "isCorrect": false,
                "rationale": "Los melanocitos no están inervados por el simpático."
              }
            ],
            "hint": "Controla funciones 'automáticas' como sudoración y piel de gallina..."
          },
          {
            "question": "¿Dónde están los cuerpos neuronales de las fibras nerviosas sensitivas somáticas?",
            "options": [
              {
                "text": "En el ganglio espinal correspondiente",
                "isCorrect": true,
                "rationale": "Los cuerpos neuronales de las fibras sensitivas están en los ganglios espinales."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "No hay cuerpos neuronales en la epidermis."
              },
              {
                "text": "En el corazón",
                "isCorrect": false,
                "rationale": "Los ganglios espinales están en la médula espinal."
              },
              {
                "text": "En el cerebro",
                "isCorrect": false,
                "rationale": "Los cuerpos de las neuronas sensitivas periféricas están en ganglios espinales."
              }
            ],
            "hint": "Son pseudounipolares ubicados a los lados de la médula espinal..."
          },
          {
            "question": "¿Qué son las arterias musculocutáneas y fasciocutáneas?",
            "options": [
              {
                "text": "Arterias que atraviesan la fascia y penetran en el tejido subcutáneo",
                "isCorrect": true,
                "rationale": "Las arterias musculocutáneas y fasciocutáneas atraviesan la fascia de revestimiento y penetran en el tejido subcutáneo."
              },
              {
                "text": "Arterias del corazón",
                "isCorrect": false,
                "rationale": "No son arterias coronarias."
              },
              {
                "text": "Arterias exclusivas de los músculos",
                "isCorrect": false,
                "rationale": "Atraviesan hacia la piel, no son solo musculares."
              },
              {
                "text": "Venias de la dermis",
                "isCorrect": false,
                "rationale": "Son arterias, no venas."
              }
            ],
            "hint": "Traen sangre desde músculos y fascias hacia la piel...",
            "image": "imagen:arterias-musculocutaneas-trayecto"
          },
          {
            "question": "¿Dónde se ubica el plexo arterial dérmico profundo?",
            "options": [
              {
                "text": "En el nivel profundo de la capa reticular de la dermis",
                "isCorrect": true,
                "rationale": "El plexo arterial dérmico profundo está en el nivel profundo de la capa reticular."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "La epidermis no tiene vasos."
              },
              {
                "text": "En la capa papilar superficial",
                "isCorrect": false,
                "rationale": "Hay otro plexo más superficial."
              },
              {
                "text": "En el tejido óseo",
                "isCorrect": false,
                "rationale": "No está en el hueso."
              }
            ],
            "hint": "Está en la parte profunda de la dermis reticular..."
          },
          {
            "question": "¿Dónde se ubica el plexo arterial subpapilar?",
            "options": [
              {
                "text": "Entre las capas papilar y reticular de la dermis",
                "isCorrect": true,
                "rationale": "El plexo subpapilar está entre las capas papilar y reticular."
              },
              {
                "text": "Solo en la capa papilar",
                "isCorrect": false,
                "rationale": "Está en la unión entre ambas capas."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "No está en la epidermis."
              },
              {
                "text": "En el tejido subcutáneo profundo",
                "isCorrect": false,
                "rationale": "Está en la dermis, no en tejido subcutáneo."
              }
            ],
            "hint": "Está justo debajo de la capa papilar..."
          },
          {
            "question": "¿Qué son las asas capilares intrapapilares?",
            "options": [
              {
                "text": "Estructuras vasculares que se originan del plexo subpapilar",
                "isCorrect": true,
                "rationale": "Las asas capilares intrapapilares se originan del plexo arterial subpapilar y suben por las papilas."
              },
              {
                "text": "Nervios sensitivos de las papilas",
                "isCorrect": false,
                "rationale": "Son estructuras vasculares, no nerviosas."
              },
              {
                "text": "Glándulas sudoríparas en las papilas",
                "isCorrect": false,
                "rationale": "No son glándulas."
              },
              {
                "text": "Células de la epidermis",
                "isCorrect": false,
                "rationale": "Son vasos sanguíneos."
              }
            ],
            "hint": "Son los capilares en forma de asa que suben por las papilas dérmicas...",
            "image": "imagen:asas-capilares-intrapapilares-origen"
          },
          {
            "question": "¿Dónde se encuentra el corpúsculo sensitivo fusiforme de Ruffini?",
            "options": [
              {
                "text": "En la capa reticular de la dermis",
                "isCorrect": true,
                "rationale": "El corpúsculo de Ruffini es un receptor ubicado en la capa reticular de la dermis."
              },
              {
                "text": "En la capa papilar",
                "isCorrect": false,
                "rationale": "Ahí está el corpúsculo de Meissner."
              },
              {
                "text": "En el tejido subcutáneo",
                "isCorrect": false,
                "rationale": "Ahí está el corpúsculo de Pacini."
              },
              {
                "text": "En la epidermis",
                "isCorrect": false,
                "rationale": "No está en la epidermis."
              }
            ],
            "hint": "Es un receptor de estiramiento y presión en la dermis profunda...",
            "image": "imagen:corpúsculo-ruffini-capa-reticular"
          },
          {
            "question": "¿Dónde se encuentra el bulbo terminal de Krause?",
            "options": [
              {
                "text": "En la capa reticular de la dermis",
                "isCorrect": true,
                "rationale": "El bulbo terminal de Krause es un receptor ubicado en la capa reticular de la dermis."
              },
              {
                "text": "En la capa papilar",
                "isCorrect": false,
                "rationale": "No está en la capa papilar."
              },
              {
                "text": "En el estrato córneo",
                "isCorrect": false,
                "rationale": "No está en la epidermis."
              },
              {
                "text": "En el hueso",
                "isCorrect": false,
                "rationale": "No está en el hueso."
              }
            ],
            "hint": "Se encuentra en la dermis reticular, similar al de Ruffini..."
          },
          {
            "question": "¿Qué son las terminaciones peritriciales?",
            "options": [
              {
                "text": "Terminaciones nerviosas en espiral alrededor de los pelos",
                "isCorrect": true,
                "rationale": "Las terminaciones peritriciales son terminaciones nerviosas en espiral que rodean los pelos."
              },
              {
                "text": "Glándulas alrededor de los folículos",
                "isCorrect": false,
                "rationale": "No son glándulas, son terminaciones nerviosas."
              },
              {
                "text": "Vasos sanguíneos del bulbo piloso",
                "isCorrect": false,
                "rationale": "No son vasos, son nervios."
              },
              {
                "text": "Músculos que rodean el pelo",
                "isCorrect": false,
                "rationale": "El músculo erector es único, no son terminaciones."
              }
            ],
            "hint": "Son receptores sensitivos que rodean los pelos en espiral...",
            "image": "imagen:terminaciones-peritriciales-espiral-pelo"
          },
          {
            "question": "¿Qué es la red linfocapilar profunda de la piel?",
            "options": [
              {
                "text": "Red de capilares linfáticos en la región profunda de la capa papilar",
                "isCorrect": true,
                "rationale": "La red linfocapilar profunda de la piel se ubica en la región profunda de la capa papilar de la dermis."
              },
              {
                "text": "Vasos sanguíneos arteriales",
                "isCorrect": false,
                "rationale": "Son linfáticos, no arteriales."
              },
              {
                "text": "Nervios sensitivos de la epidermis",
                "isCorrect": false,
                "rationale": "No son nervios, son vasos linfáticos."
              },
              {
                "text": "Glándulas sudoríparas profundas",
                "isCorrect": false,
                "rationale": "No son glándulas, son vasos."
              }
            ],
            "hint": "Es una red de drenaje linfático en la dermis papilar profunda...",
            "image": "imagen:red-linfocapilar-profunda-dermis"
          },
          {
            "question": "¿Qué son las redes linfáticas subcutáneas?",
            "options": [
              {
                "text": "Redes de vasos linfáticos desde donde se conduce la linfa",
                "isCorrect": true,
                "rationale": "Las redes linfáticas subcutáneas son el punto desde donde la linfa es conducida hacia estructuras más profundas."
              },
              {
                "text": "Arterias del tejido subcutáneo",
                "isCorrect": false,
                "rationale": "Son linfáticas, no arterias."
              },
              {
                "text": "Nervios del sistema simpático",
                "isCorrect": false,
                "rationale": "No son nervios, son vasos linfáticos."
              },
              {
                "text": "Células adiposas organizadas",
                "isCorrect": false,
                "rationale": "No son células grasas, son vasos."
              }
            ],
            "hint": "Son el punto de partida del drenaje linfático desde el tejido subcutáneo...",
            "image": "imagen:redes-linfaticas-subcutaneas-drenaje"
          }
        ]
      },
      {
        "id": 9,
        "nombre": "Patologías + Mama",
        "preguntas": 13,
        "data": [
          {
            "question": "¿Qué es una herida de la piel?",
            "options": [
              {
                "text": "Lesión traumática con solución de continuidad de los tegumentos",
                "isCorrect": true,
                "rationale": "Una herida es una lesión traumática de la piel con solución de continuidad."
              },
              {
                "text": "Una infección bacteriana",
                "isCorrect": false,
                "rationale": "No es necesariamente infecciosa; es una lesión física."
              },
              {
                "text": "Una mancha de nacimiento",
                "isCorrect": false,
                "rationale": "No es congénita; es traumática."
              },
              {
                "text": "Una glándula inflamada",
                "isCorrect": false,
                "rationale": "No es una glándula; es una lesión del tejido."
              }
            ],
            "hint": "Es cuando la piel se rompe por algún trauma..."
          },
          {
            "question": "¿Qué es una herida incisa o cortante?",
            "options": [
              {
                "text": "Producida por instrumento con filo como cuchillo o navaja",
                "isCorrect": true,
                "rationale": "La herida incisa es producida por un instrumento con filo (cuchillo, navaja)."
              },
              {
                "text": "Producida por un golpe contuso",
                "isCorrect": false,
                "rationale": "Eso es una herida contusa."
              },
              {
                "text": "Causada por una quemadura",
                "isCorrect": false,
                "rationale": "Las quemaduras son otro tipo de lesión."
              },
              {
                "text": "Por mordedura de animal",
                "isCorrect": false,
                "rationale": "Aunque corta, se clasifica de forma diferente."
              }
            ],
            "hint": "Tiene bordes limpios y es causada por algo afilado..."
          },
          {
            "question": "¿Qué es una herida punzante?",
            "options": [
              {
                "text": "Producida por elemento con punta aguda como puñal o aguja",
                "isCorrect": true,
                "rationale": "La herida punzante es producida por un elemento con punta aguda (puñal, aguja, punzón)."
              },
              {
                "text": "Causada por un martillo",
                "isCorrect": false,
                "rationale": "Eso es contusa."
              },
              {
                "text": "Por fricción con el suelo",
                "isCorrect": false,
                "rationale": "Esa sería excoriación o abrasión."
              },
              {
                "text": "Por cuchillo",
                "isCorrect": false,
                "rationale": "El cuchillo produce herida incisa, no punzante principalmente."
              }
            ],
            "hint": "Es profunda y estrecha, hecha por algo puntiagudo..."
          },
          {
            "question": "¿Qué es una herida contusa?",
            "options": [
              {
                "text": "Producida por golpe de elemento romo como martillo",
                "isCorrect": true,
                "rationale": "La herida contusa es producida por el golpe de un elemento romo (martillo, maza)."
              },
              {
                "text": "Causada por un corte limpio",
                "isCorrect": false,
                "rationale": "Eso es incisa."
              },
              {
                "text": "Por una aguja",
                "isCorrect": false,
                "rationale": "Eso es punzante."
              },
              {
                "text": "Por radiación solar",
                "isCorrect": false,
                "rationale": "Eso es quemadura."
              }
            ],
            "hint": "Presenta equimosis (morados) por daño vascular..."
          },
          {
            "question": "¿Qué es una herida desgarrante?",
            "options": [
              {
                "text": "Lesión que separa tegumentos de forma anfractuosa",
                "isCorrect": true,
                "rationale": "La herida desgarrante separa los tegumentos de forma anfractuosa o irregular."
              },
              {
                "text": "Corte limpio y recto",
                "isCorrect": false,
                "rationale": "Los bordes son irregulares, no limpios."
              },
              {
                "text": "Herida pequeña y puntiforme",
                "isCorrect": false,
                "rationale": "Suele ser más extensa."
              },
              {
                "text": "Sin sangrado",
                "isCorrect": false,
                "rationale": "Suelen sangrar por el desgarro vascular."
              }
            ],
            "hint": "Los bordes son irregulares y desgarrados..."
          },
          {
            "question": "¿Qué es la cicatrización por primera intención?",
            "options": [
              {
                "text": "Curación con aproximación de bordes por sutura o adhesivos",
                "isCorrect": true,
                "rationale": "La cicatrización por primera intención ocurre cuando se logra la aproximación de bordes mediante sutura o adhesivos."
              },
              {
                "text": "Curación sin unir los bordes",
                "isCorrect": false,
                "rationale": "Eso es segunda intención."
              },
              {
                "text": "Formación de cicatriz queloide",
                "isCorrect": false,
                "rationale": "No es la definición de primera intención."
              },
              {
                "text": "Infección de la herida",
                "isCorrect": false,
                "rationale": "La infección complica la cicatrización."
              }
            ],
            "hint": "Cuando los bordes de la herida se unen quirúrgicamente..."
          },
          {
            "question": "¿Qué es la cicatrización por segunda intención?",
            "options": [
              {
                "text": "Curación sin que se haya logrado la aposición de bordes",
                "isCorrect": true,
                "rationale": "La segunda intención es cuando la herida cura sin aposición previa de sus bordes."
              },
              {
                "text": "Curación con suturas",
                "isCorrect": false,
                "rationale": "Eso es primera intención."
              },
              {
                "text": "Formación de cicatriz plana",
                "isCorrect": false,
                "rationale": "Las cicatrices de segunda intención suelen ser más grandes."
              },
              {
                "text": "Ausencia de cicatriz",
                "isCorrect": false,
                "rationale": "Siempre hay cicatrización, aunque sea diferente."
              }
            ],
            "hint": "Cuando la herida secura dejada abierta, sin unir los bordes..."
          },
          {
            "question": "¿Qué son las estrías cutáneas?",
            "options": [
              {
                "text": "Lesiones por ruptura de fibras elásticas por estiramiento excesivo",
                "isCorrect": true,
                "rationale": "Las estrías se producen por ruptura de fibras elásticas como consecuencia del estiramiento excesivo."
              },
              {
                "text": "Infecciones de la piel",
                "isCorrect": false,
                "rationale": "No son infecciosas."
              },
              {
                "text": "Cicatrices quirúrgicas",
                "isCorrect": false,
                "rationale": "Son por estramiento, no por corte."
              },
              {
                "text": "Manchas de nacimiento",
                "isCorrect": false,
                "rationale": "Son adquiridas, no congénitas."
              }
            ],
            "hint": "Aparecen en el abdomen, muslos, mamas por estiramiento...",
            "image": "imagen:estrias-cutaneas-evolucion-colores"
          },
          {
            "question": "¿Cuál es la evolución cromática de las estrías?",
            "options": [
              {
                "text": "Rosadas → púrpuras → blancas",
                "isCorrect": true,
                "rationale": "Las estrías evolucionan de rosadas (inicial) a púrpuras y finalmente blancas."
              },
              {
                "text": "Blancas → rojas → negras",
                "isCorrect": false,
                "rationale": "El orden de colores es incorrecto."
              },
              {
                "text": "Azules → verdes → amarillas",
                "isCorrect": false,
                "rationale": "No corresponde a la evolución de las estrías."
              },
              {
                "text": "Negras → grises → blancas",
                "isCorrect": false,
                "rationale": "No es la secuencia correcta."
              }
            ],
            "hint": "Inicialmente son inflamatorias (rosas), luego maduran (blancas)..."
          },
          {
            "question": "¿Qué es una quemadura?",
            "options": [
              {
                "text": "Lesión producida por agentes físicos, químicos o biológicos en tejidos vivos",
                "isCorrect": true,
                "rationale": "La quemadura es lesión producida en tejidos vivos por agentes físicos, químicos o biológicos."
              },
              {
                "text": "Una infección viral",
                "isCorrect": false,
                "rationale": "No es infecciosa por definición."
              },
              {
                "text": "Una reacción alérgica",
                "isCorrect": false,
                "rationale": "Aunque puede haber eritema, no es alérgica."
              },
              {
                "text": "Una mancha de pigmento",
                "isCorrect": false,
                "rationale": "Es una lesión de destrucción tisular, no solo mancha."
              }
            ],
            "hint": "Causa daño por calor, productos químicos, electricidad o radiación..."
          },
          {
            "question": "¿Cuánto representa el 1% de la superficie corporal según la regla de los 9?",
            "options": [
              {
                "text": "La región perineal",
                "isCorrect": true,
                "rationale": "La región perineal representa el 1% de la superficie corporal según la regla de los 9."
              },
              {
                "text": "La cabeza",
                "isCorrect": false,
                "rationale": "La cabeza es 9%."
              },
              {
                "text": "Un brazo",
                "isCorrect": false,
                "rationale": "Cada brazo es 9%."
              },
              {
                "text": "El tronco anterior",
                "isCorrect": false,
                "rationale": "El tronco anterior es 18%."
              }
            ],
            "hint": "La zona más pequeña medida por esta regla es el periné..."
          },
          {
            "question": "¿Cuánto representa cada miembro superior según la regla de los 9?",
            "options": [
              {
                "text": "9%",
                "isCorrect": true,
                "rationale": "Cada miembro superior representa el 9% de la superficie corporal."
              },
              {
                "text": "18%",
                "isCorrect": false,
                "rationale": "El tronco anterior o posterior es 18%."
              },
              {
                "text": "4.5%",
                "isCorrect": false,
                "rationale": "No es el valor correcto."
              },
              {
                "text": "1%",
                "isCorrect": false,
                "rationale": "El 1% es la región perineal."
              }
            ],
            "hint": "Cada brazo completo (frente y dorso) es 9%...",
            "image": "imagen:regla-nueve-superficie-quemaduras"
          },
          {
            "question": "¿Qué es la mamá desde el punto de vista tegumentario?",
            "options": [
              {
                "text": "Formación tegumentaria derivada de glándulas sudoríparas apocrinas",
                "isCorrect": true,
                "rationale": "La mama es formación tegumentaria cuyo tejido glandular se forma a partir de glándulas sudoríparas apocrinas modificadas."
              },
              {
                "text": "Un órgano muscular",
                "isCorrect": false,
                "rationale": "No es principalmente muscular."
              },
              {
                "text": "Un hueso del tórax",
                "isCorrect": false,
                "rationale": "No es ósea."
              },
              {
                "text": "Una glándula endocrina pura",
                "isCorrect": false,
                "rationale": "Es exocrina (secreta leche), no endocrina."
              }
            ],
            "hint": "Es una glándula exocrina modificada, parte del sistema tegumentario..."
          }
        ]
      }
    ]
  }
,
  "anato-esqueletico": {
  "titulo": "Sistema Esquelético",
  "descripcion": "Huesos, cartílagos, estructura, osificación, vascularización",
  "totalPreguntas": 157,
  "partes": [
    {
      "id": 1,
      "nombre": "Cartílagos + Generalidades",
      "preguntas": 14,
      "data": [
        {
          "question": "¿Cuál es el tejido conectivo especializado que forma el sistema de sostén corporal junto con el hueso?",
          "options": [
            {
              "text": "El cartílago",
              "isCorrect": true,
              "rationale": "El sistema de sostén corporal está formado por tejidos conectivos especializados: el hueso y el cartílago."
            },
            {
              "text": "El músculo",
              "isCorrect": false,
              "rationale": "Los músculos forman parte del sistema muscular, no del esquelético."
            },
            {
              "text": "El tejido adiposo",
              "isCorrect": false,
              "rationale": "El tejido adiposo es parte del tejido conectivo pero no forma el sistema de sostén."
            },
            {
              "text": "El tejido epitelial",
              "isCorrect": false,
              "rationale": "El tejido epitelial cubre y reveste, no forma sostén estructural."
            }
          ],
          "hint": "Es un tejido flexible que complementa al hueso rígido...",
          "image": "imagen:sistema-sosten-hueso-cartilago"
        },
        {
          "question": "¿Qué porcentaje de agua tiene la sustancia intercelular del cartílago?",
          "options": [
            {
              "text": "70%",
              "isCorrect": true,
              "rationale": "La sustancia intercelular del cartílago está muy hidratada, con 70% de agua."
            },
            {
              "text": "30%",
              "isCorrect": false,
              "rationale": "Es mucho más, el cartílago está altamente hidratado."
            },
            {
              "text": "50%",
              "isCorrect": false,
              "rationale": "No, es más hidratado que eso."
            },
            {
              "text": "90%",
              "isCorrect": false,
              "rationale": "Es alto pero no tanto, es 70%."
            }
          ],
          "hint": "El cartílago necesita mucha hidratación para su función de amortiguación...",
          "image": "imagen:composicion-cartilago-agua"
        },
        {
          "question": "¿Cómo se nutren las células del tejido cartilaginoso si prácticamente no tiene vasos sanguíneos?",
          "options": [
            {
              "text": "Por imbibición",
              "isCorrect": true,
              "rationale": "El tejido cartilaginoso es avascular y sus células se nutren por imbibición (difusión desde el pericondrio)."
            },
            {
              "text": "Por vasos sanguíneos propios",
              "isCorrect": false,
              "rationale": "El cartílago no tiene vasos propios."
            },
            {
              "text": "Por el sistema linfático",
              "isCorrect": false,
              "rationale": "No es el mecanismo principal de nutrición."
            },
            {
              "text": "Por conductos nerviosos",
              "isCorrect": false,
              "rationale": "Los nervios no nutren, transmiten señales."
            }
          ],
          "hint": "Es un proceso de difusión pasiva desde la membrana que lo rodea..."
        },
        {
          "question": "¿Qué es el pericondrio?",
          "options": [
            {
              "text": "La membrana conectiva que envuelve y nutre el cartílago",
              "isCorrect": true,
              "rationale": "El pericondrio es la membrana conectiva que envuelve el cartílago, lo nutre y protege."
            },
            {
              "text": "El tejido que rodea el hueso",
              "isCorrect": false,
              "rationale": "Eso es el periostio, no el pericondrio."
            },
            {
              "text": "La capa de cartílago que cubre las articulaciones",
              "isCorrect": false,
              "rationale": "Eso es cartílago articular, no pericondrio."
            },
            {
              "text": "Un tipo de cartílago especial",
              "isCorrect": false,
              "rationale": "No es un tipo de cartílago, es una membrana."
            }
          ],
          "hint": "Es el equivalente al periostio pero para el cartílago...",
          "image": "imagen:pericondrio-membrana-cartilago"
        },
        {
          "question": "¿Cuántos tipos de cartílagos hay en el organismo según sus características?",
          "options": [
            {
              "text": "Tres",
              "isCorrect": true,
              "rationale": "Hay tres tipos: hialino, fibroso y elástico."
            },
            {
              "text": "Dos",
              "isCorrect": false,
              "rationale": "Son tres, no dos."
            },
            {
              "text": "Cuatro",
              "isCorrect": false,
              "rationale": "No hay cuatro tipos principales."
            },
            {
              "text": "Cinco",
              "isCorrect": false,
              "rationale": "Es menos, solo tres."
            }
          ],
          "hint": "Hialino, fibroso y elástico..."
        },
        {
          "question": "¿Cuál es el color del cartílago hialino?",
          "options": [
            {
              "text": "Translúcido y algo azulado",
              "isCorrect": true,
              "rationale": "El cartílago hialino es translúcido y algo azulado."
            },
            {
              "text": "Blanquecino",
              "isCorrect": false,
              "rationale": "Ese es el color del cartílago fibroso."
            },
            {
              "text": "Amarillento",
              "isCorrect": false,
              "rationale": "Ese es el color del cartílago elástico."
            },
            {
              "text": "Rojizo",
              "isCorrect": false,
              "rationale": "No es ese el color del cartílago hialino."
            }
          ],
          "hint": "Es el más abundante, translúcido...",
          "image": "imagen:tipos-cartilagos-colores"
        },
        {
          "question": "¿Dónde se encuentra el cartílago fibroso?",
          "options": [
            {
              "text": "En discos articulares y meniscos",
              "isCorrect": true,
              "rationale": "El cartílago fibroso es blanquecino, resistente, y se encuentra en discos articulares y meniscos."
            },
            {
              "text": "En la matriz embrionaria de los huesos",
              "isCorrect": false,
              "rationale": "Eso es cartílago hialino."
            },
            {
              "text": "En el cartílago auricular y epiglotis",
              "isCorrect": false,
              "rationale": "Eso es cartílago elástico."
            },
            {
              "text": "En las costillas y tráquea",
              "isCorrect": false,
              "rationale": "Esas tienen cartílago hialino."
            }
          ],
          "hint": "Está en estructuras que necesitan resistencia a la compresión...",
          "image": "imagen:ubicacion-cartilago-fibroso"
        },
        {
          "question": "¿Cuál es el color del cartílago elástico?",
          "options": [
            {
              "text": "Amarillento",
              "isCorrect": true,
              "rationale": "El cartílago elástico es de color amarillento, flexible y con abundantes fibras elásticas."
            },
            {
              "text": "Translúcido y azulado",
              "isCorrect": false,
              "rationale": "Eso es el hialino."
            },
            {
              "text": "Blanquecino",
              "isCorrect": false,
              "rationale": "Eso es el fibroso."
            },
            {
              "text": "Transparente",
              "isCorrect": false,
              "rationale": "No es transparente, es amarillento."
            }
          ],
          "hint": "Está en lugares que necesitan flexibilidad y elasticidad como la oreja...",
          "image": "imagen:cartilago-elastico-auricular"
        },
        {
          "question": "¿Dónde se encuentra el cartílago elástico?",
          "options": [
            {
              "text": "En el cartílago auricular, trompa auditiva y epiglotis",
              "isCorrect": true,
              "rationale": "El cartílago elástico forma el cartílago auricular, la trompa auditiva y la epiglotis."
            },
            {
              "text": "En los meniscos de la rodilla",
              "isCorrect": false,
              "rationale": "Eso es cartílago fibroso."
            },
            {
              "text": "En las superficies articulares",
              "isCorrect": false,
              "rationale": "Eso es cartílago hialino articular."
            },
            {
              "text": "En las costillas",
              "isCorrect": false,
              "rationale": "Esas tienen cartílago hialino."
            }
          ],
          "hint": "Piensa en orejas y garganta..."
        },
        {
          "question": "¿Cuál es la función del cartílago hialino?",
          "options": [
            {
              "text": "Constituye la matriz embrionaria de los huesos",
              "isCorrect": true,
              "rationale": "El cartílago hialino constituye la matriz embrionaria de los huesos."
            },
            {
              "text": "Proteger de impactos externos",
              "isCorrect": false,
              "rationale": "Esa es más función del hueso."
            },
            {
              "text": "Producir células sanguíneas",
              "isCorrect": false,
              "rationale": "Eso es función de la médula ósea."
            },
            {
              "text": "Almacenar calcio",
              "isCorrect": false,
              "rationale": "Eso es función del hueso."
            }
          ],
          "hint": "Es el precursor del hueso durante el desarrollo fetal..."
        },
        {
          "question": "¿Cómo se nutren los huesos?",
          "options": [
            {
              "text": "Por vascularización directa (arterias nutricias)",
              "isCorrect": true,
              "rationale": "Los huesos se nutren por vascularización directa mediante arterias nutricias que penetran por forámenes y se distribuyen por todo el hueso."
            },
            {
              "text": "Por imbibición como el cartílago",
              "isCorrect": false,
              "rationale": "El hueso es vascularizado, no se nutre por imbibición."
            },
            {
              "text": "Por difusión desde la piel",
              "isCorrect": false,
              "rationale": "No, tienen su propio sistema vascular."
            },
            {
              "text": "Por linfa exclusivamente",
              "isCorrect": false,
              "rationale": "Tienen irrigación sanguínea directa."
            }
          ],
          "hint": "A diferencia del cartílago, el hueso tiene vasos sanguíneos..."
        },
        {
          "question": "¿Cuántos huesos tiene el esqueleto óseo de un adulto?",
          "options": [
            {
              "text": "206 huesos constantes",
              "isCorrect": true,
              "rationale": "El esqueleto óseo está formado por 206 huesos constantes (200 huesos + 6 huesecillos del oído)."
            },
            {
              "text": "200 huesos",
              "isCorrect": false,
              "rationale": "Faltan los 6 huesecillos del oído."
            },
            {
              "text": "270 huesos",
              "isCorrect": false,
              "rationale": "Esa es la cantidad al nacer, antes de la fusión."
            },
            {
              "text": "180 huesos",
              "isCorrect": false,
              "rationale": "Es muy poco, hay más huesos."
            }
          ],
          "hint": "Incluye los huesecillos del oído..."
        },
        {
          "question": "¿Qué porcentaje del calcio corporal se encuentra en los huesos?",
          "options": [
            {
              "text": "99%",
              "isCorrect": true,
              "rationale": "El 99% del calcio corporal se almacena en los huesos, que actúan como el principal reservorio mineral del organismo."
            },
            {
              "text": "50%",
              "isCorrect": false,
              "rationale": "Es mucho más, casi todo el calcio está en huesos."
            },
            {
              "text": "75%",
              "isCorrect": false,
              "rationale": "Es más alto, 99%."
            },
            {
              "text": "25%",
              "isCorrect": false,
              "rationale": "Es muy poco, la mayor parte está en huesos."
            }
          ],
          "hint": "Los huesos son el principal reservorio de calcio del organismo..."
        },
        {
          "question": "¿Qué es el endoesqueleto osteocartilaginoso y membranoso?",
          "options": [
            {
              "text": "El esqueleto interno del ser humano formado por hueso y cartílago",
              "isCorrect": true,
              "rationale": "El hombre posee un endoesqueleto osteocartilaginoso y membranoso que integra el conjunto de estructuras rígidas del cuerpo y permite su movilidad."
            },
            {
              "text": "Una capa externa de protección",
              "isCorrect": false,
              "rationale": "No es externo, es interno (endo-)."
            },
            {
              "text": "Solo el cráneo y la columna",
              "isCorrect": false,
              "rationale": "Incluye todo el esqueleto."
            },
            {
              "text": "Los tendones y ligamentos",
              "isCorrect": false,
              "rationale": "No son huesos ni cartílago."
            }
          ],
          "hint": "Endo = interno; osteo = hueso; el esqueleto propio del cuerpo..."
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Esqueleto Axial y Apendicular",
      "preguntas": 12,
      "data": [
        {
          "question": "¿Dónde está ubicado el esqueleto axial?",
          "options": [
            {
              "text": "En relación con el eje longitudinal del cuerpo",
              "isCorrect": true,
              "rationale": "El esqueleto axial está ubicado en relación con el eje longitudinal del cuerpo."
            },
            {
              "text": "En los miembros superiores e inferiores",
              "isCorrect": false,
              "rationale": "Eso es el esqueleto apendicular."
            },
            {
              "text": "Solo en el cráneo",
              "isCorrect": false,
              "rationale": "No solo el cráneo, también incluye columna y tórax."
            },
            {
              "text": "En la pared abdominal",
              "isCorrect": false,
              "rationale": "No forma parte del esqueleto axial."
            }
          ],
          "hint": "Es la parte central del cuerpo...",
          "image": "imagen:esqueleto-axial-ubicacion"
        },
        {
          "question": "¿Qué húesos forman parte del esqueleto axial?",
          "options": [
            {
              "text": "Cráneo, columna vertebral y tórax",
              "isCorrect": true,
              "rationale": "El esqueleto axial está constituido por el cráneo, la columna vertebral y el tórax (esternón y costillas)."
            },
            {
              "text": "Escápula, clavícula y coxal",
              "isCorrect": false,
              "rationale": "Esos son cinturas del esqueleto apendicular."
            },
            {
              "text": "Húmero, fémur y tibia",
              "isCorrect": false,
              "rationale": "Esos son huesos de la porción libre del esqueleto apendicular."
            },
            {
              "text": "Carpo, tarso y falanges",
              "isCorrect": false,
              "rationale": "Esos son huesos de la porción libre de los miembros."
            }
          ],
          "hint": "Incluye la cabeza, la columna y la caja torácica..."
        },
        {
          "question": "¿Qué es el cingulum en el esqueleto de cada miembro?",
          "options": [
            {
              "text": "La porción (cintura) que lo relaciona con el esqueleto axial",
              "isCorrect": true,
              "rationale": "El esqueleto de cada miembro tiene dos porciones: una cingulum (cintura) que lo relaciona con el esqueleto axial, y una porción libre."
            },
            {
              "text": "Los huesos largos de los miembros",
              "isCorrect": false,
              "rationale": "No, es la parte que conecta con el tronco."
            },
            {
              "text": "Las articulaciones de los miembros",
              "isCorrect": false,
              "rationale": "No son las articulaciones, son los huesos de la cintura."
            },
            {
              "text": "La porción libre del miembro",
              "isCorrect": false,
              "rationale": "Es lo contrario, cingulum es la parte que conecta, no la libre."
            }
          ],
          "hint": "Es la 'cintura' que une el miembro al tronco..."
        },
        {
          "question": "¿Qué húesos forman el cingulum del miembro superior?",
          "options": [
            {
              "text": "Escápula y clavícula",
              "isCorrect": true,
              "rationale": "La escápula y la clavícula forman la cintura pectoral (cingulum) del miembro superior."
            },
            {
              "text": "Húmero y radio",
              "isCorrect": false,
              "rationale": "Esos son de la porción libre."
            },
            {
              "text": "Coxal",
              "isCorrect": false,
              "rationale": "Esa es la cintura del miembro inferior."
            },
            {
              "text": "Fémur y tibia",
              "isCorrect": false,
              "rationale": "Esos son de la porción libre del miembro inferior."
            }
          ],
          "hint": "Son dos huesos que conectan el brazo con el tronco...",
          "image": "imagen:cintura-pectoral-escapula-clavicula"
        },
        {
          "question": "¿Qué húeso forma el cingulum del miembro inferior?",
          "options": [
            {
              "text": "Coxal (ilion, isquion y pubis fusionados)",
              "isCorrect": true,
              "rationale": "El coxal, formado por la fusión del ilion, isquion y pubis, constituye la cintura pelviana."
            },
            {
              "text": "Escápula y clavícula",
              "isCorrect": false,
              "rationale": "Esa es la cintura del miembro superior."
            },
            {
              "text": "Fémur y rótula",
              "isCorrect": false,
              "rationale": "Esos son de la porción libre."
            },
            {
              "text": "Sacrúm y cóccix",
              "isCorrect": false,
              "rationale": "Esos son parte de la columna vertebral (axial)."
            }
          ],
          "hint": "Es el hueso de la cadera, resultado de la fusión de tres huesos...",
          "image": "imagen:cintura-pelviana-coxal"
        },
        {
          "question": "¿Qué es la porción libre del miembro?",
          "options": [
            {
              "text": "La parte del esqueleto del miembro que corresponde al resto de sus huesos después de la cintura",
              "isCorrect": true,
              "rationale": "La porción libre del miembro corresponde al resto de sus huesos después de la cintura (cingulum)."
            },
            {
              "text": "La cintura que conecta con el tronco",
              "isCorrect": false,
              "rationale": "Eso es el cingulum/cintura."
            },
            {
              "text": "Los músculos del miembro",
              "isCorrect": false,
              "rationale": "No son músculos, son huesos."
            },
            {
              "text": "Las articulaciones del miembro",
              "isCorrect": false,
              "rationale": "No son articulaciones, son los huesos propiamente dichos."
            }
          ],
          "hint": "Es todo lo que está después de la cintura..."
        },
        {
          "question": "¿Cuáles son las dos porciones del esqueleto de cada miembro?",
          "options": [
            {
              "text": "Cingulum (cintura) y porción libre",
              "isCorrect": true,
              "rationale": "El esqueleto de cada miembro tiene dos porciones: cingulum (cintura) que lo relaciona con el esqueleto axial, y porción libre que corresponde al resto de sus huesos."
            },
            {
              "text": "Epífisis y diáfisis",
              "isCorrect": false,
              "rationale": "Esas son partes de los huesos largos, no del miembro."
            },
            {
              "text": "Hueso compacto y esponjoso",
              "isCorrect": false,
              "rationale": "Esos son tipos de tejido óseo, no porciones del miembro."
            },
            {
              "text": "Axial y apendicular",
              "isCorrect": false,
              "rationale": "Esas son divisiones del esqueleto completo, no de cada miembro."
            }
          ],
          "hint": "Una parte conecta con el tronco, la otra es el resto del miembro..."
        },
        {
          "question": "¿Qué huesos forman la porción libre del miembro superior?",
          "options": [
            {
              "text": "Húmero, cúbito, radio, carpo, metacarpo y falanges",
              "isCorrect": true,
              "rationale": "La porción libre del miembro superior incluye: húmero, cúbito (ulna), radio, huesos del carpo, metacarpianos y falanges."
            },
            {
              "text": "Escápula y clavícula",
              "isCorrect": false,
              "rationale": "Esos forman la cintura (cingulum)."
            },
            {
              "text": "Coxal",
              "isCorrect": false,
              "rationale": "Ese es de la cintura inferior."
            },
            {
              "text": "Sacro y cóccix",
              "isCorrect": false,
              "rationale": "Esos son de la columna vertebral (axial)."
            }
          ],
          "hint": "Todo el brazo, antebrazo y mano...",
          "image": "imagen:porcion-libre-miembro-superior"
        },
        {
          "question": "¿Qué huesos forman la porción libre del miembro inferior?",
          "options": [
            {
              "text": "Fémur, rótula, tibia, peroné, tarso, metatarso y falanges",
              "isCorrect": true,
              "rationale": "La porción libre del miembro inferior incluye: fémur, rótula (patela), tibia, peroné (fíbula), huesos del tarso, metatarsianos y falanges."
            },
            {
              "text": "Coxal",
              "isCorrect": false,
              "rationale": "Ese es la cintura (cingulum)."
            },
            {
              "text": "Húmero y radio",
              "isCorrect": false,
              "rationale": "Esos son del miembro superior."
            },
            {
              "text": "Escápula y clavícula",
              "isCorrect": false,
              "rationale": "Esos son la cintura del miembro superior."
            }
          ],
          "hint": "Todo el muslo, pierna y pie...",
          "image": "imagen:porcion-libre-miembro-inferior"
        },
        {
          "question": "¿Qué forman el neurocráneo?",
          "options": [
            {
              "text": "Frontal, etmoides, esfenoides, parietal, temporal, occipital y huesecillos del oído",
              "isCorrect": true,
              "rationale": "El neurocráneo está formado por: frontal, etmoides, esfenoides, parietal, temporal, occipital y huesecillos del oído."
            },
            {
              "text": "Maxilar, mandíbula y cigomático",
              "isCorrect": false,
              "rationale": "Esos forman parte del viscerocráneo."
            },
            {
              "text": "Solo el cráneo y la cara",
              "isCorrect": false,
              "rationale": "El neurocráneo es la bóveda craneal, no la cara."
            },
            {
              "text": "Todas las costillas y el esternón",
              "isCorrect": false,
              "rationale": "Esos son parte del tórax."
            }
          ],
          "hint": "Es la parte ósea que protege el encéfalo..."
        },
        {
          "question": "¿Qué forman el viscerocráneo?",
          "options": [
            {
              "text": "Maxilar, nasal, lagrimal, cigomático, palatino, cornete nasal inferior, vómer, mandíbula e hioides",
              "isCorrect": true,
              "rationale": "El viscerocráneo está formado por: maxilar, nasal, lagrimal, cigomático, palatino, cornete nasal inferior, vómer, mandíbula e hioides."
            },
            {
              "text": "Frontal, parietal y occipital",
              "isCorrect": false,
              "rationale": "Esos son del neurocráneo."
            },
            {
              "text": "Vértebras y sacro",
              "isCorrect": false,
              "rationale": "Esos son de la columna vertebral."
            },
            {
              "text": "Costillas y esternón",
              "isCorrect": false,
              "rationale": "Esos son del tórax."
            }
          ],
          "hint": "Es la parte ósea de la cara...",
          "image": "imagen:viscerocraneo-huesos-cara"
        },
        {
          "question": "¿Qué forman la columna vertebral?",
          "options": [
            {
              "text": "Vértebras cervicales, torácicas, lumbares, sacro y cóccix",
              "isCorrect": true,
              "rationale": "La columna vertebral está formada por vértebras cervicales, torácicas, lumbares, sacro y cóccix."
            },
            {
              "text": "Solo las vértebras lumbares",
              "isCorrect": false,
              "rationale": "Son todas las regiones, no solo las lumbares."
            },
            {
              "text": "Costillas y esternón",
              "isCorrect": false,
              "rationale": "Esos son parte del tórax."
            },
            {
              "text": "Cráneo y mandíbula",
              "isCorrect": false,
              "rationale": "Esos son parte del cráneo, no de la columna."
            }
          ],
          "hint": "Incluye las 5 regiones desde el cuello hasta el coxis...",
          "image": "imagen:columna-vertebral-regiones"
        }
      ]
    },
    {
      "id": 3,
      "nombre": "Estructura Interna del Hueso",
      "preguntas": 19,
      "data": [
        {
          "question": "¿Cuáles son las dos porciones con aspecto diferente en la estructura interna del hueso adulto?",
          "options": [
            {
              "text": "Hueso compacto y hueso esponjoso (trabecular)",
              "isCorrect": true,
              "rationale": "En la estructura interna del hueso adulto se reconocen dos porciones: el hueso compacto y el hueso esponjoso (o trabecular)."
            },
            {
              "text": "Epidermis y dermis",
              "isCorrect": false,
              "rationale": "Esas son capas de la piel, no del hueso."
            },
            {
              "text": "Cartílago y hueso",
              "isCorrect": false,
              "rationale": "Son tejidos diferentes, no partes del mismo hueso."
            },
            {
              "text": "Periostio y endostio",
              "isCorrect": false,
              "rationale": "Son membranas de revestimiento, no la estructura interna propiamente dicha."
            }
          ],
          "hint": "Uno es sólido y denso, el otro tiene aspecto de esponja..."
        },
        {
          "question": "¿Qué es el hueso compacto?",
          "options": [
            {
              "text": "Capa periférica y continua que cubre el hueso esponjoso",
              "isCorrect": true,
              "rationale": "El hueso compacto forma una capa periférica y continua, cubierta externamente por el periostio."
            },
            {
              "text": "La parte interna esponjosa",
              "isCorrect": false,
              "rationale": "Eso es el hueso esponjoso."
            },
            {
              "text": "La médula ósea",
              "isCorrect": false,
              "rationale": "La médula está dentro de la cavidad medular, no es hueso compacto."
            },
            {
              "text": "El cartílago que recubre el hueso",
              "isCorrect": false,
              "rationale": "El cartílago es diferente del hueso compacto."
            }
          ],
          "hint": "Es la capa dura y densa que forma la superficie del hueso..."
        },
        {
          "question": "¿Qué es la osteona o sistema de Havers?",
          "options": [
            {
              "text": "La unidad funcional del hueso compacto",
              "isCorrect": true,
              "rationale": "La osteona constituye la unidad funcional del tejido óseo compacto (sistema de Havers)."
            },
            {
              "text": "Una articulación del hueso",
              "isCorrect": false,
              "rationale": "No es una articulación, es una unidad estructural del hueso."
            },
            {
              "text": "Un tipo de cartílago",
              "isCorrect": false,
              "rationale": "No es cartílago, es hueso."
            },
            {
              "text": "La cavidad medular",
              "isCorrect": false,
              "rationale": "No, es una estructura del hueso compacto."
            }
          ],
          "hint": "Es la unidad básica estructural del hueso compacto..."
        },
        {
          "question": "¿Cómo están dispuestas las fibras de colágeno en las laminillas óseas de la osteona?",
          "options": [
            {
              "text": "Dirección oblicua, alternada entre capas consecutivas",
              "isCorrect": true,
              "rationale": "En cada laminilla las fibras de colágeno tienen dirección oblicua paralela entre sí, y entre capas están dispuestas en dirección opuesta alternada."
            },
            {
              "text": "Todas en la misma dirección",
              "isCorrect": false,
              "rationale": "No, están alternadas para mayor resistencia."
            },
            {
              "text": "En forma radial",
              "isCorrect": false,
              "rationale": "No es radial la disposición."
            },
            {
              "text": "No tienen fibras de colágeno",
              "isCorrect": false,
              "rationale": "Sí tienen fibras de colágeno organizadas."
            }
          ],
          "hint": "Este patrón alternado da mayor resistencia a la compresión..."
        },
        {
          "question": "¿Qué son los conductos de Volkmann?",
          "options": [
            {
              "text": "Conductos transversales que conectan los conductos centrales de las osteonas entre sí",
              "isCorrect": true,
              "rationale": "Los conductos transversales [de Volkmann] conectan los conductos centrales de las osteonas entre sí y con la superficie."
            },
            {
              "text": "Los conductos centrales de la osteona",
              "isCorrect": false,
              "rationale": "Esos son los conductos de Havers, no de Volkmann."
            },
            {
              "text": "Conductos que llevan sangre al corazón",
              "isCorrect": false,
              "rationale": "No, son estructuras óseas internas."
            },
            {
              "text": "Conductos del tejido esponjoso",
              "isCorrect": false,
              "rationale": "Se encuentran en el hueso compacto."
            }
          ],
          "hint": "Son conductos que conectan horizontalmente las osteonas..."
        },
        {
          "question": "¿Qué son las laminillas intersticiales?",
          "options": [
            {
              "text": "Restos de osteonas antiguas que quedan entre las osteonas actuales",
              "isCorrect": true,
              "rationale": "Entre las osteonas se encuentran las laminillas intersticiales constituidas por restos de osteonas más antiguas."
            },
            {
              "text": "Las laminillas más externas del hueso",
              "isCorrect": false,
              "rationale": "Esas son las laminillas circunferenciales externas."
            },
            {
              "text": "Las laminillas del hueso esponjoso",
              "isCorrect": false,
              "rationale": "Están en el hueso compacto."
            },
            {
              "text": "Las laminillas que forman el periostio",
              "isCorrect": false,
              "rationale": "El periostio es membrana, no tiene laminillas."
            }
          ],
          "hint": "Son como 'vestigios' de osteonas pasadas..."
        },
        {
          "question": "¿Qué es el hueso esponjoso o trabecular?",
          "options": [
            {
              "text": "Está constituido por trabéculas que delimitan espacios con médula ósea",
              "isCorrect": true,
              "rationale": "El hueso esponjoso está constituido por una serie de laminillas o trabéculas que delimitan espacios comunicados ocupados por la médula ósea."
            },
            {
              "text": "Es la capa densa del hueso",
              "isCorrect": false,
              "rationale": "Eso es el hueso compacto."
            },
            {
              "text": "Es cartílago dentro del hueso",
              "isCorrect": false,
              "rationale": "No es cartílago, es tejido óseo."
            },
            {
              "text": "Es la médula ósea propiamente dicha",
              "isCorrect": false,
              "rationale": "La médula ocupa los espacios, pero el tejido es óseo esponjoso."
            }
          ],
          "hint": "Tiene aspecto de esponja con muchos pequeños espacios..."
        },
        {
          "question": "¿Qué es la trabécula ósea?",
          "options": [
            {
              "text": "La unidad funcional del tejido óseo esponjoso",
              "isCorrect": true,
              "rationale": "La trabécula ósea es la unidad funcional del tejido óseo esponjoso."
            },
            {
              "text": "La unidad del hueso compacto",
              "isCorrect": false,
              "rationale": "La unidad del hueso compacto es la osteona."
            },
            {
              "text": "Un tipo de célula ósea",
              "isCorrect": false,
              "rationale": "Es una estructura, no una célula."
            },
            {
              "text": "El conducto central del hueso",
              "isCorrect": false,
              "rationale": "No, es una estructura laminar del hueso esponjoso."
            }
          ],
          "hint": "Es el equivalente a la osteona pero en el hueso esponjoso..."
        },
        {
          "question": "¿Qué forma tienen las trabéculas óseas?",
          "options": [
            {
              "text": "Placas curvas, barras y cilindros que se dividen y unen entre sí",
              "isCorrect": true,
              "rationale": "Las trabéculas presentan forma de placas curvas, barras y cilindros que se dividen y se unen entre sí."
            },
            {
              "text": "Forma esférica perfecta",
              "isCorrect": false,
              "rationale": "No tienen forma esférica."
            },
            {
              "text": "Son estructuras lineales rectas",
              "isCorrect": false,
              "rationale": "Son curvas y ramificadas."
            },
            {
              "text": "Forma hexagonal como un panal",
              "isCorrect": false,
              "rationale": "No tienen organización hexagonal."
            }
          ],
          "hint": "Son estructuras tridimensionales irregulares que forman una red..."
        },
        {
          "question": "¿Cómo se orientan las trabéculas del hueso esponjoso?",
          "options": [
            {
              "text": "A lo largo de las líneas de tensión que soporta cada porción del hueso",
              "isCorrect": true,
              "rationale": "Las trabéculas se disponen y orientan a lo largo de las líneas de tensión que soporta cada porción del hueso."
            },
            {
              "text": "Aleatoriamente sin dirección preferencial",
              "isCorrect": false,
              "rationale": "No, tienen orientación según las líneas de tensión."
            },
            {
              "text": "Todas paralelas entre sí",
              "isCorrect": false,
              "rationale": "Varían según la dirección de las fuerzas."
            },
            {
              "text": "Perpendiculares a la superficie",
              "isCorrect": false,
              "rationale": "No necesariamente perpendiculares."
            }
          ],
          "hint": "Siguen el patrón de las fuerzas que actúan sobre el hueso..."
        },
        {
          "question": "¿Cómo se nutren las trabéculas del hueso esponjoso?",
          "options": [
            {
              "text": "Por difusión desde la médula ósea (no tienen vasos propios)",
              "isCorrect": true,
              "rationale": "No hay vasos recorriendo el interior de las trabéculas, los osteocitos se nutren por difusión desde la médula ósea."
            },
            {
              "text": "Por arterias que penetran las trabéculas",
              "isCorrect": false,
              "rationale": "No tienen vasos propios."
            },
            {
              "text": "Por el periostio",
              "isCorrect": false,
              "rationale": "El periostio está en la superficie externa."
            },
            {
              "text": "Por imbibición como el cartílago",
              "isCorrect": false,
              "rationale": "No es imbibición, es difusión desde la médula."
            }
          ],
          "hint": "A diferencia del hueso compacto, no tiene conductos vasculares internos..."
        },
        {
          "question": "¿Qué reviste el endostio?",
          "options": [
            {
              "text": "La superficie de las trabéculas y la cavidad medular",
              "isCorrect": true,
              "rationale": "La superficie de las trabéculas está cubierta por el endostio, que también reviste la cavidad medular."
            },
            {
              "text": "Solo la superficie externa del hueso",
              "isCorrect": false,
              "rationale": "Eso es el periostio."
            },
            {
              "text": "Solo el cartílago articular",
              "isCorrect": false,
              "rationale": "No reviste cartílago."
            },
            {
              "text": "Las arterias nutricias",
              "isCorrect": false,
              "rationale": "No reviste vasos."
            }
          ],
          "hint": "Es el revestimiento interno del hueso..."
        },
        {
          "question": "¿Dónde se encuentra ubicado el periostio?",
          "options": [
            {
              "text": "Rodeando la superficie exterior del hueso",
              "isCorrect": true,
              "rationale": "El periostio es una membrana fibrosa que rodea la superficie exterior del hueso."
            },
            {
              "text": "Dentro de la cavidad medular",
              "isCorrect": false,
              "rationale": "Dentro está el endostio."
            },
            {
              "text": "En las superficies articulares",
              "isCorrect": false,
              "rationale": "En las articulares hay cartílago articular."
            },
            {
              "text": "Entre las trabéculas",
              "isCorrect": false,
              "rationale": "No, es externo."
            }
          ],
          "hint": "Es la membrana que envuelve al hueso por fuera..."
        },
        {
          "question": "¿Qué características tiene el periostio?",
          "options": [
            {
              "text": "Es ricamente vascularizado e inervado",
              "isCorrect": true,
              "rationale": "El periostio es una membrana fibrosa, ricamente vascularizada e inervada."
            },
            {
              "text": "Es avascular como el cartílago",
              "isCorrect": false,
              "rationale": "Al contrario, muy vascularizado."
            },
            {
              "text": "No tiene inervación",
              "isCorrect": false,
              "rationale": "Sí tiene inervación."
            },
            {
              "text": "Es una capa de cartílago",
              "isCorrect": false,
              "rationale": "No es cartílago, es tejido conectivo fibroso."
            }
          ],
          "hint": "Por eso duele cuando se lastima la superficie del hueso..."
        },
        {
          "question": "¿Qué es el diploe?",
          "options": [
            {
              "text": "El hueso esponjoso ubicado entre las láminas de los huesos planos del cráneo",
              "isCorrect": true,
              "rationale": "En los huesos de la calvaria, al hueso esponjoso se lo denomina diploe."
            },
            {
              "text": "Una enfermedad ósea",
              "isCorrect": false,
              "rationale": "No es una enfermedad, es estructura normal."
            },
            {
              "text": "El hueso compacto externo",
              "isCorrect": false,
              "rationale": "Eso es la tabla externa."
            },
            {
              "text": "La cavidad medular",
              "isCorrect": false,
              "rationale": "No, es el hueso esponjoso de la calvaria."
            }
          ],
          "hint": "Es el nombre específico del hueso esponjoso craneal..."
        },
        {
          "question": "¿Qué son la tabla interna y tabla externa?",
          "options": [
            {
              "text": "Las dos láminas de hueso compacto que rodean el diploe en los huesos planos del cráneo",
              "isCorrect": true,
              "rationale": "A las láminas de hueso compacto que rodean el diploe se las denomina lámina [tabla] interna y lámina [tabla] externa."
            },
            {
              "text": "Las dos partes de la epífisis",
              "isCorrect": false,
              "rationale": "Son estructuras de huesos planos craneales."
            },
            {
              "text": "Las capas del periostio",
              "isCorrect": false,
              "rationale": "No son capas del periostio."
            },
            {
              "text": "Las divisiones del hueso esponjoso",
              "isCorrect": false,
              "rationale": "Son de hueso compacto, no esponjoso."
            }
          ],
          "hint": "Están en la bóveda craneal..."
        },
        {
          "question": "¿Dónde se produce la hematopoyesis en el hueso?",
          "options": [
            {
              "text": "En la médula ósea de la cavidad medular y espacios del hueso esponjoso",
              "isCorrect": true,
              "rationale": "En la cavidad medular de los huesos largos y en las cavidades del hueso esponjoso se encuentra la médula ósea donde se produce la hematopoyesis."
            },
            {
              "text": "En el periostio",
              "isCorrect": false,
              "rationale": "El periostio no produce células sanguíneas."
            },
            {
              "text": "En el hueso compacto",
              "isCorrect": false,
              "rationale": "El hueso compacto no tiene médula."
            },
            {
              "text": "En el cartílago articular",
              "isCorrect": false,
              "rationale": "El cartílago no produce sangre."
            }
          ],
          "hint": "Es la función de formación de células de la sangre..."
        },
        {
          "question": "¿Qué diferencia hay entre médula ósea roja y amarilla?",
          "options": [
            {
              "text": "La roja es hematopoyética (activa), la amarilla acumula tejido adiposo (inactiva)",
              "isCorrect": true,
              "rationale": "En niños la médula es rojiza (hematopoyética). En adultos está inactiva y acumula tejido adiposo, siendo amarilla."
            },
            {
              "text": "La roja está en adultos, la amarilla en niños",
              "isCorrect": false,
              "rationale": "Es al revés: roja en niños, amarilla en adultos."
            },
            {
              "text": "La roja es patológica, la amarilla es normal",
              "isCorrect": false,
              "rationale": "Ambas son normales en distintas etapas."
            },
            {
              "text": "No hay diferencia funcional",
              "isCorrect": false,
              "rationale": "Tienen funciones muy diferentes."
            }
          ],
          "hint": "Una produce sangre, la otra acumula grasa..."
        },
        {
          "question": "¿Qué es el hueso cortical?",
          "options": [
            {
              "text": "Otro nombre para el hueso compacto que forma la capa externa",
              "isCorrect": true,
              "rationale": "El hueso compacto también se denomina hueso cortical, forma la lámina que rodea los huesos cortos."
            },
            {
              "text": "El hueso esponjoso",
              "isCorrect": false,
              "rationale": "No, es el compacto."
            },
            {
              "text": "El hueso que forma la corteza cerebral",
              "isCorrect": false,
              "rationale": "No tiene relación con el cerebro."
            },
            {
              "text": "Un tipo de hueso patológico",
              "isCorrect": false,
              "rationale": "Es estructura normal."
            }
          ],
          "hint": "Término alternativo para la capa externa densa..."
        }
      ]
    },
    {
      "id": 4,
      "nombre": "Clasificación de los Huesos",
      "preguntas": 19,
      "data": [
        {
          "question": "¿Cómo se clasifican los huesos según su forma general?",
          "options": [
            {
              "text": "Largos, planos, cortos, irregulares, neumáticos y sesamoideos",
              "isCorrect": true,
              "rationale": "Los huesos se clasifican según su forma en: largos, planos, cortos, irregulares, neumáticos y sesamoideos."
            },
            {
              "text": "Axiales y apendiculares",
              "isCorrect": false,
              "rationale": "Esa es una clasificación por ubicación, no por forma."
            },
            {
              "text": "Compactos y esponjosos",
              "isCorrect": false,
              "rationale": "Esa es una clasificación por estructura interna."
            },
            {
              "text": "Membranosos y condrales",
              "isCorrect": false,
              "rationale": "Esa es una clasificación por origen."
            }
          ],
          "hint": "Hay 6 categorías según la morfología del hueso..."
        },
        {
          "question": "¿Qué característica principal define a los huesos largos?",
          "options": [
            {
              "text": "Predomina la longitud sobre el grosor y el ancho",
              "isCorrect": true,
              "rationale": "En los huesos largos predomina la longitud por encima del grosor y el ancho."
            },
            {
              "text": "Tienen forma de cubo",
              "isCorrect": false,
              "rationale": "Eso define a los huesos cortos."
            },
            {
              "text": "Son muy delgados",
              "isCorrect": false,
              "rationale": "Eso es característico de los huesos planos."
            },
            {
              "text": "Tienen cavidades con aire",
              "isCorrect": false,
              "rationale": "Eso define a los neumáticos."
            }
          ],
          "hint": "El nombre lo dice: una dimensión es mucho mayor..."
        },
        {
          "question": "¿Qué partes tiene un hueso largo?",
          "options": [
            {
              "text": "Diáfisis (cuerpo), dos epífisis (extremos) y metáfisis (zona de unión)",
              "isCorrect": true,
              "rationale": "Los huesos largos presentan una diáfisis (cuerpo), dos epífisis (extremos) y la zona de unión se denomina metáfisis."
            },
            {
              "text": "Solo diáfisis y epífisis",
              "isCorrect": false,
              "rationale": "Falta la metáfisis."
            },
            {
              "text": "Cabeza, cuello y cuerpo",
              "isCorrect": false,
              "rationale": "No es la terminología correcta para huesos."
            },
            {
              "text": "Tabla interna y externa",
              "isCorrect": false,
              "rationale": "Eso es de huesos planos craneales."
            }
          ],
          "hint": "Tiene tres partes principales con nombres específicos..."
        },
        {
          "question": "¿Cuál es un ejemplo de hueso largo?",
          "options": [
            {
              "text": "Tibia",
              "isCorrect": true,
              "rationale": "La tibia es un ejemplo clásico de hueso largo."
            },
            {
              "text": "Occipital",
              "isCorrect": false,
              "rationale": "El occipital es un hueso plano."
            },
            {
              "text": "Huesos del carpo",
              "isCorrect": false,
              "rationale": "Los huesos del carpo son cortos."
            },
            {
              "text": "Esfenoides",
              "isCorrect": false,
              "rationale": "El esfenoides es irregular/neumático."
            }
          ],
          "hint": "Es un hueso de la pierna..."
        },
        {
          "question": "¿Qué caracteriza a los huesos planos?",
          "options": [
            {
              "text": "Grosor reducido, predominan el largo y el ancho",
              "isCorrect": true,
              "rationale": "En los huesos planos el grosor es reducido y predominan el largo y el ancho."
            },
            {
              "text": "Son muy largos",
              "isCorrect": false,
              "rationale": "No, predomina el ancho, no la longitud."
            },
            {
              "text": "Tienen forma de cubo",
              "isCorrect": false,
              "rationale": "Eso son los huesos cortos."
            },
            {
              "text": "Tienen cavidades internas",
              "isCorrect": false,
              "rationale": "Eso son los neumáticos."
            }
          ],
          "hint": "Son como láminas o placas..."
        },
        {
          "question": "¿Cuál es la función principal de los huesos planos?",
          "options": [
            {
              "text": "Constituyen paredes de cavidades corporales",
              "isCorrect": true,
              "rationale": "Los huesos planos constituyen paredes de las cavidades corporales y presentan superficies de inserción muscular amplias."
            },
            {
              "text": "Forman articulaciones móviles",
              "isCorrect": false,
              "rationale": "No es su función principal."
            },
            {
              "text": "Producen células sanguíneas",
              "isCorrect": false,
              "rationale": "Eso es función de la médula ósea."
            },
            {
              "text": "Permiten movimientos de precisión",
              "isCorrect": false,
              "rationale": "No es característica de los planos."
            }
          ],
          "hint": "Protegen órganos formando 'paredes'..."
        },
        {
          "question": "¿Cuál es un ejemplo de hueso plano?",
          "options": [
            {
              "text": "Occipital",
              "isCorrect": true,
              "rationale": "El occipital es un hueso plano del cráneo."
            },
            {
              "text": "Tibia",
              "isCorrect": false,
              "rationale": "La tibia es un hueso largo."
            },
            {
              "text": "Huesos del carpo",
              "isCorrect": false,
              "rationale": "Son huesos cortos."
            },
            {
              "text": "Rótula",
              "isCorrect": false,
              "rationale": "La rótula es sesamoidea."
            }
          ],
          "hint": "Es un hueso de la parte posterior del cráneo..."
        },
        {
          "question": "¿Qué caracteriza a los huesos cortos?",
          "options": [
            {
              "text": "Dimensiones semejantes en sus tres ejes, forma generalmente cuboide",
              "isCorrect": true,
              "rationale": "Los huesos cortos presentan dimensiones semejantes en sus tres ejes, con forma variable, generalmente cuboide."
            },
            {
              "text": "Son muy largos y delgados",
              "isCorrect": false,
              "rationale": "No, son más bien 'equilibrados' en todas dimensiones."
            },
            {
              "text": "Tienen forma de placa",
              "isCorrect": false,
              "rationale": "Eso son los planos."
            },
            {
              "text": "Tienen cavidades con aire",
              "isCorrect": false,
              "rationale": "Eso son los neumáticos."
            }
          ],
          "hint": "Son como pequeños cubos o dados..."
        },
        {
          "question": "¿Cuál es un ejemplo de hueso corto?",
          "options": [
            {
              "text": "Huesos del carpo",
              "isCorrect": true,
              "rationale": "Los huesos del carpo son un ejemplo de huesos cortos."
            },
            {
              "text": "Fémur",
              "isCorrect": false,
              "rationale": "El fémur es largo."
            },
            {
              "text": "Parietal",
              "isCorrect": false,
              "rationale": "El parietal es plano."
            },
            {
              "text": "Vértebra",
              "isCorrect": false,
              "rationale": "Las vértebras son irregulares."
            }
          ],
          "hint": "Están en la muñeca..."
        },
        {
          "question": "¿Qué son los huesos irregulares?",
          "options": [
            {
              "text": "Huesos con formas y proporciones variadas que no encajan en otras categorías",
              "isCorrect": true,
              "rationale": "Los huesos irregulares tienen formas y proporciones variadas."
            },
            {
              "text": "Huesos que cambian de forma con la edad",
              "isCorrect": false,
              "rationale": "No, su forma es estable."
            },
            {
              "text": "Huesos que no tienen función definida",
              "isCorrect": false,
              "rationale": "Todos los huesos tienen función."
            },
            {
              "text": "Huesos que faltan en algunas personas",
              "isCorrect": false,
              "rationale": "No es esa la definición."
            }
          ],
          "hint": "Son los que no encajan en ninguna otra categoría por su forma..."
        },
        {
          "question": "¿Cuál es un ejemplo de hueso irregular?",
          "options": [
            {
              "text": "Esfenoides",
              "isCorrect": true,
              "rationale": "El esfenoides es un ejemplo de hueso irregular."
            },
            {
              "text": "Húmero",
              "isCorrect": false,
              "rationale": "El húmero es largo."
            },
            {
              "text": "Frontal",
              "isCorrect": false,
              "rationale": "El frontal es plano."
            },
            {
              "text": "Calcáneo",
              "isCorrect": false,
              "rationale": "El calcáneo es corto."
            }
          ],
          "hint": "Es un hueso de la base del cráneo con forma compleja..."
        },
        {
          "question": "¿Qué caracteriza a los huesos neumáticos?",
          "options": [
            {
              "text": "Presentan cavidades rellenas de aire (celdas o senos)",
              "isCorrect": true,
              "rationale": "Los huesos neumáticos presentan cavidades rellenas de aire denominadas celdas o senos según su tamaño."
            },
            {
              "text": "Son muy livianos porque no tienen médula",
              "isCorrect": false,
              "rationale": "Tienen aire en cavidades, pero la definición es por las cavidades."
            },
            {
              "text": "Solo se encuentran en el oído",
              "isCorrect": false,
              "rationale": "No solo en el oído."
            },
            {
              "text": "Son huecos por dentro",
              "isCorrect": false,
              "rationale": "Tienen cavidades con aire, pero no son huecos."
            }
          ],
          "hint": "Tienen 'aire' adentro..."
        },
        {
          "question": "¿Qué son las celdas y senos en los huesos neumáticos?",
          "options": [
            {
              "text": "Cavidades llenas de aire, llamadas celdas si son pequeñas y senos si son grandes",
              "isCorrect": true,
              "rationale": "Las cavidades neumáticas se denominan celdas o senos de acuerdo con su tamaño."
            },
            {
              "text": "Cavidades llenas de líquido",
              "isCorrect": false,
              "rationale": "No, están llenas de aire."
            },
            {
              "text": "Espacios con médula ósea",
              "isCorrect": false,
              "rationale": "No contienen médula."
            },
            {
              "text": "Conductos sanguíneos",
              "isCorrect": false,
              "rationale": "No son vasos sanguíneos."
            }
          ],
          "hint": "La diferencia está en el tamaño..."
        },
        {
          "question": "¿Qué son los huesos sesamoideos?",
          "options": [
            {
              "text": "Huesos pequeños, anexos a un tendón o ligamento, con forma de semilla de sésamo",
              "isCorrect": true,
              "rationale": "Los huesos sesamoideos son pequeños, anexos a un tendón o ligamento. Su nombre se debe a su parecido con la semilla de sésamo."
            },
            {
              "text": "Huesos que se forman después de los 50 años",
              "isCorrect": false,
              "rationale": "No, se forman antes."
            },
            {
              "text": "Huesos que faltan en algunas personas",
              "isCorrect": false,
              "rationale": "Algunos son constantes, otros inconstantes."
            },
            {
              "text": "Huesos del oído interno",
              "isCorrect": false,
              "rationale": "No son del oído."
            }
          ],
          "hint": "Su nombre viene de una semilla..."
        },
        {
          "question": "¿Cuál es el único hueso sesamoideo constante?",
          "options": [
            {
              "text": "Rótula (patella)",
              "isCorrect": true,
              "rationale": "La rótula (patella) es el único sesamoide constante, siempre se osifica y se diferencia de los otros por su tamaño."
            },
            {
              "text": "Hueso del pulgar",
              "isCorrect": false,
              "rationale": "El sesamoideo del pulgar es inconstante."
            },
            {
              "text": "Astrágalo",
              "isCorrect": false,
              "rationale": "No es sesamoideo."
            },
            {
              "text": "Pisiforme",
              "isCorrect": false,
              "rationale": "No es sesamoideo."
            }
          ],
          "hint": "Está en la rodilla..."
        },
        {
          "question": "¿Dónde se encuentran los huesos sesamoideos inconstantes?",
          "options": [
            {
              "text": "Articulación metacarpofalángica del pulgar, metatarsofalángica del hallux, gastrocnemio y tendón del peroneo largo",
              "isCorrect": true,
              "rationale": "Los sesamoideos inconstantes se encuentran en esas ubicaciones."
            },
            {
              "text": "En todas las articulaciones",
              "isCorrect": false,
              "rationale": "No en todas, solo en ubicaciones específicas."
            },
            {
              "text": "Solo en el pie",
              "isCorrect": false,
              "rationale": "También en la mano y pierna."
            },
            {
              "text": "En el cráneo",
              "isCorrect": false,
              "rationale": "No hay sesamoideos craneales."
            }
          ],
          "hint": "Pulgar, dedo gordo, gemelo y peroneo..."
        },
        {
          "question": "¿Qué son los huesos supernumerarios o accesorios?",
          "options": [
            {
              "text": "Huesos que se desarrollan a partir de centros de osificación adicionales que no se unen",
              "isCorrect": true,
              "rationale": "Los huesos supernumerarios se desarrollan a partir de centros de osificación adicionales que pierden su unión con el resto."
            },
            {
              "text": "Huesos extras que todas las personas tienen",
              "isCorrect": false,
              "rationale": "No todas las personas los tienen."
            },
            {
              "text": "Huesos que crecen después de los 30 años",
              "isCorrect": false,
              "rationale": "No es así su origen."
            },
            {
              "text": "Huesos artificiales implantados",
              "isCorrect": false,
              "rationale": "Son naturales, no artificiales."
            }
          ],
          "hint": "Son huesos 'extra' que se forman cuando algo no se fusiona..."
        },
        {
          "question": "¿Qué tipos de huesos supernumerarios existen?",
          "options": [
            {
              "text": "Suturales (en suturas craneales), sesamoideos inconstantes y hueso trígono",
              "isCorrect": true,
              "rationale": "Los supernumerarios pueden ser suturales, sesamoideos inconstantes, y el hueso trígono."
            },
            {
              "text": "Solo suturales",
              "isCorrect": false,
              "rationale": "Hay más tipos."
            },
            {
              "text": "Solo en el cráneo",
              "isCorrect": false,
              "rationale": "También hay en otras partes del cuerpo."
            },
            {
              "text": "Solo en el pie",
              "isCorrect": false,
              "rationale": "No solo en el pie."
            }
          ],
          "hint": "Pueden estar en el cráneo, articulaciones o pie..."
        },
        {
          "question": "¿Qué es el hueso trígono?",
          "options": [
            {
              "text": "Un hueso supernumerario del pie, tubérculo lateral del astrágalo que aparece de manera independiente",
              "isCorrect": true,
              "rationale": "El hueso trígono es un tubérculo lateral de la apófisis posterior del astrágalo que aparece de manera independiente y no debe confundirse con patología."
            },
            {
              "text": "Un hueso del cráneo",
              "isCorrect": false,
              "rationale": "No, está en el pie."
            },
            {
              "text": "Un hueso de la mano",
              "isCorrect": false,
              "rationale": "Está en el astrágalo del pie."
            },
            {
              "text": "Un tipo de fractura",
              "isCorrect": false,
              "rationale": "No es patología, es una variante normal."
            }
          ],
          "hint": "Está en el astrágalo del pie..."
        }
      ]
    },
    {
      "id": 5,
      "nombre": "Partes de los Huesos Largos",
      "preguntas": 15,
      "data": [
        {
          "question": "¿Qué es la diáfisis de un hueso largo?",
          "options": [
            {
              "text": "El cuerpo del hueso, porción central aproximadamente cilíndrica",
              "isCorrect": true,
              "rationale": "La diáfisis forma el cuerpo del hueso, es la porción central, aproximadamente cilíndrica y con diámetro prácticamente uniforme."
            },
            {
              "text": "El extremo del hueso",
              "isCorrect": false,
              "rationale": "Eso es la epífisis."
            },
            {
              "text": "La zona de transición",
              "isCorrect": false,
              "rationale": "Eso es la metáfisis."
            },
            {
              "text": "La superficie articular",
              "isCorrect": false,
              "rationale": "No es la diáfisis."
            }
          ],
          "hint": "Es la parte más larga, el 'cuerpo' del hueso..."
        },
        {
          "question": "¿De qué tejido está formada la diáfisis?",
          "options": [
            {
              "text": "Hueso compacto que rodea la cavidad medular",
              "isCorrect": true,
              "rationale": "La diáfisis está constituida por hueso compacto que rodea la cavidad medular."
            },
            {
              "text": "Hueso esponjoso",
              "isCorrect": false,
              "rationale": "El hueso esponjoso está en las epífisis."
            },
            {
              "text": "Cartílago hialino",
              "isCorrect": false,
              "rationale": "El cartílago está en las superficies articulares."
            },
            {
              "text": "Tejido adiposo",
              "isCorrect": false,
              "rationale": "La médula puede tener tejido adiposo, pero la diáfisis es hueso compacto."
            }
          ],
          "hint": "Es la parte más dura y densa del hueso largo..."
        },
        {
          "question": "¿Qué es la cavidad medular?",
          "options": [
            {
              "text": "Espacio central, amplio y hueco que se ubica a lo largo de la diáfisis",
              "isCorrect": true,
              "rationale": "La cavidad medular es el espacio central, amplio y hueco, como un conducto, que se ubica a lo largo de la diáfisis."
            },
            {
              "text": "El espacio dentro de la epífisis",
              "isCorrect": false,
              "rationale": "No se encuentra en las epífisis."
            },
            {
              "text": "Un agujero en la superficie del hueso",
              "isCorrect": false,
              "rationale": "Es un conducto interno central."
            },
            {
              "text": "El espacio entre dos huesos",
              "isCorrect": false,
              "rationale": "Es dentro del hueso."
            }
          ],
          "hint": "Es el 'túnel' central del hueso largo..."
        },
        {
          "question": "¿Qué es la epífisis?",
          "options": [
            {
              "text": "Los extremos abultados del hueso donde se ubican las superficies articulares",
              "isCorrect": true,
              "rationale": "Las epífisis se encuentran en ambos extremos del hueso largo y constituyen los abultamientos donde se ubican las superficies articulares."
            },
            {
              "text": "El cuerpo del hueso",
              "isCorrect": false,
              "rationale": "Eso es la diáfisis."
            },
            {
              "text": "La zona media del hueso",
              "isCorrect": false,
              "rationale": "No, están en los extremos."
            },
            {
              "text": "El cartílago de crecimiento",
              "isCorrect": false,
              "rationale": "Eso es el cartílago epifisario."
            }
          ],
          "hint": "Son los 'extremos' ensanchados del hueso largo..."
        },
        {
          "question": "¿De qué tejido están formadas principalmente las epífisis?",
          "options": [
            {
              "text": "Hueso esponjoso rodeado por una delgada lámina de hueso compacto",
              "isCorrect": true,
              "rationale": "Las epífisis están constituidas por hueso esponjoso y rodeadas por una delgada lámina de hueso compacto."
            },
            {
              "text": "Solo hueso compacto",
              "isCorrect": false,
              "rationale": "Tienen hueso esponjoso principalmente."
            },
            {
              "text": "Solo cartílago",
              "isCorrect": false,
              "rationale": "Tienen cartílago solo en la superficie articular."
            },
            {
              "text": "Tejido conectivo laxo",
              "isCorrect": false,
              "rationale": "No, es tejido óseo."
            }
          ],
          "hint": "Son más esponjosas que la diáfisis..."
        },
        {
          "question": "¿Qué cubre las superficies articulares de las epífisis?",
          "options": [
            {
              "text": "Cartílago articular, superficies lisas",
              "isCorrect": true,
              "rationale": "Las epífisis tienen superficies articulares lisas cubiertas por cartílago articular."
            },
            {
              "text": "Periostio",
              "isCorrect": false,
              "rationale": "El periostio no cubre superficies articulares."
            },
            {
              "text": "Piel",
              "isCorrect": false,
              "rationale": "No hay piel sobre las articulaciones."
            },
            {
              "text": "Endostio",
              "isCorrect": false,
              "rationale": "El endostio está dentro del hueso."
            }
          ],
          "hint": "Es un tejido liso que permite el movimiento articular..."
        },
        {
          "question": "¿Qué es la metáfisis?",
          "options": [
            {
              "text": "Zona de transición con forma de cono truncado entre la diáfisis y la epífisis",
              "isCorrect": true,
              "rationale": "La metáfisis tiene forma de cono truncado o embudo y se ubica entre la diáfisis y la epífisis."
            },
            {
              "text": "El cuerpo del hueso",
              "isCorrect": false,
              "rationale": "Eso es la diáfisis."
            },
            {
              "text": "El extremo del hueso",
              "isCorrect": false,
              "rationale": "Eso es la epífisis."
            },
            {
              "text": "La cavidad interna",
              "isCorrect": false,
              "rationale": "Eso es la cavidad medular."
            }
          ],
          "hint": "Es la zona de 'empalme' entre el cuerpo y los extremos..."
        },
        {
          "question": "¿Qué se encuentra en la unión entre la epífisis y la metáfisis?",
          "options": [
            {
              "text": "El cartílago epifisario (placa de crecimiento)",
              "isCorrect": true,
              "rationale": "En la unión entre la epífisis y la metáfisis se ubica el cartílago epifisario, responsable del crecimiento en longitud."
            },
            {
              "text": "El periostio",
              "isCorrect": false,
              "rationale": "El periostio está en la superficie externa."
            },
            {
              "text": "La cavidad medular",
              "isCorrect": false,
              "rationale": "La cavidad medular está en la diáfisis."
            },
            {
              "text": "El endostio",
              "isCorrect": false,
              "rationale": "El endostio está dentro de la cavidad medular."
            }
          ],
          "hint": "Es el 'cartílago de crecimiento'..."
        },
        {
          "question": "¿Qué función cumple el cartílago epifisario?",
          "options": [
            {
              "text": "Permite el crecimiento en longitud del hueso hasta su osificación",
              "isCorrect": true,
              "rationale": "El cartílago epifisario es responsable del crecimiento en longitud de estos huesos, hasta su osificación."
            },
            {
              "text": "Permite el movimiento articular",
              "isCorrect": false,
              "rationale": "Eso es el cartílago articular."
            },
            {
              "text": "Protege la médula ósea",
              "isCorrect": false,
              "rationale": "No es su función."
            },
            {
              "text": "Produce células sanguíneas",
              "isCorrect": false,
              "rationale": "No es función del cartílago."
            }
          ],
          "hint": "Es fundamental para que el hueso crezca en largo..."
        },
        {
          "question": "¿Qué sucede con el cartílago epifisario en el adulto?",
          "options": [
            {
              "text": "Se osifica y es reemplazado por la línea epifisaria",
              "isCorrect": true,
              "rationale": "Cuando el cartílago epifisario se osifica, es reemplazado por la línea epifisaria."
            },
            {
              "text": "Sigue siendo cartílago toda la vida",
              "isCorrect": false,
              "rationale": "No, se osifica en el adulto."
            },
            {
              "text": "Desaparece completamente sin dejar rastro",
              "isCorrect": false,
              "rationale": "Deja la línea epifisaria."
            },
            {
              "text": "Se transforma en periostio",
              "isCorrect": false,
              "rationale": "No, se osifica."
            }
          ],
          "hint": "El crecimiento termina cuando este cartílago se 'cierra'..."
        },
        {
          "question": "¿Qué es el cuello anatómico?",
          "options": [
            {
              "text": "Porción más estrecha ubicada entre la superficie articular y los tubérculos",
              "isCorrect": true,
              "rationale": "El cuello anatómico es una porción más estrecha del hueso, ubicada entre la superficie articular y los tubérculos."
            },
            {
              "text": "La zona de fractura más común",
              "isCorrect": false,
              "rationale": "Eso es el cuello quirúrgico."
            },
            {
              "text": "La parte media de la diáfisis",
              "isCorrect": false,
              "rationale": "No está en la diáfisis."
            },
            {
              "text": "La unión con el cartílago",
              "isCorrect": false,
              "rationale": "No es esa la definición."
            }
          ],
          "hint": "Es la parte más 'fina' cerca de la articulación..."
        },
        {
          "question": "¿Qué es el cuello quirúrgico?",
          "options": [
            {
              "text": "Zona ubicada entre los tubérculos y la diáfisis, sitio frecuente de fracturas",
              "isCorrect": true,
              "rationale": "El cuello quirúrgico está ubicado entre los tubérculos y la diáfisis."
            },
            {
              "text": "La parte más estrecha del hueso",
              "isCorrect": false,
              "rationale": "Eso es el cuello anatómico."
            },
            {
              "text": "La zona de crecimiento",
              "isCorrect": false,
              "rationale": "Eso es la metáfisis."
            },
            {
              "text": "La superficie articular",
              "isCorrect": false,
              "rationale": "No es superficie articular."
            }
          ],
          "hint": "Su nombre viene de que es sitio común de fracturas que requieren cirugía..."
        },
        {
          "question": "¿Qué es el endostio?",
          "options": [
            {
              "text": "Revestimiento interno de la cavidad medular y superficie de trabéculas",
              "isCorrect": true,
              "rationale": "El endostio es el revestimiento interno de la cavidad medular y de la superficie de las trabéculas."
            },
            {
              "text": "La membrana externa del hueso",
              "isCorrect": false,
              "rationale": "Eso es el periostio."
            },
            {
              "text": "El cartílago articular",
              "isCorrect": false,
              "rationale": "No es cartílago."
            },
            {
              "text": "La médula ósea",
              "isCorrect": false,
              "rationale": "No es la médula, es su revestimiento."
            }
          ],
          "hint": "Es el equivalente interno del periostio..."
        },
        {
          "question": "¿Qué función tiene el periostio?",
          "options": [
            {
              "text": "Participa en el crecimiento del hueso y en su irrigación",
              "isCorrect": true,
              "rationale": "El periostio participa en el crecimiento del hueso y en su irrigación, además de estar ricamente vascularizado e inervado."
            },
            {
              "text": "Solo protege el hueso",
              "isCorrect": false,
              "rationale": "No solo protege, también participa en crecimiento e irrigación."
            },
            {
              "text": "Produce células sanguíneas",
              "isCorrect": false,
              "rationale": "Eso es función de la médula."
            },
            {
              "text": "Forma el cartílago articular",
              "isCorrect": false,
              "rationale": "No forma cartílago."
            }
          ],
          "hint": "Tiene roles activos en nutrición y crecimiento..."
        },
        {
          "question": "¿Qué diferencia hay entre médula ósea roja y amarilla según su ubicación etaria?",
          "options": [
            {
              "text": "La roja predomina en niños (hematopoyética), la amarilla en adultos (inactiva, con grasa)",
              "isCorrect": true,
              "rationale": "En niños la médula es rojiza por su función hematopoyética. En adultos está inactiva y acumula tejido adiposo (amarilla)."
            },
            {
              "text": "La roja está en adultos, la amarilla en niños",
              "isCorrect": false,
              "rationale": "Es al revés."
            },
            {
              "text": "Ambas están presentes en igual proporción toda la vida",
              "isCorrect": false,
              "rationale": "La proporción cambia con la edad."
            },
            {
              "text": "La roja es patológica",
              "isCorrect": false,
              "rationale": "No, es normal en niños."
            }
          ],
          "hint": "El color refleja su actividad: roja = activa, amarilla = grasa..."
        }
      ]
    },
    {
      "id": 6,
      "nombre": "Accidentes de la Superficie Ósea",
      "preguntas": 23,
      "data": [
        {
          "question": "¿Qué son los accidentes de la superficie del hueso?",
          "options": [
            {
              "text": "Irregularidades en la superficie ósea: protrusiones, depresiones o superficies ásperas",
              "isCorrect": true,
              "rationale": "En la superficie de los huesos existen irregularidades denominadas accidentes óseos: protrusiones (salientes), depresiones (fosas) o superficies ásperas."
            },
            {
              "text": "Fracturas y lesiones del hueso",
              "isCorrect": false,
              "rationale": "No son lesiones, son estructuras normales."
            },
            {
              "text": "Solo las articulaciones",
              "isCorrect": false,
              "rationale": "Los accidentes pueden ser articulares o extraarticulares."
            },
            {
              "text": "Las cavidades internas del hueso",
              "isCorrect": false,
              "rationale": "Son estructuras de la superficie, no internas."
            }
          ],
          "hint": "Son las 'irregularidades' que se ven en la superficie ósea..."
        },
        {
          "question": "¿Qué son las salientes articulares?",
          "options": [
            {
              "text": "Protrusiones con forma regular relacionada con la superficie articular que soportan",
              "isCorrect": true,
              "rationale": "Las salientes articulares presentan una forma regular, relacionada con la forma geométrica de la superficie articular que soportan."
            },
            {
              "text": "Protuberancias para inserción muscular",
              "isCorrect": false,
              "rationale": "Esas son salientes extraarticulares."
            },
            {
              "text": "Depresiones en el hueso",
              "isCorrect": false,
              "rationale": "No son depresiones, son salientes."
            },
            {
              "text": "Agujeros en el hueso",
              "isCorrect": false,
              "rationale": "No son perforaciones."
            }
          ],
          "hint": "Están relacionadas con las articulaciones..."
        },
        {
          "question": "¿Qué es un cóndilo?",
          "options": [
            {
              "text": "Saliente articular en un complejo articular",
              "isCorrect": true,
              "rationale": "El cóndilo es una saliente articular en un complejo articular."
            },
            {
              "text": "Una depresión articular",
              "isCorrect": false,
              "rationale": "No es depresión, es saliente."
            },
            {
              "text": "Un agujero en el hueso",
              "isCorrect": false,
              "rationale": "No es perforación."
            },
            {
              "text": "Un tubérculo muscular",
              "isCorrect": false,
              "rationale": "No es saliente extraarticular."
            }
          ],
          "hint": "Es una prominencia redondeada que articula..."
        },
        {
          "question": "¿Qué es la cabeza de un hueso?",
          "options": [
            {
              "text": "Extremo abultado articular",
              "isCorrect": true,
              "rationale": "La cabeza es un extremo abultado articular."
            },
            {
              "text": "La parte central del hueso",
              "isCorrect": false,
              "rationale": "Eso es la diáfisis."
            },
            {
              "text": "Una depresión",
              "isCorrect": false,
              "rationale": "Es una saliente, no depresión."
            },
            {
              "text": "El orificio nutricio",
              "isCorrect": false,
              "rationale": "No es un orificio."
            }
          ],
          "hint": "Es el 'extremo redondeado' que articula..."
        },
        {
          "question": "¿Qué es el capítulo?",
          "options": [
            {
              "text": "Extremo abultado articular como una cabeza pero de menor tamaño",
              "isCorrect": true,
              "rationale": "El capítulo es un extremo abultado articular como una cabeza, pero de menor tamaño."
            },
            {
              "text": "Una cavidad articular",
              "isCorrect": false,
              "rationale": "No es cavidad, es saliente."
            },
            {
              "text": "El cuerpo del hueso",
              "isCorrect": false,
              "rationale": "No es el cuerpo."
            },
            {
              "text": "Un tipo de fractura",
              "isCorrect": false,
              "rationale": "No es patología."
            }
          ],
          "hint": "Es como una 'cabeza pequeña'..."
        },
        {
          "question": "¿Qué son las salientes extraarticulares?",
          "options": [
            {
              "text": "Protuberancias irregulares y rugosas destinadas a inserciones de músculos o ligamentos",
              "isCorrect": true,
              "rationale": "Las salientes extraarticulares tienen formas variables, generalmente irregulares y rugosas, destinadas a inserciones de músculos o ligamentos."
            },
            {
              "text": "Superficies que articulan con otros huesos",
              "isCorrect": false,
              "rationale": "Esas son articulares, no extraarticulares."
            },
            {
              "text": "Cavidades dentro del hueso",
              "isCorrect": false,
              "rationale": "No son cavidades."
            },
            {
              "text": "Agujeros vasculares",
              "isCorrect": false,
              "rationale": "No son perforaciones."
            }
          ],
          "hint": "Sirven para que se inserten músculos y ligamentos..."
        },
        {
          "question": "¿Qué es una tuberosidad?",
          "options": [
            {
              "text": "Protuberancia redondeada con relieve rugoso",
              "isCorrect": true,
              "rationale": "La tuberosidad es una protuberancia ósea más bien redondeada con un relieve rugoso."
            },
            {
              "text": "Una depresión profunda",
              "isCorrect": false,
              "rationale": "No es depresión, es saliente."
            },
            {
              "text": "Un agujero pequeño",
              "isCorrect": false,
              "rationale": "No es perforación."
            },
            {
              "text": "Una superficie articular lisa",
              "isCorrect": false,
              "rationale": "Tiene relieve rugoso."
            }
          ],
          "hint": "Es una protuberancia 'gruesa y rugosa'..."
        },
        {
          "question": "¿Qué diferencia hay entre tuberosidad y tubérculo?",
          "options": [
            {
              "text": "El tubérculo es de menor tamaño que la tuberosidad",
              "isCorrect": true,
              "rationale": "El tubérculo es una protuberancia de menor tamaño que la tuberosidad."
            },
            {
              "text": "El tubérculo es articular y la tuberosidad no",
              "isCorrect": false,
              "rationale": "Ambos son extraarticulares."
            },
            {
              "text": "El tubérculo es depresión y la tuberosidad saliente",
              "isCorrect": false,
              "rationale": "Ambos son salientes."
            },
            {
              "text": "No hay diferencia",
              "isCorrect": false,
              "rationale": "La diferencia es el tamaño."
            }
          ],
          "hint": "La diferencia principal es el tamaño..."
        },
        {
          "question": "¿Qué es una eminencia?",
          "options": [
            {
              "text": "Prominencia más bien alargada",
              "isCorrect": true,
              "rationale": "La eminencia es una prominencia más bien alargada."
            },
            {
              "text": "Una depresión",
              "isCorrect": false,
              "rationale": "No es depresión."
            },
            {
              "text": "Un agujero",
              "isCorrect": false,
              "rationale": "No es perforación."
            },
            {
              "text": "Una cavidad",
              "isCorrect": false,
              "rationale": "No es cavidad."
            }
          ],
          "hint": "Es como una 'elevación alargada'..."
        },
        {
          "question": "¿Qué es una apófisis o proceso?",
          "options": [
            {
              "text": "Protrusión desarrollada en una epífisis, con un centro de osificación propio",
              "isCorrect": true,
              "rationale": "La apófisis es una protrusión desarrollada en una epífisis, con un centro de osificación propio."
            },
            {
              "text": "Una depresión profunda",
              "isCorrect": false,
              "rationale": "No es depresión."
            },
            {
              "text": "El cuerpo del hueso",
              "isCorrect": false,
              "rationale": "No es el cuerpo."
            },
            {
              "text": "Una articulación",
              "isCorrect": false,
              "rationale": "No es articulación."
            }
          ],
          "hint": "Tiene su propio centro de osificación..."
        },
        {
          "question": "¿Qué es un epicóndilo?",
          "options": [
            {
              "text": "Relieve óseo relacionado por proximidad con un cóndilo",
              "isCorrect": true,
              "rationale": "El epicóndilo es un relieve óseo relacionado por proximidad con un cóndilo."
            },
            {
              "text": "Un cóndilo grande",
              "isCorrect": false,
              "rationale": "No es el cóndilo mismo, está relacionado con él."
            },
            {
              "text": "Una depresión",
              "isCorrect": false,
              "rationale": "No es depresión."
            },
            {
              "text": "Un agujero",
              "isCorrect": false,
              "rationale": "No es perforación."
            }
          ],
          "hint": "Está 'al lado' del cóndilo..."
        },
        {
          "question": "¿Qué es una cresta ósea?",
          "options": [
            {
              "text": "Reborde óseo elevado",
              "isCorrect": true,
              "rationale": "La cresta es un reborde óseo elevado."
            },
            {
              "text": "Una depresión lineal",
              "isCorrect": false,
              "rationale": "No es depresión, es elevación."
            },
            {
              "text": "Un agujero",
              "isCorrect": false,
              "rationale": "No es perforación."
            },
            {
              "text": "Una cavidad",
              "isCorrect": false,
              "rationale": "No es cavidad."
            }
          ],
          "hint": "Es como una 'elevación lineal' en el hueso..."
        },
        {
          "question": "¿Qué diferencia hay entre cresta y línea?",
          "options": [
            {
              "text": "La cresta es un reborde elevado, la línea es una protrusión ósea lineal menos elevada",
              "isCorrect": true,
              "rationale": "La cresta es un reborde óseo elevado. La línea es una protrusión ósea lineal, menos prominente."
            },
            {
              "text": "No hay diferencia",
              "isCorrect": false,
              "rationale": "La diferencia está en la elevación."
            },
            {
              "text": "La cresta es articular y la línea no",
              "isCorrect": false,
              "rationale": "Ambas son extraarticulares."
            },
            {
              "text": "La línea es depresión y la cresta saliente",
              "isCorrect": false,
              "rationale": "Ambas son salientes."
            }
          ],
          "hint": "Una es más 'levantada' que la otra..."
        },
        {
          "question": "¿Qué es una espina ósea?",
          "options": [
            {
              "text": "Protrusión puntiaguda",
              "isCorrect": true,
              "rationale": "La espina es una protrusión puntiaguda."
            },
            {
              "text": "Una depresión profunda",
              "isCorrect": false,
              "rationale": "No es depresión."
            },
            {
              "text": "Un agujero",
              "isCorrect": false,
              "rationale": "No es perforación."
            },
            {
              "text": "Una superficie plana",
              "isCorrect": false,
              "rationale": "No es plana, es puntiaguda."
            }
          ],
          "hint": "Es como una 'punta' en el hueso..."
        },
        {
          "question": "¿Qué es una fosa?",
          "options": [
            {
              "text": "Depresión o excavación en la superficie del hueso",
              "isCorrect": true,
              "rationale": "La fosa es una depresión o excavación en la superficie ósea."
            },
            {
              "text": "Una saliente",
              "isCorrect": false,
              "rationale": "No es saliente, es depresión."
            },
            {
              "text": "Un agujero que atraviesa el hueso",
              "isCorrect": false,
              "rationale": "No lo atraviesa, es excavación."
            },
            {
              "text": "Una articulación",
              "isCorrect": false,
              "rationale": "No es articulación."
            }
          ],
          "hint": "Es una 'hendidura' en la superficie..."
        },
        {
          "question": "¿Qué es una escotadura o incisura?",
          "options": [
            {
              "text": "Muesca entrante en el borde del hueso",
              "isCorrect": true,
              "rationale": "La escotadura o incisura es una muesca entrante en un borde del hueso."
            },
            {
              "text": "Una saliente",
              "isCorrect": false,
              "rationale": "No es saliente, es muesca."
            },
            {
              "text": "Un agujero central",
              "isCorrect": false,
              "rationale": "Está en el borde, no en el centro."
            },
            {
              "text": "Una cavidad profunda",
              "isCorrect": false,
              "rationale": "Es una muesca, no cavidad profunda."
            }
          ],
          "hint": "Es como un 'recorte' en el borde del hueso..."
        },
        {
          "question": "¿Qué es un surco?",
          "options": [
            {
              "text": "Depresión lineal en la superficie del hueso",
              "isCorrect": true,
              "rationale": "El surco es una depresión lineal en la superficie ósea."
            },
            {
              "text": "Una saliente alargada",
              "isCorrect": false,
              "rationale": "No es saliente, es depresión."
            },
            {
              "text": "Un agujero",
              "isCorrect": false,
              "rationale": "No es perforación."
            },
            {
              "text": "Una articulación",
              "isCorrect": false,
              "rationale": "No es articulación."
            }
          ],
          "hint": "Es como un 'canal' poco profundo..."
        },
        {
          "question": "¿Qué son las cavidades articulares?",
          "options": [
            {
              "text": "Depresiones esferoidales, elipsoidales o cupuliformes cubiertas por cartílago articular",
              "isCorrect": true,
              "rationale": "Las cavidades articulares son depresiones esferoidales, elipsoidales o cupuliformes, con superficies lisas cubiertas por cartílago articular."
            },
            {
              "text": "Agujeros que atraviesan el hueso",
              "isCorrect": false,
              "rationale": "No son perforaciones."
            },
            {
              "text": "Cavidades con aire",
              "isCorrect": false,
              "rationale": "No contienen aire."
            },
            {
              "text": "Depresiones para inserción muscular",
              "isCorrect": false,
              "rationale": "Son articulares, no de inserción."
            }
          ],
          "hint": "Reciben la saliente del hueso con el que se articulan..."
        },
        {
          "question": "¿Qué tipos de cavidades no articulares existen?",
          "options": [
            {
              "text": "De inserción, de recepción y de ampliación (celdas y senos)",
              "isCorrect": true,
              "rationale": "Las cavidades no articulares pueden ser de inserción muscular, de recepción (paso de estructuras), o de ampliación (celdas y senos)."
            },
            {
              "text": "Solo cavidades con aire",
              "isCorrect": false,
              "rationale": "Hay más tipos."
            },
            {
              "text": "Solo cavidades articulares",
              "isCorrect": false,
              "rationale": "Esas son articulares, no extraarticulares."
            },
            {
              "text": "Solo forámenes",
              "isCorrect": false,
              "rationale": "Los forámenes son perforaciones."
            }
          ],
          "hint": "Tienen funciones variadas: inserción, paso, ampliación..."
        },
        {
          "question": "¿Qué es un foramen?",
          "options": [
            {
              "text": "Agujero o perforación en el hueso",
              "isCorrect": true,
              "rationale": "El foramen es un agujero o perforación en el hueso."
            },
            {
              "text": "Una depresión",
              "isCorrect": false,
              "rationale": "No es depresión, es perforación."
            },
            {
              "text": "Una saliente",
              "isCorrect": false,
              "rationale": "No es saliente."
            },
            {
              "text": "Una articulación",
              "isCorrect": false,
              "rationale": "No es articulación."
            }
          ],
          "hint": "Es un 'agujero' que atraviesa o llega al hueso..."
        },
        {
          "question": "¿Qué es el foramen nutricio?",
          "options": [
            {
              "text": "Orificio por donde pasa la arteria nutricia principal del hueso",
              "isCorrect": true,
              "rationale": "El foramen nutricio es el orificio por donde pasan los vasos que irrigan el hueso, principalmente la arteria nutricia."
            },
            {
              "text": "Una articulación",
              "isCorrect": false,
              "rationale": "No es articulación."
            },
            {
              "text": "Una depresión",
              "isCorrect": false,
              "rationale": "No es depresión, es perforación."
            },
            {
              "text": "Una saliente",
              "isCorrect": false,
              "rationale": "No es saliente."
            }
          ],
          "hint": "Por ahí entra el vaso que nutre al hueso..."
        },
        {
          "question": "¿Qué son los conductos de transmisión?",
          "options": [
            {
              "text": "Orificios que comunican una cara del hueso con la opuesta, permitiendo el pasaje de estructuras",
              "isCorrect": true,
              "rationale": "Los conductos de transmisión comunican una de las caras del hueso con la cara opuesta, permitiendo el pasaje de estructuras anatómicas."
            },
            {
              "text": "Conductos dentro de la cavidad medular",
              "isCorrect": false,
              "rationale": "Atraviesan el hueso de lado a lado."
            },
            {
              "text": "Conductos articulares",
              "isCorrect": false,
              "rationale": "No son articulares."
            },
            {
              "text": "Conductos para médula ósea",
              "isCorrect": false,
              "rationale": "No son para médula."
            }
          ],
          "hint": "Son túneles que cruzan el hueso de lado a lado..."
        },
        {
          "question": "¿Cómo se clasifican los forámenes según su calibre?",
          "options": [
            {
              "text": "De primer orden (arteria nutricia principal), segundo orden (cerca de articulaciones) y tercer orden (más numerosos, superficies no articulares)",
              "isCorrect": true,
              "rationale": "Los más amplios son de primer orden, los intermedios de segundo orden, y los más estrechos de tercer orden."
            },
            {
              "text": "Solo grandes y pequeños",
              "isCorrect": false,
              "rationale": "Hay tres categorías."
            },
            {
              "text": "Articulares y extraarticulares",
              "isCorrect": false,
              "rationale": "No se clasifican así."
            },
            {
              "text": "No hay clasificación",
              "isCorrect": false,
              "rationale": "Sí hay clasificación por calibre."
            }
          ],
          "hint": "Hay tres tamaños según el vaso que atraviesan..."
        }
      ]
    },
    {
      "id": 7,
      "nombre": "Osificación",
      "preguntas": 19,
      "data": [
        {
          "question": "¿Qué es la osificación?",
          "options": [
            {
              "text": "Proceso por el cual los osteoblastos y osteocitos producen la matriz ósea",
              "isCorrect": true,
              "rationale": "La osificación es el proceso por el cual los osteoblastos y osteocitos producen la matriz ósea."
            },
            {
              "text": "La formación de cartílago",
              "isCorrect": false,
              "rationale": "No es formación de cartílago, es de hueso."
            },
            {
              "text": "La destrucción del hueso",
              "isCorrect": false,
              "rationale": "Eso es reabsorción ósea, no osificación."
            },
            {
              "text": "El depósito de calcio en tejidos blandos",
              "isCorrect": false,
              "rationale": "Eso es calcificación ectópica."
            }
          ],
          "hint": "Es cómo se forma el tejido óseo..."
        },
        {
          "question": "¿Cuáles son los dos tipos principales de osificación?",
          "options": [
            {
              "text": "Osificación membranosa y osificación condral",
              "isCorrect": true,
              "rationale": "Los dos tipos principales son osificación membranosa y osificación condral."
            },
            {
              "text": "Osificación primaria y secundaria",
              "isCorrect": false,
              "rationale": "Eso se refiere a centros de osificación, no a tipos."
            },
            {
              "text": "Osificación interna y externa",
              "isCorrect": false,
              "rationale": "No existen esos términos."
            },
            {
              "text": "Osificación rápida y lenta",
              "isCorrect": false,
              "rationale": "No se clasifican por velocidad."
            }
          ],
          "hint": "Una parte de tejido conectivo, la otra de cartílago..."
        },
        {
          "question": "¿Qué es la osificación membranosa?",
          "options": [
            {
              "text": "El hueso se forma a partir de un molde de tejido conectivo mesenquimatoso vascularizado",
              "isCorrect": true,
              "rationale": "En la osificación membranosa el hueso se forma a partir de un molde de tejido conectivo mesenquimatoso ricamente vascularizado."
            },
            {
              "text": "El hueso se forma a partir de cartílago",
              "isCorrect": false,
              "rationale": "Eso es la osificación condral."
            },
            {
              "text": "El hueso se forma a partir de otro hueso",
              "isCorrect": false,
              "rationale": "No, se forma desde tejido conectivo."
            },
            {
              "text": "Solo ocurre en el feto",
              "isCorrect": false,
              "rationale": "Puede ocurrir en otras etapas también."
            }
          ],
          "hint": "No hay cartílago previo, solo tejido conectivo..."
        },
        {
          "question": "¿Cuáles son las etapas de la osificación membranosa?",
          "options": [
            {
              "text": "Diferenciación en células osteogénicas → producción de matriz osteoide → calcificación",
              "isCorrect": true,
              "rationale": "Las células se diferencian en osteoblastos, producen matriz osteoide y luego se calcifica formando la matriz ósea."
            },
            {
              "text": "Formación de cartílago → calcificación → reemplazo por hueso",
              "isCorrect": false,
              "rationale": "Eso es osificación condral."
            },
            {
              "text": "Fractura → callo óseo → consolidación",
              "isCorrect": false,
              "rationale": "Eso es consolidación de fractura."
            },
            {
              "text": "Solo una etapa: depósito de calcio",
              "isCorrect": false,
              "rationale": "Son múltiples etapas."
            }
          ],
          "hint": "Hay diferenciación celular, producción de matriz y luego calcificación..."
        },
        {
          "question": "¿Qué huesos se forman por osificación membranosa?",
          "options": [
            {
              "text": "Huesos planos de la calvaria, mandíbula y clavícula",
              "isCorrect": true,
              "rationale": "La osificación membranosa se produce en los huesos planos que rodean la cavidad craneal, la mandíbula y la clavícula."
            },
            {
              "text": "Todos los huesos largos",
              "isCorrect": false,
              "rationale": "Los huesos largos son de osificación condral."
            },
            {
              "text": "Solo el fémur",
              "isCorrect": false,
              "rationale": "El fémur es de osificación condral."
            },
            {
              "text": "Las vértebras",
              "isCorrect": false,
              "rationale": "Las vértebras son de osificación condral."
            }
          ],
          "hint": "Son los huesos que NO tienen cartílago previo..."
        },
        {
          "question": "¿Qué es la matriz osteoide?",
          "options": [
            {
              "text": "Matriz preósea producida por osteoblastos antes de la calcificación",
              "isCorrect": true,
              "rationale": "La sustancia osteoide es la matriz preósea que inicialmente no tiene depósitos de calcio, hasta que se calcifica."
            },
            {
              "text": "El hueso completamente formado",
              "isCorrect": false,
              "rationale": "No, es previa a la calcificación."
            },
            {
              "text": "El cartílago de crecimiento",
              "isCorrect": false,
              "rationale": "No es cartílago."
            },
            {
              "text": "La médula ósea",
              "isCorrect": false,
              "rationale": "No es médula."
            }
          ],
          "hint": "Es la matriz 'pre-hueso', sin mineralizar aún..."
        },
        {
          "question": "¿Qué es la osificación condral?",
          "options": [
            {
              "text": "El esbozo inicial del hueso es de tejido cartilaginoso revestido de pericondrio",
              "isCorrect": true,
              "rationale": "En la osificación condral el esbozo inicial del hueso es de tejido cartilaginoso revestido de pericondrio."
            },
            {
              "text": "El hueso se forma directamente del tejido conectivo",
              "isCorrect": false,
              "rationale": "Eso es la osificación membranosa."
            },
            {
              "text": "Solo ocurre en el cráneo",
              "isCorrect": false,
              "rationale": "Ocurre en la mayoría de los huesos."
            },
            {
              "text": "No hay pericondrio involucrado",
              "isCorrect": false,
              "rationale": "Sí hay pericondrio."
            }
          ],
          "hint": "El hueso reemplaza a un modelo de cartílago..."
        },
        {
          "question": "¿Cuáles son los subtipos de osificación condral?",
          "options": [
            {
              "text": "Osificación pericondral y osificación endocondral",
              "isCorrect": true,
              "rationale": "La osificación condral tiene dos subtipos: pericondral (desde el pericondrio) y endocondral (desde centros dentro del cartílago)."
            },
            {
              "text": "Primaria y secundaria",
              "isCorrect": false,
              "rationale": "Esos son centros de osificación, no subtipos."
            },
            {
              "text": "Interna y externa",
              "isCorrect": false,
              "rationale": "No existen esos términos."
            },
            {
              "text": "Solo hay un tipo de osificación condral",
              "isCorrect": false,
              "rationale": "Hay dos subtipos."
            }
          ],
          "hint": "Una desde afuera (pericondrio), otra desde adentro..."
        },
        {
          "question": "¿Qué caracteriza a la osificación pericondral?",
          "options": [
            {
              "text": "Se desarrolla desde el pericondrio, característica de la diáfisis de huesos largos",
              "isCorrect": true,
              "rationale": "La osificación pericondral se desarrolla desde el pericondrio y es característica de las diáfisis de los huesos largos."
            },
            {
              "text": "Se desarrolla dentro del cartílago",
              "isCorrect": false,
              "rationale": "Eso es la endocondral."
            },
            {
              "text": "Ocurre solo en huesos planos",
              "isCorrect": false,
              "rationale": "Ocurre en huesos largos."
            },
            {
              "text": "No hay pericondrio involucrado",
              "isCorrect": false,
              "rationale": "El pericondrio es fundamental."
            }
          ],
          "hint": "El pericondrio se transforma en periostio osteogénico..."
        },
        {
          "question": "¿Qué caracteriza a la osificación endocondral?",
          "options": [
            {
              "text": "Se desarrolla desde centros de osificación en el espesor del cartílago",
              "isCorrect": true,
              "rationale": "La osificación endocondral se desarrolla a partir de centros de osificación bien definidos, localizados en el espesor del cartílago."
            },
            {
              "text": "Se desarrolla desde el pericondrio",
              "isCorrect": false,
              "rationale": "Eso es la pericondral."
            },
            {
              "text": "Ocurre sin participación de vasos",
              "isCorrect": false,
              "rationale": "Los vasos penetran desde el periostio."
            },
            {
              "text": "Solo forma hueso compacto",
              "isCorrect": false,
              "rationale": "Forma ambos tipos de hueso."
            }
          ],
          "hint": "Los vasos penetran al interior del cartílago..."
        },
        {
          "question": "¿Qué son los centros de osificación?",
          "options": [
            {
              "text": "Lugares donde se inicia el proceso de osificación en huesos de origen cartilaginoso",
              "isCorrect": true,
              "rationale": "Los centros de osificación son los lugares donde se inicia el proceso de osificación en los huesos de origen cartilaginoso."
            },
            {
              "text": "Las articulaciones",
              "isCorrect": false,
              "rationale": "No son articulaciones."
            },
            {
              "text": "Las fracturas",
              "isCorrect": false,
              "rationale": "No son fracturas."
            },
            {
              "text": "Los vasos nutricios",
              "isCorrect": false,
              "rationale": "No son vasos."
            }
          ],
          "hint": "Son los 'puntos de partida' donde empieza a formarse hueso..."
        },
        {
          "question": "¿Qué diferencia hay entre centros de osificación primarios y secundarios?",
          "options": [
            {
              "text": "Los primarios aparecen primero (diafisarios), los secundarios después del nacimiento (epifisarios y apofisarios)",
              "isCorrect": true,
              "rationale": "Los centros primarios son diafisarios. Los secundarios son epifisarios y apofisarios, aparecen después del nacimiento."
            },
            {
              "text": "No hay diferencia",
              "isCorrect": false,
              "rationale": "Difieren en momento de aparición y ubicación."
            },
            {
              "text": "Los primarios forman epífisis, los secundarios diáfisis",
              "isCorrect": false,
              "rationale": "Es al revés."
            },
            {
              "text": "Los primarios están en adultos, los secundarios en niños",
              "isCorrect": false,
              "rationale": "Ambos están en desarrollo."
            }
          ],
          "hint": "Primero aparece uno, después el otro..."
        },
        {
          "question": "¿Qué excepción hay respecto a los centros de osificación secundarios?",
          "options": [
            {
              "text": "La epífisis distal del fémur y proximal de la tibia aparecen antes del nacimiento",
              "isCorrect": true,
              "rationale": "Los centros secundarios se originan después del nacimiento, excepto en la epífisis distal del fémur y proximal de la tibia."
            },
            {
              "text": "No hay excepciones",
              "isCorrect": false,
              "rationale": "Sí hay excepciones."
            },
            {
              "text": "Todas las epífisis aparecen antes del nacimiento",
              "isCorrect": false,
              "rationale": "No, la mayoría después."
            },
            {
              "text": "Ningún centro secundario aparece antes del nacimiento",
              "isCorrect": false,
              "rationale": "Hay dos excepciones."
            }
          ],
          "hint": "Son dos huesos de la rodilla..."
        },
        {
          "question": "¿Qué función tiene el cartílago epifisario en el crecimiento?",
          "options": [
            {
              "text": "Permite el crecimiento en longitud del hueso hasta su osificación",
              "isCorrect": true,
              "rationale": "El cartílago epifisario permite, mediante su osificación, el agregado de material óseo a la diáfisis, aumentando su longitud."
            },
            {
              "text": "Permite el crecimiento en grosor",
              "isCorrect": false,
              "rationale": "El crecimiento en grosor es por el periostio."
            },
            {
              "text": "No tiene función en el crecimiento",
              "isCorrect": false,
              "rationale": "Es fundamental para el crecimiento."
            },
            {
              "text": "Solo forma articulaciones",
              "isCorrect": false,
              "rationale": "No es su función principal."
            }
          ],
          "hint": "Es la 'placa de crecimiento' que permite al hueso alargarse..."
        },
        {
          "question": "¿Qué función tiene el periostio diafisario en el crecimiento?",
          "options": [
            {
              "text": "Reforma el hueso endocondral dando forma cilíndrica a la diáfisis",
              "isCorrect": true,
              "rationale": "El periostio diafisario reforma al hueso endocondral dando la forma cilíndrica a la diáfisis."
            },
            {
              "text": "Permite el crecimiento en longitud",
              "isCorrect": false,
              "rationale": "Eso es función del cartílago epifisario."
            },
            {
              "text": "No participa en el crecimiento",
              "isCorrect": false,
              "rationale": "Sí participa activamente."
            },
            {
              "text": "Solo nutre al hueso",
              "isCorrect": false,
              "rationale": "No solo nutre, también remodela."
            }
          ],
          "hint": "Da la forma cilíndrica característica..."
        },
        {
          "question": "¿Por qué la metáfisis es un punto crítico del hueso durante el crecimiento?",
          "options": [
            {
              "text": "Porque allí está el cartílago epifisario responsable del crecimiento en longitud",
              "isCorrect": true,
              "rationale": "La metáfisis es crítica porque allí se ubica el cartílago epifisario que permite el crecimiento."
            },
            {
              "text": "Porque es la zona más frágil",
              "isCorrect": false,
              "rationale": "No es la razón principal."
            },
            {
              "text": "Porque no tiene irrigación",
              "isCorrect": false,
              "rationale": "Sí tiene irrigación."
            },
            {
              "text": "Porque es donde se producen fracturas",
              "isCorrect": false,
              "rationale": "No es la razón principal."
            }
          ],
          "hint": "Es donde ocurre el crecimiento activo..."
        },
        {
          "question": "¿Qué huesos se denominan 'membranosos'?",
          "options": [
            {
              "text": "Los que se forman por osificación membranosa: huesos planos de calvaria, mandíbula y clavícula",
              "isCorrect": true,
              "rationale": "Los huesos que se forman mediante osificación membranosa se denominan huesos membranosos."
            },
            {
              "text": "Todos los huesos del cuerpo",
              "isCorrect": false,
              "rationale": "Solo algunos son membranosos."
            },
            {
              "text": "Los huesos largos",
              "isCorrect": false,
              "rationale": "Los huesos largos son de osificación condral."
            },
            {
              "text": "Las vértebras",
              "isCorrect": false,
              "rationale": "Las vértebras son de osificación condral."
            }
          ],
          "hint": "Son los que NO pasaron por etapa cartilaginosa..."
        },
        {
          "question": "¿Cómo se distingue el hueso reticular del hueso laminar?",
          "options": [
            {
              "text": "El reticular es embrionario con organización reticular; el laminar es del adulto con capas cilíndricas",
              "isCorrect": true,
              "rationale": "El hueso reticular es de tipo embrionario. El hueso laminar es del adulto, con organización en laminillas cilíndricas."
            },
            {
              "text": "No hay diferencia",
              "isCorrect": false,
              "rationale": "Tienen organización diferente."
            },
            {
              "text": "El reticular es del adulto",
              "isCorrect": false,
              "rationale": "Es al revés, el reticular es embrionario."
            },
            {
              "text": "El laminar es más débil",
              "isCorrect": false,
              "rationale": "No, ambos son resistentes."
            }
          ],
          "hint": "Uno es inmaduro, el otro maduro..."
        },
        {
          "question": "¿Qué son los huesos del carpo y su relación con la edad?",
          "options": [
            {
              "text": "Los 8 huesos del carpo se osifican entre el 1° y 9° año, sirviendo para calcular la edad radiológica",
              "isCorrect": true,
              "rationale": "Los ocho huesos del carpo se osifican progresivamente entre el primero y el noveno año, lo que sirve para calcular radiológicamente la edad."
            },
            {
              "text": "Se osifican todos al nacer",
              "isCorrect": false,
              "rationale": "No, se osifican gradualmente."
            },
            {
              "text": "Se osifican en la adolescencia",
              "isCorrect": false,
              "rationale": "Es entre el 1° y 9° año."
            },
            {
              "text": "No tienen relación con la edad",
              "isCorrect": false,
              "rationale": "Sí se usan para calcular edad."
            }
          ],
          "hint": "Empieza por el grande y termina con el pisiforme..."
        }
      ]
    },
    {
      "id": 8,
      "nombre": "Vascularización del Hueso",
      "preguntas": 18,
      "data": [
        {
          "question": "¿Cómo se clasifican las arterias de los huesos largos?",
          "options": [
            {
              "text": "En tres sistemas: diafisario, perióstico y epifisometafisario",
              "isCorrect": true,
              "rationale": "En los huesos largos las arterias se clasifican en tres sistemas: sistema diafisario, sistema perióstico y sistema epifisometafisario."
            },
            {
              "text": "En arterias grandes y pequeñas",
              "isCorrect": false,
              "rationale": "No es la clasificación correcta."
            },
            {
              "text": "En arterias internas y externas",
              "isCorrect": false,
              "rationale": "No es la terminología usada."
            },
            {
              "text": "Solo hay un tipo de arteria",
              "isCorrect": false,
              "rationale": "Hay tres sistemas."
            }
          ],
          "hint": "Cada sistema tiene origen y distribución diferente..."
        },
        {
          "question": "¿Qué es la arteria nutricia?",
          "options": [
            {
              "text": "La arteria principal del hueso que penetra por el foramen nutricio de mayor calibre",
              "isCorrect": true,
              "rationale": "La arteria nutricia es la principal del hueso, penetra por el foramen nutricio de mayor calibre."
            },
            {
              "text": "Una arteria pequeña del periostio",
              "isCorrect": false,
              "rationale": "Es la arteria principal."
            },
            {
              "text": "Una arteria que nutre el cartílago",
              "isCorrect": false,
              "rationale": "El cartílago es avascular."
            },
            {
              "text": "Una vena",
              "isCorrect": false,
              "rationale": "Es una arteria."
            }
          ],
          "hint": "Es la arteria 'principal' que nutre al hueso..."
        },
        {
          "question": "¿Cómo penetra la arteria nutricia a la diáfisis?",
          "options": [
            {
              "text": "En dirección oblicua a través del hueso compacto, formando el conducto nutricio",
              "isCorrect": true,
              "rationale": "La arteria nutricia ingresa en dirección oblicua a través del hueso compacto de la diáfisis, formando el conducto nutricio."
            },
            {
              "text": "Verticalmente desde arriba",
              "isCorrect": false,
              "rationale": "Penetra oblicuamente."
            },
            {
              "text": "Desde la epífisis",
              "isCorrect": false,
              "rationale": "Penetra en la diáfisis."
            },
            {
              "text": "Horizontalmente recto",
              "isCorrect": false,
              "rationale": "Penetra oblicuamente."
            }
          ],
          "hint": "No entra recto, entra en ángulo..."
        },
        {
          "question": "¿Hacia dónde se dirigen las arterias nutricias del miembro superior e inferior?",
          "options": [
            {
              "text": "En el MS hacia el codo, en el MI alejándose de la rodilla",
              "isCorrect": true,
              "rationale": "En el miembro superior las arterias nutricias se dirigen hacia el codo y en el miembro inferior se alejan de la rodilla."
            },
            {
              "text": "Siempre hacia arriba",
              "isCorrect": false,
              "rationale": "Depende del miembro."
            },
            {
              "text": "Siempre hacia abajo",
              "isCorrect": false,
              "rationale": "Depende del miembro."
            },
            {
              "text": "Horizontalmente",
              "isCorrect": false,
              "rationale": "Tienen dirección oblicua."
            }
          ],
          "hint": "Hay una regla: 'hacia el codo, lejos de la rodilla'..."
        },
        {
          "question": "¿Cómo se distribuye la arteria nutricia en el hueso?",
          "options": [
            {
              "text": "En el tejido compacto por conductos centrales y transversos, y en la médula ósea",
              "isCorrect": true,
              "rationale": "La arteria nutricia se distribuye en el tejido óseo compacto por los conductos centrales y transversos de la osteona, y en la médula ósea."
            },
            {
              "text": "Solo en el periostio",
              "isCorrect": false,
              "rationale": "También irriga el interior."
            },
            {
              "text": "Solo en la epífisis",
              "isCorrect": false,
              "rationale": "Irriga diáfisis y médula."
            },
            {
              "text": "No irriga la médula",
              "isCorrect": false,
              "rationale": "Sí irriga la médula."
            }
          ],
          "hint": "Llega a todo: compacto y médula..."
        },
        {
          "question": "¿Qué es el sistema perióstico de irrigación?",
          "options": [
            {
              "text": "Red vascular del periostio proveniente de arterias de proximidad (músculos, ligamentos)",
              "isCorrect": true,
              "rationale": "El periostio está ricamente vascularizado por arterias de la proximidad que dan origen a una abundante red vascular arterial."
            },
            {
              "text": "Las arterias que salen del hueso",
              "isCorrect": false,
              "rationale": "Son arterias que llegan al hueso."
            },
            {
              "text": "Solo venas",
              "isCorrect": false,
              "rationale": "Son arterias."
            },
            {
              "text": "El sistema de la médula",
              "isCorrect": false,
              "rationale": "Es de la superficie externa."
            }
          ],
          "hint": "Es la red vascular que rodea al hueso por fuera..."
        },
        {
          "question": "¿Qué ocurre si se separa el periostio?",
          "options": [
            {
              "text": "Se produce una abundante hemorragia en la superficie del hueso",
              "isCorrect": true,
              "rationale": "Cuando se separa el periostio, se produce una abundante hemorragia en la superficie por su rica vascularización."
            },
            {
              "text": "No pasa nada",
              "isCorrect": false,
              "rationale": "Hay sangrado por la rica vascularización."
            },
            {
              "text": "El hueso se debilita",
              "isCorrect": false,
              "rationale": "El problema inmediato es el sangrado."
            },
            {
              "text": "Se forma nuevo hueso",
              "isCorrect": false,
              "rationale": "Eso ocurre después, no inmediatamente."
            }
          ],
          "hint": "Por eso es tan vascularizado..."
        },
        {
          "question": "¿Qué es el sistema epifisometafisario?",
          "options": [
            {
              "text": "Arterias que irrigan epífisis y metáfisis, provenientes de arterias articulares y musculotendinosas",
              "isCorrect": true,
              "rationale": "El sistema epifisometafisario se origina en las arterias articulares, las arterias musculotendinosas vecinas y algunas arterias propias."
            },
            {
              "text": "Las arterias de la diáfisis",
              "isCorrect": false,
              "rationale": "Esas son del sistema diafisario."
            },
            {
              "text": "Las venas del hueso",
              "isCorrect": false,
              "rationale": "Son arterias."
            },
            {
              "text": "Solo irriga la metáfisis",
              "isCorrect": false,
              "rationale": "Irriga epífisis y metáfisis."
            }
          ],
          "hint": "Irriga los extremos del hueso largo..."
        },
        {
          "question": "¿Qué son las arterias médulares?",
          "options": [
            {
              "text": "Arterias que proceden de la arteria nutricia diafisaria y se capilarizan en sinusoides",
              "isCorrect": true,
              "rationale": "Las arterias de la médula ósea proceden de la arteria nutricia diafisaria. Estas arterias se capilarizan, continuándose en sinusoides."
            },
            {
              "text": "Arterias del periostio",
              "isCorrect": false,
              "rationale": "Son de la médula."
            },
            {
              "text": "Venas del hueso",
              "isCorrect": false,
              "rationale": "Son arterias."
            },
            {
              "text": "Arterias que salen del hueso",
              "isCorrect": false,
              "rationale": "Van hacia la médula."
            }
          ],
          "hint": "Están dentro de la cavidad medular..."
        },
        {
          "question": "¿Cómo se irrigan los huesos planos?",
          "options": [
            {
              "text": "Por arterias periósticas (red perióstica) y arterias orificiales (orificios mayores, trayecto oblicuo)",
              "isCorrect": true,
              "rationale": "Los huesos planos se irrigan por arterias periósticas y arterias orificiales que penetran por orificios de mayor tamaño."
            },
            {
              "text": "Solo por una arteria nutricia",
              "isCorrect": false,
              "rationale": "Tienen múltiples fuentes."
            },
            {
              "text": "No tienen irrigación propia",
              "isCorrect": false,
              "rationale": "Sí tienen irrigación."
            },
            {
              "text": "Solo por vasos de la médula",
              "isCorrect": false,
              "rationale": "Tienen arterias periósticas y orificiales."
            }
          ],
          "hint": "Tienen dos tipos de arterias según el orificio de entrada..."
        },
        {
          "question": "¿Cómo se irrigan los huesos cortos?",
          "options": [
            {
              "text": "Por arterias periósticas de vecindad y arterias orificiales propias",
              "isCorrect": true,
              "rationale": "La irrigación de los huesos cortos procede de arterias periósticas de la vecindad y arterias orificiales propias del hueso."
            },
            {
              "text": "Solo por una arteria central",
              "isCorrect": false,
              "rationale": "Tienen múltiples fuentes."
            },
            {
              "text": "No tienen irrigación",
              "isCorrect": false,
              "rationale": "Sí tienen irrigación."
            },
            {
              "text": "Solo por difusión",
              "isCorrect": false,
              "rationale": "Tienen vasos sanguíneos."
            }
          ],
          "hint": "Similar a los huesos planos pero adaptado a su forma..."
        },
        {
          "question": "¿Qué importancia tienen los pedículos vasculares en algunos huesos cortos?",
          "options": [
            {
              "text": "Su integridad es fundamental para mantener una correcta nutrición ósea",
              "isCorrect": true,
              "rationale": "En algunos huesos cortos ciertas arterias constituyentes forman pedículos bien definidos cuya integridad es fundamental para la nutrición ósea."
            },
            {
              "text": "No tienen importancia",
              "isCorrect": false,
              "rationale": "Son fundamentales."
            },
            {
              "text": "Solo sirven para cirugía",
              "isCorrect": false,
              "rationale": "Son importantes para la nutrición normal."
            },
            {
              "text": "No existen pedículos en huesos cortos",
              "isCorrect": false,
              "rationale": "Sí existen en algunos."
            }
          ],
          "hint": "Si se dañan, el hueso puede sufrir..."
        },
        {
          "question": "¿Qué son las venas diploicas?",
          "options": [
            {
              "text": "Venas ensanchadas con trayecto sinuoso en el tejido esponjoso de los huesos planos",
              "isCorrect": true,
              "rationale": "En los huesos planos las venas ensanchadas ubicadas en el tejido óseo esponjoso se denominan venas diploicas. Poseen un trayecto sinuoso."
            },
            {
              "text": "Venas del corazón",
              "isCorrect": false,
              "rationale": "Son venas óseas."
            },
            {
              "text": "Venas del cerebro",
              "isCorrect": false,
              "rationale": "Están en el hueso, no en el cerebro."
            },
            {
              "text": "Arterias del diploe",
              "isCorrect": false,
              "rationale": "Son venas, no arterias."
            }
          ],
          "hint": "Están en el diploe de los huesos craneales..."
        },
        {
          "question": "¿Qué es la vena centromedular?",
          "options": [
            {
              "text": "Vena única o ramificada que inicia la circulación de retorno en la cavidad medular",
              "isCorrect": true,
              "rationale": "La circulación venosa de un hueso largo se inicia en una vena centromedular única o ramificada y ensanchada."
            },
            {
              "text": "Una arteria",
              "isCorrect": false,
              "rationale": "Es una vena."
            },
            {
              "text": "La vena del periostio",
              "isCorrect": false,
              "rationale": "Está en la cavidad medular."
            },
            {
              "text": "Un conducto arterial",
              "isCorrect": false,
              "rationale": "Es una vena."
            }
          ],
          "hint": "Es el inicio del drenaje venoso del hueso..."
        },
        {
          "question": "¿Por qué hay sangrado abundante en las fracturas?",
          "options": [
            {
              "text": "Porque la circulación sanguínea de los huesos es abundante",
              "isCorrect": true,
              "rationale": "La circulación sanguínea de los huesos es abundante, lo que explica el sangrado en fracturas desde cavidad medular, médula, hueso compacto y periostio."
            },
            {
              "text": "Porque los huesos tienen muchas arterias pero pocas venas",
              "isCorrect": false,
              "rationale": "Tienen ambos sistemas desarrollados."
            },
            {
              "text": "Porque la sangre está a presión",
              "isCorrect": false,
              "rationale": "Es por la abundancia de circulación."
            },
            {
              "text": "No hay sangrado abundante en fracturas",
              "isCorrect": false,
              "rationale": "Sí lo hay."
            }
          ],
          "hint": "Los huesos están muy vascularizados..."
        },
        {
          "question": "¿Qué son las anastomosis entre sistemas vasculares óseos?",
          "options": [
            {
              "text": "Conexiones entre el sistema óseo y las arterias médulares",
              "isCorrect": true,
              "rationale": "Los sistemas que irrigan el tejido óseo de los huesos largos y las arterias que irrigan la médula ósea se anastomosan entre sí."
            },
            {
              "text": "Conexiones entre huesos vecinos",
              "isCorrect": false,
              "rationale": "Son conexiones dentro del mismo hueso."
            },
            {
              "text": "Comunicaciones entre arterias y venas",
              "isCorrect": false,
              "rationale": "Son conexiones arteriales."
            },
            {
              "text": "No existen anastomosis en el hueso",
              "isCorrect": false,
              "rationale": "Sí existen."
            }
          ],
          "hint": "Los sistemas se comunican entre sí..."
        },
        {
          "question": "¿Qué es la necrosis avascular?",
          "options": [
            {
              "text": "Muerte celular por isquemia cuando un fragmento óseo pierde su irrigación",
              "isCorrect": true,
              "rationale": "La necrosis avascular es la muerte celular por isquemia, cuando un fragmento óseo separado no recibe irrigación de la arteria nutricia."
            },
            {
              "text": "Muerte del hueso por infección",
              "isCorrect": false,
              "rationale": "Es por falta de irrigación, no infección."
            },
            {
              "text": "Fractura del hueso",
              "isCorrect": false,
              "rationale": "No es fractura, es muerte del tejido."
            },
            {
              "text": "Crecimiento anormal del hueso",
              "isCorrect": false,
              "rationale": "Es muerte, no crecimiento."
            }
          ],
          "hint": "Muerte del tejido por falta de sangre..."
        },
        {
          "question": "¿En qué fracturas es típica la necrosis avascular?",
          "options": [
            {
              "text": "Fracturas de escafoides, astrágalo, cuello femoral y cuello del húmero",
              "isCorrect": true,
              "rationale": "La necrosis avascular ocurre típicamente en fracturas del escafoides, astrágalo, cuello femoral y cuello del húmero."
            },
            {
              "text": "Fracturas de costillas",
              "isCorrect": false,
              "rationale": "No es típico ahí."
            },
            {
              "text": "Fracturas de dedos",
              "isCorrect": false,
              "rationale": "No es típico ahí."
            },
            {
              "text": "Todas las fracturas",
              "isCorrect": false,
              "rationale": "Solo en ubicaciones específicas."
            }
          ],
          "hint": "Huesos con irrigación vulnerable..."
        }
      ]
    },
    {
      "id": 9,
      "nombre": "Patologías Óseas",
      "preguntas": 18,
      "data": [
        {
          "question": "¿Qué es una fractura?",
          "options": [
            {
              "text": "Solución de continuidad del hueso producida por golpe o contracción muscular intensa",
              "isCorrect": true,
              "rationale": "Las fracturas se definen como la solución de continuidad de un hueso, que se produce bruscamente por un golpe exterior o por una contracción muscular intensa."
            },
            {
              "text": "Una inflamación del hueso",
              "isCorrect": false,
              "rationale": "No es inflamación."
            },
            {
              "text": "Un golpe en el hueso sin romperlo",
              "isCorrect": false,
              "rationale": "Hay solución de continuidad."
            },
            {
              "text": "Una enfermedad del cartílago",
              "isCorrect": false,
              "rationale": "Es del hueso."
            }
          ],
          "hint": "Es cuando el hueso se 'rompe'..."
        },
        {
          "question": "¿Qué se requiere para la consolidación de una fractura?",
          "options": [
            {
              "text": "Aposición de los fragmentos e inmovilización de la región afectada",
              "isCorrect": true,
              "rationale": "Para que la lesión se consolide es necesario que los bordes o fragmentos estén en posición próxima (reducción) y la posterior inmovilización."
            },
            {
              "text": "Solo reposo en cama",
              "isCorrect": false,
              "rationale": "Se requiere reducción e inmovilización."
            },
            {
              "text": "Solo medicación",
              "isCorrect": false,
              "rationale": "No es suficiente."
            },
            {
              "text": "No requiere tratamiento",
              "isCorrect": false,
              "rationale": "Sí requiere reducción e inmovilización."
            }
          ],
          "hint": "Hay que 'juntar' las partes y 'quietar' la zona..."
        },
        {
          "question": "¿Qué es el callo óseo?",
          "options": [
            {
              "text": "Sustancia osteoide producida por osteoblastos vecinos que une los fragmentos de la fractura",
              "isCorrect": true,
              "rationale": "Durante la consolidación proliferan los osteoblastos vecinos y producen sustancia osteoide que ocupa el espacio interfragmentario, formando el callo óseo."
            },
            {
              "text": "Una infección del hueso",
              "isCorrect": false,
              "rationale": "No es infección."
            },
            {
              "text": "El cartílago de la fractura",
              "isCorrect": false,
              "rationale": "Es hueso nuevo."
            },
            {
              "text": "Un tipo de fractura",
              "isCorrect": false,
              "rationale": "Es parte del proceso de curación."
            }
          ],
          "hint": "Es el 'pegamento óseo' que une los fragmentos..."
        },
        {
          "question": "¿Qué es la remodelación del callo óseo?",
          "options": [
            {
              "text": "Proceso donde el callo sufre reorganización según líneas de fuerza, formando el callo definitivo",
              "isCorrect": true,
              "rationale": "El callo sufre un proceso de remodelación donde se refuerzan algunas zonas y se reabsorben otras, orientándose según las líneas de fuerza."
            },
            {
              "text": "El endurecimiento del callo",
              "isCorrect": false,
              "rationale": "Es más que endurecimiento, es reorganización."
            },
            {
              "text": "La eliminación del callo",
              "isCorrect": false,
              "rationale": "Se remodela, no se elimina."
            },
            {
              "text": "La formación de nuevo cartílago",
              "isCorrect": false,
              "rationale": "Se forma hueso definitivo."
            }
          ],
          "hint": "El hueso se 'reorganiza' según las fuerzas que soporta..."
        },
        {
          "question": "¿Qué es el hueso heterotópico?",
          "options": [
            {
              "text": "Tejido óseo en tejidos blandos que normalmente no lo tienen",
              "isCorrect": true,
              "rationale": "El hueso heterotópico es tejido óseo desarrollado en tejidos blandos que normalmente no contienen hueso."
            },
            {
              "text": "Un hueso fuera de lugar",
              "isCorrect": false,
              "rationale": "Es hueso donde no debería haber."
            },
            {
              "text": "Un hueso supernumerario",
              "isCorrect": false,
              "rationale": "No es lo mismo."
            },
            {
              "text": "Un tipo de tumor",
              "isCorrect": false,
              "rationale": "No es tumor, es hueso normal en lugar anormal."
            }
          ],
          "hint": "Hueso donde NO debería haber hueso..."
        },
        {
          "question": "¿Qué causa la formación de hueso heterotópico?",
          "options": [
            {
              "text": "Traumatismos repetidos y hemorragias que calcifican y osifican",
              "isCorrect": true,
              "rationale": "El hueso heterotópico se desarrolla en tejidos que sufren traumatismos repetidamente, y las zonas de hemorragia se calcifican y osifican."
            },
            {
              "text": "Infecciones",
              "isCorrect": false,
              "rationale": "No es la causa principal."
            },
            {
              "text": "Enfermedades genéticas",
              "isCorrect": false,
              "rationale": "Es causado por traumatismos."
            },
            {
              "text": "La edad avanzada",
              "isCorrect": false,
              "rationale": "No está relacionado con la edad."
            }
          ],
          "hint": "Ocurre en atletas y jinetes por ejemplo..."
        },
        {
          "question": "¿En qué grupos es común el hueso heterotópico?",
          "options": [
            {
              "text": "Atletas con distensiones repetidas y jinetes (muslo)",
              "isCorrect": true,
              "rationale": "Ocurre en atletas que sufren distensiones y desgarros repetidamente, y en los músculos del muslo de los jinetes."
            },
            {
              "text": "Solo en ancianos",
              "isCorrect": false,
              "rationale": "No es típico de ancianos."
            },
            {
              "text": "Solo en niños",
              "isCorrect": false,
              "rationale": "No es típico de niños."
            },
            {
              "text": "En personas sedentarias",
              "isCorrect": false,
              "rationale": "Es más común en personas activas."
            }
          ],
          "hint": "Gente con actividad física repetitiva..."
        },
        {
          "question": "¿Qué es la calcificación ectópica?",
          "options": [
            {
              "text": "Depósito de calcio en tejidos que normalmente no lo presentan",
              "isCorrect": true,
              "rationale": "La calcificación ectópica es un trastorno caracterizado por depósito de calcio en tejidos que normalmente no lo presentan."
            },
            {
              "text": "Formación de hueso en tejidos blandos",
              "isCorrect": false,
              "rationale": "Es depósito de calcio, no formación de hueso."
            },
            {
              "text": "Calcificación normal del hueso",
              "isCorrect": false,
              "rationale": "Es en tejidos que no deberían tener calcio."
            },
            {
              "text": "Un tipo de fractura",
              "isCorrect": false,
              "rationale": "No es fractura."
            }
          ],
          "hint": "Calcio donde NO debería haber..."
        },
        {
          "question": "¿En qué tejidos puede ocurrir calcificación ectópica?",
          "options": [
            {
              "text": "Músculos, tendones y tejido subcutáneo",
              "isCorrect": true,
              "rationale": "La calcificación ectópica puede presentarse en músculos, tendones y tejido subcutáneo."
            },
            {
              "text": "Solo en el hueso",
              "isCorrect": false,
              "rationale": "Es fuera del hueso."
            },
            {
              "text": "Solo en el cerebro",
              "isCorrect": false,
              "rationale": "No es la ubicación típica."
            },
            {
              "text": "Solo en la piel",
              "isCorrect": false,
              "rationale": "Puede estar en múltiples tejidos."
            }
          ],
          "hint": "Tejidos que normalmente no tienen calcio..."
        },
        {
          "question": "¿Qué puede causar calcificación ectópica?",
          "options": [
            {
              "text": "Enfermedades con calcio elevado en sangre y cicatrices",
              "isCorrect": true,
              "rationale": "Puede presentarse en enfermedades con valores elevados de calcio en sangre, y también sobre cicatrices."
            },
            {
              "text": "Solo traumatismos",
              "isCorrect": false,
              "rationale": "Hay otras causas."
            },
            {
              "text": "Solo infecciones",
              "isCorrect": false,
              "rationale": "No es la causa principal."
            },
            {
              "text": "La edad avanzada exclusivamente",
              "isCorrect": false,
              "rationale": "No es la única causa."
            }
          ],
          "hint": "Puede ser por enfermedades sistémicas o locales..."
        },
        {
          "question": "¿Qué es la osteoporosis?",
          "options": [
            {
              "text": "Disminución de la masa de tejido óseo conservando la calidad de la matriz ósea",
              "isCorrect": true,
              "rationale": "La osteoporosis se presenta como una disminución de la masa de tejido óseo conservando la calidad de la estructura de la matriz ósea."
            },
            {
              "text": "Aumento de la masa ósea",
              "isCorrect": false,
              "rationale": "Es disminución."
            },
            {
              "text": "Cambio en la calidad del hueso",
              "isCorrect": false,
              "rationale": "La calidad se conserva, disminuye la masa."
            },
            {
              "text": "Una infección del hueso",
              "isCorrect": false,
              "rationale": "No es infección."
            }
          ],
          "hint": "Hay menos hueso, pero lo que queda está bien..."
        },
        {
          "question": "¿Por qué se produce la osteoporosis?",
          "options": [
            {
              "text": "Por predominio de la destrucción del hueso sobre su formación",
              "isCorrect": true,
              "rationale": "La osteoporosis se produce por el predominio de la destrucción del hueso."
            },
            {
              "text": "Por exceso de formación ósea",
              "isCorrect": false,
              "rationale": "Es lo contrario."
            },
            {
              "text": "Por infección",
              "isCorrect": false,
              "rationale": "No es infecciosa."
            },
            {
              "text": "Por falta de calcio en la dieta exclusivamente",
              "isCorrect": false,
              "rationale": "No es la única causa."
            }
          ],
          "hint": "Se destruye más hueso del que se forma..."
        },
        {
          "question": "¿A quiénes afecta principalmente la osteoporosis senil?",
          "options": [
            {
              "text": "Mujeres mayores de 50 años y hombres mayores de 70 años",
              "isCorrect": true,
              "rationale": "La osteoporosis afecta a las mujeres a partir de los cincuenta años y a los hombres a partir de los setenta (osteoporosis senil)."
            },
            {
              "text": "Solo a hombres",
              "isCorrect": false,
              "rationale": "Afecta a ambos sexos."
            },
            {
              "text": "Solo a niños",
              "isCorrect": false,
              "rationale": "Es de adultos."
            },
            {
              "text": "Por igual a todos los adultos",
              "isCorrect": false,
              "rationale": "Las mujeres la sufren antes."
            }
          ],
          "hint": "Las mujeres antes que los hombres..."
        },
        {
          "question": "¿Qué porcentaje de mujeres mayores de 80 años presenta osteoporosis?",
          "options": [
            {
              "text": "90%",
              "isCorrect": true,
              "rationale": "Esta patología se presenta en el 90% de las mujeres mayores de 80 años."
            },
            {
              "text": "50%",
              "isCorrect": false,
              "rationale": "Es más alto."
            },
            {
              "text": "30%",
              "isCorrect": false,
              "rationale": "Es mucho más alto."
            },
            {
              "text": "10%",
              "isCorrect": false,
              "rationale": "Es mucho más alto."
            }
          ],
          "hint": "Casi todas las mujeres muy ancianas..."
        },
        {
          "question": "¿Qué fracturas son más frecuentes en la osteoporosis?",
          "options": [
            {
              "text": "Cuello del fémur y aplastamientos vertebrales",
              "isCorrect": true,
              "rationale": "Existe una mayor predisposición a las fracturas, las más frecuentes son las del cuello del fémur y los aplastamientos vertebrales."
            },
            {
              "text": "Fracturas de cráneo",
              "isCorrect": false,
              "rationale": "No son las más frecuentes."
            },
            {
              "text": "Fracturas de manos",
              "isCorrect": false,
              "rationale": "No son las más frecuentes."
            },
            {
              "text": "Fracturas de costillas",
              "isCorrect": false,
              "rationale": "No son las más frecuentes."
            }
          ],
          "hint": "Huesos que soportan peso..."
        },
        {
          "question": "¿Qué son los tumores óseos primarios?",
          "options": [
            {
              "text": "Tumores infrecuentes (2% de todos los tumores) que producen hueso o cartílago",
              "isCorrect": true,
              "rationale": "Los tumores óseos primarios son infrecuentes y constituyen el 2% de todos los tumores del cuerpo humano. La mayoría producen hueso o cartílago."
            },
            {
              "text": "Tumores muy frecuentes",
              "isCorrect": false,
              "rationale": "Son infrecuentes."
            },
            {
              "text": "Tumores que vienen de otros órganos",
              "isCorrect": false,
              "rationale": "Esos son metastásicos."
            },
            {
              "text": "Tumores benignos exclusivamente",
              "isCorrect": false,
              "rationale": "Pueden ser malignos."
            }
          ],
          "hint": "Son poco comunes y nacen en el hueso..."
        },
        {
          "question": "¿Cuál es la causa más frecuente de lesión tumoral ósea?",
          "options": [
            {
              "text": "Metástasis de tumores de tiroides, pulmón, mama o próstata",
              "isCorrect": true,
              "rationale": "Las metástasis son la causa más frecuente de lesión tumoral ósea, y con frecuencia provienen de tumores primitivos de tiroides, pulmón, mama o próstata."
            },
            {
              "text": "Tumores primarios del hueso",
              "isCorrect": false,
              "rationale": "Son menos frecuentes."
            },
            {
              "text": "Traumatismos",
              "isCorrect": false,
              "rationale": "No causan tumores."
            },
            {
              "text": "Infecciones",
              "isCorrect": false,
              "rationale": "No son causa de tumores."
            }
          ],
          "hint": "Vienen de otros órganos al hueso..."
        },
        {
          "question": "¿Cómo se pueden manifestar los tumores óseos?",
          "options": [
            {
              "text": "Dolor, tumefacción y a veces fractura patológica o espontánea",
              "isCorrect": true,
              "rationale": "Los tumores óseos se caracterizan por presentar dolor y tumefacción y, en ocasiones, pueden manifestarse mediante fractura patológica o espontánea."
            },
            {
              "text": "Solo asintomáticos",
              "isCorrect": false,
              "rationale": "Tienen síntomas."
            },
            {
              "text": "Solo fiebre",
              "isCorrect": false,
              "rationale": "El dolor y tumefacción son más característicos."
            },
            {
              "text": "Solo anemia",
              "isCorrect": false,
              "rationale": "No es el síntoma principal."
            }
          ],
          "hint": "Dolor, hinchazón, y a veces fracturas sin trauma..."
        }
      ]
    }
  ]
}
,
  "anato-articular": {
  "titulo": "Sistema Articular",
  "descripcion": "Articulaciones, sinartrosis, diartrosis, movimientos, lesiones",
  "totalPreguntas": 237,
  "partes": [
    {
      "id": 1,
      "nombre": "Generalidades de Articulaciones",
      "preguntas": 12,
      "data": [
        {
          "question": "¿Qué son las articulaciones?",
          "options": [
            {
              "text": "Conexiones interóseas que vinculan las partes del esqueleto mediante diferentes tejidos",
              "isCorrect": true,
              "rationale": "Las articulaciones son las conexiones interóseas, es decir, las distintas partes que constituyen el esqueleto se vinculan entre sí mediante diferentes tejidos y estructuras."
            },
            {
              "text": "Solo uniones entre huesos",
              "isCorrect": false,
              "rationale": "No solo son uniones, son conexiones con tejidos y estructuras específicas."
            },
            {
              "text": "Solo las articulaciones móviles",
              "isCorrect": false,
              "rationale": "Incluyen también las semimóviles e inmóviles."
            },
            {
              "text": "Los músculos que unen huesos",
              "isCorrect": false,
              "rationale": "Los músculos no son articulaciones."
            }
          ],
          "hint": "Son las 'conexiones' del esqueleto..."
        },
        {
          "question": "¿Qué es una articulación simple?",
          "options": [
            {
              "text": "Aquella en la que intervienen solamente dos huesos",
              "isCorrect": true,
              "rationale": "Una articulación simple es aquella en la que intervienen solamente dos huesos."
            },
            {
              "text": "Una articulación fácil de mover",
              "isCorrect": false,
              "rationale": "Simple refiere al número de huesos, no a la dificultad."
            },
            {
              "text": "Una articulación sin movimiento",
              "isCorrect": false,
              "rationale": "No tiene que ver con la movilidad."
            },
            {
              "text": "Una articulación pequeña",
              "isCorrect": false,
              "rationale": "El tamaño no define la simplicidad."
            }
          ],
          "hint": "El número de huesos es la clave..."
        },
        {
          "question": "¿Qué es un complejo articular o articulación compuesta?",
          "options": [
            {
              "text": "Una articulación en la que intervienen más de dos huesos",
              "isCorrect": true,
              "rationale": "Un complejo articular (articulación compuesta) es una articulación en la que intervienen más de dos huesos."
            },
            {
              "text": "Una articulación difícil de mover",
              "isCorrect": false,
              "rationale": "Compuesta refiere al número de huesos, no a la complejidad de movimiento."
            },
            {
              "text": "Una articulación muy móvil",
              "isCorrect": false,
              "rationale": "No tiene que ver con la movilidad."
            },
            {
              "text": "Una articulación grande",
              "isCorrect": false,
              "rationale": "El tamaño no la define."
            }
          ],
          "hint": "Más de dos huesos participan..."
        },
        {
          "question": "¿Cómo se clasifican las articulaciones según el grado de movilidad?",
          "options": [
            {
              "text": "Móviles, semimóviles (anfiartrosis) e inmóviles",
              "isCorrect": true,
              "rationale": "Las articulaciones pueden diferenciarse según el grado de movilidad: móviles, semimóviles (anfiartrosis) e inmóviles."
            },
            {
              "text": "Grandes y pequeñas",
              "isCorrect": false,
              "rationale": "No se clasifican por tamaño."
            },
            {
              "text": "Superficiales y profundas",
              "isCorrect": false,
              "rationale": "No es una clasificación por movilidad."
            },
            {
              "text": "Superiores e inferiores",
              "isCorrect": false,
              "rationale": "No se clasifican por ubicación."
            }
          ],
          "hint": "Hay tres grados según cuánto se mueven..."
        },
        {
          "question": "¿Qué son los grados de libertad de una articulación?",
          "options": [
            {
              "text": "La cantidad de ejes alrededor de los cuales se pueden mover las partes de una articulación",
              "isCorrect": true,
              "rationale": "Los grados de libertad son la cantidad de ejes alrededor de los cuales se pueden mover las partes de una articulación."
            },
            {
              "text": "El número de huesos que participan",
              "isCorrect": false,
              "rationale": "No es el número de huesos."
            },
            {
              "text": "La amplitud del movimiento",
              "isCorrect": false,
              "rationale": "Es la cantidad de ejes, no la amplitud."
            },
            {
              "text": "La fuerza que puede ejercer",
              "isCorrect": false,
              "rationale": "No tiene que ver con la fuerza."
            }
          ],
          "hint": "Está relacionado con los ejes de movimiento..."
        },
        {
          "question": "¿Qué caracteriza a una articulación uniaxial?",
          "options": [
            {
              "text": "El movimiento está limitado a rotación sobre un solo eje, posee un grado de libertad",
              "isCorrect": true,
              "rationale": "Cuando el movimiento está limitado a la rotación sobre un solo eje, se llama uniaxial y posee sólo un grado de libertad."
            },
            {
              "text": "Se mueve en dos ejes",
              "isCorrect": false,
              "rationale": "Eso es biaxial."
            },
            {
              "text": "Se mueve en todos los ejes",
              "isCorrect": false,
              "rationale": "Eso es multiaxial."
            },
            {
              "text": "No tiene movimiento",
              "isCorrect": false,
              "rationale": "Tiene movimiento, pero en un solo eje."
            }
          ],
          "hint": "Solo puede rotar alrededor de un eje..."
        },
        {
          "question": "¿Qué caracteriza a una articulación biaxial?",
          "options": [
            {
              "text": "Presenta movimientos independientes alrededor de dos ejes, tiene dos grados de libertad",
              "isCorrect": true,
              "rationale": "Si presenta movimientos independientes alrededor de dos ejes, la articulación será biaxial y tendrá dos grados de libertad."
            },
            {
              "text": "Se mueve en un solo eje",
              "isCorrect": false,
              "rationale": "Eso es uniaxial."
            },
            {
              "text": "Se mueve en tres ejes",
              "isCorrect": false,
              "rationale": "Eso sería tres grados de libertad."
            },
            {
              "text": "No tiene movimiento",
              "isCorrect": false,
              "rationale": "Tiene movimiento en dos ejes."
            }
          ],
          "hint": "Puede moverse en dos direcciones diferentes..."
        },
        {
          "question": "¿Qué caracteriza a una articulación multiaxial?",
          "options": [
            {
              "text": "Se mueve alrededor de muchos ejes de posición intermedia",
              "isCorrect": true,
              "rationale": "Si se mueve alrededor de muchos ejes de posición intermedia, la articulación será multiaxial."
            },
            {
              "text": "Se mueve en un solo eje",
              "isCorrect": false,
              "rationale": "Eso es uniaxial."
            },
            {
              "text": "Se mueve solo en dos ejes",
              "isCorrect": false,
              "rationale": "Eso es biaxial."
            },
            {
              "text": "Tiene tres grados de libertad exactamente",
              "isCorrect": false,
              "rationale": "Multiaxial implica muchos ejes, no solo tres."
            }
          ],
          "hint": "Puede moverse en muchas direcciones..."
        },
        {
          "question": "¿Cómo se clasifican las articulaciones según el tejido interpuesto?",
          "options": [
            {
              "text": "En sinartrosis (tejido continuo) y diartrosis (cavidad con líquido sinovial)",
              "isCorrect": true,
              "rationale": "Las articulaciones se clasifican según el tejido interpone: sinartrosis (continuidad de tejido) o diartrosis (discontinuo, con cavidad articular y líquido sinovial)."
            },
            {
              "text": "En grandes y pequeñas",
              "isCorrect": false,
              "rationale": "No se clasifican por tamaño."
            },
            {
              "text": "En móviles e inmóviles",
              "isCorrect": false,
              "rationale": "Esa es la clasificación por movilidad."
            },
            {
              "text": "En óseas y musculares",
              "isCorrect": false,
              "rationale": "No existe esa clasificación."
            }
          ],
          "hint": "Depende de si hay cavidad articular o no..."
        },
        {
          "question": "¿Qué es una sinartrosis?",
          "options": [
            {
              "text": "Unión entre huesos mediante tejido conectivo sólido o semisólido, sin cavidad articular",
              "isCorrect": true,
              "rationale": "Las sinartrosis son uniones entre los huesos mediante tejido conectivo sólido o semisólido. Los tejidos interóseos presentan continuidad."
            },
            {
              "text": "Una articulación muy móvil",
              "isCorrect": false,
              "rationale": "Las sinartrosis son poco móviles o inmóviles."
            },
            {
              "text": "Una articulación con líquido sinovial",
              "isCorrect": false,
              "rationale": "Eso es diartrosis."
            },
            {
              "text": "Una articulación entre tres huesos",
              "isCorrect": false,
              "rationale": "No tiene que ver con el número de huesos."
            }
          ],
          "hint": "No hay cavidad articular, el tejido es continuo..."
        },
        {
          "question": "¿Qué es una diartrosis?",
          "options": [
            {
              "text": "Articulación con cavidad interpuesta que contiene líquido sinovial",
              "isCorrect": true,
              "rationale": "Las diartrosis son uniones que presentan, entre las superficies articulares, una cavidad interpuesta con líquido sinovial en su interior."
            },
            {
              "text": "Una articulación inmóvil",
              "isCorrect": false,
              "rationale": "Las diartrosis son móviles."
            },
            {
              "text": "Una articulación sin cavidad",
              "isCorrect": false,
              "rationale": "Tienen cavidad articular."
            },
            {
              "text": "Una articulación entre dos huesos solamente",
              "isCorrect": false,
              "rationale": "No tiene que ver con el número de huesos."
            }
          ],
          "hint": "Tienen cavidad con líquido sinovial..."
        },
        {
          "question": "¿Qué tipos de sinartrosis existen según el tejido conectivo principal?",
          "options": [
            {
              "text": "Fibrosas, cartilaginosas y óseas",
              "isCorrect": true,
              "rationale": "Las sinartrosis se clasifican en: fibrosas (tejido fibroso), cartilaginosas (cartílago) y óseas (tejido óseo)."
            },
            {
              "text": "Móviles e inmóviles",
              "isCorrect": false,
              "rationale": "Esa es otra clasificación."
            },
            {
              "text": "Simples y compuestas",
              "isCorrect": false,
              "rationale": "Esa clasificación es por número de huesos."
            },
            {
              "text": "Grandes y pequeñas",
              "isCorrect": false,
              "rationale": "No existe esa clasificación."
            }
          ],
          "hint": "Según el tipo de tejido que las forma..."
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Sinartrrosis",
      "preguntas": 29,
      "data": [
        {
          "question": "¿Qué son las articulaciones fibrosas o sinfibrosis?",
          "options": [
            {
              "text": "Articulaciones con tejido fibroso interpuesto entre los huesos",
              "isCorrect": true,
              "rationale": "Las articulaciones fibrosas [sinfibrosis] tienen tejido fibroso interpuesto entre las superficies articulares."
            },
            {
              "text": "Articulaciones con cartílago interpuesto",
              "isCorrect": false,
              "rationale": "Esas son cartilaginosas."
            },
            {
              "text": "Articulaciones con hueso interpuesto",
              "isCorrect": false,
              "rationale": "Esas son óseas."
            },
            {
              "text": "Articulaciones con líquido sinovial",
              "isCorrect": false,
              "rationale": "Esas son diartrosis."
            }
          ],
          "hint": "El nombre lo dice: fibroso..."
        },
        {
          "question": "¿Qué es una sindesmosis?",
          "options": [
            {
              "text": "Huesos unidos por ligamentos (fibras elásticas o de colágeno en forma de banda o cinta)",
              "isCorrect": true,
              "rationale": "En las sindesmosis los huesos se encuentran unidos por estructuras compuestas por fibras elásticas o de colágeno adoptando la forma de ligamento."
            },
            {
              "text": "Huesos unidos por cartílago",
              "isCorrect": false,
              "rationale": "Eso es sincondrosis."
            },
            {
              "text": "Huesos unidos por hueso",
              "isCorrect": false,
              "rationale": "Eso es sinostosis."
            },
            {
              "text": "Huesos unidos por músculos",
              "isCorrect": false,
              "rationale": "No es el tipo de unión correcto."
            }
          ],
          "hint": "Viene de 'desmos' que significa ligamento en griego..."
        },
        {
          "question": "¿Cómo influye la longitud del ligamento en una sindesmosis?",
          "options": [
            {
              "text": "Si es corto el movimiento está muy limitado; si es largo permite mayor movilidad",
              "isCorrect": true,
              "rationale": "Si el ligamento es corto, el movimiento se encuentra muy limitado. Si es de mayor longitud, permite una movilidad más amplia."
            },
            {
              "text": "La longitud no afecta el movimiento",
              "isCorrect": false,
              "rationale": "Sí afecta la movilidad."
            },
            {
              "text": "Un ligamento largo limita más el movimiento",
              "isCorrect": false,
              "rationale": "Es al revés."
            },
            {
              "text": "Solo afecta la resistencia, no el movimiento",
              "isCorrect": false,
              "rationale": "Afecta directamente el movimiento."
            }
          ],
          "hint": "Más largo = más movimiento posible..."
        },
        {
          "question": "¿Qué es una membrana interósea?",
          "options": [
            {
              "text": "Lámina de tejido conectivo fibroso con fuertes fibras de colágeno que une huesos",
              "isCorrect": true,
              "rationale": "Las membranas interóseas unen los huesos a través de una lámina de tejido conectivo fibroso con fuertes fibras de colágeno."
            },
            {
              "text": "Una membrana dentro del hueso",
              "isCorrect": false,
              "rationale": "Une dos huesos entre sí."
            },
            {
              "text": "La médula ósea",
              "isCorrect": false,
              "rationale": "No es médula."
            },
            {
              "text": "El periostio interno",
              "isCorrect": false,
              "rationale": "No es periostio."
            }
          ],
          "hint": "Es una lámina entre dos huesos..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una membrana interósea?",
          "options": [
            {
              "text": "La membrana interósea radiocubital",
              "isCorrect": true,
              "rationale": "Un ejemplo de membrana interósea es la membrana interósea radiocubital."
            },
            {
              "text": "El ligamento de la cabeza del fémur",
              "isCorrect": false,
              "rationale": "Eso es un ligamento redondo."
            },
            {
              "text": "El menisco de la rodilla",
              "isCorrect": false,
              "rationale": "Eso es un fibrocartílago intraarticular."
            },
            {
              "text": "El disco intervertebral",
              "isCorrect": false,
              "rationale": "Eso es una sínfisis."
            }
          ],
          "hint": "Está en el antebrazo..."
        },
        {
          "question": "¿Qué es una gonfosis?",
          "options": [
            {
              "text": "Prolongación en forma de clavija que se introduce en un alvéolo, mantenida por fibras cortas",
              "isCorrect": true,
              "rationale": "Una gonfosis es una prolongación en forma de clavija que se introduce en un hueco o alvéolo y es mantenida por fibras cortas en su posición."
            },
            {
              "text": "Una articulación sinovial",
              "isCorrect": false,
              "rationale": "Es una sinartrosis fibrosa."
            },
            {
              "text": "Una articulación cartilaginosa",
              "isCorrect": false,
              "rationale": "Es fibrosa, no cartilaginosa."
            },
            {
              "text": "Una articulación móvil",
              "isCorrect": false,
              "rationale": "Es inmóvil."
            }
          ],
          "hint": "Piensa en los dientes..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una gonfosis?",
          "options": [
            {
              "text": "La unión entre la raíz del diente y el alvéolo dentario",
              "isCorrect": true,
              "rationale": "Un ejemplo de gonfosis es la unión entre la raíz del diente y el alvéolo."
            },
            {
              "text": "La unión entre vértebras",
              "isCorrect": false,
              "rationale": "Esa es una sínfisis."
            },
            {
              "text": "La unión del fémur con la pelvis",
              "isCorrect": false,
              "rationale": "Esa es una diartrosis."
            },
            {
              "text": "La unión del radio con el cúbito",
              "isCorrect": false,
              "rationale": "Esa es una membrana interósea."
            }
          ],
          "hint": "Está en la boca..."
        },
        {
          "question": "¿Qué son las suturas?",
          "options": [
            {
              "text": "Articulaciones donde los huesos están unidos por tejido fibroso de fibras cortas, quedando inmovilizados",
              "isCorrect": true,
              "rationale": "En las suturas los huesos, que están unidos por tejido fibroso de fibras cortas, quedan inmovilizados. Se encuentran entre los huesos del cráneo."
            },
            {
              "text": "Articulaciones móviles del cráneo",
              "isCorrect": false,
              "rationale": "Son inmóviles."
            },
            {
              "text": "Articulaciones cartilaginosas",
              "isCorrect": false,
              "rationale": "Son fibrosas."
            },
            {
              "text": "Articulaciones sinoviales",
              "isCorrect": false,
              "rationale": "No tienen cavidad articular."
            }
          ],
          "hint": "Son las 'costuras' del cráneo..."
        },
        {
          "question": "¿Dónde se encuentran principalmente las suturas?",
          "options": [
            {
              "text": "Entre los huesos del cráneo",
              "isCorrect": true,
              "rationale": "Este tipo de articulación se encuentra entre los huesos del cráneo."
            },
            {
              "text": "Entre las vértebras",
              "isCorrect": false,
              "rationale": "Esas son sínfisis."
            },
            {
              "text": "En las articulaciones de los miembros",
              "isCorrect": false,
              "rationale": "No hay suturas en los miembros."
            },
            {
              "text": "En el tórax",
              "isCorrect": false,
              "rationale": "No hay suturas en el tórax."
            }
          ],
          "hint": "En la cabeza..."
        },
        {
          "question": "¿Qué es una sutura plana o armónica?",
          "options": [
            {
              "text": "Sutura donde se ponen en contacto superficies planas y lineales",
              "isCorrect": true,
              "rationale": "En la sutura plana [armónica] se ponen en contacto superficies planas y lineales, como entre los huesos nasales."
            },
            {
              "text": "Sutura con dientes que encajan",
              "isCorrect": false,
              "rationale": "Esa es la sutura dentada."
            },
            {
              "text": "Sutura tallada en bisel",
              "isCorrect": false,
              "rationale": "Esa es la sutura escamosa."
            },
            {
              "text": "Sutura con cresta y ranura",
              "isCorrect": false,
              "rationale": "Esa es la esquindilesis."
            }
          ],
          "hint": "Superficies planas que se tocan..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una sutura plana?",
          "options": [
            {
              "text": "La sutura entre los huesos nasales",
              "isCorrect": true,
              "rationale": "Un ejemplo de sutura plana [armónica] es la que se encuentra entre los huesos nasales."
            },
            {
              "text": "La sutura coronal",
              "isCorrect": false,
              "rationale": "Esa es dentada."
            },
            {
              "text": "La sutura temporoparietal",
              "isCorrect": false,
              "rationale": "Esa es escamosa."
            },
            {
              "text": "La sutura entre vómer y esfenoides",
              "isCorrect": false,
              "rationale": "Esa es esquindilesis."
            }
          ],
          "hint": "Está en la nariz..."
        },
        {
          "question": "¿Qué es una sutura escamosa?",
          "options": [
            {
              "text": "Sutura donde las superficies en contacto están talladas en bisel",
              "isCorrect": true,
              "rationale": "En la sutura escamosa las superficies en contacto están talladas en bisel, como la sutura temporoparietal."
            },
            {
              "text": "Sutura con superficies planas",
              "isCorrect": false,
              "rationale": "Esa es la sutura plana."
            },
            {
              "text": "Sutura con dientes que encajan",
              "isCorrect": false,
              "rationale": "Esa es la sutura dentada."
            },
            {
              "text": "Sutura con cresta y ranura",
              "isCorrect": false,
              "rationale": "Esa es la esquindilesis."
            }
          ],
          "hint": "Las superficies están en 'bisel' como escamas..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una sutura escamosa?",
          "options": [
            {
              "text": "La sutura temporoparietal",
              "isCorrect": true,
              "rationale": "Un ejemplo de sutura escamosa es la sutura temporoparietal."
            },
            {
              "text": "La sutura entre los huesos nasales",
              "isCorrect": false,
              "rationale": "Esa es plana."
            },
            {
              "text": "La sutura coronal",
              "isCorrect": false,
              "rationale": "Esa es dentada."
            },
            {
              "text": "La sutura sagital",
              "isCorrect": false,
              "rationale": "Esa es aserrada."
            }
          ],
          "hint": "Está entre el temporal y el parietal..."
        },
        {
          "question": "¿Qué es una sutura dentada?",
          "options": [
            {
              "text": "Sutura que presenta engranamientos o dientes que encajan entre sí",
              "isCorrect": true,
              "rationale": "La sutura dentada presenta engranamientos o dientes que encajan entre sí, como la sutura coronal."
            },
            {
              "text": "Sutura con superficies planas",
              "isCorrect": false,
              "rationale": "Esa es la sutura plana."
            },
            {
              "text": "Sutura tallada en bisel",
              "isCorrect": false,
              "rationale": "Esa es la sutura escamosa."
            },
            {
              "text": "Sutura con cresta y ranura",
              "isCorrect": false,
              "rationale": "Esa es la esquindilesis."
            }
          ],
          "hint": "Tiene 'dientes' que encajan..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una sutura dentada?",
          "options": [
            {
              "text": "La sutura coronal (frontoparietal)",
              "isCorrect": true,
              "rationale": "Un ejemplo de sutura dentada es la sutura coronal."
            },
            {
              "text": "La sutura temporoparietal",
              "isCorrect": false,
              "rationale": "Esa es escamosa."
            },
            {
              "text": "La sutura entre los huesos nasales",
              "isCorrect": false,
              "rationale": "Esa es plana."
            },
            {
              "text": "La sutura entre vómer y esfenoides",
              "isCorrect": false,
              "rationale": "Esa es esquindilesis."
            }
          ],
          "hint": "Está entre el frontal y los parietales..."
        },
        {
          "question": "¿Qué es una sutura aserrada?",
          "options": [
            {
              "text": "Sutura con bordes irregulares como sierra, similar a la dentada pero más fina",
              "isCorrect": true,
              "rationale": "La sutura aserrada presenta bordes irregulares como sierra, como la sutura sagital."
            },
            {
              "text": "Sutura con superficies planas",
              "isCorrect": false,
              "rationale": "Esa es la sutura plana."
            },
            {
              "text": "Sutura tallada en bisel",
              "isCorrect": false,
              "rationale": "Esa es la sutura escamosa."
            },
            {
              "text": "Sutura con cresta y ranura",
              "isCorrect": false,
              "rationale": "Esa es la esquindilesis."
            }
          ],
          "hint": "Como los dientes de una sierra..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una sutura aserrada?",
          "options": [
            {
              "text": "La sutura sagital (interparietal)",
              "isCorrect": true,
              "rationale": "Un ejemplo de sutura aserrada es la sutura sagital."
            },
            {
              "text": "La sutura coronal",
              "isCorrect": false,
              "rationale": "Esa es dentada."
            },
            {
              "text": "La sutura temporoparietal",
              "isCorrect": false,
              "rationale": "Esa es escamosa."
            },
            {
              "text": "La sutura entre los huesos nasales",
              "isCorrect": false,
              "rationale": "Esa es plana."
            }
          ],
          "hint": "Está entre los dos parietales..."
        },
        {
          "question": "¿Qué es una esquindilesis?",
          "options": [
            {
              "text": "Sutura donde una superficie en forma de cresta se articula con una ranura",
              "isCorrect": true,
              "rationale": "En la esquindilesis una superficie en forma de cresta se articula con una ranura, como entre el vómer y el esfenoides."
            },
            {
              "text": "Sutura con dientes que encajan",
              "isCorrect": false,
              "rationale": "Esa es la sutura dentada."
            },
            {
              "text": "Sutura tallada en bisel",
              "isCorrect": false,
              "rationale": "Esa es la sutura escamosa."
            },
            {
              "text": "Sutura con superficies planas",
              "isCorrect": false,
              "rationale": "Esa es la sutura plana."
            }
          ],
          "hint": "Una cresta que entra en una ranura..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una esquindilesis?",
          "options": [
            {
              "text": "La articulación entre el vómer y el esfenoides",
              "isCorrect": true,
              "rationale": "Un ejemplo de esquindilesis es la articulación entre el vómer y el esfenoides."
            },
            {
              "text": "La sutura coronal",
              "isCorrect": false,
              "rationale": "Esa es dentada."
            },
            {
              "text": "La sutura temporoparietal",
              "isCorrect": false,
              "rationale": "Esa es escamosa."
            },
            {
              "text": "La sutura entre los huesos nasales",
              "isCorrect": false,
              "rationale": "Esa es plana."
            }
          ],
          "hint": "Está en la base del cráneo..."
        },
        {
          "question": "¿Qué son las articulaciones cartilaginosas?",
          "options": [
            {
              "text": "Articulaciones con cartílago hialino o fibrocartílago interpuesto, sin cavidad sinovial",
              "isCorrect": true,
              "rationale": "Las articulaciones cartilaginosas poseen formaciones de cartílago hialino o fibrocartílago interpuesto, carecen de cavidad sinovial."
            },
            {
              "text": "Articulaciones con tejido fibroso",
              "isCorrect": false,
              "rationale": "Esas son fibrosas."
            },
            {
              "text": "Articulaciones con líquido sinovial",
              "isCorrect": false,
              "rationale": "Esas son diartrosis."
            },
            {
              "text": "Articulaciones con hueso interpuesto",
              "isCorrect": false,
              "rationale": "Esas son óseas."
            }
          ],
          "hint": "El cartílago está entre los huesos..."
        },
        {
          "question": "¿Qué es una sincondrosis?",
          "options": [
            {
              "text": "Articulación con cartílago hialino que une los huesos",
              "isCorrect": true,
              "rationale": "En las sincondrosis, entre las superficies articulares se encuentra cartílago hialino que une los huesos."
            },
            {
              "text": "Articulación con fibrocartílago",
              "isCorrect": false,
              "rationale": "Esa es una sínfisis."
            },
            {
              "text": "Articulación con tejido fibroso",
              "isCorrect": false,
              "rationale": "Esa es fibrosa."
            },
            {
              "text": "Articulación con hueso",
              "isCorrect": false,
              "rationale": "Esa es sinostosis."
            }
          ],
          "hint": "'Condro' significa cartílago..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una sincondrosis?",
          "options": [
            {
              "text": "Las articulaciones condrocostales (costillas con esternón)",
              "isCorrect": true,
              "rationale": "Un ejemplo de sincondrosis son las articulaciones condrocostales."
            },
            {
              "text": "La sínfisis pubiana",
              "isCorrect": false,
              "rationale": "Esa es una sínfisis."
            },
            {
              "text": "El disco intervertebral",
              "isCorrect": false,
              "rationale": "Esa es una sínfisis."
            },
            {
              "text": "Las suturas craneales",
              "isCorrect": false,
              "rationale": "Esas son fibrosas."
            }
          ],
          "hint": "Están entre las costillas y el esternón..."
        },
        {
          "question": "¿Qué es una sínfisis?",
          "options": [
            {
              "text": "Articulación con fibrocartílago interpuesto entre las superficies articulares",
              "isCorrect": true,
              "rationale": "Las sínfisis presentan un fibrocartílago interpuesto entre las superficies articulares."
            },
            {
              "text": "Articulación con cartílago hialino",
              "isCorrect": false,
              "rationale": "Esa es una sincondrosis."
            },
            {
              "text": "Articulación con tejido fibroso",
              "isCorrect": false,
              "rationale": "Esa es fibrosa."
            },
            {
              "text": "Articulación con hueso",
              "isCorrect": false,
              "rationale": "Esa es sinostosis."
            }
          ],
          "hint": "Tiene fibrocartílago, no cartílago hialino..."
        },
        {
          "question": "¿Qué tipo de movimiento tienen las sínfisis?",
          "options": [
            {
              "text": "Movimientos limitados y de poca amplitud individual, son anfiartrosis",
              "isCorrect": true,
              "rationale": "En las sínfisis los movimientos son limitados y de poca amplitud individual, son anfiartrosis."
            },
            {
              "text": "Son completamente inmóviles",
              "isCorrect": false,
              "rationale": "Tienen algo de movimiento."
            },
            {
              "text": "Son muy móviles",
              "isCorrect": false,
              "rationale": "Son poco móviles."
            },
            {
              "text": "No tienen movimiento",
              "isCorrect": false,
              "rationale": "Tienen movimiento limitado."
            }
          ],
          "hint": "Son 'semimóviles'..."
        },
        {
          "question": "¿Qué función cumplen los discos fibrocartilaginosos en las sínfisis?",
          "options": [
            {
              "text": "Proveen absorción de fuerzas de choque y flexibilidad",
              "isCorrect": true,
              "rationale": "Los discos fibrocartilaginosos proveen absorción de fuerzas de choque y flexibilidad."
            },
            {
              "text": "Permiten gran movilidad",
              "isCorrect": false,
              "rationale": "No, limitan la movilidad."
            },
            {
              "text": "Producen líquido sinovial",
              "isCorrect": false,
              "rationale": "No tienen líquido sinovial."
            },
            {
              "text": "No tienen función específica",
              "isCorrect": false,
              "rationale": "Tienen función de amortiguación."
            }
          ],
          "hint": "Actúan como 'amortiguadores'..."
        },
        {
          "question": "¿Qué ejemplos caracterizan a una sínfisis?",
          "options": [
            {
              "text": "El disco intervertebral y la sínfisis pubiana",
              "isCorrect": true,
              "rationale": "Ejemplos de sínfisis son el disco intervertebral y la sínfisis pubiana."
            },
            {
              "text": "Las suturas craneales",
              "isCorrect": false,
              "rationale": "Esas son fibrosas."
            },
            {
              "text": "Las articulaciones condrocostales",
              "isCorrect": false,
              "rationale": "Esas son sincondrosis."
            },
            {
              "text": "La unión diente-alvéolo",
              "isCorrect": false,
              "rationale": "Esa es gonfosis."
            }
          ],
          "hint": "Una está en la columna y otra en la pelvis..."
        },
        {
          "question": "¿Qué es el cartílago epifisario como articulación?",
          "options": [
            {
              "text": "Una articulación transitoria entre la epífisis y la diáfisis mediante cartílago hialino",
              "isCorrect": true,
              "rationale": "El cartílago epifisario [cartílago de crecimiento] es una articulación transitoria. Es la unión entre la epífisis y la diáfisis mediante una lámina de cartílago hialino."
            },
            {
              "text": "Una articulación permanente",
              "isCorrect": false,
              "rationale": "Es transitoria, desaparece al crecer."
            },
            {
              "text": "Una articulación sinovial",
              "isCorrect": false,
              "rationale": "No tiene cavidad sinovial."
            },
            {
              "text": "Una articulación fibrosa",
              "isCorrect": false,
              "rationale": "Es cartilaginosa."
            }
          ],
          "hint": "Es el 'cartílago de crecimiento' que desaparece..."
        },
        {
          "question": "¿Qué son las sinostosis?",
          "options": [
            {
              "text": "Soldaduras óseas entre huesos, articulaciones completamente inmóviles",
              "isCorrect": true,
              "rationale": "Las soldaduras óseas entre huesos se denominan sinostosis. Estas articulaciones óseas son completamente inmóviles."
            },
            {
              "text": "Articulaciones cartilaginosas",
              "isCorrect": false,
              "rationale": "Son óseas, no cartilaginosas."
            },
            {
              "text": "Articulaciones móviles",
              "isCorrect": false,
              "rationale": "Son completamente inmóviles."
            },
            {
              "text": "Articulaciones con cartílago",
              "isCorrect": false,
              "rationale": "No tienen cartílago, tienen hueso."
            }
          ],
          "hint": "Hueso con hueso directamente..."
        },
        {
          "question": "¿Qué ejemplos caracterizan a las sinostosis?",
          "options": [
            {
              "text": "Entre el esfenoides y el occipital, y entre los cuerpos vertebrales del sacro",
              "isCorrect": true,
              "rationale": "Ejemplos de sinostosis son entre el esfenoides y el occipital y entre los cuerpos vertebrales del sacro."
            },
            {
              "text": "Las suturas craneales",
              "isCorrect": false,
              "rationale": "Esas son fibrosas."
            },
            {
              "text": "Los discos intervertebrales",
              "isCorrect": false,
              "rationale": "Esas son sínfisis."
            },
            {
              "text": "La sínfisis pubiana",
              "isCorrect": false,
              "rationale": "Esa es cartilaginosa."
            }
          ],
          "hint": "Una está en el cráneo y otra en la pelvis..."
        }
      ]
    },
    {
      "id": 3,
      "nombre": "Diartrosis - Superficies Articulares I",
      "preguntas": 20,
      "data": [
        {
          "question": "¿Qué son las articulaciones sinoviales o diartrosis?",
          "options": [
            {
              "text": "Union entre huesos con cavidad interpuesta que contiene líquido sinovial",
              "isCorrect": true,
              "rationale": "Las articulaciones sinoviales (diartrosis) son uniones entre los huesos que presentan, entre las superficies articulares, una cavidad interpuesta con líquido sinovial en su interior."
            },
            {
              "text": "Union entre huesos sin cavidad articular",
              "isCorrect": false,
              "rationale": "Esas son sinartrosis."
            },
            {
              "text": "Union entre huesos con cartílago",
              "isCorrect": false,
              "rationale": "Esas son cartilaginosas."
            },
            {
              "text": "Union entre huesos con tejido fibroso",
              "isCorrect": false,
              "rationale": "Esas son fibrosas."
            }
          ],
          "hint": "Tienen 'líquido sinovial' dentro..."
        },
        {
          "question": "¿Qué movilidad tienen generalmente las articulaciones sinoviales?",
          "options": [
            {
              "text": "Son generalmente articulaciones móviles",
              "isCorrect": true,
              "rationale": "En general las articulaciones sinoviales son móviles, particularmente interesantes por su complejidad anatómica y diversidad funcional."
            },
            {
              "text": "Son siempre inmóviles",
              "isCorrect": false,
              "rationale": "Son móviles."
            },
            {
              "text": "Son siempre semimóviles",
              "isCorrect": false,
              "rationale": "Generalmente son móviles."
            },
            {
              "text": "No tienen movimiento",
              "isCorrect": false,
              "rationale": "Son las más móviles."
            }
          ],
          "hint": "Son las que más se mueven..."
        },
        {
          "question": "¿De qué depende la movilidad de las articulaciones sinoviales?",
          "options": [
            {
              "text": "De la forma de las superficies articulares y de los ligamentos",
              "isCorrect": true,
              "rationale": "Su movilidad depende de la forma de las superficies articulares y de los ligamentos que sostienen entre sí a los huesos articulados."
            },
            {
              "text": "Solo del tamaño del hueso",
              "isCorrect": false,
              "rationale": "No depende del tamaño."
            },
            {
              "text": "Solo de los músculos",
              "isCorrect": false,
              "rationale": "No es lo principal."
            },
            {
              "text": "De la cantidad de líquido sinovial",
              "isCorrect": false,
              "rationale": "No depende de eso."
            }
          ],
          "hint": "La forma de las superficies y lo que las sostiene..."
        },
        {
          "question": "¿Qué estructuras básicas tienen en común las articulaciones sinoviales?",
          "options": [
            {
              "text": "Superficies óseas con cartílago articular, cápsula articular fibrosa, membrana sinovial y líquido sinovial",
              "isCorrect": true,
              "rationale": "Las superficies óseas están revestidas de cartílago hialino (cartílago articular). Los huesos están unidos por una cápsula articular fibrosa y por ligamentos. La cápsula presenta un revestimiento de membrana sinovial en su cara interior."
            },
            {
              "text": "Solo cartílago y hueso",
              "isCorrect": false,
              "rationale": "Tienen más estructuras."
            },
            {
              "text": "Solo ligamentos",
              "isCorrect": false,
              "rationale": "Tienen más estructuras."
            },
            {
              "text": "Solo líquido sinovial",
              "isCorrect": false,
              "rationale": "Tienen más estructuras."
            }
          ],
          "hint": "Son 4 estructuras principales..."
        },
        {
          "question": "¿Cómo se clasifican las diartrosis según la forma de sus superficies articulares?",
          "options": [
            {
              "text": "Plana, cilíndrica, trocoide, gínglimo, elipsoidea, bicondílea, selar, esferoidea y cotiloidea",
              "isCorrect": true,
              "rationale": "Las diartrosis se clasifican por la forma que presentan sus superficies articulares en: plana, cilíndrica, trocoide, gínglimo, elipsoidea, bicondílea, selar, esferoidea y cotiloidea."
            },
            {
              "text": "Solo en grandes y pequeñas",
              "isCorrect": false,
              "rationale": "No es la clasificación correcta."
            },
            {
              "text": "Solo en móviles e inmóviles",
              "isCorrect": false,
              "rationale": "Esa es otra clasificación."
            },
            {
              "text": "Solo en simples y compuestas",
              "isCorrect": false,
              "rationale": "Esa es por número de huesos."
            }
          ],
          "hint": "Hay varios tipos según la 'geometría' de las superficies..."
        },
        {
          "question": "¿Qué es una articulación plana o artrodia?",
          "options": [
            {
              "text": "Superficies articulares más o menos planas que se deslizan una sobre otra",
              "isCorrect": true,
              "rationale": "La articulación plana [artrodia] presenta superficies articulares más o menos planas que se deslizan una sobre la otra."
            },
            {
              "text": "Superficies esféricas",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "Superficies cilíndricas",
              "isCorrect": false,
              "rationale": "Esa es cilíndrica."
            },
            {
              "text": "Superficies elipsoides",
              "isCorrect": false,
              "rationale": "Esa es elipsoidea."
            }
          ],
          "hint": "Son superficies 'planas' que se deslizan..."
        },
        {
          "question": "¿Qué tipo de movimiento tiene la articulación plana?",
          "options": [
            {
              "text": "Movimiento multiaxial de escaso desplazamiento",
              "isCorrect": true,
              "rationale": "La articulación plana presenta un movimiento multiaxial de escaso desplazamiento."
            },
            {
              "text": "Movimiento uniaxial amplio",
              "isCorrect": false,
              "rationale": "Es multiaxial pero de escaso desplazamiento."
            },
            {
              "text": "Solo rotación",
              "isCorrect": false,
              "rationale": "Tiene deslizamiento multiaxial."
            },
            {
              "text": "Sin movimiento",
              "isCorrect": false,
              "rationale": "Tiene movimiento, aunque escaso."
            }
          ],
          "hint": "Se puede mover en varias direcciones pero poco..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación plana?",
          "options": [
            {
              "text": "La articulación cigapofisaria (entre apófisis articulares vertebrales)",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación plana es entre las apófisis articulares vertebrales (articulación cigapofisaria)."
            },
            {
              "text": "La articulación de la cadera",
              "isCorrect": false,
              "rationale": "Esa es cotiloidea."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            }
          ],
          "hint": "Está en las vértebras..."
        },
        {
          "question": "¿Qué es una articulación cilíndrica?",
          "options": [
            {
              "text": "Superficies articulares que son segmentos de cilindros, uno convexo y otro cóncavo",
              "isCorrect": true,
              "rationale": "En la articulación cilíndrica las superficies articulares son segmentos de cilindros, uno convexo y el otro cóncavo."
            },
            {
              "text": "Superficies planas",
              "isCorrect": false,
              "rationale": "Esa es plana."
            },
            {
              "text": "Superficies esféricas",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "Superficies elipsoides",
              "isCorrect": false,
              "rationale": "Esa es elipsoidea."
            }
          ],
          "hint": "Tienen forma de 'cilindro'..."
        },
        {
          "question": "¿Qué tipo de movimiento tiene la articulación cilíndrica?",
          "options": [
            {
              "text": "Movimientos de deslizamiento y giro longitudinal",
              "isCorrect": true,
              "rationale": "La articulación cilíndrica tiene movimientos de deslizamiento y giro longitudinal."
            },
            {
              "text": "Solo flexo-extensión",
              "isCorrect": false,
              "rationale": "Tiene giro longitudinal."
            },
            {
              "text": "Solo rotación",
              "isCorrect": false,
              "rationale": "También tiene deslizamiento."
            },
            {
              "text": "Movimiento multiaxial amplio",
              "isCorrect": false,
              "rationale": "No es multiaxial amplio."
            }
          ],
          "hint": "Puede deslizarse y girar a lo largo..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación cilíndrica?",
          "options": [
            {
              "text": "La articulación subtalar",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación cilíndrica es la articulación subtalar."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "La articulación de la cadera",
              "isCorrect": false,
              "rationale": "Esa es cotiloidea."
            }
          ],
          "hint": "Está en el pie..."
        },
        {
          "question": "¿Qué es una articulación trocoide?",
          "options": [
            {
              "text": "Variedad de articulación cilíndrica donde la superficie convexa forma un pivote",
              "isCorrect": true,
              "rationale": "La articulación trocoide es una variedad de las articulaciones cilíndricas, donde la superficie articular convexa forma un pivote alrededor del cual se mueve la superficie cilíndrica cóncava."
            },
            {
              "text": "Una articulación plana",
              "isCorrect": false,
              "rationale": "Es una variedad de cilíndrica."
            },
            {
              "text": "Una articulación esferoidea",
              "isCorrect": false,
              "rationale": "No es esferoidea."
            },
            {
              "text": "Una articulación elipsoidea",
              "isCorrect": false,
              "rationale": "No es elipsoidea."
            }
          ],
          "hint": "Tiene un 'pivote' que gira..."
        },
        {
          "question": "¿Qué tipo de movimiento tiene la articulación trocoide?",
          "options": [
            {
              "text": "Se mueve en un solo eje de disposición longitudinal (uniaxial)",
              "isCorrect": true,
              "rationale": "La articulación trocoide se mueve en un solo eje de disposición longitudinal (uniaxial)."
            },
            {
              "text": "Se mueve en dos ejes",
              "isCorrect": false,
              "rationale": "Es uniaxial."
            },
            {
              "text": "Se mueve en tres ejes",
              "isCorrect": false,
              "rationale": "Es uniaxial."
            },
            {
              "text": "Es multiaxial",
              "isCorrect": false,
              "rationale": "Es uniaxial."
            }
          ],
          "hint": "Solo gira alrededor de un eje..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación trocoide?",
          "options": [
            {
              "text": "La articulación radiocubital proximal",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación trocoide es la articulación radiocubital proximal."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "La articulación de la rodilla",
              "isCorrect": false,
              "rationale": "Esa es bicondílea."
            }
          ],
          "hint": "Está en el antebrazo, cerca del codo..."
        },
        {
          "question": "¿Qué es un gínglimo o articulación troclear?",
          "options": [
            {
              "text": "Articulación donde una superficie tiene forma de polea y la otra encaja en el surco",
              "isCorrect": true,
              "rationale": "En el gínglimo [troclear] una de las superficies articulares tiene forma de polea, en cuyo surco se aloja la saliente de la superficie articular opuesta."
            },
            {
              "text": "Una articulación esférica",
              "isCorrect": false,
              "rationale": "No es esférica."
            },
            {
              "text": "Una articulación plana",
              "isCorrect": false,
              "rationale": "No es plana."
            },
            {
              "text": "Una articulación cilíndrica",
              "isCorrect": false,
              "rationale": "Tiene forma de polea."
            }
          ],
          "hint": "Funciona como una 'bisagra'..."
        },
        {
          "question": "¿Qué tipo de movimiento tiene el gínglimo?",
          "options": [
            {
              "text": "Movimiento uniaxial transversal (como una bisagra)",
              "isCorrect": true,
              "rationale": "El gínglimo presenta un movimiento uniaxial transversal. Se la puede describir como la función de una bisagra."
            },
            {
              "text": "Movimiento biaxial",
              "isCorrect": false,
              "rationale": "Es uniaxial."
            },
            {
              "text": "Movimiento multiaxial",
              "isCorrect": false,
              "rationale": "Es uniaxial."
            },
            {
              "text": "Sin movimiento",
              "isCorrect": false,
              "rationale": "Tiene movimiento."
            }
          ],
          "hint": "Como abrir y cerrar una puerta..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a un gínglimo?",
          "options": [
            {
              "text": "La articulación humerocubital (del codo)",
              "isCorrect": true,
              "rationale": "Un ejemplo de gínglimo es la articulación humerocubital."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "La articulación de la cadera",
              "isCorrect": false,
              "rationale": "Esa es cotiloidea."
            },
            {
              "text": "La articulación radiocubital",
              "isCorrect": false,
              "rationale": "Esa es trocoide."
            }
          ],
          "hint": "Está en el codo..."
        },
        {
          "question": "¿Qué es una articulación elipsoidea o condílea?",
          "options": [
            {
              "text": "Superficies elipsoidales (ovoideas), una cóncava y otra convexa, enfrentadas",
              "isCorrect": true,
              "rationale": "En la articulación elipsoidea [condílea] las superficies articulares están representadas por dos caras articulares elipsoidales (ovoideas), una cóncava y la otra convexa, enfrentadas."
            },
            {
              "text": "Superficies planas",
              "isCorrect": false,
              "rationale": "Son elipsoides."
            },
            {
              "text": "Superficies esféricas",
              "isCorrect": false,
              "rationale": "Son elipsoides, no esferas."
            },
            {
              "text": "Superficies cilíndricas",
              "isCorrect": false,
              "rationale": "Son elipsoides."
            }
          ],
          "hint": "Tienen forma de 'elipse' u 'ovoide'..."
        },
        {
          "question": "¿Qué tipo de movimiento tiene la articulación elipsoidea?",
          "options": [
            {
              "text": "Tiene dos ejes de movimientos (biaxial)",
              "isCorrect": true,
              "rationale": "La articulación elipsoidea tiene dos ejes de movimientos (biaxial)."
            },
            {
              "text": "Un solo eje (uniaxial)",
              "isCorrect": false,
              "rationale": "Es biaxial."
            },
            {
              "text": "Tres ejes",
              "isCorrect": false,
              "rationale": "Es biaxial."
            },
            {
              "text": "Multiaxial",
              "isCorrect": false,
              "rationale": "Es biaxial."
            }
          ],
          "hint": "Se puede mover en dos direcciones principales..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación elipsoidea?",
          "options": [
            {
              "text": "La articulación radiocarpiana (muñeca)",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación elipsoidea es la articulación radiocarpiana: el extremo distal del radio es cóncavo y el cóndilo carpiano es convexo."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "La articulación de la cadera",
              "isCorrect": false,
              "rationale": "Esa es cotiloidea."
            }
          ],
          "hint": "Está en la muñeca..."
        }
      ]
    },
    {
      "id": 4,
      "nombre": "Diartrosis - Superficies Articulares II",
      "preguntas": 18,
      "data": [
        {
          "question": "¿Qué es una articulación bicondílea?",
          "options": [
            {
              "text": "Dos superficies convexas elipsoidales (cóndilos) se deslizan enfrentadas",
              "isCorrect": true,
              "rationale": "En la articulación bicondílea dos superficies convexas elipsoidales (cóndilos) se deslizan enfrentadas, una sobre la otra."
            },
            {
              "text": "Una superficie esférica",
              "isCorrect": false,
              "rationale": "Tiene dos cóndilos elipsoides."
            },
            {
              "text": "Una superficie plana",
              "isCorrect": false,
              "rationale": "Tiene cóndilos convexos."
            },
            {
              "text": "Una superficie cilíndrica",
              "isCorrect": false,
              "rationale": "Tiene cóndilos elipsoides."
            }
          ],
          "hint": "Tiene 'dos cóndilos'..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación bicondílea?",
          "options": [
            {
              "text": "La articulación temporomandibular",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación bicondílea es la articulación temporomandibular."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "La articulación de la rodilla",
              "isCorrect": false,
              "rationale": "Esa es bicondílea doble."
            }
          ],
          "hint": "Está en la mandíbula..."
        },
        {
          "question": "¿Qué es una articulación bicondílea doble?",
          "options": [
            {
              "text": "Dos cóndilos de una epífisis se enfrentan a dos superficies prácticamente planas de otro hueso",
              "isCorrect": true,
              "rationale": "En la articulación bicondílea doble dos cóndilos de una epífisis se enfrentan a dos superficies articulares prácticamente planas ubicadas sobre los cóndilos de otro hueso."
            },
            {
              "text": "Cuatro cóndilos enfrentados",
              "isCorrect": false,
              "rationale": "Son dos cóndilos contra superficies planas."
            },
            {
              "text": "Dos articulaciones separadas",
              "isCorrect": false,
              "rationale": "Es una articulación con dos cóndilos."
            },
            {
              "text": "Una articulación esferoidea",
              "isCorrect": false,
              "rationale": "No es esferoidea."
            }
          ],
          "hint": "Es el caso especial de la rodilla..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación bicondílea doble?",
          "options": [
            {
              "text": "La articulación femorotibial (rodilla)",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación bicondílea doble es la articulación femorotibial."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "La articulación temporomandibular",
              "isCorrect": false,
              "rationale": "Esa es bicondílea simple."
            }
          ],
          "hint": "Está en la rodilla..."
        },
        {
          "question": "¿Qué es una articulación selar o de silla de montar?",
          "options": [
            {
              "text": "Cada superficie articular es cóncava en un eje y convexa en el eje perpendicular",
              "isCorrect": true,
              "rationale": "En la articulación selar [por encaje recíproco] cada una de las superficies articulares es cóncava en un eje y convexa en el eje perpendicular."
            },
            {
              "text": "Ambas superficies son convexas",
              "isCorrect": false,
              "rationale": "Cada una es cóncava en un eje y convexa en el otro."
            },
            {
              "text": "Ambas superficies son cóncavas",
              "isCorrect": false,
              "rationale": "Cada una es cóncava en un eje y convexa en el otro."
            },
            {
              "text": "Una es plana y otra convexa",
              "isCorrect": false,
              "rationale": "Tienen forma de silla de montar."
            }
          ],
          "hint": "Tienen forma de 'silla de montar a caballo'..."
        },
        {
          "question": "¿Qué forma geométrica tienen las superficies de la articulación selar?",
          "options": [
            {
              "text": "Un paraboloide hiperbólico",
              "isCorrect": true,
              "rationale": "Cada superficie tiene la forma de una silla de montar a caballo (geométricamente un paraboloide hiperbólico)."
            },
            {
              "text": "Una esfera",
              "isCorrect": false,
              "rationale": "No es esférica."
            },
            {
              "text": "Un cilindro",
              "isCorrect": false,
              "rationale": "No es cilíndrica."
            },
            {
              "text": "Un elipsoide",
              "isCorrect": false,
              "rationale": "No es elipsoide."
            }
          ],
          "hint": "Geométricamente es una superficie curvada en dos direcciones opuestas..."
        },
        {
          "question": "¿Cómo se relacionan las superficies en una articulación selar?",
          "options": [
            {
              "text": "La concavidad de una superficie se enfrenta con la convexidad de la otra",
              "isCorrect": true,
              "rationale": "En la articulación selar la concavidad de una superficie se enfrenta con la convexidad de la otra."
            },
            {
              "text": "Las convexas se enfrentan entre sí",
              "isCorrect": false,
              "rationale": "La concavidad de una enfrenta la convexidad de la otra."
            },
            {
              "text": "Las cóncavas se enfrentan entre sí",
              "isCorrect": false,
              "rationale": "La concavidad de una enfrenta la convexidad de la otra."
            },
            {
              "text": "Son paralelas",
              "isCorrect": false,
              "rationale": "Se encajan recíprocamente."
            }
          ],
          "hint": "Se encajan como 'pieza de rompecabezas'..."
        },
        {
          "question": "¿Qué tipo de movimiento tiene la articulación selar?",
          "options": [
            {
              "text": "Los movimientos se desarrollan en dos ejes (biaxial)",
              "isCorrect": true,
              "rationale": "En la articulación selar los movimientos se desarrollan en dos ejes (biaxial)."
            },
            {
              "text": "Un solo eje (uniaxial)",
              "isCorrect": false,
              "rationale": "Es biaxial."
            },
            {
              "text": "Tres ejes",
              "isCorrect": false,
              "rationale": "Es biaxial."
            },
            {
              "text": "Multiaxial",
              "isCorrect": false,
              "rationale": "Es biaxial."
            }
          ],
          "hint": "Se puede mover en dos direcciones principales..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación selar?",
          "options": [
            {
              "text": "La articulación trapeciometacarpiana (del pulgar)",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación selar es la articulación trapeciometacarpiana."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "La articulación de la cadera",
              "isCorrect": false,
              "rationale": "Esa es cotiloidea."
            }
          ],
          "hint": "Está en la base del pulgar..."
        },
        {
          "question": "¿Qué es una articulación esferoidea o enartrosis?",
          "options": [
            {
              "text": "Superficies articulares esféricas o casi esféricas, una convexa y otra cóncava",
              "isCorrect": true,
              "rationale": "En la articulación esferoidea [enartrosis] las superficies articulares son esféricas o casi esféricas. Una de ellas es convexa y se enfrenta a la excavación de la otra superficie, que es cóncava."
            },
            {
              "text": "Superficies planas",
              "isCorrect": false,
              "rationale": "Son esféricas."
            },
            {
              "text": "Superficies cilíndricas",
              "isCorrect": false,
              "rationale": "Son esféricas."
            },
            {
              "text": "Superficies elipsoides",
              "isCorrect": false,
              "rationale": "Son esféricas, no elipsoides."
            }
          ],
          "hint": "Tienen forma de 'esfera'..."
        },
        {
          "question": "¿Qué tipo de movimiento tiene la articulación esferoidea?",
          "options": [
            {
              "text": "Es una articulación multiaxial",
              "isCorrect": true,
              "rationale": "La articulación esferoidea es una articulación multiaxial."
            },
            {
              "text": "Es uniaxial",
              "isCorrect": false,
              "rationale": "Es multiaxial."
            },
            {
              "text": "Es biaxial",
              "isCorrect": false,
              "rationale": "Es multiaxial."
            },
            {
              "text": "No tiene movimiento",
              "isCorrect": false,
              "rationale": "Es muy móvil."
            }
          ],
          "hint": "Se puede mover en todas las direcciones..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación esferoidea?",
          "options": [
            {
              "text": "La articulación escapulohumeral (hombro)",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación esferoidea es la articulación escapulohumeral."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación de la rodilla",
              "isCorrect": false,
              "rationale": "Esa es bicondílea."
            },
            {
              "text": "La articulación temporomandibular",
              "isCorrect": false,
              "rationale": "Esa es bicondílea."
            }
          ],
          "hint": "Está en el hombro..."
        },
        {
          "question": "¿Qué es una articulación cotiloidea?",
          "options": [
            {
              "text": "Variedad de esferoidea donde la superficie cóncava es profunda y sobrepasa el ecuador",
              "isCorrect": true,
              "rationale": "La articulación cotiloidea es una variedad de la articulación esferoidea, donde la superficie cóncava es suficientemente profunda para albergar gran parte de la superficie convexa y sobrepasa su ecuador."
            },
            {
              "text": "Una articulación plana",
              "isCorrect": false,
              "rationale": "Es una variedad de esferoidea."
            },
            {
              "text": "Una articulación cilíndrica",
              "isCorrect": false,
              "rationale": "Es una variedad de esferoidea."
            },
            {
              "text": "Una articulación elipsoidea",
              "isCorrect": false,
              "rationale": "Es una variedad de esferoidea."
            }
          ],
          "hint": "Es como una esferoidea pero más 'profunda'..."
        },
        {
          "question": "¿Qué diferencia principal hay entre esferoidea y cotiloidea?",
          "options": [
            {
              "text": "En la cotiloidea la cavidad cóncava es más profunda y abarca más de la mitad de la esfera",
              "isCorrect": true,
              "rationale": "En la cotiloidea la superficie cóncava sobrepasa el ecuador de la superficie convexa, lo que le da mayor estabilidad."
            },
            {
              "text": "No hay diferencia",
              "isCorrect": false,
              "rationale": "La cotiloidea es más profunda."
            },
            {
              "text": "La esferoidea es más móvil",
              "isCorrect": false,
              "rationale": "Ambas son multiaxiales."
            },
            {
              "text": "La cotiloidea es plana",
              "isCorrect": false,
              "rationale": "Es esférica profunda."
            }
          ],
          "hint": "La cotiloidea 'abraza' más la cabeza del hueso..."
        },
        {
          "question": "¿Qué tipo de movimiento tiene la articulación cotiloidea?",
          "options": [
            {
              "text": "Es una articulación multiaxial",
              "isCorrect": true,
              "rationale": "La articulación cotiloidea es una articulación multiaxial."
            },
            {
              "text": "Es uniaxial",
              "isCorrect": false,
              "rationale": "Es multiaxial."
            },
            {
              "text": "Es biaxial",
              "isCorrect": false,
              "rationale": "Es multiaxial."
            },
            {
              "text": "Tiene movimiento limitado",
              "isCorrect": false,
              "rationale": "Es multiaxial."
            }
          ],
          "hint": "Se puede mover en todas las direcciones..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una articulación cotiloidea?",
          "options": [
            {
              "text": "La articulación coxofemoral (cadera)",
              "isCorrect": true,
              "rationale": "Un ejemplo de articulación cotiloidea es la articulación coxofemoral."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo."
            },
            {
              "text": "La articulación de la rodilla",
              "isCorrect": false,
              "rationale": "Esa es bicondílea."
            }
          ],
          "hint": "Está en la cadera..."
        },
        {
          "question": "¿Qué son las sisarcosis?",
          "options": [
            {
              "text": "Estructuras constituidas por músculos interpuestos entre huesos, no son articulaciones verdaderas",
              "isCorrect": true,
              "rationale": "Las sisarcosis están constituidas por músculos que están interpuestos entre los huesos y presentan espacios con tejido conectivo laxo que permiten su deslizamiento. No corresponden a articulaciones verdaderas."
            },
            {
              "text": "Articulaciones sinoviales",
              "isCorrect": false,
              "rationale": "No son articulaciones verdaderas."
            },
            {
              "text": "Articulaciones fibrosas",
              "isCorrect": false,
              "rationale": "Son músculos interpuestos."
            },
            {
              "text": "Articulaciones cartilaginosas",
              "isCorrect": false,
              "rationale": "Son músculos interpuestos."
            }
          ],
          "hint": "Son 'falsas articulaciones' con músculos entre los huesos..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a una sisarcosis?",
          "options": [
            {
              "text": "La articulación escapulotorácica",
              "isCorrect": true,
              "rationale": "Un ejemplo de sisarcosis es la articulación escapulotorácica."
            },
            {
              "text": "La articulación del hombro",
              "isCorrect": false,
              "rationale": "Esa es esferoidea verdadera."
            },
            {
              "text": "La articulación de la cadera",
              "isCorrect": false,
              "rationale": "Esa es cotiloidea verdadera."
            },
            {
              "text": "La articulación del codo",
              "isCorrect": false,
              "rationale": "Esa es gínglimo verdadera."
            }
          ],
          "hint": "Está entre la escápula y el tórax..."
        }
      ]
    },
    {
      "id": 5,
      "nombre": "Elementos de Articulaciones Sinoviales",
      "preguntas": 26,
      "data": [
        {
          "question": "¿Qué es el cartílago articular?",
          "options": [
            {
              "text": "Cartílago hialino que reviste cada superficie articular, adherido íntimamente al hueso",
              "isCorrect": true,
              "rationale": "Cada superficie articular está revestida por un cartílago articular hialino, que se adhiere íntimamente al hueso."
            },
            {
              "text": "Cartílago fibroso que une los huesos",
              "isCorrect": false,
              "rationale": "Es cartílago hialino que reviste la superficie."
            },
            {
              "text": "El cartílago de crecimiento",
              "isCorrect": false,
              "rationale": "Ese es el cartílago epifisario."
            },
            {
              "text": "El menisco articular",
              "isCorrect": false,
              "rationale": "El menisco es otra estructura."
            }
          ],
          "hint": "Es la 'cubierta' del hueso en la articulación..."
        },
        {
          "question": "¿Cómo es la superficie libre del cartílago articular?",
          "options": [
            {
              "text": "Pulida y de coloración blanquecina",
              "isCorrect": true,
              "rationale": "La superficie libre del cartílago articular es pulida y de coloración blanquecina."
            },
            {
              "text": "Rugosa y oscura",
              "isCorrect": false,
              "rationale": "Es pulida y blanquecina."
            },
            {
              "text": "Áspera y amarillenta",
              "isCorrect": false,
              "rationale": "Es pulida y blanquecina."
            },
            {
              "text": "Irregular y rojiza",
              "isCorrect": false,
              "rationale": "Es pulida y blanquecina."
            }
          ],
          "hint": "Es lisa y clara..."
        },
        {
          "question": "¿Qué propiedades tiene el cartílago articular?",
          "options": [
            {
              "text": "Es maleable, extensible y compresible, se deforma bajo presión y retorna a su forma",
              "isCorrect": true,
              "rationale": "El cartílago articular es maleable, extensible y compresible, se deforma bajo la influencia de presiones, para retornar a su espesor original cuando éstas cesan."
            },
            {
              "text": "Es rígido e inmutable",
              "isCorrect": false,
              "rationale": "Es maleable y compresible."
            },
            {
              "text": "Es completamente elástico",
              "isCorrect": false,
              "rationale": "Es maleable y compresible, no puramente elástico."
            },
            {
              "text": "Es duro y quebradizo",
              "isCorrect": false,
              "rationale": "Es maleable y compresible."
            }
          ],
          "hint": "Puede deformarse y volver a su forma original..."
        },
        {
          "question": "¿Cómo se relaciona la extensión del cartílago articular con la movilidad?",
          "options": [
            {
              "text": "La extensión es directamente proporcional a los movimientos de la articulación",
              "isCorrect": true,
              "rationale": "La extensión del revestimiento cartilaginoso es directamente proporcional a los movimientos de la articulación; es más extenso en las articulaciones muy móviles."
            },
            {
              "text": "No hay relación",
              "isCorrect": false,
              "rationale": "Sí hay relación directa."
            },
            {
              "text": "Es inversamente proporcional",
              "isCorrect": false,
              "rationale": "Es directamente proporcional."
            },
            {
              "text": "Solo depende de la edad",
              "isCorrect": false,
              "rationale": "Depende de la movilidad."
            }
          ],
          "hint": "Más movimiento = más cartílago..."
        },
        {
          "question": "¿Cuál es el espesor del cartílago articular?",
          "options": [
            {
              "text": "Varía entre 0,2 y 2 mm",
              "isCorrect": true,
              "rationale": "El espesor del cartílago articular varía entre 0,2 y 2 mm."
            },
            {
              "text": "Entre 5 y 10 mm",
              "isCorrect": false,
              "rationale": "Es mucho más delgado."
            },
            {
              "text": "Siempre de 1 mm exacto",
              "isCorrect": false,
              "rationale": "Varía según la ubicación."
            },
            {
              "text": "Entre 3 y 5 mm",
              "isCorrect": false,
              "rationale": "Es más delgado."
            }
          ],
          "hint": "Es bastante delgado, menos de 2 mm..."
        },
        {
          "question": "¿Dónde es más espeso el cartílago articular?",
          "options": [
            {
              "text": "En los puntos de presión y de deslizamiento de la articulación",
              "isCorrect": true,
              "rationale": "El cartílago articular es más espeso en los puntos de presión y de deslizamiento de la articulación. Es más grueso en el vértice de las cabezas del fémur y del húmero."
            },
            {
              "text": "En los bordes de la articulación",
              "isCorrect": false,
              "rationale": "Es más grueso en los puntos de presión."
            },
            {
              "text": "En el centro de la cavidad articular",
              "isCorrect": false,
              "rationale": "Es más delgado hacia el fondo de la cavidad."
            },
            {
              "text": "Siempre tiene el mismo espesor",
              "isCorrect": false,
              "rationale": "Varía según la zona."
            }
          ],
          "hint": "Donde más 'trabaja' la articulación..."
        },
        {
          "question": "¿Dónde es más delgado el cartílago articular?",
          "options": [
            {
              "text": "Hacia el fondo o centro de la cavidad glenoidea y del acetábulo",
              "isCorrect": true,
              "rationale": "El cartílago articular es más delgado hacia el fondo o centro de la cavidad glenoidea y del acetábulo."
            },
            {
              "text": "En el vértice de las cabezas",
              "isCorrect": false,
              "rationale": "Ahí es más grueso."
            },
            {
              "text": "En los puntos de presión",
              "isCorrect": false,
              "rationale": "Ahí es más grueso."
            },
            {
              "text": "En los bordes articulares",
              "isCorrect": false,
              "rationale": "No es la zona más delgada."
            }
          ],
          "hint": "En el 'fondo' de las cavidades..."
        },
        {
          "question": "¿Cómo se comporta el cartílago articular en los miembros inferiores?",
          "options": [
            {
              "text": "Es más o menos elástico a la presión y actúa como elemento de amortiguación",
              "isCorrect": true,
              "rationale": "En los miembros inferiores es más o menos elástico a la presión, y se comporta como un elemento de amortiguación frente a los choques."
            },
            {
              "text": "Es completamente rígido",
              "isCorrect": false,
              "rationale": "Es elástico y amortigua."
            },
            {
              "text": "No tiene función de amortiguación",
              "isCorrect": false,
              "rationale": "Sí amortigua los choques."
            },
            {
              "text": "Es igual que en los miembros superiores",
              "isCorrect": false,
              "rationale": "En los inferiores es más elástico por la carga."
            }
          ],
          "hint": "Ayuda a 'absorber impactos' al caminar..."
        },
        {
          "question": "¿Qué ocurre si desaparece el cartílago articular?",
          "options": [
            {
              "text": "Acarrea el desgaste rápido del hueso por presión y frotamiento recíproco",
              "isCorrect": true,
              "rationale": "La desaparición del cartílago articular acarrea el desgaste rápido del hueso por presión y frotamiento recíproco."
            },
            {
              "text": "No pasa nada",
              "isCorrect": false,
              "rationale": "Causa desgaste óseo."
            },
            {
              "text": "El hueso se regenera",
              "isCorrect": false,
              "rationale": "El hueso se desgasta."
            },
            {
              "text": "Se forma nuevo cartílago",
              "isCorrect": false,
              "rationale": "No se regenera fácilmente."
            }
          ],
          "hint": "El hueso queda 'desprotegido' y se desgasta..."
        },
        {
          "question": "¿Cómo se nutre el cartílago articular?",
          "options": [
            {
              "text": "Por imbibición a expensas del líquido sinovial, y por vasos del hueso subyacente",
              "isCorrect": true,
              "rationale": "El cartílago articular no posee vasos sanguíneos, se nutre por imbibición a expensas del líquido sinovial. La parte basal también se nutre por los vasos ubicados en el hueso sobre el que está fijado."
            },
            {
              "text": "Por arterias propias",
              "isCorrect": false,
              "rationale": "No tiene vasos sanguíneos."
            },
            {
              "text": "Por el periostio",
              "isCorrect": false,
              "rationale": "No tiene vascularización propia."
            },
            {
              "text": "Por el sistema linfático",
              "isCorrect": false,
              "rationale": "Se nutre por imbibición del líquido sinovial."
            }
          ],
          "hint": "No tiene vasos, absorbe el líquido que lo rodea..."
        },
        {
          "question": "¿Qué son el labrum articular, el menisco y el disco?",
          "options": [
            {
              "text": "Formaciones de fibrocartílago que sirven para la adaptación de las superficies articulares",
              "isCorrect": true,
              "rationale": "Estas estructuras son formaciones de fibrocartílago que sirven para la adaptación de las superficies articulares."
            },
            {
              "text": "Tipos de cartílago hialino",
              "isCorrect": false,
              "rationale": "Son fibrocartílago."
            },
            {
              "text": "Tipos de ligamentos",
              "isCorrect": false,
              "rationale": "Son fibrocartílago."
            },
            {
              "text": "Partes del hueso",
              "isCorrect": false,
              "rationale": "Son estructuras de fibrocartílago."
            }
          ],
          "hint": "Son estructuras de 'fibrocartílago' que mejoran el encaje..."
        },
        {
          "question": "¿Qué es el labrum articular o rodete articular?",
          "options": [
            {
              "text": "Estructura en forma de anillo alrededor de una fosa articular que aumenta su superficie y concavidad",
              "isCorrect": true,
              "rationale": "El labrum articular [rodete articular] se dispone en forma de anillo alrededor de algunas fosas articulares a las que aumenta su superficie articular y concavidad."
            },
            {
              "text": "Un disco dentro de la articulación",
              "isCorrect": false,
              "rationale": "Es un anillo periférico."
            },
            {
              "text": "Una estructura esférica",
              "isCorrect": false,
              "rationale": "Es un anillo."
            },
            {
              "text": "Un ligamento",
              "isCorrect": false,
              "rationale": "Es fibrocartílago."
            }
          ],
          "hint": "Es un 'anillo' que rodea la cavidad articular..."
        },
        {
          "question": "¿Qué forma tiene el labrum articular en corte?",
          "options": [
            {
              "text": "Triangular",
              "isCorrect": true,
              "rationale": "El labrum articular visto en un corte es triangular."
            },
            {
              "text": "Circular",
              "isCorrect": false,
              "rationale": "En corte es triangular."
            },
            {
              "text": "Rectangular",
              "isCorrect": false,
              "rationale": "En corte es triangular."
            },
            {
              "text": "Ovalada",
              "isCorrect": false,
              "rationale": "En corte es triangular."
            }
          ],
          "hint": "Tiene tres caras en corte..."
        },
        {
          "question": "¿Dónde se encuentra la base del labrum articular?",
          "options": [
            {
              "text": "Descansa sobre el contorno de la superficie articular",
              "isCorrect": true,
              "rationale": "La base del labrum articular descansa sobre el contorno de la superficie articular."
            },
            {
              "text": "En el centro de la cavidad",
              "isCorrect": false,
              "rationale": "Está en el contorno periférico."
            },
            {
              "text": "Dentro del hueso",
              "isCorrect": false,
              "rationale": "Está en el contorno articular."
            },
            {
              "text": "En la cápsula",
              "isCorrect": false,
              "rationale": "Está sobre el contorno articular."
            }
          ],
          "hint": "Está en el 'borde' de la superficie articular..."
        },
        {
          "question": "¿Qué ejemplos caracterizan al labrum articular?",
          "options": [
            {
              "text": "El labrum glenoideo (hombro) y el labrum acetabular (cadera)",
              "isCorrect": true,
              "rationale": "Ejemplos de labrum articular son el labrum glenoideo en la articulación del hombro y el labrum acetabular en la articulación de la cadera."
            },
            {
              "text": "El menisco de la rodilla",
              "isCorrect": false,
              "rationale": "Ese es un menisco, no un labrum."
            },
            {
              "text": "El disco temporomandibular",
              "isCorrect": false,
              "rationale": "Ese es un disco, no un labrum."
            },
            {
              "text": "El cartílago costal",
              "isCorrect": false,
              "rationale": "No es un labrum."
            }
          ],
          "hint": "Uno en el hombro y otro en la cadera..."
        },
        {
          "question": "¿Qué puede ocurrir con el labrum en un traumatismo?",
          "options": [
            {
              "text": "La inserción ósea del labrum puede desgarrarse",
              "isCorrect": true,
              "rationale": "En un traumatismo la inserción ósea del labrum puede desgarrarse."
            },
            {
              "text": "No se lesiona",
              "isCorrect": false,
              "rationale": "Puede desgarrarse."
            },
            {
              "text": "Siempre se recupera solo",
              "isCorrect": false,
              "rationale": "Puede lesionarse."
            },
            {
              "text": "Se calcifica",
              "isCorrect": false,
              "rationale": "Puede desgarrarse."
            }
          ],
          "hint": "Puede 'romperse' su unión al hueso..."
        },
        {
          "question": "¿Qué es el menisco articular?",
          "options": [
            {
              "text": "Estructura con forma de medialuna interpuesta entre superficies articulares para mejorar su concordancia",
              "isCorrect": true,
              "rationale": "El menisco articular tiene forma de medialuna y está interpuesto entre las superficies articulares, mejorando su concordancia."
            },
            {
              "text": "Un anillo que rodea la articulación",
              "isCorrect": false,
              "rationale": "Eso es el labrum."
            },
            {
              "text": "Un disco completo",
              "isCorrect": false,
              "rationale": "Tiene forma de medialuna, no de disco completo."
            },
            {
              "text": "Un ligamento",
              "isCorrect": false,
              "rationale": "Es fibrocartílago."
            }
          ],
          "hint": "Tiene forma de 'media luna'..."
        },
        {
          "question": "¿Cómo se relaciona el menisco articular con la cápsula?",
          "options": [
            {
              "text": "Su base periférica se adhiere a la cápsula articular",
              "isCorrect": true,
              "rationale": "En el menisco, dos de sus caras miran hacia las superficies articulares y su base, periférica, se adhiere a la cápsula."
            },
            {
              "text": "No tiene relación con la cápsula",
              "isCorrect": false,
              "rationale": "Su base se adhiere a la cápsula."
            },
            {
              "text": "Está dentro del hueso",
              "isCorrect": false,
              "rationale": "Está en la articulación."
            },
            {
              "text": "Está fuera de la articulación",
              "isCorrect": false,
              "rationale": "Está dentro de la articulación."
            }
          ],
          "hint": "Por el borde se une a la 'pared' de la articulación..."
        },
        {
          "question": "¿Cómo se nutre la parte periférica del menisco?",
          "options": [
            {
              "text": "Recibe vascularización a través de su unión con la cápsula articular",
              "isCorrect": true,
              "rationale": "La parte periférica del menisco es más fibrosa y recibe vascularización a través de su unión con la cápsula articular."
            },
            {
              "text": "No tiene vascularización",
              "isCorrect": false,
              "rationale": "La parte periférica sí tiene vasos."
            },
            {
              "text": "Por imbibición",
              "isCorrect": false,
              "rationale": "La parte central se nutre así."
            },
            {
              "text": "Por arterias propias",
              "isCorrect": false,
              "rationale": "Recibe vasos de la cápsula."
            }
          ],
          "hint": "Por donde se une a la cápsula entran los vasos..."
        },
        {
          "question": "¿Cómo se nutre la parte central del menisco?",
          "options": [
            {
              "text": "No tiene vasos y se nutre por imbibición",
              "isCorrect": true,
              "rationale": "La parte central del menisco es cartilaginosa, no tiene vasos y se nutre por imbibición."
            },
            {
              "text": "Tiene muchos vasos sanguíneos",
              "isCorrect": false,
              "rationale": "No tiene vasos."
            },
            {
              "text": "Por la cápsula articular",
              "isCorrect": false,
              "rationale": "Esa es la parte periférica."
            },
            {
              "text": "Por el líquido sinovial únicamente",
              "isCorrect": false,
              "rationale": "Se nutre por imbibición."
            }
          ],
          "hint": "La parte interna no tiene vasos, absorbe nutrientes..."
        },
        {
          "question": "¿Qué ejemplo caracteriza al menisco articular?",
          "options": [
            {
              "text": "Los meniscos de la rodilla",
              "isCorrect": true,
              "rationale": "Ejemplos de menisco articular son los meniscos de la rodilla, que pueden presentar inserción ósea en sus extremidades."
            },
            {
              "text": "El disco intervertebral",
              "isCorrect": false,
              "rationale": "Ese es un fibrocartílago pero es una sínfisis."
            },
            {
              "text": "El labrum glenoideo",
              "isCorrect": false,
              "rationale": "Ese es un labrum."
            },
            {
              "text": "El cartílago articular",
              "isCorrect": false,
              "rationale": "Ese es cartílago hialino."
            }
          ],
          "hint": "Son los famosos 'meniscos' de la rodilla..."
        },
        {
          "question": "¿Qué es el disco articular?",
          "options": [
            {
              "text": "Estructura interpuesta entre superficies articulares que divide la articulación en dos cavidades secundarias",
              "isCorrect": true,
              "rationale": "El disco articular está interpuesto entre las superficies articulares y divide la articulación en dos cavidades secundarias."
            },
            {
              "text": "Un anillo que rodea la articulación",
              "isCorrect": false,
              "rationale": "Eso es el labrum."
            },
            {
              "text": "Una medialuna",
              "isCorrect": false,
              "rationale": "Eso es el menisco."
            },
            {
              "text": "Un ligamento",
              "isCorrect": false,
              "rationale": "Es fibrocartílago."
            }
          ],
          "hint": "Divide la articulación en 'dos partes'..."
        },
        {
          "question": "¿Cómo se relaciona el disco articular con la cápsula?",
          "options": [
            {
              "text": "Su borde periférico se adhiere a la cápsula fibrosa",
              "isCorrect": true,
              "rationale": "Las dos caras del disco articular miran hacia las superficies articulares y su borde periférico se adhiere a la cápsula fibrosa."
            },
            {
              "text": "No tiene relación con la cápsula",
              "isCorrect": false,
              "rationale": "Su borde se adhiere a la cápsula."
            },
            {
              "text": "Está libre dentro de la articulación",
              "isCorrect": false,
              "rationale": "Se adhiere a la cápsula."
            },
            {
              "text": "Está fuera de la articulación",
              "isCorrect": false,
              "rationale": "Está dentro."
            }
          ],
          "hint": "Por el borde se une a la pared articular..."
        },
        {
          "question": "¿Puede tener perforación el disco articular?",
          "options": [
            {
              "text": "Sí, puede observarse una perforación en su centro",
              "isCorrect": true,
              "rationale": "En el disco articular puede observarse una perforación en su centro."
            },
            {
              "text": "No, nunca tiene perforación",
              "isCorrect": false,
              "rationale": "Puede tener perforación central."
            },
            {
              "text": "Solo en patologías",
              "isCorrect": false,
              "rationale": "Puede ser normal."
            },
            {
              "text": "Solo en adultos mayores",
              "isCorrect": false,
              "rationale": "Puede presentarse normalmente."
            }
          ],
          "hint": "A veces tiene un 'agujero' en el medio..."
        },
        {
          "question": "¿Qué función tienen las caras del disco articular?",
          "options": [
            {
              "text": "Se moldean en relación con las superficies articulares para asegurar su congruencia",
              "isCorrect": true,
              "rationale": "Las caras del disco articular se moldean en relación con las superficies articulares para asegurar su congruencia."
            },
            {
              "text": "Son planas siempre",
              "isCorrect": false,
              "rationale": "Se adaptan a las superficies."
            },
            {
              "text": "No tienen función específica",
              "isCorrect": false,
              "rationale": "Aseguran la congruencia articular."
            },
            {
              "text": "Solo separan las cavidades",
              "isCorrect": false,
              "rationale": "También aseguran congruencia."
            }
          ],
          "hint": "Se adaptan para que las superficies 'encajen' mejor..."
        },
        {
          "question": "¿Qué ejemplo caracteriza al disco articular?",
          "options": [
            {
              "text": "El disco de la articulación temporomandibular",
              "isCorrect": true,
              "rationale": "Un ejemplo de disco articular es el disco de la articulación temporomandibular."
            },
            {
              "text": "El menisco de la rodilla",
              "isCorrect": false,
              "rationale": "Ese es un menisco."
            },
            {
              "text": "El labrum acetabular",
              "isCorrect": false,
              "rationale": "Ese es un labrum."
            },
            {
              "text": "El disco intervertebral",
              "isCorrect": false,
              "rationale": "Ese es parte de una sínfisis."
            }
          ],
          "hint": "Está en la mandíbula..."
        }
      ]
    },
    {
      "id": 6,
      "nombre": "Cápsula Articular y Membrana Sinovial",
      "preguntas": 26,
      "data": [
        {
          "question": "¿Qué es la cápsula articular?",
          "options": [
            {
              "text": "Manguito fibroso que une los huesos y asegura el contacto entre las superficies articulares",
              "isCorrect": true,
              "rationale": "La cápsula articular constituye un dispositivo que asegura el contacto entre las superficies articulares. Se inserta en el hueso en la vecindad del revestimiento del cartílago articular."
            },
            {
              "text": "El cartílago que cubre el hueso",
              "isCorrect": false,
              "rationale": "Eso es el cartílago articular."
            },
            {
              "text": "El líquido dentro de la articulación",
              "isCorrect": false,
              "rationale": "Ese es el líquido sinovial."
            },
            {
              "text": "El menisco articular",
              "isCorrect": false,
              "rationale": "La cápsula es una membrana fibrosa."
            }
          ],
          "hint": "Es como una 'fundas' que rodea la articulación..."
        },
        {
          "question": "¿Dónde se inserta la cápsula articular?",
          "options": [
            {
              "text": "En el hueso en la vecindad del revestimiento del cartílago articular",
              "isCorrect": true,
              "rationale": "La cápsula se inserta en el hueso en la vecindad del revestimiento del cartílago articular."
            },
            {
              "text": "En el centro del hueso",
              "isCorrect": false,
              "rationale": "Se inserta cerca del cartílago articular."
            },
            {
              "text": "En el cartílago mismo",
              "isCorrect": false,
              "rationale": "Se inserta en el hueso, cerca del cartílago."
            },
            {
              "text": "En el ligamento",
              "isCorrect": false,
              "rationale": "Se inserta en el hueso."
            }
          ],
          "hint": "Se fija en el hueso, cerca de la superficie articular..."
        },
        {
          "question": "¿Qué ocurre si la cápsula se fija a distancia del cartílago articular?",
          "options": [
            {
              "text": "Parte del cartílago epifisario puede ubicarse dentro de los límites de la cápsula",
              "isCorrect": true,
              "rationale": "Si la cápsula se fija a distancia del cartílago, puede ocurrir que una parte o la totalidad del cartílago epifisario se ubique dentro de los límites de la cápsula articular."
            },
            {
              "text": "No pasa nada diferente",
              "isCorrect": false,
              "rationale": "Tiene implicaciones para el desarrollo."
            },
            {
              "text": "La articulación es más móvil",
              "isCorrect": false,
              "rationale": "No es la consecuencia principal."
            },
            {
              "text": "No puede haber movimiento",
              "isCorrect": false,
              "rationale": "No es la consecuencia."
            }
          ],
          "hint": "Puede incluir el 'cartílago de crecimiento'..."
        },
        {
          "question": "¿Cómo se relaciona el grosor de la cápsula con los movimientos?",
          "options": [
            {
              "text": "Su grosor es variable y depende de los movimientos de cada articulación",
              "isCorrect": true,
              "rationale": "La disposición de la cápsula articular en forma de un manguito fibroso está relacionada con la característica de las superficies articulares. Su grosor es variable y depende de los movimientos de cada articulación."
            },
            {
              "text": "Siempre tiene el mismo grosor",
              "isCorrect": false,
              "rationale": "El grosor varía."
            },
            {
              "text": "Es más gruesa donde más se mueve",
              "isCorrect": false,
              "rationale": "Es más delgada donde hay más movimiento."
            },
            {
              "text": "No tiene relación con el movimiento",
              "isCorrect": false,
              "rationale": "Sí está relacionado."
            }
          ],
          "hint": "El grosor 'adapta' a las necesidades mecánicas..."
        },
        {
          "question": "¿Qué son los ligamentos en relación con la cápsula articular?",
          "options": [
            {
              "text": "Engrosamientos de la cápsula en los lugares donde se ejercen fuerzas de tracción",
              "isCorrect": true,
              "rationale": "La cápsula articular presenta engrosamientos en los lugares donde se ejercen fuerzas de tracción, que constituyen los ligamentos."
            },
            {
              "text": "Estructuras separadas de la cápsula",
              "isCorrect": false,
              "rationale": "Son engrosamientos de la cápsula o estructuras que se le agregan."
            },
            {
              "text": "Músculos que rodean la articulación",
              "isCorrect": false,
              "rationale": "No son músculos."
            },
            {
              "text": "Partes del cartílago",
              "isCorrect": false,
              "rationale": "Son tejido fibroso."
            }
          ],
          "hint": "Son como 'refuerzos' de la cápsula..."
        },
        {
          "question": "¿Dónde están mejor diferenciados los ligamentos?",
          "options": [
            {
              "text": "En la articulación del codo y la articulación talocrural, en sus partes lateral y medial",
              "isCorrect": true,
              "rationale": "En la articulación del codo y en la articulación talocrural, los ligamentos están bien diferenciados y son gruesos en sus partes lateral y medial."
            },
            {
              "text": "En todas las articulaciones por igual",
              "isCorrect": false,
              "rationale": "Varía según la articulación."
            },
            {
              "text": "Solo en la rodilla",
              "isCorrect": false,
              "rationale": "También en codo y tobillo."
            },
            {
              "text": "En las articulaciones inmóviles",
              "isCorrect": false,
              "rationale": "En las móviles."
            }
          ],
          "hint": "En el codo y el tobillo son muy evidentes..."
        },
        {
          "question": "¿Por qué la cápsula es más delgada adelante y atrás en el codo y tobillo?",
          "options": [
            {
              "text": "Por la amplitud de los movimientos de flexión y extensión",
              "isCorrect": true,
              "rationale": "La cápsula es más delgada adelante y atrás por la amplitud de los movimientos de flexión y de extensión."
            },
            {
              "text": "Porque ahí no hay ligamentos",
              "isCorrect": false,
              "rationale": "Hay menos refuerzo por el movimiento."
            },
            {
              "text": "Porque es más frágil",
              "isCorrect": false,
              "rationale": "Es por la amplitud del movimiento."
            },
            {
              "text": "No es más delgada en esos sitios",
              "isCorrect": false,
              "rationale": "Sí es más delgada."
            }
          ],
          "hint": "Donde más se 'estira' la cápsula es más delgada..."
        },
        {
          "question": "¿Qué formas pueden tener los ligamentos?",
          "options": [
            {
              "text": "Banda, cinta, cordón separado o engrosamiento adherido a la cápsula",
              "isCorrect": true,
              "rationale": "Los ligamentos poseen formas variables: banda, cinta, cordón separado o engrosamiento adherido a la cápsula."
            },
            {
              "text": "Solo forma de cuerda",
              "isCorrect": false,
              "rationale": "Tienen formas variables."
            },
            {
              "text": "Solo forma de lámina",
              "isCorrect": false,
              "rationale": "Tienen formas variables."
            },
            {
              "text": "Siempre son redondos",
              "isCorrect": false,
              "rationale": "Tienen formas variables."
            }
          ],
          "hint": "Pueden tener diferentes 'aspectos'..."
        },
        {
          "question": "¿Qué función principal tienen los ligamentos?",
          "options": [
            {
              "text": "Su resistencia le confiere firmeza a la articulación",
              "isCorrect": true,
              "rationale": "Los ligamentos poseen resistencia que le confiere firmeza a la articulación."
            },
            {
              "text": "Producir movimiento",
              "isCorrect": false,
              "rationale": "Los músculos producen movimiento."
            },
            {
              "text": "Producir líquido sinovial",
              "isCorrect": false,
              "rationale": "Eso es función de la sinovial."
            },
            {
              "text": "Nutrir el cartílago",
              "isCorrect": false,
              "rationale": "No es su función."
            }
          ],
          "hint": "Dan 'estabilidad' a la articulación..."
        },
        {
          "question": "¿Qué tipos de ligamentos hay según su elasticidad?",
          "options": [
            {
              "text": "Ligamentos fibrosos (prácticamente inextensibles) y ligamentos elásticos (más extensibles)",
              "isCorrect": true,
              "rationale": "Hay ligamentos fibrosos, prácticamente inextensibles, cuya extensión limita el movimiento. Hay ligamentos elásticos, algo más extensibles."
            },
            {
              "text": "Solo ligamentos fibrosos",
              "isCorrect": false,
              "rationale": "También hay elásticos."
            },
            {
              "text": "Solo ligamentos elásticos",
              "isCorrect": false,
              "rationale": "También hay fibrosos."
            },
            {
              "text": "No hay clasificación por elasticidad",
              "isCorrect": false,
              "rationale": "Sí hay dos tipos."
            }
          ],
          "hint": "Unos son 'rígidos' y otros se pueden estirar algo..."
        },
        {
          "question": "¿Qué ejemplo caracteriza a los ligamentos elásticos?",
          "options": [
            {
              "text": "Los ligamentos amarillos de las articulaciones vertebrales",
              "isCorrect": true,
              "rationale": "Ejemplo de ligamentos elásticos son los ligamentos amarillos de las articulaciones vertebrales."
            },
            {
              "text": "El ligamento cruzado de la rodilla",
              "isCorrect": false,
              "rationale": "Ese es fibroso."
            },
            {
              "text": "El ligamento lateral del codo",
              "isCorrect": false,
              "rationale": "Ese es fibroso."
            },
            {
              "text": "El ligamento de la cabeza del fémur",
              "isCorrect": false,
              "rationale": "Ese es fibroso."
            }
          ],
          "hint": "Son los 'amarillos' de la columna..."
        },
        {
          "question": "¿Qué ocurre con los ligamentos con la edad?",
          "options": [
            {
              "text": "Pierden elasticidad y flexibilidad, volviéndose más rígidos con tendencia a acortarse",
              "isCorrect": true,
              "rationale": "Con la edad, los ligamentos pierden su elasticidad y flexibilidad volviéndose más rígidos y con mayor tendencia a acortarse."
            },
            {
              "text": "Se vuelven más elásticos",
              "isCorrect": false,
              "rationale": "Pierden elasticidad."
            },
            {
              "text": "No cambian",
              "isCorrect": false,
              "rationale": "Sí cambian con la edad."
            },
            {
              "text": "Desaparecen",
              "isCorrect": false,
              "rationale": "Se vuelven más rígidos."
            }
          ],
          "hint": "Se ponen más 'rígidos' y menos flexibles..."
        },
        {
          "question": "¿Qué ayuda a mantener la flexibilidad de los ligamentos en edad avanzada?",
          "options": [
            {
              "text": "El ejercicio físico tiende a mantener la flexibilidad",
              "isCorrect": true,
              "rationale": "El ejercicio físico tiende a mantener la flexibilidad aun en individuos de edad avanzada."
            },
            {
              "text": "El reposo absoluto",
              "isCorrect": false,
              "rationale": "El ejercicio ayuda a mantener la flexibilidad."
            },
            {
              "text": "No se puede mantener",
              "isCorrect": false,
              "rationale": "El ejercicio ayuda."
            },
            {
              "text": "Solo la medicación",
              "isCorrect": false,
              "rationale": "El ejercicio es clave."
            }
          ],
          "hint": "Mantenerse activo ayuda..."
        },
        {
          "question": "¿Qué son los músculos yuxtaarticulares?",
          "options": [
            {
              "text": "Músculos que se aplican a la cápsula y actúan como 'ligamentos activos'",
              "isCorrect": true,
              "rationale": "La cápsula está cubierta por un tejido conectivo periarticular al cual se aplican músculos. Se los denomina músculos yuxtaarticulares y desempeñan una acción de 'ligamentos activos'."
            },
            {
              "text": "Músculos dentro de la articulación",
              "isCorrect": false,
              "rationale": "Están alrededor de la articulación."
            },
            {
              "text": "Ligamentos verdaderos",
              "isCorrect": false,
              "rationale": "Son músculos que actúan como ligamentos."
            },
            {
              "text": "Partes del cartílago",
              "isCorrect": false,
              "rationale": "Son músculos."
            }
          ],
          "hint": "Son músculos que 'refuerzan' la articulación..."
        },
        {
          "question": "¿Qué es la membrana sinovial?",
          "options": [
            {
              "text": "Membrana delgada que tapiza la cápsula articular por su superficie interior",
              "isCorrect": true,
              "rationale": "La sinovial es una membrana delgada que tapiza la cápsula articular por su superficie interior."
            },
            {
              "text": "La cápsula fibrosa",
              "isCorrect": false,
              "rationale": "La sinovial está dentro de la cápsula fibrosa."
            },
            {
              "text": "El cartílago articular",
              "isCorrect": false,
              "rationale": "Es una membrana diferente."
            },
            {
              "text": "El líquido dentro de la articulación",
              "isCorrect": false,
              "rationale": "Es la membrana que produce el líquido."
            }
          ],
          "hint": "Es la 'pared interna' de la articulación..."
        },
        {
          "question": "¿Dónde se inserta la membrana sinovial?",
          "options": [
            {
              "text": "En el contorno del revestimiento cartilaginoso de las superficies articulares",
              "isCorrect": true,
              "rationale": "La sinovial se inserta por sus extremos en el contorno del revestimiento cartilaginoso de las superficies articulares."
            },
            {
              "text": "En el centro del hueso",
              "isCorrect": false,
              "rationale": "Se inserta en el borde del cartílago."
            },
            {
              "text": "En los ligamentos",
              "isCorrect": false,
              "rationale": "Se inserta en el contorno del cartílago."
            },
            {
              "text": "En el periostio",
              "isCorrect": false,
              "rationale": "Se inserta en el contorno del cartílago."
            }
          ],
          "hint": "Se fija donde termina el cartílago articular..."
        },
        {
          "question": "¿Qué origen embriológico comparte la sinovial con el cartílago articular?",
          "options": [
            {
              "text": "Comparten el mismo origen embriológico",
              "isCorrect": true,
              "rationale": "La sinovial se inserta en el contorno del revestimiento cartilaginoso, con el que comparte su origen embriológico."
            },
            {
              "text": "Tienen orígenes diferentes",
              "isCorrect": false,
              "rationale": "Comparten origen embriológico."
            },
            {
              "text": "La sinovial no tiene relación con el cartílago",
              "isCorrect": false,
              "rationale": "Comparten origen."
            },
            {
              "text": "Solo en algunas articulaciones",
              "isCorrect": false,
              "rationale": "Siempre comparten origen."
            }
          ],
          "hint": "Se desarrollan 'juntos' desde el embrión..."
        },
        {
          "question": "¿Qué es un receso articular?",
          "options": [
            {
              "text": "Cuando la sinovial tapiza una superficie ósea entre la cápsula y el cartílago",
              "isCorrect": true,
              "rationale": "Cuando la cápsula se inserta a distancia de la superficie articular, la sinovial tapiza toda la superficie ósea interpuesta, reflejándose a partir de la cápsula y formando un receso articular."
            },
            {
              "text": "Una cavidad dentro del hueso",
              "isCorrect": false,
              "rationale": "Es un espacio dentro de la articulación."
            },
            {
              "text": "Una depresión en el cartílago",
              "isCorrect": false,
              "rationale": "Es un espacio sinovial."
            },
            {
              "text": "Un agujero en la cápsula",
              "isCorrect": false,
              "rationale": "Es un espacio formado por la sinovial."
            }
          ],
          "hint": "Es como un 'bolsillo' de la membrana sinovial..."
        },
        {
          "question": "¿Qué son los pliegues sinoviales?",
          "options": [
            {
              "text": "Prolongaciones de la sinovial que rellenan los espacios libres de la articulación",
              "isCorrect": true,
              "rationale": "La sinovial presenta, a veces, prolongaciones de volumen variable en el interior de la articulación. Se las denomina pliegues sinoviales y se encuentran frente a las interlíneas articulares rellenando los espacios libres."
            },
            {
              "text": "Pliegues del cartílago",
              "isCorrect": false,
              "rationale": "Son pliegues de la sinovial."
            },
            {
              "text": "Pliegues de la cápsula fibrosa",
              "isCorrect": false,
              "rationale": "Son de la sinovial."
            },
            {
              "text": "Fracturas",
              "isCorrect": false,
              "rationale": "Son estructuras normales."
            }
          ],
          "hint": "Son 'dobles' de la membrana que llenan espacios..."
        },
        {
          "question": "¿Qué característica vascular tiene la sinovial?",
          "options": [
            {
              "text": "Es la parte más ricamente vascularizada de la articulación",
              "isCorrect": true,
              "rationale": "La sinovial es la parte más ricamente vascularizada de la articulación."
            },
            {
              "text": "No tiene vascularización",
              "isCorrect": false,
              "rationale": "Muy vascularizada."
            },
            {
              "text": "Tiene poca vascularización",
              "isCorrect": false,
              "rationale": "Es la más vascularizada."
            },
            {
              "text": "Solo tiene vasos linfáticos",
              "isCorrect": false,
              "rationale": "Tiene abundantes vasos sanguíneos."
            }
          ],
          "hint": "Tiene 'mucha sangre' comparada con el resto..."
        },
        {
          "question": "¿Qué secreta la membrana sinovial?",
          "options": [
            {
              "text": "Líquido sinovial",
              "isCorrect": true,
              "rationale": "La sinovial secrega líquido sinovial."
            },
            {
              "text": "Cartílago",
              "isCorrect": false,
              "rationale": "Segrega líquido."
            },
            {
              "text": "Hueso",
              "isCorrect": false,
              "rationale": "Segrega líquido."
            },
            {
              "text": "Ligamentos",
              "isCorrect": false,
              "rationale": "Segrega líquido."
            }
          ],
          "hint": "Produce el 'lubricante' de la articulación..."
        },
        {
          "question": "¿Qué es el líquido sinovial?",
          "options": [
            {
              "text": "Líquido transparente constituido por agua, materias proteicas, mucina, grasas y sales minerales",
              "isCorrect": true,
              "rationale": "El líquido sinovial es un líquido transparente que existe en escasa cantidad en estado normal. Se encuentra constituido por agua, materias proteicas, algo de mucina, trazas de grasas y sales minerales."
            },
            {
              "text": "Solo agua",
              "isCorrect": false,
              "rationale": "Tiene más componentes."
            },
            {
              "text": "Sangre",
              "isCorrect": false,
              "rationale": "No es sangre."
            },
            {
              "text": "Linfa",
              "isCorrect": false,
              "rationale": "No es linfa."
            }
          ],
          "hint": "Es un líquido 'complejo' con varios componentes..."
        },
        {
          "question": "¿Qué células se pueden observar en el líquido sinovial?",
          "options": [
            {
              "text": "Células deterioradas y descamadas del cartílago y de la sinovial",
              "isCorrect": true,
              "rationale": "En el líquido sinovial también se observan células deterioradas y descamadas del cartílago y de la sinovial."
            },
            {
              "text": "Solo glóbulos rojos",
              "isCorrect": false,
              "rationale": "Hay células descamadas del cartílago y sinovial."
            },
            {
              "text": "Solo glóbulos blancos",
              "isCorrect": false,
              "rationale": "Hay células descamadas del cartílago y sinovial."
            },
            {
              "text": "No hay células",
              "isCorrect": false,
              "rationale": "Hay células descamadas."
            }
          ],
          "hint": "Tiene 'restos' de células del cartílago y la sinovial..."
        },
        {
          "question": "¿Por qué es vulnerable la sinovial?",
          "options": [
            {
              "text": "Es sensible a infecciones (artritis septicémicas) y a modificaciones del medio interno (reumatismo, gota)",
              "isCorrect": true,
              "rationale": "Constituye una porción vulnerable de la articulación. Es sensible a las infecciones aportadas por la sangre (artritis septicémicas) o a las modificaciones del medio interno (reumatismo, gota)."
            },
            {
              "text": "No es vulnerable",
              "isCorrect": false,
              "rationale": "Sí es vulnerable."
            },
            {
              "text": "Solo a traumatismos",
              "isCorrect": false,
              "rationale": "También a infecciones y enfermedades sistémicas."
            },
            {
              "text": "Porque no tiene vascularización",
              "isCorrect": false,
              "rationale": "Tiene mucha vascularización."
            }
          ],
          "hint": "Puede afectarse por infecciones y enfermedades sistémicas..."
        },
        {
          "question": "¿Qué provocan los traumatismos que desgarran la sinovial?",
          "options": [
            {
              "text": "Hemorragias intraarticulares (hemartrosis)",
              "isCorrect": true,
              "rationale": "Los traumatismos que la desgarran provocan hemorragias intraarticulares (hemartrosis)."
            },
            {
              "text": "Solo dolor",
              "isCorrect": false,
              "rationale": "Provocan hemartrosis."
            },
            {
              "text": "Nada",
              "isCorrect": false,
              "rationale": "Provocan hemartrosis."
            },
            {
              "text": "Aumento del líquido sinovial",
              "isCorrect": false,
              "rationale": "Provocan hemartrosis."
            }
          ],
          "hint": "Sangrado dentro de la articulación..."
        },
        {
          "question": "¿Qué consecuencias tienen las alteraciones de la sinovial?",
          "options": [
            {
              "text": "Repercuten siempre sobre el movimiento articular (dolor, rigidez)",
              "isCorrect": true,
              "rationale": "Las alteraciones que asientan en la sinovial repercuten siempre sobre el movimiento articular (dolor, rigidez)."
            },
            {
              "text": "No afectan el movimiento",
              "isCorrect": false,
              "rationale": "Sí afectan el movimiento."
            },
            {
              "text": "Solo afectan la piel",
              "isCorrect": false,
              "rationale": "Afectan la articulación."
            },
            {
              "text": "No tienen consecuencias",
              "isCorrect": false,
              "rationale": "Causan dolor y rigidez."
            }
          ],
          "hint": "Dolor y rigidez son síntomas típicos..."
        }
      ]
    },
    {
      "id": 7,
      "nombre": "Mecánica Articular",
      "preguntas": 21,
      "data": [
        {
          "question": "¿Qué son las palancas en el contexto del aparato locomotor?",
          "options": [
            {
              "text": "Las piezas del esqueleto que poseen un punto de apoyo, una potencia y una resistencia",
              "isCorrect": true,
              "rationale": "Las diversas piezas del esqueleto son semejantes a palancas y poseen como ellas un punto de apoyo, una potencia y una resistencia."
            },
            {
              "text": "Solo los músculos",
              "isCorrect": false,
              "rationale": "Los huesos funcionan como palancas."
            },
            {
              "text": "Las articulaciones",
              "isCorrect": false,
              "rationale": "Los huesos son las palancas."
            },
            {
              "text": "Los tendones",
              "isCorrect": false,
              "rationale": "Los huesos funcionan como palancas."
            }
          ],
          "hint": "Los 'huesos' funcionan como barras de palanca..."
        },
        {
          "question": "¿Qué es el punto de apoyo en una palanca del cuerpo?",
          "options": [
            {
              "text": "El punto inmóvil en torno del cual gira la palanca: la articulación",
              "isCorrect": true,
              "rationale": "El punto de apoyo es el punto inmóvil en torno del cual gira la palanca. En el hombre lo constituye la articulación."
            },
            {
              "text": "El músculo",
              "isCorrect": false,
              "rationale": "El músculo es la potencia."
            },
            {
              "text": "El peso del cuerpo",
              "isCorrect": false,
              "rationale": "Eso puede ser la resistencia."
            },
            {
              "text": "El hueso",
              "isCorrect": false,
              "rationale": "El hueso es la palanca."
            }
          ],
          "hint": "Es donde la palanca se 'apoya' para girar..."
        },
        {
          "question": "¿Qué es la potencia en una palanca del cuerpo?",
          "options": [
            {
              "text": "La fuerza que impulsa a la palanca a desplazarse: el músculo",
              "isCorrect": true,
              "rationale": "La potencia es la fuerza que impulsa a la palanca a desplazarse, está representada por el músculo o los músculos que se insertan en ella."
            },
            {
              "text": "La articulación",
              "isCorrect": false,
              "rationale": "Esa es el punto de apoyo."
            },
            {
              "text": "El peso a levantar",
              "isCorrect": false,
              "rationale": "Eso es la resistencia."
            },
            {
              "text": "El hueso",
              "isCorrect": false,
              "rationale": "El hueso es la palanca."
            }
          ],
          "hint": "Es la 'fuerza' que mueve la palanca..."
        },
        {
          "question": "¿Qué es la resistencia en una palanca del cuerpo?",
          "options": [
            {
              "text": "La fuerza que se debe vencer",
              "isCorrect": true,
              "rationale": "La resistencia es la fuerza que se debe vencer."
            },
            {
              "text": "El músculo",
              "isCorrect": false,
              "rationale": "Ese es la potencia."
            },
            {
              "text": "La articulación",
              "isCorrect": false,
              "rationale": "Ese es el punto de apoyo."
            },
            {
              "text": "El tendón",
              "isCorrect": false,
              "rationale": "Es la fuerza a vencer."
            }
          ],
          "hint": "Es lo que hay que 'mover o levantar'..."
        },
        {
          "question": "En la flexión del antebrazo, ¿qué constituye la palanca?",
          "options": [
            {
              "text": "Los dos huesos del antebrazo",
              "isCorrect": true,
              "rationale": "En el movimiento de flexión del antebrazo sobre el brazo, la palanca está constituida por los dos huesos del antebrazo."
            },
            {
              "text": "El bíceps",
              "isCorrect": false,
              "rationale": "El bíceps es la potencia."
            },
            {
              "text": "El codo",
              "isCorrect": false,
              "rationale": "El codo es el punto de apoyo."
            },
            {
              "text": "La mano",
              "isCorrect": false,
              "rationale": "La mano es parte de la resistencia."
            }
          ],
          "hint": "Son los huesos que se mueven..."
        },
        {
          "question": "En la flexión del antebrazo, ¿qué es el punto de apoyo?",
          "options": [
            {
              "text": "La articulación del codo",
              "isCorrect": true,
              "rationale": "En la flexión del antebrazo, el punto de apoyo es la articulación del codo."
            },
            {
              "text": "El bíceps",
              "isCorrect": false,
              "rationale": "Ese es la potencia."
            },
            {
              "text": "El antebrazo",
              "isCorrect": false,
              "rationale": "Ese es la palanca."
            },
            {
              "text": "La mano",
              "isCorrect": false,
              "rationale": "Esa es parte de la resistencia."
            }
          ],
          "hint": "Es la articulación que no se mueve..."
        },
        {
          "question": "En la flexión del antebrazo, ¿qué representa la potencia?",
          "options": [
            {
              "text": "Los músculos bíceps braquial y braquial",
              "isCorrect": true,
              "rationale": "En la flexión del antebrazo, la potencia agrupa los músculos bíceps braquial y braquial."
            },
            {
              "text": "El antebrazo",
              "isCorrect": false,
              "rationale": "Ese es la palanca."
            },
            {
              "text": "El codo",
              "isCorrect": false,
              "rationale": "Ese es el punto de apoyo."
            },
            {
              "text": "La mano",
              "isCorrect": false,
              "rationale": "Esa es parte de la resistencia."
            }
          ],
          "hint": "Son los músculos que 'jalan'..."
        },
        {
          "question": "En la flexión del antebrazo, ¿qué representa la resistencia?",
          "options": [
            {
              "text": "El antebrazo, la mano y lo que ésta debe levantar",
              "isCorrect": true,
              "rationale": "En la flexión del antebrazo, la resistencia está representada por el antebrazo, la mano y lo que ésta debe levantar."
            },
            {
              "text": "Solo la mano",
              "isCorrect": false,
              "rationale": "Incluye antebrazo y lo que se levanta."
            },
            {
              "text": "El bíceps",
              "isCorrect": false,
              "rationale": "Ese es la potencia."
            },
            {
              "text": "El codo",
              "isCorrect": false,
              "rationale": "Ese es el punto de apoyo."
            }
          ],
          "hint": "Es todo lo que hay que 'levantar'..."
        },
        {
          "question": "¿Cuántos géneros de palanca se distinguen?",
          "options": [
            {
              "text": "Tres géneros: primer género, segundo género y tercer género",
              "isCorrect": true,
              "rationale": "De acuerdo con la ubicación del punto de apoyo y de los puntos de aplicación de la potencia y de la resistencia se distinguen tres géneros de palanca."
            },
            {
              "text": "Dos géneros",
              "isCorrect": false,
              "rationale": "Son tres géneros."
            },
            {
              "text": "Cuatro géneros",
              "isCorrect": false,
              "rationale": "Son tres géneros."
            },
            {
              "text": "Cinco géneros",
              "isCorrect": false,
              "rationale": "Son tres géneros."
            }
          ],
          "hint": "Son tres tipos según la disposición de los elementos..."
        },
        {
          "question": "¿Qué caracteriza a la palanca de primer género?",
          "options": [
            {
              "text": "El punto de apoyo (A) está situado entre la resistencia (R) y la potencia (P)",
              "isCorrect": true,
              "rationale": "La palanca de primer género es aquella en la que el punto de apoyo (A) está situado entre el punto de aplicación de la resistencia (R) y el de la potencia (P)."
            },
            {
              "text": "La resistencia está entre el apoyo y la potencia",
              "isCorrect": false,
              "rationale": "Esa es de segundo género."
            },
            {
              "text": "La potencia está entre el apoyo y la resistencia",
              "isCorrect": false,
              "rationale": "Esa es de tercer género."
            },
            {
              "text": "No hay punto de apoyo",
              "isCorrect": false,
              "rationale": "Siempre hay punto de apoyo."
            }
          ],
          "hint": "El apoyo está 'en el medio'..."
        },
        {
          "question": "¿Qué ejemplo de palanca de primer género hay en el cuerpo?",
          "options": [
            {
              "text": "La articulación de la cabeza con la columna vertebral",
              "isCorrect": true,
              "rationale": "La articulación de la cabeza con la columna vertebral proporciona un ejemplo de palanca de primer género."
            },
            {
              "text": "Levantarse sobre las puntas de los pies",
              "isCorrect": false,
              "rationale": "Eso es de segundo género."
            },
            {
              "text": "La flexión del antebrazo",
              "isCorrect": false,
              "rationale": "Eso es de tercer género."
            },
            {
              "text": "La masticación",
              "isCorrect": false,
              "rationale": "Eso es de tercer género."
            }
          ],
          "hint": "Está en el cuello, mueve la cabeza..."
        },
        {
          "question": "¿Qué caracteriza a la palanca de segundo género?",
          "options": [
            {
              "text": "La resistencia (R) está situada entre el punto de apoyo (A) y la potencia (P)",
              "isCorrect": true,
              "rationale": "La palanca de segundo género es aquella en la que el punto de aplicación de la resistencia (R) está situado entre el punto de apoyo (A) y la aplicación de la potencia (P)."
            },
            {
              "text": "El apoyo está entre la resistencia y la potencia",
              "isCorrect": false,
              "rationale": "Esa es de primer género."
            },
            {
              "text": "La potencia está entre el apoyo y la resistencia",
              "isCorrect": false,
              "rationale": "Esa es de tercer género."
            },
            {
              "text": "No hay resistencia",
              "isCorrect": false,
              "rationale": "Siempre hay resistencia."
            }
          ],
          "hint": "La resistencia está 'en el medio'..."
        },
        {
          "question": "¿Qué ejemplo de palanca de segundo género hay en el cuerpo?",
          "options": [
            {
              "text": "Levantarse sobre las puntas de los pies (elevación del talón)",
              "isCorrect": true,
              "rationale": "Es lo que sucede cuando se levanta el talón, elevándose sobre las puntas de los pies."
            },
            {
              "text": "La articulación de la cabeza con la columna",
              "isCorrect": false,
              "rationale": "Esa es de primer género."
            },
            {
              "text": "La flexión del antebrazo",
              "isCorrect": false,
              "rationale": "Esa es de tercer género."
            },
            {
              "text": "La rotación del cuello",
              "isCorrect": false,
              "rationale": "Esa es de primer género."
            }
          ],
          "hint": "Es cuando te ponés en 'puntillas'..."
        },
        {
          "question": "¿Qué caracteriza a la palanca de tercer género?",
          "options": [
            {
              "text": "La potencia (P) está aplicada entre el punto de apoyo (A) y la resistencia (R)",
              "isCorrect": true,
              "rationale": "La palanca de tercer género es aquella en la que se encuentra una potencia (P) aplicada entre el punto de apoyo (A) y el punto de aplicación de la resistencia (R)."
            },
            {
              "text": "El apoyo está entre la resistencia y la potencia",
              "isCorrect": false,
              "rationale": "Esa es de primer género."
            },
            {
              "text": "La resistencia está entre el apoyo y la potencia",
              "isCorrect": false,
              "rationale": "Esa es de segundo género."
            },
            {
              "text": "No hay potencia",
              "isCorrect": false,
              "rationale": "Siempre hay potencia."
            }
          ],
          "hint": "La potencia está 'en el medio'..."
        },
        {
          "question": "¿Qué tipo de palanca es el más numeroso en el organismo?",
          "options": [
            {
              "text": "La palanca de tercer género, particularmente en los miembros",
              "isCorrect": true,
              "rationale": "La palanca de tercer género es el más numeroso en el organismo, en particular en los miembros."
            },
            {
              "text": "La de primer género",
              "isCorrect": false,
              "rationale": "Es la menos común."
            },
            {
              "text": "La de segundo género",
              "isCorrect": false,
              "rationale": "Es menos común que la de tercer género."
            },
            {
              "text": "Todas son igual de comunes",
              "isCorrect": false,
              "rationale": "La de tercer género es la más común."
            }
          ],
          "hint": "La mayoría de las palancas del cuerpo son de este tipo..."
        },
        {
          "question": "¿Qué ejemplo de palanca de tercer género hay en el cuerpo?",
          "options": [
            {
              "text": "La flexión del antebrazo sobre el brazo",
              "isCorrect": true,
              "rationale": "La flexión del antebrazo sobre el brazo es un ejemplo de palanca de tercer género."
            },
            {
              "text": "La articulación de la cabeza con la columna",
              "isCorrect": false,
              "rationale": "Esa es de primer género."
            },
            {
              "text": "Levantarse sobre las puntas de los pies",
              "isCorrect": false,
              "rationale": "Eso es de segundo género."
            },
            {
              "text": "La extensión de la columna",
              "isCorrect": false,
              "rationale": "Esa es de primer género."
            }
          ],
          "hint": "Es el ejemplo clásico del codo..."
        },
        {
          "question": "¿Qué permiten las nociones de mecánica de palancas?",
          "options": [
            {
              "text": "Interpretar la acción de los músculos cuando se conocen sus inserciones y relaciones articulares",
              "isCorrect": true,
              "rationale": "Las nociones elementales de mecánica precedentes permiten interpretar la acción de los músculos: cuando se conocen sus inserciones y sus relaciones articulares es fácil prever su acción."
            },
            {
              "text": "Diagnosticar enfermedades",
              "isCorrect": false,
              "rationale": "No es su función principal."
            },
            {
              "text": "Medir la fuerza muscular",
              "isCorrect": false,
              "rationale": "Permiten entender la acción muscular."
            },
            {
              "text": "Determinar el peso del cuerpo",
              "isCorrect": false,
              "rationale": "Permiten entender la mecánica del movimiento."
            }
          ],
          "hint": "Ayudan a 'predecir' qué hace cada músculo..."
        },
        {
          "question": "¿Qué tipos de músculos se pueden identificar según su acción?",
          "options": [
            {
              "text": "Flexores, extensores, rotadores (mediales o laterales), abductores o aductores",
              "isCorrect": true,
              "rationale": "Por las nociones de mecánica se habla de músculos flexores, extensores, rotadores (mediales o laterales), abductores o aductores."
            },
            {
              "text": "Solo flexores y extensores",
              "isCorrect": false,
              "rationale": "Hay más tipos."
            },
            {
              "text": "Solo abductores y aductores",
              "isCorrect": false,
              "rationale": "Hay más tipos."
            },
            {
              "text": "Solo rotadores",
              "isCorrect": false,
              "rationale": "Hay más tipos."
            }
          ],
          "hint": "Hay varios tipos según el movimiento que producen..."
        },
        {
          "question": "¿Qué son los 'ligamentos activos'?",
          "options": [
            {
              "text": "Músculos periarticulares que mantienen las superficies articulares en contacto",
              "isCorrect": true,
              "rationale": "Algunos músculos periarticulares actúan sobre las superficies articulares manteniéndolas en contacto y reforzando la acción puramente pasiva de los ligamentos fibrosos; ellos se comportan así como verdaderos ligamentos activos."
            },
            {
              "text": "Ligamentos más fuertes",
              "isCorrect": false,
              "rationale": "Son músculos que actúan como ligamentos."
            },
            {
              "text": "Ligamentos elásticos",
              "isCorrect": false,
              "rationale": "Son músculos."
            },
            {
              "text": "Tendones",
              "isCorrect": false,
              "rationale": "Son músculos periarticulares."
            }
          ],
          "hint": "Son músculos que 'estabilizan' la articulación..."
        },
        {
          "question": "¿En qué articulación es notable la acción de los 'ligamentos activos'?",
          "options": [
            {
              "text": "En la articulación escapulohumeral (hombro)",
              "isCorrect": true,
              "rationale": "Esto es notable sobre todo en la articulación escapulohumeral."
            },
            {
              "text": "En la cadera",
              "isCorrect": false,
              "rationale": "Es más notable en el hombro."
            },
            {
              "text": "En la rodilla",
              "isCorrect": false,
              "rationale": "Es más notable en el hombro."
            },
            {
              "text": "En el codo",
              "isCorrect": false,
              "rationale": "Es más notable en el hombro."
            }
          ],
          "hint": "En el hombro, donde hay poca estabilidad ósea..."
        },
        {
          "question": "¿Qué propiedad tiene cada músculo considerado de manera aislada?",
          "options": [
            {
              "text": "Posee una acción que le es propia",
              "isCorrect": true,
              "rationale": "Cada músculo considerado de manera aislada posee una acción que le es propia."
            },
            {
              "text": "Todos tienen la misma acción",
              "isCorrect": false,
              "rationale": "Cada uno tiene su acción propia."
            },
            {
              "text": "No tienen acción propia",
              "isCorrect": false,
              "rationale": "Cada uno tiene su acción."
            },
            {
              "text": "Solo actúan en grupo",
              "isCorrect": false,
              "rationale": "Tienen acción individual."
            }
          ],
          "hint": "Cada músculo tiene su 'función específica'..."
        }
      ]
    },
    {
      "id": 8,
      "nombre": "Movimientos Simples",
      "preguntas": 23,
      "data": [
        {
          "question": "¿Qué es la flexión como movimiento articular?",
          "options": [
            {
              "text": "La reducción o disminución del ángulo formado entre huesos o partes del cuerpo",
              "isCorrect": true,
              "rationale": "La flexión indica la reducción o disminución del ángulo formado entre huesos o partes del cuerpo."
            },
            {
              "text": "El aumento del ángulo",
              "isCorrect": false,
              "rationale": "Eso es la extensión."
            },
            {
              "text": "El alejamiento del plano sagital",
              "isCorrect": false,
              "rationale": "Eso es la abducción."
            },
            {
              "text": "La rotación sobre el eje longitudinal",
              "isCorrect": false,
              "rationale": "Eso es la rotación."
            }
          ],
          "hint": "Es 'cerrar' el ángulo entre dos segmentos..."
        },
        {
          "question": "¿Qué determina generalmente el movimiento de flexión?",
          "options": [
            {
              "text": "El acortamiento de la distancia entre los extremos alejados de los segmentos articulados",
              "isCorrect": true,
              "rationale": "Este movimiento determina, en general, el acortamiento de la distancia entre los extremos alejados de los segmentos articulados."
            },
            {
              "text": "El alargamiento de la distancia",
              "isCorrect": false,
              "rationale": "Acorta la distancia."
            },
            {
              "text": "No cambia la distancia",
              "isCorrect": false,
              "rationale": "Acorta la distancia."
            },
            {
              "text": "La rotación del segmento",
              "isCorrect": false,
              "rationale": "Acorta la distancia."
            }
          ],
          "hint": "Los extremos se 'acercan'..."
        },
        {
          "question": "¿En qué plano se desplaza el segmento flexionado?",
          "options": [
            {
              "text": "En un plano sagital, alrededor de un eje transverso",
              "isCorrect": true,
              "rationale": "El segmento flexionado se desplaza en un plano sagital y su extremo articular gira alrededor de un eje transverso."
            },
            {
              "text": "En un plano coronal",
              "isCorrect": false,
              "rationale": "Es en plano sagital."
            },
            {
              "text": "En un plano horizontal",
              "isCorrect": false,
              "rationale": "Es en plano sagital."
            },
            {
              "text": "En un plano oblicuo",
              "isCorrect": false,
              "rationale": "Es en plano sagital."
            }
          ],
          "hint": "Es un movimiento 'adelante-atás' en el plano que divide el cuerpo en derecha e izquierda..."
        },
        {
          "question": "¿Qué excepción hay para el eje de giro en la flexión?",
          "options": [
            {
              "text": "En la flexión del pulgar el eje de giro es oblicuo",
              "isCorrect": true,
              "rationale": "El segmento flexionado gira alrededor de un eje transverso, excepto en la flexión del pulgar donde el eje de giro es oblicuo."
            },
            {
              "text": "No hay excepciones",
              "isCorrect": false,
              "rationale": "El pulgar es una excepción."
            },
            {
              "text": "En el codo el eje es diferente",
              "isCorrect": false,
              "rationale": "En el pulgar."
            },
            {
              "text": "En la rodilla el eje es diferente",
              "isCorrect": false,
              "rationale": "En el pulgar."
            }
          ],
          "hint": "Es en el dedo pulgar..."
        },
        {
          "question": "¿Qué es la extensión como movimiento articular?",
          "options": [
            {
              "text": "El enderezamiento o aumento del ángulo formado entre huesos o segmentos del cuerpo",
              "isCorrect": true,
              "rationale": "La extensión indica el enderezamiento o el aumento del ángulo formado entre huesos o segmentos del cuerpo."
            },
            {
              "text": "La disminución del ángulo",
              "isCorrect": false,
              "rationale": "Eso es la flexión."
            },
            {
              "text": "El alejamiento del plano sagital",
              "isCorrect": false,
              "rationale": "Eso es la abducción."
            },
            {
              "text": "La rotación sobre el eje",
              "isCorrect": false,
              "rationale": "Eso es la rotación."
            }
          ],
          "hint": "Es 'abrir' el ángulo entre dos segmentos..."
        },
        {
          "question": "¿Qué relación tiene la extensión con la flexión?",
          "options": [
            {
              "text": "Es el movimiento opuesto a la flexión",
              "isCorrect": true,
              "rationale": "La extensión es el movimiento opuesto a la flexión."
            },
            {
              "text": "Es el mismo movimiento",
              "isCorrect": false,
              "rationale": "Son movimientos opuestos."
            },
            {
              "text": "No tiene relación",
              "isCorrect": false,
              "rationale": "Son opuestos."
            },
            {
              "text": "Es un movimiento independiente",
              "isCorrect": false,
              "rationale": "Son opuestos."
            }
          ],
          "hint": "Van en 'direcciones contrarias'..."
        },
        {
          "question": "¿Qué puede ocurrir con la distancia entre extremos en la extensión?",
          "options": [
            {
              "text": "Puede haber un alargamiento de la distancia entre los extremos alejados",
              "isCorrect": true,
              "rationale": "En la extensión puede haber un alargamiento de la distancia entre los extremos alejados de los segmentos articulados."
            },
            {
              "text": "Siempre se acorta",
              "isCorrect": false,
              "rationale": "Puede alargarse."
            },
            {
              "text": "No cambia",
              "isCorrect": false,
              "rationale": "Puede alargarse."
            },
            {
              "text": "Depende de la articulación",
              "isCorrect": false,
              "rationale": "Generalmente alarga."
            }
          ],
          "hint": "Los extremos se 'alejan'..."
        },
        {
          "question": "¿Qué es la abducción como movimiento articular?",
          "options": [
            {
              "text": "El alejamiento del extremo no articular de un segmento del plano sagital mediano",
              "isCorrect": true,
              "rationale": "En el movimiento de abducción, el extremo no articular de un segmento se aleja del plano sagital mediano."
            },
            {
              "text": "El acercamiento al plano sagital",
              "isCorrect": false,
              "rationale": "Eso es la aducción."
            },
            {
              "text": "La disminución del ángulo",
              "isCorrect": false,
              "rationale": "Eso es la flexión."
            },
            {
              "text": "La rotación sobre el eje",
              "isCorrect": false,
              "rationale": "Eso es la rotación."
            }
          ],
          "hint": "Es 'separar' del centro del cuerpo..."
        },
        {
          "question": "¿Qué otro nombre recibe la abducción?",
          "options": [
            {
              "text": "Separación",
              "isCorrect": true,
              "rationale": "La abducción también es denominada separación."
            },
            {
              "text": "Aproximación",
              "isCorrect": false,
              "rationale": "Eso es la aducción."
            },
            {
              "text": "Flexión lateral",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            },
            {
              "text": "Rotación",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            }
          ],
          "hint": "Sinónimo de 'alejarse'..."
        },
        {
          "question": "¿En qué plano se desplaza el segmento en la abducción?",
          "options": [
            {
              "text": "En un plano coronal, alrededor de un eje sagital",
              "isCorrect": true,
              "rationale": "El segmento en movimiento se desplaza en un plano coronal y su extremo articular gira alrededor de un eje sagital."
            },
            {
              "text": "En un plano sagital",
              "isCorrect": false,
              "rationale": "Es en plano coronal."
            },
            {
              "text": "En un plano horizontal",
              "isCorrect": false,
              "rationale": "Es en plano coronal."
            },
            {
              "text": "En un plano oblicuo",
              "isCorrect": false,
              "rationale": "Es en plano coronal."
            }
          ],
          "hint": "Es un movimiento 'lateral' en el plano que divide el cuerpo en adelante y atrás..."
        },
        {
          "question": "¿Qué excepción hay para el eje de la abducción?",
          "options": [
            {
              "text": "En el ojo la abducción se realiza alrededor del eje vertical",
              "isCorrect": true,
              "rationale": "En la abducción el segmento gira alrededor de un eje sagital, excepto en el ojo donde se realiza alrededor del eje vertical."
            },
            {
              "text": "No hay excepciones",
              "isCorrect": false,
              "rationale": "El ojo es una excepción."
            },
            {
              "text": "En el pulgar",
              "isCorrect": false,
              "rationale": "En el ojo."
            },
            {
              "text": "En el hombro",
              "isCorrect": false,
              "rationale": "En el ojo."
            }
          ],
          "hint": "Es en el ojo..."
        },
        {
          "question": "¿Qué es la aducción como movimiento articular?",
          "options": [
            {
              "text": "El acercamiento hacia el plano sagital mediano",
              "isCorrect": true,
              "rationale": "El movimiento de aducción indica que se acerca hacia el plano sagital mediano."
            },
            {
              "text": "El alejamiento del plano sagital",
              "isCorrect": false,
              "rationale": "Eso es la abducción."
            },
            {
              "text": "La disminución del ángulo",
              "isCorrect": false,
              "rationale": "Eso es la flexión."
            },
            {
              "text": "El aumento del ángulo",
              "isCorrect": false,
              "rationale": "Eso es la extensión."
            }
          ],
          "hint": "Es 'acercarse' al centro del cuerpo..."
        },
        {
          "question": "¿Qué otro nombre recibe la aducción?",
          "options": [
            {
              "text": "Aproximación",
              "isCorrect": true,
              "rationale": "La aducción también es denominada aproximación."
            },
            {
              "text": "Separación",
              "isCorrect": false,
              "rationale": "Eso es la abducción."
            },
            {
              "text": "Flexión",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            },
            {
              "text": "Rotación",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            }
          ],
          "hint": "Sinónimo de 'acercarse'..."
        },
        {
          "question": "¿Qué relación tiene la aducción con la abducción?",
          "options": [
            {
              "text": "Es el movimiento opuesto a la abducción",
              "isCorrect": true,
              "rationale": "La aducción es el movimiento opuesto a la abducción."
            },
            {
              "text": "Es el mismo movimiento",
              "isCorrect": false,
              "rationale": "Son opuestos."
            },
            {
              "text": "No tiene relación",
              "isCorrect": false,
              "rationale": "Son opuestos."
            },
            {
              "text": "Es un movimiento independiente",
              "isCorrect": false,
              "rationale": "Son opuestos."
            }
          ],
          "hint": "Van en 'direcciones contrarias'..."
        },
        {
          "question": "¿Qué es la rotación como movimiento articular?",
          "options": [
            {
              "text": "El movimiento de un segmento alrededor de su eje longitudinal",
              "isCorrect": true,
              "rationale": "La rotación es el movimiento de un segmento alrededor de su eje longitudinal."
            },
            {
              "text": "El movimiento de acercamiento al plano sagital",
              "isCorrect": false,
              "rationale": "Eso es la aducción."
            },
            {
              "text": "El alejamiento del plano sagital",
              "isCorrect": false,
              "rationale": "Eso es la abducción."
            },
            {
              "text": "La disminución del ángulo",
              "isCorrect": false,
              "rationale": "Eso es la flexión."
            }
          ],
          "hint": "Es 'girar' sobre su propio eje..."
        },
        {
          "question": "¿Cómo puede ser la rotación?",
          "options": [
            {
              "text": "Medial o lateral, determinada por la dirección de la cara anterior del segmento que rota",
              "isCorrect": true,
              "rationale": "La rotación puede ser medial o lateral, determinada por la dirección de la cara anterior del segmento que rota."
            },
            {
              "text": "Solo medial",
              "isCorrect": false,
              "rationale": "Puede ser medial o lateral."
            },
            {
              "text": "Solo lateral",
              "isCorrect": false,
              "rationale": "Puede ser medial o lateral."
            },
            {
              "text": "Solo anterior",
              "isCorrect": false,
              "rationale": "Puede ser medial o lateral."
            }
          ],
          "hint": "Se nombra según hacia dónde 'mira' la parte de adelante..."
        },
        {
          "question": "¿Qué es la flexión dorsal del pie?",
          "options": [
            {
              "text": "El movimiento del tobillo que eleva el extremo anterior del pie",
              "isCorrect": true,
              "rationale": "La flexión dorsal del pie se trata del movimiento del tobillo que eleva el extremo anterior del pie, producido por el grupo de músculos extensores."
            },
            {
              "text": "El movimiento que baja la punta del pie",
              "isCorrect": false,
              "rationale": "Eso es la flexión plantar."
            },
            {
              "text": "El movimiento de girar el pie",
              "isCorrect": false,
              "rationale": "Es la elevación del extremo anterior."
            },
            {
              "text": "El movimiento de separar el pie",
              "isCorrect": false,
              "rationale": "Es la elevación del extremo anterior."
            }
          ],
          "hint": "Es 'levantar' la punta del pie hacia arriba..."
        },
        {
          "question": "¿Qué otro nombre recibe la flexión dorsal del pie?",
          "options": [
            {
              "text": "Dorsiflexión",
              "isCorrect": true,
              "rationale": "La flexión dorsal del pie también es denominada dorsiflexión."
            },
            {
              "text": "Plantiflexión",
              "isCorrect": false,
              "rationale": "Eso es la flexión plantar."
            },
            {
              "text": "Inversión",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            },
            {
              "text": "Eversión",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            }
          ],
          "hint": "Otro nombre para 'flexión dorsal'..."
        },
        {
          "question": "¿Qué músculos producen la flexión dorsal del pie?",
          "options": [
            {
              "text": "El grupo de músculos extensores (compartimento anterior de la pierna)",
              "isCorrect": true,
              "rationale": "La flexión dorsal del pie es producida por el grupo de músculos extensores (compartimento anterior de la pierna)."
            },
            {
              "text": "El grupo de músculos flexores",
              "isCorrect": false,
              "rationale": "Esos producen la flexión plantar."
            },
            {
              "text": "Los músculos de la pantorrilla",
              "isCorrect": false,
              "rationale": "Esos producen la flexión plantar."
            },
            {
              "text": "Los músculos del pie",
              "isCorrect": false,
              "rationale": "Son los músculos anteriores de la pierna."
            }
          ],
          "hint": "Están en la parte de 'adelante' de la pierna..."
        },
        {
          "question": "¿Qué es la flexión plantar del pie?",
          "options": [
            {
              "text": "El movimiento del tobillo que desciende el extremo anterior del pie",
              "isCorrect": true,
              "rationale": "La flexión plantar del pie es el movimiento del tobillo que desciende el extremo anterior del pie, producido por el grupo de músculos flexores."
            },
            {
              "text": "El movimiento que eleva la punta del pie",
              "isCorrect": false,
              "rationale": "Eso es la flexión dorsal."
            },
            {
              "text": "El movimiento de girar el pie",
              "isCorrect": false,
              "rationale": "Es el descenso del extremo anterior."
            },
            {
              "text": "El movimiento de separar el pie",
              "isCorrect": false,
              "rationale": "Es el descenso del extremo anterior."
            }
          ],
          "hint": "Es 'bajar' la punta del pie, como pararse en puntillas..."
        },
        {
          "question": "¿Qué músculos producen la flexión plantar del pie?",
          "options": [
            {
              "text": "El grupo de músculos flexores (compartimento posterior de la pierna)",
              "isCorrect": true,
              "rationale": "La flexión plantar del pie es producida por el grupo de músculos flexores (compartimento posterior de la pierna)."
            },
            {
              "text": "El grupo de músculos extensores",
              "isCorrect": false,
              "rationale": "Esos producen la flexión dorsal."
            },
            {
              "text": "Los músculos de la parte anterior",
              "isCorrect": false,
              "rationale": "Son los músculos posteriores."
            },
            {
              "text": "Los músculos del pie",
              "isCorrect": false,
              "rationale": "Son los músculos posteriores de la pierna."
            }
          ],
          "hint": "Están en la parte de 'atrás' de la pierna (pantorrilla)..."
        },
        {
          "question": "¿Qué es la inclinación lateral?",
          "options": [
            {
              "text": "Un movimiento de flexión o doblez hacia la derecha o hacia la izquierda de la columna vertebral o el cráneo",
              "isCorrect": true,
              "rationale": "La inclinación lateral indica un movimiento de flexión o doblez hacia la derecha o hacia la izquierda, de la columna vertebral o el cráneo."
            },
            {
              "text": "La rotación de la columna",
              "isCorrect": false,
              "rationale": "Es un doblez lateral."
            },
            {
              "text": "La extensión de la columna",
              "isCorrect": false,
              "rationale": "Es un doblez lateral."
            },
            {
              "text": "La flexión hacia adelante",
              "isCorrect": false,
              "rationale": "Es un doblez hacia los lados."
            }
          ],
          "hint": "Es 'inclinarse' hacia un lado u otro..."
        },
        {
          "question": "¿Qué es el deslizamiento como movimiento articular?",
          "options": [
            {
              "text": "Un movimiento de traslación con una superficie fija y otra moviéndose sin modificación angular",
              "isCorrect": true,
              "rationale": "El deslizamiento es un movimiento de traslación, con una de las superficies articulares fija y la otra moviéndose de adelante hacia atrás o de lado a lado, sin modificación angular."
            },
            {
              "text": "Un movimiento de rotación",
              "isCorrect": false,
              "rationale": "Es traslación sin rotación."
            },
            {
              "text": "Un movimiento angular",
              "isCorrect": false,
              "rationale": "Es sin modificación angular."
            },
            {
              "text": "Un movimiento de circunducción",
              "isCorrect": false,
              "rationale": "Es traslación simple."
            }
          ],
          "hint": "Es 'deslizar' una superficie sobre otra sin cambiar el ángulo..."
        }
      ]
    },
    {
      "id": 9,
      "nombre": "Movimientos Complejos",
      "preguntas": 29,
      "data": [
        {
          "question": "¿Qué es la circunducción como movimiento complejo?",
          "options": [
            {
              "text": "La asociación de movimientos simples que resulta de la sucesión de flexión, abducción, extensión y aducción",
              "isCorrect": true,
              "rationale": "La circunducción es la asociación de movimientos simples y resulta de la sucesión de los movimientos de flexión, abducción, extensión y aducción, por ejemplo."
            },
            {
              "text": "Un movimiento simple",
              "isCorrect": false,
              "rationale": "Es un movimiento complejo, asociación de varios."
            },
            {
              "text": "Solo rotación",
              "isCorrect": false,
              "rationale": "Es combinación de movimientos."
            },
            {
              "text": "Solo flexión y extensión",
              "isCorrect": false,
              "rationale": "Incluye varios movimientos."
            }
          ],
          "hint": "Es como 'dibujar un círculo' con el segmento..."
        },
        {
          "question": "¿Qué figura describe el segmento durante la circunducción?",
          "options": [
            {
              "text": "Una superficie aproximadamente cónica, con el extremo distal formando una figura circular",
              "isCorrect": true,
              "rationale": "El segmento en movimiento recorre una superficie aproximadamente cónica y su extremo distal forma una figura aproximadamente circular."
            },
            {
              "text": "Una línea recta",
              "isCorrect": false,
              "rationale": "Describe una superficie cónica."
            },
            {
              "text": "Un cuadrado",
              "isCorrect": false,
              "rationale": "Describe una superficie cónica."
            },
            {
              "text": "Una elipse perfecta",
              "isCorrect": false,
              "rationale": "Describe una superficie aproximadamente cónica."
            }
          ],
          "hint": "El extremo del segmento 'dibuja un círculo'..."
        },
        {
          "question": "¿En qué direcciones puede efectuarse la circunducción?",
          "options": [
            {
              "text": "Hacia delante o hacia atrás",
              "isCorrect": true,
              "rationale": "La circunducción puede efectuarse hacia delante o hacia atrás."
            },
            {
              "text": "Solo hacia delante",
              "isCorrect": false,
              "rationale": "Puede ser hacia adelante o atrás."
            },
            {
              "text": "Solo hacia atrás",
              "isCorrect": false,
              "rationale": "Puede ser en ambas direcciones."
            },
            {
              "text": "Solo hacia la derecha",
              "isCorrect": false,
              "rationale": "Puede ser hacia adelante o atrás."
            }
          ],
          "hint": "Puede hacerse en 'dos sentidos'..."
        },
        {
          "question": "¿Qué es la pronación como movimiento del antebrazo?",
          "options": [
            {
              "text": "Movimiento del antebrazo alrededor de su eje longitudinal donde la palma queda orientada hacia atrás",
              "isCorrect": true,
              "rationale": "La pronación es un movimiento del antebrazo alrededor de su eje longitudinal. Se produce la rotación del hueso radio, que termina con su epífisis distal ubicada medialmente al cúbito, de manera que la palma queda orientada hacia atrás."
            },
            {
              "text": "El movimiento donde la palma mira hacia adelante",
              "isCorrect": false,
              "rationale": "Eso es la supinación."
            },
            {
              "text": "La flexión del antebrazo",
              "isCorrect": false,
              "rationale": "Es rotación del antebrazo."
            },
            {
              "text": "La extensión del antebrazo",
              "isCorrect": false,
              "rationale": "Es rotación del antebrazo."
            }
          ],
          "hint": "Es cuando la palma mira 'hacia abajo' o 'hacia atrás'..."
        },
        {
          "question": "¿Qué ocurre con los huesos del antebrazo en la pronación máxima?",
          "options": [
            {
              "text": "Los ejes longitudinales del radio y cúbito se cruzan",
              "isCorrect": true,
              "rationale": "En la pronación máxima, los ejes longitudinales de los huesos del antebrazo se cruzan."
            },
            {
              "text": "Quedan paralelos",
              "isCorrect": false,
              "rationale": "Se cruzan."
            },
            {
              "text": "No cambian de posición",
              "isCorrect": false,
              "rationale": "El radio rota y se cruza con el cúbito."
            },
            {
              "text": "Se separan",
              "isCorrect": false,
              "rationale": "Se cruzan."
            }
          ],
          "hint": "El radio se 'cruza' sobre el cúbito..."
        },
        {
          "question": "¿Qué es la supinación como movimiento del antebrazo?",
          "options": [
            {
              "text": "Movimiento del antebrazo donde la palma queda orientada hacia delante",
              "isCorrect": true,
              "rationale": "La supinación es el movimiento del antebrazo alrededor de su eje longitudinal, produciendo la rotación del hueso radio, que termina con su epífisis distal ubicada lateralmente al cúbito, de manera que la palma queda orientada hacia delante."
            },
            {
              "text": "El movimiento donde la palma mira hacia atrás",
              "isCorrect": false,
              "rationale": "Eso es la pronación."
            },
            {
              "text": "La flexión del antebrazo",
              "isCorrect": false,
              "rationale": "Es rotación del antebrazo."
            },
            {
              "text": "La extensión del antebrazo",
              "isCorrect": false,
              "rationale": "Es rotación del antebrazo."
            }
          ],
          "hint": "Es cuando la palma mira 'hacia arriba' o 'hacia adelante'..."
        },
        {
          "question": "¿Qué ocurre con los huesos del antebrazo en la supinación máxima?",
          "options": [
            {
              "text": "Los ejes de los dos huesos del antebrazo son paralelos",
              "isCorrect": true,
              "rationale": "En la supinación máxima, los ejes de los dos huesos del antebrazo son paralelos."
            },
            {
              "text": "Se cruzan",
              "isCorrect": false,
              "rationale": "Quedan paralelos."
            },
            {
              "text": "Se separan",
              "isCorrect": false,
              "rationale": "Quedan paralelos."
            },
            {
              "text": "El radio rota sobre el cúbito",
              "isCorrect": false,
              "rationale": "Quedan paralelos."
            }
          ],
          "hint": "Ambos huesos quedan 'alineados'..."
        },
        {
          "question": "¿Qué es la pronación del pie?",
          "options": [
            {
              "text": "Movimiento de torsión del antepié con elevación del borde lateral del pie",
              "isCorrect": true,
              "rationale": "La pronación del pie es el movimiento de torsión del antepié, con la elevación del borde lateral del pie."
            },
            {
              "text": "Elevación del borde medial",
              "isCorrect": false,
              "rationale": "Eso es la supinación del pie."
            },
            {
              "text": "Flexión del tobillo",
              "isCorrect": false,
              "rationale": "Es torsión del antepié."
            },
            {
              "text": "Extensión del tobillo",
              "isCorrect": false,
              "rationale": "Es torsión del antepié."
            }
          ],
          "hint": "Se levanta el borde 'de afuera' del pie..."
        },
        {
          "question": "¿Qué es la supinación del pie?",
          "options": [
            {
              "text": "Movimiento de detorsión del antepié con elevación del borde medial del pie",
              "isCorrect": true,
              "rationale": "La supinación del pie es el movimiento de detorsión del antepié, con la elevación del borde medial del pie."
            },
            {
              "text": "Elevación del borde lateral",
              "isCorrect": false,
              "rationale": "Eso es la pronación del pie."
            },
            {
              "text": "Flexión del tobillo",
              "isCorrect": false,
              "rationale": "Es torsión del antepié."
            },
            {
              "text": "Extensión del tobillo",
              "isCorrect": false,
              "rationale": "Es torsión del antepié."
            }
          ],
          "hint": "Se levanta el borde 'de adentro' del pie..."
        },
        {
          "question": "¿Qué es la eversión del pie?",
          "options": [
            {
              "text": "Movimiento que asocia abducción y rotación medial del pie, la planta se orienta hacia lateral",
              "isCorrect": true,
              "rationale": "La eversión es un movimiento que asocia la abducción y la rotación medial del pie. Se produce por la rotación del hueso calcáneo alrededor de su eje longitudinal. La planta del pie se orienta hacia lateral."
            },
            {
              "text": "Movimiento donde la planta mira hacia medial",
              "isCorrect": false,
              "rationale": "Eso es la inversión."
            },
            {
              "text": "Solo rotación del calcáneo",
              "isCorrect": false,
              "rationale": "Asocia abducción y rotación medial."
            },
            {
              "text": "Flexión plantar",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            }
          ],
          "hint": "La planta del pie mira 'hacia afuera'..."
        },
        {
          "question": "¿Qué hueso rota durante la eversión del pie?",
          "options": [
            {
              "text": "El hueso calcáneo alrededor de su eje longitudinal",
              "isCorrect": true,
              "rationale": "La eversión se produce por la rotación del hueso calcáneo alrededor de su eje longitudinal."
            },
            {
              "text": "El astrágalo",
              "isCorrect": false,
              "rationale": "Es el calcáneo."
            },
            {
              "text": "El escafoides",
              "isCorrect": false,
              "rationale": "Es el calcáneo."
            },
            {
              "text": "El primer metatarsiano",
              "isCorrect": false,
              "rationale": "Es el calcáneo."
            }
          ],
          "hint": "Es el hueso del 'talón'..."
        },
        {
          "question": "¿Qué es la inversión del pie?",
          "options": [
            {
              "text": "Movimiento que asocia aducción y rotación lateral del pie, la planta se orienta hacia medial",
              "isCorrect": true,
              "rationale": "La inversión es el movimiento que asocia la aducción y la rotación lateral del pie. Se produce el movimiento de rotación longitudinal del calcáneo. La planta del pie se orienta hacia medial."
            },
            {
              "text": "Movimiento donde la planta mira hacia lateral",
              "isCorrect": false,
              "rationale": "Eso es la eversión."
            },
            {
              "text": "Solo rotación del calcáneo",
              "isCorrect": false,
              "rationale": "Asocia aducción y rotación lateral."
            },
            {
              "text": "Flexión dorsal",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            }
          ],
          "hint": "La planta del pie mira 'hacia adentro'..."
        },
        {
          "question": "¿Qué relación hay entre inversión y eversión?",
          "options": [
            {
              "text": "La inversión es el movimiento opuesto a la eversión",
              "isCorrect": true,
              "rationale": "La inversión se trata del movimiento opuesto a la eversión."
            },
            {
              "text": "Son el mismo movimiento",
              "isCorrect": false,
              "rationale": "Son opuestos."
            },
            {
              "text": "No tienen relación",
              "isCorrect": false,
              "rationale": "Son opuestos."
            },
            {
              "text": "La inversión es más amplia",
              "isCorrect": false,
              "rationale": "Son opuestos."
            }
          ],
          "hint": "Van en 'direcciones contrarias'..."
        },
        {
          "question": "¿Qué es la oposición como movimiento del pulgar?",
          "options": [
            {
              "text": "El movimiento por el cual se aproximan el pulpejo del pulgar con el pulpejo de cualquier otro dedo",
              "isCorrect": true,
              "rationale": "La oposición es el movimiento por el cual se aproximan el pulpejo del pulgar con el pulpejo de cualquier otro dedo de la mano."
            },
            {
              "text": "Separar el pulgar de los otros dedos",
              "isCorrect": false,
              "rationale": "Es acercar el pulgar a otros dedos."
            },
            {
              "text": "Flexionar el pulgar",
              "isCorrect": false,
              "rationale": "Es el contacto del pulgar con otros dedos."
            },
            {
              "text": "Extender el pulgar",
              "isCorrect": false,
              "rationale": "Es el contacto del pulgar con otros dedos."
            }
          ],
          "hint": "Es lo que permite 'agarrar objetos' con precisión..."
        },
        {
          "question": "¿Qué es la reposición como movimiento del pulgar?",
          "options": [
            {
              "text": "El movimiento que realiza el pulgar desde la posición de oposición hasta la posición anatómica",
              "isCorrect": true,
              "rationale": "La reposición se trata del movimiento que realiza el pulgar desde la posición de oposición, hasta la posición anatómica."
            },
            {
              "text": "El movimiento hacia la oposición",
              "isCorrect": false,
              "rationale": "Es el movimiento desde la oposición."
            },
            {
              "text": "La flexión del pulgar",
              "isCorrect": false,
              "rationale": "Es volver a la posición anatómica."
            },
            {
              "text": "La abducción del pulgar",
              "isCorrect": false,
              "rationale": "Es volver a la posición anatómica."
            }
          ],
          "hint": "Es el movimiento 'inverso' a la oposición..."
        },
        {
          "question": "¿Qué es la antepulsión como movimiento?",
          "options": [
            {
              "text": "El movimiento de desplazamiento de un segmento hacia delante",
              "isCorrect": true,
              "rationale": "La antepulsión es el movimiento de desplazamiento de un segmento del cuerpo hacia delante."
            },
            {
              "text": "El movimiento hacia atrás",
              "isCorrect": false,
              "rationale": "Eso es la retropulsión."
            },
            {
              "text": "El movimiento hacia arriba",
              "isCorrect": false,
              "rationale": "Eso es la elevación."
            },
            {
              "text": "El movimiento hacia abajo",
              "isCorrect": false,
              "rationale": "Eso es el descenso."
            }
          ],
          "hint": "Es mover 'hacia adelante'..."
        },
        {
          "question": "¿Qué otro nombre recibe la antepulsión en el caso del hombro?",
          "options": [
            {
              "text": "Protracción",
              "isCorrect": true,
              "rationale": "La antepulsión también se lo denomina protracción en el caso del hombro."
            },
            {
              "text": "Retracción",
              "isCorrect": false,
              "rationale": "Eso es la retropulsión."
            },
            {
              "text": "Elevación",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            },
            {
              "text": "Depresión",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            }
          ],
          "hint": "Es cuando 'sacás el hombro hacia adelante'..."
        },
        {
          "question": "¿Qué es la retropulsión como movimiento?",
          "options": [
            {
              "text": "El movimiento de desplazamiento de un segmento hacia atrás",
              "isCorrect": true,
              "rationale": "La retropulsión es el movimiento de desplazamiento de un segmento hacia atrás."
            },
            {
              "text": "El movimiento hacia delante",
              "isCorrect": false,
              "rationale": "Eso es la antepulsión."
            },
            {
              "text": "El movimiento hacia arriba",
              "isCorrect": false,
              "rationale": "Eso es la elevación."
            },
            {
              "text": "El movimiento hacia abajo",
              "isCorrect": false,
              "rationale": "Eso es el descenso."
            }
          ],
          "hint": "Es mover 'hacia atrás'..."
        },
        {
          "question": "¿Qué otro nombre recibe la retropulsión en el caso del hombro?",
          "options": [
            {
              "text": "Retracción",
              "isCorrect": true,
              "rationale": "La retropulsión también se lo denomina retracción en el caso del hombro."
            },
            {
              "text": "Protracción",
              "isCorrect": false,
              "rationale": "Eso es la antepulsión."
            },
            {
              "text": "Elevación",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            },
            {
              "text": "Depresión",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            }
          ],
          "hint": "Es cuando 'llevás el hombro hacia atrás'..."
        },
        {
          "question": "¿Qué es la nutación como movimiento del sacro?",
          "options": [
            {
              "text": "Movimiento de balanceo del sacro donde el promontorio se dirige hacia abajo y el vértice hacia arriba y atrás",
              "isCorrect": true,
              "rationale": "La nutación se trata del movimiento de balanceo (o de báscula) del hueso sacro alrededor de un eje transversal que atraviesa las tuberosidades sacras, donde el promontorio de la base de este hueso se dirige hacia abajo y su vértice hacia arriba y atrás."
            },
            {
              "text": "El movimiento inverso",
              "isCorrect": false,
              "rationale": "Eso es la contranutación."
            },
            {
              "text": "Rotación del sacro",
              "isCorrect": false,
              "rationale": "Es balanceo."
            },
            {
              "text": "Flexión lateral del sacro",
              "isCorrect": false,
              "rationale": "Es balanceo anteroposterior."
            }
          ],
          "hint": "El sacro se 'inclina hacia adelante' en su parte superior..."
        },
        {
          "question": "¿Qué produce la nutación del sacro en el pubis?",
          "options": [
            {
              "text": "Movimiento hacia adelante del pubis (antepulsión del pubis)",
              "isCorrect": true,
              "rationale": "El resultado de la nutación produce el movimiento hacia adelante del pubis (antepulsión del pubis)."
            },
            {
              "text": "Movimiento hacia atrás del pubis",
              "isCorrect": false,
              "rationale": "Eso es la contranutación."
            },
            {
              "text": "No afecta el pubis",
              "isCorrect": false,
              "rationale": "Sí afecta el pubis."
            },
            {
              "text": "Rotación del pubis",
              "isCorrect": false,
              "rationale": "Es antepulsión."
            }
          ],
          "hint": "El pubis se mueve 'hacia adelante'..."
        },
        {
          "question": "¿Qué es la contranutación como movimiento del sacro?",
          "options": [
            {
              "text": "Movimiento de balanceo del sacro donde la base se dirige hacia arriba y el vértice hacia abajo y delante",
              "isCorrect": true,
              "rationale": "La contranutación es el movimiento de balanceo del sacro, por el cual la base de este hueso se dirige hacia arriba y su vértice hacia abajo y delante."
            },
            {
              "text": "El mismo movimiento que la nutación",
              "isCorrect": false,
              "rationale": "Es el movimiento opuesto."
            },
            {
              "text": "Rotación del sacro",
              "isCorrect": false,
              "rationale": "Es balanceo."
            },
            {
              "text": "Flexión lateral del sacro",
              "isCorrect": false,
              "rationale": "Es balanceo anteroposterior."
            }
          ],
          "hint": "El sacro se 'inclina hacia atrás' en su parte superior..."
        },
        {
          "question": "¿Qué produce la contranutación en el pubis?",
          "options": [
            {
              "text": "Movimiento hacia atrás del pubis (retropulsión del pubis)",
              "isCorrect": true,
              "rationale": "La contranutación produce el movimiento hacia atrás del pubis (retropulsión del pubis)."
            },
            {
              "text": "Movimiento hacia adelante del pubis",
              "isCorrect": false,
              "rationale": "Eso es la nutación."
            },
            {
              "text": "No afecta el pubis",
              "isCorrect": false,
              "rationale": "Sí afecta el pubis."
            },
            {
              "text": "Rotación del pubis",
              "isCorrect": false,
              "rationale": "Es retropulsión."
            }
          ],
          "hint": "El pubis se mueve 'hacia atrás'..."
        },
        {
          "question": "¿Qué es la elevación como movimiento?",
          "options": [
            {
              "text": "El movimiento que desplaza un segmento del cuerpo hacia arriba",
              "isCorrect": true,
              "rationale": "La elevación se trata del movimiento que desplaza un segmento del cuerpo hacia arriba."
            },
            {
              "text": "El movimiento hacia abajo",
              "isCorrect": false,
              "rationale": "Eso es el descenso."
            },
            {
              "text": "El movimiento hacia adelante",
              "isCorrect": false,
              "rationale": "Eso es la antepulsión."
            },
            {
              "text": "El movimiento hacia atrás",
              "isCorrect": false,
              "rationale": "Eso es la retropulsión."
            }
          ],
          "hint": "Es mover 'hacia arriba'..."
        },
        {
          "question": "¿Qué es el descenso como movimiento?",
          "options": [
            {
              "text": "El movimiento que desplaza un segmento hacia abajo",
              "isCorrect": true,
              "rationale": "El descenso es el movimiento que desplaza un segmento hacia abajo. También se lo denomina depresión."
            },
            {
              "text": "El movimiento hacia arriba",
              "isCorrect": false,
              "rationale": "Eso es la elevación."
            },
            {
              "text": "El movimiento hacia adelante",
              "isCorrect": false,
              "rationale": "Eso es la antepulsión."
            },
            {
              "text": "El movimiento hacia atrás",
              "isCorrect": false,
              "rationale": "Eso es la retropulsión."
            }
          ],
          "hint": "Es mover 'hacia abajo'..."
        },
        {
          "question": "¿Qué otro nombre recibe el descenso?",
          "options": [
            {
              "text": "Depresión",
              "isCorrect": true,
              "rationale": "El descenso también se lo denomina depresión."
            },
            {
              "text": "Elevación",
              "isCorrect": false,
              "rationale": "Es el opuesto."
            },
            {
              "text": "Retracción",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            },
            {
              "text": "Protracción",
              "isCorrect": false,
              "rationale": "Es otro movimiento."
            }
          ],
          "hint": "Sinónimo de 'bajar'..."
        },
        {
          "question": "¿Qué es la protrusión como movimiento de la mandíbula?",
          "options": [
            {
              "text": "El movimiento hacia adelante realizado por la mandíbula",
              "isCorrect": true,
              "rationale": "La protrusión es el movimiento hacia adelante, realizado por la mandíbula."
            },
            {
              "text": "El movimiento hacia atrás de la mandíbula",
              "isCorrect": false,
              "rationale": "Eso es la retrusión."
            },
            {
              "text": "El movimiento lateral de la mandíbula",
              "isCorrect": false,
              "rationale": "Eso es la diducción."
            },
            {
              "text": "La apertura de la boca",
              "isCorrect": false,
              "rationale": "Es el movimiento hacia adelante."
            }
          ],
          "hint": "Es 'sacar la mandíbula hacia adelante'..."
        },
        {
          "question": "¿Qué es la retrusión como movimiento de la mandíbula?",
          "options": [
            {
              "text": "El movimiento hacia atrás realizado por la mandíbula",
              "isCorrect": true,
              "rationale": "La retrusión es el movimiento hacia atrás, realizado por la mandíbula."
            },
            {
              "text": "El movimiento hacia adelante de la mandíbula",
              "isCorrect": false,
              "rationale": "Eso es la protrusión."
            },
            {
              "text": "El movimiento lateral de la mandíbula",
              "isCorrect": false,
              "rationale": "Eso es la diducción."
            },
            {
              "text": "El cierre de la boca",
              "isCorrect": false,
              "rationale": "Es el movimiento hacia atrás."
            }
          ],
          "hint": "Es 'llevar la mandíbula hacia atrás'..."
        },
        {
          "question": "¿Qué es la diducción como movimiento de la mandíbula?",
          "options": [
            {
              "text": "Los movimientos de lado a lado de la mandíbula (excursión lateral)",
              "isCorrect": true,
              "rationale": "La diducción son los movimientos de lado a lado de la mandíbula (excursión lateral de la mandíbula)."
            },
            {
              "text": "El movimiento hacia adelante",
              "isCorrect": false,
              "rationale": "Eso es la protrusión."
            },
            {
              "text": "El movimiento hacia atrás",
              "isCorrect": false,
              "rationale": "Eso es la retrusión."
            },
            {
              "text": "La apertura de la boca",
              "isCorrect": false,
              "rationale": "Es el movimiento lateral."
            }
          ],
          "hint": "Es mover la mandíbula 'de un lado al otro'..."
        }
      ]
    },
    {
      "id": 10,
      "nombre": "Lesiones Articulares",
      "preguntas": 33,
      "data": [
        {
          "question": "¿Qué es una luxación?",
          "options": [
            {
              "text": "La pérdida de las relaciones anatómicas de las superficies articulares enfrentadas",
              "isCorrect": true,
              "rationale": "Recibe el nombre de luxación la pérdida de las relaciones anatómicas de las superficies articulares enfrentadas."
            },
            {
              "text": "La inflamación de la articulación",
              "isCorrect": false,
              "rationale": "Eso es la artritis."
            },
            {
              "text": "El desgarro de ligamentos",
              "isCorrect": false,
              "rationale": "Eso es el esguince."
            },
            {
              "text": "La fractura del hueso",
              "isCorrect": false,
              "rationale": "Es la pérdida de relaciones articulares."
            }
          ],
          "hint": "Es cuando los huesos se 'salen de lugar'..."
        },
        {
          "question": "¿Qué es una subluxación?",
          "options": [
            {
              "text": "Cuando la pérdida de la relación entre superficies articulares no es completa",
              "isCorrect": true,
              "rationale": "Si la pérdida de la relación no es completa recibe el nombre de subluxación."
            },
            {
              "text": "Una luxación completa",
              "isCorrect": false,
              "rationale": "Es incompleta."
            },
            {
              "text": "Una fractura",
              "isCorrect": false,
              "rationale": "Es una luxación parcial."
            },
            {
              "text": "Un esguince",
              "isCorrect": false,
              "rationale": "Es una luxación parcial."
            }
          ],
          "hint": "Es una luxación 'parcial'..."
        },
        {
          "question": "¿Qué se requiere para que una luxación sea posible?",
          "options": [
            {
              "text": "Un daño importante del aparato capsuloligamentario",
              "isCorrect": true,
              "rationale": "Para que una luxación sea posible se requiere un daño importante del aparato capsuloligamentario."
            },
            {
              "text": "Solo un pequeño golpe",
              "isCorrect": false,
              "rationale": "Requiere daño capsuloligamentario importante."
            },
            {
              "text": "Una fractura previa",
              "isCorrect": false,
              "rationale": "Requiere daño capsuloligamentario."
            },
            {
              "text": "Una enfermedad articular",
              "isCorrect": false,
              "rationale": "Requiere daño capsuloligamentario."
            }
          ],
          "hint": "Tiene que haber 'rotura' de la cápsula y ligamentos..."
        },
        {
          "question": "¿Cuándo debe efectuarse la reducción de una luxación?",
          "options": [
            {
              "text": "Lo más temprano posible",
              "isCorrect": true,
              "rationale": "En términos generales la reducción debe efectuarse lo más temprano posible."
            },
            {
              "text": "Después de varias semanas",
              "isCorrect": false,
              "rationale": "Debe ser lo más temprano posible."
            },
            {
              "text": "Solo después de reducir la inflamación",
              "isCorrect": false,
              "rationale": "Debe ser temprano."
            },
            {
              "text": "No es urgente",
              "isCorrect": false,
              "rationale": "Debe ser lo más temprano posible."
            }
          ],
          "hint": "Es una 'urgencia'..."
        },
        {
          "question": "¿Cómo debe ser el camino que recorre el extremo luxado durante la reducción?",
          "options": [
            {
              "text": "El mismo camino que recorrió para luxarse, pero en sentido inverso",
              "isCorrect": true,
              "rationale": "Se debe tratar de que el extremo luxado recorra el mismo camino que tuvo que recorrer para luxarse, pero en sentido inverso."
            },
            {
              "text": "Cualquier camino",
              "isCorrect": false,
              "rationale": "Debe ser el mismo en sentido inverso."
            },
            {
              "text": "El camino más corto",
              "isCorrect": false,
              "rationale": "Debe ser el mismo en sentido inverso."
            },
            {
              "text": "El camino más cómodo",
              "isCorrect": false,
              "rationale": "Debe ser el mismo en sentido inverso."
            }
          ],
          "hint": "Hay que 'desandar' el camino de la lesión..."
        },
        {
          "question": "¿Qué complicaciones agudas pueden tener las luxaciones?",
          "options": [
            {
              "text": "Compresión de estructuras vasculares o nerviosas vecinas",
              "isCorrect": true,
              "rationale": "Las complicaciones agudas de una luxación suelen deberse a compresión de estructuras vasculares o nerviosas vecinas."
            },
            {
              "text": "Solo dolor",
              "isCorrect": false,
              "rationale": "Puede haber compresión vascular o nerviosa."
            },
            {
              "text": "Solo inflamación",
              "isCorrect": false,
              "rationale": "Puede haber compresión vascular o nerviosa."
            },
            {
              "text": "No hay complicaciones agudas",
              "isCorrect": false,
              "rationale": "Puede haber compresión de estructuras."
            }
          ],
          "hint": "Pueden afectarse 'vasos y nervios' cercanos..."
        },
        {
          "question": "¿Qué es un esguince?",
          "options": [
            {
              "text": "Lesiones provocadas por la distensión del aparato capsuloligamentario que rodea una articulación",
              "isCorrect": true,
              "rationale": "Los esguinces son lesiones provocadas por la distensión del aparato capsuloligamentario que rodea a una articulación."
            },
            {
              "text": "La pérdida de relación entre superficies articulares",
              "isCorrect": false,
              "rationale": "Eso es la luxación."
            },
            {
              "text": "La inflamación de la articulación",
              "isCorrect": false,
              "rationale": "Eso es la artritis."
            },
            {
              "text": "La fractura del hueso",
              "isCorrect": false,
              "rationale": "Es lesión de ligamentos."
            }
          ],
          "hint": "Es cuando se 'estiran o rompen' los ligamentos..."
        },
        {
          "question": "¿Qué limita la amplitud de movimientos de una articulación?",
          "options": [
            {
              "text": "La tensión de ligamentos y otros tejidos blandos periarticulares",
              "isCorrect": true,
              "rationale": "Las articulaciones tienen una amplitud de movimientos limitados por la tensión de ligamentos y otros tejidos blandos periarticulares."
            },
            {
              "text": "Solo el tamaño del hueso",
              "isCorrect": false,
              "rationale": "Son los ligamentos y tejidos blandos."
            },
            {
              "text": "Solo el cartílago",
              "isCorrect": false,
              "rationale": "Son los ligamentos y tejidos blandos."
            },
            {
              "text": "El líquido sinovial",
              "isCorrect": false,
              "rationale": "Son los ligamentos y tejidos blandos."
            }
          ],
          "hint": "Los 'ligamentos' frenan el movimiento..."
        },
        {
          "question": "¿Qué ocurre cuando la fuerza sobre una articulación supera la resistencia de las estructuras?",
          "options": [
            {
              "text": "Se produce distensión, desgarro o ruptura de las estructuras",
              "isCorrect": true,
              "rationale": "Cuando la fuerza ejercida sobre una determinada articulación supera la resistencia de dichas estructuras, se produce su distensión, desgarro o ruptura."
            },
            {
              "text": "Nada",
              "isCorrect": false,
              "rationale": "Se lesionan las estructuras."
            },
            {
              "text": "Solo dolor",
              "isCorrect": false,
              "rationale": "Hay lesión estructural."
            },
            {
              "text": "La articulación se hace más móvil",
              "isCorrect": false,
              "rationale": "Se lesionan las estructuras."
            }
          ],
          "hint": "Hay 'lesión' de los tejidos..."
        },
        {
          "question": "¿Pueden acompañarse los esguinces de lesiones óseas?",
          "options": [
            {
              "text": "Sí, pueden acompañarse de lesiones óseas",
              "isCorrect": true,
              "rationale": "Los esguinces pueden acompañarse de lesiones óseas."
            },
            {
              "text": "No, nunca",
              "isCorrect": false,
              "rationale": "Sí pueden acompañarse de lesiones óseas."
            },
            {
              "text": "Solo en ancianos",
              "isCorrect": false,
              "rationale": "Pueden acompañarse de lesiones óseas."
            },
            {
              "text": "Solo en niños",
              "isCorrect": false,
              "rationale": "Pueden acompañarse de lesiones óseas."
            }
          ],
          "hint": "Pueden asociarse con 'fracturas'..."
        },
        {
          "question": "¿Qué es un esguince grado I?",
          "options": [
            {
              "text": "Ruptura intraligamentosa de fibras, con dolor selectivo, incapacidad y tumefacción mínimas, sin inestabilidad",
              "isCorrect": true,
              "rationale": "El esguince grado I es una ruptura intraligamentosa de fibras que cursa con dolor selectivo en la zona de lesión, incapacidad y tumefacción mínimas y ausencia de inestabilidad."
            },
            {
              "text": "Ruptura completa del ligamento",
              "isCorrect": false,
              "rationale": "Eso es el grado III."
            },
            {
              "text": "Ruptura parcial moderada",
              "isCorrect": false,
              "rationale": "Eso es el grado II."
            },
            {
              "text": "Sin lesión ligamentaria",
              "isCorrect": false,
              "rationale": "Hay ruptura de fibras."
            }
          ],
          "hint": "Es el más 'leve'..."
        },
        {
          "question": "¿Qué es un esguince grado II?",
          "options": [
            {
              "text": "Lesión intermedia entre el grado I y el grado III",
              "isCorrect": true,
              "rationale": "El grado II es intermedio entre el grado I y el grado III."
            },
            {
              "text": "El más leve",
              "isCorrect": false,
              "rationale": "Es intermedio."
            },
            {
              "text": "Ruptura completa",
              "isCorrect": false,
              "rationale": "Eso es el grado III."
            },
            {
              "text": "Sin lesión",
              "isCorrect": false,
              "rationale": "Hay lesión parcial."
            }
          ],
          "hint": "Es de 'gravedad media'..."
        },
        {
          "question": "¿Qué es un esguince grado III?",
          "options": [
            {
              "text": "Lesión ligamentosa completa con dolor intenso, tumefacción, incapacidad marcada e inestabilidad franca",
              "isCorrect": true,
              "rationale": "El grado III es una lesión ligamentosa completa con dolor intenso, tumefacción e incapacidad marcadas e inestabilidad franca."
            },
            {
              "text": "El más leve",
              "isCorrect": false,
              "rationale": "Es el más grave."
            },
            {
              "text": "Lesión parcial",
              "isCorrect": false,
              "rationale": "Es ruptura completa."
            },
            {
              "text": "Sin inestabilidad",
              "isCorrect": false,
              "rationale": "Hay inestabilidad franca."
            }
          ],
          "hint": "Es el más 'grave', ruptura completa..."
        },
        {
          "question": "¿Qué zona es más afectada por los esguinces?",
          "options": [
            {
              "text": "El tobillo, seguido del carpo, la rodilla y el hombro",
              "isCorrect": true,
              "rationale": "La zona más afectada por los esguinces es el tobillo, al que le siguen el carpo, la rodilla y el hombro."
            },
            {
              "text": "Solo el hombro",
              "isCorrect": false,
              "rationale": "El tobillo es el más afectado."
            },
            {
              "text": "Solo la rodilla",
              "isCorrect": false,
              "rationale": "El tobillo es el más afectado."
            },
            {
              "text": "La columna vertebral",
              "isCorrect": false,
              "rationale": "El tobillo es el más afectado."
            }
          ],
          "hint": "Es el 'tobillo' el más frecuente..."
        },
        {
          "question": "¿Qué es la artrosis?",
          "options": [
            {
              "text": "La enfermedad articular degenerativa que sufre el cartílago articular",
              "isCorrect": true,
              "rationale": "La artrosis es la enfermedad articular degenerativa que sufre el cartílago articular."
            },
            {
              "text": "La inflamación de la articulación",
              "isCorrect": false,
              "rationale": "Eso es la artritis."
            },
            {
              "text": "La infección de la articulación",
              "isCorrect": false,
              "rationale": "Es degeneración del cartílago."
            },
            {
              "text": "La luxación de la articulación",
              "isCorrect": false,
              "rationale": "Es degeneración del cartílago."
            }
          ],
          "hint": "Es 'desgaste' del cartílago..."
        },
        {
          "question": "¿Cómo puede presentarse la artrosis?",
          "options": [
            {
              "text": "En forma primaria o secundaria a alteraciones patológicas preexistentes",
              "isCorrect": true,
              "rationale": "La artrosis se presenta en forma primaria o secundaria a alteraciones patológicas preexistentes (por ejemplo: luxación congénita de la cadera)."
            },
            {
              "text": "Solo primaria",
              "isCorrect": false,
              "rationale": "Puede ser primaria o secundaria."
            },
            {
              "text": "Solo secundaria",
              "isCorrect": false,
              "rationale": "Puede ser primaria o secundaria."
            },
            {
              "text": "Solo congénita",
              "isCorrect": false,
              "rationale": "Puede ser primaria o secundaria."
            }
          ],
          "hint": "Puede aparecer 'sola' o por otra enfermedad previa..."
        },
        {
          "question": "¿Qué articulaciones afecta predominantemente la artrosis?",
          "options": [
            {
              "text": "Las articulaciones que soportan peso, como la coxofemoral y la rodilla",
              "isCorrect": true,
              "rationale": "La artrosis afecta predominantemente las articulaciones que soportan peso, tales como la coxofemoral y la rodilla."
            },
            {
              "text": "Las articulaciones de la mano",
              "isCorrect": false,
              "rationale": "Predominan las que soportan peso."
            },
            {
              "text": "Las articulaciones del cuello",
              "isCorrect": false,
              "rationale": "Predominan las que soportan peso."
            },
            {
              "text": "Todas por igual",
              "isCorrect": false,
              "rationale": "Predominan las que soportan peso."
            }
          ],
          "hint": "Afecta más las que 'cargan peso'..."
        },
        {
          "question": "¿Qué personas son más afectadas por la artrosis?",
          "options": [
            {
              "text": "Adultos, generalmente de entre 40 y 60 años",
              "isCorrect": true,
              "rationale": "Las personas más afectadas son adultos, generalmente de entre 40 y 60 años."
            },
            {
              "text": "Niños",
              "isCorrect": false,
              "rationale": "Afecta a adultos."
            },
            {
              "text": "Adolescentes",
              "isCorrect": false,
              "rationale": "Afecta a adultos."
            },
            {
              "text": "Solo ancianos mayores de 80",
              "isCorrect": false,
              "rationale": "Generalmente entre 40 y 60 años."
            }
          ],
          "hint": "Es enfermedad de 'adultos'..."
        },
        {
          "question": "¿Cómo se manifiesta clínicamente la artrosis?",
          "options": [
            {
              "text": "Dolor y disminución de la movilidad, dolor durante la marcha, inestabilidad articular y alteraciones del apoyo",
              "isCorrect": true,
              "rationale": "La artrosis se manifiesta clínicamente por dolor y disminución de la movilidad, con dolor durante la marcha, inestabilidad articular y alteraciones del apoyo."
            },
            {
              "text": "Solo inflamación",
              "isCorrect": false,
              "rationale": "Hay dolor y rigidez."
            },
            {
              "text": "Solo dolor en reposo",
              "isCorrect": false,
              "rationale": "Hay dolor con el movimiento."
            },
            {
              "text": "Sin síntomas",
              "isCorrect": false,
              "rationale": "Hay síntomas claros."
            }
          ],
          "hint": "Dolor, rigidez y problemas para caminar..."
        },
        {
          "question": "¿Hacia qué puede evolucionar la artrosis sin tratamiento?",
          "options": [
            {
              "text": "Hacia la anquilosis articular",
              "isCorrect": true,
              "rationale": "La artrosis puede evolucionar hacia la anquilosis articular si no se aplica el tratamiento adecuado."
            },
            {
              "text": "Mejora espontáneamente",
              "isCorrect": false,
              "rationale": "Puede empeorar hacia anquilosis."
            },
            {
              "text": "No evoluciona",
              "isCorrect": false,
              "rationale": "Puede empeorar."
            },
            {
              "text": "Hacia mayor movilidad",
              "isCorrect": false,
              "rationale": "Hacia rigidez (anquilosis)."
            }
          ],
          "hint": "Puede llegar a 'fusionar' la articulación..."
        },
        {
          "question": "¿Qué es la artritis?",
          "options": [
            {
              "text": "La inflamación de una o más articulaciones",
              "isCorrect": true,
              "rationale": "La artritis es la inflamación de una o más articulaciones que se manifiesta clínicamente con dolor, tumefacción, rigidez y limitación del movimiento."
            },
            {
              "text": "La degeneración del cartílago",
              "isCorrect": false,
              "rationale": "Eso es la artrosis."
            },
            {
              "text": "La luxación de la articulación",
              "isCorrect": false,
              "rationale": "Es inflamación."
            },
            {
              "text": "El esguince",
              "isCorrect": false,
              "rationale": "Es inflamación."
            }
          ],
          "hint": "Es 'inflamación' de la articulación..."
        },
        {
          "question": "¿Cómo se manifiesta clínicamente la artritis?",
          "options": [
            {
              "text": "Dolor, tumefacción, rigidez y limitación del movimiento de la articulación",
              "isCorrect": true,
              "rationale": "La artritis se manifiesta clínicamente con dolor, tumefacción, rigidez y limitación del movimiento de la articulación comprometida."
            },
            {
              "text": "Solo dolor",
              "isCorrect": false,
              "rationale": "Hay más síntomas."
            },
            {
              "text": "Solo rigidez",
              "isCorrect": false,
              "rationale": "Hay más síntomas."
            },
            {
              "text": "Sin síntomas",
              "isCorrect": false,
              "rationale": "Hay síntomas claros."
            }
          ],
          "hint": "Dolor, hinchazón y rigidez..."
        },
        {
          "question": "¿Qué involucra la artritis a nivel del cartílago?",
          "options": [
            {
              "text": "Involucra la degradación del cartílago articular",
              "isCorrect": true,
              "rationale": "La artritis involucra la degradación del cartílago articular."
            },
            {
              "text": "No afecta el cartílago",
              "isCorrect": false,
              "rationale": "Sí lo degrada."
            },
            {
              "text": "Regenera el cartílago",
              "isCorrect": false,
              "rationale": "Lo degrada."
            },
            {
              "text": "No tiene relación con el cartílago",
              "isCorrect": false,
              "rationale": "Lo degrada."
            }
          ],
          "hint": "Daña el 'cartílago'..."
        },
        {
          "question": "¿Qué puede causar la artritis?",
          "options": [
            {
              "text": "Origen autoinmune, fracturas, desgaste, procesos infecciosos o precipitación de cristales",
              "isCorrect": true,
              "rationale": "Las causas de artritis pueden ser de origen autoinmune, por fracturas óseas, por desgaste, por procesos infecciosos o por precipitación de cristales (por ejemplo: gota)."
            },
            {
              "text": "Solo infecciones",
              "isCorrect": false,
              "rationale": "Hay múltiples causas."
            },
            {
              "text": "Solo traumatismos",
              "isCorrect": false,
              "rationale": "Hay múltiples causas."
            },
            {
              "text": "Solo gota",
              "isCorrect": false,
              "rationale": "Hay múltiples causas."
            }
          ],
          "hint": "Hay muchas 'causas posibles'..."
        },
        {
          "question": "¿Dónde se presenta con mayor frecuencia la artritis?",
          "options": [
            {
              "text": "Cadera, rodillas y dedos de la mano",
              "isCorrect": true,
              "rationale": "La artritis se presenta con mayor frecuencia a nivel de la cadera, las rodillas y los dedos de la mano."
            },
            {
              "text": "Solo en el hombro",
              "isCorrect": false,
              "rationale": "Cadera, rodillas y manos son más frecuentes."
            },
            {
              "text": "Solo en la columna",
              "isCorrect": false,
              "rationale": "Cadera, rodillas y manos son más frecuentes."
            },
            {
              "text": "En todas las articulaciones por igual",
              "isCorrect": false,
              "rationale": "Hay zonas más afectadas."
            }
          ],
          "hint": "Cadera, rodillas y manos..."
        },
        {
          "question": "¿Qué es la bursitis?",
          "options": [
            {
              "text": "La inflamación de las bolsas que se encuentran entre tendones y piel o entre tendones y hueso",
              "isCorrect": true,
              "rationale": "La bursitis es la inflamación de las bolsas que se encuentran entre los tendones y la piel o entre los tendones y el hueso."
            },
            {
              "text": "Inflamación de la articulación",
              "isCorrect": false,
              "rationale": "Es inflamación de las bolsas sinoviales."
            },
            {
              "text": "Inflamación del tendón",
              "isCorrect": false,
              "rationale": "Es inflamación de las bolsas."
            },
            {
              "text": "Inflamación del músculo",
              "isCorrect": false,
              "rationale": "Es inflamación de las bolsas."
            }
          ],
          "hint": "Es inflamación de las 'bolsas' sinoviales..."
        },
        {
          "question": "¿Qué función tienen las bolsas sinoviales?",
          "options": [
            {
              "text": "Ayudar al movimiento reduciendo la fricción entre las partes móviles",
              "isCorrect": true,
              "rationale": "La función de las bolsas es ayudar al movimiento reduciendo la fricción entre las partes móviles."
            },
            {
              "text": "Producir movimiento",
              "isCorrect": false,
              "rationale": "Reducen la fricción."
            },
            {
              "text": "Unir los huesos",
              "isCorrect": false,
              "rationale": "Reducen la fricción."
            },
            {
              "text": "Producir líquido sinovial",
              "isCorrect": false,
              "rationale": "Reducen la fricción."
            }
          ],
          "hint": "Sirven como 'almohadillas' que evitan el roce..."
        },
        {
          "question": "¿Qué puede causar la bursitis?",
          "options": [
            {
              "text": "Sobrecargas crónicas, traumatismos, artritis reumatoidea, gota o procesos infecciosos",
              "isCorrect": true,
              "rationale": "Las causas de bursitis pueden ser: sobrecargas crónicas, traumatismos, artritis reumatoidea, gota o procesos infecciosos."
            },
            {
              "text": "Solo traumatismos",
              "isCorrect": false,
              "rationale": "Hay múltiples causas."
            },
            {
              "text": "Solo infecciones",
              "isCorrect": false,
              "rationale": "Hay múltiples causas."
            },
            {
              "text": "Solo artritis",
              "isCorrect": false,
              "rationale": "Hay múltiples causas."
            }
          ],
          "hint": "Hay varias causas posibles..."
        },
        {
          "question": "¿Dónde se presentan habitualmente las bursitis?",
          "options": [
            {
              "text": "Hombro, rodilla, codo y cadera",
              "isCorrect": true,
              "rationale": "Las bursitis habitualmente se presentan a nivel del hombro, la rodilla, el codo y la cadera."
            },
            {
              "text": "Solo en el hombro",
              "isCorrect": false,
              "rationale": "También en rodilla, codo y cadera."
            },
            {
              "text": "Solo en la rodilla",
              "isCorrect": false,
              "rationale": "También en hombro, codo y cadera."
            },
            {
              "text": "En todas las articulaciones por igual",
              "isCorrect": false,
              "rationale": "Hay zonas más frecuentes."
            }
          ],
          "hint": "Hombro, rodilla, codo y cadera..."
        },
        {
          "question": "¿Cómo se manifiesta clínicamente la bursitis?",
          "options": [
            {
              "text": "Sensibilidad y dolor articular, tumefacción y calor a nivel articular",
              "isCorrect": true,
              "rationale": "La bursitis clínicamente se manifiesta con sensibilidad y dolor articular, tumefacción y calor a nivel articular."
            },
            {
              "text": "Solo dolor",
              "isCorrect": false,
              "rationale": "Hay más síntomas."
            },
            {
              "text": "Solo inflamación",
              "isCorrect": false,
              "rationale": "Hay más síntomas."
            },
            {
              "text": "Sin síntomas",
              "isCorrect": false,
              "rationale": "Hay síntomas claros."
            }
          ],
          "hint": "Dolor, hinchazón y calor..."
        },
        {
          "question": "¿Qué es la artroscopia?",
          "options": [
            {
              "text": "Un procedimiento quirúrgico que permite examinar la cavidad de una articulación sinovial con un artroscopio",
              "isCorrect": true,
              "rationale": "La cavidad de una articulación sinovial puede examinarse insertando un artroscopio. La artroscopia es un procedimiento quirúrgico que permite al traumatólogo examinar las articulaciones en busca de anomalías."
            },
            {
              "text": "Una radiografía",
              "isCorrect": false,
              "rationale": "Es un procedimiento con cámara."
            },
            {
              "text": "Una operación a cielo abierto",
              "isCorrect": false,
              "rationale": "Es mínimamente invasiva."
            },
            {
              "text": "Un análisis de sangre",
              "isCorrect": false,
              "rationale": "Es un procedimiento visual."
            }
          ],
          "hint": "Es mirar 'dentro' de la articulación con una cámara..."
        },
        {
          "question": "¿Qué anomalías se pueden buscar durante una artroscopia?",
          "options": [
            {
              "text": "Desgarros de los meniscos, lesiones de ligamentos y otras anomalías intraarticulares",
              "isCorrect": true,
              "rationale": "Durante la artroscopia se puede buscar anomalías como desgarros de los meniscos (discos articulares parciales de la rodilla) y otras lesiones."
            },
            {
              "text": "Solo fracturas",
              "isCorrect": false,
              "rationale": "Se pueden ver múltiples anomalías."
            },
            {
              "text": "Solo infecciones",
              "isCorrect": false,
              "rationale": "Se pueden ver múltiples anomalías."
            },
            {
              "text": "Solo tumores",
              "isCorrect": false,
              "rationale": "Se pueden ver múltiples anomalías."
            }
          ],
          "hint": "Se pueden ver lesiones de meniscos, ligamentos, etc..."
        },
        {
          "question": "¿Qué se puede hacer durante una artroscopia además de examinar?",
          "options": [
            {
              "text": "Pueden realizarse intervenciones quirúrgicas",
              "isCorrect": true,
              "rationale": "Durante la artroscopia pueden realizarse intervenciones quirúrgicas."
            },
            {
              "text": "Solo examinar",
              "isCorrect": false,
              "rationale": "También se puede operar."
            },
            {
              "text": "Solo tomar fotos",
              "isCorrect": false,
              "rationale": "Se pueden hacer intervenciones."
            },
            {
              "text": "Solo extraer líquido",
              "isCorrect": false,
              "rationale": "Se pueden hacer intervenciones."
            }
          ],
          "hint": "No solo 'mira', también puede 'operar'..."
        }
      ]
    }
  ]
}
,
  "anato-comparaciones": {
  "titulo": "Comparaciones de Tejidos",
  "descripcion": "Diferencias entre tendones, ligamentos, fascias, cartílagos, periostio",
  "totalPreguntas": 21,
  "partes": [
    {
      "id": 1,
      "nombre": "Comparaciones de Tejidos Conectivos",
      "preguntas": 21,
      "data": [
        {
          "question": "¿Cuál es la diferencia principal entre tendón y ligamento?",
          "options": [
            {
              "text": "El tendón une músculo con hueso, el ligamento une hueso con hueso",
              "isCorrect": true,
              "rationale": "El tendón conecta el músculo al hueso para transmitir la fuerza de contracción. El ligamento conecta huesos entre sí para dar estabilidad a las articulaciones."
            },
            {
              "text": "El tendón une hueso con hueso, el ligamento une músculo con hueso",
              "isCorrect": false,
              "rationale": "Es al revés."
            },
            {
              "text": "Ambos unen músculo con hueso",
              "isCorrect": false,
              "rationale": "Tienen funciones diferentes."
            },
            {
              "text": "Ambos unen hueso con hueso",
              "isCorrect": false,
              "rationale": "Tienen funciones diferentes."
            }
          ],
          "hint": "Uno transmite fuerza muscular, el otro estabiliza articulaciones..."
        },
        {
          "question": "¿Qué diferencia hay en la composición de fibras entre tendón y ligamento?",
          "options": [
            {
              "text": "El tendón tiene fibras de colágeno paralelas, el ligamento tiene fibras más variadas (pueden ser elásticas)",
              "isCorrect": true,
              "rationale": "Los tendones tienen fibras de colágeno densamente empaquetadas en paralelo para resistir tracción en una dirección. Los ligamentos pueden tener fibras elásticas (como los ligamentos amarillos) y organización menos regular."
            },
            {
              "text": "Ambos tienen la misma organización de fibras",
              "isCorrect": false,
              "rationale": "El tendón es más regular y paralelo."
            },
            {
              "text": "El ligamento tiene fibras más paralelas",
              "isCorrect": false,
              "rationale": "El tendón tiene fibras más paralelas."
            },
            {
              "text": "El tendón tiene fibras elásticas",
              "isCorrect": false,
              "rationale": "Los ligamentos pueden tener fibras elásticas."
            }
          ],
          "hint": "El tendón resiste tracción en una dirección, el ligamento puede necesitar cierta elasticidad..."
        },
        {
          "question": "¿Qué diferencia hay en el color entre tendón y ligamento?",
          "options": [
            {
              "text": "El tendón es blanco nacarado brillante, el ligamento es blanco amarillento u opaco",
              "isCorrect": true,
              "rationale": "Los tendones tienen un color blanco nacarado brillante por la disposición regular de las fibras de colágeno. Los ligamentos son más blancos opacos o amarillentos (si tienen fibras elásticas)."
            },
            {
              "text": "Ambos tienen el mismo color",
              "isCorrect": false,
              "rationale": "El tendón es más brillante."
            },
            {
              "text": "El ligamento es más brillante",
              "isCorrect": false,
              "rationale": "El tendón es más brillante."
            },
            {
              "text": "El tendón es amarillento",
              "isCorrect": false,
              "rationale": "El tendón es blanco nacarado."
            }
          ],
          "hint": "Uno brilla más por la disposición de sus fibras..."
        },
        {
          "question": "¿Qué son los ligamentos amarillos y por qué tienen ese color?",
          "options": [
            {
              "text": "Ligamentos elásticos de las vértebras, amarillos por la elastina que contienen",
              "isCorrect": true,
              "rationale": "Los ligamentos amarillos (flavos) se encuentran entre las láminas vertebrales. Su color amarillento se debe al alto contenido de fibras elásticas (elastina)."
            },
            {
              "text": "Ligamentos envejecidos",
              "isCorrect": false,
              "rationale": "Su color es normal, no por edad."
            },
            {
              "text": "Ligamentos inflamados",
              "isCorrect": false,
              "rationale": "Es su color normal por la elastina."
            },
            {
              "text": "Ligamentos del hígado",
              "isCorrect": false,
              "rationale": "Están en la columna vertebral."
            }
          ],
          "hint": "El color viene de un tipo de fibra diferente al colágeno..."
        },
        {
          "question": "¿Cuál es la diferencia entre periostio y pericondrio?",
          "options": [
            {
              "text": "El periostio envuelve el hueso, el pericondrio envuelve el cartílago",
              "isCorrect": true,
              "rationale": "El periostio es la membrana fibrosa que rodea la superficie exterior del hueso. El pericondrio es la membrana conectiva que envuelve el cartílago."
            },
            {
              "text": "Ambos envuelven el hueso",
              "isCorrect": false,
              "rationale": "El pericondrio envuelve el cartílago."
            },
            {
              "text": "Ambos envuelven el cartílago",
              "isCorrect": false,
              "rationale": "El periostio envuelve el hueso."
            },
            {
              "text": "No hay diferencia",
              "isCorrect": false,
              "rationale": "Envuelven tejidos diferentes."
            }
          ],
          "hint": "'osteo' = hueso, 'condro' = cartílago..."
        },
        {
          "question": "¿Qué diferencia hay entre periostio y endostio?",
          "options": [
            {
              "text": "El periostio está en la superficie externa del hueso, el endostio reviste la cavidad medular interna",
              "isCorrect": true,
              "rationale": "El periostio rodea la superficie externa del hueso. El endostio es el revestimiento interno de la cavidad medular y de las trabéculas del hueso esponjoso."
            },
            {
              "text": "Ambos están en el exterior del hueso",
              "isCorrect": false,
              "rationale": "El endostio está dentro."
            },
            {
              "text": "Ambos están dentro del hueso",
              "isCorrect": false,
              "rationale": "El periostio está fuera."
            },
            {
              "text": "No hay diferencia",
              "isCorrect": false,
              "rationale": "Están en ubicaciones opuestas."
            }
          ],
          "hint": "'peri' = alrededor (afuera), 'endo' = dentro..."
        },
        {
          "question": "¿Qué diferencia hay en la vascularización entre periostio y cartílago articular?",
          "options": [
            {
              "text": "El periostio es ricamente vascularizado, el cartílago articular es avascular",
              "isCorrect": true,
              "rationale": "El periostio es ricamente vascularizado e inervado. El cartílago articular no tiene vasos sanguíneos y se nutre por imbibición del líquido sinovial."
            },
            {
              "text": "Ambos son avasculares",
              "isCorrect": false,
              "rationale": "El periostio tiene muchos vasos."
            },
            {
              "text": "Ambos son muy vascularizados",
              "isCorrect": false,
              "rationale": "El cartílago articular es avascular."
            },
            {
              "text": "El cartílago es más vascularizado",
              "isCorrect": false,
              "rationale": "El cartílago es avascular."
            }
          ],
          "hint": "Por eso duele cuando se lastima el periostio, y el cartílago se nutre del líquido sinovial..."
        },
        {
          "question": "¿Cuál es la diferencia entre fascia y aponeurosis?",
          "options": [
            {
              "text": "La fascia es una lámina de tejido conectivo que envuelve músculos, la aponeurosis es una lámina tendinosa plana de inserción muscular",
              "isCorrect": true,
              "rationale": "La fascia es una lámina de tejido conectivo que envuelve y separa músculos. La aponeurosis es una expansión tendinosa plana que sirve como medio de inserción muscular."
            },
            {
              "text": "Son lo mismo",
              "isCorrect": false,
              "rationale": "Tienen funciones diferentes."
            },
            {
              "text": "La aponeurosis envuelve músculos",
              "isCorrect": false,
              "rationale": "La aponeurosis es de inserción muscular."
            },
            {
              "text": "La fascia sirve de inserción muscular",
              "isCorrect": false,
              "rationale": "La fascia envuelve y separa."
            }
          ],
          "hint": "Una 'envuelve', la otra 'sirve de inserción'..."
        },
        {
          "question": "¿Qué característica distingue a una aponeurosis de un tendón?",
          "options": [
            {
              "text": "La aponeurosis es una lámina plana, el tendón es un cordón cilíndrico o aplanado",
              "isCorrect": true,
              "rationale": "La aponeurosis es una lámina tendinosa plana y delgada. El tendón es una estructura más cilíndrica o de cordón."
            },
            {
              "text": "No hay diferencia",
              "isCorrect": false,
              "rationale": "La forma es diferente."
            },
            {
              "text": "El tendón es plano",
              "isCorrect": false,
              "rationale": "El tendón es más cilíndrico."
            },
            {
              "text": "La aponeurosis es cilíndrica",
              "isCorrect": false,
              "rationale": "La aponeurosis es plana."
            }
          ],
          "hint": "Una es una 'lámina', el otro es un 'cordón'..."
        },
        {
          "question": "¿Cuál es la diferencia entre cartílago hialino y fibrocartílago?",
          "options": [
            {
              "text": "El cartílago hialino es liso y transparente, el fibrocartílago tiene fibras de colágeno visibles y es más resistente",
              "isCorrect": true,
              "rationale": "El cartílago hialino es liso, translúcido y de aspecto vidrioso. El fibrocartílago contiene haces de fibras de colágeno visibles, es más opaco y resistente a la tensión."
            },
            {
              "text": "Son iguales",
              "isCorrect": false,
              "rationale": "Tienen aspecto y propiedades diferentes."
            },
            {
              "text": "El fibrocartílago es más liso",
              "isCorrect": false,
              "rationale": "El hialino es más liso."
            },
            {
              "text": "El cartílago hialino es más opaco",
              "isCorrect": false,
              "rationale": "El hialino es más translúcido."
            }
          ],
          "hint": "'Hialino' significa 'vidrioso', el fibrocartílago se ve más fibroso..."
        },
        {
          "question": "¿Dónde se encuentra principalmente el cartílago hialino?",
          "options": [
            {
              "text": "Superficies articulares, costillas (cartílago costal), nariz, tráquea y bronquios",
              "isCorrect": true,
              "rationale": "El cartílago hialino se encuentra en las superficies articulares, cartílagos costales, nariz, tráquea y bronquios."
            },
            {
              "text": "Solo en los meniscos",
              "isCorrect": false,
              "rationale": "Los meniscos son fibrocartílago."
            },
            {
              "text": "Solo en los discos intervertebrales",
              "isCorrect": false,
              "rationale": "Los discos son fibrocartílago."
            },
            {
              "text": "Solo en el pabellón auricular",
              "isCorrect": false,
              "rationale": "La oreja tiene cartílago elástico."
            }
          ],
          "hint": "Es el tipo más común de cartílago..."
        },
        {
          "question": "¿Dónde se encuentra principalmente el fibrocartílago?",
          "options": [
            {
              "text": "Discos intervertebrales, meniscos, sínfisis pubiana, labrum y disco temporomandibular",
              "isCorrect": true,
              "rationale": "El fibrocartílago se encuentra en discos intervertebrales, meniscos de la rodilla, sínfisis pubiana, labrum articular y disco de la ATM."
            },
            {
              "text": "Superficies articulares",
              "isCorrect": false,
              "rationale": "Esas tienen cartílago hialino."
            },
            {
              "text": "Tráquea y bronquios",
              "isCorrect": false,
              "rationale": "Esos tienen cartílago hialino."
            },
            {
              "text": "Pabellón auricular",
              "isCorrect": false,
              "rationale": "Ese tiene cartílago elástico."
            }
          ],
          "hint": "Está donde se necesita resistencia a la tensión y compresión..."
        },
        {
          "question": "¿Qué tipo de cartílago tiene el pabellón auricular (oreja)?",
          "options": [
            {
              "text": "Cartílago elástico, por eso es flexible y vuelve a su forma",
              "isCorrect": true,
              "rationale": "El pabellón auricular tiene cartílago elástico, que contiene fibras elásticas que le dan flexibilidad y capacidad de recuperar su forma."
            },
            {
              "text": "Cartílago hialino",
              "isCorrect": false,
              "rationale": "Ese es más rígido."
            },
            {
              "text": "Fibrocartílago",
              "isCorrect": false,
              "rationale": "Ese es más resistente a tensión."
            },
            {
              "text": "No tiene cartílago",
              "isCorrect": false,
              "rationale": "Tiene cartílago elástico."
            }
          ],
          "hint": "Por eso la oreja se puede doblar y vuelve a su forma..."
        },
        {
          "question": "¿Cuál es la diferencia en vascularización entre el pericondrio y el cartílago que envuelve?",
          "options": [
            {
              "text": "El pericondrio es vascularizado, el cartílago es avascular",
              "isCorrect": true,
              "rationale": "El pericondrio tiene vasos sanguíneos. El cartílago es avascular y se nutre por difusión desde el pericondrio."
            },
            {
              "text": "Ambos son vascularizados",
              "isCorrect": false,
              "rationale": "El cartílago es avascular."
            },
            {
              "text": "Ambos son avasculares",
              "isCorrect": false,
              "rationale": "El pericondrio tiene vasos."
            },
            {
              "text": "El cartílago es más vascularizado",
              "isCorrect": false,
              "rationale": "El cartílago es avascular."
            }
          ],
          "hint": "El cartílago se nutre por difusión, igual que el cartílago articular..."
        },
        {
          "question": "¿Qué diferencia hay en la nutrición entre tendón y músculo?",
          "options": [
            {
              "text": "El músculo es muy vascularizado, el tendón tiene vascularización pobre",
              "isCorrect": true,
              "rationale": "El músculo esquelético es muy vascularizado. El tendón tiene una vascularización relativamente pobre, lo que hace que su cicatrización sea más lenta."
            },
            {
              "text": "Ambos tienen la misma vascularización",
              "isCorrect": false,
              "rationale": "El músculo es mucho más vascularizado."
            },
            {
              "text": "El tendón es más vascularizado",
              "isCorrect": false,
              "rationale": "El músculo es más vascularizado."
            },
            {
              "text": "El tendón es avascular",
              "isCorrect": false,
              "rationale": "Tiene algo de vascularización, pero pobre."
            }
          ],
          "hint": "Por eso las lesiones de tendón tardan más en curar..."
        },
        {
          "question": "¿Qué diferencia hay entre un tendón y una vaina sinovial?",
          "options": [
            {
              "text": "El tendón es tejido conectivo denso que transmite fuerza, la vaina sinovial es una membrana que rodea y lubrica el tendón",
              "isCorrect": true,
              "rationale": "El tendón es la estructura de tejido conectivo que transmite la fuerza muscular. La vaina sinovial es una membrana que rodea ciertos tendones y contiene líquido sinovial para reducir la fricción."
            },
            {
              "text": "Son lo mismo",
              "isCorrect": false,
              "rationale": "Son estructuras diferentes."
            },
            {
              "text": "La vaina sinovial transmite fuerza",
              "isCorrect": false,
              "rationale": "El tendón transmite la fuerza."
            },
            {
              "text": "El tendón lubrica",
              "isCorrect": false,
              "rationale": "La vaina sinovial lubrica."
            }
          ],
          "hint": "Una es la 'cuerda', la otra es el 'túnel lubricado' por donde pasa..."
        },
        {
          "question": "¿Qué diferencia hay entre hueso compacto y hueso esponjoso en cuanto a vascularización?",
          "options": [
            {
              "text": "El hueso compacto se nutre por conductos centrales (Havers), el esponjoso por difusión desde la médula",
              "isCorrect": true,
              "rationale": "El hueso compacto tiene osteonas con conductos centrales que llevan vasos. El hueso esponjoso no tiene conductos, los osteocitos se nutren por difusión desde la médula ósea de los espacios medulares."
            },
            {
              "text": "Ambos se nutren igual",
              "isCorrect": false,
              "rationale": "Tienen mecanismos diferentes."
            },
            {
              "text": "El esponjoso tiene más conductos",
              "isCorrect": false,
              "rationale": "El compacto tiene los conductos de Havers."
            },
            {
              "text": "El compacto es avascular",
              "isCorrect": false,
              "rationale": "Tiene conductos con vasos."
            }
          ],
          "hint": "El compacto tiene 'túneles' con vasos, el esponjoso no..."
        },
        {
          "question": "¿Cuál es la diferencia funcional entre ligamento fibroso y ligamento elástico?",
          "options": [
            {
              "text": "El fibroso limita el movimiento (inextensible), el elástico permite cierto estiramiento y retorno",
              "isCorrect": true,
              "rationale": "Los ligamentos fibrosos son prácticamente inextensibles y limitan el movimiento. Los elásticos pueden estirarse algo y volver a su posición (como los ligamentos amarillos)."
            },
            {
              "text": "No hay diferencia funcional",
              "isCorrect": false,
              "rationale": "Tienen comportamiento mecánico diferente."
            },
            {
              "text": "El elástico limita más el movimiento",
              "isCorrect": false,
              "rationale": "El fibroso es más rígido."
            },
            {
              "text": "El fibroso se estira más",
              "isCorrect": false,
              "rationale": "El fibroso es inextensible."
            }
          ],
          "hint": "Uno es 'rígido', el otro puede 'estirarse' un poco..."
        },
        {
          "question": "¿Qué diferencia hay entre una sincondrosis y una sínfisis?",
          "options": [
            {
              "text": "La sincondrosis tiene cartílago hialino, la sínfisis tiene fibrocartílago",
              "isCorrect": true,
              "rationale": "La sincondrosis es una articulación cartilaginosa con cartílago hialino interpuesto. La sínfisis tiene fibrocartílago entre las superficies articulares."
            },
            {
              "text": "Ambas tienen el mismo tipo de cartílago",
              "isCorrect": false,
              "rationale": "Tienen diferentes tipos de cartílago."
            },
            {
              "text": "La sínfisis tiene cartílago hialino",
              "isCorrect": false,
              "rationale": "Tiene fibrocartílago."
            },
            {
              "text": "La sincondrosis tiene fibrocartílago",
              "isCorrect": false,
              "rationale": "Tiene cartílago hialino."
            }
          ],
          "hint": "'Condro' puede referirse a cualquier cartílago, pero sincondrosis = hialino..."
        },
        {
          "question": "¿Qué diferencia hay en la movilidad entre sincondrosis y sínfisis?",
          "options": [
            {
              "text": "La sincondrosis es generalmente menos móvil que la sínfisis (que es anfiartrosis)",
              "isCorrect": true,
              "rationale": "La sincondrosis es generalmente inmóvil o con movimiento muy limitado. La sínfisis es una anfiartrosis, con movimientos limitados pero de mayor amplitud que la sincondrosis."
            },
            {
              "text": "Ambas tienen la misma movilidad",
              "isCorrect": false,
              "rationale": "La sínfisis es más móvil."
            },
            {
              "text": "La sincondrosis es más móvil",
              "isCorrect": false,
              "rationale": "La sínfisis tiene más movimiento."
            },
            {
              "text": "Ninguna tiene movimiento",
              "isCorrect": false,
              "rationale": "La sínfisis tiene algo de movimiento."
            }
          ],
          "hint": "La sínfisis (como el disco intervertebral) permite más movimiento..."
        },
        {
          "question": "¿Cuál es la diferencia entre menisco y disco articular?",
          "options": [
            {
              "text": "El menisco tiene forma de medialuna, el disco es completo y divide la articulación en dos cavidades",
              "isCorrect": true,
              "rationale": "El menisco tiene forma de medialuna y no divide completamente la articulación. El disco articular es completo y divide la articulación en dos cavidades secundarias separadas."
            },
            {
              "text": "Son lo mismo",
              "isCorrect": false,
              "rationale": "Tienen forma diferente."
            },
            {
              "text": "El disco tiene forma de medialuna",
              "isCorrect": false,
              "rationale": "El disco es completo."
            },
            {
              "text": "El menisco divide la articulación",
              "isCorrect": false,
              "rationale": "El disco divide la articulación."
            }
          ],
          "hint": "Uno es 'media luna', el otro es 'completo'..."
        }
      ]
    }
  ]
}
};