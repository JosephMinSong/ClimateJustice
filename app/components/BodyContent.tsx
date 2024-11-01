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
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-8 items-center">
          <div className="border rounded-lg p-8 flex justify-center items-center h-64">
          <img src="/screenshots/confusion_matrix.jpg" alt="Additional Data" className="w-3/4 object-cover h-full rounded-lg" />
          </div>
          <div>
            <p className="text-neutral-800">
              This is a representation using a confusion matrix that attempts to predict the probability of a heatwave on any given day. You can see that our model correctly predicts 179 true positives and 523 true negatives. Our model is very good at identifying class 0, but there is room for improvement in class 1.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-neutral-800">
              We modeled a graph for a short time period between 7-1-2024 and 7-7-2024. This Heat Probability Line Graph shows a consistent increase during this period. This suggests a near-certain heatwave in early July.
            </p>
          </div>
          <div className="border rounded-lg p-8 flex justify-center items-center h-64">
          <img src="/screenshots/heatwave_probability_forecast.jpg" alt="Additional Data" className="w-3/4 object-cover h-full rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-8 items-center">
          <div className="border rounded-lg p-8 flex justify-center items-center h-64">
          <img src="/screenshots/heatwaves_by_month.jpg" alt="Additional Data" className="w-3/4 object-cover h-full rounded-lg" />
          </div>
          <div>
            <p className="text-neutral-800">
              This visualization helps us to quickly identify which summer months are most prone to heatwaves, allowing us to prioritize and tailor our public health campaigns accordingly. For example, we could focus more intensive heat safety messaging during months with a higher percentage of heatwaves.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="w-1/2 border rounded-lg p-8 flex justify-center items-center h-64">
          <img src="/screenshots/heatwave_analysis.jpg" alt="Additional Data" className="w-3/4 object-cover h-full rounded-lg" />
          </div>
        </div>
    </section>
    );
};

