import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Regform = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleCancel = () => {
        setSelectedFile(null);
        // Optionally, you might want to clear the input field as well
        document.getElementById("profilePicture").value = "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="p-4">
            <Typography variant="h4" gutterBottom align="center" color="#9155FD">
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="password"
                            id="cofpassword"
                            name="cofpassword"
                            label="Confirm Password"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            type="tel"
                            id="mobile"
                            name="mobile"
                            label="Mobile"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            id="profilePicture"
                            name="profilePicture"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <label htmlFor="profilePicture">
                            <Button
                                variant="outlined"
                                component="span"
                                className="w-full"
                                sx={{
                                    padding: ".8rem 0",
                                    border: "2px dashed #9155FD",
                                    color: "#9155FD",
                                    backgroundColor: "transparent",
                                    borderRadius: "4px",
                                    '&:hover': {
                                        border: "2px dashed #6f2bff",
                                    },
                                }}
                            >
                                {selectedFile ? 'Change Profile Picture' : 'Upload Profile Picture'}
                            </Button>
                        </label>
                        {selectedFile && (
                            <div className="mt-3">
                                <Typography variant="body2" color="textSecondary">
                                    Selected File: {selectedFile.name}
                                </Typography>
                                <Button
                                    onClick={handleCancel}
                                    variant="contained"
                                    color="error"
                                    sx={{ mt: 1 }}
                                >
                                    Cancel
                                </Button>
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            className="bg-[#9155FD] w-full"
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className="flex justify-center flex-col items-center mt-4">
                <div className="flex py-3 items-center">
                    <p>If you already have an account?</p>
                    <Button
                        onClick={() => navigate("/login")}
                        className="ml-5"
                        size="small"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Regform;
