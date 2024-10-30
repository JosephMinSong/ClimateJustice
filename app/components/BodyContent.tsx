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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue
            dui a tellus volutpat, sit amet vulputate nibh placerat. Vestibulum
            finibus iaculis lacus, vitae aliquam magna auctor ac. In porta quis
            ligula a laoreet...
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue
            dui a tellus volutpat, sit amet vulputate nibh placerat. Vestibulum
            finibus iaculis lacus, vitae aliquam magna auctor ac...
          </p>
        </div>
        <div className="border rounded-lg p-8 flex justify-center items-center h-64">
          <p className="text-gray-500">Population Data Image</p>
        </div>
      </div>
    </section>
  );
}
