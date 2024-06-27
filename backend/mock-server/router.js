const express = require('express');
const router = express.Router();
const mockDao = require('./dao/mockDao');
const sleep = require("sleep-promise");

router.get("/", (req, res) => {
    console.log("### GET /");
    res.render("index", {
        title: "Mock API 서비스 v1.0",
        subtitle: "(node.js + express + lokijs)",
    });
});

router.get("/songs", (req, res) => {
    console.log("### GET /songs");
    const songs = mockDao.getSongs();
    res.json(songs);
});

router.get("/songs/:id", (req, res) => {
    console.log("### GET /songs/:id");
    const { id } = req.params;
    const song = mockDao.getSongOne({ id });
    res.json(song);
});
 
router.post("/songs", (req, res) => {
    console.log("### POST /songs");
    let { title, musician, youtube_link } = req.body;
    const result = mockDao.addSong({ title, musician, youtube_link });
    res.json(result);
});
 
router.put("/songs/:id", (req, res) => {
    console.log("### PUT /songs/:id");
    const { id } = req.params;
    let { title, musician, youtube_link } = req.body;
    const result = mockDao.updateSong({ id, title, musician, youtube_link });
    res.json(result);
});

router.delete("/songs/:id", (req, res) => {
    console.log("### DELETE /songs/:id");
    const { id } = req.params;
    const result = mockDao.deleteSong({ id });
    res.json(result);
});
 
router.get("/members", (req, res) => {
    console.log("### GET /members");
    const members = mockDao.getMembers();
    res.json(members);
});

router.get("/members_long", (req, res) => {
    sleep(2000).then(() => {
        console.log("### GET /members");
        const members = mockDao.getMembers();
        res.json(members);
    });
});

router.get("/songs_long", (req, res) => {
    sleep(2000).then(() => {
    	console.log("### GET /songs_long");
    	const songs = mockDao.getSongs();
    	res.json(songs);
    });
});

router.post("/songs_long", (req, res) => {
	sleep(2000).then(() => {
		console.log("### POST /songs_long");
		let { title, musician, youtube_link } = req.body;
		const result = mockDao.addSong({ title, musician, youtube_link });
		res.json(result);
	});
});
//----에러 처리 시작
router.get("*", (req, res, next) => {
    const err = new Error();
    err.status = 404;
    next(err);
});

router.use((err, req, res, next) => {
    console.log("### ERROR!!");
    if (err.status === 404) {
        res.status(404).json({ status: 404, message: "잘못된 URI 요청" });
    } else if (err.status === 500) {
        res.status(500).json({ status: 500, message: "내부 서버 오류" });
    } else {
        res.status(err.status).jsonp({ status: "fail", message: err.message });
    }
});
    
module.exports = router;
