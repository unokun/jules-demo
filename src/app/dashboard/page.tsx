import { GenderChart } from '@/components/gender-chart';
import { AgeChart } from '@/components/age-chart';
import { LocationList } from '@/components/location-list';
import { genderData, ageData, locationData } from '@/lib/data';

export default function DashboardPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1 className="text-2xl font-bold mb-8">User Demographics Dashboard</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-1">
          <GenderChart data={genderData} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <AgeChart data={ageData} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <LocationList data={locationData} />
        </div>
      </div>
    </main>
  );
}