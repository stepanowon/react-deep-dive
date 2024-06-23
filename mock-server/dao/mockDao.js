let loki = require("lokijs");

let members, songs;
let db = new loki();

members = db.getCollection("members");
songs = db.getCollection("songs");
if (members === null) {
    members = db.addCollection("members", { indices: ["id"] });
    members.insert({ "id": 1001, "name": "Maggie Adams", "photo": "photos/Mag.png" });
    members.insert({ "id": 1002,"name": "Sammie Purcell", "photo": "photos/Sam.png" });
    members.insert({ "id": 1003,"name": "Tim Purcell", "photo": "photos/Tim.png" });
    members.insert({ "id": 1004,"name": "Scott King", "photo": "photos/King.png" });
    members.insert({ "id": 1005,"name": "Johnny Pike", "photo": "photos/JPike.jpg" });
    members.insert({ "id": 1006,"name": "Toby Ruckert", "photo": "photos/Toby.jpg" });
}

if (songs === null) {
    songs = db.addCollection("songs", { indices: ["id"] });
    songs.insert({ "id": 1, "title": "Fallin' for you", "musician": "Colbie callet", "youtube_link": "PABUl_EX_hw" });
    songs.insert({ "id": 2, "title": "Can't hurry love", "musician": "The supremes", "youtube_link": "EJDPhjQft04" });
    songs.insert({ "id": 3, "title": "Landslide", "musician": "Dixie chicks", "youtube_link": "V2N7gYom9-A" });
    songs.insert({ "id": 4, "title": "Can't let go", "musician": "Linda ronstadt", "youtube_link": "P-EpGKXmoe4" });
    songs.insert({ "id": 5, "title": "Doctor my eyes", "musician": "Jackson Browne", "youtube_link": "7JlFKS_1oZk" });
    songs.insert({ "id": 6, "title": "We gotta get you a woman", "musician": "Todd Rundgren", "youtube_link": "EyUjbBViAGE" });
    songs.insert({ "id": 7, "title": "Hip to my heart", "musician": "Band Perry", "youtube_link": "vpLCFnD9LFo" });
    songs.insert({ "id": 8, "title": "Rolling in the deep", "musician": "Adele", "youtube_link": "EvK8pDK6IQU" });
}

module.exports = {
    getSongs: () => {
        try {
          let result = [];
          let queryResult = songs.chain().find().simplesort("id").data();
      
          for (var i = 0; i < queryResult.length; i++) {
            let item = { ...queryResult[i] };
            delete item.meta;
            delete item["$loki"];
            result.push(item);
          }
          return result;
        } catch (ex) {
          return { status: "fail", message: "조회 실패 : " + ex };
        }
    },
    getSongOne: ({ id }) => {
        try {
          id = parseInt(id, 10);
          let one = songs.findOne({ id });
          let item = { ...one };
          delete item.meta;
          delete item["$loki"];
          return item;
        } catch (ex) {
          return { status: "fail", message: "조회 실패 : " + ex };
        }
    },
    addSong: ({ title, musician, youtube_link }) => {
        try {
          if (title === null || title.trim() === "" || youtube_link === null || youtube_link.trim() === "") {
            throw new Error("곡 타이틀과 유튜브링크를 입력하셔야 합니다.");
          }
          let item = { id: new Date().getTime(), title, musician, youtube_link };
          songs.insert(item);
          return { status: "success", message: "곡 추가 성공", item : { id:item.id, title:item.title, musician: item.musician, youtube_link: item.youtube_link } };
        } catch (ex) {
          return { status: "fail", message: "곡 추가 실패 : " + ex };
        }
    },
    deleteSong: ({ id }) => {
        try {
          id = parseInt(id, 10);
          let one = songs.findOne({ id });
          if (one !== null) {
            songs.remove(one);
            return { status: "success", message: "곡 삭제 성공", item: { id: one.id, title: one.title } };
          } else {
            return { status: "fail", message: "곡 삭제 실패 : 삭제하려는 곡이 존재하지 않음" };
          }
        } catch (ex) {
          return { status: "fail", message: "삭제 실패 : " + ex };
        }
    },
    updateSong: ({ id, title, musician, youtube_link }) => {
        try {
          id = parseInt(id, 10);
          let one = songs.findOne({ id });
          if (one !== null) {
	        if (title === null || title.trim() === "" || youtube_link === null || youtube_link.trim() === "") {
              throw new Error("곡 타이틀과 유튜브링크를 입력하셔야 합니다.");
            }
            one.title = title;
            one.musician = musician;
            one.youtube_link = youtube_link;
            songs.update(one);
            return { status: "success", message: "곡 변경 성공", item: { id: one.id, title: one.title, musician: one.musician, youtube_link: one.youtube_link } };
          } else {
            return { status: "fail", message: "곡 변경 실패 : 변경하려는 곡이 존재하지 않음" };
          }
        } catch (ex) {
          return { status: "fail", message: "곡 변경 실패 : " + ex };
        }
    },
    getMembers: () => {
        try {
          let result = [];
          let queryResult = members.chain().find().simplesort("id").data();
      
          for (var i = 0; i < queryResult.length; i++) {
            let item = { ...queryResult[i] };
            delete item.meta;
            delete item["$loki"];
            result.push(item);
          }
          return result;
        } catch (ex) {
          return { status: "fail", message: "멤버 조회 실패 : " + ex };
        }
    },
}

