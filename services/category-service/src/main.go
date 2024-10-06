package main

import (
	"log"
	"os"

	"ecommerce-app/services/category-service/src/db"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database
	if err := db.InitDB(); err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	r := gin.Default()

	r.GET("/categories", getCategories)
	r.POST("/categories", createCategory)
	// Add other routes as needed

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	r.Run(":" + port)
}

func getCategories(c *gin.Context) {
	// Implement category retrieval logic
}

func createCategory(c *gin.Context) {
	// Implement category creation logic
}
