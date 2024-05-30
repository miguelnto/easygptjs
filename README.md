# easygptjs

EasyGPT provides free access to text generation models, now in JavaScript!

> No API key required.

# Installation

```bash
npm install easygptjs
```

# Usage

```js
import EasyGPT35 from "easygptjs";

// No API key required.
const openai = new EasyGPT35();

async function main() {
  const chatCompletion = await openai.chat.completions.create("Hello world!");
  console.log(chatCompletion);
}

main();
```
