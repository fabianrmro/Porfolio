document.addEventListener("DOMContentLoaded", () => {
    // Language Toggle
    const languageToggle = document.getElementById("languageToggle");
    const introText = document.getElementById("intro-text");
    const introTitle = document.querySelector(".intro-title");

    const spanishText = {
        introTitle: "¡Hola! 👋",
        introText: "soy Fabián Romero 👋 Developer Full Stack Developer Full Stack profesional, con una sólida formación en desarrollo web y móvil, especializado en JavaScript, React y Node.js. Después de varios años en el sector inmobiliario y en academias de inglés, decidí dar un giro a mi carrera para seguir mi verdadera pasión por la tecnología. Tengo estudios universitarios y una formación intensiva en ISDI Coders, una de las academias más reconocidas de España. En mi trabajo, me muevo cómodamente tanto en el frontend como en el backend, con experiencia en tecnologías como JavaScript, React, HTML, CSS, TailwindCSS, Node.js, Express y MongoDB. Me encanta resolver problemas y escribir código limpio y eficiente. Soy un firme creyente en los principios AGILE y en el valor de las pruebas automatizadas para asegurar la calidad del desarrollo. Soy autodidacta y resolutivo, y disfruto colaborando en equipo, siempre buscando nuevos retos y oportunidades para crear soluciones innovadoras con un enfoque minimalista y funcional..",
    };

    const englishText = {
        introTitle: "Hello! 👀",
        introText: "I am Fabián Romero 👋 Full Stack Developer Professional Full Stack Developer, with a solid background in web and mobile development, specialized in JavaScript, React and Node.js. After several years in the real estate sector and in English academies, I decided to change my career to follow my true passion for technology. I have university studies and intensive training at ISDI Coders, one of the most recognized academies in Spain. In my work, I move comfortably in both the frontend and backend, with experience in technologies such as JavaScript, React, HTML, CSS, TailwindCSS, Node.js, Express and MongoDB. I love solving problems and writing clean, efficient code. I am a firm believer in AGILE principles and the value of automated testing to ensure development quality. I am self-taught and decisive, and I enjoy collaborating as a team, always looking for new challenges and opportunities to create innovative solutions with a minimalist and functional approach.",
    };

    let isEnglish = false;

    languageToggle.addEventListener("click", () => {
        isEnglish = !isEnglish;
        if (isEnglish) {
            introTitle.textContent = englishText.introTitle;
            introText.textContent = englishText.introText;
        } else {
            introTitle.textContent = spanishText.introTitle;
            introText.textContent = spanishText.introText;
        }
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Set initial language
    introTitle.textContent = spanishText.introTitle;
    introText.textContent = spanishText.introText;
});
