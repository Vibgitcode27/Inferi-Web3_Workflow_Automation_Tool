import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed for AvailableActions and AvailableTriggers...");

  // Seed Available Triggers
  const webhookTrigger = await prisma.availableTrigger.upsert({
    where: { appId: "webhook" },
    update: {
      name: "Webhook",
      icon: "webhook",
      metadata: {
        events: [
          {
            id: "webhook_called",
            name: "Webhook Called",
            description: "Fires when a webhook is triggered",
          },
        ],
      },
    },
    create: {
      appId: "webhook",
      name: "Webhook",
      icon: "webhook",
      metadata: {
        events: [
          {
            id: "webhook_called",
            name: "Webhook Called",
            description: "Fires when a webhook is triggered",
          },
        ],
      },
    },
  });

  console.log("✓ Webhook trigger seeded");

  // Seed Available Actions - Google Sheets
  const sheetsAction = await prisma.availableActions.upsert({
    where: { appId: "sheets" },
    update: {
      name: "Google Sheets",
      icon: "googlesheets",
      metadata: {
        actions: [
          {
            id: "create_row",
            name: "Create Row",
            description: "Creates a new row in a specified sheet",
          },
          {
            id: "update_row",
            name: "Update Row",
            description: "Updates an existing row in a sheet",
          },
          {
            id: "lookup_row",
            name: "Lookup Row",
            description: "Finds a row based on column values",
          },
          {
            id: "delete_row",
            name: "Delete Row",
            description: "Deletes a row from a sheet",
          },
        ],
      },
    },
    create: {
      appId: "sheets",
      name: "Google Sheets",
      icon: "googlesheets",
      metadata: {
        actions: [
          {
            id: "create_row",
            name: "Create Row",
            description: "Creates a new row in a specified sheet",
          },
          {
            id: "update_row",
            name: "Update Row",
            description: "Updates an existing row in a sheet",
          },
          {
            id: "lookup_row",
            name: "Lookup Row",
            description: "Finds a row based on column values",
          },
          {
            id: "delete_row",
            name: "Delete Row",
            description: "Deletes a row from a sheet",
          },
        ],
      },
    },
  });

  console.log("✓ Google Sheets actions seeded");

  // Seed Available Actions - Slack
  const slackAction = await prisma.availableActions.upsert({
    where: { appId: "slack" },
    update: {
      name: "Slack",
      icon: "slack",
      metadata: {
        actions: [
          {
            id: "send_message",
            name: "Send Message",
            description: "Sends a message to a channel or user",
          },
          {
            id: "send_dm",
            name: "Send Direct Message",
            description: "Sends a direct message to a user",
          },
          {
            id: "create_channel",
            name: "Create Channel",
            description: "Creates a new channel",
          },
          {
            id: "update_message",
            name: "Update Message",
            description: "Updates an existing message",
          },
        ],
      },
    },
    create: {
      appId: "slack",
      name: "Slack",
      icon: "slack",
      metadata: {
        actions: [
          {
            id: "send_message",
            name: "Send Message",
            description: "Sends a message to a channel or user",
          },
          {
            id: "send_dm",
            name: "Send Direct Message",
            description: "Sends a direct message to a user",
          },
          {
            id: "create_channel",
            name: "Create Channel",
            description: "Creates a new channel",
          },
          {
            id: "update_message",
            name: "Update Message",
            description: "Updates an existing message",
          },
        ],
      },
    },
  });

  console.log("✓ Slack actions seeded");

  // Seed Available Actions - Notion
  const notionAction = await prisma.availableActions.upsert({
    where: { appId: "notion" },
    update: {
      name: "Notion",
      icon: "notion",
      metadata: {
        actions: [
          {
            id: "create_page",
            name: "Create Page",
            description: "Creates a new page in a database or workspace",
          },
          {
            id: "update_page",
            name: "Update Page",
            description: "Updates an existing page",
          },
          {
            id: "create_database_item",
            name: "Create Database Item",
            description: "Adds a new item to a database",
          },
          {
            id: "update_database_item",
            name: "Update Database Item",
            description: "Updates a database item",
          },
        ],
      },
    },
    create: {
      appId: "notion",
      name: "Notion",
      icon: "notion",
      metadata: {
        actions: [
          {
            id: "create_page",
            name: "Create Page",
            description: "Creates a new page in a database or workspace",
          },
          {
            id: "update_page",
            name: "Update Page",
            description: "Updates an existing page",
          },
          {
            id: "create_database_item",
            name: "Create Database Item",
            description: "Adds a new item to a database",
          },
          {
            id: "update_database_item",
            name: "Update Database Item",
            description: "Updates a database item",
          },
        ],
      },
    },
  });

  console.log("✓ Notion actions seeded");

  // Seed Available Actions - GitHub
  const githubAction = await prisma.availableActions.upsert({
    where: { appId: "github" },
    update: {
      name: "Github",
      icon: "github",
      metadata: {
        actions: [
          {
            id: "create_issue",
            name: "Create Issue",
            description: "Creates a new issue in a repository",
          },
          {
            id: "create_pull_request",
            name: "Create Pull Request",
            description: "Creates a new pull request",
          },
          {
            id: "add_comment",
            name: "Add Comment",
            description: "Adds a comment to an issue or PR",
          },
          {
            id: "update_issue",
            name: "Update Issue",
            description: "Updates an existing issue",
          },
        ],
      },
    },
    create: {
      appId: "github",
      name: "Github",
      icon: "github",
      metadata: {
        actions: [
          {
            id: "create_issue",
            name: "Create Issue",
            description: "Creates a new issue in a repository",
          },
          {
            id: "create_pull_request",
            name: "Create Pull Request",
            description: "Creates a new pull request",
          },
          {
            id: "add_comment",
            name: "Add Comment",
            description: "Adds a comment to an issue or PR",
          },
          {
            id: "update_issue",
            name: "Update Issue",
            description: "Updates an existing issue",
          },
        ],
      },
    },
  });

  console.log("✓ GitHub actions seeded");

  console.log("\n🎉 Seed completed successfully!");
  console.log("\nSeeded:");
  console.log("- 1 Available Trigger (Webhook)");
  console.log("- 4 Available Actions (Google Sheets, Slack, Notion, GitHub)");
}

main()
  .catch((e) => {
    console.error("❌ Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
