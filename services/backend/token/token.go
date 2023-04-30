package token

import (
	"fmt"
	`net/http`
	"os"
	"strconv"
	"strings"
	"time"
	
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func GenerateToken(userId uint) (string, error) {
	tokenLifespan, err := strconv.Atoi(os.Getenv("TOKEN_HOUR_LIFESPAN"))
	if err != nil {
		return "", err
	}
	
	claims := jwt.RegisteredClaims{
		Issuer:    "mamad.dev",
		Subject:   "user",
		Audience:  []string{"user"},
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * time.Duration(tokenLifespan))),
		IssuedAt:  jwt.NewNumericDate(time.Now()),
		NotBefore: jwt.NewNumericDate(time.Now()),
		ID:        strconv.Itoa(int(userId)),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	
	return token.SignedString([]byte(os.Getenv("API_SECRET")))
}

func Valid(c *gin.Context) error {
	tokenString := ExtractToken(c)
	_, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(os.Getenv("API_SECRET")), nil
	})
	return err
}

func ExtractToken(c *gin.Context) string {
	token := c.Query("token")
	if token != "" {
		return token
	}
	bearerToken := c.Request.Header.Get("Authorization")
	if len(strings.Split(bearerToken, " ")) == 2 {
		return strings.Split(bearerToken, " ")[1]
	}
	return ""
}

func ExtractTokenID(c *gin.Context) (uint, error) {
	tokenString := ExtractToken(c)
	claims := &jwt.RegisteredClaims{}
	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(os.Getenv("API_SECRET")), nil
	})
	if err != nil {
		return 0, err
	}
	
	claims, ok := token.Claims.(*jwt.RegisteredClaims)
	if ok && token.Valid {
		uid, err := strconv.ParseUint(claims.ID, 10, 32)
		if err != nil {
			return 0, err
		}
		return uint(uid), nil
	}
	return 0, nil
}

func JwtAuthMiddleware(MustLogin bool) gin.HandlerFunc {
	return func(c *gin.Context) {
		err := Valid(c)
		if err != nil {
			if MustLogin {
				c.String(http.StatusUnauthorized, "Unauthorized")
				c.Abort()
				return
			}
		}
		
		id, err := ExtractTokenID(c)
		if err != nil {
			if MustLogin {
				c.String(http.StatusUnauthorized, "Unauthorized")
				c.Abort()
				return
			}
		}
		c.Set("user_id", id)
		if id == 0 {
			c.Set("user_id", "guest")
		}
		
		c.Set("is_logged_in", true)
		c.Next()
	}
}
