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

	r.GET("/products", getProductsHandler)
	r.POST("/products", createProductHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "3004"
	}
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

func getProductsHandler(c *gin.Context) {
	// Implement get products logic
	c.JSON(http.StatusOK, gin.H{"products": []string{"Product 1", "Product 2"}})
}

func createProductHandler(c *gin.Context) {
	// Implement create product logic
	c.JSON(http.StatusCreated, gin.H{"message": "Product created successfully"})
}
