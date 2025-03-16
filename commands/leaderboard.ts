import { Context, InlineKeyboard } from "grammy";
import bot from "../lib/bot.ts";

const inlineKeyboard = new InlineKeyboard()
  .text("Hello world", "hello")
  .text("Bye world", "bye");

async function leaderboard(ctx: Context) {
  const message = await ctx.reply("Fetching leaderboard data...");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Fetch leaderboard data

  await ctx.api.editMessageText(
    ctx.chat?.id as number,
    message.message_id,
    "Here is the leaderboard data:",
    {
      reply_markup: inlineKeyboard,
      parse_mode: "MarkdownV2",
    }
  );
}

export default leaderboard;
