import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface LocationData {
  name: string;
  value: number;
}

export const LocationList = ({ data }: { data: LocationData[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>居住地</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {data.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span className="font-semibold">{item.value.toLocaleString()}人</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};