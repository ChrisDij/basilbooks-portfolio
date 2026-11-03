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

const booksData = [
  {
    id: "21940659-f875-4572",
    dateAdded: "19/9/2025",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophical Fiction",
  },
  {
    id: "406fa39b-69c4-4f3f",
    dateAdded: "19/9/2025",
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    genre: "Thriller / Mystery",
  },
  {
    id: "9bbb027c-d548-4d9d",
    dateAdded: "19/9/2025",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Historical Fiction",
  },
  {
    id: "db8cc46e-9b38-45f8",
    dateAdded: "19/9/2025",
    title: "Life of Pi",
    author: "Yann Martel",
    genre: "Adventure / Fiction",
  },
  {
    id: "e3513c81-2629-4453",
    dateAdded: "19/9/2025",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genre: "Fantasy / Epic",
  },
  {
    id: "6f573bcc-9e65-4b56",
    dateAdded: "19/9/2025",
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror / Thriller",
  },
  {
    id: "c3172092-a511-4347",
    dateAdded: "19/9/2025",
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Thriller / Mystery",
  },
  {
    id: "28af3d3f-941a-4011",
    dateAdded: "19/9/2025",
    title: "Little Women",
    author: "Louisa May Alcott",
    genre: "Classic / Coming-of-..",
  },
  {
    id: "e60d5257-4a4b-4446",
    dateAdded: "19/9/2025",
    title: "The Picture of Dorian..",
    author: "Oscar Wilde",
    genre: "Classic / Gothic Fiction",
  },
  {
    id: "dbfa665d-7638-4d65",
    dateAdded: "19/9/2025",
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    genre: "Dystopian / Specula..",
  },
];

const ActionButton = styled(Button)(({ theme, variant }) => ({
  minWidth: "80px",
  fontSize: "0.75rem",
  padding: "4px 12px",
  backgroundColor: variant === "edit" ? "#3b82f6" : "#ef4444",
  color: "white",
  "&:hover": {
    backgroundColor: variant === "edit" ? "#2563eb" : "#dc2626",
  },
  marginRight: "8px",
}));

const BookList = () => {
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
            Book Catalog
          </Typography>
        }
        action={
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("Add book clicked")}
            sx={{ borderRadius: 1 }}
          >
            Add Book
          </Button>
        }
      />
      <CardContent>
        <TableContainer>
          <Table style={{ width: "100%", borderCollapse: "collapse" }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Date Added
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Book ID
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Book Title
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Author
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Genre
                </TableCell>
                <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booksData.map((book) => (
                <TableRow key={book.id}>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.dateAdded}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.id}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.title}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.author}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.genre}
                  </TableCell>
                  <TableCell style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <ActionButton
                      variant="edit"
                      onClick={() => console.log(`Edit book: ${book.id}`)}
                    >
                      Edit
                    </ActionButton>
                    <ActionButton
                      variant="remove"
                      onClick={() => console.log(`Remove book: ${book.id}`)}
                    >
                      Remove
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

export default BookList;