import React from "react";
import { GoogleLogout } from "react-google-login";
import {
  Doughnut,
  Line,
  Bar,
  Pie,
  Scatter,
  Radar,
  PolarArea,
} from "react-chartjs-2";

function Charts(props) {
  let { isDarkMode } = props;
  const data = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "No",
        data: [12, 19, 3, 5],

        backgroundColor: isDarkMode
          ? "rgba(48,158,133,255)"
          : "rgb(255, 99, 132)",
      },
      {
        label: "Yet to decide",
        data: [2, 3, 20, 5],
        backgroundColor: isDarkMode
          ? "rgba(249,120,129,255)"
          : "rgb(54, 162, 235)",
      },
      {
        label: "Yes",
        data: [3, 10, 13, 15],
        backgroundColor: isDarkMode
          ? "rgba(227,82,57,255)"
          : "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  let btn = isDarkMode
    ? "fa fa-sign-out text-warning bg-dark border-0"
    : "fa fa-sign-out text-danger bg-white border-0";
  return (
    <div>
      <div className="float-end">
        <GoogleLogout
          render={(renderProps) => (
            <button
              className={btn}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Log out
            </button>
          )}
          clientId={props.clientId}
          buttonText="Log Out"
          onLogoutSuccess={props.onSignoutSuccess}
        ></GoogleLogout>
      </div>
      <h1 className="text-center">Charts</h1>

      <div className="d-flex align-content-center flex-wrap w-75 h-25  m-auto">
        <div className="w-50">
          <h3 className="text-center">Line Chart</h3>
          <Line data={data} options={options} />
        </div>
        <div className="w-50 ">
          <h3 className="text-center">Bar Chart</h3>
          <Bar data={data} options={options} />
        </div>
        <div className="w-50">
          <h3 className="text-center">Doughnut Chart</h3>
          <Doughnut data={data} options={options} />
        </div>

        <PolarArea className="d-none" data={data} options={options} />

        <div className="w-50">
          <h3 className="text-center">Radar Chart</h3>
          <Radar data={data} options={options} />
        </div>
        <div className="w-50">
          <h3 className="text-center">Pie Chart</h3>
          <Pie data={data} options={options} />
        </div>
        <div className="w-50 ">
          <h3 className="text-center">Scatter Chart</h3>
          <Scatter data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
