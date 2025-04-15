import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card.tsx";

interface ProgressCardProps {
    title: string;
    subtitle: string;
    value: number;
    color?: string;
}

export default function ProgressCard({ title, subtitle, value, color = "primary" }: ProgressCardProps) {
    return (
        <Card className="p-6">
            <CardHeader className="p-0 mb-6">
                <CardTitle className="text-lg font-medium">{title}</CardTitle>
                <CardDescription className="text-sm">{subtitle}</CardDescription>
            </CardHeader>

            <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className={`text-${color}`}
                        strokeWidth="8"
                        strokeDasharray={2 * Math.PI * 40}
                        strokeDashoffset={2 * Math.PI * 40 * (1 - value / 100)}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                    />
                </svg>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-2xl font-bold">{value}%</span>
                </div>
            </div>
        </Card>
    );
}