// src/pages/HomePage.tsx

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {Link} from "react-router-dom";

const Navbar = () => {
    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="w-full px-6 py-4 bg-background border-b border-border flex justify-between items-center shadow-sm fixed top-0 z-50">
            <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollTo("home")}>
                <Link to="/dashboard">AgriDash</Link>
            </h1>
            <div className="flex space-x-4">
                {["Accueil", "Infos", "Contact"].map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollTo(item.toLowerCase())}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
            <Navbar />

            {/* Section 1 */}
            <section
                id="accueil"
                className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 pt-32 pb-20"
            >
                <img
                    src="/smartfarm.png"
                    alt="Smart Farm"
                    className="w-full max-w-md md:max-w-sm rounded-xl shadow-lg"
                />
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-4xl font-bold">Bienvenue sur SmartFarm 🌾</h2>
                    <p className="text-muted-foreground text-lg">
                        Gérez capteurs, actionneurs et surveillez votre champ en temps réel.
                    </p>
                    <Button>Commencer</Button>
                </div>
            </section>

            {/* Section 2 */}
            <section id="infos" className="text-center py-20 px-6 bg-muted">
                <h2 className="text-3xl font-bold mb-4">
                    Pourquoi choisir SmartFarm ?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Une solution simple, efficace et innovante pour une agriculture moderne connectée.
                </p>
            </section>

            {/* Section 3 */}
            <section id="contact" className="py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Contactez-nous 📬
                </h2>
                <form className="max-w-xl mx-auto space-y-4">
                    <Input placeholder="Nom" />
                    <Input placeholder="Email" type="email" />
                    <Textarea placeholder="Votre message..." />
                    <Button type="submit" className="w-full">Envoyer</Button>
                </form>
            </section>
        </div>
    );
}
