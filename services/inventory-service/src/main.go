package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"ecommerce-app/services/inventory-service/src/db"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	db.ConnectMongoDB()

	r := gin.Default()

	r.GET("/inventory/:productId", getInventoryHandler)
	r.PUT("/inventory/:productId", updateInventoryHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8086"
	}
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

func getInventoryHandler(c *gin.Context) {
	productId := c.Param("productId")

	var inventory bson.M
	err := db.GetInventoryCollection().FindOne(context.Background(), bson.M{"productId": productId}).Decode(&inventory)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch inventory"})
		return
	}

	c.JSON(http.StatusOK, inventory)
}

func updateInventoryHandler(c *gin.Context) {
	productId := c.Param("productId")

	var updateData bson.M
	if err := c.BindJSON(&updateData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	result, err := db.GetInventoryCollection().UpdateOne(
		context.Background(),
		bson.M{"productId": productId},
		bson.M{"$set": updateData},
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update inventory"})
		return
	}

	if result.MatchedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Inventory updated successfully"})
}
