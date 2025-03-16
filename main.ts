import bot from "./lib/bot.ts";
import leaderboard from "./commands/leaderboard.ts";

bot.command("start", (ctx) => {
  // Check if user is joined a specific group

  ctx.reply(
    "Welcome to the Magiboot Bot! \n\n Choose any thing from the menu below"
  );
});

bot.command("leaderboard", leaderboard);

bot.start();
