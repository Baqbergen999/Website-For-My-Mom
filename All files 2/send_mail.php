<?php
// Қабылдаушы электрондық пошта
$to = "bahbergen998@gmail.com"; // Электрондық поштаңызды осында жазыңыз

// Форма мәліметтерін алу
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

// Хат тақырыбы мен мазмұны
$subject = "Жаңа хабарлама: $name";
$body = "Аты: $name\nЭлектрондық пошта: $email\n\nХабарлама:\n$message";

// Қосымша тақырыптар
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Хатты жіберу
if (mail($to, $subject, $body, $headers)) {
    echo "<h2>Хабарламаңыз сәтті жіберілді!</h2>";
    echo "<p>Біз сізбен жақын арада байланысамыз.</p>";
} else {
    echo "<h2>Хабарлама жіберу кезінде қателік орын алды.</h2>";
    echo "<p>Кейінірек қайталап көріңіз немесе бізге басқа жолмен хабарласыңыз.</p>";
}
?>
