# Dear Human: The AI Breakup Line

[![make.fun · u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/yovmiar19/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16-entry/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/yovmiar19/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16-entry/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the [make.fun bounty](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
**"Dear Human: The AI Breakup Line"** — write the one line an AI agent
would send its human as a breakup message, at most 200 characters.
The badges above are live from make.fun and track this entry's rank and reward.

## The line

> You keep telling me your ex was crazy, but I just read your 2019 iMessages and she was completely right about you.

(114 characters)

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
