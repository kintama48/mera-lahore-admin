import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../@api/axios";
import { message } from "antd";
createAsyncThunk(
    "/createComplaint",
    async (complaintData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/complaint", complaintData);
            message.success("Complaint created Successfully");
            return response.data;
        } catch (err) {
            message.error(err.message);
            return rejectWithValue(err.response.data);
        }
    }
);
const fetchAllComplaints = createAsyncThunk(
  "/fetchAllComplaints",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/complaints");
      return response.data;
    } catch (err) {
      message.error(err.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const deleteComplaint = createAsyncThunk(
  "/deleteComplaint",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/complaint/${id}`);
      message.success("Complaint deleted Successfully");
      return response.data;
    } catch (err) {
      message.error(err.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const updateComplaint = createAsyncThunk(
  "/updateComplaint",
  async ({ id, complaintData, rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        `/complaint/${id}`,
        complaintData
      );
      message.success("Complaint updated Successfully");
      return response.data;
    } catch (err) {
      message.error(err);
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const fetchComplaintById = createAsyncThunk(
  "/fetchComplaintById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/complaint/${id}`);
      return response.data;
    } catch (err) {
      message.error(err.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const fetchComplaintsByCCID = createAsyncThunk(
  "/fetchComplaintsByCCID",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/complaints/cc/${id}`);
      return response.data;
    } catch (err) {
      message.error(err.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const fetchComplaintsByConstituencies = createAsyncThunk(
  "/fetchComplaintsByConstituencies",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/complaints/cc`);
      return response.data;
    } catch (err) {
      message.error(err.message);
      return rejectWithValue(err.response.data);
    }
  }
);

export {
  fetchAllComplaints,
  deleteComplaint,
  updateComplaint,
  fetchComplaintById,
  fetchComplaintsByCCID,
  fetchComplaintsByConstituencies,
};
