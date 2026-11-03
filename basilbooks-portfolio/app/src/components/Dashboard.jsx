import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { Card, CardHeader, CardContent, Typography, Grid, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCustomTheme } from './Layout';

const statsData = [
  { title: 'Total Users', value: '101' },
  { title: 'Total Books', value: '305' },
  { title: 'Pending Book Requests', value: '15' },
  { title: 'Pending Author Requests', value: '3' },
  { title: 'Reported Reviews/Users', value: '2' },
];

const bookRequestsData = [
  {
    id: 1,
    date: '19/9/2025',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    requestedBy: 'PageTurner88',
  },
  {
    id: 2,
    date: '19/9/2025',
    title: '1984',
    author: 'George Orwell',
    requestedBy: 'NovelNerd21',
  },
  {
    id: 3,
    date: '19/9/2025',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    requestedBy: 'ShelfSeeker',
  },
  {
    id: 4,
    date: '19/9/2025',
    title: 'The Fault in Our Stars',
    author: 'John Green',
    requestedBy: 'QuietQuill',
  },
  {
    id: 5,
    date: '19/9/2025',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    requestedBy: 'BoundByBooks',
  },
  {
    id: 6,
    date: '19/9/2025',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    requestedBy: 'ReadAndRepeat',
  },
  {
    id: 7,
    date: '19/9/2025',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    requestedBy: 'LitLoverX',
  },
  {
    id: 8,
    date: '19/9/2025',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    requestedBy: 'BoundByBooks',
  },
];

const approvedRequestsData = [
  {
    id: 1,
    date: '25/9/2025',
    requestedBy: 'BoundByBooks',
    approvedBy: 'Admin 1',
  },
  {
    id: 2,
    date: '24/9/2025',
    requestedBy: 'LitLoverX',
    approvedBy: 'Admin 2',
  },
  {
    id: 3,
    date: '23/9/2025',
    requestedBy: 'ReadAndRepeat',
    approvedBy: 'Admin 1',
  },
];

const StatsCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StatsNumber = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const ActionButton = styled(Button)(({ theme, variant }) => ({
  minWidth: '80px',
  fontSize: '0.75rem',
  padding: '4px 12px',
  backgroundColor:
    variant === 'approve'
      ? '#10b981'
      : variant === 'reject'
      ? '#ef4444'
      : '#3b82f6',
  color: 'white',
  '&:hover': {
    backgroundColor:
      variant === 'approve'
        ? '#059669'
        : variant === 'reject'
        ? '#dc2626'
        : '#2563eb',
  },
}));

const BookRequestActions = ({ record }) => (
  <>
    <ActionButton
      variant="approve"
      onClick={() => console.log(`Approve request: ${record.id}`)}
    >
      Approve
    </ActionButton>
    <ActionButton
      variant="reject"
      onClick={() => console.log(`Reject request: ${record.id}`)}
      sx={{ ml: 1 }}
    >
      Reject
    </ActionButton>
  </>
);

const ApprovedRequestActions = ({ record }) => (
  <ActionButton
    variant="undo"
    onClick={() => console.log(`Undo approval: ${record.id}`)}
  >
    Undo
  </ActionButton>
);

const Dashboard = () => {
  const { sidebarOpen } = useCustomTheme();

  return (
    <Box
      sx={{
        ml: sidebarOpen ? '10px' : 0,
        mt: '64px',
        p: 2,
        transition: 'margin-left 0.3s',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Dashboard
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <StatsCard>
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary">
                  {stat.title}
                </Typography>
                <StatsNumber>{stat.value}</StatsNumber>
              </CardContent>
            </StatsCard>
          </Grid>
        ))}
      </Grid>

      {/* Book Requests*/}
      <Card sx={{ mb: 4 }}>
        <CardHeader
          title={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>Book Requests</Typography>}
        />
        <CardContent>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Requested Book Title</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Suggested Author</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Requested By</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookRequestsData.map((record) => (
                <tr key={record.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.date}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.title}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.author}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.requestedBy}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <ActionButton variant="approve" onClick={() => console.log(`Approve request: ${record.id}`)}>
                      Approve
                    </ActionButton>
                    <ActionButton variant="reject" onClick={() => console.log(`Reject request: ${record.id}`)} sx={{ ml: 1 }}>
                      Reject
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Recently Approved*/}
      <Card>
        <CardHeader
          title={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>Recently Approved Book Requests</Typography>}
        />
        <CardContent>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Requested By</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Approved By</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {approvedRequestsData.map((record) => (
                <tr key={record.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.date}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.requestedBy}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{record.approvedBy}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <ActionButton variant="undo" onClick={() => console.log(`Undo approval: ${record.id}`)}>
                      Undo
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;