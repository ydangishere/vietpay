# Deploy to GitHub Pages

The app is already prepared for GitHub Pages:

- `vite.config.ts` uses a relative asset base.
- `.github/workflows/pages.yml` builds and deploys `dist`.
- `npm run build` passes locally.

Run these commands in a normal PowerShell window from this folder:

```powershell
cd E:\vietpay\onbaording2

git status
git add .
git commit -m "Prepare VietPay onboarding preview"

gh auth login -h github.com
gh repo create ydangishere/onbaording2 --public --source=. --remote=origin --push
```

After the push finishes, open:

```text
https://ydangishere.github.io/onbaording2/
```

If GitHub asks for Pages source, choose:

```text
Settings -> Pages -> Source: GitHub Actions
```

## If the link shows 404

Check these items in order:

```powershell
git log --oneline -1
git remote -v
gh auth status
```

If there is no commit or no remote, the site has not been uploaded yet.

If the repository name is `onboarding2` instead of `onbaording2`, use:

```text
https://ydangishere.github.io/onboarding2/
```

If the repo exists and code was pushed, wait for:

```text
GitHub repo -> Actions -> Deploy GitHub Pages -> green check
```
