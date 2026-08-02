/*
# Add increment_visit_counter RPC

1. Functions
- `increment_visit_counter()` — atomically increments the single visit counter row and returns the new count. Uses UPDATE ... RETURNING so it's safe across concurrent requests.
2. Security
- SECURITY DEFINER so the anon role can call it (the portfolio is a no-auth public site).
*/

CREATE OR REPLACE FUNCTION increment_visit_counter()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count bigint;
BEGIN
  UPDATE portfolio_visits
    SET count = count + 1, updated_at = now()
    WHERE id = 1
    RETURNING count INTO new_count;
  RETURN new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION increment_visit_counter() TO anon, authenticated;
