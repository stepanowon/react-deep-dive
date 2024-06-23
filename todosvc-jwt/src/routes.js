import { createUser, findUser , getTodoList, addTodo, deleteTodo } from './tododao';
import { createToken, computeHMAC, createRefreshToken, checkRefreshToken } from './authutil';

export default (app) => { 

    app.get('/', (req, res) => {
        console.log("### GET /");
        res.render('index', {
             title: 'jwt 인증 테스트 서비스 v1.0',
             subtitle : '(node.js + express + lokijs + jwt)'
        })
    });

    app.post('/users/create', (req, res)=> {
        console.log("### POST /users/create");
        let { userid, password, username } = req.body;
        let hashedPassword = computeHMAC(userid, password);
        const result = createUser({ userid, username, password:hashedPassword });
        res.json(result);
    })

    app.post('/login', (req,res)=> {
        console.log("### POST /login")
        let { userid, password } = req.body;
        let hashedPassword = computeHMAC(userid, password);
        const doc = findUser({ userid, password:hashedPassword });
        if (doc && doc.status === "success") {
            let access_token = createToken({ userid, role:doc.role })
            let refresh_token = createRefreshToken({ userid, type:"refresh_token", role:doc.role })
            return res.json({ status:"success", message:"로그인 성공", access_token, refresh_token })
        } else {
            return res.json(doc)
        }
    })

    app.post('/token', (req, res)=>{
        console.log("### POST /token")
        let { refresh_token } = req.body;
        if (req.cookies["refresh_token"]) {
            refresh_token = req.cookies["refresh_token"];
        }

        if (!refresh_token) {
            return res.json({ 
                status:"fail", 
                message:"refresh_token이 존재하지 않습니다. Request body 또는 http only cookie로 전달하세요" 
            })
        } else {
            checkRefreshToken({ refresh_token, callback: (jwtresult) => {
                if (jwtresult.status === "success") {
                    let {userid, role, type } = jwtresult.users;
                    let access_token = createToken({ userid, role })
                    let refresh_token = createRefreshToken({ userid, type, role })
                    return res.json({ status:"success", message:"토큰 갱신 성공", access_token, refresh_token })
                } else {
                    return res.json(jwtresult);
                }
            }})
        }
    })

    app.get('/todolist',  (req,res)=> {
        console.log("### GET /todolist : " + req.users.userid);
        let userid = req.users.userid;
        let response = getTodoList({ userid });
        res.json(response);
    })

    app.post('/todolist', (req,res) => {
        console.log("### POST /todolist : " + req.users.userid);
        let userid = req.users.userid;
        let { todo, desc } = req.body;
        let response = addTodo({ userid, todo, desc })
        res.json(response);
    })

    app.delete('/todolist/:id', (req, res)=> {
        console.log("### PUT /todolist/:id : " + req.users.userid);
        let userid = req.users.userid;
        let id = parseInt(req.params.id, 10);
        let response = deleteTodo({ userid, id });
        res.json(response);
    })
    
    //----에러 처리 시작
    app.get('*', (req, res, next) => {
        var err = new Error();
        err.status = 404;
        next(err);
    });

    app.use((err, req, res, next) => {
        console.log("### ERROR!!")
        if(err.status === 404) {
            res.status(404).json({ status:404, message:"잘못된 URI 요청"});
        } else if (err.status === 500) {
            res.status(500).json({ status:500, message:"내부 서버 오류"});
        } else {
            res.status(err.status).jsonp({ status:"fail", message:err.message });
        }
    });


}