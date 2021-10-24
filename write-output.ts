if (!Deno.args.length) {
  console.error("Missing arguments. Please pass number of characters to emit");
  Deno.exit(-1);
}

const length = parseInt(Deno.args[0]);
if (!length) {
  console.error(
    "Please pass valid number of characters to emit greater than 0"
  );
  Deno.exit(-1);
}

const output = "a".repeat(length);
console.log(output);
