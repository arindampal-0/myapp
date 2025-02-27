import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", async function (request, reply) {
    return { msg: "Hello, World!" };
});

fastify.get("/health", async function (request, reply) {
    return { health: "ok" };
});

async function main() {
    try {
        fastify.listen(
            { port: 3000, host: "0.0.0.0" },
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
