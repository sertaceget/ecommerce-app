package db

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func ConnectPostgres() {
	postgresURI := os.Getenv("POSTGRES_URI")
	if postgresURI == "" {
		log.Fatal("POSTGRES_URI environment variable is not set")
	}

	var err error
	DB, err = sql.Open("postgres", postgresURI)
	if err != nil {
		log.Fatal(err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Connected to PostgreSQL")
}
