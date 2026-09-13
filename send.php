<?php
header('Content-Type: application/json');

$botToken = '8973992978:AAHAebbCNsZAhTG5abzx-XzRlU5r5RfRsn0';
$chatId = '8687310223';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $form_id = $_POST['form_id'] ?? 'Неизвестная форма';
    $name = $_POST['name'] ?? 'Не указано';
    $phone = $_POST['phone'] ?? 'Не указано';
    
    $text = "🔔 <b>Новая заявка с сайта!</b>\n\n";
    
    if ($form_id === 'quiz-form') {
        $area = $_POST['area'] ?? '-';
        $height = $_POST['height'] ?? '-';
        $room_type = $_POST['room_type'] ?? '-';
        
        $text .= "📝 <b>Форма:</b> Подбор кондиционера (Квиз)\n";
        $text .= "👤 <b>Имя:</b> $name\n";
        $text .= "📞 <b>Телефон:</b> $phone\n";
        $text .= "📐 <b>Площадь:</b> $area м²\n";
        $text .= "📏 <b>Высота:</b> $height м\n";
        $text .= "🏠 <b>Тип помещения:</b> $room_type\n";
    } else if ($form_id === 'callback-form') {
        $text .= "📝 <b>Форма:</b> Обратный звонок\n";
        $text .= "👤 <b>Имя:</b> $name\n";
        $text .= "📞 <b>Телефон:</b> $phone\n";
    } else {
        $text .= "👤 <b>Имя:</b> $name\n";
        $text .= "📞 <b>Телефон:</b> $phone\n";
    }
    
    $url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $text,
        'parse_mode' => 'HTML'
    ];
    
    $options = [
        'http' => [
            'method'  => 'POST',
            'header'  => "Content-Type:application/x-www-form-urlencoded\r\n",
            'content' => http_build_query($data)
        ]
    ];
    
    $context  = stream_context_create($options);
    $result = @file_get_contents($url, false, $context);
    
    if ($result === FALSE) {
        echo json_encode(['success' => false, 'error' => 'Telegram API error']);
    } else {
        echo json_encode(['success' => true]);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}
?>
