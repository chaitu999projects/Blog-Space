'use server'

import { signIn } from "../../../auth";
import { DBConnection } from "../utils/config/db";

export const LoginServer = async (loginDetails) => {
  // Validate input
  if (!loginDetails.email || !loginDetails.password) {
    return { 
      success: false, 
      message: "Email and password are required" 
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(loginDetails.email)) {
    return { 
      success: false, 
      message: "Please provide a valid email address" 
    };
  }

  try {
    await DBConnection();
    
    const result = await signIn("credentials", {
      email: loginDetails.email,
      password: loginDetails.password,
      redirect: false // Don't redirect automatically, we'll handle it
    });

    if (result?.error) {
      // Handle specific error cases
      let errorMessage = "Login failed";
      
      if (result.error === "CredentialsSignin") {
        errorMessage = "Invalid email or password";
      } else if (result.error.includes("callback")) {
        errorMessage = "Authentication error occurred";
      }
      
      return { 
        success: false, 
        message: errorMessage 
      };
    }

    // If successful, redirect on the client side
    return { 
      success: true, 
      message: "Login successful",
      redirectTo: '/' 
    };

  } catch (error) {
    console.error("Login error:", error);
    
    // Handle specific error types
    let errorMessage = "An unexpected error occurred during login";
    
    if (error.name === "MongoServerError") {
      errorMessage = "Database connection error";
    } else if (error.name === "ConnectionTimeoutError") {
      errorMessage = "Connection timeout. Please try again.";
    }
    
    return { 
      success: false, 
      message: errorMessage 
    };
  }
};