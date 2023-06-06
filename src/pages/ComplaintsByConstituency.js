import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchComplaintsByConstituencies } from "../@store/complaint/complaintAction";
import { Spin } from "antd";
import ConstituencyCard from "../components/Macros/ConstituencyCard";

const ComplaintsByConstituency = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchComplaintsByConstituencies())
      .unwrap()
      .then((res) => {
        setComplaints(res.constituencies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // Add an empty dependency array here

  // Function to generate data for the pie chart
  const generateChartData = (complaint) => {
    return {
      labels: ["Pending", "Resolved", "In Progress"],
      datasets: [
        {
          data: [complaint.pending, complaint.resolved, complaint.inProgress],
          backgroundColor: ["#FF6384", "green", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "green", "#FFCE56"],
        },
      ],
    };
  };

  return (
    <div className="container-padding h-full bg-white">
      <Spin spinning={loading}>
        <div className={`text-xl font-semibold ml-5 text-gray-500`} hidden={loading}>
          Constituencies
        </div>
        <div className="card-list-wrapper">
          {Object.keys(complaints).map((key) => {
            const complaint = complaints[key];
            const chartData = generateChartData(complaint);

            return (
              <ConstituencyCard
                key={key} // Add a unique key prop here
                name={key}
                total={complaint.total}
                pending={complaint.pending}
                resolved={complaint.resolved}
                inProgress={complaint.inProgress}
                chartData={chartData}
              />
            );
          })}
        </div>
      </Spin>
    </div>
  );
};

export default ComplaintsByConstituency;
