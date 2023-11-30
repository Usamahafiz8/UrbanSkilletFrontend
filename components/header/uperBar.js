import { Button } from "@mui/material";
import { useRouter } from 'next/router';  
import React from "react";

export const UperBar = () => {
  const router = useRouter();  

  const login = () => {
    router.push('/login'); 
  };

  const register = () => {
    router.push('/register'); 
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "10px 50px",
        gap: "16px",
        fontWeight: 600,
        backgroundColor: "smokewhite",
      }}
    >
      <Button
        style={{
          fontWeight: 600,
          color: "black",
          textDecoration: "underline", // Add underline
        }}
        onClick={login}
      >
        LOGIN
      </Button>
      <Button
        variant="outlined"
        style={{
          fontWeight: 600,
          borderRadius: "34px",
          color: "black",
          borderColor: "black",
        }}
        onClick={register}
      >
        SIGN UP
      </Button>
    </div>
  );
};
