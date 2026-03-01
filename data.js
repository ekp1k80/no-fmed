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
};