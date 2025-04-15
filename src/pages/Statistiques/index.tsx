import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar,
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";

const temperatureData = [
    { day: 'Lun', temp: 20 },
    { day: 'Mar', temp: 22 },
    { day: 'Mer', temp: 19 },
    { day: 'Jeu', temp: 24 },
    { day: 'Ven', temp: 21 },
    { day: 'Sam', temp: 23 },
    { day: 'Dim', temp: 20 },
];

const humidityData = [
    { day: 'Lun', humidity: 60 },
    { day: 'Mar', humidity: 65 },
    { day: 'Mer', humidity: 55 },
    { day: 'Jeu', humidity: 70 },
    { day: 'Ven', humidity: 62 },
    { day: 'Sam', humidity: 68 },
    { day: 'Dim', humidity: 64 },
];

export default function StatisticsPage() {
    return (
        <div className="p-6 space-y-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Statistiques 📈</h1>

            {/* Température - Line Chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Température de la semaine 🌡</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={temperatureData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis unit="°C" />
                            <Tooltip />
                            <Line type="monotone" dataKey="temp" stroke="#4f46e5" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Température - Line Chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Taux de luminosité</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={temperatureData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis unit="°C" />
                            <Tooltip />
                            <Line type="monotone" dataKey="temp" stroke="#4f46e5" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Humidité - Bar Chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Taux d'humidité </CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={humidityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis unit="%" />
                            <Tooltip />
                            <Bar dataKey="humidity" fill="#0ea5e9" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>



            {/* Humidité - Bar Chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Taux de CO2</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={humidityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis unit="%" />
                            <Tooltip />
                            <Bar dataKey="humidity" fill="#0ea5e9" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}
