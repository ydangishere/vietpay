# Codex Preview

Khi chạy project này trong Codex, không mở trực tiếp `dist/index.html` bằng `file://` vì Vite/React có thể bị trắng màn hình.

Cách đúng:

```powershell
cd E:\vietpay\onbaording2
npm run dev
```

Sau đó mở browser bằng link:

```text
http://localhost:5173/
```

Nếu Codex không giữ được server chạy nền, hãy chạy lệnh trên trong một terminal/cmd riêng và để cửa sổ đó mở. Khi server chạy đúng, kiểm tra bằng:

```powershell
Invoke-WebRequest -UseBasicParsing http://localhost:5173/
```

Kết quả đúng là HTTP `200`.
