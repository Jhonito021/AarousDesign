// script.js - Version avec envoi WhatsApp après formulaire

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== GÉNÉRATION DU CONTENU ==========
    
    // Générer les statistiques du hero
    const heroStats = document.getElementById('heroStats');
    if (heroStats && siteData.stats) {
        siteData.stats.forEach(stat => {
            const statDiv = document.createElement('div');
            statDiv.className = 'stat';
            statDiv.innerHTML = `
                <i class="${stat.icon}"></i>
                <span class="stat-number">${stat.number}</span>
                <span>${stat.label}</span>
            `;
            heroStats.appendChild(statDiv);
        });
    }

    // Générer les concepts
    const conceptsGrid = document.getElementById('conceptsGrid');
    if (conceptsGrid && siteData.concepts) {
        siteData.concepts.forEach(concept => {
            const card = document.createElement('div');
            card.className = `concept-card ${concept.colorClass}`;
            card.innerHTML = `
                <div class="concept-image">
                    <img src="${concept.image}" alt="${concept.title}">
                </div>
                <div class="concept-icon-wrapper">
                    <i class="${concept.icon}"></i>
                </div>
                <div class="concept-badge">${concept.badge}</div>
                <h3>${concept.title}</h3>
                <p class="concept-subtitle">${concept.subtitle}</p>
                <div class="concept-divider"></div>
                <p class="concept-description">${concept.description}</p>
                <div class="concept-tags">
                    ${concept.tags.map(tag => `<span><i class="${tag.icon}"></i> ${tag.text}</span>`).join('')}
                </div>
            `;
            conceptsGrid.appendChild(card);
        });
    }

    // Générer l'art & dessin
    const artGrid = document.getElementById('artGrid');
    if (artGrid && siteData.artItems) {
        siteData.artItems.forEach(art => {
            const card = document.createElement('div');
            card.className = 'art-card card';
            card.innerHTML = `
                <div class="card-icon"><i class="${art.icon}"></i></div>
                <h3>${art.title}</h3>
                <p>${art.description}</p>
            `;
            artGrid.appendChild(card);
        });
    }

    // Générer les cartes customisation
    const customShowcase = document.getElementById('customShowcase');
    if (customShowcase && siteData.customCards) {
        siteData.customCards.forEach(card => {
            const customCard = document.createElement('div');
            customCard.className = 'custom-card';
            customCard.innerHTML = `
                <i class="${card.icon} custom-icon"></i>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <div class="tag"><i class="${card.tag.icon}"></i> ${card.tag.text}</div>
            `;
            customShowcase.appendChild(customCard);
        });
    }

    // Générer la galerie customisation
    const customGallery = document.getElementById('customGallery');
    if (customGallery && siteData.customGallery) {
        siteData.customGallery.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'photo-item';
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <span>${item.title}</span>
            `;
            customGallery.appendChild(galleryItem);
        });
    }

    // Générer les cartes art digital
    const digitalFlex = document.getElementById('digitalFlex');
    if (digitalFlex && siteData.digitalCards) {
        siteData.digitalCards.forEach(card => {
            const digitalCard = document.createElement('div');
            digitalCard.className = 'digital-card';
            digitalCard.innerHTML = `
                <i class="${card.icon} digital-badge"></i>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <div class="tech-stack"><i class="fas fa-brush"></i> ${card.tech}</div>
            `;
            digitalFlex.appendChild(digitalCard);
        });
    }

    // Générer la galerie art digital
    const digitalGallery = document.getElementById('digitalGallery');
    if (digitalGallery && siteData.digitalGallery) {
        siteData.digitalGallery.forEach(item => {
            const photoCard = document.createElement('div');
            photoCard.className = 'digital-photo-card';
            photoCard.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h4>${item.title}</h4>
            `;
            digitalGallery.appendChild(photoCard);
        });
    }

    // Générer la section 3 mots
    const threeWordsWrapper = document.getElementById('threeWordsWrapper');
    if (threeWordsWrapper && siteData.threeWords) {
        threeWordsWrapper.innerHTML = `
            <div class="three-words-text">
                <i class="fas fa-quote-right"></i>
                <h3>Inspiration du moment</h3>
                <div class="words-demo">
                    ${siteData.threeWords.words.map((word, i) => {
                        if (i < siteData.threeWords.words.length - 1) {
                            return `<span class="word">${word}</span><span class="word-plus">+</span>`;
                        }
                        return `<span class="word">${word}</span>`;
                    }).join('')}
                </div>
                <p>${siteData.threeWords.description}</p>
                <a href="#contact" class="btn btn-outline small">${siteData.threeWords.cta} →</a>
            </div>
            <div class="three-words-visual">
                <i class="fas fa-palette"></i>
                <i class="fas fa-feather"></i>
                <i class="fas fa-moon"></i>
            </div>
        `;
    }

    // Générer les contacts
    const contactList = document.getElementById('contactList');
    if (contactList && siteData.contactInfo) {
        siteData.contactInfo.forEach(contact => {
            const contactDiv = document.createElement('div');
            contactDiv.innerHTML = `<i class="${contact.icon}"></i> ${contact.text}`;
            contactList.appendChild(contactDiv);
        });
    }

    // Générer les liens sociaux footer
    const footerSocial = document.getElementById('footerSocial');
    if (footerSocial && siteData.socialLinks) {
        siteData.socialLinks.forEach(social => {
            const link = document.createElement('a');
            link.href = social.url;
            link.innerHTML = `<i class="${social.icon}"></i>`;
            footerSocial.appendChild(link);
        });
    }

    // ========== BOUTON WHATSAPP FLOTTANT PERMANENT ==========
    const whatsappFloat = document.createElement('div');
    whatsappFloat.className = 'whatsapp-float';
    whatsappFloat.innerHTML = `<a href="https://wa.me/${siteData.whatsappNumber}?text=Bonjour%20Aarou's%20Design%2C%20je%20suis%20intéressé%20par%20vos%20services%20!" target="_blank"><i class="fab fa-whatsapp"></i></a>`;
    document.body.appendChild(whatsappFloat);

    // ========== FONCTION POUR ENVOYER SUR WHATSAPP ==========
    function sendToWhatsApp(formData) {
        const phoneNumber = siteData.whatsappNumber;
        
        let projectTypeLabel = "";
        switch(formData.projectType) {
            case 'art': projectTypeLabel = "🎨 Art & Dessin"; break;
            case 'custom': projectTypeLabel = "👟 Customisation"; break;
            case 'digital': projectTypeLabel = "💻 Art Digital / 3D"; break;
            case 'concept': projectTypeLabel = "✨ Concept 3 mots"; break;
            default: projectTypeLabel = formData.projectType;
        }
        
        const message = `🔔 *NOUVELLE INSPIRATION - AAROU'S DESIGN* 🔔
        
📝 *Nom* : ${formData.name}
📧 *Email* : ${formData.email}
📱 *Téléphone* : ${formData.phone || "Non renseigné"}
🎯 *Projet* : ${projectTypeLabel}
💬 *Message* : 
${formData.message}

---
✨ Envoyé depuis le site Aarou's Design ✨`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    }

    // ========== GESTION DU FORMULAIRE ==========
    const contactForm = document.getElementById('creativeForm');
    const feedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone')?.value.trim() || '';
            const message = document.getElementById('message').value.trim();
            const projectType = document.getElementById('projectType').value;
            
            if (!name || !email || !message) {
                feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> Merci de remplir tous les champs obligatoires.';
                feedback.style.color = '#f78ca2';
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                feedback.innerHTML = '<i class="fas fa-envelope"></i> Email invalide.';
                feedback.style.color = '#f78ca2';
                return;
            }
            
            // Préparer les données du formulaire
            const formData = {
                name: name,
                email: email,
                phone: phone,
                projectType: projectType,
                message: message
            };
            
            // Message de confirmation
            let confirmationMessage = '';
            if (projectType === 'concept') {
                confirmationMessage = '✨ Magnifique choix ! Vos 3 mots vont devenir une illustration unique. ✨';
            } else {
                confirmationMessage = 'Merci ' + name + ' ! Votre inspiration a été envoyée. 🎨';
            }
            
            feedback.innerHTML = '<i class="fas fa-check-circle"></i> ' + confirmationMessage;
            feedback.style.color = '#9eff9e';
            
            // Afficher une popup pour proposer d'envoyer sur WhatsApp
            const popup = document.createElement('div');
            popup.className = 'whatsapp-popup';
            popup.innerHTML = `
                <i class="fab fa-whatsapp"></i>
                <span>Envoyer directement sur WhatsApp ?</span>
                <i class="fas fa-chevron-right"></i>
            `;
            
            popup.addEventListener('click', () => {
                sendToWhatsApp(formData);
                popup.remove();
            });
            
            document.body.appendChild(popup);
            
            // Disparaît après 8 secondes
            setTimeout(() => {
                if (popup.parentNode) popup.remove();
            }, 8000);
            
            // Optionnel : aussi envoyer une copie dans la console
            console.log('Formulaire soumis :', formData);
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Effacer le message après 5 secondes
            setTimeout(() => {
                if (feedback.innerHTML.includes('Merci') || feedback.innerHTML.includes('Magnifique')) {
                    feedback.innerHTML = '';
                }
            }, 5000);
        });
    }

    // ========== INTERACTIVITÉ NAVIGATION ==========
    
    // Menu burger
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fermer menu au clic sur lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger?.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Navigation active au scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveSection() {
        let current = '';
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Appliquer animations
    document.querySelectorAll('.card, .custom-card, .digital-card, .contact-form, .contact-info, .concept-card, .photo-item, .digital-photo-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Effet sur les statistiques
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            stat.style.transform = 'scale(1.03)';
            stat.style.transition = '0.2s';
        });
        stat.addEventListener('mouseleave', () => {
            stat.style.transform = 'scale(1)';
        });
    });

    // Console welcome
    console.log("%c✨ Aarou's Design ✨ | Envoyez vos inspirations directement sur WhatsApp", "color: #25D366; font-size: 16px; font-family: monospace;");
    console.log("%cFormulaire + WhatsApp intégré | Data centralisée", "color: #b77eff; font-size: 12px");
});