package handlers

import (
	"net/http"
	"strings"

	"ecommerce-app/services/auth-service/src/utils"

	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	// Verify credentials
	// ...

	userId := "user_id_here" // Get this from your database
	token, err := utils.GenerateToken(userId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}

func Register(c *gin.Context) {
	// Create user in database
	// ...

	userId := "new_user_id_here" // Get this from your database
	token, err := utils.GenerateToken(userId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
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
