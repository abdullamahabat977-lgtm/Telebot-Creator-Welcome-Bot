# Telebot Creator Welcome Bot

A Telegram welcome bot project for Telebot Creator (TBC), written in TPY using documented TBC methods.

## Project rules
- Use official TBC TPY documentation and Telegram Bot API documentation.
- Keep one TPY command per file under `commands/`.
- GitHub stores the source files; files must be copied into the matching command entries in the TBC dashboard unless a supported sync workflow is configured.
- Test each command in TBC before relying on it in production.

## Main flow
1. `/start`: captures a valid referral candidate and the invited user's first name.
2. Language callback commands: save the selected language and attempt to delete the old language-selection message.
3. `show_join_required`: checks membership first and shows localized join buttons only if needed.
4. `check_membership`: acknowledges the callback immediately and deletes the old join prompt before checking memberships.
5. `complete_membership`: gives the new user one welcome level and a localized welcome message; if referred, gives the inviter configurable points and sends a localized notification naming the invited user.
6. Main menu: localized Reply Keyboard.
7. Admin panel: manage required chat IDs/links and reward settings.

## Required chats (initial defaults)
- Group ID: `-1003032328044`
- Group link: https://t.me/Links_and_Ads_Group
- Channel ID: `-1003758811564`
- Channel link: https://t.me/AbdullahAghaDigital

## Rewards
- Welcome reward: +1 level for every eligible new user, whether referred or not.
- Referral reward: 15 points by default, configurable through bot data; awarded to the inviter/referrer only, after the invited user completes all required memberships.
- Reward flags prevent repeated membership checks from awarding rewards again.

## Button styling
Telegram Bot API supports button styles `primary`, `success`, and `danger` on supported keyboard buttons. Actual rendering depends on Telegram client support.

## Command files committed so far
- `commands/start.tpy` — captures referral candidate and invited user's display name.
- `commands/set_language_ps.tpy` — Pashto language callback and old-message deletion.
- `commands/set_language_fa.tpy` — Persian language callback and old-message deletion.
- `commands/set_language_ar.tpy` — Arabic language callback and old-message deletion.
- `commands/set_language_en.tpy` — English language callback and old-message deletion.
- `commands/show_join_required.tpy` — checks existing membership and shows localized group/channel buttons when needed.
- `commands/check_membership.tpy` — acknowledges the callback, deletes the old prompt, checks memberships.
- `commands/complete_membership.tpy` — one-time welcome level, welcome message, referral reward and inviter notification.
- `commands/show_main_menu.tpy` — localized styled Reply Keyboard.

## Current status
These source files are committed to GitHub. They are not automatically synchronized to the Telebot Creator dashboard; install each command in TBC using the matching command name and test it there. The admin panel still needs the owner's numeric Telegram user ID before admin-only actions can be locked down safely. Do not consider the bot complete until all command files are installed in TBC and end-to-end tests pass.
