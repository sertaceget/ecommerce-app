package main

import (
	"log"
	"os"

	"ecommerce-app/services/auth-service/src/db"
	"ecommerce-app/services/auth-service/src/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env file if it exists
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	// Initialize database connection
	if err := db.ConnectPostgres(); err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	r := gin.Default()
	r.Use(cors.Default())

	// Auth routes
	r.POST("/login", handlers.Login)
	r.POST("/register", handlers.Register)
	r.POST("/refresh", handlers.RefreshToken)
	r.POST("/logout", handlers.Logout)
	r.GET("/validate", handlers.ValidateToken)

	// Set the port
	port := os.Getenv("PORT")
	if port == "" {
		port = "8082" // Using 8082 as the default port for consistency
	}

	// Run the server
	log.Printf("Server running on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}
