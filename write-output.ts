const arg = Deno.args[0];
const length = parseInt(arg);
const output = "a".repeat(length);
console.log(output);
