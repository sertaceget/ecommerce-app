package main

import (
	"log"
	"os"

	"ecommerce-app/services/order-service/src/db"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	db.ConnectPostgres()

	r := gin.Default()

	r.POST("/orders", createOrderHandler)
	r.GET("/orders/:id", getOrderHandler)
	r.GET("/orders", listOrdersHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8084"
	}
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

func createOrderHandler(c *gin.Context) {
	// Implement order creation logic
}

func getOrderHandler(c *gin.Context) {
	// Implement get single order logic
}

func listOrdersHandler(c *gin.Context) {
	// Implement list orders logic
}
