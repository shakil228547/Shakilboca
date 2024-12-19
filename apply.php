<?php
include 'database.php';

$name = $_POST['name'];
$class = $_POST['class'];
$phone = $_POST['phone'];

$sql = "INSERT INTO students (name, class, phone) VALUES ('$name', '$class', '$phone')";

if ($conn->query($sql) === TRUE) {
    echo "ভর্তি সফল হয়েছে!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>