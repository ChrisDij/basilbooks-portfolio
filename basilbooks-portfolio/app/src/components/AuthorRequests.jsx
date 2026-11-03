import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCustomTheme } from "./Layout";

const requestsData = [
  {
    id: "10e6d75c-3058-49ac",
    date: "10/4/2025",
    username: "F. Scott Fitzgerald",
  },
  {
    id: "9bc38cae-d272-413c",
    date: "10/4/2025",
    username: "George Orwell",
  },
  {
    id: "038650da-c970-483a",
    date: "10/4/2025",
    username: "Dan Brown",
  },
  {
    id: "42e9d527-916c-44f9",
    date: "10/4/2025",
    username: "John Green",
  },
  {
    id: "c9350828-a55a-4475",
    date: "10/4/2025",
    username: "J.R.R. Tolkien",
  },
];

const ActionButton = styled(Button)(({ theme, variant }) => ({
  minWidth: "80px",
  fontSize: "0.75rem",
  padding: "4px 12px",
  backgroundColor:
    variant === "approve"
      ? "#10b981"
      : variant === "reject"
      ? "#ef4444"
      : "#3b82f6",
  color: "white",
  "&:hover": {
    backgroundColor:
      variant === "approve"
        ? "#059669"
        : variant === "reject"
        ? "#dc2626"
        : "#2563eb",
  },
  marginRight: "8px",
}));

const AuthorRequests = () => {
  const { sidebarOpen } = useCustomTheme();

  return (
    <Card
      sx={{
        marginLeft: sidebarOpen ? "10px" : 0,
        marginTop: "64px",
        padding: 2,
        transition: "margin-left 0.3s",
        maxWidth: "100%",
        overflowX: "auto",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Author Requests
          </Typography>
        }
      />
      <CardContent>
        <TableContainer>
          <Table style={{ width: "100%", borderCollapse: "collapse" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Date of Request
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  User ID
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Username
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requestsData.map((request) => (
                <TableRow key={request.id}>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {request.date}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {request.id}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {request.username}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <ActionButton
                      variant="approve"
                      onClick={() => console.log(`Approve request: ${request.id}`)}
                    >
                      Approve
                    </ActionButton>
                    <ActionButton
                      variant="reject"
                      onClick={() => console.log(`Reject request: ${request.id}`)}
                    >
                      Reject
                    </ActionButton>
                    <ActionButton
                      variant="view"
                      onClick={() => console.log(`View biography: ${request.id}`)}
                    >
                      View Biography
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default AuthorRequests;