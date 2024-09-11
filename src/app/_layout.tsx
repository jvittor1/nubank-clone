import { router, Slot, Stack } from "expo-router";
import "../styles/global.css";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../context/auth.context";

function InitialLayout() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("(auth)");
    } else {
      router.replace("(public)");
    }
  }, [isAuthenticated]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
