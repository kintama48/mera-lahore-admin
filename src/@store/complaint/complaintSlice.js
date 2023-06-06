import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllComplaints,
  fetchComplaintById,
  fetchComplaintsByCCID,
  fetchComplaintsByConstituencies,
  updateComplaint,
} from "./complaintAction";

const complaintSlice = createSlice({
  name: "complaints",
  initialState: {
    entities: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllComplaints.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllComplaints.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(fetchAllComplaints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateComplaint.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateComplaint.fulfilled, (state, action) => {
        state.loading = false;
        // const { complaints } = action.payload;
      })
      .addCase(updateComplaint.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // .addCase(deleteComplaint.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(deleteComplaint.fulfilled, (state, action) => {
      //   state.loading = false;
      // })
      // .addCase(deleteComplaint.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })
      .addCase(fetchComplaintsByCCID.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchComplaintsByCCID.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(fetchComplaintsByCCID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchComplaintById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchComplaintById.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(fetchComplaintById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchComplaintsByConstituencies.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchComplaintsByConstituencies.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(fetchComplaintsByConstituencies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default complaintSlice.reducer;
