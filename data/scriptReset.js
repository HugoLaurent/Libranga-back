import { resetDatabase } from "./resetDb";
import { createTables } from "./createTable";
import { populateTables } from "./createPopulate";

async function resetAll() {
  await resetDatabase();
  await createTables();
  await populateTables();
}

resetAll();
