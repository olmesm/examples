const { faast } = require("faastjs");
const funcs = require("./functions");

async function main() {
    const m = await faast("local", funcs, "./functions");
    try {
        const result = await m.functions.hello("world");
        console.log(result);
    } finally {
        await m.cleanup();
    }
}

main();