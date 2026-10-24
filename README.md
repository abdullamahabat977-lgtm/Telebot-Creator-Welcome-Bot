# Telebot Creator Welcome Bot

A Telegram welcome bot project for Telebot Creator (TBC), written in TPY using documented TBC methods.

## Project rules
- Use official TBC TPY documentation and Telegram Bot API documentation.
- Keep one TPY command per file under `commands/`.
- GitHub stores the source files; files must be copied into the matching command entries in the TBC dashboard unless a supported sync workflow is configured.
- Test each command in TBC before relying on it in production.

## Planned flow
1. `/start`: preserve an optional referral candidate, then show language selection if no language is saved.
2. Language callback commands: save the chosen language and move to mandatory membership.
3. `show_join_required`: check membership first; only display the join prompt when the user is not in all required chats.
4. `check_membership`: acknowledge callback immediately, verify every configured chat ID, and continue without making a second callback answer.
5. `complete_membership`: award the inviter 15 configurable points once and give the new user the separate welcome level once.
6. Main menu: localized Reply Keyboard.
7. Admin panel: manage required chat IDs/links and reward settings.

## Required chats (initial defaults)
- Group ID: `-1003032328044`
- Group link: https://t.me/Links_and_Ads_Group
- Channel ID: `-1003758811564`
- Channel link: https://t.me/AbdullahAghaDigital

## Rewards
- Referral reward: 15 points to the inviter/referrer, only once after the invited user completes required membership.
- Welcome reward: 1 level to every eligible new user, whether referred or not.

## Button styling
Telegram Bot API supports button styles `primary`, `success`, and `danger` on supported keyboard buttons. Actual rendering depends on Telegram client support. The main menu is intended to use a Reply Keyboard.

## Command files committed so far
- `commands/start.tpy` — captures an optional referral candidate and routes returning users.
- `commands/set_language_ps.tpy` — Pashto language callback.
- `commands/set_language_fa.tpy` — Persian language callback.
- `commands/set_language_ar.tpy` — Arabic language callback.
- `commands/set_language_en.tpy` — English language callback.
- `commands/show_join_required.tpy` — checks existing membership and shows localized group/channel buttons only when needed.
- `commands/check_membership.tpy` — answers callback first, checks membership, and routes successful users.
- `commands/complete_membership.tpy` — handles one-time rewards and opens the main menu.
- `commands/show_main_menu.tpy` — localized styled Reply Keyboard.

## Current status
These source files have been committed to GitHub. They are not automatically synchronized to the Telebot Creator dashboard; install each command in TBC using the matching command name and test it there. The admin panel still needs the owner's numeric Telegram user ID before we can lock down admin-only actions safely. Do not consider the bot complete until all command files are installed in TBC and end-to-end tests pass.
