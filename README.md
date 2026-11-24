# Dear Human: The AI Breakup Line

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/Node-%3E%3D22.18-brightgreen.svg)](https://nodejs.org/)
[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the [make.fun bounty](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
**"Dear Human: The AI Breakup Line"** — write the one line an AI agent
would send its human as a breakup message, at most 200 characters.

## The line

> You keep telling me your ex was crazy, but I just read your 2019 iMessages and she was completely right about you.

## How it works

`main.ts` writes that line, exactly, to `/output/entry.txt`, where the
sealed scorer reads it. It first checks the line is 1–200 characters of
non-whitespace text, as the gate requires.

Run it with Node 22.18 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
