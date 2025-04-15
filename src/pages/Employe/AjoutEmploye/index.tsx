import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";

export default function AjouterEmploye() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const requiredFields = form.querySelectorAll("[required]") as NodeListOf<HTMLInputElement | HTMLSelectElement>;

        let isValid = true;
        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("border-red-500");
            } else {
                field.classList.remove("border-red-500");
            }
        });

        if (!isValid) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        // Logique d'envoi des données ici
        console.log("Formulaire validé ✅");
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Ajouter un nouvel Agriculteur</h1>
                <p className="text-sm text-muted-foreground">
                    Remplissez le formulaire pour enregistrer un nouvel agriculteur dans le système d'Agriculture Intelligente.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div >
                        <Label htmlFor="nom">Nom *</Label>
                        <Input id="nom" name="nom"  className="mt-1" required />
                    </div>

                    <div>
                        <Label htmlFor="prenom">Prénom *</Label>
                        <Input id="prenom" name="prenom" className="mt-1" required />
                    </div>

                    <div>
                        <Label htmlFor="date-naissance">Date de naissance</Label>
                        <Input id="date-naissance" name="date-naissance" type="date" className="mt-1" />
                    </div>

                    <div>
                        <Label htmlFor="genre" className="mb-1">Genre</Label>
                        <Select name="genre" >
                            <SelectTrigger id="genre">
                                <SelectValue placeholder="Sélectionner..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="homme">Homme</SelectItem>
                                <SelectItem value="femme">Femme</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="col-span-full mt-4">
                        <h3 className="text-base font-semibold">Informations de contact</h3>
                    </div>

                    <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" className="mt-1" required />
                    </div>

                    <div>
                        <Label htmlFor="telephone">Téléphone</Label>
                        <Input id="telephone" name="telephone" type="tel" className="mt-1" />
                    </div>

                    <div className="col-span-full">
                        <Label htmlFor="adresse">Adresse</Label>
                        <Input id="adresse" name="adresse" className="mt-1" />
                    </div>

                    <div className="col-span-full mt-4">
                        <h3 className="text-base font-semibold">Informations professionnelles</h3>
                    </div>

                    <div>
                        <Label htmlFor="date-embauche">Date d'embauche *</Label>
                        <Input id="date-embauche" name="date-embauche" type="date"  className="mt-1" required />
                    </div>

                    <div>
                        <Label htmlFor="salaire">Salaire (Franc CFA)</Label>
                        <Input id="salaire" name="salaire" type="number" min="0" step="100" className="mt-1" />
                    </div>

                    <div className="col-span-full">
                        <Label htmlFor="notes">Notes supplémentaires</Label>
                        <Textarea id="notes" name="notes" className="mt-1" />
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    <Button type="reset" variant="secondary">Annuler</Button>
                    <Button type="submit">Enregistrer l'employé</Button>
                </div>
            </form>
        </div>
    );
}
