<?php
// Include database credentials
require_once('db_credentials.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch form data
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];

// Prepare SQL statement to insert data
$sql = "INSERT INTO your_table_name (name, email, message) VALUES ('$name', '$email', '$message')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully
