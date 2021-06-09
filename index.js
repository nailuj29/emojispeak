#! /usr/bin/env node
import { writeSync } from "clipboardy";
import readline from "readline";

const emojis = {}

for (const letter of 'abcdefghijklmnopqrstuvwxyz') {
    emojis[letter] = `:regional_indicator_${letter}:`
}

emojis[' '] = ':blue_square:'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []

rl.prompt()

rl.on('line', (text) => {
    input.push(text)
})

rl.on('close', (_) => {
    const text = input.join('\n');

    let result = "";
    for (const letter of text.toLowerCase()) {
        result += emojis[letter] || letter
        result += " ";
    }

    writeSync(result)
})
