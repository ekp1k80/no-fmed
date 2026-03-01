// Datos de los quizzes de Anatomía - Tegumento Común
// FMED 1ro - Basado en Di Rísio

const quizzes = {
  "anato-tegumento": {
    "titulo": "Tegumento Común",
    "descripcion": "Piel, anexos, glándulas, vascularización",
    "totalPreguntas": 159,
    "partes": [
      {
        "id": 1,
        "nombre": "Tegumento + Piel",
        "preguntas": 17,
        "data": [
          {
            "question": "¿Cuáles son las dos capas que componen el tegumento común?",
            "options": [
              {"text": "Piel y tejido subcutáneo", "isCorrect": true, "rationale": "El tegumento común está dispuesto en dos capas: la piel (más superficial) y el tejido subcutáneo o hipodermis (más profunda)."},
              {"text": "Epidermis y dermis", "isCorrect": false, "rationale": "Estas son las dos capas de la PIEL, no del tegumento común completo."},
              {"text": "Dermis y tejido subcutáneo", "isCorrect": false, "rationale": "Falta la epidermis que es parte de la piel."},
              {"text": "Piel y fascia", "isCorrect": false, "rationale": "La fascia de revestimiento es el límite profundo del tejido subcutáneo, no una capa del tegumento."}
            ],
            "hint": "Una es visible externamente, la otra está debajo..."
          },
          {
            "question": "¿Qué estructuras forman parte del sistema tegumentario además de la piel?",
            "options": [
              {"text": "Glándulas sudoríparas, sebáceas, pelos, músculo erector del pelo, uñas y tejido subcutáneo", "isCorrect": true, "rationale": "El sistema tegumentario incluye la piel con sus anexos (glándulas, pelos, músculo erector, uñas) más el tejido subcutáneo."},
              {"text": "Solo la epidermis y dermis", "isCorrect": false, "rationale": "Eso es solo la piel, falta todo el sistema de anexos."},
              {"text": "Músculos, huesos y tendones", "isCorrect": false, "rationale": "Estos son parte del sistema musculoesquelético, no tegumentario."},
              {"text": "Vasos sanguíneos y nervios únicamente", "isCorrect": false, "rationale": "Aunque están presentes, no son las estructuras definitorias del sistema."}
            ],
            "hint": "Pensá en todo lo que 'sale' de la piel o está asociado a ella..."
          },
          {
            "question": "¿Cuál es la superficie aproximada de la piel en un adulto?",
            "options": [
              {"text": "Aproximadamente 1,80 m²", "isCorrect": true, "rationale": "La piel es el mayor órgano del cuerpo con ~1,80 m² de superficie."},
              {"text": "Aproximadamente 0,50 m²", "isCorrect": false, "rationale": "Muy pequeño, sería menos que una hoja de papel A1."},
              {"text": "Aproximadamente 5,00 m²", "isCorrect": false, "rationale": "Demasiado grande, excede el área corporal real."},
              {"text": "Aproximadamente 0,10 m²", "isCorrect": false, "rationale": "Extremadamente pequeño, sería solo una mano."}
            ],
            "hint": "Es suficiente para cubrir una cama individual..."
          },
          {
            "question": "¿Qué porcentaje del peso corporal representa la piel?",
            "options": [
              {"text": "Aproximadamente 16%", "isCorrect": true, "rationale": "La piel representa aproximadamente el 16% del peso corporal total."},
              {"text": "Aproximadamente 5%", "isCorrect": false, "rationale": "Subestima el peso de este gran órgano."},
              {"text": "Aproximadamente 35%", "isCorrect": false, "rationale": "Sobreestima demasiado, sería más de un tercio del cuerpo."},
              {"text": "Aproximadamente 50%", "isCorrect": false, "rationale": "Imposible, sería la mitad del peso corporal."}
            ],
            "hint": "Es el órgano más pesado del cuerpo..."
          },
          {
            "question": "¿Cuál de estas NO es una función de la piel?",
            "options": [
              {"text": "Producción de insulina", "isCorrect": true, "rationale": "La insulina se produce en el páncreas, no en la piel."},
              {"text": "Protección contra agresiones físicas y químicas", "isCorrect": false, "rationale": "Esta SÍ es función de la piel."},
              {"text": "Regulación de la temperatura corporal", "isCorrect": false, "rationale": "Esta SÍ es función de la piel a través del sudor y vasodilatación."},
              {"text": "Síntesis de vitamina D", "isCorrect": false, "rationale": "Esta SÍ es función de la piel mediante exposición solar."}
            ],
            "hint": "La piel hace muchas cosas, pero no produce hormonas pancreáticas..."
          },
          {
            "question": "¿Cuál es la función de la piel relacionada con la contención corporal?",
            "options": [
              {"text": "Envolver el cuerpo brindando contención para líquidos extracelulares y órganos profundos", "isCorrect": true, "rationale": "La piel actúa como envoltura que mantiene en su lugar líquidos y órganos internos."},
              {"text": "Producir anticuerpos", "isCorrect": false, "rationale": "Esa es función del sistema inmune, no de contención."},
              {"text": "Filtrar sangre", "isCorrect": false, "rationale": "Esa es función renal."},
              {"text": "Digestión de nutrientes", "isCorrect": false, "rationale": "Esa es función del sistema digestivo."}
            ],
            "hint": "Pensá en la piel como un 'saco' que contiene todo..."
          },
          {
            "question": "¿Qué sentidos puede percibir la piel según sus funciones?",
            "options": [
              {"text": "Tacto, temperatura y dolor", "isCorrect": true, "rationale": "La piel es órgano de los sentidos para tacto, temperatura y dolor a través de sus receptores."},
              {"text": "Olfato y gusto", "isCorrect": false, "rationale": "Estos sentidos corresponden a nariz y lengua."},
              {"text": "Vista y audición", "isCorrect": false, "rationale": "Estos sentidos corresponden a ojos y oídos."},
              {"text": "Propiocepción y equilibrio", "isCorrect": false, "rationale": "Estos sentidos dependen de músculos, tendones y oído interno."}
            ],
            "hint": "Sensaciones que podés sentir al tocar algo..."
          },
          {
            "question": "¿Cuál es la capa epitelial más superficial de la piel?",
            "options": [
              {"text": "Epidermis", "isCorrect": true, "rationale": "La epidermis es la capa epitelial más superficial de la piel."},
              {"text": "Dermis", "isCorrect": false, "rationale": "La dermis está debajo de la epidermis, es más profunda."},
              {"text": "Tejido subcutáneo", "isCorrect": false, "rationale": "Es la capa más profunda, debajo de la dermis."},
              {"text": "Fascia", "isCorrect": false, "rationale": "La fascia está debajo del tejido subcutáneo."}
            ],
            "hint": "Es la que vemos y tocamos directamente..."
          },
          {
            "question": "¿Qué tipo de tejido forma la dermis?",
            "options": [
              {"text": "Tejido conectivo", "isCorrect": true, "rationale": "La dermis está formada por tejido conectivo, específicamente conectivo denso."},
              {"text": "Tejido epitelial", "isCorrect": false, "rationale": "El tejido epitelial forma la epidermis, no la dermis."},
              {"text": "Tejido muscular", "isCorrect": false, "rationale": "Aunque tiene algunas células musculares lisas, no es el tejido principal."},
              {"text": "Tejido nervioso", "isCorrect": false, "rationale": "Contiene nervios pero no está formada por tejido nervioso."}
            ],
            "hint": "Es la misma familia de tejidos que une y sostiene estructuras..."
          },
          {
            "question": "¿Qué son las crestas en la superficie de la piel?",
            "options": [
              {"text": "Elevaciones de la superficie cutánea", "isCorrect": true, "rationale": "Las crestas son elevaciones de la superficie de la piel."},
              {"text": "Depresiones entre las líneas", "isCorrect": false, "rationale": "Eso describen los surcos, no las crestas."},
              {"text": "Glándulas sudoríparas", "isCorrect": false, "rationale": "Las glándulas son estructuras profundas, no superficiales."},
              {"text": "Terminaciones nerviosas", "isCorrect": false, "rationale": "Las terminaciones nerviosas son microscópicas y no forman crestas visibles."}
            ],
            "hint": "Son lo 'alto' de la topografía de la piel..."
          },
          {
            "question": "¿Qué separan los surcos en la piel?",
            "options": [
              {"text": "Las crestas", "isCorrect": true, "rationale": "Los surcos son las depresiones que separan las crestas de la piel."},
              {"text": "Las células", "isCorrect": false, "rationale": "Las células son microscópicas, los surcos son estructuras macroscópicas."},
              {"text": "Los vasos sanguíneos", "isCorrect": false, "rationale": "Los vasos están en la dermis, no forman surcos superficiales."},
              {"text": "Los folículos pilosos", "isCorrect": false, "rationale": "Los folículos son estructuras individuales, no forman surcos continuos."}
            ],
            "hint": "Son las 'líneas' que ves entre las elevaciones..."
          },
          {
            "question": "¿Dónde están muy desarrolladas las papilas de la dermis?",
            "options": [
              {"text": "En palma y planta", "isCorrect": true, "rationale": "Las papilas dérmicas están muy desarrolladas en palma de manos y planta de pies por la mayor exigencia mecánica."},
              {"text": "En el cuero cabelludo", "isCorrect": false, "rationale": "Aunque hay muchos folículos, las papilas no están especialmente desarrolladas allí."},
              {"text": "En los párpados", "isCorrect": false, "rationale": "Los párpados tienen piel muy fina con papilas poco desarrolladas."},
              {"text": "En la espalda", "isCorrect": false, "rationale": "La espalda no tiene la misma exigencia mecánica que palmas y plantas."}
            ],
            "hint": "Piensa en las zonas que más usás para agarrar o apoyar..."
          },
          {
            "question": "¿Qué característica tienen las huellas digitales?",
            "options": [
              {"text": "Configuración única en cada individuo", "isCorrect": true, "rationale": "Las huellas digitales tienen configuración única del ordenamiento de surcos en el pulpejo de los dedos."},
              {"text": "Son idénticas en gemelos idénticos", "isCorrect": false, "rationale": "Aunque similares, no son idénticas; tienen variaciones únicas."},
              {"text": "Cambian cada año", "isCorrect": false, "rationale": "Las huellas se forman en el feto y permanecen invariables toda la vida."},
              {"text": "Son iguales en todos los dedos de una persona", "isCorrect": false, "rationale": "Cada dedo tiene huella diferente incluso en la misma persona."}
            ],
            "hint": "Por eso se usan para identificación forense..."
          },
          {
            "question": "¿Dónde se encuentran los pliegues de flexión?",
            "options": [
              {"text": "En superficies de las articulaciones", "isCorrect": true, "rationale": "Los pliegues de flexión se encuentran en superficies de las articulaciones."},
              {"text": "En la cara", "isCorrect": false, "rationale": "En la cara hay líneas de expresión, no pliegues de flexión."},
              {"text": "En el cuero cabelludo", "isCorrect": false, "rationale": "El cuero cabelludo no tiene articulaciones ni pliegues de flexión."},
              {"text": "En las uñas", "isCorrect": false, "rationale": "Las uñas tienen lúnula y placa, no pliegues de flexión."}
            ],
            "hint": "Aparecen donde la piel se dobla al moverse..."
          },
          {
            "question": "¿Qué causan las arrugas o líneas de expresión?",
            "options": [
              {"text": "Contracción de músculos subyacentes", "isCorrect": true, "rationale": "Las arrugas de expresión son características del envejecimiento producidas por contracción de músculos subyacentes."},
              {"text": "Acumulación de grasa", "isCorrect": false, "rationale": "La grasa produce volumen, no arrugas de expresión."},
              {"text": "Infecciones bacterianas", "isCorrect": false, "rationale": "Las infecciones causan inflamación, no arrugas características."},
              {"text": "Exposición exclusiva al frío", "isCorrect": false, "rationale": "El frío causa piel de gallina temporal, no arrugas permanentes."}
            ],
            "hint": "Aparecen donde más te expresás con el rostro..."
          },
          {
            "question": "¿Dónde se interrumpe la piel para continuar con mucosas?",
            "options": [
              {"text": "En los orificios naturales", "isCorrect": true, "rationale": "Los orificios naturales son donde la piel se interrumpe y continúa con las mucosas."},
              {"text": "En las yemas de los dedos", "isCorrect": false, "rationale": "Las yemas tienen piel gruesa, no mucosa."},
              {"text": "En el cuero cabelludo", "isCorrect": false, "rationale": "El cuero cabelludo es piel continua, no hay mucosa allí."},
              {"text": "En las uñas", "isCorrect": false, "rationale": "Las uñas son anexos de la piel, no orificios naturales."}
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
              {"text": "Epitelio estratificado escamoso queratinizado", "isCorrect": true, "rationale": "La epidermis es un epitelio estratificado (en capas), escamoso (células planas) y queratinizado (con queratina)."},
              {"text": "Epitelio simple cúbico", "isCorrect": false, "rationale": "El epitelio simple cúbico es de una sola capa de células cúbicas, como en los túbulos renales."},
              {"text": "Epitelio columnar pseudoestratificado", "isCorrect": false, "rationale": "Este tipo se encuentra en las vías respiratorias, no en la piel."},
              {"text": "Epitelio de transición", "isCorrect": false, "rationale": "El epitelio de transición se encuentra en vejiga y uréteres, adaptándose a distensión."}
            ],
            "hint": "Pensá en las características: tiene capas, células planas, y produce una proteína dura..."
          },
          {
            "question": "¿La epidermis tiene vasos sanguíneos?",
            "options": [
              {"text": "No, carece de vasos sanguíneos y linfáticos", "isCorrect": true, "rationale": "La epidermis no tiene vasos sanguíneos ni linfáticos; recibe nutrientes por difusión desde la dermis."},
              {"text": "Sí, tiene una densa red capilar", "isCorrect": false, "rationale": "Los vasos están en la dermis, no en la epidermis."},
              {"text": "Solo tiene vasos linfáticos", "isCorrect": false, "rationale": "No tiene ni vasos sanguíneos ni linfáticos."},
              {"text": "Tiene vasos sanguíneos solo en las capas profundas", "isCorrect": false, "rationale": "Ninguna capa de la epidermis tiene vasos; todos están en la dermis."}
            ],
            "hint": "Por eso una raspadura superficial no sangra..."
          }
        ]
      },
      {
        "id": 3,
        "nombre": "Dermis",
        "preguntas": 20,
        "data": []
      },
      {
        "id": 4,
        "nombre": "Glándulas Cutáneas",
        "preguntas": 17,
        "data": []
      },
      {
        "id": 5,
        "nombre": "Pelos",
        "preguntas": 26,
        "data": []
      },
      {
        "id": 6,
        "nombre": "Uñas",
        "preguntas": 10,
        "data": []
      },
      {
        "id": 7,
        "nombre": "Tejido Subcutáneo",
        "preguntas": 12,
        "data": []
      },
      {
        "id": 8,
        "nombre": "Vascularización/Inervación",
        "preguntas": 20,
        "data": []
      },
      {
        "id": 9,
        "nombre": "Patologías + Mama",
        "preguntas": 13,
        "data": []
      }
    ]
  }
};

// Exportar para usar en otros módulos si es necesario
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizzes;
}