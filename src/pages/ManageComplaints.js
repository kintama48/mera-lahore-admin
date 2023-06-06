import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Image, Select, Spin } from "antd";
import {
  fetchComplaintById,
  updateComplaint,
} from "../@store/complaint/complaintAction";
import CustomCard from "../components/Macros/CustomCard";
import {
  BsBuildingFillAdd,
  BsClockFill,
  BsCode,
  BsMailbox2,
  BsPersonBadgeFill,
  BsPinFill,
  BsTagFill,
  BsTelephoneFill,
  BsTicketFill,
} from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";
import SmallCard from "../components/Macros/SmallCard";

//         {
//             "_id": "6470755bbbaa2ded8d09fc35",
//             "complainantName": "",
//             "description": "Classroom Ac not working E-140",
//             "telephone": "",
//             "email": "",
//             "img": "https://mera-lahore.s3.amazonaws.com/complaints/7a9c3cc4-5929-4cf8-a280-7b544dc1ef63?AWSAccessKeyId=AKIAXYDJBIXHGGO6RTPF&Expires=1685092574&Signature=c3ivVlX42cQ%2BrGsBPwZ11OBs1EQ%3D",
//             "status": "pending",
//             "ccId": "UC-95",
//             "createdAt": "2023-05-26T09:01:15.362Z",
//             "updatedAt": "2023-05-26T09:01:15.362Z"
//         }

const { Option } = Select;

const ManageComplaints = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [complaint, setComplaint] = useState();
  const { id } = useParams();
  const [status, setStatus] = useState();

  const sanitizeImg = (img) => {
    return img.includes("?") ? img.split("?")[0] : img;
  };

  useEffect(() => {
    setLoading(true);
    dispatch(fetchComplaintById(id))
      .unwrap()
      .then((res) => {
        console.log("res: ", res);
        setComplaint(res.complaint);
        setStatus(res.complaint.status);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleSubmit = () => {
    setLoading(true);
    dispatch(updateComplaint({ id, complaintData: { status } }))
      .unwrap()
      .then(() => setLoading(false))
      .catch((err) => {
        setLoading(false);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container-padding h-full bg-white">
      <Spin spinning={loading}>
        {complaint && (
          <div>
            <div className="flex justify-end p-2 mr-4">
              <Select
                value={status}
                style={{ width: 180 }}
                onChange={handleStatusChange}
              >
                <Option value="pending">Pending</Option>
                <Option value="in-progress">In Progress</Option>
                <Option value="resolved">Resolved</Option>
              </Select>
              <Button
                onClick={handleSubmit}
                className="ml-4 bg-green-400 text-white hover:text-black"
                icon={<BsTicketFill />}
              >
                Mark As ...
              </Button>
            </div>
            <div className="card-list-wrapper">
              <SmallCard
                subheading={"Constituency Code"}
                content={complaint?.ccId}
                Icon={<BsCode fill="#4096FF" size="30px" />}
              />
              <SmallCard
                subheading={"Status"}
                content={
                  <div className="flex justify-between">
                    {complaint?.status[0].toUpperCase() +
                      complaint?.status.slice(1)}
                  </div>
                }
                variant={complaint?.status === "pending" ? "red" : "green"}
                Icon={<BsTagFill fill="#4096FF" size="30px" />}
              />
              {complaint?.lat && complaint?.long && (
                <SmallCard
                  subheading={"Location"}
                  content={
                    <Button
                      type="primary"
                      className="bg-blue-500"
                      icon={<BsPinFill />}
                    >
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${complaint?.lat},${complaint?.long}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Location
                      </a>
                    </Button>
                  }
                  Icon={<BsPinFill fill="#4096FF" size="30px" />}
                />
              )}
            </div>
            <div className="flex m-5 justify-between gap-7">
              <CustomCard
                title="Description"
                variant="white"
                content={complaint.description}
                Icon={<AiFillCopy fill="#4096FF" size="30px" />}
              />

              <Image
                src={sanitizeImg(complaint.img)}
                width={500}
                height={300}
                className={"rounded-md shadow-lg"}
              />
            </div>
            <div className="card-list-wrapper">
              {complaint?.complainantName && (
                <SmallCard
                  subheading={"Complainant Name"}
                  content={complaint?.complainantName}
                  Icon={<BsPersonBadgeFill fill="#4096FF" size="30px" />}
                />
              )}
              {complaint?.telephone && (
                <SmallCard
                  subheading={"Telephone"}
                  content={complaint?.telephone}
                  Icon={<BsTelephoneFill fill="#4096FF" size="30px" />}
                />
              )}
              {complaint?.email && (
                <SmallCard
                  subheading={"Email"}
                  content={complaint?.email}
                  Icon={<BsMailbox2 fill="#4096FF" size="30px" />}
                />
              )}
              {complaint?.address && (
                <SmallCard
                  subheading={"Address"}
                  content={complaint?.address}
                  Icon={<BsBuildingFillAdd fill="#4096FF" size="30px" />}
                />
              )}
              <SmallCard
                subheading={"Created At"}
                content={complaint?.createdAt}
                Icon={<BsClockFill fill="#4096FF" size="30px" />}
              />
            </div>

            {/*<div>*/}
            {/*  <h3>Status: {status}</h3>*/}
            {/*  <Button*/}
            {/*    type="primary"*/}
            {/*    loading={loading}*/}
            {/*    disabled={status === "resolved"}*/}
            {/*    onClick={() => handleStatusChange("resolved")}*/}
            {/*  >*/}
            {/*    Mark as Resolved*/}
            {/*  </Button>*/}
            {/*</div>*/}
          </div>
        )}
      </Spin>
    </div>
  );
};

export default ManageComplaints;
