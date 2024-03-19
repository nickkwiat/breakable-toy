const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/cookbook-review-site-development",
      test: "postgres://postgres:postgres@localhost:5432/cookbook-review-site-development_test",
      e2e: "postgres://postgres:postgres@localhost:5432/cookbook-review-site-development_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
