import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { cardData, actuatorsData } from "../../data/dashboardData";
import ProgressCard from "../../components/custom/ProgressionCard";
import { ActuatorCard } from "../../components/custom/ActuatorCard";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

// Données d'exemple pour l'historique
const historyData = [
    {
        id: 1,
        action: "Arrosage",
        name: "Zone 1",
        role: "Système",
        startDate: "2023-05-15 08:30",
        duration: "2h 15min"
    },
    {
        id: 2,
        action: "Fertilisation",
        name: "Serre principale",
        role: "Utilisateur",
        startDate: "2023-05-14 14:00",
        duration: "45min"
    },
    {
        id: 3,
        action: "Surveillance",
        name: "Capteur Température",
        role: "Automatique",
        startDate: "2023-05-14 10:15",
        duration: "6h 30min"
    },
    {
        id: 4,
        action: "Alarme",
        name: "Système sécurité",
        role: "Automatique",
        startDate: "2023-05-13 22:45",
        duration: "12min"
    },
];

export default function DashboardPage() {
    return (
        <>
            {/* Header intégré dans le dashboard */}
            <header className="flex justify-between items-center border-b pb-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Tableau de bord</h1>
                    <p className="text-sm text-gray-500">Aperçu de votre activité</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline">Exporter</Button>
                    <Avatar>
                        <AvatarImage src="/avatar.png" />
                        <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                </div>
            </header>

            {/* Section des cartes */}
            <section className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cardData.map((card, index) => (
                        <ProgressCard
                            key={index}
                            title={card.title}
                            subtitle={card.subtitle}
                            value={card.value}
                            color={card.color}
                        />
                    ))}
                </div>
            </section>

            {/* Section des actionneurs */}
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Actionneurs</h2>
                    <Button variant="ghost">Voir tout</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {actuatorsData.map((actuator) => (
                        <ActuatorCard
                            key={actuator.id}
                            title={actuator.title}
                            initialStatus={actuator.initialStatus}
                            statusText={actuator.statusText}
                            icon={actuator.icon}
                        />
                    ))}
                </div>
            </section>

            {/* Nouvelle section Historique */}
            <section>
                <div className="rounded-lg border shadow-sm">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-lg font-semibold">Historique</h3>
                        <div className="flex gap-2">
                            <Button variant="ghost">
                                Actualiser
                            </Button>
                            <Button variant="secondary">
                                Voir les détails
                            </Button>
                        </div>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Action</TableHead>
                                <TableHead>Nom</TableHead>
                                <TableHead>Rôle</TableHead>
                                <TableHead>Date de début</TableHead>
                                <TableHead>Durée</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {historyData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.action}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.role}</TableCell>
                                    <TableCell>{item.startDate}</TableCell>
                                    <TableCell>{item.duration}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    );
}