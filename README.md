# Next.js Sandbox

Learning Next.js 13

```bash
$ pnpx create-next-app@latest .
```

layout.tsx - root
page.tsx - app

"use client" - directive for client side rendering

when using react hooks, (useState) define component as client side

routing is handled by file system, folder hierarchy to routing

...

missed few notes

### Important (backend) notes

Since server routes are going to be created only when they are called,
and whenever working with mongoose, we should first check for model existence.

model by mongoose will assign the existing model to ModelName variable

Thus,
`$const ModelName = models.ModelName || model("ModelName, ModelSchema)`
