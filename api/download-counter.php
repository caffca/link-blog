<?php
/**
 * 下载计数器 API
 * 记录并返回下载次数
 * 
 * 请求格式:
 * POST: {"resourceId": "资源 ID"}
 * GET: 返回所有计数
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// 数据文件路径
$dataFile = __DIR__ . '/download-counts.json';
$logFile = __DIR__ . '/download-log.txt';

// 初始化数据文件
if (!file_exists($dataFile)) {
    $initialData = [
        "winscp-1" => 12, "winscp-2" => 8, "winscp-3" => 5,
        "1" => 1256, "2" => 834, "3" => 567, "4" => 2103,
        "5" => 789, "6" => 456, "7" => 1567, "8" => 923,
        "altium-20" => 3, "chrome" => 2, "obs-studio" => 1, "package" => 0,
        "ebook-1" => 5, "ebook-2" => 3, "soft-1" => 2, "soft-2" => 4
    ];
    file_put_contents($dataFile, json_encode($initialData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

// 获取客户端 IP
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$timestamp = date('Y-m-d H:i:s');

// 处理 OPTIONS 预检请求
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// 获取请求方法
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    // 记录下载
    $input = json_decode(file_get_contents('php://input'), true);
    $resourceId = $input['resourceId'] ?? null;
    
    if (!$resourceId) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing resourceId', 'success' => false]);
        exit;
    }
    
    // 简单的防刷机制：检查 1 分钟内的请求
    $rateLimitFile = __DIR__ . '/rate-limit.json';
    $rateLimitData = file_exists($rateLimitFile) ? json_decode(file_get_contents($rateLimitFile), true) : [];
    
    $minuteKey = date('Y-m-d H:i');
    $userKey = $clientIp . '_' . $resourceId;
    
    if (isset($rateLimitData[$minuteKey][$userKey]) && $rateLimitData[$minuteKey][$userKey] >= 10) {
        http_response_code(429);
        echo json_encode(['error' => 'Rate limit exceeded', 'success' => false]);
        exit;
    }
    
    // 加载当前计数
    $counts = json_decode(file_get_contents($dataFile), true);
    
    if (!isset($counts[$resourceId])) {
        $counts[$resourceId] = 0;
    }
    
    // 增加计数
    $counts[$resourceId]++;
    $newCount = $counts[$resourceId];
    
    // 保存计数
    file_put_contents($dataFile, json_encode($counts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    // 记录日志
    $logEntry = "[$timestamp] IP:$clientIp Resource:$resourceId Count:$newCount UA:$userAgent\n";
    file_put_contents($logFile, $logEntry, FILE_APPEND);
    
    // 更新速率限制
    if (!isset($rateLimitData[$minuteKey])) {
        $rateLimitData[$minuteKey] = [];
    }
    $rateLimitData[$minuteKey][$userKey] = ($rateLimitData[$minuteKey][$userKey] ?? 0) + 1;
    
    // 清理旧的速率限制数据（保留最近 10 分钟）
    $cutoffTime = date('Y-m-d H:i', strtotime('-10 minutes'));
    foreach (array_keys($rateLimitData) as $key) {
        if ($key < $cutoffTime) {
            unset($rateLimitData[$key]);
        }
    }
    file_put_contents($rateLimitFile, json_encode($rateLimitData));
    
    echo json_encode([
        'success' => true,
        'count' => $newCount,
        'resourceId' => $resourceId
    ]);
    
} elseif ($method === 'GET') {
    // 获取所有计数
    $counts = json_decode(file_get_contents($dataFile), true);
    
    // 按计数排序
    arsort($counts);
    
    echo json_encode([
        'success' => true,
        'counts' => $counts,
        'timestamp' => $timestamp
    ]);
    
} elseif ($method === 'DELETE') {
    // 重置计数（需要管理员权限）
    $adminKey = $input['adminKey'] ?? null;
    
    if ($adminKey !== 'admin_secret_key_2026') {
        http_response_code(403);
        echo json_encode(['error' => 'Unauthorized', 'success' => false]);
        exit;
    }
    
    $counts = array_fill_keys(array_keys(json_decode(file_get_contents($dataFile), true)), 0);
    file_put_contents($dataFile, json_encode($counts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    echo json_encode(['success' => true, 'message' => 'Counts reset']);
    
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed', 'success' => false]);
}
