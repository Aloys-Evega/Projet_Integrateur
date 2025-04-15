import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Search, RefreshCw, Download } from "lucide-react";

// Données d'exemple pour l'historique
const historyData = [
    {
        id: 1,
        action: "Arrosage",
        name: "Zone 1",
        role: "Système",
        startDate: "2023-05-15 08:30",
        duration: "2h 15min",
        status: "Terminé"
    },
    {
        id: 2,
        action: "Fertilisation",
        name: "Serre principale",
        role: "Utilisateur",
        startDate: "2023-05-14 14:00",
        duration: "45min",
        status: "Échoué"
    },
    {
        id: 3,
        action: "Surveillance",
        name: "Capteur Température",
        role: "Automatique",
        startDate: "2023-05-14 10:15",
        duration: "6h 30min",
        status: "Terminé"
    },
    {
        id: 4,
        action: "Alarme",
        name: "Système sécurité",
        role: "Automatique",
        startDate: "2023-05-13 22:45",
        duration: "12min",
        status: "Terminé"
    },
];

export function HistoryPage() {
    return (
        <div className="p-4 md:p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Historique des activités</h1>
                    <p className="text-sm text-gray-500">
                        Consultation des actions passées sur le système
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Rechercher..."
                            className="pl-9 w-full md:w-[300px]"
                        />
                    </div>
                    <Button variant="outline">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Actualiser
                    </Button>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Exporter
                    </Button>
                </div>
            </div>

            {/* Tableau d'historique */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Action</TableHead>
                            <TableHead>Nom</TableHead>
                            <TableHead>Rôle</TableHead>
                            <TableHead>Date de début</TableHead>
                            <TableHead>Durée</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
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
                                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === "Terminé"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                  }`}>
                    {item.status}
                  </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">
                                        Détails
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                    Affichage de 1 à {historyData.length} sur {historyData.length} entrées
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" disabled>
                        Précédent
                    </Button>
                    <Button variant="outline">
                        Suivant
                    </Button>
                </div>
            </div>
        </div>
    );
}