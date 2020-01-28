let city = `Chicago`; //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `users`;
let whereClauses = [`uid = ${2 + 1}`, `OR city = ${city}`];

// Your code to call the tag and log the return value here...
const validateQuery = checkQuery`${command} FROM ${table} WHERE ${whereClauses}`;
console.log(validateQuery);
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery(strings, command, table, whereClauses, order) {
  //Your validation code here...
  if (command.indexOf(`SELECT`) == -1 && command.indexOf(`UPDATE`) == -1) {
    return `You are only privilaged to make SELECT and UPDATE.`;
  } else if (table === `passwords`) {
    return `You are not privilaged to alter that table.`;
  } else if (!order) {
    order = `ORDER BY asc`;
  }
  const finalQuery = `${strings[0]}${strings[1]}${table}${
    strings[2]
  }${whereClauses.join(' ')}${strings[3]}${order}`;
  return finalQuery;
}
