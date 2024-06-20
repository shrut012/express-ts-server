import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;
const dbPath = path.join(__dirname, "data", "db.json");

app.use(bodyParser.json());

interface Submission {
	name: string;
	email: string;
	phone: string;
	github_link: string;
	stopwatch_time: string;
}

const readDB = (): Submission[] => {
	if (!fs.existsSync(dbPath)) return [];
	const data = fs.readFileSync(dbPath, "utf-8");
	return JSON.parse(data);
};

const writeDB = (data: Submission[]) => {
	fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

app.get("/ping", (req, res) => {
	res.json(true);
});

app.post("/submit", (req, res) => {
	const { name, email, phone, github_link, stopwatch_time } = req.body;
	const submissions = readDB();
	submissions.push({ name, email, phone, github_link, stopwatch_time });
	writeDB(submissions);
	res.status(200).send("Submission saved");
});

app.get("/read", (req, res) => {
	const index = parseInt(req.query.index as string);
	const submissions = readDB();
	if (index >= 0 && index < submissions.length) {
		res.json(submissions[index]);
	} else {
		res.status(404).send("Submission not found");
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
