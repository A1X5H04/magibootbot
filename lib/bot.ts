import { Bot } from "grammy";

// Create a singleton instance of the `Bot` class and pass your bot token to it.

const bot = new Bot(Deno.env.get("TG_BOT_TOKEN")!);

export default bot;
