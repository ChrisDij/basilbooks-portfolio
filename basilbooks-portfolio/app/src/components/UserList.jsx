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

const usersData = [
  {
    id: "21940659-f875-4572",
    username: "Joshua",
    email: "reader@example.com",
    role: "Admin",
    status: "Active",
    actionType: "demote",
  },
  {
    id: "98347125-a392-1845",
    username: "PageTurner91",
    email: "example@email.com",
    role: "User",
    status: "Active",
    actionType: "block",
  },
  {
    id: "57204913-b647-9321",
    username: "LitExplorer",
    email: "example@email.com",
    role: "User",
    status: "Active",
    actionType: "block",
  },
  {
    id: "84710236-c982-5610",
    username: "WordSmith08",
    email: "example@email.com",
    role: "User",
    status: "Active",
    actionType: "block",
  },
  {
    id: "49271856-d743-3859",
    username: "ShelfDweller",
    email: "example@email.com",
    role: "User",
    status: "Active",
    actionType: "block",
  },
];

const ActionButton = styled(Button)(({ theme, variant }) => ({
  minWidth: "80px",
  fontSize: "0.75rem",
  padding: "4px 12px",
  backgroundColor:
    variant === "edit" ? "#3b82f6" : variant === "demote" ? "#f59e0b" : "#ef4444",
  color: "white",
  "&:hover": {
    backgroundColor:
      variant === "edit" ? "#2563eb" : variant === "demote" ? "#d97706" : "#dc2626",
  },
  marginRight: "8px",
}));

const UserList = () => {
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
            User List
          </Typography>
        }
      />
      <CardContent>
        <TableContainer>
          <Table style={{ width: "100%", borderCollapse: "collapse" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  User ID
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Username
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Email
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Role
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Account Status
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {user.id}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {user.username}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {user.email}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {user.role}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {user.status}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <ActionButton
                      variant="edit"
                      onClick={() => console.log(`Edit user: ${user.id}`)}
                    >
                      Edit
                    </ActionButton>
                    <ActionButton
                      variant={user.actionType}
                      onClick={() =>
                        console.log(`${user.actionType} user: ${user.id}`)
                      }
                    >
                      {user.actionType === "demote" ? "Demote" : "Block"}
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

export default UserList;
