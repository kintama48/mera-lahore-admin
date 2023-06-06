import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchComplaintsByCCID } from "../@store/complaint/complaintAction";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import ComplaintCard from "../components/Macros/ComplaintCard";

const ComplaintsByConstituency = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [complaints, setComplaints] = useState([]);
  const id = useParams().id;
  const [ccId, setCcId] = useState()

  useEffect(() => {
    setLoading(true);
    dispatch(fetchComplaintsByCCID(id))
      .unwrap()
      .then((res) => {
        console.log(res.complaints);
        setComplaints(res.complaints);
        setCcId(res.ccId);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); // Add an empty dependency array here

  return (
    <div className="container-padding h-full bg-white">
      <Spin spinning={loading}>
        <div className={`text-xl font-semibold ml-5 text-gray-500`} hidden={loading}>
          {ccId} Complaints
        </div>
        <div className="card-list-wrapper">
          {complaints.map((complaint) => {
            return (
              <ComplaintCard
                key={complaint._id}
                id={complaint._id}
                img={complaint.img}
                description={complaint.description}
                status={complaint.status}
              />
            );
          })}
        </div>
      </Spin>
    </div>
  );
};

export default ComplaintsByConstituency;
