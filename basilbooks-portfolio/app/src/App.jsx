import { Admin, Resource } from "react-admin";
import { Layout } from "./components/Layout.jsx";
import BookList from "./components/BookList.jsx";
import UserList from "./components/UserList.jsx";
import AuthorRequests from "./components/AuthorRequests.jsx";
import UserReports from "./components/UserReports.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Settings from "./components/Settings.jsx";
import { customTheme } from "./theme.jsx";

const App = () => (
  <Admin
    layout={Layout}
    theme={customTheme}
    dashboard={Dashboard}
  >
    <Resource name="books" list={BookList} />
    <Resource name="users" list={UserList} />
    <Resource name="author-requests" list={AuthorRequests} />
    <Resource name="user-reports" list={UserReports} />
    <Resource name="settings" list={Settings} />
  </Admin>
);

export default App;