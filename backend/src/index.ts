import Fastify from "fastify";

const fastify = Fastify({ logger: true });
const PORT: number = Number(process.env.PORT) || 3000;

fastify.get("/", async function (request, reply) {
    return { msg: "Hello, World!" };
});

fastify.get("/health", async function (request, reply) {
    return { health: "ok" };
});

async function main() {
    try {
        fastify.listen(
            { port: PORT, host: "0.0.0.0" },
            function (err, address) {
                if (err) {
                    fastify.log.error(err);
                    return;
                }

                fastify.log.info(`Server listening on ${address}`);
            }
        );
    } catch (err) {
        fastify.log.error(err);
        return;
    }
}

main().catch((err) => console.error(err));
