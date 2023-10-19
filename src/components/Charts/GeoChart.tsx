import React, { useEffect } from "react";
import { Chart } from "react-chartjs-2";
// import Chart from "chart.js/auto";
import { Feature, FeatureCollection, Geometry } from "geojson";
import { feature } from "topojson";

// import { feature } from "topojson";

const GeoChart = () => {
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    if (!canvas) return;

    fetch("https://unpkg.com/us-atlas/states-10m.json")
      .then((r) => r.json())
      .then((us) => {
        console.log(us.objects);

        const nation: Array<Feature<Geometry | null>> = (
          feature(us, us.objects.nation) as unknown as FeatureCollection
        ).features;
        console.log("hello", nation);

        const state: Array<Feature<Geometry | null>> = (
          feature(us, us.objects.states) as unknown as FeatureCollection
        ).features;
        console.log("yes", state);

        const chart = new (Chart as any)((canvas as any).getContext("2d"), {
          type: "choropleth",
          data: {
            labels: state.map((d) => d.properties.name),
            datasets: [
              {
                label: "States",
                outline: nation,
                data: state.map((d) => ({
                  feature: d,
                  value: Math.random() * 10,
                })),
              },
            ],
          },
          options: {
            legend: {
              display: false,
            },
            scale: {
              projection: "albersUsa",
            },
            geo: {
              colorScale: {
                display: true,
                position: "bottom",
                quantize: 5,
                legend: {
                  position: "bottom-right",
                },
              },
            },
          },
        });
      });
  });

  return (
    <div>
      <canvas id="canvas">hii</canvas>
    </div>
  );
};

export default GeoChart;
function getContext(arg0: string): any {
  throw new Error("Function not implemented.");
}
