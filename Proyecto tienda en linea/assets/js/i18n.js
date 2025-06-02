// Configuración de i18n
const i18n = {
    config: {
        defaultLanguage: 'es',
        fallbackLanguage: 'es',
        availableLanguages: ['es', 'en']
    },
    currentLanguage: 'es',
    translations: {
        es: {
            // Meta
            'meta.title': 'SportLoryu\'s - Chaquetas y prendas deportivas urbanas',

            // Header
            'header.logo': 'SportLoryu\'s',
            'header.search': 'Buscar',
            'header.account': 'Mi cuenta',
            'header.wishlist': 'Lista de deseos',
            'header.cart': 'Carrito de compras',
            'header.menu': 'Menú',

            // Navegación
            'nav.home': 'Inicio',
            'nav.categories': 'Categorías',
            'nav.contact': 'Contacto',

            // Categorías
            'categories.women': 'Mujer',
            'categories.men': 'Hombre',
            'categories.unisex': 'Unisex',
            'categories.limited': 'Edición limitada',
            'categories.outlet': 'Outlet',
            'categories.waterproof': 'Impermeable',
            'categories.sport': 'Deportiva',
            'categories.bicolor': 'Bicolor',
            'categories.leather': 'Cuero',
            'categories.denim': 'Denim',
            'categories.bomber': 'Bomber',
            'categories.parka': 'Parka',
            'categories.featured': 'Estilos destacados',
            
            // Hero Section
            'hero.title': 'Descubre la Elegancia en Cada Chaqueta',
            'hero.description': 'Descubre nuestra colección premium de chaquetas con los mejores materiales, diseños únicos y cortes perfectos para cualquier ocasión.',
            'hero.cta': 'Ver Colección',
            'hero.secondary': 'Ofertas especiales',

            // Características
            'features.main_title': 'Nuestras Ventajas',
            'feature.shipping.title': 'Envío Gratis',
            'feature.shipping.desc': 'En compras mayores a $100 enviamos gratis a todo el país.',
            'feature.warranty.title': 'Garantía de 2 Años',
            'feature.warranty.desc': 'Todas nuestras chaquetas incluyen garantía extendida contra defectos.',
            'feature.payment.title': 'Pago Seguro',
            'feature.payment.desc': 'Múltiples métodos de pago con la mayor seguridad.',
            'feature.support.title': 'Soporte 24/7',
            'feature.support.desc': 'Nuestro equipo está siempre disponible para ayudarte.',
            
            // Productos
            'products.featured': 'Productos destacados',
            'products.viewDetails': 'Ver detalles',
            'product.featured': 'Destacado',
            'product.new': 'Nuevo',
            'product.popular': 'Popular',
            'product.classic': 'Clásico',
            'product.wishlist': 'Agregar a favoritos',
            'product.cart': 'Agregar al carrito',
            'product.view': 'Ver detalles',
            'product.price': 'COP {price}',
            'product.aquaguard.name': 'Chaqueta Impermeable AquaGuard',
            'product.flexfit.name': 'Chaqueta Deportiva FlexFit',
            'product.velocity.name': 'Chaqueta Deportiva Bicolor Velocity',
            'product.leather.name': 'Chaqueta de Cuero Clásica',

            // Filtros
            'filters.all': 'Todas',
            'filters.waterproof': 'Impermeable',
            'filters.leather': 'Cuero',
            'filters.winter': 'Invierno',

            // Promociones
            'promo.title': 'Hasta 40% de descuento',
            'promo.subtitle': 'En chaquetas de temporada pasada por tiempo limitado',

            // Sobre Nosotros
            'about.title': 'Sobre Nosotros',
            'about.description': 'En SportLoryu\'s, diseñamos chaquetas y prendas deportivas que fusionan innovación, calidad y estilo urbano. Nos comprometemos a ofrecer productos duraderos y funcionales, fabricados con materiales sostenibles, para acompañar a nuestros clientes en su vida activa.',
            'about.values': 'Nuestros Valores',
            'about.values.quality': 'Calidad sobre cantidad: Prendas pensadas para durar',
            'about.values.urban': 'Conexión urbana: Diseños que reflejan la energía de la ciudad',
            'about.values.sustainability': 'Sostenibilidad: Uso progresivo de materiales reciclados',
            'about.values.customer': 'Enfoque en el cliente: Atención personalizada y envíos',

            // Testimonios
            'testimonials.title': 'Lo que Dicen Nuestros Clientes',
            'testimonial.1.text': '"Como motociclista, necesitaba una chaqueta resistente pero con estilo urbano. La chaqueta de cuero con protecciones discretas de SportLoryu\'s es exactamente lo que buscaba. Excelente calidad y muy buena relación calidad-precio."',
            'testimonial.1.name': 'Roberto Gómez',
            'testimonial.1.role': 'Cliente desde 2021',
            'testimonial.2.text': '"La chaqueta impermeable AquaGuard ha sido mi salvación durante la temporada de lluvias. Es ligera, cómoda y realmente impermeable. Me encanta que puedo usarla tanto para ir al trabajo como para mis caminatas matutinas."',
            'testimonial.2.name': 'María González',
            'testimonial.2.role': 'Cliente desde 2023',
            'testimonial.3.text': '"La chaqueta deportiva FlexFit es perfecta para mis entrenamientos. El material transpirable y elástico me da total libertad de movimiento. Los detalles reflectantes son un plus para mis carreras al amanecer."',
            'testimonial.3.name': 'Diego Morales',
            'testimonial.3.role': 'Cliente desde 2024',
            'testimonial.4.text': '"La chaqueta bicolor Velocity es mi favorita para el día a día. El diseño es moderno y los colores son vibrantes. Me encanta que puedo combinarla con todo y es perfecta para un look casual pero elegante."',
            'testimonial.4.name': 'Daniela Ospina',
            'testimonial.4.role': 'Cliente desde 2023',
            
            // Newsletter
            'newsletter.title': 'Suscríbete a Nuestro Boletín',
            'newsletter.subtitle': 'Recibe ofertas exclusivas y actualizaciones',
            'newsletter.placeholder': 'Tu correo electrónico',
            'newsletter.button': 'Suscribirse',
            
            // Footer
            'footer.about.title': 'SportLoryu\'s',
            'footer.about.description': 'Tu marca de moda deportiva urbana. Diseñamos chaquetas y prendas que fusionan innovación, calidad y estilo urbano con materiales sostenibles.',
            'footer.social.facebook': 'Síguenos en Facebook',
            'footer.social.instagram': 'Síguenos en Instagram',
            'footer.social.twitter': 'Síguenos en Twitter',
            'footer.social.youtube': 'Síguenos en YouTube',
            'footer.links.title': 'Enlaces Útiles',
            'footer.links.about': 'Sobre Nosotros',
            'footer.links.terms': 'Términos y Condiciones',
            'footer.links.privacy': 'Política de Privacidad',
            'footer.links.returns': 'Política de Devoluciones',
            'footer.links.faq': 'Preguntas Frecuentes',
            'footer.categories.title': 'Categorías',
            'footer.contact.title': 'Contacto',
            'footer.contact.address': 'Calle Principal #123, Bogotá, Colombia',
            'footer.contact.phone': '+57 123 456 7890',
            'footer.contact.email': 'info@sportloryus.com',
            'footer.copyright': '© 2024 SportLoryu\'s. Todos los derechos reservados.',

            // Idioma
            'language.change': 'Cambiar idioma',
            'language.current': 'ES',
            'language.spanish': 'Español',
            'language.english': 'English',
            'language.spanish_flag': 'Bandera de España',
            'language.english_flag': 'Bandera de Reino Unido',

            // Guía de tallas
            'size-guide.title': 'Guía de Tallas',
            'size-guide.description': 'En SportLoryu\'s nos preocupamos por ofrecerte el ajuste perfecto. Nuestras chaquetas están diseñadas siguiendo estándares internacionales para garantizar la máxima comodidad y estilo. Te recomendamos consultar nuestra tabla de tallas antes de realizar tu compra:',
            'size-guide.xs': 'Talla XS: Ideal para contorno de pecho 86-91 cm',
            'size-guide.s': 'Talla S: Ideal para contorno de pecho 91-96 cm',
            'size-guide.m': 'Talla M: Ideal para contorno de pecho 96-101 cm',
            'size-guide.l': 'Talla L: Ideal para contorno de pecho 101-106 cm',
            'size-guide.xl': 'Talla XL: Ideal para contorno de pecho 106-111 cm',
            'size-guide.tips.title': 'Consejos para elegir tu talla:',
            'size-guide.tips.1': 'Mide tu contorno de pecho a la altura de las axilas',
            'size-guide.tips.2': 'Si estás entre dos tallas, te recomendamos elegir la talla superior para un ajuste más holgado',
            'size-guide.tips.3': 'Nuestras chaquetas están diseñadas para permitir el uso de capas debajo',
            'size-guide.tips.4': 'Si tienes dudas, nuestro equipo de atención al cliente está disponible para ayudarte',

            // Product Detail
            'product-detail.add-to-cart': 'Añadir al carrito',
            'product-detail.size': 'Talla',
            'product-detail.quantity': 'Cantidad',
            'product-detail.description': 'Descripción',
            'product-detail.features': 'Características',
            'product-detail.reviews': 'Reseñas',
            'product-detail.product-description': 'Descripción del Producto',
            'product-detail.product-description-text': 'La Chaqueta Impermeable "AquaGuard" está diseñada para ofrecerte la máxima protección contra la lluvia y el viento, sin sacrificar el estilo. Fabricada con tejidos técnicos de última generación, garantiza durabilidad y confort en cualquier condición climática. Su diseño ligero y transpirable la hace perfecta para actividades al aire libre o simplemente para el día a día en la ciudad.',
            'product-detail.features-list': [
                'Tejido 100% impermeable y transpirable',
                'Costuras selladas para una protección total',
                'Capucha ajustable con visera',
                'Puños y cintura ajustables para un mejor ajuste',
                'Bolsillos laterales con cremallera protegida'
            ],
            'product-detail.technical-features': 'Características Técnicas',
            'product-detail.technical-features-list': [
                'Material exterior: Nylon Ripstop con revestimiento PU',
                'Impermeabilidad: 10,000 mm',
                'Transpirabilidad: 8,000 g/m²/24h',
                'Forro interior: Malla de poliéster',
                'Cremalleras: YKK impermeables',
                'Peso aproximado: 450 gramos'
            ],
            'product-detail.customer-reviews': 'Reseñas de Clientes',
            'product-detail.review-date': 'Fecha',
            'product-detail.review-rating': 'Calificación',
            'product-detail.review-text': 'Texto de la reseña',
            'product-detail.reviewer-name': 'Nombre del reseñador',
            'product-detail.reviews-count': 'opiniones',
            'product-detail.price': 'COP 400.000',
            'product-detail.description-short': 'Mantente seco y cómodo con nuestra Chaqueta Impermeable "AquaGuard". Ideal para los días de lluvia, con diseño moderno y materiales de alta calidad.',

            // Product Detail - AquaGuard
            'product-detail.aquaguard.title': 'Chaqueta Impermeable "AquaGuard"',
            'product-detail.aquaguard.description': 'La Chaqueta Impermeable "AquaGuard" está diseñada para mantenerte seco en las condiciones más adversas. Con tecnología de membrana impermeable y costuras selladas, esta chaqueta ofrece máxima protección contra la lluvia mientras mantiene la transpirabilidad. Ideal para actividades al aire libre y uso diario en climas lluviosos.',
            'product-detail.aquaguard.price': 'COP 400.000',
            'product-detail.aquaguard.reviews': '32 opiniones',
            'product-detail.aquaguard.features': [
                'Membrana impermeable de alta tecnología',
                'Costuras selladas',
                'Capucha ajustable',
                'Bolsillos con cierre de cremallera',
                'Material transpirable'
            ],
            'product-detail.aquaguard.technical': [
                'Material: 100% Poliéster con revestimiento impermeable',
                'Forro: Malla de poliéster',
                'Corte: Regular',
                'Cuidado: Lavable a máquina'
            ],
            'product-detail.aquaguard.reviewer': [
                {
                    'name': 'Andrés Martínez',
                    'date': '15/02/2024',
                    'text': 'Excelente chaqueta impermeable. La he usado en días de lluvia intensa y me ha mantenido completamente seco. La capucha ajustable es muy práctica y los bolsillos con cremallera mantienen mis pertenencias seguras. El material es ligero pero resistente, perfecto para el clima de Bogotá.'
                },
                {
                    'name': 'Laura Sánchez',
                    'date': '28/03/2024',
                    'text': 'La mejor inversión para la temporada de lluvias. La chaqueta es muy resistente al agua y el diseño es moderno y funcional. Me encanta que sea transpirable, no me siento sofocada como con otras chaquetas impermeables. Los detalles de calidad son evidentes en cada costura.'
                },
                {
                    'name': 'Carlos Ramírez',
                    'date': '10/04/2024',
                    'text': 'Muy buena chaqueta para la lluvia. La he usado en varias tormentas y ha cumplido su función perfectamente. Le quito una estrella porque me hubiera gustado más variedad de colores, pero en cuanto a funcionalidad es excelente. La tecnología impermeable funciona muy bien.'
                },
                {
                    'name': 'María González',
                    'date': '22/04/2024',
                    'text': 'Compré esta chaqueta para mis caminatas matutinas y ha sido una excelente inversión. Me mantiene seca incluso en lluvias fuertes y el material transpirable evita que me sobrecaliente. La capucha ajustable es perfecta para los días ventosos. Muy recomendada para actividades al aire libre.'
                }
            ],

            // Product Detail - Cuero Clásica
            'product-detail.leather.title': 'Chaqueta de Cuero Clásica',
            'product-detail.leather.description': 'Un icono de estilo atemporal. Nuestra Chaqueta de Cuero Clásica está confeccionada con cuero genuino de alta calidad para un look sofisticado y duradero.',
            'product-detail.leather.price': 'COP 450.000',
            'product-detail.leather.reviews': '50 opiniones',
            'product-detail.leather.features': [
                'Cuero genuino de cordero',
                'Diseño clásico y atemporal',
                'Forro interior de satén',
                'Cierre de cremallera frontal',
                'Bolsillos laterales con cremallera'
            ],
            'product-detail.leather.technical': [
                'Material: 100% Cuero de Cordero',
                'Forro: 100% Poliéster (Satén)',
                'Corte: Recto',
                'Cuidado: Limpieza especializada en cuero'
            ],

            // Product Detail - FlexFit
            'product-detail.flexfit.title': 'Chaqueta Deportiva FlexFit',
            'product-detail.flexfit.description': 'Diseñada para el movimiento. Nuestra Chaqueta Deportiva FlexFit combina estilo y funcionalidad con materiales transpirables y un ajuste perfecto.',
            'product-detail.flexfit.price': 'COP 350.000',
            'product-detail.flexfit.reviews': '28 opiniones',
            'product-detail.flexfit.features': [
                'Material transpirable y ligero',
                'Diseño ergonómico',
                'Tecnología de secado rápido',
                'Ajuste personalizado',
                'Bolsillos con cierre de cremallera'
            ],
            'product-detail.flexfit.technical': [
                'Material: 92% Poliéster, 8% Elastano',
                'Forro: Malla de poliéster',
                'Corte: Ajustado',
                'Cuidado: Lavable a máquina'
            ],
            'product-detail.flexfit.description-text': 'La Chaqueta Deportiva "FlexFit" está confeccionada con un tejido elástico y transpirable que se adapta a tus movimientos. Ideal para actividades deportivas o para un look casual y activo. Cuenta con detalles reflectantes para mayor visibilidad en condiciones de poca luz.',
            'product-detail.flexfit.reviewer': [
                {
                    'name': 'Diego Morales',
                    'date': '10/02/2024',
                    'text': 'Increíble libertad de movimiento. Uso esta chaqueta para mis entrenamientos matutinos y es perfecta. El material es ligero pero abriga lo suficiente, y la transpirabilidad es excelente incluso durante ejercicios intensos. Los detalles reflectantes son un plus para correr al amanecer.'
                },
                {
                    'name': 'Valentina Restrepo',
                    'date': '23/03/2024',
                    'text': 'La mejor chaqueta deportiva que he tenido. El diseño ergonómico realmente hace la diferencia cuando estás en movimiento. Me encanta que sea tan versátil, la uso tanto para el gimnasio como para salidas casuales. Los bolsillos con cremallera son muy seguros para guardar las llaves y el celular.'
                },
                {
                    'name': 'Javier Quintero',
                    'date': '05/04/2024',
                    'text': 'Muy buena chaqueta para actividades deportivas. El tejido elástico se adapta perfectamente al cuerpo sin restringir movimientos. Le quito una estrella porque me hubiera gustado más variedad de colores, pero en cuanto a funcionalidad es excelente. La tecnología de absorción de humedad funciona muy bien.'
                },
                {
                    'name': 'Carolina Duque',
                    'date': '19/04/2024',
                    'text': 'Compré esta chaqueta para mis clases de yoga y pilates, y ha sido una excelente inversión. Se estira lo suficiente para no limitar ninguna postura y el material transpirable evita que me sobrecaliente. El cuello alto es perfecto para las mañanas frías. Muy recomendada para cualquier actividad física.'
                }
            ],

            // Product Detail - Velocity
            'product-detail.velocity.title': 'Chaqueta Deportiva Bicolor Velocity',
            'product-detail.velocity.description': 'Destaca con estilo. Nuestra Chaqueta Deportiva Bicolor Velocity combina dos tonos en un diseño moderno y dinámico.',
            'product-detail.velocity.price': 'COP 380.000',
            'product-detail.velocity.reviews': '45 opiniones',
            'product-detail.velocity.features': [
                'Diseño bicolor moderno',
                'Material resistente al agua',
                'Capucha desmontable',
                'Reflectivos para visibilidad',
                'Bolsillos multifunción'
            ],
            'product-detail.velocity.technical': [
                'Material: 100% Poliéster con revestimiento',
                'Forro: Malla de poliéster',
                'Corte: Regular',
                'Cuidado: Lavable a máquina'
            ],
            'product-detail.velocity.description-text': 'La Chaqueta Deportiva Bicolor "Velocity" combina comodidad y estilo con su diseño de bloques de color. Fabricada con materiales ligeros, es ideal para un look casual y deportivo. Cuenta con puños y dobladillo elásticos para un ajuste cómodo.',
            'product-detail.velocity.features': {
                '0': 'Diseño bicolor moderno',
                '1': 'Material resistente al agua',
                '2': 'Capucha desmontable',
                '3': 'Reflectivos para visibilidad',
                '4': 'Bolsillos multifunción'
            },
            'product-detail.velocity.technical': {
                '0': 'Material: 100% Poliéster con revestimiento',
                '1': 'Forro: Malla de poliéster',
                '2': 'Corte: Regular',
                '3': 'Cuidado: Lavable a máquina'
            },
            'product-detail.velocity.reviewer': {
                '0': {
                    'name': 'Miguel Ángel Rodríguez',
                    'date': '12/03/2024',
                    'text': 'El diseño bicolor de esta chaqueta es lo que más me gustó. Llama la atención sin ser demasiado llamativa. La calidad de los materiales es buena y los puños elásticos se ajustan perfectamente. Le doy 4 estrellas porque el tamaño es un poco más grande de lo esperado.'
                },
                '1': {
                    'name': 'Daniela Ospina',
                    'date': '28/03/2024',
                    'text': 'Esta chaqueta es exactamente lo que buscaba. Los colores son vibrantes y la combinación es muy moderna. Me encanta usarla para salir a correr en las mañanas, es ligera pero abrigada. Los bolsillos son espaciosos y la cremallera funciona perfectamente. Definitivamente compraré en otros colores si están disponibles.'
                },
                '2': {
                    'name': 'Santiago Herrera',
                    'date': '10/04/2024',
                    'text': 'Buena relación calidad-precio. La chaqueta es cómoda y el material parece duradero. Los bloques de color le dan un aspecto deportivo y juvenil. El único inconveniente es que el material no es tan transpirable como esperaba para actividades de alta intensidad.'
                },
                '3': {
                    'name': 'Paola Muñoz',
                    'date': '22/04/2024',
                    'text': 'Me encanta el estilo de esta chaqueta, recibo muchos cumplidos cuando la uso. Es perfecta para un look deportivo casual. El dobladillo elástico mantiene la chaqueta en su lugar incluso durante actividades físicas. La recomiendo para quienes buscan algo con estilo pero funcional.'
                }
            }
        },
        en: {
            // Meta
            'meta.title': 'SportLoryu\'s - Urban Sports Jackets and Apparel',

            // Header
            'header.logo': 'SportLoryu\'s',
            'header.search': 'Search',
            'header.account': 'My Account',
            'header.wishlist': 'Wishlist',
            'header.cart': 'Shopping Cart',
            'header.menu': 'Menu',
            
            // Navigation
            'nav.home': 'Home',
            'nav.categories': 'Categories',
            'nav.contact': 'Contact',
            
            // Categories
            'categories.women': 'Women',
            'categories.men': 'Men',
            'categories.unisex': 'Unisex',
            'categories.limited': 'Limited Edition',
            'categories.outlet': 'Outlet',
            'categories.waterproof': 'Waterproof',
            'categories.sport': 'Sport',
            'categories.bicolor': 'Two-Tone',
            'categories.leather': 'Leather',
            'categories.denim': 'Denim',
            'categories.bomber': 'Bomber',
            'categories.parka': 'Parka',
            'categories.featured': 'Featured Styles',
            
            // Hero Section
            'hero.title': 'Discover Elegance in Every Jacket',
            'hero.description': 'Explore our premium collection of jackets with the best materials, unique designs, and perfect cuts for any occasion.',
            'hero.cta': 'View Collection',
            'hero.secondary': 'Special Offers',
            
            // Features
            'features.main_title': 'Our Advantages',
            'feature.shipping.title': 'Free Shipping',
            'feature.shipping.desc': 'Free shipping nationwide on orders over $100.',
            'feature.warranty.title': '2-Year Warranty',
            'feature.warranty.desc': 'All our jackets include extended warranty against defects.',
            'feature.payment.title': 'Secure Payment',
            'feature.payment.desc': 'Multiple payment methods with maximum security.',
            'feature.support.title': '24/7 Support',
            'feature.support.desc': 'Our team is always available to help you.',
            
            // Products
            'products.featured': 'Featured Products',
            'products.viewDetails': 'View Details',
            'product.featured': 'Featured',
            'product.new': 'New',
            'product.popular': 'Popular',
            'product.classic': 'Classic',
            'product.wishlist': 'Add to Wishlist',
            'product.cart': 'Add to Cart',
            'product.view': 'View Details',
            'product.price': 'COP {price}',
            'product.aquaguard.name': 'AquaGuard Waterproof Jacket',
            'product.flexfit.name': 'FlexFit Sport Jacket',
            'product.velocity.name': 'Velocity Two-Tone Sport Jacket',
            'product.leather.name': 'Classic Leather Jacket',

            // Filters
            'filters.all': 'All',
            'filters.waterproof': 'Waterproof',
            'filters.leather': 'Leather',
            'filters.winter': 'Winter',

            // Promotions
            'promo.title': 'Up to 40% Off',
            'promo.subtitle': 'On last season\'s jackets for a limited time',

            // About Us
            'about.title': 'About Us',
            'about.description': 'At SportLoryu\'s, we design jackets and sports apparel that blend innovation, quality, and urban style. We are committed to offering durable and functional products, made with sustainable materials, to accompany our customers in their active lifestyle.',
            'about.values': 'Our Values',
            'about.values.quality': 'Quality over quantity: Garments designed to last',
            'about.values.urban': 'Urban connection: Designs that reflect city energy',
            'about.values.sustainability': 'Sustainability: Progressive use of recycled materials',
            'about.values.customer': 'Customer focus: Personalized attention and shipping',
            
            // Testimonials
            'testimonials.title': 'What Our Customers Say',
            'testimonial.1.text': 'As a motorcyclist, I needed a durable yet urban-styled jacket. The leather jacket with discrete protections from SportLoryu\'s is exactly what I was looking for. Excellent quality and great value for money.',
            'testimonial.1.name': 'Robert Gomez',
            'testimonial.1.role': 'Customer since 2021',
            
            // Newsletter
            'newsletter.title': 'Subscribe to Our Newsletter',
            'newsletter.subtitle': 'Receive exclusive offers and updates',
            'newsletter.placeholder': 'Your email address',
            'newsletter.button': 'Subscribe',
            
            // Footer
            'footer.about.title': 'SportLoryu\'s',
            'footer.about.description': 'Your urban sports fashion brand. We design jackets and apparel that blend innovation, quality, and urban style with sustainable materials.',
            'footer.social.facebook': 'Follow us on Facebook',
            'footer.social.instagram': 'Follow us on Instagram',
            'footer.social.twitter': 'Follow us on Twitter',
            'footer.social.youtube': 'Follow us on YouTube',
            'footer.links.title': 'Useful Links',
            'footer.links.about': 'About Us',
            'footer.links.terms': 'Terms and Conditions',
            'footer.links.privacy': 'Privacy Policy',
            'footer.links.returns': 'Returns Policy',
            'footer.links.faq': 'FAQ',
            'footer.categories.title': 'Categories',
            'footer.contact.title': 'Contact',
            'footer.contact.address': 'Main Street #123, Bogota, Colombia',
            'footer.contact.phone': '+57 123 456 7890',
            'footer.contact.email': 'info@sportloryus.com',
            'footer.copyright': '© 2024 SportLoryu\'s. All rights reserved.',

            // Idioma
            'language.change': 'Change language',
            'language.current': 'EN',
            'language.spanish': 'Spanish',
            'language.english': 'English',
            'language.spanish_flag': 'Spanish Flag',
            'language.english_flag': 'British Flag',

            // Guía de tallas
            'size-guide.title': 'Size Guide',
            'size-guide.description': 'At SportLoryu\'s, we care about providing you with the perfect fit. Our jackets are designed following international standards to ensure maximum comfort and style. We recommend checking our size chart before making your purchase:',
            'size-guide.xs': 'Size XS: Ideal for chest circumference 86-91 cm',
            'size-guide.s': 'Size S: Ideal for chest circumference 91-96 cm',
            'size-guide.m': 'Size M: Ideal for chest circumference 96-101 cm',
            'size-guide.l': 'Size L: Ideal for chest circumference 101-106 cm',
            'size-guide.xl': 'Size XL: Ideal for chest circumference 106-111 cm',
            'size-guide.tips.title': 'Tips for choosing your size:',
            'size-guide.tips.1': 'Measure your chest circumference at armpit level',
            'size-guide.tips.2': 'If you\'re between sizes, we recommend choosing the larger size for a looser fit',
            'size-guide.tips.3': 'Our jackets are designed to allow layering underneath',
            'size-guide.tips.4': 'If you have any doubts, our customer service team is available to help you',

            // Product Detail
            'product-detail.add-to-cart': 'Add to Cart',
            'product-detail.size': 'Size',
            'product-detail.quantity': 'Quantity',
            'product-detail.description': 'Description',
            'product-detail.features': 'Features',
            'product-detail.reviews': 'Reviews',
            'product-detail.product-description': 'Product Description',
            'product-detail.product-description-text': 'The "AquaGuard" Waterproof Jacket is designed to provide maximum protection against rain and wind without sacrificing style. Made with state-of-the-art technical fabrics, it guarantees durability and comfort in any weather condition. Its lightweight and breathable design makes it perfect for outdoor activities or simply for everyday city life.',
            'product-detail.features-list': [
                '100% waterproof and breathable fabric',
                'Sealed seams for total protection',
                'Adjustable hood with visor',
                'Adjustable cuffs and waist for better fit',
                'Side pockets with protected zipper'
            ],
            'product-detail.technical-features': 'Technical Features',
            'product-detail.technical-features-list': [
                'Outer material: PU-coated Nylon Ripstop',
                'Waterproof rating: 10,000 mm',
                'Breathability: 8,000 g/m²/24h',
                'Inner lining: Polyester mesh',
                'Zippers: YKK waterproof',
                'Approximate weight: 450 grams'
            ],
            'product-detail.customer-reviews': 'Customer Reviews',
            'product-detail.review-date': 'Date',
            'product-detail.review-rating': 'Rating',
            'product-detail.review-text': 'Review text',
            'product-detail.reviewer-name': 'Reviewer name',
            'product-detail.reviews-count': 'reviews',
            'product-detail.price': 'COP 400,000',
            'product-detail.description-short': 'Stay dry and comfortable with our "AquaGuard" Waterproof Jacket. Perfect for rainy days, with modern design and high-quality materials.',

            // Product Detail - AquaGuard
            'product-detail.aquaguard.title': 'AquaGuard Waterproof Jacket',
            'product-detail.aquaguard.description': 'The "AquaGuard" Waterproof Jacket is designed to keep you dry in the most adverse conditions. With waterproof membrane technology and sealed seams, this jacket offers maximum protection against rain while maintaining breathability. Perfect for outdoor activities and daily use in rainy climates.',
            'product-detail.aquaguard.price': 'COP 400,000',
            'product-detail.aquaguard.reviews': '32 reviews',
            'product-detail.aquaguard.features': [
                'High-tech waterproof membrane',
                'Sealed seams',
                'Adjustable hood',
                'Zippered pockets',
                'Breathable material'
            ],
            'product-detail.aquaguard.technical': [
                'Material: 100% Polyester with waterproof coating',
                'Lining: Polyester mesh',
                'Cut: Regular',
                'Care: Machine washable'
            ],
            'product-detail.aquaguard.reviewer': [
                {
                    'name': 'Andrés Martínez',
                    'date': '02/15/2024',
                    'text': 'Excellent waterproof jacket. I\'ve used it in heavy rain days and it has kept me completely dry. The adjustable hood is very practical and the zippered pockets keep my belongings safe. The material is light but resistant, perfect for Bogotá\'s weather.'
                },
                {
                    'name': 'Laura Sánchez',
                    'date': '03/28/2024',
                    'text': 'The best investment for the rainy season. The jacket is very water resistant and the design is modern and functional. I love that it\'s breathable, I don\'t feel suffocated like with other waterproof jackets. The quality details are evident in every seam.'
                },
                {
                    'name': 'Carlos Ramírez',
                    'date': '04/10/2024',
                    'text': 'Very good jacket for rain. I\'ve used it in several storms and it has performed its function perfectly. I take off one star because I would have liked more color variety, but in terms of functionality it's excellent. The waterproof technology works very well.'
                },
                {
                    'name': 'María González',
                    'date': '04/22/2024',
                    'text': 'I bought this jacket for my morning walks and it has been an excellent investment. It keeps me dry even in heavy rain and the breathable material prevents overheating. The adjustable hood is perfect for windy days. Highly recommended for outdoor activities.'
                }
            ],

            // Product Detail - Cuero Clásica
            'product-detail.leather.title': 'Classic Leather Jacket',
            'product-detail.leather.description': 'A timeless style icon. Our Classic Leather Jacket is crafted from genuine high-quality leather for a sophisticated and durable look.',
            'product-detail.leather.price': 'COP 450,000',
            'product-detail.leather.reviews': '50 reviews',
            'product-detail.leather.features': [
                'Genuine lamb leather',
                'Classic and timeless design',
                'Satin inner lining',
                'Front zipper closure',
                'Side zippered pockets'
            ],
            'product-detail.leather.technical': [
                'Material: 100% Lamb Leather',
                'Lining: 100% Polyester (Satin)',
                'Fit: Regular',
                'Care: Specialized leather cleaning'
            ],

            // Product Detail - FlexFit
            'product-detail.flexfit.title': 'FlexFit Sport Jacket',
            'product-detail.flexfit.description': 'Designed for movement. Our FlexFit Sport Jacket combines style and functionality with breathable materials and perfect fit.',
            'product-detail.flexfit.price': 'COP 350,000',
            'product-detail.flexfit.reviews': '28 reviews',
            'product-detail.flexfit.features': [
                'Breathable and lightweight material',
                'Ergonomic design',
                'Quick-dry technology',
                'Custom fit',
                'Zippered pockets'
            ],
            'product-detail.flexfit.technical': [
                'Material: 92% Polyester, 8% Elastane',
                'Lining: Polyester mesh',
                'Cut: Fitted',
                'Care: Machine washable'
            ],
            'product-detail.flexfit.description-text': 'The "FlexFit" Sports Jacket is made with an elastic and breathable fabric that adapts to your movements. Perfect for sports activities or for a casual and active look. Features reflective details for better visibility in low light conditions.',
            'product-detail.flexfit.reviewer': [
                {
                    'name': 'Diego Morales',
                    'date': '02/10/2024',
                    'text': 'Incredible freedom of movement. I use this jacket for my morning workouts and it's perfect. The material is light but warm enough, and the breathability is excellent even during intense exercise. The reflective details are a plus for running at dawn.'
                },
                {
                    'name': 'Valentina Restrepo',
                    'date': '03/23/2024',
                    'text': 'The best sports jacket I've ever had. The ergonomic design really makes a difference when you're moving. I love that it's so versatile, I use it both for the gym and casual outings. The zippered pockets are very secure for storing keys and phone.'
                },
                {
                    'name': 'Javier Quintero',
                    'date': '04/05/2024',
                    'text': 'Very good jacket for sports activities. The elastic fabric fits perfectly to the body without restricting movement. I take off one star because I would have liked more color variety, but in terms of functionality it's excellent. The moisture absorption technology works very well.'
                },
                {
                    'name': 'Carolina Duque',
                    'date': '04/19/2024',
                    'text': 'I bought this jacket for my yoga and pilates classes, and it has been an excellent investment. It stretches enough to not limit any pose and the breathable material prevents overheating. The high collar is perfect for cold mornings. Highly recommended for any physical activity.'
                }
            ],

            // Product Detail - Velocity
            'product-detail.velocity.title': 'Velocity Two-Tone Sport Jacket',
            'product-detail.velocity.description': 'Stand out with style. Our Velocity Two-Tone Sport Jacket combines two colors in a modern and dynamic design.',
            'product-detail.velocity.price': 'COP 380,000',
            'product-detail.velocity.reviews': '45 reviews',
            'product-detail.velocity.features': [
                'Modern two-tone design',
                'Water-resistant material',
                'Detachable hood',
                'Reflective elements for visibility',
                'Multi-functional pockets'
            ],
            'product-detail.velocity.technical': [
                'Material: 100% Polyester with coating',
                'Lining: Polyester mesh',
                'Cut: Regular',
                'Care: Machine washable'
            ],
            'product-detail.velocity.description-text': 'The Bicolor Velocity Sports Jacket combines comfort and style with its color block design. Made with lightweight materials, it's perfect for a casual and sporty look. Features elastic cuffs and hem for a comfortable fit.',
            'product-detail.velocity.features': {
                '0': 'Modern bicolor design',
                '1': 'Water-resistant material',
                '2': 'Detachable hood',
                '3': 'Reflective elements for visibility',
                '4': 'Multi-functional pockets'
            },
            'product-detail.velocity.technical': {
                '0': 'Material: 100% Polyester with coating',
                '1': 'Lining: Polyester mesh',
                '2': 'Cut: Regular',
                '3': 'Care: Machine washable'
            },
            'product-detail.velocity.reviewer': {
                '0': {
                    'name': 'Miguel Ángel Rodríguez',
                    'date': '03/12/2024',
                    'text': 'The bicolor design of this jacket is what I liked the most. It stands out without being too flashy. The material quality is good and the elastic cuffs fit perfectly. I give it 4 stars because the size is a bit larger than expected.'
                },
                '1': {
                    'name': 'Daniela Ospina',
                    'date': '03/28/2024',
                    'text': 'This jacket is exactly what I was looking for. The colors are vibrant and the combination is very modern. I love wearing it for morning runs, it's light but warm. The pockets are spacious and the zipper works perfectly. I'll definitely buy it in other colors if available.'
                },
                '2': {
                    'name': 'Santiago Herrera',
                    'date': '04/10/2024',
                    'text': 'Good value for money. The jacket is comfortable and the material seems durable. The color blocks give it a sporty and youthful look. The only downside is that the material isn't as breathable as I expected for high-intensity activities.'
                },
                '3': {
                    'name': 'Paola Muñoz',
                    'date': '04/22/2024',
                    'text': 'I love the style of this jacket, I receive many compliments when I wear it. It's perfect for a casual sporty look. The elastic hem keeps the jacket in place even during physical activities. I recommend it for those looking for something stylish but functional.'
                }
            }
        }
    },

    init() {
        console.log('Inicializando i18n');
        this.loadSavedLanguage();
        this.applyTranslations();
        document.dispatchEvent(new CustomEvent('i18n:ready'));
    },

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferred_language');
        if (savedLang && this.config.availableLanguages.includes(savedLang)) {
            this.currentLanguage = savedLang;
        } else {
            const browserLang = navigator.language.split('-')[0];
            this.currentLanguage = this.config.availableLanguages.includes(browserLang) 
                ? browserLang 
                : this.config.defaultLanguage;
        }
        console.log('Idioma cargado:', this.currentLanguage);
    },

    changeLanguage(lang) {
        if (!this.config.availableLanguages.includes(lang)) {
            console.warn('Idioma no disponible:', lang);
            return;
        }
        
        console.log('Cambiando idioma a:', lang);
        this.currentLanguage = lang;
        localStorage.setItem('preferred_language', lang);
        
        // Aplicar traducciones inmediatamente
        this.applyTranslations();
        
        // Disparar evento de cambio de idioma
        document.dispatchEvent(new CustomEvent('i18n:changed', {
            detail: { language: lang }
        }));
    },

    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        console.log('Aplicando traducciones a', elements.length, 'elementos');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (!translation) {
                console.warn('Traducción no encontrada para:', key);
                return;
            }

            // Manejar diferentes tipos de elementos
            if (element.tagName === 'INPUT') {
                if (element.type === 'text' || element.type === 'email') {
                    element.placeholder = translation;
                }
            } else if (element.tagName === 'IMG') {
                element.alt = translation;
            } else if (element.hasAttribute('data-i18n-options')) {
                try {
                    const options = JSON.parse(element.getAttribute('data-i18n-options'));
                    element.textContent = this.interpolate(translation, options);
                } catch (error) {
                    console.error('Error al procesar opciones de traducción:', error);
                    element.textContent = translation;
                }
            } else {
                element.textContent = translation;
            }
        });
    },

    getTranslation(key) {
        const translation = this.translations[this.currentLanguage][key];
        if (!translation) {
            console.warn('Traducción no encontrada:', key, 'en idioma:', this.currentLanguage);
            return key;
        }
        return translation;
    },

    interpolate(text, options) {
        return text.replace(/\{(\w+)\}/g, (match, key) => {
            return options[key] || match;
        });
    }
};

// Inicializar i18n cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

// Exportar para uso global
window.i18n = i18n;
