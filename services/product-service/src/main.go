package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status": "Product service is healthy",
		})
	})

	port := ":3004"
	log.Printf("Product service running on port %s", port)
	r.Run(port)
}
