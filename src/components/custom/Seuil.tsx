import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card.tsx";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";
import { useState } from "react";

interface CheckboxSliderCardProps {
    title: string;
    subtitle: string;
    defaultChecked?: boolean;
    defaultValue?: number[];
}

export function CheckboxSliderCard({
                                       title,
                                       subtitle,
                                       defaultChecked = false,
                                       defaultValue = [50]
                                   }: CheckboxSliderCardProps) {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const [sliderValue, setSliderValue] = useState(defaultValue);

    return (
        <Card className="p-6 w-full max-w-[350px]">
            <CardHeader className="p-0 mb-6">
                <CardTitle className="text-lg font-medium">{title}</CardTitle>
                <CardDescription className="text-sm">{subtitle}</CardDescription>
            </CardHeader>

            <div className="space-y-6">
                {/* Section Checkbox */}
                <div className="flex items-center space-x-3">
                    <Checkbox
                        id={`checkbox-${title}`}
                        checked={isChecked}
                        onCheckedChange={(checked) => setIsChecked(!!checked)}
                        className="h-5 w-5 rounded data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor={`checkbox-${title}`} className="text-sm font-medium">
                        Activer la fonctionnalité
                    </Label>
                </div>

                {/* Section Slider (conditionnelle) */}
                {isChecked && (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label htmlFor={`slider-${title}`} className="text-sm">
                                Intensité: {sliderValue[0]}%
                            </Label>
                        </div>
                        <Slider
                            id={`slider-${title}`}
                            defaultValue={sliderValue}
                            max={100}
                            step={1}
                            onValueChange={setSliderValue}
                            disabled={!isChecked}
                            className="cursor-pointer data-[disabled]:cursor-not-allowed"
                        />
                    </div>
                )}
            </div>
        </Card>
    );
}

// Exemple d'utilisation
export default function Example() {
    return (
        <div className="p-8 flex justify-center">
            <CheckboxSliderCard
                title="Contrôle de luminosité"
                subtitle="Ajustez l'intensité lumineuse"
                defaultChecked={true}
                defaultValue={[75]}
            />
        </div>
    );
}