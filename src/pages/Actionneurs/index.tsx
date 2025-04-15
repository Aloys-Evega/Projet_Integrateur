import { ActuatorCard } from "../../components/custom/ActuatorCard.tsx";
import { CheckboxSliderCard } from "../../components/custom/Seuil.tsx";
import { Lightbulb, Fan, Droplets } from "lucide-react";

export default function ActuatorsPage() {
    return (
        <div className="p-6 space-y-6 max-w-5xl mx-auto">
            {/* Titre de la page */}
            <h1 className="text-2xl font-bold mb-4">Gestion des actionneurs ⚙️</h1>

            {/* Section des interrupteurs simples */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ActuatorCard
                    title="Lumière du salon"
                    initialStatus={true}
                    statusText={{ active: "Allumée", inactive: "Éteinte" }}
                    icon={<Lightbulb className="text-yellow-500" />}
                />
                <ActuatorCard
                    title="Ventilateur"
                    initialStatus={false}
                    statusText={{ active: "Activé", inactive: "Désactivé" }}
                    icon={<Fan className="text-blue-500" />}
                />
                <ActuatorCard
                    title="Pompe à eau"
                    initialStatus={false}
                    statusText={{ active: "En marche", inactive: "Arrêtée" }}
                    icon={<Droplets className="text-cyan-500" />}
                />
            </div>

            {/* Section des sliders conditionnels */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CheckboxSliderCard
                    title="Contrôle de température"
                    subtitle="Définir le seuil de déclenchement"
                    defaultChecked={true}
                    defaultValue={[22]}
                />
                <CheckboxSliderCard
                    title="Arrosage automatique"
                    subtitle="Définir le seuil d'humidité"
                    defaultChecked={false}
                    defaultValue={[45]}
                />
                <CheckboxSliderCard
                    title="Régulation de lumière"
                    subtitle="Intensité lumineuse maximale"
                    defaultChecked={true}
                    defaultValue={[75]}
                />
            </div>
        </div>
    );
}
