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

const reportsData = [
  { id: "74281936-j482-1749", username: "SpoilerAlert99" },
  { id: "58392047-k291-4528", username: "TrollTale" },
  { id: "57204913-b647-9321", username: "BookSpammerX" },
  { id: "29584716-m572-3847", username: "PageRager" },
  { id: "84019275-n384-6271", username: "ShelfSaboteur" },
  { id: "17849520-o928-5103", username: "PlotTwisterGoneWrong" },
  { id: "96284751-p374-8291", username: "CommentGremlin" },
  { id: "53182749-q293-1748", username: "ReviewBomber77" },
  { id: "78029164-r938-4752", username: "InkStainTrouble" },
  { id: "40291857-s182-6473", username: "NovelNuisance" },
];

const ActionButton = styled(Button)(({ theme, variant }) => ({
  minWidth: "80px",
  fontSize: "0.75rem",
  padding: "4px 12px",
  backgroundColor:
    variant === "review" ? "#3b82f6" : variant === "block" ? "#ef4444" : "#6b7280",
  color: "white",
  "&:hover": {
    backgroundColor:
      variant === "review" ? "#2563eb" : variant === "block" ? "#dc2626" : "#4b5563",
  },
  marginRight: "8px",
}));

const UserReports = () => {
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
            User Reports
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
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportsData.map((report) => (
                <TableRow key={report.id}>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {report.id}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {report.username}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <ActionButton
                      variant="review"
                      onClick={() => console.log(`Review report: ${report.id}`)}
                    >
                      Review
                    </ActionButton>
                    <ActionButton
                      variant="block"
                      onClick={() => console.log(`Block user: ${report.id}`)}
                    >
                      Block
                    </ActionButton>
                    <ActionButton
                      variant="dismiss"
                      onClick={() => console.log(`Dismiss report: ${report.id}`)}
                    >
                      Dismiss
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

export default UserReports;