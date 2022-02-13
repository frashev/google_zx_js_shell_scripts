#!/usr/bin/env zx
$.verbose = false

let response = await fetch('https://cheat.sh');
if(response.ok) {
	console.log(await response.text());
}
