export interface GrupoInfo {
  id: string;
  nombre: string;
  logoSrc: string;
  descripcion: string;
  horarios: string;
  telefono: string;
  facebook?: string;
  instagram?: string;
  ubicacionMapaSrc: string;
  imageUrls: string[];
  rutas: Ruta[];
}

export interface Ruta {
  tituloRuta: string;
  descripcion: string;
}

export const GRUPOS_INFO: Record<string, GrupoInfo> = {
  'ocv': {
    id: 'ocv',
    nombre: 'Otra Clase de Vuelo',
    logoSrc: 'assets/grupos/ocv.png',
    descripcion: 'Grupo de autoayuda AA',
    horarios: 'Lunes a Sabado de 7:00 PM a 9:00 PM',
    telefono: '3332301977',
    facebook: 'https://www.facebook.com/share/18mYMsijvT/',
    instagram: 'https://www.instagram.com/otraclasedevuelo?igsh=MWhheHlobW9tZG43aA==',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7087459409295!2d-103.38563462475284!3d20.681425080882384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af6a87a3a571%3A0xf2d497a790fa8a7c!2sOtra%20Clase%20de%20Vuelo!5e0!3m2!1ses-419!2smx!4v1723310304560!5m2!1ses-419!2smx',
    imageUrls: [
      'assets/grupos/OCV/1.jpeg',
      'assets/grupos/OCV/2.jpeg',
      'assets/grupos/OCV/3.jpeg',
    ],
    rutas: [
      { tituloRuta: 'Ruta 629 Vía 1', descripcion: 'Esta ruta también pasa por la Av. Adolfo López Mateos y conecta varios puntos estratégicos de Guadalajara como Los Arcos, Plaza del Sol, y la Estación Juárez del Tren Ligero' },
      { tituloRuta: 'Ruta 622', descripcion: 'Esta ruta cubre varios puntos importantes de la ciudad, incluyendo la Av Adolfo López Mateos Norte. Es una de las rutas más completas en cuanto a cobertura de avenidas y puntos de interés como la Glorieta Minerva, Av. Agustín Yáñez, y Av. de las Américas' }
    ]
  },
  'punto-luminoso': {
    id: 'punto-luminoso',
    nombre: 'Punto Luminoso',
    logoSrc: 'assets/grupos/punto-luminoso.png',
    descripcion: 'Grupo de autoayuda AA',
    horarios: 'Lunes a Viernes de 5:00 PM a 6:30 PM y 7:00 PM a 9:00, Sábados de 6:30 AM a 8:00 PM',
    telefono: '3319832167',
    facebook: 'https://www.facebook.com/puntoluminoso/',
    instagram: 'https://www.instagram.com/grupo_puntoluminoso/',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9076141704645!2d-103.38917842475311!3d20.673337280888514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae935be90517%3A0x733040f3277d3a3d!2sPunto%20Luminoso%20(Grupo%20de%20Alcoholicos%20Anonimos)!5e0!3m2!1ses-419!2smx!4v1744737858216!5m2!1ses-419!2smx',
    imageUrls: [
      'assets/grupos/puntoLuminoso/1.jpeg',
    ],
    rutas: [
      { tituloRuta: 'Ruta 380', descripcion: 'Recorre la Av. Chapultepec y conecta con varios puntos importantes de la ciudad' }
    ]
  },
  'color': {
    id: 'color',
    nombre: 'El Color del Despertar',
    logoSrc: 'assets/grupos/color.png',
    descripcion: 'Grupo de autoayuda AA',
    horarios: 'Sábados de 6:00 PM a 8:00 PM',
    telefono: '3398765432',
    facebook: 'https://www.facebook.com/colordespiert/',
    instagram: 'https://www.instagram.com/colordespiert/',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8275339450774!2d-103.34363112307888!3d20.67659443864249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae6b222ead6b%3A0xa3df8ca670064144!2sEl%20Color%20del%20Despertar!5e0!3m2!1ses-419!2smx!4v1744740825437!5m2!1ses-419!2smx',
    imageUrls: [
      'assets/grupos/color/1.webp',
      'assets/grupos/color/2.webp',
      'assets/grupos/color/3.webp',
      'assets/grupos/color/4.webp',
      'assets/grupos/color/5.webp',
      'assets/grupos/color/6.webp',
    ],
    rutas: [
      { tituloRuta: 'Referencias', descripcion: 'Fachada del edificio “progreso” arriba de los helados “Dolphy”, 3er piso, vista del logo del color del despertar, y de “AA”, en las ventanas. y al fondo, a la izquierda, la cúpula del “instituto cultural cabañas' },
      { tituloRuta: 'Ruta 258', descripcion: 'Conecta la zona de Zapopan con el centro de Guadalajara' }
    ]
  },
  // Agregar información para los demás grupos siguiendo el mismo formato
  'somos-ameca': {
    id: 'somos-ameca',
    nombre: 'Grupo Somos Ameca',
    logoSrc: 'assets/grupos/ameca.png',
    descripcion: 'Grupo de autoayuda AA',
    horarios: 'Lunes a Miercoles de 8:00 PM a 10:00 PM y Viernes a Sabado de 8:00 PM a 10:00 PM',
    telefono: '3751182444',
    facebook: 'https://www.facebook.com/SomosDespertarAmeca',
    instagram: 'https://www.instagram.com/somosameca/',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.97357237956!2d-104.04470892475648!3d20.5482621809836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b960247a557b097%3A0x4870a01877d86a9!2sSomos%20Ameca%20(Grupo%20de%20Alcoh%C3%B3licos%20An%C3%B3nimos)!5e0!3m2!1ses-419!2smx!4v1744740732748!5m2!1ses-419!2smx',
    imageUrls: [
      'assets/grupos/SomosAmeca/1.jpeg',
      'assets/grupos/SomosAmeca/2.jpeg',
      'assets/grupos/SomosAmeca/3.jpeg',
      'assets/grupos/SomosAmeca/4.jpeg',
    ],
    rutas: [
      { tituloRuta: 'Referencias', descripcion: '' },
    ]
  },
  'coincidir': {
    id: 'coincidir',
    nombre: 'Grupo Coincidir',
    logoSrc: 'assets/grupos/coincidir.png',
    descripcion: 'Grupo de autoayuda AA',
    horarios: 'Lunes a Sábado de 8:00 a 10:00 PM.',
    telefono: '3314161065',
    facebook: 'https://www.facebook.com/profile.php?id=61561069166901',
    instagram: 'https://www.instagram.com/grupocoincidir/?igsh=MWdvcWd1MnJydDBoNA%3D%3D',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3641.9967118482077!2d-110.37588889999999!3d24.1016111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA2JzA1LjgiTiAxMTDCsDIyJzMzLjIiVw!5e0!3m2!1ses!2smx!4v1714769332528!5m2!1ses!2smx',
    imageUrls: [
      'assets/grupos/Coincidir/1.jpeg',
      'assets/grupos/Coincidir/2.jpeg',
      'assets/grupos/Coincidir/3.jpeg',
    ],
    rutas: [
      { tituloRuta: 'Referencias', descripcion: '' },
    ]
  },
  'valor-para-cambiar': {
    id: 'valor-para-cambiar',
    nombre: 'Grupo Valor para Cambiar',
    logoSrc: 'assets/grupos/valorParaCambiar.jpeg',
    descripcion: 'Grupo de autoayuda AA',
    horarios: 'Lunes a viernes de 7:00 a 9:00 PM.',
    telefono: '3323844559',
    instagram: 'https://www.instagram.com/valor.para.cambiarcoda?igsh=MWlnNWsycmd5ZDRybA==',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7468.609619594925!2d-103.389691!3d20.616429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ada76f8cc263%3A0x23b0c4dbef15e62f!2sC.%20Melocot%C3%B3n%203170%2C%2044980%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1746552727093!5m2!1ses-419!2smx',
    imageUrls: [
      'assets/grupos/valorParaCambiar/1.jpeg',
      'assets/grupos/valorParaCambiar/2.jpeg',
      'assets/grupos/valorParaCambiar/3.jpeg',
      'assets/grupos/valorParaCambiar/4.jpeg',
    ],
    rutas: [
      { tituloRuta: 'Referencias', descripcion: '' },
    ]
  },
  'dan': {
    id: 'dan',
    nombre: 'Grupo Despertar al Nucleo',
    logoSrc: 'assets/grupos/al-anon.png',
    descripcion: 'Grupo de Al-Anon',
    horarios: 'Lunes, Miercoles y Viernes de 6:30 pm a 8:30 pm',
    telefono: '3333613699',
    facebook: 'https://www.facebook.com/DANalanon',
    instagram: 'https://www.instagram.com/despertar.al.nucleo/',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.03762832653!2d-103.38704492387004!3d20.668048080892618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af5d436bed71%3A0xd30371fb27b2251f!2sDespertar%20al%20Nucleo%20(Al-Anon)!5e0!3m2!1ses-419!2smx!4v1746549718827!5m2!1ses-419!2smx',
    imageUrls: [
      'assets/grupos/dan/1.webp',
      'assets/grupos/dan/2.webp',
      'assets/grupos/dan/3.webp',
      'assets/grupos/dan/4.webp',
    ],
    rutas: [
      { tituloRuta: 'Ruta 629 via 1 o 2', descripcion: '' },
      { tituloRuta: 'Ruta 622', descripcion: '' },
      { tituloRuta: 'Ruta c109', descripcion: '' },
      { tituloRuta: 'Ruta 51A-51AB', descripcion: '' },
      { tituloRuta: 'Ruta 258', descripcion: '' },
    ]
  },
  'metamorfosis': {
    id: 'metamorfosis',
    nombre: 'Grupo Metamorfosis Alateen',
    logoSrc: 'assets/grupos/alateen.png',
    descripcion: 'Grupo de Alateen',
    horarios: 'Sábado de 1 pm a 3 pm, Domingo de 11 am a 1 pm',
    telefono: '3333613699',
    facebook: 'https://www.facebook.com/metamorfosisalateen',
    instagram: 'https://www.instagram.com/metamorfosis_alateen',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29864.314806206334!2d-103.38443!3d20.667978000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae748602e2af%3A0x2c01ae8253c321d7!2sAv.%20de%20los%20Arcos%20611%2C%20Jardines%20del%20Bosque%2C%2044520%20Guadalajara%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1713213091837!5m2!1ses!2sus',
    imageUrls: [
      'assets/grupos/metamorfosis/1.jpeg',
      'assets/grupos/metamorfosis/2.jpeg',
      'assets/grupos/metamorfosis/3.jpeg',
      'assets/grupos/metamorfosis/4.jpeg',
      'assets/grupos/metamorfosis/5.jpeg',
      'assets/grupos/metamorfosis/6.jpeg',
      'assets/grupos/metamorfosis/7.jpeg',
      'assets/grupos/metamorfosis/8.jpeg',
      'assets/grupos/metamorfosis/9.jpeg',
      'assets/grupos/metamorfosis/10.jpeg',
      'assets/grupos/metamorfosis/11.jpeg',
      'assets/grupos/metamorfosis/12.jpeg',
      'assets/grupos/metamorfosis/13.jpeg',
      'assets/grupos/metamorfosis/14.jpeg',
      'assets/grupos/metamorfosis/15.jpeg',
      'assets/grupos/metamorfosis/16.jpeg',
      'assets/grupos/metamorfosis/17.jpeg',
      'assets/grupos/metamorfosis/18.jpeg',
      'assets/grupos/metamorfosis/19.jpeg',
      'assets/grupos/metamorfosis/20.jpeg',
      'assets/grupos/metamorfosis/21.jpeg',
      'assets/grupos/metamorfosis/22.jpeg',
      'assets/grupos/metamorfosis/23.jpeg',
    ],
    rutas: [
      { tituloRuta: 'Ruta 629 via 1 o 2', descripcion: '' },
      { tituloRuta: 'Ruta 622', descripcion: '' },
      { tituloRuta: 'Ruta c109', descripcion: '' },
      { tituloRuta: 'Ruta 51A-51AB', descripcion: '' },
      { tituloRuta: 'Ruta 258', descripcion: '' },
    ]
  },
  'almanova': {
    id: 'almanova',
    nombre: 'Grupo Alma Nova',
    logoSrc: 'assets/grupos/alma-nova.png',
    descripcion: 'Al-Anon Hijos Adultos',
    horarios: 'Sábado de 1 pm a 3 pm, Domingo de 11 am a 1 pm',
    telefono: '3333613699',
    facebook: 'https://www.facebook.com/profile.php?id=100090134182744',
    instagram: 'https://www.instagram.com/dan_ameca/?igsh=MTRnZzEwZjNxbmF2Zg%3D%3D#',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6377.269520572983!2d-103.38701852300044!3d20.66812178089242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afbe7a2e3177%3A0xb4615004dc44b593!2sAlma%20Nova%20(Al-Anon%20Hijos%20Adultos)!5e1!3m2!1ses-419!2smx!4v1745385148504!5m2!1ses-419!2smx',
    imageUrls: [
      'assets/grupos/dan/1.webp',
      'assets/grupos/dan/2.webp',
      'assets/grupos/dan/3.webp',
      'assets/grupos/dan/4.webp',
    ],
    rutas: [
      { tituloRuta: 'Ruta 629 via 1 o 2', descripcion: '' },
      { tituloRuta: 'Ruta 622', descripcion: '' },
      { tituloRuta: 'Ruta c109', descripcion: '' },
      { tituloRuta: 'Ruta 51A-51AB', descripcion: '' },
      { tituloRuta: 'Ruta 258', descripcion: '' },
    ]
  },
  'dan-ameca': {
    id: 'dan-ameca',
    nombre: 'Grupo Despertar al Nucleo Ameca',
    logoSrc: 'assets/grupos/dan-ameca.png',
    descripcion: 'Grupo de Al-Anon',
    horarios: 'Jueves de 6 PM a 8 PM y Sábados de 5 PM a 7 PM',
    telefono: '3344645748',
    facebook: 'https://www.facebook.com/AlanonAmeca',
    instagram: 'https://www.instagram.com/dan_ameca/?igsh=MTRnZzEwZjNxbmF2Zg%3D%3D#',
    ubicacionMapaSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14943.894307212491!2d-104.042134!3d20.548262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8426764f7dcce3c1%3A0x5a32b2be0f16671b!2sC.%20Guti%C3%A9rrez%2095%2C%20Los%20Naranjos%2C%2046600%20Ameca%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1713214224717!5m2!1ses!2sus',
    imageUrls: [
      'assets/grupos/dan-ameca/6.webp',
      'assets/grupos/dan-ameca/5.jpeg',
      'assets/grupos/dan-ameca/8.webp',
      'assets/grupos/dan-ameca/4.jpeg',
      'assets/grupos/dan-ameca/1.webp',
      'assets/grupos/dan-ameca/2.webp',
      'assets/grupos/dan-ameca/3.webp',
      'assets/grupos/dan-ameca/9.jpeg',
    ],
    rutas: [
    ]
  },
}
