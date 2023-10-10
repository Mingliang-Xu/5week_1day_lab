-- SELECT * FROM invoice;
-- SELECT COUNT(invoice_id), billing_country FROM invoice WHERE billing_country = 'USA' GROUP BY billing_country;
-- SELECT * FROM invoice ORDER BY total DESC LIMIT 1;
-- SELECT * FROM invoice ORDER BY total ASC LIMIT 1;
-- SELECT * FROM invoice WHERE total > 5;
-- SELECT billing_state, COUNT(*) FROM invoice WHERE billing_state IN('CA', 'TX', 'AZ') GROUP BY billing_state ORDER BY COUNT(*);
-- SELECT invoice_id, AVG(total) FROM invoice GROUP BY invoice_id ORDER BY invoice_id;
-- SELECT invoice_id, SUM(total) FROM invoice GROUP BY invoice_id ORDER BY SUM(total) DESC;
-- UPDATE invoice SET total = 24 WHERE invoice_id = 5;
-- SELECT * FROM invoice_line;
-- DELETE FROM invoice_line WHERE invoice_id = 1;
-- DELETE FROM invoice WHERE invoice_id = 1;






