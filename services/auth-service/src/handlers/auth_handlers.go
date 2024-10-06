package handlers

import (
	"net/http"
	"strings"

	"ecommerce-app/services/auth-service/src/utils"

	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	// Implement login logic
	// Verify credentials, generate JWT token
}

func Register(c *gin.Context) {
	// Implement registration logic
	// Create user in database, generate JWT token
}

func RefreshToken(c *gin.Context) {
	// Implement token refresh logic
}

func Logout(c *gin.Context) {
	// Implement logout logic (e.g., invalidate token)
}

func ValidateToken(c *gin.Context) {
	authHeader := c.GetHeader("Authorization")
	if authHeader == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "No token provided"})
		return
	}

	token := strings.TrimPrefix(authHeader, "Bearer ")
	if utils.ValidateToken(token) {
		c.JSON(http.StatusOK, gin.H{"valid": true})
	} else {
		c.JSON(http.StatusUnauthorized, gin.H{"valid": false})
	}
}
