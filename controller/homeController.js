const db = require("../db");

const homeController = {
  /**
   * Affiche la page d'accueil
   */
  getGetAllData: async (req, res) => {
    try {
      const result = await db.query(`
      SELECT
  u.*,
  a.*,
  c.*
FROM
  "user" AS u
JOIN
  "article" AS a ON u."user_id" = a."user_id"
JOIN
  "comment" AS c ON a."article_id" = c."article_id";
    `);
      res.json(result.rows);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send("Erreur lors de la récupération de la méthode getGetAllData");
    }
  },
};

module.exports = homeController;
