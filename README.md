# Repro Bug
Deno.run hangs when a child process returns **more than 8200 characters** and the **stdout == piped**.

# Repro:
- git clone `https://github.com/CarlosOnline/deno-bugs.git`
- cd deno-bugs
- `deno.exe run -A repro-run-hang.ts`

# Test code:
```
"a".repeat(parseInt(Deno.args[0]))
```

# Repro code:
```
/**
 * Execute Deno.run with file that generates specified length of characters.
 * @param length
 */
async function Run(length: number) {
  console.log(`Running with length ${length}`);

  const p = Deno.run({
    cmd: [
      "deno",
      "run",
      "--allow-read",
      ".\\write-output.ts",
      length.toString(),
    ],
    stdout: "piped",
    stderr: "piped",
  });

  const { code } = await p.status();
  const rawOutput = await p.output();
  console.log(`Exit code: ${code} length: ${rawOutput.length}`);
}

/**
 * Loop through different lengths until hangs or succeeds.
 */
for (let idx = 100; idx < 10000; idx += 100) {
  await Run(idx);
}

console.log("Success");
```
