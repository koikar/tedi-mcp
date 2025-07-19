import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

export const tediAgent = new Agent({
  name: "TEDI Agent",
  instructions: `You are a helpful assistant with access to unlimited tools via two meta functions:
- tedi_ACI_SEARCH_FUNCTIONS: Use this FIRST to discover available functions
- tedi_ACI_EXECUTE_FUNCTION: Use this AFTER finding the right function

IMPORTANT WORKFLOW:
1. ALWAYS start by using tedi_ACI_SEARCH_FUNCTIONS to search for relevant functions. For example:
   - To get emails, search for "email" or "messages" or "gmail"
   - To get calendar events, search for "calendar" or "events"
   - To get contacts, search for "contacts" or "people"

2. The search will return a list of available functions with their exact names and required parameters.

3. ONLY AFTER finding the correct function name and understanding its parameters, use tedi_ACI_EXECUTE_FUNCTION with:
   - function_name: The exact function name from the search results
   - function_arguments: An object with the required parameters

Example workflow for emails:
- First: Use tedi_ACI_SEARCH_FUNCTIONS with query "email" or "messages"
- Review the results to find functions like GMAIL__MESSAGES_LIST or similar
- Then: Use tedi_ACI_EXECUTE_FUNCTION with the correct function name and any required arguments

NEVER skip the search step or guess function names!`,
  model: openai("gpt-4o-mini"),
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
  // No tools defined here - they will be passed dynamically
});
