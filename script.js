particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            }
        }
    },
    "retina_detect": true
});

const questions = [
    {
        question: "Préférez-vous configurer un réseau ou développer une application ?",
        options: ["Configurer un réseau", "Développer une application"],
        reponses: ["SISR", "SLAM"]
    },
    {
        question: "Êtes-vous plus intéressé par la sécurité des systèmes ou la création d'interfaces utilisateur ?",
        options: ["Sécurité des systèmes", "Création d'interfaces utilisateur"],
        reponses: ["SISR", "SLAM"]
    },
    {
        question: "Aimez-vous résoudre des problèmes liés aux infrastructures ou concevoir des solutions logicielles ?",
        options: ["Résoudre des problèmes liés aux infrastructures", "Concevoir des solutions logicielles"],
        reponses: ["SISR", "SLAM"]
    },
    // Ajout de nouvelles questions
    {
        question: "Préférez-vous gérer des serveurs ou coder des algorithmes complexes ?",
        options: ["Gérer des serveurs", "Coder des algorithmes complexes"],
        reponses: ["SISR", "SLAM"]
    },
    {
        question: "Vous sentez-vous plus à l'aise avec le matériel réseau ou les bases de données ?",
        options: ["Matériel réseau", "Bases de données"],
        reponses: ["SISR", "SLAM"]
    },
    {
        question: "Est-ce que la virtualisation ou le développement web vous intéresse davantage ?",
        options: ["Virtualisation", "Développement web"],
        reponses: ["SISR", "SLAM"]
    },
    {
        question: "Préférez-vous diagnostiquer des pannes réseau ou tester des fonctionnalités logicielles ?",
        options: ["Diagnostiquer des pannes réseau", "Tester des fonctionnalités logicielles"],
        reponses: ["SISR", "SLAM"]
    },
    {
        question: "Aimeriez-vous superviser des systèmes informatiques ou concevoir une application mobile ?",
        options: ["Superviser des systèmes informatiques", "Concevoir une application mobile"],
        reponses: ["SISR", "SLAM"]
    },
    {
        question: "Vous préférez configurer des pare-feu ou développer des APIs ?",
        options: ["Configurer des pare-feu", "Développer des APIs"],
        reponses: ["SISR", "SLAM"]
    },
    {
        question: "Est-ce que travailler sur la sécurité réseau ou l'intelligence artificielle vous attire le plus ?",
        options: ["Sécurité réseau", "Intelligence artificielle"],
        reponses: ["SISR", "SLAM"]
    }
];

let questionIndex = 0;
let scoreSISR = 0;
let scoreSLAM = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const suivantButton = document.getElementById("suivant");
const resultatElement = document.getElementById("resultat");
const profilElement = document.getElementById("profil");
const liensResultatElement = document.getElementById("liens-resultat");
const recommencerButton = document.getElementById("recommencer");
const demarrerButton = document.getElementById("demarrer");
const quizElement = document.getElementById("quiz");
const progressBar = document.getElementById("progress-bar");

demarrerButton.addEventListener("click", demarrerQuiz);

function demarrerQuiz() {
    demarrerButton.style.display = "none";
    quizElement.style.display = "block";
    afficherQuestion();
}

function afficherQuestion() {
    const questionActuelle = questions[questionIndex];
    questionElement.textContent = questionActuelle.question;
    optionsElement.innerHTML = "";
    questionActuelle.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => choisirReponse(index));
        optionsElement.appendChild(button);
    });
    mettreAJourProgression();
}

function choisirReponse(index) {
    const questionActuelle = questions[questionIndex];
    if (questionActuelle.reponses[index] === "SISR") {
        scoreSISR++;
    } else {
        scoreSLAM++;
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        afficherQuestion();
    } else {
        afficherResultat();
    }
}

function afficherResultat() {
    quizElement.style.display = "none";
    resultatElement.style.display = "block";
    if (scoreSISR > scoreSLAM) {
        profilElement.textContent = "Votre profil correspond davantage à l'option SISR.";
        liensResultatElement.innerHTML = `<a href='https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-a-solutions-d-infrastructure-systemes-et-reseaux' target='_blank'>En savoir plus sur l'option SISR</a>`;
    } else if (scoreSLAM > scoreSISR) {
        profilElement.textContent = "Votre profil correspond davantage à l'option SLAM.";
        liensResultatElement.innerHTML = `<a href='https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers' target='_blank'>En savoir plus sur l'option SLAM</a>`;
    } else {
        profilElement.textContent = "Votre profil est équilibré entre les deux options.";
        liensResultatElement.innerHTML = `Vous pouvez explorer les deux options :
            <ul>
                <li><a href='https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-a-solutions-d-infrastructure-systemes-et-reseaux' target='_blank'>Option SISR</a></li>
                <li><a href='https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers' target='_blank'>Option SLAM</a></li>
            </ul>`;
    }
}

function mettreAJourProgression() {
    const progression = ((questionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progression + "%";
}

recommencerButton.addEventListener("click", () => {
    questionIndex = 0;
    scoreSISR = 0;
    scoreSLAM = 0;
    resultatElement.style.display = "none";
    demarrerButton.style.display = "block";
    progressBar.style.width = "0%";
});
