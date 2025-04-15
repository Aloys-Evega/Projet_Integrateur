import { Droplet, Fan, Sun } from "lucide-react";

export const cardData = [
    {
        title: 'Dashboard',
        subtitle: 'dashboard',
        value : 80,
        color : 'green-200',
    },

    {
        title: 'Dashboard',
        subtitle: 'dashboard',
        value : 80,
        color : 'green-200',
    },

    {
        title: 'Dashboard',
        subtitle: 'dashboard',
        value : 80,
        color : 'green-200',
    },

    {
        title: 'Dashboard',
        subtitle: 'dashboard',
        value : 80,
        color : 'green-200',
    },
]


export const actuatorsData = [
    {
        id: 1,
        title: "Système d'Arrosage",
        initialStatus: true,
        statusText: { active: "En marche", inactive: "Arrêté" },
        icon: <Droplet className="h-5 w-5 text-primary" />
    },
    {
        id: 2,
        title: "Ventilation",
        initialStatus: false,
        statusText: { active: "Active", inactive: "Inactive" },
        icon: <Fan className="h-5 w-5 text-primary" />
    },
    {
        id: 3,
        title: "Éclairage",
        initialStatus: false,
        statusText: { active: "Allumé", inactive: "Éteint" },
        icon: <Sun className="h-5 w-5 text-primary" />
    },
];

export const usersData = [
    {
        action: "Allumage de la lampe",
        name: "Essomba Evega",
        role: "Administrateur",
        date: "25 mai 2023",
        time: "14:55"
    },

    {action: "Eteignage de l'ampoule",
        name: "Moubeb Jean désiré",
        role: "Agriculteur",
        date: "30 mai 2023",
        time: "09:33"
    },

    {
        action: "Allumage des ventilateurs",
        name: "Moussima Felixia",
        role: "Agricultrice",
        date: "15 avril 2023",
        time: "10:48"
    }
];