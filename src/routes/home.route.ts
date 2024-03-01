import { Hono } from "hono";

import { config } from "../lib/config";

export const home = new Hono().get("/", (c) =>
  c.html(`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>JioSaavn API</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/png" href="favicon.png" />
		
		<meta
			
			content="JioSaavn API by rajput-hemant@github"
		/>
		<script src="https://cdn.tailwindcss.com"></script>
	</head>
<h1>access denied</h1>

		
</html>`)
);
