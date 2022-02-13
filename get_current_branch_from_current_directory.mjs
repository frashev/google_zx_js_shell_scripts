#!/usr/bin/env zx
$.verbose = false

const branch = await $`git branch --show-current`
console.log(`Current branch: ${branch}`)

console.log(`Current branch: ${chalk
                                .bgYellow
                                .red
                                .bold(branch)}`)

