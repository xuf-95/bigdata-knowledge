---
id: my-doc-id
title: Markdown page example
description: My document description
slug: /my-custom-url
---

## Markdown heading

Markdown text with [links](./hello.md)


## Links
Regular Markdown links are supported, using url paths or relative file paths.

Let's see how to [Create a page](/create-a-page).

Let's see how to [Create a page](./create-a-page.md).

## images
![Docusaurus logo](/img/docusaurus.png)

## Code Blocks

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions
:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::

