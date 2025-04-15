import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../../../components/ui/select";
import { Card } from "../../../components/ui/card";
import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const employees = [
    {
        name: "Essomba Evega Aloys",
        email: "aloys.essomba@2028.ucac-icam.com",
        role: "Administrateur",
        hireDate: "15/03/2020",
    },
    {
        name: "Essomba Evega Aloys",
        email: "aloys.essomba@2028.ucac-icam.com",
        role: "Administrateur",
        hireDate: "22/06/2018",
    },
    {
        name: "Essomba Evega Aloys",
        email: "aloys.essomba@2028.ucac-icam.com",
        role: "Administrateur",
        hireDate: "05/01/2021",
    },
    {
        name: "Essomba Evega Aloys",
        email: "aloys.essomba@2028.ucac-icam.com",
        role: "Agriculteur",
        hireDate: "10/09/2019",
    },
    {
        name: "Essomba Evega Aloys",
        email: "aloys.essomba@2028.ucac-icam.com",
        role: "Agriculteur",
        hireDate: "18/11/2022",
    },
];

export default function EmployeeManagement() {
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    const filteredEmployees = employees.filter((emp) => {
        const matchesSearch = `${emp.name} ${emp.email}`.toLowerCase().includes(search.toLowerCase());
        const matchesRole = roleFilter ? emp.role === roleFilter : true;
        return matchesSearch && matchesRole;
    });

    return (
        <div className="max-w-7xl mx-auto p-4 space-y-4">
            <div>
                <h1 className="text-2xl font-semibold">Liste des Employés</h1>
                <p className="text-muted-foreground">Gérez et consultez les informations de vos employés</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative w-full md:w-1/2">
                    <Input
                        placeholder="Rechercher un employé..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex gap-4 items-center">
                    <Select onValueChange={(val) => setRoleFilter(val)}>
                        <SelectTrigger className="w-48">
                            {roleFilter || "Tous les Rôles"}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">Tous les Rôles</SelectItem>
                            <SelectItem value="Administrateur">Administrateur</SelectItem>
                            <SelectItem value="Agriculteur">Agriculteur</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button><Link to="/ajouteremploye">Ajouter</Link></Button>
                </div>
            </div>

            <Card className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-muted">
                    <tr>
                        <th className="text-left px-4 py-3">Nom</th>
                        <th className="text-left px-4 py-3">Rôle</th>
                        <th className="text-left px-4 py-3">Date d'embauche</th>
                        <th className="text-left px-4 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredEmployees.map((emp, idx) => (
                        <tr key={idx} className="border-t">
                            <td className="px-4 py-3">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                                        {emp.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                                    </div>
                                    <div>
                                        <div className="font-medium">{emp.name}</div>
                                        <div className="text-muted-foreground text-xs">{emp.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-3">{emp.role}</td>
                            <td className="px-4 py-3">{emp.hireDate}</td>
                            <td className="px-4 py-3">
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">✏️</Button>
                                    <Button variant="outline" size="sm">🗑️</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center border-t px-4 py-3 text-sm text-muted-foreground">
                    <span>Affichage de 1 à 5 sur 42 employés</span>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>
                            Précédent
                        </Button>
                        <Button variant="outline" size="sm">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">Suivant</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
