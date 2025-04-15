import { Card } from "../ui/card";
import { useState } from "react";

interface ActuatorCardProps {
    title: string;
    initialStatus: boolean;
    statusText: {
        active: string;
        inactive: string;
    };
    icon?: React.ReactNode;
}

export const ActuatorCard = ({ title, initialStatus, statusText, icon }: ActuatorCardProps) => {
    const [isActive, setIsActive] = useState(initialStatus);

    const toggleState = () => setIsActive(!isActive);

    return (
        <Card
            onClick={toggleState}
            className="w-auto h-60 rounded-2xl bg-background border border-border flex flex-col justify-center items-center shadow-md cursor-pointer hover:shadow-lg transition"
        >
            <div className="w-auto h-auto rounded-full flex items-center justify-center transition-colors duration-300 p-10"
                 style={{
                     backgroundColor: isActive ? "#22c55e" : "#ef4444" // vert ou rouge
                 }}
            >
                {icon}
            </div>
            <p className="mt-4 text-sm font-medium text-center text-muted-foreground">
                {title}
            </p>
            <p className={`text-xs mt-1 font-semibold ${isActive ? "text-green-600" : "text-red-600"}`}>
                {isActive ? statusText.active : statusText.inactive}
            </p>
        </Card>
    );
};
