#!/bin/bash

# Set variables for frontend and backend directories
FRONTEND_DIR="./frontend"
BACKEND_DIR="./backend"

# Function to start the frontend
start_frontend() {
    echo "Starting frontend..."
    cd $FRONTEND_DIR
    npm install
    npm run dev &
    cd ..
}

# Function to start the backend
start_backend() {
    echo "Starting backend..."
    cd $BACKEND_DIR
    npm install
    npm start &
    cd ..
}

# Start frontend and backend
start_frontend
start_backend

# Wait for both processes to start
wait

echo "Frontend and backend are running."
