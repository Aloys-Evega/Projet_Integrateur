import { Button } from "../ui/button";
import { LayoutDashboard, Settings, Users, ChevronDown, Menu, User } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { cn } from "../../lib/utils";
import {Link} from "react-router-dom";

export function Sidebar() {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const toggleMenu = (key: string) => {
        setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const MenuItem = ({
                          icon: Icon,
                          label,
                          menuKey,
                          children
                      }: {
        icon: React.ComponentType<{ className?: string }>;
        label: string;
        menuKey: string;
        children?: React.ReactNode;
    }) => (
        <div>
            <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => toggleMenu(menuKey)}
            >
                <Icon className="mr-2 h-4 w-4" />
                {label}
                <ChevronDown
                    className={cn("ml-auto h-4 w-4 transition-transform", {
                        "rotate-180": openMenus[menuKey],
                    })}
                />
            </Button>
            {openMenus[menuKey] && (
                <div className="pl-6 mt-1 text-sm text-gray-600 space-y-1">
                    {children}
                </div>
            )}
        </div>
    );

    const SidebarContent = () => (
        <div className="w-64 bg-white h-full p-4 border-r shadow-sm space-y-4">
            <h1 className="text-xl font-bold mb-6">AgriDash</h1>

            <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <Link to="/dashboard">Dashboard</Link>
            </Button>

            <MenuItem
                icon={Users}
                label="Employé"
                menuKey="users"
            >
                <p className="cursor-pointer hover:text-black">
                    <Link to="/gestionemploye" className="block cursor-pointer hover:text-black">
                         Gestion des Employés
                    </Link>
                </p>
                <p className="cursor-pointer hover:text-black">
                    <Link to="/ajouteremploye">

                        Ajout des employés
                    </Link>
                </p>
            </MenuItem>

            <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                <Link to="/sign-in">Connexion</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                <Link to="/history">Employe</Link>
            </Button>

        </div>
    );

    return (
        <>
            {/* Version desktop */}
            <div className="hidden md:block">
                <SidebarContent />
            </div>

            {/* Version mobile */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="fixed top-4 left-4 z-50">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-64">
                        <SidebarContent />
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}