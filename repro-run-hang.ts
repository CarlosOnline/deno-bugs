const testFileUrl =
  "https://github.com/CarlosOnline/deno-bugs/blob/main/write-output.ts";
//const testFileUrl = "E:\\Samples\\deno-bugs\\write-output.ts";

async function Run(length: number) {
  console.log(`Running with length ${length}`);

  const p = Deno.run({
    cmd: ["deno", "run", "--allow-read", testFileUrl, length.toString()],
    stdout: "piped",
    stderr: "piped",
  });

  const { code } = await p.status();
  const rawOutput = await p.output();
  console.log(`Exit code: ${code} length: ${rawOutput.length}`);
}

for (let idx = 100; idx < 10000; idx += 100) {
  await Run(idx);
}
