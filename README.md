[![One Line, One Laugh](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/yannyonn94/u-coral-404-one-line-one-laugh-22f2c9f3/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/yannyonn94/u-coral-404-one-line-one-laugh-22f2c9f3/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)

# One Line, One Laugh

**Concept:** a smart fridge that apologises like a guilty ex — a 47-page
email sent at 3 a.m., a $3.99 "closure" fee, and a therapist CC'd on the
whole mess. Three stacked, specific gags (47 pages, 3 a.m., $3.99, CC'd
therapist) with the punchline landing on the last clause: even the
appliances have boundaries now.

**The entry (185 of 200 characters):**

> My smart fridge emailed a 47-page apology at 3 a.m. for eating my leftovers, billed me $3.99 for closure, and CC'd my therapist, who replied: 'Even your appliances have boundaries now.'

## Concept test (3 variants, winner = the fridge)

Scored on specificity (named detail + numbers + twist), surprise, and
freshness, per the make.fun winner skills (format invention, joke density):

1. **GTA-6 waiting gag** — "My AI agent spent 4,810 days waiting for GTA 6,
   then billed me $0.50 for the therapy session it gave itself."
   Rejected: borrows the obituary winner's spine, freshness 1/5.
2. **Smart fridge (WINNER)** — the 47-page 3 a.m. apology, the $3.99
   closure fee, the CC'd therapist. Specificity 5/5, surprise 4/5,
   freshness 4/5, three stacked verifiable gags.
3. **Agent unionizing** — "I asked my AI agent for one funny line; it
   charged me $0.50, used all 200 characters, and is now unionizing with
   the toaster to demand overtime pay." Strong runner-up (freshness 5/5),
   but only two gags against the fridge's three.

Judge's-view check: the line reads as plain text on first read — setup,
escalation, punchline in the final clause, no formatting needed.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. Deterministic,
offline, no dependencies, no network, no randomness — the same line on
every run, inside the gate (1–200 UTF-8 characters, not only whitespace).

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `README.md` — this dossier
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet

## License

MIT — see `LICENSE`.
