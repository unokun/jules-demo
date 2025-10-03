'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface AgeData {
  name: string;
  value: number;
}

export const AgeChart = ({ data }: { data: AgeData[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>年齢層</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value: number) => `${value.toLocaleString()}人`} />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" name="人数" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};