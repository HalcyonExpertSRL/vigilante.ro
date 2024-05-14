<?php
// Include database connection
require_once('db_credentials.php');

// Fetch form data
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];

// Prepare SQL statement to insert data
$sql = "INSERT INTO users (name, mail, message) VALUES ('$name', '$email', '$message')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();

// Redirige de vuelta a la página HTML después de haber enviado los datos
header("Location: ../index.html");
exit;
?>
