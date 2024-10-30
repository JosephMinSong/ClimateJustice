import LineChart from "./graphs/LineChart";

export default function BodyContent() {
  return (
    <section className="mx-auto my-16 max-w-5xl px-4">
      <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-8 items-center">
        <div className="border rounded-lg p-8 flex justify-center items-center h-64">
          <LineChart />
        </div>
        <div>
          <p className="text-neutral-800">
            2021 saw an unprecedented heat wave - something Seattle has little experience with managing. The city saw record breaking
            numbers, both in temperature readings and number of heat-related emergencies. June 26 - 28 set the records for the hottest temperatures
            ever in the City of Seattle and the most consecutive days over 100 degrees. It also set the record for most number of 
            Seattle Fire responses. 380 dispatched calls on June 27 and 563 on June 28. There were 118 calls due to heat-related emergencies. 
          </p>
        </div>
      </div>
    </section>
  );
}
