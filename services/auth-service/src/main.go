package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	r := gin.Default()

	r.POST("/login", loginHandler)
	r.POST("/register", registerHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "3002"
	}
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

func loginHandler(c *gin.Context) {
	// Implement login logic
	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
}

func registerHandler(c *gin.Context) {
	// Implement registration logic
	c.JSON(http.StatusCreated, gin.H{"message": "User registered successfully"})
}
