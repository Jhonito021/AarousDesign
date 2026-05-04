// data.js - Toutes les données du site Aarou's Design

const siteData = {
    // Numéro WhatsApp pour les messages directs
    whatsappNumber: "383886912", // Numéro français sans le +
    // Statistiques du hero
    stats: [
        { icon: "fas fa-dragon", number: "+120", label: "projets artistiques" },
        { icon: "fas fa-tshirt", number: "+45", label: "pièces customisées" },
        { icon: "fas fa-gamepad", number: "+30", label: "assets 3D / jeux" }
    ],

    // 4 concepts principaux
    concepts: [
        {
            id: 1,
            title: "Tout est fait à la main",
            subtitle: "Par des artistes talentueux",
            description: "Chaque pièce est unique, façonnée avec passion par nos artisans d'art. Du coup de pinceau initial à la finition méticuleuse, l'authenticité artisanale est au cœur de notre démarche.",
            icon: "fas fa-hands",
            badge: "Concept 01",
            image: "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=400",
            tags: [
                { icon: "fas fa-paintbrush-fine", text: "100% artisanal" },
                { icon: "fas fa-heart", text: "pièce unique" }
            ],
            colorClass: "concept-card-1"
        },
        {
            id: 2,
            title: "C'est vous l'artiste",
            subtitle: "Custom original et unique",
            description: "Nous fournissons la toile, vous apportez l'âme. Ateliers participatifs, co-création ou simple guidage — devenez le maître d'œuvre de votre style.",
            icon: "fas fa-user-astronaut",
            badge: "Concept 02",
            image: "https://images.pexels.com/photos/4498096/pexels-photo-4498096.jpeg?auto=compress&cs=tinysrgb&w=400",
            tags: [
                { icon: "fas fa-palette", text: "atelier créatif" },
                { icon: "fas fa-spray-can", text: "DIY accompagné" }
            ],
            colorClass: "concept-card-2"
        },
        {
            id: 3,
            title: "3 mots, 1 illustration",
            subtitle: "L'essence capturée en image",
            description: "Confiez-nous trois mots qui vous définissent. Nos illustrateurs les transforment en une œuvre visuelle unique, reflet de votre personnalité.",
            icon: "fas fa-comment-dots",
            badge: "Concept 03",
            image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
            tags: [
                { icon: "fas fa-magic", text: "transformation poétique" },
                { icon: "fas fa-image", text: "illustration sur mesure" }
            ],
            colorClass: "concept-card-3"
        },
        {
            id: 4,
            title: "Soyez vous-même",
            subtitle: "Dans vos propres vêtements",
            description: "Votre garde-robe, votre histoire. Nous customisons vos propres vêtements pour qu'ils deviennent l'expression la plus fidèle de qui vous êtes.",
            icon: "fas fa-smile-wink",
            badge: "Concept 04",
            image: "assets/img/painting3.jpg",
            tags: [
                { icon: "fas fa-tshirt", text: "upcycling personnel" },
                { icon: "fas fa-leaf", text: "mode responsable" }
            ],
            colorClass: "concept-card-4"
        }
    ],

    // Art & Dessin
    artItems: [
        {
            icon: "fas fa-feather-alt",
            title: "Illustration narrative",
            description: "Création d'univers graphiques, personnages et planches aux traits vivants."
        },
        {
            icon: "fas fa-watercolor",
            title: "Techniques mixtes",
            description: "Encre, aquarelle, crayon — des œuvres uniques qui racontent des émotions."
        },
        {
            icon: "fas fa-draw-polygon",
            title: "Croquis & carnet",
            description: "Recherches gestuelles, storyboards et carnets de voyage artistiques."
        }
    ],

    // Customisation - cartes principales
    customCards: [
        {
            icon: "fas fa-shoe-prints",
            title: "Sneakers unique",
            description: "Peinture textile, motifs psychédéliques, pop art ou style brut — sur vos baskets ou nos paires blanches.",
            tag: { icon: "fas fa-palette", text: "100% main" }
        },
        {
            icon: "fas fa-vest",
            title: "Vêtements upcyclés",
            description: "Jean customisé, sweat patchwork, broderies & sérigraphie artisanale.",
            tag: { icon: "fas fa-scissors", text: "unique piece" }
        },
        {
            icon: "fas fa-gem",
            title: "Accessoires",
            description: "Sac, casquettes, étuis à lunettes custom — détails qui font la différence.",
            tag: { icon: "fas fa-star-of-life", text: "limited drop" }
        }
    ],

    // Galerie photos customisation
    customGallery: [
        { image: "assets/img/painting1.jpg" },
        { image: "assets/img/vetements5.jpg"},
        { image: "assets/img/painting3.jpg" },
        { image: "assets/img/vetements4.jpg" },
        { image: "assets/img/painting2.jpg" },
        { image: "assets/img/vetements1.jpg" },
        { image: "assets/img/painting7.jpg" },
        { image: "assets/img/vetements2.jpg" },
        { image: "assets/img/painting9.jpg" },
        { image: "assets/img/vetements3.jpg" },
        { image: "assets/img/painting11.jpg" }
    ],

    // Art Digital - cartes principales
    digitalCards: [
        {
            icon: "fas fa-tablet-alt",
            title: "Digital Painting",
            description: "Illustrations hyperréalistes, environnement concept art, character design. Réalisé sur Photoshop & Procreate.",
            tech: "Procreate · PS"
        },
        {
            icon: "fas fa-cube",
            title: "Modélisation 3D",
            description: "Personnages, props, assets low-poly / stylisé. Préparation pour Unity, Unreal et impressions 3D.",
            tech: "Blender · ZBrush"
        },
        {
            icon: "fas fa-gamepad",
            title: "Jeux vidéo assets",
            description: "Environnements, UI icons, textures PBR — intégration fluide dans vos projets vidéoludiques.",
            tech: "Unity · Marmoset"
        }
    ],

    // Galerie Art Digital
    digitalGallery: [
        { image: "assets/img/painting2.jpg", title: "Digital Painting" },
        { image: "assets/img/painting5.jpg", title: "Modélisation 3D" },
        { image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Game Assets" }
    ],

    // 3 mots - démonstration
    threeWords: {
        words: ["LIBERTÉ", "COULEUR", "RÊVE"],
        description: "Trois mots. Une illustration unique créée par nos artistes.",
        cta: "Tenter l'expérience →"
    },

    // Contact informations
    contactInfo: [
        { icon: "fab fa-instagram", text: "@aarous.design" },
        { icon: "fas fa-envelope", text: "contact@aarousdesign.com" },
        { icon: "fas fa-mobile-alt", text: "+261 38 38 869 12" }
    ],

    // Réseaux sociaux footer
    socialLinks: [
        { icon: "fab fa-behance", url: "#" },
        { icon: "fab fa-instagram", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" },
        { icon: "fab fa-tiktok", url: "#" }
    ]
};