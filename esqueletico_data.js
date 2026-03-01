// Sistema Esquelético - FMED 1ro
// Agregar al objeto quizzes en data.js

const esqueleticoData = {
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
}

// Para integrar: Object.assign(quizzes, esqueleticoData)
