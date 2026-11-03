import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  FormControlLabel,
  Radio,
  Checkbox,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCustomTheme } from "./Layout";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const AccordionItem = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
}));

const AccordionHeader = styled(Button)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  textTransform: "none",
  fontWeight: "bold",
}));

const Settings = () => {
  const { sidebarOpen, isDarkMode, toggleTheme } = useCustomTheme();
  const [openAccordions, setOpenAccordions] = useState({
    themes: false,
    userpass: false,
    addbook: false,
    author: false,
    privacy: false,
    block: false,
    defaultshelf: false,
  });
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [newAuthorName, setNewAuthorName] = useState("");
  const [newBiography, setNewBiography] = useState("");
  const [privacySettings, setPrivacySettings] = useState({
    shelves: "everyone",
    profile: "public",
    ratings: "everyone",
    reviews: "everyone",
  });
  const [blockUsername, setBlockUsername] = useState("");
  const [reportUsername, setReportUsername] = useState("");
  const [reportReasons, setReportReasons] = useState({
    spam: false,
    harassment: false,
  });
  const [showReasonDropdown, setShowReasonDropdown] = useState(false);
  const [selectedShelves, setSelectedShelves] = useState(["Want to read"]);
  const [customShelfExpanded, setCustomShelfExpanded] = useState(true);
  const [selectedCustomShelves, setSelectedCustomShelves] = useState([
    "Custom shelf 1",
  ]);

  const defaultShelves = [
    { id: 1, label: "Want to read" },
    { id: 2, label: "Currently reading" },
    { id: 3, label: "Read" },
  ];

  const customShelves = [
    { id: 1, label: "Custom shelf 1" },
    { id: 2, label: "Custom shelf 2" },
  ];

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleUsernameUpdate = () => {
    console.log("Username updated:", username);
    setUsername("");
  };

  const handlePasswordUpdate = () => {
    if (newPassword === confirmPassword) {
      console.log("Password updated");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match");
    }
  };

  const handleBookRequest = () => {
    console.log("Book request submitted:", {
      title: newBookTitle,
      author: newBookAuthor,
      genre: newGenre,
    });
    setNewBookTitle("");
    setNewBookAuthor("");
    setNewGenre("");
  };

  const handleAuthorRequest = () => {
    console.log("Author request submitted:", {
      name: newAuthorName,
      biography: newBiography,
    });
    setNewAuthorName("");
    setNewBiography("");
  };

  const handleSettingChange = (setting, value) => {
    setPrivacySettings((prev) => ({ ...prev, [setting]: value }));
  };

  const handleReasonChange = (reason) => {
    setReportReasons((prev) => ({ ...prev, [reason]: !prev[reason] }));
  };

  const handleBlockUser = () => {
    console.log("Blocked user:", blockUsername);
    setBlockUsername("");
  };

  const handleReportUser = () => {
    console.log("Reported user:", reportUsername, "Reasons:", reportReasons);
    setReportUsername("");
    setReportReasons({ spam: false, harassment: false });
    setShowReasonDropdown(false);
  };

  const handleShelfChange = (shelfLabel) => {
    setSelectedShelves((prev) =>
      prev.includes(shelfLabel)
        ? prev.filter((shelf) => shelf !== shelfLabel)
        : [...prev, shelfLabel]
    );
  };

  const handleCustomShelfChange = (shelfLabel) => {
    setSelectedCustomShelves((prev) =>
      prev.includes(shelfLabel)
        ? prev.filter((shelf) => shelf !== shelfLabel)
        : [...prev, shelfLabel]
    );
  };

  return (
    <Card
      sx={{
        ml: sidebarOpen ? "10px" : 0,
        mt: "64px",
        p: 2,
        transition: "margin-left 0.3s",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Settings
          </Typography>
        }
      />
      <CardContent>
        {/* Themes */}
        <AccordionItem>
          <AccordionHeader onClick={() => toggleAccordion("themes")}>
            <Typography>Themes</Typography>
            <ExpandMoreIcon />
          </AccordionHeader>
          <Collapse in={openAccordions.themes}>
            <Box sx={{ p: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={darkMode}
                    onChange={() => {
                      setDarkMode(!darkMode);
                      toggleTheme();
                    }}
                  />
                }
                label="Enable dark mode"
              />
            </Box>
          </Collapse>
        </AccordionItem>

        {/* Username and Password */}
        <AccordionItem>
          <AccordionHeader onClick={() => toggleAccordion("userpass")}>
            <Typography>Username and Password</Typography>
            <ExpandMoreIcon />
          </AccordionHeader>
          <Collapse in={openAccordions.userpass}>
            <Box sx={{ p: 2 }}>
              <TextField
                label="New username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleUsernameUpdate}
                sx={{ mb: 2 }}
              >
                Update Username
              </Button>
              <TextField
                label="New password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Confirm password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button variant="contained" onClick={handlePasswordUpdate}>
                Update Password
              </Button>
            </Box>
          </Collapse>
        </AccordionItem>

        {/* Add Book */}
        <AccordionItem>
          <AccordionHeader onClick={() => toggleAccordion("addbook")}>
            <Typography>Add Book</Typography>
            <ExpandMoreIcon />
          </AccordionHeader>
          <Collapse in={openAccordions.addbook}>
            <Box sx={{ p: 2 }}>
              <TextField
                label="Book title"
                value={newBookTitle}
                onChange={(e) => setNewBookTitle(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Author"
                value={newBookAuthor}
                onChange={(e) => setNewBookAuthor(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Genre"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button variant="contained" onClick={handleBookRequest}>
                Submit Book Request
              </Button>
            </Box>
          </Collapse>
        </AccordionItem>

        {/* Author Request */}
        <AccordionItem>
          <AccordionHeader onClick={() => toggleAccordion("author")}>
            <Typography>Author Request</Typography>
            <ExpandMoreIcon />
          </AccordionHeader>
          <Collapse in={openAccordions.author}>
            <Box sx={{ p: 2 }}>
              <TextField
                label="Author name"
                value={newAuthorName}
                onChange={(e) => setNewAuthorName(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Biography"
                value={newBiography}
                onChange={(e) => setNewBiography(e.target.value)}
                multiline
                rows={4}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button variant="contained" onClick={handleAuthorRequest}>
                Submit Author Request
              </Button>
            </Box>
          </Collapse>
        </AccordionItem>

        {/* Privacy Settings */}
        <AccordionItem>
          <AccordionHeader onClick={() => toggleAccordion("privacy")}>
            <Typography>Privacy Settings</Typography>
            <ExpandMoreIcon />
          </AccordionHeader>
          <Collapse in={openAccordions.privacy}>
            <Box sx={{ p: 2 }}>
              {["shelves", "profile", "ratings", "reviews"].map((setting) => (
                <Box key={setting} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">
                    {setting.charAt(0).toUpperCase() + setting.slice(1)}
                  </Typography>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={privacySettings[setting] === "everyone"}
                        onChange={() =>
                          handleSettingChange(setting, "everyone")
                        }
                      />
                    }
                    label="Everyone"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={
                          privacySettings[setting] ===
                          (setting === "profile" ? "public" : "friends")
                        }
                        onChange={() =>
                          handleSettingChange(
                            setting,
                            setting === "profile" ? "public" : "friends"
                          )
                        }
                      />
                    }
                    label={setting === "profile" ? "Public" : "Friends"}
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={privacySettings[setting] === "only-me"}
                        onChange={() => handleSettingChange(setting, "only-me")}
                      />
                    }
                    label="Only Me"
                  />
                </Box>
              ))}
            </Box>
          </Collapse>
        </AccordionItem>

        {/* Block or Report User */}
        <AccordionItem>
          <AccordionHeader onClick={() => toggleAccordion("block")}>
            <Typography>Block or Report User</Typography>
            <ExpandMoreIcon />
          </AccordionHeader>
          <Collapse in={openAccordions.block}>
            <Box sx={{ p: 2 }}>
              <TextField
                label="Username to block"
                value={blockUsername}
                onChange={(e) => setBlockUsername(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleBlockUser}
                sx={{ mb: 2 }}
              >
                Block User
              </Button>
              <TextField
                label="Username to report"
                value={reportUsername}
                onChange={(e) => setReportUsername(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button
                variant="outlined"
                onClick={() => setShowReasonDropdown(!showReasonDropdown)}
                sx={{ mb: 2 }}
              >
                Select Reasons
              </Button>
              {showReasonDropdown && (
                <Box sx={{ mb: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={reportReasons.spam}
                        onChange={() => handleReasonChange("spam")}
                      />
                    }
                    label="Spam"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={reportReasons.harassment}
                        onChange={() => handleReasonChange("harassment")}
                      />
                    }
                    label="Harassment"
                  />
                </Box>
              )}
              <Button variant="contained" onClick={handleReportUser}>
                Submit Report
              </Button>
            </Box>
          </Collapse>
        </AccordionItem>

        {/* Default Shelf */}
        <AccordionItem>
          <AccordionHeader onClick={() => toggleAccordion("defaultshelf")}>
            <Typography>Default Shelf</Typography>
            <ExpandMoreIcon />
          </AccordionHeader>
          <Collapse in={openAccordions.defaultshelf}>
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Default shelf for new books
              </Typography>
              {defaultShelves.map((shelf) => (
                <FormControlLabel
                  key={shelf.id}
                  control={
                    <Checkbox
                      checked={selectedShelves.includes(shelf.label)}
                      onChange={() => handleShelfChange(shelf.label)}
                    />
                  }
                  label={shelf.label}
                />
              ))}
              <Button
                variant="outlined"
                onClick={() => setCustomShelfExpanded(!customShelfExpanded)}
                sx={{ mt: 2, mb: 2 }}
              >
                Select custom shelf
              </Button>
              {customShelfExpanded && (
                <Box>
                  {customShelves.map((shelf) => (
                    <FormControlLabel
                      key={shelf.id}
                      control={
                        <Checkbox
                          checked={selectedCustomShelves.includes(shelf.label)}
                          onChange={() => handleCustomShelfChange(shelf.label)}
                        />
                      }
                      label={shelf.label}
                    />
                  ))}
                </Box>
              )}
              <Button variant="contained">Save</Button>
            </Box>
          </Collapse>
        </AccordionItem>
      </CardContent>
    </Card>
  );
};

export default Settings;
