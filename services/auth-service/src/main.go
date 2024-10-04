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
			"status": "Auth service is healthy",
		})
	})

	port := ":3002"
	log.Printf("Auth service running on port %s", port)
	r.Run(port)
}