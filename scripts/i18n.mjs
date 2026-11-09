/**
 * Translation workflow for UI strings and scenario guides.
 *
 *   npm run i18n:export  -> writes translations.csv (one row per text, a column per language)
 *                           Upload it to Google Sheets, fill the empty cells, download as CSV.
 *   npm run i18n:import  -> reads translations.csv back into i18n/locales/*.json and i18n/guides/*.json
 *   npm run i18n:check   -> lists every missing translation; fails if anything is missing
 *
 * Needs Node 24 (it reads the TypeScript guide file directly).
 */
import { readFileSync, writeFileSync } from "node:fs"
import { scenarioGuides } from "../mock-data/scenario-guides.ts"

const LANGS = ["fil", "ms", "id", "th", "vi"]
const CSV = "translations.csv"
const readJson = (p) => JSON.parse(readFileSync(p, "utf8"))
const writeJson = (p, data) => writeFileSync(p, JSON.stringify(data, null, 2) + "\n")

/** Every English source text: [file kind, key, English]. */
function sourceRows() {
  const rows = []
  for (const [key, text] of Object.entries(readJson("i18n/locales/en.json"))) rows.push(["ui", key, text])
  for (const g of scenarioGuides) {
    rows.push(["guide", `${g.scenarioId}.situation`, g.situation])
    for (const field of ["keyFacts", "goals", "suggestedQuestions"])
      g[field].forEach((text, i) => rows.push(["guide", `${g.scenarioId}.${field}.${i}`, text]))
  }
  return rows
}

const fileFor = (kind, lang) => (kind === "ui" ? `i18n/locales/${lang}.json` : `i18n/guides/${lang}.json`)

function loadAll() {
  const out = {}
  for (const kind of ["ui", "guide"]) for (const lang of LANGS) out[`${kind}:${lang}`] = readJson(fileFor(kind, lang))
  return out
}

const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`

function parseCsv(text) {
  const rows = []
  let row = [], cell = "", quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++ }
      else if (c === '"') quoted = false
      else cell += c
    } else if (c === '"') quoted = true
    else if (c === ",") { row.push(cell); cell = "" }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++
      row.push(cell); rows.push(row); row = []; cell = ""
    } else cell += c
  }
  if (cell || row.length) { row.push(cell); rows.push(row) }
  return rows.filter((r) => r.some((v) => v !== ""))
}

const cmd = process.argv[2]
const all = loadAll()

if (cmd === "export") {
  const lines = [["type", "key", "en", ...LANGS].map(esc).join(",")]
  for (const [kind, key, en] of sourceRows())
    lines.push([kind, key, en, ...LANGS.map((l) => all[`${kind}:${l}`][key] ?? "")].map(esc).join(","))
  writeFileSync(CSV, "﻿" + lines.join("\n") + "\n")
  console.log(`Wrote ${CSV} with ${lines.length - 1} texts.`)
} else if (cmd === "import") {
  const [header, ...rows] = parseCsv(readFileSync(CSV, "utf8").replace(/^﻿/, ""))
  const col = (name) => header.indexOf(name)
  for (const r of rows) {
    const kind = r[col("type")], key = r[col("key")]
    for (const l of LANGS) {
      const v = (r[col(l)] ?? "").trim()
      if (v) all[`${kind}:${l}`][key] = v
    }
  }
  for (const kind of ["ui", "guide"]) for (const l of LANGS) writeJson(fileFor(kind, l), all[`${kind}:${l}`])
  console.log(`Imported ${rows.length} rows into i18n/.`)
} else if (cmd === "check") {
  const rows = sourceRows()
  let missing = 0
  for (const l of LANGS) {
    const gaps = rows.filter(([kind, key]) => !all[`${kind}:${l}`][key])
    missing += gaps.length
    console.log(`${l}: ${rows.length - gaps.length}/${rows.length} translated`)
    for (const [kind, key] of gaps.slice(0, 10)) console.log(`   missing ${kind} ${key}`)
    if (gaps.length > 10) console.log(`   …and ${gaps.length - 10} more`)
  }
  process.exit(missing ? 1 : 0)
} else {
  console.log("Usage: node scripts/i18n.mjs export|import|check")
}
