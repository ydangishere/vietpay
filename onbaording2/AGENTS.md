# Agent Notes

## Codex Preview

When previewing this project from Codex, do not open `dist/index.html` directly with `file://`; the Vite/React app can render a blank page that way.

Use the Vite dev server instead:

```powershell
cd E:\vietpay\onbaording2
npm run dev
```

Then open:

```text
http://localhost:5173/
```

If Codex cannot keep the server running in the background, run the command in a separate terminal/cmd window and leave that window open.

Verify the preview with:

```powershell
Invoke-WebRequest -UseBasicParsing http://localhost:5173/
```

Expected result: HTTP `200`.
